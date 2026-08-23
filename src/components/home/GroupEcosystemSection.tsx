import React from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { groupEntities, groupSummary } from '../../data/group';

export const GroupEcosystemSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 bg-[#0B1E15] text-[#FBF7EE] border-b border-[#C4A35A]/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <SectionHeading
          badgeText="INSTITUTIONAL STRENGTH"
          title="Backed by a Diversified"
          highlightText="₹228 Cr Group Portfolio."
          description={groupSummary.ecosystemStatement}
          align="center"
          dark={true}
        />

        {/* 4 Group Entities */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {groupEntities.map((entity) => (
            <div
              key={entity.id}
              className="p-5 rounded bg-[#1A3C2C]/30 border border-[#C4A35A]/20 flex flex-col justify-between hover:border-[#C4A35A]/40 transition-colors"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] uppercase font-mono font-bold text-[#C4A35A] tracking-wider">
                    {entity.role}
                  </span>
                  <span className="font-mono font-bold text-sm text-[#FBF7EE]">
                    {entity.turnoverContribution}
                  </span>
                </div>

                <div>
                  <h3 className="text-lg font-display font-medium text-[#FBF7EE]">
                    {entity.name}
                  </h3>
                </div>

                <p className="text-xs text-[#EAE4D5]/70 leading-relaxed">
                  {entity.description}
                </p>
              </div>

              <div className="pt-3 mt-4 border-t border-[#C4A35A]/15 text-[11px] text-[#C4A35A] font-mono">
                {entity.id === 'sp-coconut' && 'Zero-waste coconut value-add'}
                {entity.id === 'just-go-eco' && 'Sustainable product line'}
                {entity.id === 'just-go-project' && 'Agri-infrastructure & logistics'}
                {entity.id === 'stp-traders-ttb' && 'Staples & fresh trading engine'}
              </div>
            </div>
          ))}
        </div>

        {/* Disclaimer Note */}
        <div className="mt-8 p-3 rounded bg-[#1A3C2C]/20 border border-[#C4A35A]/15 text-center text-xs text-[#EAE4D5]/60">
          {groupSummary.disclaimerNote}
        </div>

      </div>
    </section>
  );
};
