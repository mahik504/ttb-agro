import React from 'react';
import { ArrowUpRight, ShieldCheck, Globe, Sparkles, Building2 } from 'lucide-react';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';
import { companyInfo } from '../../data/company';

interface HeroSectionProps {
  onOpenAssistant?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenAssistant }) => {
  return (
    <section className="relative bg-gradient-to-b from-forest-950 via-forest-900 to-forest-950 text-white overflow-hidden pt-12 pb-20 lg:pt-16 lg:pb-28 border-b border-forest-800">
      {/* Background Architectural Grid Pattern */}
      <div className="absolute inset-0 opacity-15 pointer-events-none bg-[radial-gradient(#5FA886_1px,transparent_1px)] [background-size:28px_28px]"></div>

      {/* Atmospheric Glow Orbs */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-agri-600/20 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-amberGold-600/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Core Value Proposition (7 Cols) */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Top Philosophy Badge */}
            <div className="inline-flex items-center gap-2 p-1.5 pr-4 rounded-full bg-forest-900/90 border border-forest-700/80 text-xs text-agri-300 shadow-sm backdrop-blur-xs">
              <span className="px-2.5 py-0.5 rounded-full bg-agri-600 text-white font-bold text-[10px] tracking-wider uppercase">
                PHILOSOPHY
              </span>
              <span className="font-medium text-gray-200">{companyInfo.operatingPhilosophy}</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.15] text-white font-display">
              Resilient Supply Chains.{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-agri-300 via-emerald-300 to-amberGold-400">
                Connecting Origin Growers
              </span>{' '}
              to Organised Retail.
            </h1>

            {/* Narrative Subtitle */}
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed max-w-2xl">
              <strong className="text-white font-semibold">TTB Agro India Private Limited</strong> bridges farm-gate aggregations and dedicated international import channels with organized supermarket chains, QSR networks, and institutional food service through dual-stage quality control.
            </p>

            {/* Action Triggers */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <Button href="/contact" variant="amber" size="lg" icon={<ArrowUpRight className="w-4 h-4" />}>
                Partner With Us
              </Button>
              <Button href="/supply-chain" variant="outline" size="lg" className="bg-white/10 text-white border-forest-600 hover:bg-white/20">
                Explore Supply Journey
              </Button>
              {onOpenAssistant && (
                <button
                  onClick={onOpenAssistant}
                  className="hidden sm:inline-flex items-center gap-2 text-xs font-semibold px-4 py-3.5 rounded-lg bg-forest-800/80 text-agri-300 border border-forest-600/80 hover:bg-forest-700/80 transition-colors btn-tactile"
                >
                  <Sparkles className="w-3.5 h-3.5 text-amberGold-400" />
                  <span>Ask B2B Assistant</span>
                </button>
              )}
            </div>

            {/* Trust Signal Strip */}
            <div className="pt-6 border-t border-forest-800/80 grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs text-gray-300">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-agri-400 shrink-0" />
                <span>Dual-Stage Quality Gate</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-agri-400 shrink-0" />
                <span>Domestic + Global Imports</span>
              </div>
              <div className="flex items-center gap-2">
                <Building2 className="w-4 h-4 text-agri-400 shrink-0" />
                <span>₹228 Cr Group Strength</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Supply Journey Flowcard (5 Cols) */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl bg-gradient-to-b from-forest-900/90 to-forest-950 p-6 sm:p-7 border border-forest-700/80 shadow-2xl backdrop-blur-md relative">
              
              {/* Card Header */}
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-forest-800">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-agri-400 animate-ping"></div>
                  <span className="text-xs font-bold uppercase tracking-wider text-agri-300">
                    Live Procurement Workflow
                  </span>
                </div>
                <Badge variant="neutral" size="sm" className="bg-forest-800 text-gray-300 border-forest-700 text-[10px]">
                  Origin to Retail Handover
                </Badge>
              </div>

              {/* 4 Interactive Flow Steps */}
              <div className="space-y-3.5">
                
                {/* Step 1 */}
                <div className="p-3 rounded-xl bg-forest-800/60 border border-forest-700/50 flex items-start gap-3 transition-colors hover:bg-forest-800/90">
                  <div className="w-7 h-7 rounded-lg bg-forest-700 flex items-center justify-center font-mono font-bold text-xs text-agri-300 shrink-0">
                    01
                  </div>
                  <div className="text-xs space-y-0.5 flex-1">
                    <div className="font-semibold text-white flex justify-between">
                      <span>Origin Aggregation</span>
                      <span className="text-[10px] text-agri-400 font-mono">TN • KA • MH • HP/JK</span>
                    </div>
                    <p className="text-gray-300 text-[11px] leading-relaxed">
                      Direct farm-gate ties with farmer groups & local aggregators.
                    </p>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="p-3 rounded-xl bg-forest-800/60 border border-forest-700/50 flex items-start gap-3 transition-colors hover:bg-forest-800/90">
                  <div className="w-7 h-7 rounded-lg bg-forest-700 flex items-center justify-center font-mono font-bold text-xs text-amberGold-400 shrink-0">
                    02
                  </div>
                  <div className="text-xs space-y-0.5 flex-1">
                    <div className="font-semibold text-white flex justify-between">
                      <span>Global Supplement</span>
                      <span className="text-[10px] text-amberGold-400 font-mono">Iran • Turkey</span>
                    </div>
                    <p className="text-gray-300 text-[11px] leading-relaxed">
                      Dedicated maritime import channels bridging domestic off-season troughs.
                    </p>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="p-3 rounded-xl bg-forest-800/60 border border-forest-700/50 flex items-start gap-3 transition-colors hover:bg-forest-800/90">
                  <div className="w-7 h-7 rounded-lg bg-forest-700 flex items-center justify-center font-mono font-bold text-xs text-agri-300 shrink-0">
                    03
                  </div>
                  <div className="text-xs space-y-0.5 flex-1">
                    <div className="font-semibold text-white flex justify-between">
                      <span>Dual-Stage QC Screen</span>
                      <span className="text-[10px] text-agri-400 font-mono">Origin + Dispatch</span>
                    </div>
                    <p className="text-gray-300 text-[11px] leading-relaxed">
                      Strict brix testing, optical sortexing, and moisture calibration.
                    </p>
                  </div>
                </div>

                {/* Step 4 */}
                <div className="p-3 rounded-xl bg-forest-800/60 border border-forest-700/50 flex items-start gap-3 transition-colors hover:bg-forest-800/90">
                  <div className="w-7 h-7 rounded-lg bg-forest-700 flex items-center justify-center font-mono font-bold text-xs text-agri-300 shrink-0">
                    04
                  </div>
                  <div className="text-xs space-y-0.5 flex-1">
                    <div className="font-semibold text-white flex justify-between">
                      <span>Last-Mile Dispatch</span>
                      <span className="text-[10px] text-agri-400 font-mono">Navi Mumbai Hub</span>
                    </div>
                    <p className="text-gray-300 text-[11px] leading-relaxed">
                      On-time delivery to hypermarkets, QSRs & hospitality networks.
                    </p>
                  </div>
                </div>

              </div>

              {/* Bottom Card Summary */}
              <div className="mt-4 pt-3.5 border-t border-forest-800 flex items-center justify-between text-xs">
                <span className="text-gray-400">Institutional SLA Fill-Rate:</span>
                <span className="text-agri-300 font-bold font-mono">Continuous 365-Day Sourcing</span>
              </div>

            </div>
          </div>

        </div>

        {/* Bottom Metrics Bar */}
        <div className="mt-14 pt-8 border-t border-forest-800/80 grid grid-cols-2 lg:grid-cols-4 gap-6">
          {companyInfo.metrics.map((metric, idx) => (
            <div key={idx} className="p-4 rounded-xl bg-forest-900/60 border border-forest-800/60">
              <div className="text-2xl sm:text-3xl font-extrabold text-white font-display font-mono">
                {metric.value}
              </div>
              <div className="text-xs font-semibold text-agri-300 mt-1">{metric.label}</div>
              <div className="text-[11px] text-gray-400 mt-0.5">{metric.subtext}</div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
