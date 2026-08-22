import React, { useState, useRef, useEffect } from 'react';
import { X, Send, Sparkles, ArrowRight, ShieldAlert, RotateCcw } from 'lucide-react';
import { findAssistantResponse, quickPromptChips } from './assistantKnowledge';

interface Message {
  id: string;
  sender: 'user' | 'assistant';
  text: string;
  title?: string;
  action?: {
    label: string;
    href: string;
  };
  timestamp: string;
}

interface AgriAssistantModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AgriAssistantModal: React.FC<AgriAssistantModalProps> = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'welcome',
      sender: 'assistant',
      text: 'Hello! I am the TTB Agro B2B Agri Procurement Assistant. How can I assist you with our commodities, sourcing origins, dual-stage QC protocols, or institutional supply partnerships?',
      timestamp: 'Just now'
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const handleSend = (textToSend?: string) => {
    const query = textToSend || inputValue;
    if (!query.trim()) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      sender: 'user',
      text: query,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputValue('');
    setIsTyping(true);

    // Simulate snappy response
    setTimeout(() => {
      const match = findAssistantResponse(query);
      const botMsg: Message = {
        id: (Date.now() + 1).toString(),
        sender: 'assistant',
        text: match.response,
        title: match.title,
        action: match.action,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages((prev) => [...prev, botMsg]);
      setIsTyping(false);
    }, 400);
  };

  const handleReset = () => {
    setMessages([
      {
        id: 'welcome',
        sender: 'assistant',
        text: 'Conversation reset. How can I assist you with TTB Agro’s agricultural sourcing network, commodities, or institutional RFPs?',
        timestamp: 'Just now'
      }
    ]);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-black/50 backdrop-blur-xs animate-fadeIn">
      {/* Modal Container */}
      <div className="bg-white w-full sm:max-w-lg h-[85vh] sm:h-[620px] rounded-t-2xl sm:rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-gray-200">
        
        {/* Modal Header */}
        <div className="bg-forest-950 text-white px-5 py-4 flex items-center justify-between border-b border-forest-900 shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-agri-600 flex items-center justify-center text-white shadow-xs">
              <Sparkles className="w-4 h-4 text-emerald-200" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-bold text-sm text-white font-display">TTB Agri Procurement Assistant</h3>
                <span className="text-[10px] bg-agri-500/30 text-agri-300 font-semibold px-2 py-0.5 rounded-full border border-agri-500/40">
                  Domain-Locked
                </span>
              </div>
              <p className="text-[11px] text-gray-400">Institutional Sourcing & Supply Chain Engine</p>
            </div>
          </div>

          <div className="flex items-center gap-1">
            <button
              onClick={handleReset}
              className="p-1.5 rounded-lg text-gray-400 hover:text-white hover:bg-forest-900 transition-colors"
              title="Reset Conversation"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-gray-400 hover:text-white hover:bg-forest-900 transition-colors"
              title="Close Assistant"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Informational Banner */}
        <div className="bg-emerald-50 px-4 py-2 text-[11px] text-emerald-900 flex items-center gap-2 border-b border-emerald-100">
          <ShieldAlert className="w-3.5 h-3.5 text-agri-700 shrink-0" />
          <span>Answers are strictly referenced from TTB Agro's verified supply chain and corporate profile.</span>
        </div>

        {/* Message Thread Area */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3.5 bg-[#FAFBF9]">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
            >
              <div
                className={`max-w-[85%] rounded-xl px-4 py-3 text-xs sm:text-sm leading-relaxed shadow-xs ${
                  msg.sender === 'user'
                    ? 'bg-forest-900 text-white rounded-br-none'
                    : 'bg-white border border-gray-200 text-gray-800 rounded-bl-none'
                }`}
              >
                {msg.title && (
                  <div className="font-bold text-forest-800 mb-1 text-xs uppercase tracking-wider">
                    {msg.title}
                  </div>
                )}

                <div className="whitespace-pre-line">{msg.text}</div>

                {msg.action && (
                  <div className="mt-2.5 pt-2 border-t border-gray-100">
                    <a
                      href={msg.action.href}
                      onClick={onClose}
                      className="inline-flex items-center gap-1 text-xs font-semibold text-agri-700 hover:text-agri-900 transition-colors"
                    >
                      <span>{msg.action.label}</span>
                      <ArrowRight className="w-3 h-3" />
                    </a>
                  </div>
                )}
              </div>
              <span className="text-[10px] text-gray-400 mt-1 px-1">{msg.timestamp}</span>
            </div>
          ))}

          {isTyping && (
            <div className="flex items-center gap-1.5 text-xs text-gray-500 bg-white border border-gray-200 px-3 py-2 rounded-xl w-24">
              <span className="w-1.5 h-1.5 rounded-full bg-agri-600 animate-bounce"></span>
              <span className="w-1.5 h-1.5 rounded-full bg-agri-600 animate-bounce [animation-delay:0.2s]"></span>
              <span className="w-1.5 h-1.5 rounded-full bg-agri-600 animate-bounce [animation-delay:0.4s]"></span>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Quick Suggested Query Chips */}
        <div className="px-4 py-2 bg-white border-t border-gray-100 overflow-x-auto whitespace-nowrap scrollbar-none flex gap-2">
          {quickPromptChips.map((chip, idx) => (
            <button
              key={idx}
              onClick={() => handleSend(chip)}
              className="text-[11px] bg-gray-50 hover:bg-forest-50 hover:text-forest-900 border border-gray-200 rounded-full px-3 py-1 text-gray-600 transition-colors shrink-0"
            >
              {chip}
            </button>
          ))}
        </div>

        {/* Input Bar */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSend();
          }}
          className="p-3 bg-white border-t border-gray-200 flex items-center gap-2"
        >
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Ask about origins, commodities, QC gates, RFP..."
            className="flex-1 px-3.5 py-2 text-xs sm:text-sm border border-gray-300 rounded-lg focus:outline-none focus:border-agri-600"
          />
          <button
            type="submit"
            disabled={!inputValue.trim()}
            className="px-4 py-2 bg-forest-900 hover:bg-forest-950 text-white rounded-lg disabled:opacity-40 disabled:cursor-not-allowed text-xs font-semibold flex items-center gap-1 btn-tactile"
          >
            <span>Send</span>
            <Send className="w-3.5 h-3.5" />
          </button>
        </form>
      </div>
    </div>
  );
};
