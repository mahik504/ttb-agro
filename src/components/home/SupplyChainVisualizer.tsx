import React, { useState } from 'react';
import { Trees, Globe2, ShieldCheck, Truck, CheckCircle2, ArrowRight } from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';
import { supplyChainStages } from '../../data/network';

export const SupplyChainVisualizer: React.FC = () => {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const currentStage = supplyChainStages[activeStepIndex];

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Trees':
        return <Trees className="w-5 h-5" />;
      case 'Globe2':
        return <Globe2 className="w-5 h-5" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5" />;
      case 'Truck':
        return <Truck className="w-5 h-5" />;
      default:
        return <Trees className="w-5 h-5" />;
    }
  };

  return (
    <section className="py-20 bg-[#FAFBF9] border-b border-gray-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <SectionHeading
          badgeText="SUPPLY CHAIN EXCELLENCE"
          badgeVariant="forest"
          title="From Origin to Retail:"
          highlightText="A Four-Stage Resilient Journey."
          description="How TTB Agro combines domestic farm aggregations, counter-seasonal global imports, and dual-stage testing to deliver uncompromising quality to commercial buyers."
          align="center"
        />

        {/* 4 Interactive Progress Tabs */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-8">
          {supplyChainStages.map((stage, idx) => {
            const isActive = idx === activeStepIndex;
            return (
              <button
                key={stage.step}
                onClick={() => setActiveStepIndex(idx)}
                className={`p-4 rounded-xl text-left transition-all btn-tactile border flex flex-col justify-between ${
                  isActive
                    ? 'bg-forest-900 text-white border-forest-800 shadow-elevated'
                    : 'bg-white text-gray-700 border-gray-200 hover:border-forest-300 hover:bg-forest-50/40'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <span
                    className={`w-8 h-8 rounded-lg flex items-center justify-center font-mono font-bold text-xs ${
                      isActive ? 'bg-agri-600 text-white' : 'bg-gray-100 text-gray-700'
                    }`}
                  >
                    {stage.step}
                  </span>
                  <div className={isActive ? 'text-agri-300' : 'text-gray-400'}>
                    {getIcon(stage.iconName)}
                  </div>
                </div>

                <div>
                  <h4 className={`text-sm font-bold ${isActive ? 'text-white' : 'text-gray-900'}`}>
                    {stage.title}
                  </h4>
                  <p className={`text-[11px] mt-0.5 ${isActive ? 'text-gray-300' : 'text-gray-500'}`}>
                    {stage.subtitle}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        {/* In-depth Stage Inspection Card */}
        <Card variant="elevated" padding="lg" className="border-forest-100 bg-white">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Content (7 Cols) */}
            <div className="lg:col-span-7 space-y-5">
              <div className="flex items-center gap-2.5">
                <span className="text-xs font-mono font-bold px-2.5 py-1 rounded bg-forest-100 text-forest-900">
                  STAGE {currentStage.step}
                </span>
                <Badge variant="green" size="sm">
                  {currentStage.subtitle}
                </Badge>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-forest-950 font-display">
                {currentStage.title}
              </h3>

              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                {currentStage.description}
              </p>

              {/* Operational Checkpoints */}
              <div className="space-y-2.5 pt-2">
                <span className="text-xs font-bold uppercase tracking-wider text-forest-900 block">
                  Operational Execution Standards:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {currentStage.tacticalOperations.map((op, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-gray-700 p-2.5 rounded-lg bg-sand-50 border border-sand-200">
                      <CheckCircle2 className="w-4 h-4 text-agri-600 shrink-0 mt-0.5" />
                      <span>{op}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* QC Gate Callout */}
              <div className="p-3.5 rounded-xl bg-forest-900 text-white flex items-center justify-between gap-3 text-xs">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-agri-400 shrink-0" />
                  <span className="font-semibold">{currentStage.qcGate}</span>
                </div>
                <span className="text-[10px] uppercase tracking-wider font-mono text-agri-300 font-bold bg-forest-800 px-2 py-0.5 rounded">
                  Active Gate
                </span>
              </div>
            </div>

            {/* Right Visual / Metric Callout (5 Cols) */}
            <div className="lg:col-span-5 bg-sand-50 rounded-2xl p-6 border border-sand-300/80 space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-forest-900">
                Institutional Buyer Guarantee:
              </h4>

              <div className="space-y-3 text-xs text-gray-700">
                <div className="p-3 bg-white rounded-xl border border-sand-200">
                  <div className="font-bold text-gray-900 mb-0.5">Zero Speculative Markups</div>
                  <p className="text-gray-600 text-[11px]">
                    Direct origin aggregation eliminates non-value adding mandi broker tiers.
                  </p>
                </div>
                <div className="p-3 bg-white rounded-xl border border-sand-200">
                  <div className="font-bold text-gray-900 mb-0.5">Continuous Fill Rates</div>
                  <p className="text-gray-600 text-[11px]">
                    Domestic off-season production dips are offset by dedicated reefer imports.
                  </p>
                </div>
                <div className="p-3 bg-white rounded-xl border border-sand-200">
                  <div className="font-bold text-gray-900 mb-0.5">Dock Intake Compliance</div>
                  <p className="text-gray-600 text-[11px]">
                    Pre-calibrated produce matching hypermarket and QSR quality intake manuals.
                  </p>
                </div>
              </div>

              <div className="pt-2">
                <Button href="/supply-chain" variant="primary" size="sm" className="w-full" icon={<ArrowRight className="w-3.5 h-3.5" />}>
                  Detailed Supply Chain Architecture
                </Button>
              </div>
            </div>

          </div>
        </Card>

      </div>
    </section>
  );
};
