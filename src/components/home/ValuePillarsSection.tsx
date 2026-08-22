import React from 'react';
import { TrendingUp, Globe, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';
import { Card } from '../ui/Card';
import { companyInfo } from '../../data/company';

export const ValuePillarsSection: React.FC = () => {
  const getPillarIcon = (iconName: string) => {
    switch (iconName) {
      case 'TrendingUp':
        return <TrendingUp className="w-6 h-6 text-agri-600" />;
      case 'Globe':
        return <Globe className="w-6 h-6 text-amberGold-600" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-forest-700" />;
      default:
        return <ShieldCheck className="w-6 h-6 text-agri-600" />;
    }
  };

  return (
    <section className="py-20 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <SectionHeading
          badgeText="THE TTB ADVANTAGE"
          badgeVariant="forest"
          title="Engineered for Enterprise Trust:"
          highlightText="Our Core Operating Pillars."
          description="Why leading hypermarket networks, QSR brands, and regional hospitality chains rely on TTB Agro India Private Limited for mission-critical supply."
          align="center"
        />

        {/* 3 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {companyInfo.pillars.map((pillar, idx) => (
            <Card
              key={idx}
              variant="elevated"
              padding="lg"
              hoverEffect={true}
              className="border-gray-200 bg-sand-50/50 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-white border border-sand-300 flex items-center justify-center shadow-xs">
                  {getPillarIcon(pillar.icon)}
                </div>

                <div>
                  <span className="text-[11px] uppercase tracking-wider font-bold text-forest-700 font-mono">
                    PILLAR 0{idx + 1}
                  </span>
                  <h3 className="text-xl font-bold text-gray-900 font-display mt-0.5">
                    {pillar.title}
                  </h3>
                  <div className="text-xs font-semibold text-agri-700 mt-1">
                    {pillar.highlight}
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  {pillar.description}
                </p>
              </div>

              <div className="pt-4 mt-6 border-t border-sand-200 flex items-center gap-1.5 text-xs text-forest-900 font-bold">
                <CheckCircle2 className="w-4 h-4 text-agri-600" />
                <span>Enterprise SLA Guarantee</span>
              </div>
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
};
