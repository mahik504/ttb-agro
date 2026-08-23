import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { PageHeader } from '../components/layout/PageHeader';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Button } from '../components/ui/Button';
import { commoditiesData } from '../data/commodities';

export const CommoditiesPage: React.FC = () => {
  const staples = commoditiesData.filter((c) => c.category === 'Staples');
  const freshProduce = commoditiesData.filter((c) => c.category === 'Fresh Produce');

  return (
    <div className="bg-[#F4EFE4] min-h-screen pb-20">
      {/* Page Header */}
      <PageHeader
        badgeText="COMMODITY PORTFOLIO"
        title="What We Source:"
        highlightText="Staples & Fresh Produce."
        description="Our core diagnostic sourcing matrix covering bulk rice and pulses, alongside dedicated apple, banana, and coconut supply pipelines."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'What We Source' }
        ]}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 space-y-16">
        
        {/* Category 1: Staples (Rice & Pulses) */}
        <div id="staples" className="space-y-6">
          <SectionHeading
            badgeText="CATEGORY 01"
            title="Staples"
            highlightText="— Rice & Pulses"
            description="Procured through direct local aggregation in Tamil Nadu and general trading across major pan-India mandi corridors."
            align="left"
            className="mb-6"
          />

          <div className="space-y-6">
            {staples.map((item) => (
              <div
                key={item.id}
                id={item.id}
                className="p-6 sm:p-8 rounded bg-[#FBF7EE] border border-[#0E1C14]/10 space-y-6 scroll-mt-24"
              >
                <div className="flex flex-wrap items-start justify-between gap-4 border-b border-[#0E1C14]/10 pb-4">
                  <div>
                    <span className="text-[10px] font-mono uppercase font-bold text-[#8C7033] tracking-widest block">
                      {item.category} • {item.procurementStrategy}
                    </span>
                    <h3 className="text-2xl font-display font-medium text-[#0E1C14] mt-0.5">
                      {item.name}
                    </h3>
                  </div>

                  <Button href={`/contact?commodity=${item.id}`} variant="primary" size="sm" icon={<ArrowRight className="w-3.5 h-3.5" />}>
                    Discuss {item.name} Requirements
                  </Button>
                </div>

                <p className="text-sm text-[#3D4A42] leading-relaxed max-w-3xl">
                  {item.description}
                </p>

                {/* Sourcing Diagnostics */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                  <div className="p-3 rounded bg-[#F4EFE4] border border-[#0E1C14]/10 text-xs">
                    <span className="text-[10px] uppercase font-mono font-bold text-[#66746B] block">Origin Regions:</span>
                    <strong className="text-[#0E1C14] font-medium">{item.origins.join(', ')}</strong>
                  </div>
                  <div className="p-3 rounded bg-[#F4EFE4] border border-[#0E1C14]/10 text-xs">
                    <span className="text-[10px] uppercase font-mono font-bold text-[#66746B] block">Key Varieties & Grades:</span>
                    <strong className="text-[#0E1C14] font-medium">{item.gradeVariants.join(', ')}</strong>
                  </div>
                  <div className="p-3 rounded bg-[#F4EFE4] border border-[#0E1C14]/10 text-xs">
                    <span className="text-[10px] uppercase font-mono font-bold text-[#66746B] block">Sourcing Strategy:</span>
                    <strong className="text-[#1A3C2C] font-mono font-medium">{item.procurementStrategy}</strong>
                  </div>
                </div>

                {/* Handling Notes & Highlights */}
                <div className="border-t border-[#0E1C14]/10 pt-4 flex flex-wrap items-center justify-between gap-3 text-xs text-[#66746B]">
                  <span>Specifications and packaging formats are confirmed on each purchase order.</span>
                  <Link to={`/contact?commodity=${item.id}`} className="text-[#1A3C2C] font-medium hover:underline inline-flex items-center gap-1">
                    <span>Request volume allocation</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Category 2: Fresh Produce (Apples, Bananas, Coconut) */}
        <div id="fresh-produce" className="space-y-6 pt-6 border-t border-[#0E1C14]/10">
          <SectionHeading
            badgeText="CATEGORY 02"
            title="Fresh Produce"
            highlightText="— Apples, Bananas & Coconut"
            description="Combining domestic orchard and farm-gate aggregation with dedicated Eurasian import pipelines and dedicated coconut processing."
            align="left"
            className="mb-6"
          />

          <div className="space-y-6">
            {freshProduce.map((item) => (
              <div
                key={item.id}
                id={item.id}
                className="p-6 sm:p-8 rounded bg-[#FBF7EE] border border-[#0E1C14]/10 space-y-6 scroll-mt-24"
              >
                <div className="flex flex-wrap items-start justify-between gap-4 border-b border-[#0E1C14]/10 pb-4">
                  <div>
                    <span className="text-[10px] font-mono uppercase font-bold text-[#8C7033] tracking-widest block">
                      {item.category} • {item.procurementStrategy}
                    </span>
                    <h3 className="text-2xl font-display font-medium text-[#0E1C14] mt-0.5">
                      {item.name}
                    </h3>
                  </div>

                  <Button href={`/contact?commodity=${item.id}`} variant="primary" size="sm" icon={<ArrowRight className="w-3.5 h-3.5" />}>
                    Discuss {item.name} Requirements
                  </Button>
                </div>

                <p className="text-sm text-[#3D4A42] leading-relaxed max-w-3xl">
                  {item.description}
                </p>

                {/* Diagnostics */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                  <div className="p-3 rounded bg-[#F4EFE4] border border-[#0E1C14]/10 text-xs">
                    <span className="text-[10px] uppercase font-mono font-bold text-[#66746B] block">Origin Regions:</span>
                    <strong className="text-[#0E1C14] font-medium">{item.origins.join(', ')}</strong>
                  </div>
                  <div className="p-3 rounded bg-[#F4EFE4] border border-[#0E1C14]/10 text-xs">
                    <span className="text-[10px] uppercase font-mono font-bold text-[#66746B] block">Key Varieties & Grades:</span>
                    <strong className="text-[#0E1C14] font-medium">{item.gradeVariants.join(', ')}</strong>
                  </div>
                  <div className="p-3 rounded bg-[#F4EFE4] border border-[#0E1C14]/10 text-xs">
                    <span className="text-[10px] uppercase font-mono font-bold text-[#66746B] block">Sourcing Strategy:</span>
                    <strong className="text-[#1A3C2C] font-mono font-medium">{item.procurementStrategy}</strong>
                  </div>
                </div>

                {/* Highlights */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                  {item.b2bHighlights.map((hl, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-2 text-xs text-[#3D4A42]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#1A3C2C] shrink-0 mt-0.5" />
                      <span>{hl}</span>
                    </div>
                  ))}
                </div>

                {/* Handling Notes */}
                <div className="border-t border-[#0E1C14]/10 pt-4 flex flex-wrap items-center justify-between gap-3 text-xs text-[#66746B]">
                  <span>{item.keySpecs.seasonalPeak}</span>
                  <Link to={`/contact?commodity=${item.id}`} className="text-[#1A3C2C] font-medium hover:underline inline-flex items-center gap-1">
                    <span>Submit procurement RFP</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};
