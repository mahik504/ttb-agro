import React from 'react';
import { ArrowUpRight, ArrowRight } from 'lucide-react';
import { Button } from '../ui/Button';
import { companyInfo } from '../../data/company';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative mesh-wash-dark text-[#FBF7EE] overflow-hidden pt-16 pb-20 sm:pt-24 sm:pb-28 border-b border-[#C4A35A]/20 min-h-[86vh] flex flex-col justify-center">
      {/* Background Architectural Grid Pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#C4A35A_1px,transparent_1px)] [background-size:28px_28px]"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-7">
        
        {/* Top Gold Kicker */}
        <div className="inline-flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#C4A35A]"></span>
          <span className="text-xs sm:text-sm font-mono font-medium tracking-[0.2em] uppercase text-[#C4A35A]">
            {companyInfo.legalName}
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#C4A35A]"></span>
        </div>

        {/* Main H1 in Fraunces */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-display font-medium tracking-tight leading-[1.12] text-[#FBF7EE]">
          Resilient supply chains from origin growers to organised retail.
        </h1>

        {/* Concise Narrative Subtitle (PDF Slide 2) */}
        <p className="text-base sm:text-lg text-[#EAE4D5]/80 leading-relaxed max-w-2xl mx-auto">
          Sourcing with integrity across India and global import channels, delivering with precision to retail chains, hospitality networks, and institutional buyers.
        </p>

        {/* Single Primary CTA and Clean Secondary Link */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          <Button href="/contact" variant="primary" size="lg" icon={<ArrowUpRight className="w-4 h-4 text-[#C4A35A]" />}>
            Discuss procurement requirements
          </Button>
          <a
            href="/supply-chain"
            className="text-xs sm:text-sm text-[#EAE4D5]/70 hover:text-[#C4A35A] transition-colors inline-flex items-center gap-1 font-medium underline underline-offset-4"
          >
            <span>Our supply journey</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Thin Gold Journey Line (Four Steps) */}
        <div className="pt-8 pb-4">
          <div className="w-full max-w-xl mx-auto border-t border-[#C4A35A]/30 relative">
            <div className="flex justify-between items-center text-[10px] sm:text-xs font-mono uppercase tracking-wider text-[#C4A35A] pt-3 px-1">
              <span>01. Origin</span>
              <span className="text-[#EAE4D5]/40">→</span>
              <span>02. Global Import</span>
              <span className="text-[#EAE4D5]/40">→</span>
              <span>03. Dual-Stage QC</span>
              <span className="text-[#EAE4D5]/40">→</span>
              <span>04. Retail Dispatch</span>
            </div>
          </div>
        </div>

        {/* Trust Strip */}
        <div className="pt-4 border-t border-[#0E1C14]/30 flex flex-wrap items-center justify-center gap-y-2 gap-x-6 text-xs text-[#EAE4D5]/60 font-mono">
          <span>₹228 Cr Group Ecosystem</span>
          <span className="text-[#C4A35A]/40">•</span>
          <span>Navi Mumbai Operations Hub</span>
          <span className="text-[#C4A35A]/40">•</span>
          <span>Rice • Pulses • Apples • Bananas • Coconut</span>
        </div>

      </div>
    </section>
  );
};
