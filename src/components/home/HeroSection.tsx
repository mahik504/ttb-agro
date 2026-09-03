import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Globe, ShieldCheck, TrendingUp } from 'lucide-react';
import { Button } from '../ui/Button';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-[92vh] flex items-center bg-brand-950 text-surface overflow-hidden pt-20">
      {/* Background Video / Image with strict overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1595841696650-6f2048f32811?auto=format&fit=crop&q=80&w=2000"
          alt="Modern Agricultural Logistics"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-950 via-brand-950/90 to-brand-900/40"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10 w-full flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
        
        {/* Left Column: Typographic Narrative */}
        <div className="w-full lg:w-3/5 space-y-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full dark-glass-panel"
          >
            <ShieldCheck className="w-4 h-4 text-accent" />
            <span className="text-xs font-mono font-medium tracking-widest uppercase text-surface-muted">
              TTB Agro India Pvt. Ltd.
            </span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="text-5xl sm:text-6xl lg:text-[5.5rem] font-display font-semibold tracking-tighter leading-[1.05] text-surface"
          >
            The New Standard in <span className="text-accent">Agri-Sourcing.</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="text-lg sm:text-xl text-brand-200 leading-relaxed max-w-2xl font-light"
          >
            We orchestrate high-volume, precision-graded agricultural supply chains from global origins directly to India's leading organised retail and food-service networks.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-6 pt-4"
          >
            <Button href="/contact" variant="primary" size="lg" className="bg-brand-600 hover:bg-brand-500 text-white rounded-none px-8 py-4 font-display font-medium tracking-wide flex items-center justify-center gap-3 transition-colors">
              Discuss Procurement <ArrowUpRight className="w-5 h-5" />
            </Button>
            <a href="/supply-chain" className="text-sm text-surface-muted hover:text-accent transition-colors flex items-center justify-center gap-3 font-mono uppercase tracking-widest">
              Explore Network
            </a>
          </motion.div>
        </div>

        {/* Right Column: Architectural Data Visualization */}
        <motion.div 
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
          className="w-full lg:w-2/5 hidden md:block"
        >
          <div className="grid grid-cols-1 gap-6">
            <div className="dark-glass-panel p-8 hover-lift">
              <Globe className="w-8 h-8 text-accent mb-6" />
              <div className="text-sm font-mono text-brand-300 mb-2 uppercase tracking-widest">Global Reach</div>
              <div className="text-4xl font-display font-semibold text-surface">15+</div>
              <div className="text-sm text-brand-200 mt-2">Sourcing Geographies</div>
            </div>
            
            <div className="dark-glass-panel p-8 hover-lift relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-600/20 rounded-full blur-3xl"></div>
              <TrendingUp className="w-8 h-8 text-accent mb-6 relative z-10" />
              <div className="text-sm font-mono text-brand-300 mb-2 uppercase tracking-widest relative z-10">Annual Volume</div>
              <div className="text-4xl font-display font-semibold text-surface relative z-10">₹228 Cr</div>
              <div className="text-sm text-brand-200 mt-2 relative z-10">Combined Group Turnover</div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
