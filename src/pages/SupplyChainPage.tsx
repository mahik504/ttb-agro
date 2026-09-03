import React from 'react';
import { PageHeader } from '../components/layout/PageHeader';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Button } from '../components/ui/Button';
import { supplyChainStages } from '../data/network';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export const SupplyChainPage: React.FC = () => {
  return (
    <div className="bg-cream-100 min-h-screen pb-24">
      {/* Page Header */}
      <PageHeader
        badgeText="END-TO-END SUPPLY CHAIN • SLIDE 8"
        title="From Origin Growers to"
        highlightText="Organised Retail Dispatch."
        description="A synchronized four-stage operational workflow combining regional farm aggregation, dedicated Eurasian import channels, dual-stage quality enforcement, and scheduled cold-chain delivery."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Supply Chain' }
        ]}
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-16 space-y-20">
        
        {/* Logistics Photo Banner */}
        <div className="bg-evergreen-950 relative h-72 sm:h-96 border border-gold-500/25 overflow-hidden shadow-elevated">
          <img
            src="/images/supply-chain.jpg"
            alt="Agricultural produce logistics and commercial dispatch"
            className="w-full h-full object-cover object-center opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-evergreen-950 via-evergreen-950/80 to-transparent" />
          <div className="absolute bottom-8 left-8 right-8 max-w-2xl text-cream-100 space-y-3">
            <span className="text-[11px] font-mono uppercase font-bold text-gold-500 tracking-widest block">
              LOGISTICS ARCHITECTURE &amp; DISPATCH
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-medium text-cream-100 leading-tight">
              Connecting Origin Agriculture with Commercial Dispatch
            </h2>
            <p className="text-sm sm:text-base text-parchment-100/80 leading-relaxed font-sans font-light">
              Every consignment follows an audited four-stage workflow designed for schedule dependability and dual-stage quality enforcement prior to retail handover.
            </p>
          </div>
        </div>

        {/* Section 1: The 4 Stages */}
        <div id="journey" className="space-y-10">
          <SectionHeading
            badgeText="OPERATIONAL WORKFLOW (SLIDE 8)"
            title="The Four Sourcing &amp; Delivery Stages"
            description="Our origin-to-retail workflow is engineered to eliminate supply chain disruptions, stabilize pricing, and maintain consistent quality grading across harvest cycles."
            align="left"
          />

          <div className="space-y-8">
            {supplyChainStages.map((stage) => (
              <div
                key={stage.step}
                className="p-8 sm:p-10 bg-parchment-100 border border-ink-900/15 space-y-6 shadow-subtle"
              >
                <div className="flex flex-wrap items-center justify-between gap-4 border-b border-ink-900/10 pb-5">
                  <div className="flex items-center gap-4">
                    <span className="w-10 h-10 bg-evergreen-950 text-gold-500 font-mono font-bold text-sm flex items-center justify-center border border-gold-500/30">
                      {stage.step}
                    </span>
                    <div>
                      <h3 className="text-2xl font-display font-medium text-ink-900">
                        {stage.title}
                      </h3>
                      <p className="text-xs font-mono text-gold-600 mt-0.5">
                        {stage.subtitle}
                      </p>
                    </div>
                  </div>

                  <span className="px-3.5 py-1.5 bg-field-900 text-gold-500 border border-gold-500/30 text-xs font-mono">
                    {stage.qcGate}
                  </span>
                </div>

                <p className="text-sm sm:text-base text-ink-soft leading-relaxed max-w-4xl font-sans">
                  {stage.description}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                  {stage.tacticalOperations.map((op, idx) => (
                    <div key={idx} className="p-4 bg-cream-100 border border-ink-900/10 text-xs text-ink-900 flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-field-900 shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{op}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section 2: SP Coconut Processing Unit */}
        <div id="processing" className="p-8 sm:p-12 bg-evergreen-950 text-cream-100 border border-gold-500/30 space-y-8 shadow-elevated">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-gold-500/20 pb-5">
            <div>
              <span className="text-[11px] font-mono uppercase font-bold text-gold-500 tracking-widest block">
                PROCESSING &amp; VALUE-ADD ECOSYSTEM • SLIDE 4
              </span>
              <h3 className="text-2xl sm:text-3xl font-display font-medium text-cream-100 mt-1">
                SP Coconut: Dedicated Processing Unit (?80 Cr)
              </h3>
            </div>
            <span className="text-xs font-mono text-gold-500 bg-field-900 px-4 py-1.5 border border-gold-500/40">
              Zero-Waste Philosophy
            </span>
          </div>

          <p className="text-sm sm:text-base text-parchment-100/80 leading-relaxed max-w-3xl font-sans font-light">
            In direct synergy with SP Coconut, our group operates a specialized processing facility converting fresh coconuts into value-added commercial formats. This integration guarantees zero waste, higher margins, and dependable supply continuity for retail supermarket chains and institutional food-service networks.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-2 text-xs">
            <div className="p-5 bg-field-900/50 border border-gold-500/25 space-y-2">
              <strong className="block text-gold-500 font-mono text-sm">
                Culinary Fresh Supply
              </strong>
              <p className="text-parchment-100/75 leading-relaxed font-sans">
                Precision-graded fresh whole coconuts delivered to retail hypermarkets, supermarkets, and commercial kitchen commissaries.
              </p>
            </div>
            <div className="p-5 bg-field-900/50 border border-gold-500/25 space-y-2">
              <strong className="block text-gold-500 font-mono text-sm">
                Value-Added Formats
              </strong>
              <p className="text-parchment-100/75 leading-relaxed font-sans">
                Commercial coconut copra, desiccated flakes, and industrial ingredient supply tailored to institutional food manufacturing.
              </p>
            </div>
            <div className="p-5 bg-field-900/50 border border-gold-500/25 space-y-2">
              <strong className="block text-gold-500 font-mono text-sm">
                Zero-Waste Coir Recovery
              </strong>
              <p className="text-parchment-100/75 leading-relaxed font-sans">
                Coir fiber extraction and organic agricultural byproducts repurposed for horticultural substrate and eco-materials.
              </p>
            </div>
          </div>

          <div className="pt-6 border-t border-gold-500/20 flex flex-wrap items-center justify-between gap-5">
            <span className="text-xs text-parchment-100/60 font-mono">
              Direct aggregation from Pollachi &amp; Karnataka agricultural belts
            </span>
            <Button
              href="/contact"
              variant="primary"
              size="sm"
              icon={<ArrowRight className="w-3.5 h-3.5 text-gold-500" />}
            >
              Inquire About Coconut Sourcing
            </Button>
          </div>
        </div>

      </div>
    </div>
  );
};
