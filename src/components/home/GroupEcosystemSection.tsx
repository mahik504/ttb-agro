import React from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { groupEntities, groupSummary } from '../../data/group';

export const GroupEcosystemSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-[#0A2118] text-[#F1EBDD] border-b border-[#B99045]/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <SectionHeading
          badgeText="GROUP AT A GLANCE"
          title="Backed by an Established"
          highlightText="₹228 Cr Group Portfolio."
          description={groupSummary.ecosystemStatement}
          align="center"
          dark={true}
        />

        {/* 4 Group Entities Data Panel */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {groupEntities.map((entity) => (
            <div
              key={entity.id}
              className="p-5 sm:p-6 rounded-md bg-[#17412E]/40 border border-[#B99045]/25 flex flex-col justify-between hover:border-[#B99045]/50 transition-colors shadow-subtle"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] uppercase font-mono font-bold text-[#B99045] tracking-wider">
                    {entity.role}
                  </span>
                  <span className="font-mono font-bold text-sm text-[#F1EBDD]">
                    {entity.turnoverContribution}
                  </span>
                </div>

                <div>
                  <h3 className="text-lg font-display font-medium text-[#F1EBDD]">
                    {entity.name}
                  </h3>
                </div>

                <p className="text-xs text-[#E4D7BA]/75 leading-relaxed">
                  {entity.description}
                </p>
              </div>

              <div className="pt-3 mt-4 border-t border-[#B99045]/15 text-[11px] text-[#B99045] font-mono">
                {entity.id === 'sp-coconut' && 'Zero-waste coconut value-add'}
                {entity.id === 'just-go-eco' && 'Sustainable product lines'}
                {entity.id === 'just-go-project' && 'Agri-logistics & execution'}
                {entity.id === 'stp-traders-ttb' && 'Staples & fresh trading engine'}
              </div>
            </div>
          ))}
        </div>

        {/* Mandatory Caption */}
        <div className="mt-8 p-3.5 rounded bg-[#17412E]/25 border border-[#B99045]/20 text-center text-xs text-[#E4D7BA]/65 font-mono">
          Combined group turnover presented in the corporate profile; not TTB Agro standalone revenue.
        </div>

      </div>
    </section>
  );
};
