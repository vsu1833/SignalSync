"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";

interface Message {
  id: number;
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
}

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      role: "assistant",
      content: "Hi David, Good Morning",
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const menuItems = [
    { id: "dashboard", label: "Dashboard" },
    { id: "portfolio", label: "Portfolio" },
    { id: "history", label: "History" },
    { id: "analyze", label: "Analyze Stocks" },
    { id: "sentiments", label: "Test Sentiments" },
    { id: "chatbot", label: "Chatbot" },
  ];

  const newsArticles = [
    {
      id: 1,
      headline: "Market Analysis: Tech Stocks Show Strong Growth",
      link: "#",
    },
    {
      id: 2,
      headline: "Investment Opportunities in Renewable Energy Sector",
      link: "#",
    },
    {
      id: 3,
      headline: "Global Markets React to Economic Policy Changes",
      link: "#",
    },
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (activeTab === "chatbot") {
      scrollToBottom();
    }
  }, [messages, activeTab]);

  const handleChatSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: messages.length + 1,
      role: "user",
      content: inputValue,
      timestamp: new Date(),
    };

    setMessages([...messages, userMessage]);
    setInputValue("");
    setIsTyping(true);

    setTimeout(() => {
      const assistantMessage: Message = {
        id: messages.length + 2,
        role: "assistant",
        content: `Based on current market analysis, I can help you with that query about "${inputValue}". This is a simulated response from the MCP server. In production, this would connect to your AI agents for real-time market analysis.`,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, assistantMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const renderContent = () => {
    switch (activeTab) {
      case "dashboard":
        return (
          <>
            <h1
              className={`text-4xl font-bold mb-8 transition-colors ${
                isDarkMode ? "text-white" : "text-gray-900"
              }`}
            >
              Dashboard
            </h1>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div
                className={`rounded-xl p-6 border shadow-sm transition-colors ${
                  isDarkMode
                    ? "bg-gray-800 border-gray-700"
                    : "bg-white border-gray-200"
                }`}
              >
                <h3
                  className={`text-sm font-semibold mb-2 transition-colors ${
                    isDarkMode ? "text-gray-400" : "text-gray-500"
                  }`}
                >
                  Assets
                </h3>
                <p
                  className={`text-2xl font-bold mb-1 transition-colors ${
                    isDarkMode ? "text-white" : "text-gray-900"
                  }`}
                >
                  ₹2,45,000
                </p>
                <p
                  className={`text-sm transition-colors ${
                    isDarkMode ? "text-gray-400" : "text-gray-500"
                  }`}
                >
                  put some placeholder value in rupees
                </p>
              </div>

              <div
                className={`rounded-xl p-6 border shadow-sm transition-colors ${
                  isDarkMode
                    ? "bg-gray-800 border-gray-700"
                    : "bg-white border-gray-200"
                }`}
              >
                <h3
                  className={`text-sm font-semibold mb-2 transition-colors ${
                    isDarkMode ? "text-gray-400" : "text-gray-500"
                  }`}
                >
                  Liabilities
                </h3>
                <p
                  className={`text-2xl font-bold mb-1 transition-colors ${
                    isDarkMode ? "text-white" : "text-gray-900"
                  }`}
                >
                  ₹45,000
                </p>
                <p
                  className={`text-sm transition-colors ${
                    isDarkMode ? "text-gray-400" : "text-gray-500"
                  }`}
                >
                  put some placeholder value in rupees
                </p>
              </div>

              <div
                className={`rounded-xl p-6 border shadow-sm transition-colors ${
                  isDarkMode
                    ? "bg-gray-800 border-gray-700"
                    : "bg-white border-gray-200"
                }`}
              >
                <h3
                  className={`text-sm font-semibold mb-2 transition-colors ${
                    isDarkMode ? "text-gray-400" : "text-gray-500"
                  }`}
                >
                  Nifty data
                </h3>
                <p
                  className={`text-2xl font-bold mb-1 transition-colors ${
                    isDarkMode ? "text-white" : "text-gray-900"
                  }`}
                >
                  +12.5%
                </p>
                <p
                  className={`text-sm transition-colors ${
                    isDarkMode ? "text-gray-400" : "text-gray-500"
                  }`}
                >
                  put some placeholder %
                </p>
              </div>
            </div>

            {/* News Articles Section */}
            <div
              className={`rounded-xl border shadow-sm p-6 transition-colors ${
                isDarkMode
                  ? "bg-gray-800 border-gray-700"
                  : "bg-white border-gray-200"
              }`}
            >
              <h2
                className={`text-2xl font-bold mb-6 transition-colors ${
                  isDarkMode ? "text-white" : "text-gray-900"
                }`}
              >
                News Articles related to your Stocks
              </h2>

              <div className="space-y-4">
                {newsArticles.map((article) => (
                  <div
                    key={article.id}
                    className={`flex items-center justify-between p-4 rounded-lg border hover:border-primary transition ${
                      isDarkMode
                        ? "bg-gray-700 border-gray-600"
                        : "bg-gray-50 border-gray-200"
                    }`}
                  >
                    <div className="flex items-center space-x-4">
                      <div
                        className={`w-12 h-12 rounded-full flex-shrink-0 transition-colors ${
                          isDarkMode ? "bg-gray-600" : "bg-gray-200"
                        }`}
                      ></div>
                      <p
                        className={`font-medium transition-colors ${
                          isDarkMode ? "text-gray-200" : "text-gray-900"
                        }`}
                      >
                        {article.headline}
                      </p>
                    </div>
                    <a
                      href={article.link}
                      className={`px-6 py-2 border-2 rounded-lg hover:border-primary hover:text-primary transition font-medium ${
                        isDarkMode
                          ? "border-gray-600 text-gray-300"
                          : "border-gray-300 text-gray-700"
                      }`}
                    >
                      Link
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </>
        );

      case "portfolio":
        return (
          <div className="text-center py-20">
            <h1
              className={`text-4xl font-bold mb-4 ${
                isDarkMode ? "text-white" : "text-gray-900"
              }`}
            >
              Portfolio
            </h1>
            <p
              className={`text-xl ${
                isDarkMode ? "text-gray-400" : "text-gray-600"
              }`}
            >
              Portfolio content coming soon...
            </p>
          </div>
        );

      case "history":
        return (
          <div className="text-center py-20">
            <h1
              className={`text-4xl font-bold mb-4 ${
                isDarkMode ? "text-white" : "text-gray-900"
              }`}
            >
              History
            </h1>
            <p
              className={`text-xl ${
                isDarkMode ? "text-gray-400" : "text-gray-600"
              }`}
            >
              History content coming soon...
            </p>
          </div>
        );

      case "analyze":
        return (
          <div className="text-center py-20">
            <h1
              className={`text-4xl font-bold mb-4 ${
                isDarkMode ? "text-white" : "text-gray-900"
              }`}
            >
              Analyze Stocks
            </h1>
            <p
              className={`text-xl ${
                isDarkMode ? "text-gray-400" : "text-gray-600"
              }`}
            >
              Stock analysis tools coming soon...
            </p>
          </div>
        );

      case "sentiments":
        return (
          <div className="text-center py-20">
            <h1
              className={`text-4xl font-bold mb-4 ${
                isDarkMode ? "text-white" : "text-gray-900"
              }`}
            >
              Test Sentiments
            </h1>
            <p
              className={`text-xl ${
                isDarkMode ? "text-gray-400" : "text-gray-600"
              }`}
            >
              Sentiment analysis tools coming soon...
            </p>
          </div>
        );

      case "chatbot":
        return (
          <div className="flex flex-col h-[calc(100vh-73px)]">
            {/* Chat Messages */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${
                    message.role === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-3xl ${
                      message.role === "user" ? "order-2" : "order-1"
                    }`}
                  >
                    <div
                      className={`rounded-2xl px-6 py-4 ${
                        message.role === "user"
                          ? "bg-primary text-white"
                          : isDarkMode
                          ? "bg-gray-800 border border-gray-700 text-gray-200"
                          : "bg-white border border-gray-200 text-gray-900"
                      }`}
                    >
                      <p className="text-sm leading-relaxed whitespace-pre-wrap">
                        {message.content}
                      </p>
                    </div>
                    <div
                      className={`mt-2 text-xs ${
                        isDarkMode ? "text-gray-500" : "text-gray-500"
                      } ${
                        message.role === "user" ? "text-right" : "text-left"
                      }`}
                    >
                      {message.timestamp.toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </div>
                  </div>
                </div>
              ))}

              {isTyping && (
                <div className="flex justify-start">
                  <div className="max-w-3xl">
                    <div
                      className={`rounded-2xl px-6 py-4 ${
                        isDarkMode
                          ? "bg-gray-800 border border-gray-700"
                          : "bg-white border border-gray-200"
                      }`}
                    >
                      <div className="flex space-x-2">
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-100"></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-200"></div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div
              className={`border-t p-6 ${
                isDarkMode
                  ? "bg-gray-800 border-gray-700"
                  : "bg-white border-gray-200"
              }`}
            >
              <form onSubmit={handleChatSubmit} className="max-w-4xl mx-auto">
                <div className="relative">
                  <textarea
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" && !e.shiftKey) {
                        e.preventDefault();
                        handleChatSubmit(e);
                      }
                    }}
                    placeholder="Is Tata motors a good company to buy in the current climate"
                    className={`w-full px-6 py-4 pr-32 border rounded-2xl placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none ${
                      isDarkMode
                        ? "bg-gray-700 border-gray-600 text-white"
                        : "bg-gray-50 border-gray-200 text-gray-900"
                    }`}
                    rows={1}
                    style={{ minHeight: "56px", maxHeight: "200px" }}
                  />
                  <div className="absolute right-3 bottom-3 flex items-center space-x-2">
                    <button
                      type="button"
                      className={`p-2 transition ${
                        isDarkMode
                          ? "text-gray-400 hover:text-gray-300"
                          : "text-gray-400 hover:text-gray-600"
                      }`}
                      title="Attach file"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"
                        />
                      </svg>
                    </button>

                    <button
                      type="button"
                      className={`p-2 transition ${
                        isDarkMode
                          ? "text-gray-400 hover:text-gray-300"
                          : "text-gray-400 hover:text-gray-600"
                      }`}
                      title="Custom agents"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                        />
                      </svg>
                    </button>

                    <button
                      type="submit"
                      disabled={!inputValue.trim()}
                      className="p-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 10l7-7m0 0l7 7m-7-7v18"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                <p
                  className={`text-xs mt-2 text-center ${
                    isDarkMode ? "text-gray-500" : "text-gray-500"
                  }`}
                >
                  Move canvas, hold Scroll, Spacebar, or use the menu tool
                </p>
              </form>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div
      className={`min-h-screen transition-colors ${
        isDarkMode ? "bg-gray-900" : "bg-gray-50"
      }`}
    >
      {/* Top Navigation Bar */}
      <nav
        className={`border-b px-6 py-4 transition-colors ${
          isDarkMode
            ? "bg-gray-800 border-gray-700"
            : "bg-white border-gray-200"
        }`}
      >
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">A</span>
            </div>
            <span
              className={`text-xl font-bold transition-colors ${
                isDarkMode ? "text-white" : "text-gray-900"
              }`}
            >
              AARTH SAARTHI
            </span>
          </Link>

          <div className="flex items-center space-x-4">
            {/* Dark Mode Toggle */}
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className={`p-2 rounded-lg transition-colors ${
                isDarkMode
                  ? "bg-gray-700 text-yellow-400 hover:bg-gray-600"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
              title={
                isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"
              }
            >
              {isDarkMode ? (
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                </svg>
              )}
            </button>

            <span
              className={`transition-colors ${
                isDarkMode ? "text-gray-300" : "text-gray-700"
              }`}
            >
              Hi David Smith
            </span>
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
                isDarkMode ? "bg-gray-700" : "bg-gray-200"
              }`}
            >
              <svg
                className={`w-6 h-6 transition-colors ${
                  isDarkMode ? "text-gray-300" : "text-gray-600"
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
            </div>
          </div>
        </div>
      </nav>

      <div className="flex">
        {/* Sidebar */}
        <aside
          className={`w-64 border-r min-h-[calc(100vh-73px)] p-6 transition-colors ${
            isDarkMode
              ? "bg-gray-800 border-gray-700"
              : "bg-white border-gray-200"
          }`}
        >
          <nav className="space-y-3">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`w-full text-left px-6 py-3 rounded-lg transition ${
                  activeTab === item.id
                    ? "bg-primary text-white font-medium"
                    : isDarkMode
                    ? "bg-gray-700 text-gray-300 hover:bg-gray-600"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-8 overflow-y-auto">{renderContent()}</main>
      </div>
    </div>
  );
}
