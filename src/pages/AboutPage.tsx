import React from 'react';
import { PageHeader } from '../components/layout/PageHeader';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import { companyInfo } from '../data/company';
import { leadershipData, governancePrinciples } from '../data/leadership';
import { ShieldCheck, ArrowRight, CheckCircle2 } from 'lucide-react';

export const AboutPage: React.FC = () => {
  return (
    <div className="bg-[#FAFBF9] min-h-screen pb-20">
      {/* Page Header */}
      <PageHeader
        badgeText="ABOUT TTB AGRO INDIA"
        badgeVariant="green"
        title="Connecting Origin Agriculture to"
        highlightText="Organised Commercial Demand."
        description="TTB Agro India Private Limited operates as a specialized B2B sourcing, procurement, trading, processing, and distribution powerhouse founded on transparency, dual-stage quality control, and supply resilience."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'About Us' }
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 space-y-16">
        
        {/* Section 1: Executive Overview & Operating Philosophy */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-5">
            <SectionHeading
              badgeText="CORPORATE POSITIONING"
              badgeVariant="forest"
              title="A Purpose-Built Sourcing Partner for"
              highlightText="Organised Trade."
              description="Modern trade retailers, hypermarket networks, and hospitality giants require volume stability, grading predictability, and continuous shelf fill-rates. TTB Agro was built to eliminate structural inefficiencies in traditional agricultural supply chains."
              align="left"
              className="mb-0"
            />

            <div className="p-4 rounded-xl bg-forest-50 border border-forest-200 text-forest-950 space-y-2">
              <div className="text-xs font-bold uppercase tracking-wider text-forest-700">
                Operating Philosophy:
              </div>
              <p className="text-base font-bold font-display italic text-forest-900">
                "{companyInfo.operatingPhilosophy}"
              </p>
              <p className="text-xs text-forest-800/80 leading-relaxed">
                We believe that reliable retail supply begins with fair, long-term procurement relationships at the farm gate, coupled with zero-compromise grading standards at the distribution dock.
              </p>
            </div>
          </div>

          <div className="lg:col-span-5 bg-white p-6 sm:p-8 rounded-2xl border border-gray-200 shadow-subtle space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-gray-900 font-display">
              Corporate Snapshot
            </h3>
            
            <div className="space-y-3 text-xs text-gray-700">
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="text-gray-500">Legal Entity:</span>
                <strong className="text-gray-900">{companyInfo.legalName}</strong>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="text-gray-500">Enterprise Structure:</span>
                <span className="font-semibold text-gray-900">Private Limited Company</span>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="text-gray-500">Parent Group Scale:</span>
                <strong className="text-forest-700 font-mono">{companyInfo.groupTurnover} Combined Ecosystem</strong>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="text-gray-500">Central Hub:</span>
                <span className="text-gray-900 font-medium">Navi Mumbai, Maharashtra</span>
              </div>
              <div className="flex justify-between py-2">
                <span className="text-gray-500">Sourcing Radius:</span>
                <span className="text-gray-900 font-medium">Pan-India + Eurasia Imports</span>
              </div>
            </div>
          </div>
        </div>

        {/* Section 2: Leadership & Directorship */}
        <div id="leadership" className="pt-6">
          <SectionHeading
            badgeText="BOARD & GOVERNANCE"
            badgeVariant="forest"
            title="Corporate Leadership &"
            highlightText="Operational Governance."
            description="Guided by experienced agricultural procurement and supply-chain leaders committed to institutional compliance and long-term customer partnerships."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {leadershipData.map((leader) => (
              <Card
                key={leader.id}
                variant="elevated"
                padding="lg"
                className="border-gray-200 bg-white flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-xl bg-forest-900 text-white flex items-center justify-center font-bold text-lg font-mono">
                      {leader.name.split(' ').slice(1).map(n => n[0]).join('')}
                    </div>
                    <Badge variant="green" size="sm" icon={<ShieldCheck className="w-3 h-3 text-agri-700" />}>
                      Verified Director
                    </Badge>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-gray-900 font-display">
                      {leader.name}
                    </h3>
                    <p className="text-xs font-bold text-agri-700 mt-0.5">
                      {leader.title}
                    </p>
                    <p className="text-xs text-gray-500 font-medium mt-0.5">
                      {leader.focusArea}
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed pt-2 border-t border-gray-100">
                    {leader.summary}
                  </p>
                </div>

                <div className="pt-4 mt-6 border-t border-gray-100 text-[11px] font-mono text-gray-400">
                  Directorship Registered • TTB Agro India Pvt. Ltd.
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Section 3: Governance Principles */}
        <div className="pt-6">
          <div className="bg-forest-950 rounded-2xl p-8 sm:p-12 text-white border border-forest-800">
            <h3 className="text-2xl font-bold font-display text-white mb-6 text-center">
              Core Principles of Governance
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {governancePrinciples.map((gp, idx) => (
                <div key={idx} className="p-5 rounded-xl bg-forest-900/70 border border-forest-800 space-y-2">
                  <div className="flex items-center gap-2 text-agri-300 font-bold text-sm">
                    <CheckCircle2 className="w-4 h-4 text-agri-400 shrink-0" />
                    <span>{gp.title}</span>
                  </div>
                  <p className="text-xs text-gray-300 leading-relaxed">
                    {gp.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Section 4: Operations Hub & Registered Office */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white p-8 rounded-2xl border border-gray-200">
          <div className="lg:col-span-6 space-y-4">
            <Badge variant="amber" size="sm">OPERATIONAL FACILITY</Badge>
            <h3 className="text-2xl font-bold text-gray-900 font-display">
              Operations Hub & Registered Office
            </h3>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
              Located in Seawoods, Nerul, Navi Mumbai, our facility sits in close proximity to major consumption hubs across the Mumbai Metropolitan Region and Western India, with seamless access to JNPT port for reefer container offloading.
            </p>
            <div className="p-3 bg-sand-50 rounded-lg border border-sand-200 text-xs text-gray-700 space-y-1">
              <div className="font-bold text-gray-900">Registered Office Address:</div>
              <div>{companyInfo.registeredOffice.fullAddress}</div>
            </div>
            <Button href="/contact" variant="primary" size="sm" icon={<ArrowRight className="w-3.5 h-3.5" />}>
              Get in Touch with Our Hub
            </Button>
          </div>

          <div className="lg:col-span-6 h-64 sm:h-72 rounded-xl overflow-hidden border border-gray-200 shadow-inner bg-gray-100">
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
