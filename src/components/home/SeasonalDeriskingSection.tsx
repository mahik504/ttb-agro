import React from 'react';
import { SectionHeading } from '../ui/SectionHeading';

export const SeasonalDeriskingSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-[#E4D7BA]/50 border-b border-[#122017]/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <SectionHeading
          badgeText="STRATEGIC DE-RISKING"
          title="The Seasonal Sourcing Model:"
          highlightText="Bridging Availability Gaps."
          description="Agricultural yields naturally peak and dip across regional harvest calendars. TTB Agro pairs domestic autumn harvest peaks with dedicated import channels to stabilize supply continuity for commercial retail."
          align="center"
        />

        {/* Illustrative Sourcing Model (Exact Concept from Slide 7) */}
        <div className="bg-[#E4D7BA] rounded-md border border-[#122017]/15 p-6 sm:p-10 space-y-6 shadow-subtle">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#122017]/10 pb-4">
            <div>
              <h3 className="text-base sm:text-lg font-display font-medium text-[#122017]">
                Domestic Harvest vs. Strategic Import Sourcing Model
              </h3>
              <p className="text-xs text-[#63756A]">
                Domestic Supply Peaks &amp; Off-Season Dips paired with Strategic Global Import Interventions
              </p>
            </div>
            <div className="text-[11px] font-mono text-[#B99045] bg-[#0A2118] px-3 py-1 rounded border border-[#B99045]/30">
              Illustrative Sourcing Model
            </div>
          </div>

          {/* Qualitative Diagram Container */}
          <div className="relative w-full h-48 sm:h-64 bg-[#0A2118] rounded-md border border-[#B99045]/20 p-4 sm:p-6 flex flex-col justify-between overflow-hidden">
            {/* Top Baseline Header */}
            <div className="flex items-center justify-between text-[11px] text-[#B99045] font-mono border-b border-[#B99045]/25 pb-2 z-10">
              <span className="font-bold tracking-wider">ANNUAL RETAIL SUPPLY CONTINUITY BASELINE</span>
              <span className="text-[#E4D7BA]/60 text-[10px]">Dual-Source Model</span>
            </div>

            {/* SVG Qualitative Curves */}
            <div className="relative w-full h-full flex items-center justify-center">
              <svg viewBox="0 0 800 200" className="w-full h-full" fill="none" preserveAspectRatio="none">
                {/* Guaranteed Continuous Baseline */}
                <line x1="20" y1="25" x2="780" y2="25" stroke="#B99045" strokeWidth="2" strokeDasharray="6 6" />
                
                {/* Domestic Harvest Wave (Green Curve) */}
                <path
                  d="M 20 160 C 120 160, 160 45, 260 45 C 360 45, 400 160, 500 160 C 600 160, 640 45, 740 45 L 780 80"
                  stroke="#326049"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                />

                {/* Import Supplementation Wave (Gold Curve) */}
                <path
                  d="M 20 50 C 100 50, 140 160, 240 160 C 340 160, 380 50, 480 50 C 580 50, 620 160, 720 160 L 780 130"
                  stroke="#B99045"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                />
              </svg>
            </div>

            {/* Bottom Timeline Axis */}
            <div className="flex justify-between items-center text-[10px] sm:text-xs text-[#E4D7BA]/60 font-mono pt-2 border-t border-[#B99045]/20 z-10">
              <span>Q1 (Jan–Mar)</span>
              <span>Q2 (Apr–Jun)</span>
              <span>Q3 (Jul–Sep)</span>
              <span>Q4 (Oct–Dec)</span>
            </div>
          </div>

          {/* Legend Strip */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-1 text-xs text-[#405046]">
            <div className="flex flex-wrap items-center gap-6">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-[#326049]"></span>
                <span className="font-medium text-[#122017]">Domestic Harvest Cycles (HP, J&amp;K, Western &amp; Southern Belts)</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-[#B99045]"></span>
                <span className="font-medium text-[#122017]">Strategic Import Corridors (Iran &amp; Turkey)</span>
              </div>
            </div>
          </div>

          {/* Explicit Mandatory Model Caption */}
          <div className="p-3.5 rounded bg-[#F1EBDD] border border-[#122017]/10 text-xs text-[#63756A] text-center font-mono">
            Illustrative sourcing model — allocations and availability are confirmed per purchase order.
          </div>
        </div>

      </div>
    </section>
  );
};
