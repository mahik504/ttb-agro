import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight, ArrowRight, ShieldCheck } from 'lucide-react';
import { Button } from '../ui/Button';
import { companyInfo } from '../../data/company';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center bg-evergreen-950 text-cream-100 overflow-hidden border-b border-gold-500/20 pt-24 pb-16">
      {/* Background Image Layer with Editorial Mask & Atmosphere */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero.jpg"
          alt="Agricultural sourcing and fresh produce aggregation"
          className="w-full h-full object-cover object-center opacity-35 mix-blend-luminosity scale-105"
        />
        {/* Subtle Dark Overlays for Pristine Legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-evergreen-950 via-evergreen-950/90 to-evergreen-950/60"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-evergreen-950 via-transparent to-evergreen-950/70"></div>
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#B99045_1px,transparent_1px)] [background-size:32px_32px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10 w-full py-8 lg:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Typographic Narrative & Geographic Trace */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Crisp Structured Badge (Anti-Pill) */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="inline-flex items-center gap-2.5 px-3.5 py-1.5 bg-field-900/80 border border-gold-500/30 rounded-none"
            >
              <ShieldCheck className="w-4 h-4 text-gold-500" />
              <span className="text-[11px] font-mono font-medium tracking-[0.18em] uppercase text-gold-500">
                {companyInfo.legalName}
              </span>
            </motion.div>

            {/* Display Headline in Fraunces */}
            <motion.h1 
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-display font-medium tracking-tight leading-[1.1] text-cream-100"
            >
              Resilient supply chains from origin growers to <span className="text-gold-500 italic font-normal">organised retail.</span>
            </motion.h1>

            {/* Narrative Subtitle */}
            <motion.p 
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
              className="text-base sm:text-lg text-parchment-100/85 leading-relaxed max-w-2xl font-light"
            >
              Sourcing with integrity across India and strategic overseas import channels, delivering precision-graded commodities to retail supermarket chains, café networks, and commercial food-service buyers.
            </motion.p>

            {/* CTA Group with Tactile Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-5 pt-2"
            >
              <Button 
                href="/contact" 
                variant="primary" 
                size="lg" 
                className="bg-field-900 hover:bg-field-800 text-cream-100 border border-gold-500/40 rounded-none px-8 py-4 font-display font-medium tracking-wide flex items-center justify-center gap-3 transition-colors btn-tactile"
              >
                Discuss Procurement <ArrowUpRight className="w-4 h-4 text-gold-500" />
              </Button>
              <Link 
                to="/supply-chain" 
                className="text-xs sm:text-sm text-parchment-100/80 hover:text-gold-500 transition-colors flex items-center justify-center gap-2 font-mono uppercase tracking-widest py-3"
              >
                <span>Explore Supply Network</span>
                <ArrowRight className="w-4 h-4 text-gold-500" />
              </Link>
            </motion.div>

            {/* 4-Step Origin Journey Kicker */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="pt-6 border-t border-gold-500/20"
            >
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-[11px] font-mono uppercase tracking-wider text-gold-500">
                <div className="flex items-center gap-1.5">
                  <span className="text-gold-500/60 font-bold">01.</span> Origin Aggregation
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="text-gold-500/60 font-bold">02.</span> Global Import
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="text-gold-500/60 font-bold">03.</span> Dual-Stage QC
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="text-gold-500/60 font-bold">04.</span> Retail Dispatch
                </div>
              </div>
            </motion.div>

          </div>

          {/* Right Column: Architectural Procurement Ledger Cards */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
            className="lg:col-span-5 space-y-5"
          >
            {/* Primary Ledger Card */}
            <div className="bg-evergreen-900/90 border border-gold-500/30 p-7 rounded-none shadow-ledger">
              <div className="flex items-center justify-between border-b border-gold-500/20 pb-4 mb-5">
                <span className="text-xs font-mono uppercase tracking-widest text-gold-500">
                  Institutional Ledger
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 bg-field-900 border border-gold-500/30 text-parchment-100">
                  Verified Scale
                </span>
              </div>
              
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="text-3xl sm:text-4xl font-display font-medium text-cream-100">
                    ₹228 Cr
                  </div>
                  <div className="text-xs font-mono text-parchment-200 mt-1 uppercase tracking-wider">
                    Group Ecosystem Turnover
                  </div>
                </div>
                <div>
                  <div className="text-3xl sm:text-4xl font-display font-medium text-gold-500">
                    5
                  </div>
                  <div className="text-xs font-mono text-parchment-200 mt-1 uppercase tracking-wider">
                    Core Commodity Lines
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-5 border-t border-gold-500/20">
                <div className="text-[11px] font-mono text-parchment-100/70 uppercase tracking-wider mb-2">
                  Key Procurement Corridors
                </div>
                <p className="text-xs text-parchment-200 leading-relaxed font-sans">
                  Rice (TN) • Pulses (Pan-India) • Apples (Himachal, Kashmir, Iran, Turkey) • Bananas (TN, Karnataka, Maharashtra) • Coconut (Pollachi)
                </p>
              </div>
            </div>

            {/* Secondary Operations Hub Badge */}
            <div className="bg-field-900/60 border border-gold-500/20 p-5 rounded-none flex items-center justify-between">
              <div>
                <div className="text-[10px] font-mono text-gold-500 uppercase tracking-widest">
                  Central Operations & QC
                </div>
                <div className="text-sm font-display text-cream-100 mt-0.5">
                  Seawoods, Navi Mumbai Dock
                </div>
              </div>
              <div className="text-right">
                <div className="text-[10px] font-mono text-parchment-200 uppercase tracking-wider">
                  Quality Checkpoints
                </div>
                <div className="text-sm font-mono text-gold-500 font-semibold">
                  Dual-Stage Gate
                </div>
              </div>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};
