import React, { useState } from 'react';
import { PageHeader } from '../components/layout/PageHeader';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import { CertificateCard } from '../components/compliance/CertificateCard';
import { QCPipelineDiagram } from '../components/compliance/QCPipelineDiagram';
import { certificationsData } from '../data/certifications';
import { CertificationDoc } from '../types';
import { AlertCircle, X } from 'lucide-react';

export const CompliancePage: React.FC = () => {
  const [selectedDoc, setSelectedDoc] = useState<CertificationDoc | null>(null);

  return (
    <div className="bg-[#FAFBF9] min-h-screen pb-20">
      {/* Page Header */}
      <PageHeader
        badgeText="QUALITY, COMPLIANCE & STANDARDS"
        badgeVariant="green"
        title="Verified Regulatory Compliance &"
        highlightText="Dual-Stage Quality Protocols."
        description="TTB Agro India Private Limited adheres to statutory Indian and international food safety standards, agricultural trade regulations, and rigorous multi-stage laboratory screening."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Quality & Compliance' }
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 space-y-20">
        
        {/* Compliance Notice Banner */}
        <div className="p-4 sm:p-5 rounded-2xl bg-amber-50 border border-amber-200 text-amber-950 text-xs sm:text-sm flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
          <div className="space-y-1">
            <strong className="font-bold text-amber-900 block font-display">
              Statutory Verification & Documentation Architecture:
            </strong>
            <p className="text-amber-900/80 leading-relaxed text-xs">
              All compliance registries (FSSAI, GSTIN, IEC, APEDA) are maintained under strict group governance. In accordance with enterprise data protection, full document copies and test reports are available to verified institutional partners upon B2B onboarding.
            </p>
          </div>
        </div>

        {/* Section 1: Statutory & Corporate Certifications */}
        <div id="verification">
          <SectionHeading
            badgeText="STATUTORY CREDENTIALS"
            badgeVariant="forest"
            title="Corporate, Food Safety &"
            highlightText="Trade Registrations."
            description="Our operational compliance portfolio spanning domestic tax integration, food safety licensing, and international trade permits."
            align="left"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certificationsData.map((doc) => (
              <CertificateCard
                key={doc.id}
                doc={doc}
                onPreview={(d) => setSelectedDoc(d)}
              />
            ))}
          </div>
        </div>

        {/* Section 2: Dual-Stage QC Inspection Protocols */}
        <div>
          <SectionHeading
            badgeText="QUALITY ASSURANCE GATES"
            badgeVariant="green"
            title="Four-Gate Dual-Stage"
            highlightText="QC Inspection Architecture."
            description="Every agricultural consignment is screened twice: first at origin harvest aggregation, and second at our Navi Mumbai dispatch dock."
            align="left"
          />

          <QCPipelineDiagram />
        </div>

      </div>

      {/* Document Scope Modal */}
      {selectedDoc && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fadeIn">
          <div className="bg-white max-w-lg w-full rounded-2xl p-6 sm:p-8 border border-gray-200 shadow-2xl space-y-5 relative">
            <button
              onClick={() => setSelectedDoc(null)}
              className="absolute top-4 right-4 p-1.5 rounded-lg text-gray-400 hover:text-gray-900 hover:bg-gray-100"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2">
              <Badge variant="green" size="sm">
                {selectedDoc.status}
              </Badge>
              <span className="text-xs font-mono text-gray-400">{selectedDoc.category}</span>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-900 font-display">
                {selectedDoc.title}
              </h3>
              <p className="text-xs font-semibold text-forest-700 mt-0.5">
                {selectedDoc.issuingAuthority}
              </p>
            </div>

            <div className="p-3 bg-sand-50 rounded-xl border border-sand-200 text-xs font-mono text-gray-800 space-y-1">
              <div className="font-bold text-gray-500 uppercase text-[10px]">Reference Identifier:</div>
              <div>{selectedDoc.registrationNumberPlaceholder}</div>
            </div>

            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
              {selectedDoc.description}
            </p>

            <div className="p-3 bg-forest-50 rounded-xl border border-forest-100 text-xs text-forest-900">
              <strong className="block text-[10px] uppercase font-bold text-forest-700 mb-0.5">Verification Scope:</strong>
              {selectedDoc.verificationScope}
            </div>

            <div className="pt-2 flex items-center justify-end gap-3 border-t border-gray-100">
              <Button onClick={() => setSelectedDoc(null)} variant="outline" size="sm">
                Close
              </Button>
              <Button href="/contact" variant="primary" size="sm">
                Request Official Copy
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
