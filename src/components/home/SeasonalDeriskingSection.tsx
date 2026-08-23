import React from 'react';
import { SectionHeading } from '../ui/SectionHeading';

export const SeasonalDeriskingSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 bg-[#F4EFE4] border-b border-[#0E1C14]/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <SectionHeading
          badgeText="STRATEGIC DE-RISKING"
          title="The Seasonal De-Risking Strategy:"
          highlightText="Year-Round Continuity."
          description="Agricultural volumes naturally peak and trough across regional harvest cycles. TTB Agro pairs domestic orchard peaks with dedicated Eurasian import corridors to ensure stable commercial fill rates."
          align="center"
        />

        {/* Schematic Wave Diagram (Exact Model from Slide 7) */}
        <div className="bg-[#FBF7EE] rounded border border-[#0E1C14]/10 p-6 sm:p-10 space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#0E1C14]/10 pb-4">
            <div>
              <h3 className="text-base font-display font-medium text-[#0E1C14]">
                Supply Volume vs. Calendar Year Balancing Model
              </h3>
              <p className="text-xs text-[#66746B]">
                Domestic Supply Peaks & Off-Season Dips paired with Strategic Global Import Interventions
              </p>
            </div>
            <div className="text-[11px] font-mono text-[#8C7033] bg-[#C4A35A]/15 px-2.5 py-1 rounded border border-[#C4A35A]/30">
              Schematic Supply Model
            </div>
          </div>

          {/* SVG Schematic Curve */}
          <div className="relative w-full h-48 sm:h-60 bg-[#0B1E15] rounded border border-[#C4A35A]/20 p-4 sm:p-6 flex flex-col justify-between overflow-hidden">
            {/* Top Baseline Header */}
            <div className="flex items-center justify-between text-[11px] text-[#C4A35A] font-mono border-b border-[#C4A35A]/30 pb-2 z-10">
              <span className="font-bold tracking-wider">▲ GUARANTEED YEAR-ROUND RETAIL AVAILABILITY</span>
              <span className="text-[#EAE4D5]/60 text-[10px]">Continuous Supply Baseline</span>
            </div>

            {/* SVG Waves */}
            <div className="relative w-full h-full flex items-center justify-center">
              <svg viewBox="0 0 800 200" className="w-full h-full preserve-3d" fill="none">
                {/* Guaranteed Top Baseline */}
                <line x1="20" y1="20" x2="780" y2="20" stroke="#C4A35A" strokeWidth="2.5" strokeDasharray="4 4" />
                
                {/* Domestic Harvest Wave (Green Curve) */}
                <path
                  d="M 20 160 C 120 160, 160 40, 260 40 C 360 40, 400 160, 500 160 C 600 160, 640 40, 740 40 L 780 80"
                  stroke="#2D5A43"
                  strokeWidth="3"
                  strokeLinecap="round"
                />

                {/* Import Supplementation Wave (Gold Curve) */}
                <path
                  d="M 20 50 C 100 50, 140 160, 240 160 C 340 160, 380 50, 480 50 C 580 50, 620 160, 720 160 L 780 140"
                  stroke="#C4A35A"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
            </div>

            {/* Bottom Timeline Axis */}
            <div className="flex justify-between items-center text-[10px] sm:text-xs text-[#EAE4D5]/60 font-mono pt-2 border-t border-[#C4A35A]/20 z-10">
              <span>Q1 (Jan–Mar)</span>
              <span>Q2 (Apr–Jun)</span>
              <span>Q3 (Jul–Sep)</span>
              <span>Q4 (Oct–Dec)</span>
            </div>
          </div>

          {/* Legend Strip */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-2 text-xs text-[#3D4A42]">
            <div className="flex flex-wrap items-center gap-6">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-[#2D5A43]"></span>
                <span className="font-medium">Domestic Supply Peaks & Off-Season Dips</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-[#C4A35A]"></span>
                <span className="font-medium">Strategic Interventions (Iran/Turkey Imports & Multi-State Sourcing)</span>
              </div>
            </div>
          </div>

          {/* Core Strategic Deck Statement */}
          <div className="p-4 rounded bg-[#F4EFE4] border border-[#0E1C14]/10 text-xs sm:text-sm text-[#3D4A42] leading-relaxed italic text-center font-display">
            "By operating dedicated import channels and multi-state procurement grids, we actively neutralize seasonal price volatility and guarantee year-round availability for our retail partners."
          </div>
        </div>

      </div>
    </section>
  );
};
