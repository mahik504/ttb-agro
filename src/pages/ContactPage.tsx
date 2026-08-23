import React, { useState } from 'react';
import { PageHeader } from '../components/layout/PageHeader';
import { SectionHeading } from '../components/ui/SectionHeading';
import { RfpForm } from '../components/contact/RfpForm';
import { companyInfo } from '../data/company';
import { faqsData } from '../data/faq';
import { MapPin, Mail, Clock, ChevronDown } from 'lucide-react';

interface ContactPageProps {
  onOpenAssistant?: () => void;
}

export const ContactPage: React.FC<ContactPageProps> = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenFaqIndex(openFaqIndex === idx ? null : idx);
  };

  return (
    <div className="bg-[#F4EFE4] min-h-screen pb-20">
      {/* Page Header */}
      <PageHeader
        badgeText="COMMERCIAL DESK & INQUIRIES"
        title="Commercial Sourcing &"
        highlightText="Procurement Desk."
        description="Connect with our operations hub in Navi Mumbai to review commodity volume allocations, origin specifications, and delivery schedules."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Contact' }
        ]}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 space-y-16">
        
        {/* Section 1: Form & Coordinates */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: RFP Form (7 Cols) */}
          <div className="lg:col-span-7">
            <RfpForm />
          </div>

          {/* Right: Coordinates & Office Details (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Direct Office Box */}
            <div className="p-6 rounded bg-[#FBF7EE] border border-[#0E1C14]/10 space-y-4">
              <span className="text-[10px] font-mono uppercase font-bold text-[#8C7033] tracking-widest block">
                REGISTERED OFFICE & OPERATIONS HUB
              </span>

              <h3 className="text-xl font-display font-medium text-[#0E1C14]">
                Navi Mumbai Headquarters
              </h3>

              <div className="space-y-3 text-xs text-[#3D4A42]">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-[#1A3C2C] shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-[#0E1C14] block">Address:</strong>
                    {companyInfo.registeredOffice.fullAddress}
                  </span>
                </div>

                <div className="flex items-start gap-2.5">
                  <Mail className="w-4 h-4 text-[#1A3C2C] shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-[#0E1C14] block">Official Email:</strong>
                    <a href={`mailto:${companyInfo.contact.officialEmail}`} className="text-[#1A3C2C] font-mono hover:underline">
                      {companyInfo.contact.officialEmail}
                    </a>
                  </span>
                </div>

                <div className="flex items-start gap-2.5">
                  <Clock className="w-4 h-4 text-[#1A3C2C] shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-[#0E1C14] block">Commercial Desk Hours:</strong>
                    {companyInfo.contact.workingHours}
                  </span>
                </div>
              </div>
            </div>

            {/* Map Embed */}
            <div className="h-64 rounded overflow-hidden border border-[#0E1C14]/10 bg-[#EAE4D5]">
              <iframe
                title="TTB Agro Seawoods Office"
                src={companyInfo.registeredOffice.googleMapsEmbedUrl}
                className="w-full h-full border-0"
                loading="lazy"
              ></iframe>
            </div>

          </div>
        </div>

        {/* Section 2: FAQ Accordion */}
        <div className="space-y-6 pt-6 border-t border-[#0E1C14]/10">
          <SectionHeading
            badgeText="PROCUREMENT FAQs"
            title="Frequently Asked Questions"
            description="Answers to common inquiries regarding our agricultural sourcing, dual-stage QC protocols, and group ecosystem."
            align="left"
          />

          <div className="space-y-3 max-w-4xl">
            {faqsData.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={idx}
                  className="rounded border border-[#0E1C14]/10 bg-[#FBF7EE] overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 font-display font-medium text-[#0E1C14] hover:bg-[#F4EFE4] transition-colors"
                  >
                    <span className="text-sm sm:text-base">{faq.question}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-[#8C7033] shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-4 sm:px-5 pb-5 pt-1 text-xs sm:text-sm text-[#3D4A42] leading-relaxed border-t border-[#0E1C14]/5">
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
