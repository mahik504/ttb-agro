import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { mainNavigation } from '../../data/navigation';
import { companyInfo } from '../../data/company';
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

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <header className="sticky top-0 z-40 w-full transition-all duration-200">
      {/* Top Utility Bar */}
      <div className="bg-[#0B1E15] text-[#FBF7EE]/80 text-[11px] py-1.5 px-4 sm:px-8 border-b border-[#C4A35A]/20">
        <div className="max-w-6xl mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C4A35A]"></span>
            <span>Part of a diversified <strong className="text-[#C4A35A] font-medium font-mono">{companyInfo.groupTurnover}</strong> Group Ecosystem</span>
          </div>
          <div className="hidden sm:flex items-center gap-4 text-[#FBF7EE]/70 font-mono text-[11px]">
            <span>Navi Mumbai Operations Hub</span>
            <span className="text-[#C4A35A]/40">|</span>
            <a href={`mailto:${companyInfo.contact.officialEmail}`} className="hover:text-[#FBF7EE] transition-colors">
              {companyInfo.contact.officialEmail}
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav
        className={`w-full transition-all duration-200 ${
          scrolled
            ? 'bg-[#FBF7EE]/95 backdrop-blur-md shadow-xs border-b border-[#0E1C14]/10 py-3'
            : 'bg-[#FBF7EE] border-b border-[#0E1C14]/10 py-3.5'
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Wordmark */}
          <Link to="/" className="flex items-center gap-3 group focus:outline-none" aria-label="TTB Agro Home">
            <div className="w-8 h-8 rounded bg-[#1A3C2C] flex items-center justify-center text-[#FBF7EE] border border-[#C4A35A]/30">
              <span className="font-display font-medium text-xs tracking-wider text-[#C4A35A]">TTB</span>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="text-lg font-display font-medium tracking-tight text-[#0E1C14]">TTB Agro</span>
                <span className="text-[9px] font-mono uppercase tracking-wider px-1.5 py-0.2 rounded bg-[#0E1C14]/5 text-[#3D4A42] border border-[#0E1C14]/10">
                  India
                </span>
              </div>
              <span className="text-[10px] text-[#66746B] font-medium tracking-wide uppercase">
                Private Limited • B2B Sourcing
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links (Visible on lg and above) */}
          <div className="hidden xl:flex items-center space-x-1">
            {mainNavigation.map((item) => {
              const isActive = location.pathname === item.href;
              return (
                <Link
                  key={item.href}
                  to={item.href}
                  className={`px-3 py-1.5 rounded text-xs font-medium transition-colors ${
                    isActive
                      ? 'text-[#0E1C14] font-semibold border-b border-[#1A3C2C]'
                      : 'text-[#3D4A42] hover:text-[#0E1C14] hover:bg-[#0E1C14]/5'
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>

          {/* Right Action: Single Clean Primary Button */}
          <div className="hidden sm:flex items-center gap-3">
            <Button href="/contact" variant="primary" size="sm" icon={<ArrowUpRight className="w-3.5 h-3.5" />}>
              Discuss Requirements
            </Button>
          </div>

          {/* Mobile & Tablet Hamburger (Visible under xl) */}
          <div className="flex xl:hidden items-center gap-2">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded text-[#0E1C14] hover:bg-[#0E1C14]/5 focus:outline-none"
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile / Tablet Drawer */}
        {isOpen && (
          <div className="xl:hidden border-t border-[#0E1C14]/10 bg-[#FBF7EE] px-4 pt-3 pb-6 space-y-1 shadow-sm">
            {mainNavigation.map((item) => {
              const isActive = location.pathname === item.href;
              return (
                <Link
                  key={item.href}
                  to={item.href}
                  className={`flex items-center justify-between px-3 py-2.5 rounded text-sm font-medium transition-colors ${
                    isActive
                      ? 'text-[#1A3C2C] bg-[#1A3C2C]/5 font-semibold'
                      : 'text-[#3D4A42] hover:bg-[#0E1C14]/5'
                  }`}
                >
                  <span>{item.label}</span>
                </Link>
              );
            })}

            <div className="pt-4 mt-2 border-t border-[#0E1C14]/10 space-y-2">
              <Button href="/contact" variant="primary" size="md" className="w-full">
                Discuss Requirements
              </Button>
              <div className="text-center pt-1 text-xs text-[#66746B] font-mono">
                Operations Hub: Seawoods, Nerul, Navi Mumbai
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
