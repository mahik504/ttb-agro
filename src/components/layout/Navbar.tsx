import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { mainNavigation } from '../../data/navigation';
import { Button } from '../ui/Button';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <header className="sticky top-0 z-40 w-full transition-all duration-200">
      <nav
        className={`w-full transition-all duration-200 ${
          scrolled
            ? 'bg-[#0A2118]/95 backdrop-blur-md shadow-md border-b border-[#B99045]/20 py-3 text-[#F1EBDD]'
            : 'bg-[#0A2118] border-b border-[#B99045]/20 py-4 text-[#F1EBDD]'
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Wordmark */}
          <Link to="/" className="flex items-center gap-3 group focus:outline-none" aria-label="TTB Agro Home">
            <div className="w-8 h-8 rounded bg-[#17412E] flex items-center justify-center text-[#F1EBDD] border border-[#B99045]/40 shadow-xs">
              <span className="font-display font-medium text-xs tracking-wider text-[#B99045]">TTB</span>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="text-lg font-display font-medium tracking-tight text-[#F1EBDD]">TTB Agro</span>
                <span className="text-[9px] font-mono uppercase tracking-wider px-1.5 py-0.2 rounded bg-[#17412E] text-[#B99045] border border-[#B99045]/30">
                  India
                </span>
              </div>
              <span className="text-[9px] text-[#E4D7BA]/60 font-mono tracking-wider uppercase">
                B2B Sourcing &amp; Procurement
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-1">
            {mainNavigation.map((item) => {
              const isActive = location.pathname === item.href;
              return (
                <Link
                  key={item.href}
                  to={item.href}
                  className={`px-3.5 py-1.5 rounded text-xs font-medium transition-colors ${
                    isActive
                      ? 'text-[#B99045] font-semibold border-b border-[#B99045]'
                      : 'text-[#E4D7BA]/80 hover:text-[#F1EBDD] hover:bg-[#17412E]/40'
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>

          {/* Right Action: Single Clean Primary Button */}
          <div className="hidden sm:flex items-center gap-3">
            <Button href="/contact" variant="primary" size="sm" icon={<ArrowUpRight className="w-3.5 h-3.5 text-[#B99045]" />}>
              Discuss Requirements
            </Button>
          </div>

          {/* Mobile Hamburger */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded text-[#F1EBDD] hover:bg-[#17412E] focus:outline-none"
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Drawer */}
        {isOpen && (
          <div className="md:hidden border-t border-[#B99045]/20 bg-[#0A2118] px-4 pt-3 pb-6 space-y-1 shadow-elevated">
            {mainNavigation.map((item) => {
              const isActive = location.pathname === item.href;
              return (
                <Link
                  key={item.href}
                  to={item.href}
                  className={`flex items-center justify-between px-3 py-2.5 rounded text-sm font-medium transition-colors ${
                    isActive
                      ? 'text-[#B99045] bg-[#17412E]/50 font-semibold'
                      : 'text-[#E4D7BA]/80 hover:bg-[#17412E]/30 hover:text-[#F1EBDD]'
                  }`}
                >
                  <span>{item.label}</span>
                </Link>
              );
            })}

            <div className="pt-4 mt-2 border-t border-[#B99045]/20 space-y-2">
              <Button href="/contact" variant="primary" size="md" className="w-full">
                Discuss Requirements
              </Button>
              <div className="text-center pt-1 text-[11px] text-[#E4D7BA]/60 font-mono">
                Navi Mumbai Operations Hub
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
