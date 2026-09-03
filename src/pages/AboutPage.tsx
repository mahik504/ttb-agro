import React from 'react';
import { PageHeader } from '../components/layout/PageHeader';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Button } from '../components/ui/Button';
import { companyInfo } from '../data/company';
import { leadershipData } from '../data/leadership';
import { ArrowRight, ExternalLink, MapPin } from 'lucide-react';

export const AboutPage: React.FC = () => {
  return (
    <div className="bg-cream-100 min-h-screen pb-24">
      {/* Page Header */}
      <PageHeader
        badgeText="CORPORATE PROFILE &amp; DIRECTORS • SLIDE 1 &amp; 11"
        title="Connecting Origin Growers to"
        highlightText="Organised Commercial Demand."
        description="TTB Agro India Private Limited is a specialized B2B sourcing, procurement, trading, processing, and distribution enterprise founded on farm-gate integrity and dual-stage quality enforcement."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'About' }
        ]}
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-16 space-y-20">
        
        {/* Section 1: Positioning & Operating Philosophy */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-7 space-y-8">
            <SectionHeading
              badgeText="CORPORATE POSITIONING (SLIDE 1)"
              title="A Dependable Procurement Partner for"
              highlightText="Organised Retail Chains."
              description="Organized retail supermarkets, hypermarket networks, and food-service buyers demand volume dependability, disciplined grading, and transparent origin trace. TTB Agro connects growers across India and overseas origins with organized commercial demand."
              align="left"
              className="mb-0"
            />

            <div className="p-8 bg-parchment-100 border border-ink-900/15 shadow-subtle space-y-5">
              <span className="text-[11px] uppercase font-mono font-bold text-gold-600 tracking-widest block">
                Operating Philosophy (Slide 2):
              </span>
              <p className="text-2xl sm:text-3xl font-display font-medium text-field-900 italic leading-snug">
                "{companyInfo.operatingPhilosophy}"
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-ink-900/10">
                <div className="p-4 bg-cream-100 border border-ink-900/10 space-y-2">
                  <strong className="block text-ink-900 font-display font-medium text-base">
                    Sourcing with Integrity
                  </strong>
                  <p className="text-xs text-ink-soft leading-relaxed font-sans">
                    Connecting growers across India and strategic overseas origins; ensuring transparent practices and deep roots at the agricultural source.
                  </p>
                </div>
                <div className="p-4 bg-cream-100 border border-ink-900/10 space-y-2">
                  <strong className="block text-ink-900 font-display font-medium text-base">
                    Delivering with Precision
                  </strong>
                  <p className="text-xs text-ink-soft leading-relaxed font-sans">
                    The trusted supply partner for retail chains and commercial food networks; guaranteeing consistent grading and volume fulfillment.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Institutional Profile Snapshot */}
          <div className="lg:col-span-5 bg-evergreen-950 text-cream-100 p-8 border border-gold-500/30 space-y-6 shadow-elevated">
            <div className="border-b border-gold-500/20 pb-4 flex items-center justify-between">
              <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-gold-500">
                Corporate Snapshot
              </h3>
              <span className="text-[10px] font-mono px-2 py-0.5 bg-field-900 text-parchment-100 border border-gold-500/30">
                Statutory Data
              </span>
            </div>
            
            <div className="space-y-4 text-xs font-mono">
              <div className="flex justify-between py-2 border-b border-gold-500/15">
                <span className="text-parchment-100/70">Legal Entity:</span>
                <strong className="text-cream-100">{companyInfo.legalName}</strong>
              </div>
              <div className="flex justify-between py-2 border-b border-gold-500/15">
                <span className="text-parchment-100/70">Company Type:</span>
                <span className="text-cream-100">Private Limited (India)</span>
              </div>
              <div className="flex justify-between py-2 border-b border-gold-500/15">
                <span className="text-parchment-100/70">Group Scale:</span>
                <strong className="text-gold-500">{companyInfo.groupTurnover} Combined Group</strong>
              </div>
              <div className="flex justify-between py-2 border-b border-gold-500/15">
                <span className="text-parchment-100/70">Operations Hub:</span>
                <span className="text-cream-100">Seawoods, Navi Mumbai</span>
              </div>
              <div className="flex justify-between py-2">
                <span className="text-parchment-100/70">Supply Channels:</span>
                <span className="text-cream-100">Domestic Origins + Iran &amp; Turkey</span>
              </div>
            </div>

            <div className="p-4 bg-field-900/60 border border-gold-500/20 text-xs text-parchment-100/75 leading-relaxed font-sans">
              TTB Agro operates as the trading and commercial supply engine of the group ecosystem, backed by processing synergy and financial strength.
            </div>
          </div>
        </div>

        {/* Section 2: Board of Directors (Slide 11) */}
        <div id="leadership" className="pt-8 border-t border-ink-900/10 space-y-8">
          <SectionHeading
            badgeText="GOVERNANCE &amp; DIRECTORS • SLIDE 11"
            title="Board of Directors"
            description="The leadership guiding TTB Agro India Private Limited's sourcing strategy, statutory governance, and commercial buyer relationships."
            align="left"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
            {leadershipData.map((leader) => (
              <div
                key={leader.id}
                className="p-8 bg-parchment-100 border border-ink-900/15 space-y-5 shadow-subtle hover:border-gold-500/40 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-evergreen-950 text-gold-500 border border-gold-500/30 flex items-center justify-center font-display font-medium text-lg shadow-sm">
                    {leader.name.replace('Mr. ', '').split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <h3 className="text-xl font-display font-medium text-ink-900">
                      {leader.name}
                    </h3>
                    <p className="text-xs font-mono text-gold-600 font-bold uppercase tracking-wider mt-0.5">
                      {leader.title}
                    </p>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-ink-soft leading-relaxed pt-3 border-t border-ink-900/10 font-sans">
                  {leader.summary}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Section 3: Registered Operations Hub */}
        <div className="bg-parchment-100 border border-ink-900/15 p-8 sm:p-10 shadow-subtle space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-ink-900/10 pb-4">
            <div>
              <span className="text-[11px] font-mono uppercase font-bold text-gold-600 tracking-widest block">
                STATUTORY HEADQUARTERS &amp; OPERATIONS DOCK
              </span>
              <h3 className="text-2xl sm:text-3xl font-display font-medium text-ink-900 mt-1">
                Seawoods, Nerul, Navi Mumbai Hub
              </h3>
            </div>
            <span className="px-3 py-1 bg-field-900 text-gold-500 border border-gold-500/30 text-xs font-mono">
              Sector 48 Operational Hub
            </span>
          </div>

          <p className="text-sm sm:text-base text-ink-soft leading-relaxed max-w-3xl font-sans">
            Located in Seawoods, Nerul, Navi Mumbai, our registered office coordinates agricultural intake, direct import container movements, dual-stage quality enforcement, and scheduled dispatches to modern retail supermarket chains across Western and Southern India.
          </p>

          <div className="p-4 bg-cream-100 border border-ink-900/10 text-xs font-mono text-ink-900 flex items-center gap-3">
            <MapPin className="w-4 h-4 text-field-900 shrink-0" />
            <span>{companyInfo.registeredOffice.fullAddress}</span>
          </div>

          <div className="pt-2 flex flex-wrap items-center gap-5">
            <Button
              href="/contact"
              variant="primary"
              size="sm"
              icon={<ArrowRight className="w-3.5 h-3.5 text-gold-500" />}
            >
              Contact Commercial Desk
            </Button>
            <a
              href={companyInfo.registeredOffice.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-mono text-field-900 hover:text-gold-600 transition-colors uppercase tracking-wider flex items-center gap-1.5"
            >
              <span>View in Google Maps</span>
              <ExternalLink className="w-3.5 h-3.5 text-gold-500" />
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};
