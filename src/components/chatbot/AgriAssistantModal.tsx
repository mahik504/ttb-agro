import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { X, Send, ArrowRight, RotateCcw, MessageSquare } from 'lucide-react';
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
      text: 'Hello. I can assist you with TTB Agro’s agricultural commodities, domestic and global sourcing origins, dual-stage QC protocols, and group ecosystem scale.',
      timestamp: 'Now'
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
    }, 250);
  };

  const handleReset = () => {
    setMessages([
      {
        id: 'welcome',
        sender: 'assistant',
        text: 'Conversation reset. How can I assist you with TTB Agro’s commodities, origins, or commercial inquiries?',
        timestamp: 'Now'
      }
    ]);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-black/50 backdrop-blur-xs">
      <div className="bg-[#FBF7EE] w-full sm:max-w-md h-[80vh] sm:h-[560px] rounded-t-lg sm:rounded-lg shadow-elevated flex flex-col overflow-hidden border border-[#0E1C14]/15">
        
        {/* Header */}
        <div className="bg-[#0B1E15] text-[#FBF7EE] px-4 py-3 flex items-center justify-between border-b border-[#C4A35A]/20 shrink-0">
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded bg-[#1A3C2C] flex items-center justify-center text-[#C4A35A] border border-[#C4A35A]/30">
              <MessageSquare className="w-3.5 h-3.5" />
            </div>
            <div>
              <h3 className="font-display font-medium text-sm text-[#FBF7EE]">TTB Agro Assistant</h3>
              <p className="text-[10px] text-[#EAE4D5]/60 font-mono">Verified Corporate Profile Reference</p>
            </div>
          </div>

          <div className="flex items-center gap-1">
            <button
              onClick={handleReset}
              className="p-1 rounded text-[#EAE4D5]/60 hover:text-[#FBF7EE] transition-colors"
              title="Reset Conversation"
            >
              <RotateCcw className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={onClose}
              className="p-1 rounded text-[#EAE4D5]/60 hover:text-[#FBF7EE] transition-colors"
              title="Close Assistant"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Message Thread */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-[#F4EFE4]">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
            >
              <div
                className={`max-w-[85%] rounded p-3 text-xs leading-relaxed ${
                  msg.sender === 'user'
                    ? 'bg-[#1A3C2C] text-[#FBF7EE] border border-[#C4A35A]/30'
                    : 'bg-[#FBF7EE] text-[#0E1C14] border border-[#0E1C14]/10'
                }`}
              >
                {msg.title && (
                  <div className="font-mono text-[10px] uppercase font-bold text-[#8C7033] mb-1">
                    {msg.title}
                  </div>
                )}

                <div className="whitespace-pre-line">{msg.text}</div>

                {msg.action && (
                  <div className="mt-2.5 pt-2 border-t border-[#0E1C14]/10">
                    <Link
                      to={msg.action.href}
                      onClick={onClose}
                      className="inline-flex items-center gap-1 text-xs font-medium text-[#1A3C2C] hover:underline"
                    >
                      <span>{msg.action.label}</span>
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                )}
              </div>
              <span className="text-[9px] text-[#66746B] font-mono mt-0.5 px-1">{msg.timestamp}</span>
            </div>
          ))}

          {isTyping && (
            <div className="flex items-center gap-1 text-xs text-[#66746B] bg-[#FBF7EE] border border-[#0E1C14]/10 px-2.5 py-1.5 rounded w-16">
              <span className="w-1.5 h-1.5 rounded-full bg-[#1A3C2C] animate-pulse"></span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#1A3C2C] animate-pulse [animation-delay:0.2s]"></span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#1A3C2C] animate-pulse [animation-delay:0.4s]"></span>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Quick Chips */}
        <div className="px-3 py-2 bg-[#FBF7EE] border-t border-[#0E1C14]/10 overflow-x-auto whitespace-nowrap scrollbar-none flex gap-1.5">
          {quickPromptChips.map((chip, idx) => (
            <button
              key={idx}
              onClick={() => handleSend(chip)}
              className="text-[10px] bg-[#F4EFE4] hover:bg-[#EAE4D5] border border-[#0E1C14]/10 rounded px-2.5 py-1 text-[#3D4A42] transition-colors shrink-0"
            >
              {chip}
            </button>
          ))}
        </div>

        {/* Input Form */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSend();
          }}
          className="p-2.5 bg-[#FBF7EE] border-t border-[#0E1C14]/10 flex items-center gap-2"
        >
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Ask about commodities, origins, QC, or group scale..."
            className="flex-1 px-3 py-1.5 text-xs border border-[#0E1C14]/15 rounded bg-[#F4EFE4] text-[#0E1C14] focus:outline-none focus:border-[#C4A35A]"
          />
          <button
            type="submit"
            disabled={!inputValue.trim()}
            className="px-3 py-1.5 bg-[#1A3C2C] hover:bg-[#133022] text-[#FBF7EE] rounded disabled:opacity-40 disabled:cursor-not-allowed text-xs font-medium flex items-center gap-1 border border-[#C4A35A]/30 btn-tactile"
          >
            <span>Send</span>
            <Send className="w-3 h-3 text-[#C4A35A]" />
          </button>
        </form>
      </div>
    </div>
  );
};
