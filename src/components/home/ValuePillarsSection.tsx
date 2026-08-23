import React from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { companyInfo } from '../../data/company';

export const ValuePillarsSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 bg-[#FBF7EE] border-b border-[#0E1C14]/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <SectionHeading
          badgeText="THE TTB ADVANTAGE"
          title="Why TTB Agro India?"
          highlightText="Our Three Core Pillars."
          description="The institutional foundation that enables dependable commercial supply across domestic and international trade routes."
          align="center"
        />

        {/* 3 Pillars (Slide 10) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {companyInfo.pillars.map((pillar, idx) => (
            <div
              key={idx}
              className="p-6 rounded bg-[#F4EFE4] border border-[#0E1C14]/10 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <span className="text-[10px] uppercase font-mono font-bold text-[#8C7033] tracking-widest block">
                  PILLAR 0{idx + 1}
                </span>

                <h3 className="text-xl font-display font-medium text-[#0E1C14]">
                  {pillar.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#3D4A42] leading-relaxed">
                  {pillar.description}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-[#0E1C14]/10 text-xs font-mono text-[#1A3C2C] font-medium">
                {pillar.highlight}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
