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
    <div className="bg-cream-100 min-h-screen pb-24">
      {/* Page Header */}
      <PageHeader
        badgeText="COMMODITY SPECIFICATIONS • 5 CORE LINES (SLIDE 6)"
        title="Verified Sourcing Portfolio:"
        highlightText="Staples &amp; Fresh Produce."
        description="Our core commercial diagnostic sourcing matrix covering bulk rice and pulses, alongside dedicated apple, banana, and coconut cold-chain pipelines."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Commodities' }
        ]}
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-16 space-y-20">
        
        {/* Category 1: Staples (Rice & Pulses) */}
        <div id="staples" className="space-y-8">
          <SectionHeading
            badgeText="CATEGORY 01 • STAPLES"
            title="Bulk Grain &amp; Pulses"
            highlightText="— Direct Mandi &amp; Farm Sourcing"
            description="Procured through direct local farm aggregation in Tamil Nadu and general trading across major pan-India mandi corridors with consistent grade sorting."
            align="left"
            className="mb-8"
          />

          <div className="space-y-10">
            {staples.map((item) => (
              <div
                key={item.id}
                id={item.id}
                className="bg-parchment-100 border border-ink-900/15 overflow-hidden shadow-subtle grid grid-cols-1 lg:grid-cols-12 gap-0"
              >
                {/* Product Photo (5 Cols) */}
                <div className="lg:col-span-5 h-72 lg:h-auto relative bg-evergreen-950 overflow-hidden">
                  <img
                    src={item.imageUrl}
                    alt={`${item.name} wholesale commodity`}
                    className="w-full h-full object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-evergreen-950/90 via-transparent to-transparent" />
                  <div className="absolute bottom-5 left-6 right-6 text-cream-100">
                    <span className="text-[10px] font-mono uppercase text-gold-500 tracking-widest font-bold block">
                      {item.category} • {item.procurementStrategy}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-display font-medium text-cream-100 mt-1">
                      {item.name}
                    </h3>
                  </div>
                </div>

                {/* Details (7 Cols) */}
                <div className="lg:col-span-7 p-7 sm:p-9 flex flex-col justify-between space-y-6">
                  <div className="space-y-5">
                    <p className="text-sm sm:text-base text-ink-soft leading-relaxed font-sans">
                      {item.description}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                      <div className="p-4 bg-cream-100 border border-ink-900/10 text-xs">
                        <span className="text-[10px] font-mono uppercase font-bold text-ink-soft block">
                          Origin Regions:
                        </span>
                        <strong className="text-ink-900 font-medium block mt-1">
                          {item.origins.join(', ')}
                        </strong>
                      </div>
                      <div className="p-4 bg-cream-100 border border-ink-900/10 text-xs">
                        <span className="text-[10px] font-mono uppercase font-bold text-ink-soft block">
                          Key Varieties &amp; Grades:
                        </span>
                        <strong className="text-ink-900 font-medium block mt-1">
                          {item.gradeVariants.join(', ')}
                        </strong>
                      </div>
                    </div>

                    <div className="space-y-2 pt-1">
                      {item.b2bHighlights.map((hl, idx) => (
                        <div key={idx} className="flex items-start gap-2.5 text-xs text-ink-900">
                          <CheckCircle2 className="w-4 h-4 text-field-900 shrink-0 mt-0.5" />
                          <span>{hl}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-5 border-t border-ink-900/10 flex flex-wrap items-center justify-between gap-4">
                    <span className="text-xs text-ink-soft font-mono">
                      Confirmed per commercial purchase order
                    </span>
                    <Button
                      href={`/contact?commodity=${item.id}`}
                      variant="primary"
                      size="sm"
                      icon={<ArrowRight className="w-3.5 h-3.5 text-gold-500" />}
                    >
                      Discuss {item.name} Requirements
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Category 2: Fresh Produce */}
        <div id="fresh-produce" className="space-y-8 pt-10 border-t border-ink-900/10">
          <SectionHeading
            badgeText="CATEGORY 02 • FRESH PRODUCE"
            title="Cold-Chain Perishables"
            highlightText="— Apples, Bananas &amp; Coconut"
            description="Combining domestic orchard aggregation in HP, Kashmir, and the southern belts with dedicated Eurasian import pipelines from Iran and Turkey."
            align="left"
            className="mb-8"
          />

          <div className="space-y-10">
            {freshProduce.map((item) => (
              <div
                key={item.id}
                id={item.id}
                className="bg-parchment-100 border border-ink-900/15 overflow-hidden shadow-subtle grid grid-cols-1 lg:grid-cols-12 gap-0"
              >
                {/* Product Photo (5 Cols) */}
                <div className="lg:col-span-5 h-72 lg:h-auto relative bg-evergreen-950 overflow-hidden">
                  <img
                    src={item.imageUrl}
                    alt={`${item.name} produce`}
                    className="w-full h-full object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-evergreen-950/90 via-transparent to-transparent" />
                  <div className="absolute bottom-5 left-6 right-6 text-cream-100">
                    <span className="text-[10px] font-mono uppercase text-gold-500 tracking-widest font-bold block">
                      {item.category} • {item.procurementStrategy}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-display font-medium text-cream-100 mt-1">
                      {item.name}
                    </h3>
                  </div>
                </div>

                {/* Details (7 Cols) */}
                <div className="lg:col-span-7 p-7 sm:p-9 flex flex-col justify-between space-y-6">
                  <div className="space-y-5">
                    <p className="text-sm sm:text-base text-ink-soft leading-relaxed font-sans">
                      {item.description}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                      <div className="p-4 bg-cream-100 border border-ink-900/10 text-xs">
                        <span className="text-[10px] font-mono uppercase font-bold text-ink-soft block">
                          Origin Regions:
                        </span>
                        <strong className="text-ink-900 font-medium block mt-1">
                          {item.origins.join(', ')}
                        </strong>
                      </div>
                      <div className="p-4 bg-cream-100 border border-ink-900/10 text-xs">
                        <span className="text-[10px] font-mono uppercase font-bold text-ink-soft block">
                          Key Varieties &amp; Grades:
                        </span>
                        <strong className="text-ink-900 font-medium block mt-1">
                          {item.gradeVariants.join(', ')}
                        </strong>
                      </div>
                    </div>

                    <div className="space-y-2 pt-1">
                      {item.b2bHighlights.map((hl, idx) => (
                        <div key={idx} className="flex items-start gap-2.5 text-xs text-ink-900">
                          <CheckCircle2 className="w-4 h-4 text-field-900 shrink-0 mt-0.5" />
                          <span>{hl}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-5 border-t border-ink-900/10 flex flex-wrap items-center justify-between gap-4">
                    <span className="text-xs text-gold-600 font-mono font-medium">
                      Seasonal Window: {item.keySpecs.seasonalPeak}
                    </span>
                    <Button
                      href={`/contact?commodity=${item.id}`}
                      variant="primary"
                      size="sm"
                      icon={<ArrowRight className="w-3.5 h-3.5 text-gold-500" />}
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
