import React from 'react';
import { PageHeader } from '../components/layout/PageHeader';
import { SectionHeading } from '../components/ui/SectionHeading';
import { groupEntities, groupSummary } from '../data/group';
import { customerSegments, clientDisclaimer } from '../data/customers';
import { CheckCircle2, Store, Coffee, Utensils } from 'lucide-react';

export const GroupPage: React.FC = () => {
  return (
    <div className="bg-cream-100 min-h-screen pb-24">
      {/* Page Header */}
      <PageHeader
        badgeText="GROUP SCALE &amp; ECOSYSTEM • SLIDE 3 &amp; 4"
        title="Backed by an Established"
        highlightText="?228 Cr Group Portfolio."
        description="TTB Agro India operates as the specialized trading and procurement engine of a diversified agricultural and ecological group, sharing processing infrastructure, logistics networks, and commercial balance-sheet strength."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Group Portfolio' }
        ]}
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-16 space-y-20">
        
        {/* Section 1: Sister Entities Breakdown (Slide 3 & 4) */}
        <div className="space-y-10">
          <SectionHeading
            badgeText="PORTFOLIO BREAKDOWN (SLIDE 3 &amp; 4)"
            title="The TTB Agri &amp; Ecological Group"
            description="Our group entities span specialized commodity trading, high-capacity coconut processing, and sustainable agro-industrial project execution."
            align="left"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {groupEntities.map((entity) => (
              <div
                key={entity.id}
                className="p-8 sm:p-9 bg-parchment-100 border border-ink-900/15 space-y-6 shadow-subtle hover:border-gold-500/40 transition-colors"
              >
                <div className="flex items-center justify-between border-b border-ink-900/10 pb-4">
                  <span className="text-[11px] font-mono uppercase font-bold text-gold-600 tracking-widest">
                    {entity.role}
                  </span>
                  <span className="font-mono font-bold text-base text-field-900">
                    {entity.turnoverContribution}
                  </span>
                </div>

                <div>
                  <h3 className="text-2xl font-display font-medium text-ink-900">
                    {entity.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-ink-soft leading-relaxed mt-2 font-sans">
                    {entity.description}
                  </p>
                </div>

                <div className="space-y-2 pt-2">
                  <span className="text-[11px] font-mono uppercase font-bold text-ink-900 tracking-wider block">
                    Core Capabilities:
                  </span>
                  <div className="space-y-1.5">
                    {entity.capabilities.map((cap, cIdx) => (
                      <div key={cIdx} className="flex items-start gap-2.5 text-xs text-ink-900">
                        <CheckCircle2 className="w-3.5 h-3.5 text-field-900 shrink-0 mt-0.5" />
                        <span>{cap}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-4 bg-cream-100 border border-ink-900/10 text-xs text-ink-soft font-sans">
                  <strong className="text-ink-900">Synergy with TTB Agro:</strong> {entity.synergyWithTTB}
                </div>
              </div>
            ))}
          </div>

          <div className="p-4 bg-parchment-100 border border-ink-900/15 text-xs text-ink-soft text-center font-mono">
            {groupSummary.disclaimerNote}
          </div>
        </div>

        {/* Section 2: Market Segments & Sector References (Slide 9) */}
        <div className="space-y-10 pt-10 border-t border-ink-900/10">
          <SectionHeading
            badgeText="CUSTOMER SECTORS • SLIDE 9"
            title="Supplying Leading Retail Chains &amp;"
            highlightText="Commercial Food Networks."
            description="Our procurement and supply infrastructure delivers scheduled commodity allocations to modern retail hypermarkets, national QSR café chains, and commercial food-service buyers."
            align="left"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {customerSegments.map((segment) => (
              <div
                key={segment.id}
                className="p-8 bg-parchment-100 border border-ink-900/15 flex flex-col justify-between space-y-6 shadow-subtle hover:border-gold-500/40 transition-colors"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between border-b border-ink-900/10 pb-3">
                    <span className="text-[10px] font-mono uppercase font-bold text-gold-600 tracking-widest">
                      {segment.volumeTier}
                    </span>
                    {segment.id === 'retail-supermarkets' && <Store className="w-4 h-4 text-field-900" />}
                    {segment.id === 'qsr-chains' && <Coffee className="w-4 h-4 text-field-900" />}
                    {segment.id === 'food-service' && <Utensils className="w-4 h-4 text-field-900" />}
                  </div>

                  <h3 className="text-2xl font-display font-medium text-ink-900">
                    {segment.title}
                  </h3>

                  {/* Text References Only (No Unauthorized Logos) */}
                  <div className="p-4 bg-evergreen-950 text-cream-100 border border-gold-500/25 space-y-1">
                    <span className="text-[10px] uppercase font-mono text-gold-500 block font-bold">
                      Sector Reference Accounts:
                    </span>
                    <strong className="text-sm font-display tracking-wide text-cream-100 block">
                      {segment.clientReferences.join(' • ')}
                    </strong>
                  </div>

                  <div className="space-y-2 pt-2">
                    <span className="text-[11px] font-mono uppercase font-bold text-ink-900 tracking-wider block">
                      Procurement Requirements:
                    </span>
                    <ul className="space-y-2 text-xs text-ink-soft">
                      {segment.requirements.map((req, rIdx) => (
                        <li key={rIdx} className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 bg-field-900 shrink-0 mt-1.5" />
                          <span>{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="p-4 bg-cream-100 border border-ink-900/10 text-xs text-ink-soft font-sans">
                  <strong className="text-ink-900">TTB Solution:</strong> {segment.ttbSolution}
                </div>
              </div>
            ))}
          </div>

          <div className="p-4 bg-parchment-100 border border-ink-900/15 text-xs text-ink-soft text-center italic font-mono">
            {clientDisclaimer}
          </div>
        </div>

      </div>
    </div>
  );
};
