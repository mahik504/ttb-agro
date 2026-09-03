import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, ChevronRight } from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';
import { commoditiesData } from '../../data/commodities';
import { Button } from '../ui/Button';

export const SourcingMatrixPreview: React.FC = () => {
  const [activeCommodityId, setActiveCommodityId] = useState<string>('rice');
  const activeCommodity = commoditiesData.find((c) => c.id === activeCommodityId) || commoditiesData[0];

  return (
    <section className="py-20 sm:py-28 bg-cream-50 border-b border-ink-900/10 relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 lg:mb-16 gap-6">
          <SectionHeading
            badgeText="COMMODITY PORTFOLIO • 5 CORE LINES"
            title="Origin Aggregation &amp;"
            highlightText="Direct Import Portfolio."
            description="Direct farm-gate aggregation across southern, western, and northern agricultural belts, paired with dedicated Eurasian import corridors for retail supermarket and food-service buyers."
            align="left"
            className="mb-0 max-w-3xl"
          />

          <Link
            to="/commodities"
            className="text-xs font-mono uppercase tracking-[0.14em] text-field-900 hover:text-gold-600 inline-flex items-center gap-2 pb-1 border-b border-field-900/30 hover:border-gold-600 transition-colors"
          >
            <span>All Commodity Specifications</span>
            <ArrowRight className="w-3.5 h-3.5 text-gold-500" />
          </Link>
        </div>

        {/* Asymmetric 5:7 Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left: 5 Commodity Selector Index (5 Cols) */}
          <div className="lg:col-span-5 space-y-2 flex flex-col justify-between">
            {commoditiesData.map((item) => {
              const isSelected = item.id === activeCommodityId;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setActiveCommodityId(item.id)}
                  className={`w-full text-left p-4 sm:p-5 transition-all border flex items-center justify-between btn-tactile ${
                    isSelected
                      ? 'bg-evergreen-950 text-cream-100 border-gold-500 shadow-elevated'
                      : 'bg-parchment-100/60 hover:bg-parchment-100 text-ink-900 border-ink-900/10'
                  }`}
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2.5">
                      <span className="text-base sm:text-lg font-display font-medium leading-tight">
                        {item.name}
                      </span>
                      <span
                        className={`text-[10px] font-mono uppercase px-2 py-0.5 ${
                          isSelected
                            ? 'bg-field-900 text-gold-500 border border-gold-500/30'
                            : 'bg-ink-900/5 text-ink-soft border border-ink-900/10'
                        }`}
                      >
                        {item.category}
                      </span>
                    </div>
                    <p
                      className={`text-xs line-clamp-1 font-sans ${
                        isSelected ? 'text-parchment-100/80' : 'text-ink-soft'
                      }`}
                    >
                      {item.origins.join(', ')}
                    </p>
                  </div>

                  <ChevronRight
                    className={`w-4 h-4 transition-transform ${
                      isSelected ? 'text-gold-500 translate-x-1' : 'text-ink-900/30'
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Right: Active Product Evidence & Diagnostic Ledger (7 Cols) */}
          <div className="lg:col-span-7 bg-parchment-100 border border-ink-900/15 overflow-hidden flex flex-col justify-between shadow-subtle">
            {/* Real Product Photography */}
            <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-evergreen-950">
              <img
                src={activeCommodity.imageUrl}
                alt={`${activeCommodity.name} wholesale commodity`}
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-evergreen-950 via-evergreen-950/40 to-transparent" />
              
              <div className="absolute bottom-5 left-6 right-6 flex items-end justify-between text-cream-100">
                <div>
                  <span className="text-[10px] font-mono uppercase text-gold-500 tracking-widest block font-bold">
                    {activeCommodity.category} PROCUREMENT
                  </span>
                  <h4 className="text-2xl sm:text-3xl font-display font-medium text-cream-100">
                    {activeCommodity.name}
                  </h4>
                </div>
                <span className="px-3 py-1 bg-field-900 text-gold-500 border border-gold-500/40 text-xs font-mono">
                  {activeCommodity.procurementStrategy}
                </span>
              </div>
            </div>

            {/* Diagnostic Details Panel */}
            <div className="p-6 sm:p-8 space-y-6">
              <p className="text-sm sm:text-base text-ink-soft leading-relaxed font-sans">
                {activeCommodity.description}
              </p>

              {/* Origin & Grades Table */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                <div className="p-3.5 bg-cream-100 border border-ink-900/10 text-xs">
                  <span className="text-[10px] font-mono uppercase font-bold text-ink-soft block">
                    Origin Corridors:
                  </span>
                  <strong className="text-ink-900 font-medium block mt-1">
                    {activeCommodity.origins.join(', ')}
                  </strong>
                </div>
                <div className="p-3.5 bg-cream-100 border border-ink-900/10 text-xs">
                  <span className="text-[10px] font-mono uppercase font-bold text-ink-soft block">
                    Key Varieties &amp; Grades:
                  </span>
                  <strong className="text-ink-900 font-medium block mt-1">
                    {activeCommodity.gradeVariants.join(', ')}
                  </strong>
                </div>
              </div>

              {/* B2B Value Highlights */}
              <div className="space-y-2">
                {activeCommodity.b2bHighlights.map((hl, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-ink-900">
                    <CheckCircle2 className="w-4 h-4 text-field-900 shrink-0 mt-0.5" />
                    <span>{hl}</span>
                  </div>
                ))}
              </div>

              {/* Bottom Action */}
              <div className="pt-4 border-t border-ink-900/10 flex flex-wrap items-center justify-between gap-4">
                <span className="text-xs text-ink-soft font-mono">
                  Confirmed per commercial purchase order
                </span>
                <Button
                  href={`/contact?commodity=${activeCommodity.id}`}
                  variant="primary"
                  size="sm"
                  icon={<ArrowRight className="w-3.5 h-3.5 text-gold-500" />}
                >
                  Discuss {activeCommodity.name} Requirements
                </Button>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
