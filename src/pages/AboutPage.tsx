import React from 'react';
import { PageHeader } from '../components/layout/PageHeader';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Button } from '../components/ui/Button';
import { companyInfo } from '../data/company';
import { leadershipData } from '../data/leadership';
import { ArrowRight, ExternalLink } from 'lucide-react';

export const AboutPage: React.FC = () => {
  return (
    <div className="bg-[#F1EBDD] min-h-screen pb-20">
      {/* Page Header */}
      <PageHeader
        badgeText="ABOUT TTB AGRO INDIA"
        title="Connecting Origin Agriculture to"
        highlightText="Organised Demand."
        description="TTB Agro India Private Limited is a specialized B2B sourcing, procurement, trading, processing, and distribution company founded on origin integrity and dual-stage quality checks."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'About' }
        ]}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 space-y-16">
        
        {/* Section 1: Positioning & Operating Philosophy */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-7 space-y-5">
            <SectionHeading
              badgeText="CORPORATE POSITIONING"
              title="A Dedicated Sourcing Partner for"
              highlightText="Organised Markets."
              description="Organized retail chains, hypermarkets, and food-service networks require dependable volume consistency and strict grading. TTB Agro connects growers across India and overseas origins with organized commercial demand."
              align="left"
              className="mb-0"
            />

            <div className="p-6 rounded-md bg-[#E4D7BA] border border-[#122017]/15 text-[#122017] space-y-3 shadow-subtle">
              <div className="text-[10px] uppercase font-mono font-bold text-[#B99045] tracking-widest">
                Operating Philosophy (Slide 2):
              </div>
              <p className="text-lg sm:text-xl font-display font-medium text-[#17412E] italic">
                "{companyInfo.operatingPhilosophy}"
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs text-[#405046]">
                <div className="p-3.5 rounded bg-[#F1EBDD] border border-[#122017]/10">
                  <strong className="block text-[#122017] font-medium mb-1">Sourcing with Integrity</strong>
                  <span>Connecting growers across India and overseas origins; ensuring fair value, transparent practices, and deep roots at the source.</span>
                </div>
                <div className="p-3.5 rounded bg-[#F1EBDD] border border-[#122017]/10">
                  <strong className="block text-[#122017] font-medium mb-1">Delivering with Precision</strong>
                  <span>The trusted supply partner for retail chains, hospitality networks, and institutional buyers; guaranteeing consistent quality and volume.</span>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 bg-[#E4D7BA] p-6 sm:p-7 rounded-md border border-[#122017]/15 space-y-4 shadow-subtle">
            <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-[#B99045]">
              Corporate Profile Snapshot
            </h3>
            
            <div className="space-y-3 text-xs text-[#405046]">
              <div className="flex justify-between py-2 border-b border-[#122017]/10">
                <span className="text-[#63756A]">Legal Entity:</span>
                <strong className="text-[#122017]">{companyInfo.legalName}</strong>
              </div>
              <div className="flex justify-between py-2 border-b border-[#122017]/10">
                <span className="text-[#63756A]">Company Type:</span>
                <span className="text-[#122017] font-medium">Private Limited</span>
              </div>
              <div className="flex justify-between py-2 border-b border-[#122017]/10">
                <span className="text-[#63756A]">Group Scale:</span>
                <strong className="text-[#17412E] font-mono">{companyInfo.groupTurnover} Total Group Turnover</strong>
              </div>
              <div className="flex justify-between py-2 border-b border-[#122017]/10">
                <span className="text-[#63756A]">Central Office:</span>
                <span className="text-[#122017] font-medium">Navi Mumbai, Maharashtra</span>
              </div>
              <div className="flex justify-between py-2">
                <span className="text-[#63756A]">Sourcing Scope:</span>
                <span className="text-[#122017] font-medium">Domestic Origins + Iran &amp; Turkey</span>
              </div>
            </div>
          </div>
        </div>

        {/* Section 2: Board of Directors (Slide 11) */}
        <div id="leadership" className="pt-4">
          <SectionHeading
            badgeText="BOARD OF DIRECTORS"
            title="Corporate Leadership"
            description="The directorship guiding TTB Agro India Private Limited's sourcing strategy, corporate governance, and commercial partnerships."
            align="left"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl">
            {leadershipData.map((leader) => (
              <div
                key={leader.id}
                className="p-6 sm:p-7 rounded-md bg-[#E4D7BA] border border-[#122017]/15 space-y-4 shadow-subtle"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded bg-[#F1EBDD] border border-[#122017]/15 flex items-center justify-center font-display font-medium text-[#122017] text-sm shadow-xs">
                    {leader.name.replace('Mr. ', '').split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <h3 className="text-lg font-display font-medium text-[#122017]">
                      {leader.name}
                    </h3>
                    <p className="text-xs font-mono text-[#B99045] font-bold mt-0.5">
                      {leader.title}
                    </p>
                  </div>
                </div>

                <p className="text-xs text-[#405046] leading-relaxed pt-2 border-t border-[#122017]/10">
                  {leader.summary}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Section 3: Registered Office & Operations Hub */}
        <div className="bg-[#E4D7BA] p-6 sm:p-8 rounded-md border border-[#122017]/15 space-y-4 shadow-subtle">
          <span className="text-[10px] font-mono uppercase font-bold text-[#B99045] tracking-widest block">
            REGISTERED OFFICE &amp; OPERATIONS HUB
          </span>
          <h3 className="text-xl sm:text-2xl font-display font-medium text-[#122017]">
            Seawoods, Nerul, Navi Mumbai
          </h3>
          <p className="text-xs sm:text-sm text-[#405046] leading-relaxed max-w-3xl">
            Located in Seawoods, Nerul, Navi Mumbai, our registered office coordinates agricultural intake, import logistics, and commercial dispatches across Western and Southern India.
          </p>
          <div className="p-3.5 bg-[#F1EBDD] rounded border border-[#122017]/10 text-xs text-[#122017] font-mono">
            {companyInfo.registeredOffice.fullAddress}
          </div>
          <div className="pt-2 flex flex-wrap items-center gap-4">
            <Button href="/contact" variant="primary" size="sm" icon={<ArrowRight className="w-3.5 h-3.5 text-[#B99045]" />}>
              Contact Commercial Desk
            </Button>
            <a
              href={companyInfo.registeredOffice.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs text-[#17412E] font-medium hover:underline font-mono"
            >
              <span>Open Navi Mumbai office in Google Maps</span>
              <ExternalLink className="w-3.5 h-3.5 text-[#B99045]" />
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};
