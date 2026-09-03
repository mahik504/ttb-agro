import React from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { groupEntities, groupSummary } from '../../data/group';
import { ShieldCheck, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const GroupEcosystemSection: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 bg-evergreen-950 text-cream-100 border-b border-gold-500/20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Section Heading */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 lg:mb-16 gap-6">
          <SectionHeading
            badgeText="FINANCIAL SCALE &amp; SISTER ENTITIES • SLIDE 3 &amp; 4"
            title="Backed by an Established"
            highlightText="?228 Cr Combined Group Turnover."
            description={groupSummary.ecosystemStatement}
            align="left"
            dark={true}
            className="mb-0 max-w-3xl"
          />

          <Link
            to="/group"
            className="text-xs font-mono uppercase tracking-[0.14em] text-gold-500 hover:text-cream-100 inline-flex items-center gap-2 pb-1 border-b border-gold-500/40 hover:border-cream-100 transition-colors"
          >
            <span>Explore Group Ecosystem</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-gold-500" />
          </Link>
        </div>

        {/* Tabular Institutional Ledger */}
        <div className="border border-gold-500/25 bg-evergreen-900/70 overflow-hidden shadow-elevated">
          {/* Table Header */}
          <div className="hidden md:grid grid-cols-12 gap-4 px-6 py-4 bg-field-900/60 border-b border-gold-500/20 text-[11px] font-mono uppercase tracking-wider text-gold-500 font-bold">
            <div className="col-span-3">Entity &amp; Corporate Identity</div>
            <div className="col-span-2">Functional Role</div>
            <div className="col-span-5">Core Capabilities &amp; Value-Add</div>
            <div className="col-span-2 text-right">Revenue Scale</div>
          </div>

          {/* Table Rows */}
          <div className="divide-y divide-gold-500/15">
            {groupEntities.map((entity) => (
              <div
                key={entity.id}
                className="p-6 md:px-6 md:py-5 grid grid-cols-1 md:grid-cols-12 gap-4 items-center hover:bg-field-900/30 transition-colors"
              >
                <div className="col-span-3 space-y-1">
                  <div className="text-base font-display font-medium text-cream-100">
                    {entity.name}
                  </div>
                  <div className="text-[11px] font-mono text-gold-500 md:hidden">
                    {entity.role} • {entity.turnoverContribution}
                  </div>
                </div>

                <div className="col-span-2 hidden md:block">
                  <span className="text-xs font-mono text-gold-500/90">
                    {entity.role}
                  </span>
                </div>

                <div className="col-span-5 space-y-1">
                  <p className="text-xs text-parchment-100/80 leading-relaxed font-sans">
                    {entity.description}
                  </p>
                  <p className="text-[11px] text-parchment-100/60 font-mono">
                    <span className="text-gold-500">Synergy:</span> {entity.synergyWithTTB}
                  </p>
                </div>

                <div className="col-span-2 text-left md:text-right">
                  <span className="text-base md:text-lg font-mono font-bold text-gold-500">
                    {entity.turnoverContribution}
                  </span>
                  <span className="block text-[10px] font-mono text-parchment-100/60 uppercase">
                    Turnover Contrib.
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Group Total Footer Row */}
          <div className="px-6 py-5 bg-field-900/80 border-t border-gold-500/30 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs font-mono text-parchment-100/90 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-gold-500 shrink-0" />
              <span>Combined Ecosystem Scale — Corporate Profile Slide 3</span>
            </div>
            <div className="text-right">
              <span className="text-xs font-mono text-parchment-100/70 mr-3 uppercase">Total Combined:</span>
              <span className="text-xl sm:text-2xl font-mono font-bold text-cream-100">
                ?228 Cr
              </span>
            </div>
          </div>
        </div>

        {/* Mandatory Statutory Disclaimer */}
        <div className="mt-6 text-[11px] text-parchment-100/60 font-mono text-center">
          * Combined group turnover presented in the corporate profile; not TTB Agro standalone revenue.
        </div>

      </div>
    </section>
  );
};
