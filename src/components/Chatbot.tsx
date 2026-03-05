"use client";

import { useState, useRef, useEffect, useCallback } from "react";

interface Message {
    id: string;
    role: "user" | "assistant";
    text: string;
    timestamp: Date;
}

export default function Chatbot() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([
        {
            id: "welcome",
            role: "assistant",
            text: "Hello! 👋 Welcome to Harmony Additives. I'm Addi-Buddy, your AI assistant. How can I help you today?",
            timestamp: new Date(),
        },
    ]);
    const [input, setInput] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    const scrollToBottom = useCallback(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, []);

    useEffect(() => {
        scrollToBottom();
    }, [messages, scrollToBottom]);

    useEffect(() => {
        if (isOpen && inputRef.current) {
            inputRef.current.focus();
        }
    }, [isOpen]);

    const sendMessage = async () => {
        const trimmed = input.trim();
        if (!trimmed || isLoading) return;

        const userMsg: Message = {
            id: `user-${Date.now()}`,
            role: "user",
            text: trimmed,
            timestamp: new Date(),
        };

        setMessages((prev) => [...prev, userMsg]);
        setInput("");
        setIsLoading(true);

        try {
            // Call our own API route (server-side proxy to n8n)
            const response = await fetch("/api/chat", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    chatInput: trimmed,
                    sessionId: getSessionId(),
                }),
            });

            const data = await response.json();
            const assistantText =
                data.text || "I received your message but got an empty response.";

            const assistantMsg: Message = {
                id: `assistant-${Date.now()}`,
                role: "assistant",
                text: assistantText,
                timestamp: new Date(),
            };

            setMessages((prev) => [...prev, assistantMsg]);
        } catch (error) {
            console.error("Chatbot error:", error);
            const errorMsg: Message = {
                id: `error-${Date.now()}`,
                role: "assistant",
                text: "Sorry, I'm having trouble connecting right now. Please try again in a moment.",
                timestamp: new Date(),
            };
            setMessages((prev) => [...prev, errorMsg]);
        } finally {
            setIsLoading(false);
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            sendMessage();
        }
    };

    return (
        <>
            {/* ── Floating trigger area ── */}
            <div className={`chatbot-fab-wrapper ${isOpen ? "chatbot-fab-wrapper--open" : ""}`}>
                <button
                    id="chatbot-toggle"
                    className={`chatbot-fab ${isOpen ? "chatbot-fab--open" : ""}`}
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label={isOpen ? "Close chat" : "Open chat"}
                >
                    <span className="chatbot-fab-icon">
                        {isOpen ? (
                            <svg
                                width="22"
                                height="22"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <line x1="18" y1="6" x2="6" y2="18" />
                                <line x1="6" y1="6" x2="18" y2="18" />
                            </svg>
                        ) : (
                            <video
                                className="chatbot-logo-video chatbot-logo-video--fab"
                                src="/chatbot-logo.mp4"
                                autoPlay
                                loop
                                muted
                                playsInline
                                disablePictureInPicture
                            />
                        )}
                    </span>
                    {!isOpen && <span className="chatbot-fab-pulse" />}
                </button>
                {!isOpen && (
                    <span className="chatbot-fab-label">Ask the ChatBot</span>
                )}
            </div>

            {/* ── Chat window ── */}
            <div
                className={`chatbot-window ${isOpen ? "chatbot-window--open" : ""}`}
                role="dialog"
                aria-label="Chat with Addi-Buddy"
            >
                {/* Header */}
                <div className="chatbot-header">
                    <div className="chatbot-header-info">
                        <div className="chatbot-avatar">
                            <video
                                className="chatbot-logo-video chatbot-logo-video--header"
                                src="/chatbot-logo.mp4"
                                autoPlay
                                loop
                                muted
                                playsInline
                                disablePictureInPicture
                            />
                        </div>
                        <div>
                            <h3 className="chatbot-header-title">Addi-Buddy</h3>
                            <span className="chatbot-header-status">
                                <span className="chatbot-status-dot" />
                                Online
                            </span>
                        </div>
                    </div>
                    <button
                        className="chatbot-close-btn"
                        onClick={() => setIsOpen(false)}
                        aria-label="Close chat"
                    >
                        <svg
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <line x1="18" y1="6" x2="6" y2="18" />
                            <line x1="6" y1="6" x2="18" y2="18" />
                        </svg>
                    </button>
                </div>

                {/* Messages */}
                <div className="chatbot-messages">
                    {messages.map((msg) => (
                        <div key={msg.id} className={`chatbot-msg chatbot-msg--${msg.role}`}>
                            {msg.role === "assistant" && (
                                <div className="chatbot-msg-avatar">
                                    <video
                                        className="chatbot-logo-video chatbot-logo-video--msg"
                                        src="/chatbot-logo.mp4"
                                        autoPlay
                                        loop
                                        muted
                                        playsInline
                                        disablePictureInPicture
                                    />
                                </div>
                            )}
                            <div className="chatbot-msg-bubble">
                                <p className="chatbot-msg-text">{msg.text}</p>
                                <span className="chatbot-msg-time" suppressHydrationWarning>
                                    {msg.timestamp.toLocaleTimeString([], {
                                        hour: "2-digit",
                                        minute: "2-digit",
                                    })}
                                </span>
                            </div>
                        </div>
                    ))}

                    {isLoading && (
                        <div className="chatbot-msg chatbot-msg--assistant">
                            <div className="chatbot-msg-avatar">
                                <video
                                    className="chatbot-logo-video chatbot-logo-video--msg"
                                    src="/chatbot-logo.mp4"
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                    disablePictureInPicture
                                />
                            </div>
                            <div className="chatbot-msg-bubble chatbot-msg-bubble--typing">
                                <div className="chatbot-typing">
                                    <span className="chatbot-typing-dot" />
                                    <span className="chatbot-typing-dot" />
                                    <span className="chatbot-typing-dot" />
                                </div>
                            </div>
                        </div>
                    )}

                    <div ref={messagesEndRef} />
                </div>

                {/* Input */}
                <div className="chatbot-input-area">
                    <input
                        ref={inputRef}
                        id="chatbot-input"
                        type="text"
                        className="chatbot-input"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={handleKeyDown}
                        placeholder="Type your message…"
                        disabled={isLoading}
                        autoComplete="off"
                    />
                    <button
                        id="chatbot-send"
                        className={`chatbot-send-btn ${input.trim() ? "chatbot-send-btn--active" : ""}`}
                        onClick={sendMessage}
                        disabled={isLoading || !input.trim()}
                        aria-label="Send message"
                    >
                        <svg
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <line x1="22" y1="2" x2="11" y2="13" />
                            <polygon points="22 2 15 22 11 13 2 9 22 2" />
                        </svg>
                    </button>
                </div>
            </div>
        </>
    );
}

/* ─── Utility: persistent session ID ─── */
function getSessionId(): string {
    if (typeof window === "undefined") return "server";
    let sid = sessionStorage.getItem("harmony-chat-session");
    if (!sid) {
        sid = `session-${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;
        sessionStorage.setItem("harmony-chat-session", sid);
    }
    return sid;
}
