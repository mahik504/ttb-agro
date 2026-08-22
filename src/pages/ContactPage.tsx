import React, { useState } from 'react';
import { PageHeader } from '../components/layout/PageHeader';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Card } from '../components/ui/Card';
import { RfpForm } from '../components/contact/RfpForm';
import { companyInfo } from '../data/company';
import { faqsData } from '../data/faq';
import { Mail, MapPin, Clock, ChevronDown, ChevronUp, Building2, Sparkles } from 'lucide-react';

interface ContactPageProps {
  onOpenAssistant?: () => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onOpenAssistant }) => {
  const [openFaqIdx, setOpenFaqIdx] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenFaqIdx(openFaqIdx === idx ? null : idx);
  };

  return (
    <div className="bg-[#FAFBF9] min-h-screen pb-20">
      {/* Page Header */}
      <PageHeader
        badgeText="COMMERCIAL DESK & RFP ENGINE"
        badgeVariant="green"
        title="Initiate a B2B Sourcing Partnership:"
        highlightText="Request Volume Quotes."
        description="Connect with our institutional procurement desk in Navi Mumbai for contract pricing, sample consignments, cold-chain logistics schedules, and custom retail packaging."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Contact & RFP' }
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 space-y-16">
        
        {/* Main 2-Column Layout: RFP Form + Direct Contacts */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Interactive RFP Form (7 Cols) */}
          <div className="lg:col-span-7">
            <RfpForm />
          </div>

          {/* Right: Operations Hub & Direct Desk (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Direct Commercial Contacts Card */}
            <Card variant="elevated" padding="lg" className="border-gray-200 bg-white space-y-5">
              <div className="flex items-center gap-3 border-b border-gray-100 pb-4">
                <div className="w-10 h-10 rounded-xl bg-forest-900 text-white flex items-center justify-center">
                  <Building2 className="w-5 h-5 text-agri-400" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-gray-900 font-display">
                    Commercial Desk
                  </h3>
                  <p className="text-xs text-gray-500">Navi Mumbai Central Command</p>
                </div>
              </div>

              <div className="space-y-4 text-xs sm:text-sm">
                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-agri-600 shrink-0 mt-1" />
                  <div>
                    <span className="text-gray-500 block text-xs">Official Sourcing Inquiries:</span>
                    <a href={`mailto:${companyInfo.contact.officialEmail}`} className="text-forest-900 font-bold hover:text-agri-700">
                      {companyInfo.contact.officialEmail}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-agri-600 shrink-0 mt-1" />
                  <div>
                    <span className="text-gray-500 block text-xs">Institutional B2B RFPs:</span>
                    <a href={`mailto:${companyInfo.contact.salesEmail}`} className="text-forest-900 font-bold hover:text-agri-700">
                      {companyInfo.contact.salesEmail}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-agri-600 shrink-0 mt-1" />
                  <div>
                    <span className="text-gray-500 block text-xs">Operational Desk Hours:</span>
                    <span className="text-gray-800 font-medium">{companyInfo.contact.workingHours}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-agri-600 shrink-0 mt-1" />
                  <div>
                    <span className="text-gray-500 block text-xs">Operations Hub & Regd. Office:</span>
                    <span className="text-gray-800 font-medium">{companyInfo.registeredOffice.fullAddress}</span>
                  </div>
                </div>
              </div>

              {onOpenAssistant && (
                <div className="pt-4 border-t border-gray-100">
                  <button
                    onClick={onOpenAssistant}
                    className="w-full flex items-center justify-center gap-2 text-xs font-semibold py-3 px-4 rounded-xl bg-forest-50 text-forest-900 border border-forest-200 hover:bg-forest-100 transition-colors btn-tactile"
                  >
                    <Sparkles className="w-4 h-4 text-amberGold-600" />
                    <span>Have Instant Questions? Ask Our B2B Assistant</span>
                  </button>
                </div>
              )}
            </Card>

            {/* Google Maps Location Preview */}
            <div className="h-60 rounded-2xl overflow-hidden border border-gray-200 shadow-subtle bg-gray-100">
              <iframe
                title="TTB Agro Seawoods Operations Hub"
                src={companyInfo.registeredOffice.googleMapsEmbedUrl}
                className="w-full h-full border-0"
                loading="lazy"
              ></iframe>
            </div>

          </div>

        </div>

        {/* FAQ Section */}
        <div className="pt-8">
          <SectionHeading
            badgeText="COMMONLY ASKED QUESTIONS"
            badgeVariant="forest"
            title="Institutional Procurement &"
            highlightText="Operational FAQs."
            description="Answers to common questions regarding our multi-origin procurement models, dual-stage QC gates, and contract SLAs."
            align="center"
          />

          <div className="max-w-3xl mx-auto space-y-3">
            {faqsData.map((faq, idx) => {
              const isOpen = openFaqIdx === idx;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-subtle transition-colors"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 font-bold text-gray-900 text-sm sm:text-base hover:text-forest-900"
                  >
                    <span>{faq.question}</span>
                    <span className="shrink-0 text-gray-400">
                      {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-gray-600 leading-relaxed border-t border-gray-100 bg-sand-50/50 animate-fadeIn">
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
