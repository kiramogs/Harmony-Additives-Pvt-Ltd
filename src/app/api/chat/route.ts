import { NextRequest, NextResponse } from "next/server";

const WEBHOOK_URL =
    "https://harmonyadditives.app.n8n.cloud/webhook/83861be5-fba2-4f40-8d88-b2727afada3c";

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();

        const n8nResponse = await fetch(WEBHOOK_URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(body),
        });

        // The AI Agent's response is in the x-n8n-text header (URL-encoded)
        const headerText = n8nResponse.headers.get("x-n8n-text");

        let text: string;

        if (headerText) {
            text = decodeURIComponent(headerText);
        } else {
            // Fallback: try reading body
            try {
                const contentType = n8nResponse.headers.get("content-type") || "";
                if (contentType.includes("application/json")) {
                    const data = await n8nResponse.json();
                    text = data.output || data.text || data.message || JSON.stringify(data);
                } else {
                    const raw = await n8nResponse.text();
                    text = raw || "I received your message but got an empty response.";
                }
            } catch {
                text = "I received your message but couldn't parse the response.";
            }
        }

        return NextResponse.json({ text });
    } catch (error) {
        console.error("Chat API error:", error);
        return NextResponse.json(
            { text: "Sorry, I'm having trouble connecting right now. Please try again." },
            { status: 500 }
        );
    }
}
