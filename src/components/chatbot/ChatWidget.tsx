"use client";
import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, Bot, Minimize2 } from "lucide-react";
import { cn } from "@/lib/utils";

type Message = {
  id: string;
  role: "user" | "assistant";
  content: string;
};

const QUICK_REPLIES = [
  "What services do you offer?",
  "How does network automation work?",
  "What is Zero Trust Security?",
  "Book a consultation",
];

const BOT_RESPONSES: Record<string, string> = {
  default: "Thanks for reaching out! I can help you learn about our network automation, AI integration, security, and infrastructure services. What would you like to know?",
  services: "M&U Technologies offers 5 core services: **Network Automation** (Ansible, SD-WAN), **AI Integration** (AIOps, predictive analytics), **Network Security** (Zero Trust, SASE), **IT Infrastructure** (cloud, hybrid, on-prem), and **IT Procurement**. Which interests you most?",
  automation: "Network automation with M&U eliminates manual configuration using Ansible playbooks and SD-WAN orchestration. Our clients see **10× faster deployments**, zero configuration drift, and up to **95% fewer human errors**. Want to see a demo?",
  zero_trust: "Zero Trust is a security model where **no user or device is trusted by default**—every access request is verified continuously. We implement ZTNA, micro-segmentation, and SASE to enforce least-privilege access across your entire network. Interested in a free security assessment?",
  contact: "I'd be happy to connect you with our team! You can **Book a Free Consultation** at /contact, or call us directly at +1 (800) MU-TECH-1. Our senior architects respond within 2 business hours. 🚀",
};

