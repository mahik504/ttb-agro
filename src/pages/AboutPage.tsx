import React from 'react';
import { PageHeader } from '../components/layout/PageHeader';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Button } from '../components/ui/Button';
import { companyInfo } from '../data/company';
import { leadershipData } from '../data/leadership';
import { ArrowRight } from 'lucide-react';

export const AboutPage: React.FC = () => {
  return (
    <div className="bg-[#F4EFE4] min-h-screen pb-20">
      {/* Page Header */}
      <PageHeader
        badgeText="ABOUT TTB AGRO INDIA"
        title="Connecting Origin Agriculture to"
        highlightText="Organised Demand."
        description="TTB Agro India Private Limited is a specialized B2B sourcing, procurement, trading, processing, and distribution company founded on origin integrity and dual-stage quality control."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'About Us' }
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

            <div className="p-5 rounded bg-[#FBF7EE] border border-[#0E1C14]/10 text-[#0E1C14] space-y-2">
              <div className="text-[10px] uppercase font-mono font-bold text-[#8C7033] tracking-widest">
                Operating Philosophy (Slide 2):
              </div>
              <p className="text-lg font-display font-medium text-[#1A3C2C] italic">
                "{companyInfo.operatingPhilosophy}"
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs text-[#3D4A42]">
                <div className="p-3 rounded bg-[#F4EFE4] border border-[#0E1C14]/10">
                  <strong className="block text-[#0E1C14] font-medium mb-1">Sourcing with Integrity</strong>
                  <span>Connecting growers across India and overseas origins; ensuring fair value, transparent practices, and deep roots at the source.</span>
                </div>
                <div className="p-3 rounded bg-[#F4EFE4] border border-[#0E1C14]/10">
                  <strong className="block text-[#0E1C14] font-medium mb-1">Delivering with Precision</strong>
                  <span>The trusted partner for retail chains, hospitality networks, and institutional buyers; guaranteeing consistent quality and volume.</span>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 bg-[#FBF7EE] p-6 rounded border border-[#0E1C14]/10 space-y-4">
            <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-[#8C7033]">
              Corporate Profile Snapshot
            </h3>
            
            <div className="space-y-3 text-xs text-[#3D4A42]">
              <div className="flex justify-between py-2 border-b border-[#0E1C14]/10">
                <span className="text-[#66746B]">Legal Entity:</span>
                <strong className="text-[#0E1C14]">{companyInfo.legalName}</strong>
              </div>
              <div className="flex justify-between py-2 border-b border-[#0E1C14]/10">
                <span className="text-[#66746B]">Company Type:</span>
                <span className="text-[#0E1C14] font-medium">Private Limited</span>
              </div>
              <div className="flex justify-between py-2 border-b border-[#0E1C14]/10">
                <span className="text-[#66746B]">Group Scale:</span>
                <strong className="text-[#1A3C2C] font-mono">{companyInfo.groupTurnover} Total Group Turnover</strong>
              </div>
              <div className="flex justify-between py-2 border-b border-[#0E1C14]/10">
                <span className="text-[#66746B]">Headquarters:</span>
                <span className="text-[#0E1C14] font-medium">Navi Mumbai, Maharashtra</span>
              </div>
              <div className="flex justify-between py-2">
                <span className="text-[#66746B]">Procurement Scope:</span>
                <span className="text-[#0E1C14] font-medium">Pan-India + Iran & Turkey Imports</span>
              </div>
            </div>
          </div>
        </div>

        {/* Section 2: Board of Directors (Slide 11) */}
        <div id="leadership" className="pt-4">
          <SectionHeading
            badgeText="GOVERNANCE & LEADERSHIP"
            title="Board of Directors"
            description="The executive leadership guiding TTB Agro India Private Limited's sourcing strategy, corporate governance, and commercial partnerships."
            align="left"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl">
            {leadershipData.map((leader) => (
              <div
                key={leader.id}
                className="p-6 rounded bg-[#FBF7EE] border border-[#0E1C14]/10 space-y-4"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded bg-[#EAE4D5] border border-[#0E1C14]/10 flex items-center justify-center font-display font-medium text-[#3D4A42] text-sm">
                    {leader.name.replace('Mr. ', '').split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <h3 className="text-base font-display font-medium text-[#0E1C14]">
                      {leader.name}
                    </h3>
                    <p className="text-xs font-mono text-[#8C7033] mt-0.5">
                      {leader.title}
                    </p>
                  </div>
                </div>

                <p className="text-xs text-[#3D4A42] leading-relaxed pt-2 border-t border-[#0E1C14]/10">
                  {leader.summary}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Section 3: Operations Hub & Registered Office */}
        <div className="bg-[#FBF7EE] p-6 sm:p-8 rounded border border-[#0E1C14]/10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6 space-y-4">
            <span className="text-[10px] font-mono uppercase font-bold text-[#8C7033] tracking-widest block">
              OPERATIONS HUB & REGISTERED OFFICE
            </span>
            <h3 className="text-xl sm:text-2xl font-display font-medium text-[#0E1C14]">
              Seawoods, Nerul, Navi Mumbai
            </h3>
            <p className="text-xs sm:text-sm text-[#3D4A42] leading-relaxed">
              Located in Seawoods, Nerul, Navi Mumbai, our registered office coordinates agricultural intake, port logistics, and commercial dispatches across Western and Southern India.
            </p>
            <div className="p-3 bg-[#F4EFE4] rounded border border-[#0E1C14]/10 text-xs text-[#0E1C14] font-mono">
              {companyInfo.registeredOffice.fullAddress}
            </div>
            <Button href="/contact" variant="primary" size="sm" icon={<ArrowRight className="w-3.5 h-3.5" />}>
              Contact Commercial Desk
            </Button>
          </div>

          <div className="lg:col-span-6 h-60 rounded overflow-hidden border border-[#0E1C14]/10 bg-[#EAE4D5]">
            <iframe
              title="TTB Agro Operations Hub Map"
              src={companyInfo.registeredOffice.googleMapsEmbedUrl}
              className="w-full h-full border-0"
              loading="lazy"
            ></iframe>
          </div>
        </div>

      </div>
    </div>
  );
};
