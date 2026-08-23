import React from 'react';
import { ArrowUpRight, ArrowRight } from 'lucide-react';
import { Button } from '../ui/Button';
import { companyInfo } from '../../data/company';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative bg-[#0A2118] text-[#F1EBDD] overflow-hidden border-b border-[#B99045]/20 min-h-[88vh] flex items-center">
      {/* Background Image Layer (55–65% Visual Presence with Editorial Mask) */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero.jpg"
          alt="Agricultural sourcing and fresh produce aggregation"
          className="w-full h-full object-cover object-center opacity-40 mix-blend-luminosity scale-105"
        />
        {/* Editorial Linear & Radial Dark Overlays for Pristine Legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A2118] via-[#0A2118]/85 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A2118] via-transparent to-[#0A2118]/60"></div>
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#B99045_1px,transparent_1px)] [background-size:32px_32px]"></div>
      </div>

      {/* Hero Content Container */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 relative z-10 w-full">
        <div className="max-w-2xl space-y-6 sm:space-y-7">
          
          {/* Top Gold Kicker */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#17412E]/70 border border-[#B99045]/30">
            <span className="w-1.5 h-1.5 rounded-full bg-[#B99045]"></span>
            <span className="text-[11px] font-mono font-medium tracking-[0.18em] uppercase text-[#B99045]">
              {companyInfo.legalName}
            </span>
          </div>

          {/* Main H1 in Fraunces */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-display font-medium tracking-tight leading-[1.12] text-[#F1EBDD]">
            Resilient supply chains from origin growers to organised retail.
          </h1>

          {/* PDF-Grounded Narrative Subtitle */}
          <p className="text-sm sm:text-base lg:text-lg text-[#E4D7BA]/85 leading-relaxed">
            Sourcing with integrity across India and strategic overseas import channels, delivering with precision to retail supermarket chains, café networks, and commercial food-service buyers.
          </p>

          {/* Primary CTA & Secondary Link */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
            <Button href="/contact" variant="primary" size="lg" icon={<ArrowUpRight className="w-4 h-4 text-[#B99045]" />}>
              Discuss procurement requirements
            </Button>
            <a
              href="/supply-chain"
              className="text-xs sm:text-sm text-[#E4D7BA]/80 hover:text-[#B99045] transition-colors inline-flex items-center justify-center gap-1.5 font-medium py-2 sm:py-0"
            >
              <span>Explore our supply journey</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Gold Route Journey Trace */}
          <div className="pt-6 sm:pt-8">
            <div className="w-full border-t border-[#B99045]/30 pt-3">
              <div className="grid grid-cols-4 text-center sm:text-left text-[10px] sm:text-xs font-mono uppercase tracking-wider text-[#B99045]">
                <span>01. Origin</span>
                <span>02. Global Import</span>
                <span>03. Dual-Stage QC</span>
                <span>04. Retail Dispatch</span>
              </div>
            </div>
          </div>

          {/* Restrained Group Metric Strip */}
          <div className="pt-2 flex flex-wrap items-center gap-y-2 gap-x-5 text-xs text-[#E4D7BA]/60 font-mono">
            <span>₹228 Cr Combined Group Turnover</span>
            <span className="text-[#B99045]/40">•</span>
            <span>Navi Mumbai Operations Hub</span>
            <span className="text-[#B99045]/40">•</span>
            <span>Rice • Pulses • Apples • Bananas • Coconut</span>
          </div>

        </div>
      </div>
    </section>
  );
};
