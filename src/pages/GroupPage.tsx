import React from 'react';
import { PageHeader } from '../components/layout/PageHeader';
import { SectionHeading } from '../components/ui/SectionHeading';
import { groupEntities, groupSummary } from '../data/group';
import { customerSegments, clientDisclaimer } from '../data/customers';
import { CheckCircle2 } from 'lucide-react';

export const GroupPage: React.FC = () => {
  return (
    <div className="bg-[#F1EBDD] min-h-screen pb-20">
      {/* Page Header */}
      <PageHeader
        badgeText="GROUP ECOSYSTEM"
        title="Backed by an Established"
        highlightText="₹228 Cr Group Portfolio."
        description="TTB Agro India operates alongside sister entities, sharing an agricultural ecosystem, specialized processing facilities, and financial stability."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Group Portfolio' }
        ]}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 space-y-16">
        
        {/* Section 1: Sister Entities Breakdown (Slide 3 & 4) */}
        <div className="space-y-8">
          <SectionHeading
            badgeText="PORTFOLIO BREAKDOWN"
            title="The TTB Agri &amp; Eco Ecosystem"
            description="Our group entities span trading and procurement, specialized value-added processing, and sustainable project execution."
            align="left"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {groupEntities.map((entity) => (
              <div
                key={entity.id}
                className="p-6 sm:p-7 rounded-md bg-[#E4D7BA] border border-[#122017]/15 space-y-4 shadow-subtle"
              >
                <div className="flex items-center justify-between border-b border-[#122017]/10 pb-3">
                  <span className="text-[10px] font-mono uppercase font-bold text-[#B99045] tracking-widest">
                    {entity.role}
                  </span>
                  <span className="font-mono font-bold text-sm text-[#17412E]">
                    {entity.turnoverContribution}
                  </span>
                </div>

                <div>
                  <h3 className="text-xl font-display font-medium text-[#122017]">
                    {entity.name}
                  </h3>
                  <p className="text-xs text-[#405046] leading-relaxed mt-1">
                    {entity.description}
                  </p>
                </div>

                <div className="space-y-1.5 pt-2">
                  <span className="text-[10px] font-mono uppercase font-bold text-[#63756A] block">
                    Core Focus &amp; Capabilities:
                  </span>
                  <div className="space-y-1">
                    {entity.capabilities.map((cap, cIdx) => (
                      <div key={cIdx} className="flex items-start gap-2 text-xs text-[#405046]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#17412E] shrink-0 mt-0.5" />
                        <span>{cap}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-3 rounded bg-[#F1EBDD] border border-[#122017]/10 text-xs text-[#405046]">
                  <strong className="text-[#122017]">Synergy with TTB Agro:</strong> {entity.synergyWithTTB}
                </div>
              </div>
            ))}
          </div>

          <div className="p-4 rounded bg-[#E4D7BA] border border-[#122017]/15 text-xs text-[#63756A] text-center font-mono">
            {groupSummary.disclaimerNote}
          </div>
        </div>

        {/* Section 2: Customer Segments (Slide 9) */}
        <div className="space-y-8 pt-6 border-t border-[#122017]/10">
          <SectionHeading
            badgeText="MARKET SEGMENTS &amp; CLIENT CATEGORIES"
            title="Supplying Leading Retail &amp;"
            highlightText="Hospitality Networks."
            description="Our procurement and supply infrastructure serves organized supermarket retail, QSR café networks, and regional hospitality partners."
            align="left"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {customerSegments.map((segment) => (
              <div
                key={segment.id}
                className="p-6 rounded-md bg-[#E4D7BA] border border-[#122017]/15 flex flex-col justify-between space-y-4 shadow-subtle"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono uppercase font-bold text-[#B99045] tracking-widest">
                      {segment.volumeTier}
                    </span>
                  </div>

                  <h3 className="text-xl font-display font-medium text-[#122017]">
                    {segment.title}
                  </h3>

                  {/* Text References (Strictly Text, No Logos) */}
                  <div className="p-3.5 rounded bg-[#0A2118] text-[#F1EBDD] border border-[#B99045]/20">
                    <span className="text-[9px] uppercase font-mono text-[#B99045] block">Sector Reference Brands:</span>
                    <strong className="text-sm font-display tracking-wide text-[#F1EBDD] block mt-0.5">
                      {segment.clientReferences.join(' • ')}
                    </strong>
                  </div>

                  <div className="space-y-1.5 pt-1">
                    <span className="text-[10px] font-mono uppercase font-bold text-[#63756A] block">
                      Procurement Requirements:
                    </span>
                    <ul className="space-y-1.5 text-xs text-[#405046]">
                      {segment.requirements.map((req, rIdx) => (
                        <li key={rIdx} className="flex items-start gap-1.5">
                          <span className="w-1 h-1 rounded-full bg-[#17412E] shrink-0 mt-1.5"></span>
                          <span>{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="p-3 rounded bg-[#F1EBDD] border border-[#122017]/10 text-xs text-[#405046]">
                  <strong className="text-[#122017]">TTB Solution:</strong> {segment.ttbSolution}
                </div>
              </div>
            ))}
          </div>

          <div className="p-3.5 rounded bg-[#E4D7BA] border border-[#122017]/15 text-[11px] text-[#63756A] text-center italic">
            {clientDisclaimer}
          </div>
        </div>

      </div>
    </div>
  );
};
