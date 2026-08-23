import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { PageHeader } from '../components/layout/PageHeader';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Button } from '../components/ui/Button';
import { commoditiesData } from '../data/commodities';

export const CommoditiesPage: React.FC = () => {
  const staples = commoditiesData.filter((c) => c.category === 'Staples');
  const freshProduce = commoditiesData.filter((c) => c.category === 'Fresh Produce');

  return (
    <div className="bg-[#F1EBDD] min-h-screen pb-20">
      {/* Page Header */}
      <PageHeader
        badgeText="COMMODITY PORTFOLIO"
        title="What We Source:"
        highlightText="Staples &amp; Fresh Produce."
        description="Our core diagnostic sourcing matrix covering bulk rice and pulses, alongside dedicated apple, banana, and coconut supply pipelines."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Commodities' }
        ]}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 space-y-16">
        
        {/* Category 1: Staples (Rice & Pulses) */}
        <div id="staples" className="space-y-6">
          <SectionHeading
            badgeText="CATEGORY 01"
            title="Staples"
            highlightText="— Rice &amp; Pulses"
            description="Procured through direct local aggregation in Tamil Nadu and general trading across major pan-India mandi corridors."
            align="left"
            className="mb-6"
          />

          <div className="space-y-8">
            {staples.map((item) => (
              <div
                key={item.id}
                id={item.id}
                className="rounded-md bg-[#E4D7BA] border border-[#122017]/15 overflow-hidden shadow-subtle scroll-mt-24 grid grid-cols-1 lg:grid-cols-12 gap-0"
              >
                {/* Product Photo (5 Cols) */}
                <div className="lg:col-span-5 h-64 lg:h-auto relative bg-[#0A2118] overflow-hidden">
                  <img
                    src={item.imageUrl}
                    alt={`${item.name} wholesale commodity`}
                    className="w-full h-full object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A2118]/70 via-transparent to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-[#F1EBDD]">
                    <span className="text-[10px] font-mono uppercase text-[#B99045] tracking-widest font-bold">
                      {item.category} • {item.procurementStrategy}
                    </span>
                    <h3 className="text-2xl font-display font-medium text-[#F1EBDD]">
                      {item.name}
                    </h3>
                  </div>
                </div>

                {/* Details (7 Cols) */}
                <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between space-y-5">
                  <div className="space-y-4">
                    <p className="text-sm text-[#405046] leading-relaxed">
                      {item.description}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                      <div className="p-3 rounded bg-[#F1EBDD] border border-[#122017]/10 text-xs">
                        <span className="text-[10px] font-mono uppercase font-bold text-[#63756A] block">Origin Regions:</span>
                        <strong className="text-[#122017] font-medium block mt-0.5">{item.origins.join(', ')}</strong>
                      </div>
                      <div className="p-3 rounded bg-[#F1EBDD] border border-[#122017]/10 text-xs">
                        <span className="text-[10px] font-mono uppercase font-bold text-[#63756A] block">Key Varieties &amp; Grades:</span>
                        <strong className="text-[#122017] font-medium block mt-0.5">{item.gradeVariants.join(', ')}</strong>
                      </div>
                    </div>

                    <div className="space-y-1.5 pt-1">
                      {item.b2bHighlights.map((hl, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-[#405046]">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#17412E] shrink-0 mt-0.5" />
                          <span>{hl}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-[#122017]/10 flex flex-wrap items-center justify-between gap-3">
                    <span className="text-xs text-[#63756A] font-mono">
                      Confirmed per purchase order
                    </span>
                    <Button
                      href={`/contact?commodity=${item.id}`}
                      variant="primary"
                      size="sm"
                      icon={<ArrowRight className="w-3.5 h-3.5 text-[#B99045]" />}
                    >
                      Discuss {item.name} Requirements
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Category 2: Fresh Produce (Apples, Bananas, Coconut) */}
        <div id="fresh-produce" className="space-y-6 pt-8 border-t border-[#122017]/10">
          <SectionHeading
            badgeText="CATEGORY 02"
            title="Fresh Produce"
            highlightText="— Apples, Bananas &amp; Coconut"
            description="Combining domestic orchard and farm-gate aggregation with dedicated Eurasian import pipelines and dedicated coconut processing."
            align="left"
            className="mb-6"
          />

          <div className="space-y-8">
            {freshProduce.map((item) => (
              <div
                key={item.id}
                id={item.id}
                className="rounded-md bg-[#E4D7BA] border border-[#122017]/15 overflow-hidden shadow-subtle scroll-mt-24 grid grid-cols-1 lg:grid-cols-12 gap-0"
              >
                {/* Product Photo (5 Cols) */}
                <div className="lg:col-span-5 h-64 lg:h-auto relative bg-[#0A2118] overflow-hidden">
                  <img
                    src={item.imageUrl}
                    alt={`${item.name} produce`}
                    className="w-full h-full object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A2118]/70 via-transparent to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-[#F1EBDD]">
                    <span className="text-[10px] font-mono uppercase text-[#B99045] tracking-widest font-bold">
                      {item.category} • {item.procurementStrategy}
                    </span>
                    <h3 className="text-2xl font-display font-medium text-[#F1EBDD]">
                      {item.name}
                    </h3>
                  </div>
                </div>

                {/* Details (7 Cols) */}
                <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between space-y-5">
                  <div className="space-y-4">
                    <p className="text-sm text-[#405046] leading-relaxed">
                      {item.description}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                      <div className="p-3 rounded bg-[#F1EBDD] border border-[#122017]/10 text-xs">
                        <span className="text-[10px] font-mono uppercase font-bold text-[#63756A] block">Origin Regions:</span>
                        <strong className="text-[#122017] font-medium block mt-0.5">{item.origins.join(', ')}</strong>
                      </div>
                      <div className="p-3 rounded bg-[#F1EBDD] border border-[#122017]/10 text-xs">
                        <span className="text-[10px] font-mono uppercase font-bold text-[#63756A] block">Key Varieties &amp; Grades:</span>
                        <strong className="text-[#122017] font-medium block mt-0.5">{item.gradeVariants.join(', ')}</strong>
                      </div>
                    </div>

                    <div className="space-y-1.5 pt-1">
                      {item.b2bHighlights.map((hl, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-[#405046]">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#17412E] shrink-0 mt-0.5" />
                          <span>{hl}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-[#122017]/10 flex flex-wrap items-center justify-between gap-3">
                    <span className="text-xs text-[#63756A] font-mono">
                      {item.keySpecs.seasonalPeak}
                    </span>
                    <Button
                      href={`/contact?commodity=${item.id}`}
                      variant="primary"
                      size="sm"
                      icon={<ArrowRight className="w-3.5 h-3.5 text-[#B99045]" />}
                    >
                      Discuss {item.name} Requirements
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};
