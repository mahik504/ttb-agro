import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { companyInfo } from '../../data/company';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'dark-glass-panel py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between">
        
        {/* Logo */}
        <a href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 bg-brand-600 rounded-sm flex items-center justify-center border border-brand-500 group-hover:bg-brand-500 transition-colors">
            <span className="text-surface font-display font-bold text-xl tracking-tighter">TTB</span>
          </div>
          <span className="font-display font-semibold text-xl tracking-tight text-surface hidden sm:block">
            {companyInfo.shortName}
          </span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          <a href="/supply-chain" className="text-sm font-medium text-surface-muted hover:text-accent transition-colors">Supply Chain</a>
          <a href="/commodities" className="text-sm font-medium text-surface-muted hover:text-accent transition-colors">Commodities</a>
          <a href="/group" className="text-sm font-medium text-surface-muted hover:text-accent transition-colors">The Group</a>
          <a href="/network" className="text-sm font-medium text-surface-muted hover:text-accent transition-colors">Network</a>
          <a href="/contact" className="text-sm font-medium bg-surface text-brand-950 px-5 py-2.5 hover:bg-accent transition-colors">
            Partner With Us
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden text-surface" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

      </div>
    </nav>
  );
};
