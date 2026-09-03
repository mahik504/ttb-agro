import React from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { TrendingUp } from 'lucide-react';

export const SeasonalDeriskingSection: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 bg-parchment-100/40 border-b border-ink-900/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Heading */}
        <SectionHeading
          badgeText="STRATEGIC DE-RISKING • TWO-WAVE MODEL"
          title="Seasonal Availability"
          highlightText="&amp; Off-Season Stabilization."
          description="Domestic agricultural yields naturally peak and dip across regional harvest seasons. TTB Agro pairs domestic autumn harvest peaks with dedicated import channels from Iran and Turkey to ensure supply continuity for organized retail."
          align="center"
          className="max-w-3xl mx-auto mb-12 lg:mb-16"
        />

        {/* Qualitative Diagram Container */}
        <div className="bg-evergreen-950 text-cream-100 border border-gold-500/30 p-6 sm:p-10 shadow-elevated space-y-8">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-gold-500/20 pb-5">
            <div>
              <span className="text-[10px] font-mono uppercase font-bold text-gold-500 tracking-[0.16em] block">
                QUALITATIVE SOURCING CONTINUITY MATRIX (SLIDE 7)
              </span>
              <h3 className="text-xl sm:text-2xl font-display font-medium text-cream-100 mt-1">
                Domestic Harvest Peaks vs. Strategic Eurasian Import Interventions
              </h3>
            </div>
            <div className="text-xs font-mono text-gold-500 bg-field-900 px-3.5 py-1.5 border border-gold-500/40 flex items-center gap-2">
              <TrendingUp className="w-3.5 h-3.5 text-gold-500" />
              <span>Dual-Channel Hedging</span>
            </div>
          </div>

          {/* SVG Diagram Canvas */}
          <div className="relative w-full h-56 sm:h-72 bg-evergreen-900/80 border border-gold-500/20 p-4 sm:p-6 flex flex-col justify-between">
            {/* Legend & Baseline Indicator */}
            <div className="flex flex-wrap items-center justify-between text-xs font-mono text-gold-500 border-b border-gold-500/20 pb-3 gap-2">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-0.5 bg-gold-500" />
                <span className="tracking-wider uppercase text-[11px]">
                  Continuous Retail Procurement Baseline
                </span>
              </div>
              <span className="text-parchment-100/60 text-[10px]">
                365-Day Scheduled Delivery Commitment
              </span>
            </div>

            {/* SVG Visual Curves */}
            <div className="relative w-full h-full flex items-center justify-center my-2">
              <svg viewBox="0 0 800 220" className="w-full h-full" fill="none" preserveAspectRatio="none">
                {/* Horizontal Baseline Dotted Line */}
                <line
                  x1="20"
                  y1="35"
                  x2="780"
                  y2="35"
                  stroke="#B99045"
                  strokeWidth="1.5"
                  strokeDasharray="6 6"
                />

                {/* Domestic Harvest Wave (Deep Leaf Green) */}
                <path
                  d="M 20 180 C 120 180, 160 55, 260 55 C 360 55, 400 180, 500 180 C 600 180, 640 55, 740 55 L 780 90"
                  stroke="#4A906F"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                />

                {/* Import Supplementation Wave (Antique Gold) */}
                <path
                  d="M 20 65 C 100 65, 140 180, 240 180 C 340 180, 380 65, 480 65 C 580 65, 620 180, 720 180 L 780 145"
                  stroke="#B99045"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
            </div>

            {/* Timeline Axis */}
            <div className="grid grid-cols-4 text-[11px] font-mono text-parchment-100/70 border-t border-gold-500/20 pt-3 text-center">
              <div>Q1 (Jan–Mar) • Winter Import</div>
              <div>Q2 (Apr–Jun) • Southern Harvest</div>
              <div>Q3 (Jul–Sep) • Autumn Apple/Rice</div>
              <div>Q4 (Oct–Dec) • Peak Sourcing</div>
            </div>
          </div>

          {/* Qualitative Takeaways */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-mono pt-2">
            <div className="p-4 bg-field-900/60 border border-gold-500/20 flex items-start gap-3">
              <div className="w-3 h-3 rounded-full bg-[#4A906F] shrink-0 mt-0.5" />
              <div>
                <strong className="text-cream-100 block mb-1">
                  Domestic Regional Aggregation (HP, J&amp;K, Western &amp; Southern Belts)
                </strong>
                <p className="text-parchment-100/70 font-sans text-xs leading-relaxed">
                  Captures domestic harvest abundance during peak seasons, optimizing farm-gate prices and freshness.
                </p>
              </div>
            </div>

            <div className="p-4 bg-field-900/60 border border-gold-500/20 flex items-start gap-3">
              <div className="w-3 h-3 rounded-full bg-[#B99045] shrink-0 mt-0.5" />
              <div>
                <strong className="text-cream-100 block mb-1">
                  Strategic Eurasian Import Channels (Iran &amp; Turkey)
                </strong>
                <p className="text-parchment-100/70 font-sans text-xs leading-relaxed">
                  Intervenes precisely during domestic harvest lulls, insulating retail contracts from price shocks and volume stockouts.
                </p>
              </div>
            </div>
          </div>

          {/* Model Disclosure */}
          <div className="text-[11px] text-parchment-100/60 font-mono text-center pt-2">
            * Illustrative seasonal sourcing model. Commercial purchase allocations and delivery schedules confirmed per consignment contract.
          </div>
        </div>

      </div>
    </section>
  );
};
