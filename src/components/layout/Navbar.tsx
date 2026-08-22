import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ShieldCheck, MessageSquareText, ChevronRight, ArrowUpRight } from 'lucide-react';
import { mainNavigation } from '../../data/navigation';
import { companyInfo } from '../../data/company';
import { Button } from '../ui/Button';

interface NavbarProps {
  onOpenAssistant?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenAssistant }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <header className="sticky top-0 z-40 w-full transition-all duration-200">
      {/* Top Utility Bar for Corporate & Trust Signals */}
      <div className="bg-forest-950 text-emerald-100/90 text-xs py-1.5 px-4 sm:px-8 border-b border-forest-900">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center gap-2 font-medium">
            <span className="inline-block w-2 h-2 rounded-full bg-agri-400 animate-pulse"></span>
            <span className="text-gray-200">Part of a diversified <strong className="text-agri-300 font-semibold">{companyInfo.groupTurnover}</strong> Group Ecosystem</span>
          </div>
          <div className="hidden md:flex items-center gap-4 text-gray-300">
            <span className="flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-agri-400" />
              <span>Dual-Stage QC Protocol</span>
            </span>
            <span className="text-forest-700">|</span>
            <a href={`mailto:${companyInfo.contact.salesEmail}`} className="hover:text-white transition-colors">
              {companyInfo.contact.salesEmail}
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav
        className={`w-full transition-all duration-200 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-200 py-3'
            : 'bg-white border-b border-gray-100 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Wordmark & Emblem */}
          <Link to="/" className="flex items-center gap-3 group focus:outline-none" aria-label="TTB Agro Home">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-forest-800 to-forest-950 flex items-center justify-center text-white shadow-sm border border-forest-700 group-hover:scale-[1.02] transition-transform">
              <svg className="w-6 h-6 text-agri-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2v8" />
                <path d="m4.93 10.93 4.24-4.24" />
                <path d="m14.83 6.69 4.24 4.24" />
                <path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z" />
              </svg>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="text-xl font-extrabold tracking-tight text-forest-950 font-display">TTB AGRO</span>
                <span className="text-[10px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded bg-forest-100 text-forest-800 border border-forest-200">
                  INDIA
                </span>
              </div>
              <span className="text-[10px] text-gray-500 font-medium tracking-wide uppercase">
                Private Limited • B2B Agri Supply Chain
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center space-x-1">
            {mainNavigation.map((item) => {
              const isActive = location.pathname === item.href;
              return (
                <Link
                  key={item.href}
                  to={item.href}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    isActive
                      ? 'text-forest-900 bg-forest-50 font-semibold border-b-2 border-forest-800'
                      : 'text-gray-600 hover:text-forest-900 hover:bg-gray-50'
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>

          {/* Right Action Group: Assistant trigger & RFP button */}
          <div className="hidden md:flex items-center gap-2.5">
            {onOpenAssistant && (
              <button
                onClick={onOpenAssistant}
                className="flex items-center gap-1.5 text-xs font-semibold px-3 py-2 rounded-lg bg-emerald-50 text-forest-900 border border-emerald-200 hover:bg-emerald-100 hover:border-emerald-300 transition-colors btn-tactile"
                title="Ask the B2B Agri Procurement Assistant"
              >
                <MessageSquareText className="w-3.5 h-3.5 text-agri-600" />
                <span>B2B Assistant</span>
              </button>
            )}
            <Button href="/contact" variant="primary" size="sm" icon={<ArrowUpRight className="w-3.5 h-3.5" />}>
              Partner With Us
            </Button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex md:hidden items-center gap-2">
            {onOpenAssistant && (
              <button
                onClick={onOpenAssistant}
                className="p-2 rounded-lg bg-emerald-50 text-forest-900 border border-emerald-200 hover:bg-emerald-100"
                aria-label="Open Assistant"
              >
                <MessageSquareText className="w-5 h-5 text-agri-600" />
              </button>
            )}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2.5 rounded-lg text-gray-700 hover:text-forest-900 hover:bg-gray-100 focus:outline-none"
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {isOpen && (
          <div className="lg:hidden border-t border-gray-200 bg-white px-4 pt-3 pb-6 space-y-1 shadow-lg animate-fadeIn">
            {mainNavigation.map((item) => {
              const isActive = location.pathname === item.href;
              return (
                <Link
                  key={item.href}
                  to={item.href}
                  className={`flex items-center justify-between px-3.5 py-3 rounded-lg text-base font-medium transition-colors ${
                    isActive
                      ? 'text-forest-900 bg-forest-50 font-bold border-l-4 border-forest-800'
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  <span>{item.label}</span>
                  <ChevronRight className="w-4 h-4 text-gray-400" />
                </Link>
              );
            })}

            <div className="pt-4 mt-2 border-t border-gray-100 space-y-2">
              <Button href="/contact" variant="primary" size="md" className="w-full">
                Submit B2B RFP / Enquiry
              </Button>
              <div className="text-center pt-2 text-xs text-gray-500">
                Operations Hub: Seawoods, Nerul, Navi Mumbai
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
