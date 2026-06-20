import { NextRequest, NextResponse } from "next/server";

type ChatRole = "system" | "user" | "assistant";

interface IncomingMessage {
    role: ChatRole;
    text: string;
}

export async function POST(req: NextRequest) {
    const n8nWebhookUrl = process.env.N8N_WEBHOOK_URL || "https://harmony1.app.n8n.cloud/webhook/ee34a72c-ef99-453a-b5aa-59708b95452a";

    try {
        const body = (await req.json()) as {
            chatInput?: string;
            sessionId?: string;
            messages?: IncomingMessage[];
        };

        const chatInput = body.chatInput || "";
        const sessionId = body.sessionId || "";
        const messages = body.messages || [];

        // Forward to n8n webhook
        const response = await fetch(n8nWebhookUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                chatInput,
                sessionId,
                messages,
            }),
            signal: AbortSignal.timeout(45000), // n8n workflow can take some time if RAG/Agent is slow
        });

        if (!response.ok) {
            const errorText = await response.text();
            console.error(`n8n webhook returned status ${response.status}:`, errorText);
            throw new Error(`Webhook request failed with status ${response.status}`);
        }

        const data = await response.json();
        console.log("n8n Webhook raw response data:", data);

        // Normalize response data: n8n usually returns an array of items, or a single item, or nested json.
        const responseItem = Array.isArray(data) ? data[0] : data;

        // Try standard fields that could contain the response
        let text = "";
        if (responseItem) {
            if (typeof responseItem === "string") {
                text = responseItem;
            } else if (responseItem.json && typeof responseItem.json === "object") {
                // If it's wrapped in an outer "json" object (common in n8n list endpoints)
                const innerJson = responseItem.json;
                text = innerJson.output || innerJson.answer || innerJson.text || innerJson.response || "";
            } else {
                text = responseItem.output || responseItem.answer || responseItem.text || responseItem.response || "";
            }
        }

        text = String(text).trim();

        if (!text) {
            // If we couldn't find a text response, let's look at any string property or fallback
            console.warn("Could not find standard text fields in webhook response. Attempting fallback extraction.");
            if (responseItem && typeof responseItem === "object") {
                // Find any string key that is non-empty
                for (const value of Object.values(responseItem)) {
                    if (typeof value === "string" && value.trim().length > 0) {
                        text = value.trim();
                        break;
                    }
                }
            }
        }

        return NextResponse.json({
            text: text || "I received your message but got an empty response from the assistant.",
        });
    } catch (error) {
        console.error("Chat API error:", error);
        return NextResponse.json(
            { text: "Sorry, I'm having trouble connecting right now. Please try again." },
            { status: 500 }
        );
    }
}
