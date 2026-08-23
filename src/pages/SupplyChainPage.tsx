import React from 'react';
import { PageHeader } from '../components/layout/PageHeader';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Button } from '../components/ui/Button';
import { supplyChainStages } from '../data/network';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export const SupplyChainPage: React.FC = () => {
  return (
    <div className="bg-[#F1EBDD] min-h-screen pb-20">
      {/* Page Header */}
      <PageHeader
        badgeText="END-TO-END SUPPLY CHAIN"
        title="From Origin Growers to"
        highlightText="Organised Retail Handover."
        description="A four-stage operational journey combining regional grower aggregation, dedicated Eurasian import channels, dual-stage quality checks, and scheduled last-mile delivery."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Supply Chain' }
        ]}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 space-y-16">
        
        {/* Logistics Photo Banner */}
        <div className="rounded-md overflow-hidden bg-[#0A2118] relative h-64 sm:h-80 border border-[#122017]/15 shadow-subtle">
          <img
            src="/images/supply-chain.jpg"
            alt="Agricultural produce logistics and commercial dispatch"
            className="w-full h-full object-cover object-center opacity-65"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A2118] via-[#0A2118]/70 to-transparent"></div>
          <div className="absolute bottom-6 left-6 right-6 max-w-xl text-[#F1EBDD] space-y-2">
            <span className="text-[10px] font-mono uppercase font-bold text-[#B99045] tracking-widest block">
              SUPPLY CHAIN MOVEMENT
            </span>
            <h3 className="text-xl sm:text-2xl font-display font-medium text-[#F1EBDD]">
              Connecting Origin Agriculture with Commercial Handover
            </h3>
            <p className="text-xs sm:text-sm text-[#E4D7BA]/80 leading-relaxed">
              Every consignment follows a synchronized four-stage workflow designed for schedule dependability and rigorous quality enforcement.
            </p>
          </div>
        </div>

        {/* Section 1: The 4 Stages (Slide 8) */}
        <div id="journey" className="space-y-8">
          <SectionHeading
            badgeText="OPERATIONAL WORKFLOW"
            title="The Four Sourcing &amp; Delivery Stages"
            description="Our origin-to-retail workflow is engineered to eliminate supply chain disruptions and maintain consistent quality across harvest cycles."
            align="left"
          />

          <div className="space-y-6">
            {supplyChainStages.map((stage) => (
              <div
                key={stage.step}
                className="p-6 sm:p-8 rounded-md bg-[#E4D7BA] border border-[#122017]/15 space-y-5 shadow-subtle"
              >
                <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#122017]/10 pb-4">
                  <div className="flex items-center gap-3">
                    <span className="w-9 h-9 rounded bg-[#0A2118] text-[#B99045] font-mono font-bold text-xs flex items-center justify-center border border-[#B99045]/30">
                      {stage.step}
                    </span>
                    <div>
                      <h3 className="text-xl font-display font-medium text-[#122017]">
                        {stage.title}
                      </h3>
                      <p className="text-xs font-mono text-[#8C6C2B] mt-0.5">
                        {stage.subtitle}
                      </p>
                    </div>
                  </div>

                  <span className="px-3 py-1 rounded bg-[#17412E] text-[#B99045] border border-[#B99045]/30 text-xs font-mono">
                    {stage.qcGate}
                  </span>
                </div>

                <p className="text-sm text-[#405046] leading-relaxed max-w-3xl">
                  {stage.description}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
                  {stage.tacticalOperations.map((op, idx) => (
                    <div key={idx} className="p-3.5 rounded bg-[#F1EBDD] border border-[#122017]/10 text-xs text-[#405046] flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#17412E] shrink-0 mt-0.5" />
                      <span>{op}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section 2: SP Coconut Processing Synergy (Slide 4) */}
        <div id="processing" className="p-6 sm:p-8 rounded-md bg-[#0A2118] text-[#F1EBDD] border border-[#B99045]/25 space-y-6 shadow-elevated">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#B99045]/20 pb-4">
            <div>
              <span className="text-[10px] font-mono uppercase font-bold text-[#B99045] tracking-widest block">
                PROCESSING &amp; VALUE-ADD ECOSYSTEM (SLIDE 4)
              </span>
              <h3 className="text-xl sm:text-2xl font-display font-medium text-[#F1EBDD] mt-0.5">
                SP Coconut: Dedicated Processing Unit (₹80 Cr)
              </h3>
            </div>
            <span className="text-xs font-mono text-[#B99045] bg-[#17412E] px-3 py-1 rounded border border-[#B99045]/30">
              Zero-Waste Philosophy
            </span>
          </div>

          <p className="text-sm text-[#E4D7BA]/80 leading-relaxed max-w-3xl">
            In synergy with SP Coconut, our group operates a dedicated unit for processing fresh coconuts into value-added formats, ensuring zero waste and higher market margins while delivering stable culinary coconut supplies to regional retail and Udupi hospitality networks.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2 text-xs">
            <div className="p-4 rounded bg-[#17412E]/40 border border-[#B99045]/20 space-y-1.5">
              <strong className="block text-[#B99045] font-mono">Culinary Fresh Supply</strong>
              <p className="text-[#E4D7BA]/70">Graded fresh whole coconuts for supermarket shelves and commercial kitchens.</p>
            </div>
            <div className="p-4 rounded bg-[#17412E]/40 border border-[#B99045]/20 space-y-1.5">
              <strong className="block text-[#B99045] font-mono">Value-Added Formats</strong>
              <p className="text-[#E4D7BA]/70">Processed coconut copra, desiccated formats, and food-service supplies.</p>
            </div>
            <div className="p-4 rounded bg-[#17412E]/40 border border-[#B99045]/20 space-y-1.5">
              <strong className="block text-[#B99045] font-mono">Zero-Waste Recovery</strong>
              <p className="text-[#E4D7BA]/70">Coir fiber and secondary byproduct utilization driving eco-friendly sustainability.</p>
            </div>
          </div>

          <div className="pt-4 border-t border-[#B99045]/15 flex flex-wrap items-center justify-between gap-4">
            <span className="text-xs text-[#E4D7BA]/60 font-mono">Pollachi &amp; Karnataka sourcing corridors</span>
            <Button href="/contact" variant="primary" size="sm" icon={<ArrowRight className="w-3.5 h-3.5 text-[#B99045]" />}>
              Inquire About Coconut Sourcing
            </Button>
          </div>
        </div>

      </div>
    </div>
  );
};
