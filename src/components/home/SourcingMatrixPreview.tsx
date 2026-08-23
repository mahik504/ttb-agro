import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';
import { commoditiesData } from '../../data/commodities';
import { Button } from '../ui/Button';

export const SourcingMatrixPreview: React.FC = () => {
  const [activeCommodityId, setActiveCommodityId] = useState<string>('rice');
  const activeCommodity = commoditiesData.find((c) => c.id === activeCommodityId) || commoditiesData[0];

  return (
    <section className="py-16 sm:py-24 bg-[#F1EBDD] border-b border-[#122017]/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <SectionHeading
            badgeText="COMMODITY SOURCING MATRIX"
            title="Verified Commodity Portfolio:"
            highlightText="Staples &amp; Fresh Produce."
            description="Direct origin aggregations across southern, western, and northern agricultural belts, paired with dedicated Eurasian import channels."
            align="left"
            className="mb-0 max-w-2xl"
          />

          <Link
            to="/commodities"
            className="text-xs sm:text-sm font-medium text-[#17412E] hover:text-[#0A2118] inline-flex items-center gap-1.5 underline underline-offset-4"
          >
            <span>View complete commodity specifications</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Visual Commodity Selector (Desktop & Tablet Split / Mobile Stacked) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left: 5 Commodity Selector Index (5 Cols) */}
          <div className="lg:col-span-5 space-y-2.5 flex flex-col justify-center">
            {commoditiesData.map((item) => {
              const isSelected = item.id === activeCommodityId;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveCommodityId(item.id)}
                  className={`w-full text-left p-4 sm:p-5 rounded-md transition-all border flex items-center justify-between btn-tactile ${
                    isSelected
                      ? 'bg-[#0A2118] text-[#F1EBDD] border-[#B99045]/50 shadow-elevated'
                      : 'bg-[#E4D7BA]/60 hover:bg-[#E4D7BA] text-[#122017] border-[#122017]/10'
                  }`}
                >
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-base sm:text-lg font-display font-medium leading-tight">
                        {item.name}
                      </h3>
                      <span
                        className={`text-[10px] font-mono uppercase px-2 py-0.5 rounded ${
                          isSelected
                            ? 'bg-[#17412E] text-[#B99045] border border-[#B99045]/30'
                            : 'bg-[#122017]/5 text-[#405046] border border-[#122017]/10'
                        }`}
                      >
                        {item.category}
                      </span>
                    </div>
                    <p className={`text-xs mt-1 line-clamp-1 ${isSelected ? 'text-[#E4D7BA]/75' : 'text-[#405046]'}`}>
                      {item.origins.join(', ')}
                    </p>
                  </div>

                  <span
                    className={`font-mono text-xs font-medium shrink-0 ml-3 ${
                      isSelected ? 'text-[#B99045]' : 'text-[#17412E]'
                    }`}
                  >
                    {isSelected ? '● Inspecting' : 'Select'}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Right: Active Product Evidence & Photographic Showcase (7 Cols) */}
          <div className="lg:col-span-7 bg-[#E4D7BA] rounded-md border border-[#122017]/15 overflow-hidden flex flex-col justify-between shadow-subtle">
            {/* Real Product Photography */}
            <div className="relative h-60 sm:h-72 w-full overflow-hidden bg-[#0A2118]">
              <img
                src={activeCommodity.imageUrl}
                alt={`${activeCommodity.name} commodity produce`}
                className="w-full h-full object-cover object-center transition-all duration-300 transform hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A2118]/80 via-transparent to-transparent"></div>
              
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-[#F1EBDD]">
                <div>
                  <span className="text-[10px] font-mono uppercase text-[#B99045] tracking-widest block font-bold">
                    {activeCommodity.category} SOURCING
                  </span>
                  <h4 className="text-xl sm:text-2xl font-display font-medium text-[#F1EBDD]">
                    {activeCommodity.name}
                  </h4>
                </div>
                <span className="px-2.5 py-1 rounded bg-[#17412E]/90 text-[#B99045] border border-[#B99045]/40 text-xs font-mono">
                  {activeCommodity.procurementStrategy}
                </span>
              </div>
            </div>

            {/* Diagnostic Details Panel */}
            <div className="p-6 sm:p-7 space-y-5 bg-[#E4D7BA]">
              <p className="text-sm text-[#405046] leading-relaxed">
                {activeCommodity.description}
              </p>

              {/* Verified Origin & Sourcing Diagnostics */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                <div className="p-3 rounded bg-[#F1EBDD] border border-[#122017]/10 text-xs">
                  <span className="text-[10px] font-mono uppercase font-bold text-[#63756A] block">Origin Regions:</span>
                  <strong className="text-[#122017] font-medium block mt-0.5">{activeCommodity.origins.join(', ')}</strong>
                </div>
                <div className="p-3 rounded bg-[#F1EBDD] border border-[#122017]/10 text-xs">
                  <span className="text-[10px] font-mono uppercase font-bold text-[#63756A] block">Key Varieties &amp; Grades:</span>
                  <strong className="text-[#122017] font-medium block mt-0.5">{activeCommodity.gradeVariants.join(', ')}</strong>
                </div>
              </div>

              {/* Highlights */}
              <div className="space-y-1.5 pt-1">
                {activeCommodity.b2bHighlights.map((hl, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-[#405046]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#17412E] shrink-0 mt-0.5" />
                    <span>{hl}</span>
                  </div>
                ))}
              </div>

              {/* Bottom Action */}
              <div className="pt-3 border-t border-[#122017]/10 flex flex-wrap items-center justify-between gap-3">
                <span className="text-xs text-[#63756A] font-mono">
                  Specifications confirmed per purchase order
                </span>
                <Button
                  href={`/contact?commodity=${activeCommodity.id}`}
                  variant="primary"
                  size="sm"
                  icon={<ArrowRight className="w-3.5 h-3.5 text-[#B99045]" />}
                >
                  Discuss {activeCommodity.name} Supply
                </Button>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
