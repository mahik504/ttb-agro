import React from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { companyInfo } from '../../data/company';

export const ValuePillarsSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-[#F1EBDD] border-b border-[#122017]/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <SectionHeading
          badgeText="THE TTB ADVANTAGE"
          title="Commercial Sourcing Pillars:"
          highlightText="Scale, Reach &amp; Trust."
          description="The institutional foundation enabling dependable agricultural supply across domestic harvest cycles and dedicated global import corridors."
          align="center"
        />

        {/* 3 Pillars (Slide 10) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {companyInfo.pillars.map((pillar, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-7 rounded-md bg-[#E4D7BA] border border-[#122017]/15 flex flex-col justify-between shadow-subtle"
            >
              <div className="space-y-3">
                <span className="text-[10px] uppercase font-mono font-bold text-[#B99045] tracking-widest block">
                  PILLAR 0{idx + 1}
                </span>

                <h3 className="text-xl font-display font-medium text-[#122017]">
                  {pillar.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#405046] leading-relaxed">
                  {pillar.description}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-[#122017]/10 text-xs font-mono text-[#17412E] font-medium">
                {pillar.highlight}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