function getResponse(input: string): string {
  const lower = input.toLowerCase();
  if (lower.includes("service") || lower.includes("offer") || lower.includes("do you")) return BOT_RESPONSES.services;
  if (lower.includes("automat") || lower.includes("ansible") || lower.includes("sd-wan")) return BOT_RESPONSES.automation;
  if (lower.includes("zero trust") || lower.includes("security") || lower.includes("ztna") || lower.includes("sase")) return BOT_RESPONSES.zero_trust;
  if (lower.includes("contact") || lower.includes("consult") || lower.includes("book") || lower.includes("meet")) return BOT_RESPONSES.contact;
  if (lower.includes("price") || lower.includes("cost") || lower.includes("pricing")) return "Our pricing is tailored to each engagement based on scope and scale. Most clients see **ROI within 3-6 months**. I'd recommend booking a free consultation where we can discuss your specific needs and provide a transparent quote.";
  if (lower.includes("ai") || lower.includes("aiops") || lower.includes("machine learning")) return "Our **AI Integration platform** uses machine learning to predict network failures up to 72 hours in advance, automate 80% of incident remediation, and optimize capacity planning. It's like having a NOC that never sleeps. Want to see it in action?";
  return BOT_RESPONSES.default;
}

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [minimized, setMinimized] = useState(false);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "init",
      role: "assistant",
      content: "Hi! I'm Maya, M&U's AI assistant 👋. How can I help you today? I can answer questions about our network automation, AI, security, and infrastructure services.",
    },
  ]);
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, typing]);

  const sendMessage = async (text: string) => {
    if (!text.trim()) return;
    const userMsg: Message = { id: Date.now().toString(), role: "user", content: text };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setTyping(true);
    await new Promise((r) => setTimeout(r, 800 + Math.random() * 600));
    const response = getResponse(text);
    setTyping(false);
    setMessages((prev) => [
      ...prev,
      { id: (Date.now() + 1).toString(), role: "assistant", content: response },
    ]);
  };

  const renderContent = (content: string) => {
    return content.split("**").map((part, i) =>
      i % 2 === 1 ? <strong key={i}>{part}</strong> : part
    );
  };

  return (
    <>
      {/* Chat window */}
      <div
        className={cn(
          "fixed bottom-24 right-4 sm:right-6 z-50 w-[calc(100vw-2rem)] sm:w-96 transition-all duration-300 origin-bottom-right",
          open && !minimized ? "opacity-100 scale-100 pointer-events-auto" : "opacity-0 scale-95 pointer-events-none"
        )}
      >
        <div className="bg-white dark:bg-surface-dark-card rounded-2xl border border-gray-200 dark:border-surface-dark-border shadow-2xl overflow-hidden flex flex-col" style={{ maxHeight: "520px" }}>
          {/* Header */}
          <div className="bg-gradient-to-r from-brand-600 to-accent-600 px-4 py-3 flex items-center justify-between flex-shrink-0">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                <Bot size={16} className="text-white" />
              </div>
              <div>
                <div className="text-white text-sm font-semibold">Maya — M&U AI Assistant</div>
                <div className="flex items-center gap-1.5 text-white/70 text-xs">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Online
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setMinimized(true)}
                className="text-white/70 hover:text-white transition-colors p-1"
                aria-label="Minimize"
              >
                <Minimize2 size={14} />
              </button>
              <button
                onClick={() => setOpen(false)}
                className="text-white/70 hover:text-white transition-colors p-1"
                aria-label="Close"
              >
                <X size={16} />
              </button>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3" style={{ minHeight: 0 }}>
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={cn("flex", msg.role === "user" ? "justify-end" : "justify-start")}
              >
                {msg.role === "assistant" && (
                  <div className="w-7 h-7 rounded-full bg-gradient-to-br from-brand-500 to-accent-500 flex items-center justify-center flex-shrink-0 mr-2 mt-0.5">
                    <Bot size={13} className="text-white" />
                  </div>
                )}
                <div
                  className={cn(
                    "max-w-[80%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed",
                    msg.role === "user"
                      ? "bg-brand-600 text-white rounded-tr-sm"
                      : "bg-gray-100 dark:bg-white/5 text-gray-800 dark:text-gray-200 rounded-tl-sm"
                  )}
                >
                  {renderContent(msg.content)}
                </div>
              </div>
            ))}

            {typing && (
              <div className="flex justify-start">
                <div className="w-7 h-7 rounded-full bg-gradient-to-br from-brand-500 to-accent-500 flex items-center justify-center mr-2">
                  <Bot size={13} className="text-white" />
                </div>
                <div className="bg-gray-100 dark:bg-white/5 rounded-2xl rounded-tl-sm px-4 py-3 flex gap-1">
                  <span className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: "0ms" }} />
                  <span className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: "150ms" }} />
                  <span className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: "300ms" }} />
                </div>
              </div>
            )}
            <div ref={endRef} />
          </div>

          {/* Quick replies */}
          <div className="px-4 py-2 border-t border-gray-100 dark:border-white/5 flex-shrink-0">
            <div className="flex flex-wrap gap-1.5">
              {QUICK_REPLIES.map((qr) => (
                <button
                  key={qr}
                  onClick={() => sendMessage(qr)}
                  className="text-xs px-2.5 py-1 rounded-full bg-gray-100 dark:bg-white/5 text-gray-700 dark:text-gray-300 hover:bg-brand-100 dark:hover:bg-brand-500/20 hover:text-brand-700 dark:hover:text-brand-300 transition-colors border border-gray-200 dark:border-white/10"
                >
                  {qr}
                </button>
              ))}
            </div>
          </div>

          {/* Input */}
          <div className="p-4 border-t border-gray-100 dark:border-white/5 flex-shrink-0">
            <form
              onSubmit={(e) => { e.preventDefault(); sendMessage(input); }}
              className="flex gap-2"
            >
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about our services..."
                className="flex-1 text-sm px-4 py-2.5 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-gray-900 dark:text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-500"
              />
              <button
                type="submit"
                disabled={!input.trim()}
                className="w-10 h-10 rounded-xl bg-brand-600 hover:bg-brand-700 flex items-center justify-center disabled:opacity-50 transition-colors flex-shrink-0"
              >
                <Send size={14} className="text-white" />
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* FAB */}
      <button
        onClick={() => { setOpen(true); setMinimized(false); }}
        className={cn(
          "fixed bottom-6 right-4 sm:right-6 z-50 w-14 h-14 rounded-full",
          "bg-gradient-to-br from-brand-500 to-accent-600",
          "flex items-center justify-center",
          "shadow-glow-md hover:shadow-glow-lg transition-all duration-200 hover:scale-110",
          open && !minimized ? "opacity-0 pointer-events-none scale-75" : "opacity-100 scale-100"
        )}
        aria-label="Open chat"
      >
        <MessageCircle size={24} className="text-white" />
        <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-emerald-400 border-2 border-white dark:border-surface-dark animate-pulse" />
      </button>
    </>
  );
}
