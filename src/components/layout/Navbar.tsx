import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowUpRight, MapPin } from 'lucide-react';
import { companyInfo } from '../../data/company';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: 'Supply Chain', href: '/supply-chain' },
    { label: 'Commodities', href: '/commodities' },
    { label: 'Network', href: '/network' },
    { label: 'Quality & QC', href: '/compliance' },
    { label: 'The Group', href: '/group' },
    { label: 'About', href: '/about' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-250 ${
          isScrolled
            ? 'bg-evergreen-950/95 backdrop-blur-md border-b border-gold-500/25 py-3.5 shadow-elevated'
            : 'bg-evergreen-950/80 backdrop-blur-sm border-b border-gold-500/15 py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between">
          {/* Logo / Brand Mark */}
          <Link to="/" className="flex items-center gap-3 group focus:outline-none">
            <div className="w-9 h-9 bg-field-900 flex items-center justify-center border border-gold-500/40 group-hover:border-gold-500 transition-colors">
              <span className="text-cream-100 font-display font-semibold text-lg tracking-tight">
                T
              </span>
            </div>
            <div className="flex flex-col">
              <span className="font-display font-medium text-lg tracking-tight text-cream-100 group-hover:text-gold-500 transition-colors leading-tight">
                {companyInfo.shortName}
              </span>
              <span className="text-[9px] font-mono uppercase tracking-[0.16em] text-gold-500/80 hidden sm:block">
                B2B Agri Procurement
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.href;
              return (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`text-xs font-mono uppercase tracking-[0.14em] transition-colors py-1 relative ${
                    isActive
                      ? 'text-gold-500 font-semibold'
                      : 'text-parchment-100/75 hover:text-gold-500'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-px bg-gold-500" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <div className="h-4 w-px bg-gold-500/25" />
            <Link
              to="/contact"
              className="text-xs font-mono uppercase tracking-widest bg-field-900 text-gold-500 hover:text-cream-100 border border-gold-500/40 hover:border-gold-500 px-5 py-2.5 transition-all flex items-center gap-2 btn-tactile group"
            >
              <span>Procurement Desk</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-gold-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="lg:hidden p-2 text-cream-100 hover:text-gold-500 focus:outline-none transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden bg-evergreen-950/98 backdrop-blur-xl flex flex-col justify-between pt-24 pb-8 px-6 animate-fade-in overflow-y-auto">
          <div className="space-y-6">
            <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-gold-500 border-b border-gold-500/20 pb-2">
              Navigation Index
            </div>
            <nav className="space-y-4">
              <Link
                to="/"
                className="block text-2xl font-display font-medium text-cream-100 hover:text-gold-500 transition-colors"
              >
                Overview
              </Link>
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="block text-xl font-display font-medium text-parchment-100/80 hover:text-gold-500 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="space-y-6 pt-8 border-t border-gold-500/20">
            <Link
              to="/contact"
              className="w-full text-center text-xs font-mono uppercase tracking-widest bg-field-900 text-gold-500 border border-gold-500/40 py-3.5 block transition-colors btn-tactile"
            >
              Discuss Procurement Inquiry
            </Link>

            <div className="text-xs text-parchment-100/60 font-mono space-y-1">
              <div className="flex items-center gap-1.5 text-gold-500">
                <MapPin className="w-3.5 h-3.5" />
                <span>Navi Mumbai Operations Hub</span>
              </div>
              <p className="text-[11px] leading-relaxed">
                Sector 48, Seawoods, Nerul, Navi Mumbai – 400706
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
