"use client";

import React, { useState, useRef, useEffect } from "react";
import { Sparkles, MessageSquare, X, Send, Bot, User, Cake, Heart, Minimize2 } from "lucide-react";

interface Message {
  id: string;
  sender: "user" | "ai";
  text: string;
  timestamp: string;
}

const INITIAL_MESSAGES: Message[] = [
  {
    id: "welcome-1",
    sender: "ai",
    text: "Hello! 🍰✨ I am your **Five Slices Gemini AI Assistant**! How can I help you today? Ask me about our signature Khmer Palm Sugar Cheesecake, our team led by Leangsiv Sok 👑, or our 5 field trip reports!",
    timestamp: "Just now",
  },
];

const QUICK_PROMPTS = [
  "What is your #1 bestseller?",
  "Who is the Team Leader?",
  "Tell me about Siem Reap scores",
  "How much were trip expenses?",
];

export const GeminiChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>(INITIAL_MESSAGES);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const handleSend = async (textToSend?: string) => {
    const query = (textToSend || input).trim();
    if (!query || isLoading) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      sender: "user",
      text: query,
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInput("");
    setIsLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: query }),
      });

      const data = await res.json();
      const aiReply = data.reply || "I'm happy to help! What else would you like to know about Five Slices Cheesecake Co.? 🍰✨";

      const aiMsg: Message = {
        id: (Date.now() + 1).toString(),
        sender: "ai",
        text: aiReply,
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      };

      setMessages((prev) => [...prev, aiMsg]);
    } catch (err) {
      console.error(err);
      const errorMsg: Message = {
        id: (Date.now() + 1).toString(),
        sender: "ai",
        text: "I'm right here to help! 🍰 Our signature **Khmer Palm Sugar Cheesecake** is $4.50/slice and our team is led by **Leangsiv Sok 👑**! What would you like to explore next?",
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      };
      setMessages((prev) => [...prev, errorMsg]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Floating Trigger Button (Bottom-Left) */}
      <div className="fixed bottom-6 left-6 z-50 print:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="group relative flex items-center gap-2.5 px-5 py-3 rounded-full bg-gradient-to-r from-pink-500 via-rose-500 to-amber-400 text-white font-extrabold text-xs shadow-xl shadow-pink-300 hover:shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300 border-2 border-white"
        >
          <div className="relative">
            <Bot className="w-5 h-5 group-hover:rotate-12 transition-transform" />
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-yellow-300 rounded-full animate-ping" />
          </div>
          <span>Ask Gemini AI 🤖💬</span>
          <Sparkles className="w-3.5 h-3.5 text-yellow-200 animate-sparkle" />
        </button>
      </div>

      {/* Slide-Up Chat Modal Window */}
      {isOpen && (
        <div className="fixed bottom-22 left-6 z-50 w-full max-w-sm sm:max-w-md h-[520px] bg-white/95 backdrop-blur-xl rounded-3xl border-2 border-pink-300 shadow-2xl flex flex-col justify-between overflow-hidden animate-in slide-in-from-bottom duration-300 print:hidden">
          
          {/* Header */}
          <div className="p-4 bg-gradient-to-r from-pink-500 via-rose-500 to-amber-400 text-white flex items-center justify-between shadow-xs">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/40">
                <Bot className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="font-heading font-extrabold text-sm flex items-center gap-1.5">
                  <span>Gemini AI Assistant</span>
                  <span className="px-2 py-0.5 rounded-full bg-emerald-400 text-slate-900 text-[9px] font-extrabold uppercase">
                    Online
                  </span>
                </h3>
                <p className="text-[10px] text-pink-100 font-semibold">Five Slices Knowledge Expert 🍰</p>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 rounded-xl hover:bg-white/20 text-white transition-colors"
                title="Minimize Chat"
              >
                <Minimize2 className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Messages Thread Container */}
          <div className="flex-grow p-4 overflow-y-auto space-y-3 text-xs">
            
            {/* Quick Suggestion Chips */}
            <div className="space-y-1.5 mb-3">
              <span className="text-[10px] font-bold text-slate-400 block uppercase tracking-wider">
                💡 Suggested Questions:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {QUICK_PROMPTS.map((prompt, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSend(prompt)}
                    className="px-2.5 py-1 rounded-full bg-pink-50 hover:bg-pink-100 text-pink-700 text-[11px] font-semibold border border-pink-200 transition-colors"
                  >
                    {prompt}
                  </button>
                ))}
              </div>
            </div>

            {/* Render Messages */}
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex gap-2.5 items-start ${
                  msg.sender === "user" ? "flex-row-reverse" : "flex-row"
                }`}
              >
                <div
                  className={`w-7 h-7 rounded-xl flex items-center justify-center shrink-0 text-white font-bold text-xs ${
                    msg.sender === "user"
                      ? "bg-pink-500"
                      : "bg-gradient-to-tr from-purple-500 to-pink-500"
                  }`}
                >
                  {msg.sender === "user" ? <User className="w-4 h-4" /> : <Cake className="w-4 h-4" />}
                </div>

                <div
                  className={`max-w-[80%] p-3 rounded-2xl space-y-1 leading-relaxed ${
                    msg.sender === "user"
                      ? "bg-pink-500 text-white rounded-tr-none shadow-xs font-medium"
                      : "bg-pink-50/90 text-slate-800 border border-pink-200/80 rounded-tl-none font-normal"
                  }`}
                >
                  <p className="whitespace-pre-line">{msg.text}</p>
                  <span
                    className={`block text-[9px] ${
                      msg.sender === "user" ? "text-pink-100 text-right" : "text-slate-400"
                    }`}
                  >
                    {msg.timestamp}
                  </span>
                </div>
              </div>
            ))}

            {/* Typing Indicator */}
            {isLoading && (
              <div className="flex gap-2.5 items-center text-slate-400 text-xs italic">
                <div className="w-7 h-7 rounded-xl bg-pink-100 text-pink-500 flex items-center justify-center shrink-0">
                  <Bot className="w-4 h-4 animate-spin" />
                </div>
                <div className="bg-pink-50 px-3 py-2 rounded-2xl border border-pink-100 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-pink-400 animate-bounce" style={{ animationDelay: "0ms" }} />
                  <span className="w-1.5 h-1.5 rounded-full bg-pink-400 animate-bounce" style={{ animationDelay: "150ms" }} />
                  <span className="w-1.5 h-1.5 rounded-full bg-pink-400 animate-bounce" style={{ animationDelay: "300ms" }} />
                  <span className="text-[11px] font-semibold text-pink-600 ml-1">Gemini AI is thinking...</span>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Form Input Bar */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            className="p-3 bg-white border-t border-pink-100 flex items-center gap-2"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask Gemini AI anything about Five Slices..."
              className="flex-grow px-4 py-2.5 text-xs rounded-2xl bg-pink-50/60 border border-pink-200 focus:outline-none focus:ring-2 focus:ring-pink-400 text-slate-800"
            />
            <button
              type="submit"
              disabled={!input.trim() || isLoading}
              className="p-2.5 rounded-2xl bg-pink-500 hover:bg-pink-600 text-white font-bold transition-all disabled:opacity-50 shadow-xs"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>

        </div>
      )}
    </>
  );
};
