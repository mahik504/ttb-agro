import React, { useState } from 'react';
import { PageHeader } from '../components/layout/PageHeader';
import { SectionHeading } from '../components/ui/SectionHeading';
import { RfpForm } from '../components/contact/RfpForm';
import { companyInfo } from '../data/company';
import { faqsData } from '../data/faq';
import { MapPin, Mail, ChevronDown, ExternalLink, Clock, ShieldCheck } from 'lucide-react';

export const ContactPage: React.FC = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenFaqIndex(openFaqIndex === idx ? null : idx);
  };

  return (
    <div className="bg-cream-100 min-h-screen pb-24">
      {/* Page Header */}
      <PageHeader
        badgeText="COMMERCIAL DESK &amp; RFP SPECIFICATIONS"
        title="Commercial Sourcing Desk"
        highlightText="&amp; Procurement Inquiries."
        description="Connect with our central coordination desk in Navi Mumbai to review commodity volume allocations, origin specifications, and scheduled distribution timetables."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Contact' }
        ]}
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-16 space-y-20">
        
        {/* Section 1: Form & Office Coordinates */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left: Commercial RFP Form (7 Cols) */}
          <div className="lg:col-span-7">
            <RfpForm />
          </div>

          {/* Right: Coordinates & Office Details (5 Cols) */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Direct Office Information */}
            <div className="p-8 bg-parchment-100 border border-ink-900/15 space-y-6 shadow-subtle">
              <div>
                <span className="text-[11px] font-mono uppercase font-bold text-gold-600 tracking-widest block">
                  STATUTORY HEADQUARTERS &amp; DISPATCH DOCK
                </span>
                <h3 className="text-2xl font-display font-medium text-ink-900 mt-1">
                  Navi Mumbai Operations Hub
                </h3>
              </div>

              <div className="space-y-4 text-xs font-sans text-ink-soft">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-field-900 shrink-0 mt-0.5" />
                  <div className="space-y-1">
                    <strong className="text-ink-900 block font-medium">Headquarters Address:</strong>
                    <span className="leading-relaxed block">{companyInfo.registeredOffice.fullAddress}</span>
                    <a
                      href={companyInfo.registeredOffice.googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-[11px] text-field-900 hover:text-gold-600 font-medium font-mono pt-1"
                    >
                      <span>Open Navi Mumbai Desk in Google Maps</span>
                      <ExternalLink className="w-3 h-3 text-gold-500" />
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 pt-3 border-t border-ink-900/10">
                  <Mail className="w-4 h-4 text-field-900 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-ink-900 block font-medium">Commercial Inquiries Desk:</strong>
                    <a href={`mailto:${companyInfo.contact.officialEmail}`} className="text-field-900 font-mono hover:text-gold-600 font-medium">
                      {companyInfo.contact.officialEmail}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 pt-3 border-t border-ink-900/10">
                  <Clock className="w-4 h-4 text-field-900 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-ink-900 block font-medium">Operating Hours:</strong>
                    <span className="font-mono">Monday – Saturday • 09:00 – 18:00 IST</span>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-cream-100 border border-ink-900/10 text-xs text-ink-soft font-mono">
                Commercial purchase orders, contracts, and quality certificates are executed through our Navi Mumbai registered office.
              </div>
            </div>

            {/* Quick Assurance */}
            <div className="p-6 bg-evergreen-950 text-cream-100 border border-gold-500/30 space-y-2 shadow-elevated">
              <div className="flex items-center gap-2 text-gold-500 text-xs font-mono font-bold uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4" />
                <span>Statutory &amp; Quality Compliance</span>
              </div>
              <p className="text-xs text-parchment-100/80 leading-relaxed font-sans font-light">
                All domestic origin aggregations and Eurasian import consignments comply with relevant food safety standards and bilateral trade protocols.
              </p>
            </div>

          </div>
        </div>

        {/* Section 2: Procurement Q&A (The 8 Safe Fact Questions) */}
        <div id="faq" className="space-y-8 pt-8 border-t border-ink-900/10">
          <SectionHeading
            badgeText="PROCUREMENT Q&amp;A • FACT-SAFE GUIDELINES"
            title="Frequently Answered Procurement Questions"
            description="Verified facts and operational clarifications regarding our agricultural commodity origins, dual-stage QC checks, and group scale."
            align="left"
          />

          <div className="space-y-3.5 max-w-4xl">
            {faqsData.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={faq.id}
                  className="border border-ink-900/15 bg-parchment-100 overflow-hidden transition-colors shadow-subtle"
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(idx)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 font-display font-medium text-ink-900 hover:bg-parchment-200/50 transition-colors"
                  >
                    <span className="text-base sm:text-lg">{faq.question}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-gold-600 shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180 text-gold-600' : 'text-ink-900/40'
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-6 pt-2 text-xs sm:text-sm text-ink-soft leading-relaxed border-t border-ink-900/10 bg-parchment-100 font-sans">
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
