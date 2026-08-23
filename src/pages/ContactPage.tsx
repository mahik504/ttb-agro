import React, { useState } from 'react';
import { PageHeader } from '../components/layout/PageHeader';
import { SectionHeading } from '../components/ui/SectionHeading';
import { RfpForm } from '../components/contact/RfpForm';
import { companyInfo } from '../data/company';
import { faqsData } from '../data/faq';
import { MapPin, Mail, ChevronDown, ExternalLink } from 'lucide-react';

export const ContactPage: React.FC = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenFaqIndex(openFaqIndex === idx ? null : idx);
  };

  return (
    <div className="bg-[#F1EBDD] min-h-screen pb-20">
      {/* Page Header */}
      <PageHeader
        badgeText="COMMERCIAL DESK &amp; INQUIRIES"
        title="Commercial Sourcing &amp;"
        highlightText="Procurement Desk."
        description="Connect with our central office in Navi Mumbai to review commodity volume allocations, origin specifications, and delivery schedules."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Contact' }
        ]}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 space-y-16">
        
        {/* Section 1: Form & Office Coordinates */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Commercial RFP Form (7 Cols) */}
          <div className="lg:col-span-7">
            <RfpForm />
          </div>

          {/* Right: Coordinates & Office Details (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Direct Office Information */}
            <div className="p-6 sm:p-7 rounded-md bg-[#E4D7BA] border border-[#122017]/15 space-y-5 shadow-subtle">
              <span className="text-[10px] font-mono uppercase font-bold text-[#B99045] tracking-widest block">
                REGISTERED OFFICE &amp; OPERATIONS HUB
              </span>

              <h3 className="text-xl sm:text-2xl font-display font-medium text-[#122017]">
                Navi Mumbai Central Office
              </h3>

              <div className="space-y-4 text-xs text-[#405046]">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-[#17412E] shrink-0 mt-0.5" />
                  <div className="space-y-1">
                    <strong className="text-[#122017] block font-medium">Headquarters Address:</strong>
                    <span className="leading-relaxed block">{companyInfo.registeredOffice.fullAddress}</span>
                    <a
                      href={companyInfo.registeredOffice.googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-[11px] text-[#17412E] font-medium hover:underline pt-1 font-mono"
                    >
                      <span>Open Navi Mumbai office in Google Maps</span>
                      <ExternalLink className="w-3 h-3 text-[#B99045]" />
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-2.5 pt-2 border-t border-[#122017]/10">
                  <Mail className="w-4 h-4 text-[#17412E] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#122017] block font-medium">Commercial Inquiries Email:</strong>
                    <a href={`mailto:${companyInfo.contact.officialEmail}`} className="text-[#17412E] font-mono hover:underline font-medium">
                      {companyInfo.contact.officialEmail}
                    </a>
                  </div>
                </div>
              </div>

              <div className="p-3.5 rounded bg-[#F1EBDD] border border-[#122017]/10 text-xs text-[#63756A] font-mono">
                Commercial purchase orders and contract terms are executed through our Navi Mumbai registered office.
              </div>
            </div>

          </div>
        </div>

        {/* Section 2: Procurement Q&A (The 8 Safe Fact Questions) */}
        <div id="faq" className="space-y-6 pt-6 border-t border-[#122017]/10">
          <SectionHeading
            badgeText="PROCUREMENT Q&amp;A"
            title="Frequently Answered Sourcing Questions"
            description="Verified facts and operational clarifications regarding our agricultural commodities, dual-stage QC checks, and group scale."
            align="left"
          />

          <div className="space-y-3 max-w-4xl">
            {faqsData.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={faq.id}
                  className="rounded-md border border-[#122017]/15 bg-[#E4D7BA] overflow-hidden transition-colors shadow-subtle"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 font-display font-medium text-[#122017] hover:bg-[#EDE2CC] transition-colors"
                  >
                    <span className="text-sm sm:text-base">{faq.question}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-[#B99045] shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-4 sm:px-5 pb-5 pt-1 text-xs sm:text-sm text-[#405046] leading-relaxed border-t border-[#122017]/10 bg-[#E4D7BA]">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
};
