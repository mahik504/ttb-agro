import React from 'react';
import { PageHeader } from '../components/layout/PageHeader';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Button } from '../components/ui/Button';
import { supplyChainStages } from '../data/network';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export const SupplyChainPage: React.FC = () => {
  return (
    <div className="bg-[#F4EFE4] min-h-screen pb-20">
      {/* Page Header */}
      <PageHeader
        badgeText="END-TO-END SUPPLY CHAIN"
        title="From Origin Growers to"
        highlightText="Organised Retail Handover."
        description="A four-stage operational journey combining regional grower aggregation, dedicated Eurasian import channels, dual-stage QC, and dependable last-mile delivery."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Our Supply Chain' }
        ]}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 space-y-16">
        
        {/* Section 1: The 4 Stages (Slide 8) */}
        <div id="journey" className="space-y-8">
          <SectionHeading
            badgeText="OPERATIONAL WORKFLOW"
            title="The Four Sourcing & Delivery Stages"
            description="Our origin-to-retail workflow is engineered to eliminate supply chain disruptions and maintain consistent quality across harvest cycles."
            align="left"
          />

          <div className="space-y-6">
            {supplyChainStages.map((stage) => (
              <div
                key={stage.step}
                className="p-6 sm:p-8 rounded bg-[#FBF7EE] border border-[#0E1C14]/10 space-y-5"
              >
                <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#0E1C14]/10 pb-4">
                  <div className="flex items-center gap-3">
                    <span className="w-9 h-9 rounded bg-[#0B1E15] text-[#C4A35A] font-mono font-bold text-xs flex items-center justify-center border border-[#C4A35A]/30">
                      {stage.step}
                    </span>
                    <div>
                      <h3 className="text-xl font-display font-medium text-[#0E1C14]">
                        {stage.title}
                      </h3>
                      <p className="text-xs font-mono text-[#8C7033] mt-0.5">
                        {stage.subtitle}
                      </p>
                    </div>
                  </div>

                  <span className="px-3 py-1 rounded bg-[#1A3C2C]/10 text-[#1A3C2C] border border-[#1A3C2C]/20 text-xs font-mono">
                    {stage.qcGate}
                  </span>
                </div>

                <p className="text-sm text-[#3D4A42] leading-relaxed max-w-3xl">
                  {stage.description}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
                  {stage.tacticalOperations.map((op, idx) => (
                    <div key={idx} className="p-3 rounded bg-[#F4EFE4] border border-[#0E1C14]/10 text-xs text-[#3D4A42] flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#1A3C2C] shrink-0 mt-0.5" />
                      <span>{op}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section 2: SP Coconut Processing Synergy (Slide 4) */}
        <div id="processing" className="p-6 sm:p-8 rounded bg-[#0B1E15] text-[#FBF7EE] border border-[#C4A35A]/20 space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#C4A35A]/20 pb-4">
            <div>
              <span className="text-[10px] font-mono uppercase font-bold text-[#C4A35A] tracking-widest block">
                PROCESSING & VALUE-ADD ECOSYSTEM (SLIDE 4)
              </span>
              <h3 className="text-xl sm:text-2xl font-display font-medium text-[#FBF7EE] mt-0.5">
                SP Coconut: Dedicated Processing Unit (₹80 Cr)
              </h3>
            </div>
            <span className="text-xs font-mono text-[#C4A35A] bg-[#1A3C2C] px-3 py-1 rounded border border-[#C4A35A]/30">
              Zero-Waste Philosophy
            </span>
          </div>

          <p className="text-sm text-[#EAE4D5]/80 leading-relaxed max-w-3xl">
            In synergy with SP Coconut, our group operates a dedicated unit for processing fresh coconuts into value-added formats, ensuring zero waste and higher market margins while delivering stable culinary coconut supplies to regional retail and Udupi hospitality networks.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2 text-xs">
            <div className="p-4 rounded bg-[#1A3C2C]/30 border border-[#C4A35A]/20 space-y-1.5">
              <strong className="block text-[#C4A35A] font-mono">Culinary Fresh Supply</strong>
              <p className="text-[#EAE4D5]/70">Graded fresh whole coconuts for retail supermarket shelves and commercial kitchens.</p>
            </div>
            <div className="p-4 rounded bg-[#1A3C2C]/30 border border-[#C4A35A]/20 space-y-1.5">
              <strong className="block text-[#C4A35A] font-mono">Value-Added Formats</strong>
              <p className="text-[#EAE4D5]/70">Processed coconut copra, desiccated formats, and food-service supplies.</p>
            </div>
            <div className="p-4 rounded bg-[#1A3C2C]/30 border border-[#C4A35A]/20 space-y-1.5">
              <strong className="block text-[#C4A35A] font-mono">Zero-Waste Recovery</strong>
              <p className="text-[#EAE4D5]/70">Coir fiber and secondary byproduct utilization driving eco-friendly sustainability.</p>
            </div>
          </div>

          <div className="pt-4 border-t border-[#C4A35A]/15 flex items-center justify-between">
            <span className="text-xs text-[#EAE4D5]/60 font-mono">Pollachi & Karnataka sourcing corridors</span>
            <Button href="/contact" variant="primary" size="sm" icon={<ArrowRight className="w-3.5 h-3.5" />}>
              Inquire About Coconut Sourcing
            </Button>
          </div>
        </div>

      </div>
    </div>
  );
};
