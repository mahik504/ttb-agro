import React from 'react';
import { PageHeader } from '../components/layout/PageHeader';
import { SectionHeading } from '../components/ui/SectionHeading';
import { groupEntities, groupSummary } from '../data/group';
import { customerSegments, clientDisclaimer } from '../data/customers';
import { CheckCircle2 } from 'lucide-react';

export const GroupPage: React.FC = () => {
  return (
    <div className="bg-[#F4EFE4] min-h-screen pb-20">
      {/* Page Header */}
      <PageHeader
        badgeText="CONGLOMERATE ECOSYSTEM"
        title="Backed by a Diversified"
        highlightText="₹228 Cr Group Portfolio."
        description="TTB Agro India operates seamlessly alongside sister entities, sharing a holistic agricultural ecosystem, extensive infrastructure, and financial stability."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Group Ecosystem' }
        ]}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 space-y-16">
        
        {/* Section 1: Sister Entities Breakdown (Slide 3 & 4) */}
        <div className="space-y-8">
          <SectionHeading
            badgeText="PORTFOLIO BREAKDOWN"
            title="The TTB Agri & Eco Ecosystem"
            description="Our group entities span trading and procurement, specialized value-added processing, and sustainable project execution."
            align="left"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {groupEntities.map((entity) => (
              <div
                key={entity.id}
                className="p-6 sm:p-7 rounded bg-[#FBF7EE] border border-[#0E1C14]/10 space-y-4"
              >
                <div className="flex items-center justify-between border-b border-[#0E1C14]/10 pb-3">
                  <span className="text-[10px] font-mono uppercase font-bold text-[#8C7033] tracking-widest">
                    {entity.role}
                  </span>
                  <span className="font-mono font-bold text-sm text-[#1A3C2C]">
                    {entity.turnoverContribution}
                  </span>
                </div>

                <div>
                  <h3 className="text-xl font-display font-medium text-[#0E1C14]">
                    {entity.name}
                  </h3>
                  <p className="text-xs text-[#3D4A42] leading-relaxed mt-1">
                    {entity.description}
                  </p>
                </div>

                <div className="space-y-1.5 pt-2">
                  <span className="text-[10px] font-mono uppercase font-bold text-[#66746B] block">
                    Core Focus & Capabilities:
                  </span>
                  <div className="space-y-1">
                    {entity.capabilities.map((cap, cIdx) => (
                      <div key={cIdx} className="flex items-start gap-2 text-xs text-[#3D4A42]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#1A3C2C] shrink-0 mt-0.5" />
                        <span>{cap}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-3 rounded bg-[#F4EFE4] border border-[#0E1C14]/10 text-xs text-[#3D4A42]">
                  <strong className="text-[#0E1C14]">Synergy with TTB Agro:</strong> {entity.synergyWithTTB}
                </div>
              </div>
            ))}
          </div>

          <div className="p-4 rounded bg-[#FBF7EE] border border-[#0E1C14]/10 text-xs text-[#66746B] text-center">
            {groupSummary.disclaimerNote}
          </div>
        </div>

        {/* Section 2: Customer Segments (Slide 9) */}
        <div className="space-y-8 pt-6 border-t border-[#0E1C14]/10">
          <SectionHeading
            badgeText="MARKET SEGMENTS & CLIENT CATEGORIES"
            title="Trusted by Leading Retail &"
            highlightText="Hospitality Brands."
            description="Our procurement and supply infrastructure serves organized supermarket retail, QSR café networks, and regional hospitality partners."
            align="left"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {customerSegments.map((segment) => (
              <div
                key={segment.id}
                className="p-6 rounded bg-[#FBF7EE] border border-[#0E1C14]/10 flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono uppercase font-bold text-[#8C7033] tracking-widest">
                      {segment.volumeTier}
                    </span>
                  </div>

                  <h3 className="text-xl font-display font-medium text-[#0E1C14]">
                    {segment.title}
                  </h3>

                  {/* Text References (No Logos) */}
                  <div className="p-3 rounded bg-[#0B1E15] text-[#FBF7EE] border border-[#C4A35A]/20">
                    <span className="text-[9px] uppercase font-mono text-[#C4A35A] block">Sector Reference Brands:</span>
                    <strong className="text-sm font-display tracking-wide text-[#FBF7EE]">
                      {segment.clientReferences.join(' • ')}
                    </strong>
                  </div>

                  <div className="space-y-1.5 pt-1">
                    <span className="text-[10px] font-mono uppercase font-bold text-[#66746B] block">
                      Procurement Requirements:
                    </span>
                    <ul className="space-y-1 text-xs text-[#3D4A42]">
                      {segment.requirements.map((req, rIdx) => (
                        <li key={rIdx} className="flex items-start gap-1.5">
                          <span className="w-1 h-1 rounded-full bg-[#1A3C2C] shrink-0 mt-1.5"></span>
                          <span>{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="p-3 rounded bg-[#F4EFE4] border border-[#0E1C14]/10 text-xs text-[#3D4A42]">
                  <strong className="text-[#0E1C14]">TTB Solution:</strong> {segment.ttbSolution}
                </div>
              </div>
            ))}
          </div>

          <div className="p-3 rounded bg-[#FBF7EE] border border-[#0E1C14]/10 text-[11px] text-[#66746B] text-center italic">
            {clientDisclaimer}
          </div>
        </div>

      </div>
    </div>
  );
};
