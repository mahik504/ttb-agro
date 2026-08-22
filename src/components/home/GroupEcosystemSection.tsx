import React from 'react';
import { Building2, ShieldCheck, Factory, Leaf, Truck, ArrowRight } from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';
import { Button } from '../ui/Button';
import { groupEntities, groupSummary } from '../../data/group';

export const GroupEcosystemSection: React.FC = () => {
  const getEntityIcon = (id: string) => {
    switch (id) {
      case 'just-go-eco':
        return <Leaf className="w-5 h-5 text-emerald-600" />;
      case 'sp-coconut':
        return <Factory className="w-5 h-5 text-amber-600" />;
      case 'just-go-project':
        return <Truck className="w-5 h-5 text-blue-600" />;
      default:
        return <Building2 className="w-5 h-5 text-forest-700" />;
    }
  };

  return (
    <section className="py-20 bg-forest-950 text-white relative overflow-hidden border-b border-forest-800">
      {/* Ambient background blur */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-agri-600/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <SectionHeading
          badgeText="INSTITUTIONAL FOUNDATION"
          badgeVariant="green"
          title="Part of a Diversified"
          highlightText="₹228 Cr Group Ecosystem."
          description={groupSummary.ecosystemStatement}
          align="center"
          dark={true}
        />

        {/* 4 Group Entities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {groupEntities.map((entity) => (
            <div
              key={entity.id}
              className="p-6 rounded-2xl bg-forest-900/80 border border-forest-800 flex flex-col justify-between hover:border-forest-600 transition-all hover:-translate-y-1 shadow-lg"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="p-2.5 rounded-xl bg-forest-800 border border-forest-700">
                    {getEntityIcon(entity.id)}
                  </div>
                  <span className="font-mono font-bold text-base text-agri-300">
                    {entity.turnoverContribution}
                  </span>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-white font-display">
                    {entity.name}
                  </h3>
                  <p className="text-xs font-semibold text-agri-400 mt-0.5">
                    {entity.role}
                  </p>
                </div>

                <p className="text-xs text-gray-300 leading-relaxed">
                  {entity.description}
                </p>

                <div className="space-y-1.5 pt-2 border-t border-forest-800">
                  <span className="text-[10px] uppercase font-bold text-gray-400 block">
                    Synergy with TTB Agro:
                  </span>
                  <p className="text-xs text-emerald-200/90 leading-normal">
                    {entity.synergyWithTTB}
                  </p>
                </div>
              </div>

              <div className="pt-4 mt-4 border-t border-forest-800/80 text-[11px] text-gray-400 font-medium">
                Integrated Sourcing & Logistics
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Institutional Disclaimer & Link */}
        <div className="mt-12 p-4 rounded-xl bg-forest-900/60 border border-forest-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-300">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-agri-400 shrink-0" />
            <span>{groupSummary.disclaimerNote}</span>
          </div>
          <Button href="/group" variant="secondary" size="sm" icon={<ArrowRight className="w-3.5 h-3.5" />}>
            Detailed Ecosystem Architecture
          </Button>
        </div>

      </div>
    </section>
  );
};
