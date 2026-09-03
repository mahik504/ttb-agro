import React from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { companyInfo } from '../../data/company';
import { ShieldCheck } from 'lucide-react';

export const ValuePillarsSection: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 bg-cream-100 border-b border-ink-900/10 relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Heading */}
        <SectionHeading
          badgeText="THE TTB ADVANTAGE • THREE PILLARS (SLIDE 10)"
          title="Commercial Sourcing Pillars:"
          highlightText="Scale, Reach &amp; Integrity."
          description="The institutional foundation enabling dependable agricultural supply across domestic harvest calendars and strategic overseas import pipelines."
          align="center"
          className="max-w-3xl mx-auto mb-12 lg:mb-16"
        />

        {/* 3 Pillars Grid with Asymmetric Editorial Card styling */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {companyInfo.pillars.map((pillar, idx) => (
            <div
              key={idx}
              className="p-7 sm:p-9 bg-parchment-100 border border-ink-900/15 flex flex-col justify-between shadow-subtle hover:border-gold-500/50 transition-all"
            >
              <div className="space-y-4">
                <span className="text-[11px] uppercase font-mono font-bold text-gold-600 tracking-[0.16em] block">
                  PILLAR 0{idx + 1}
                </span>

                <h3 className="text-xl sm:text-2xl font-display font-medium text-ink-900 leading-snug">
                  {pillar.title}
                </h3>

                <p className="text-sm text-ink-soft leading-relaxed font-sans">
                  {pillar.description}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-ink-900/10 text-xs font-mono text-field-900 font-medium flex items-center justify-between">
                <span>{pillar.highlight}</span>
                <ShieldCheck className="w-4 h-4 text-gold-500" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
