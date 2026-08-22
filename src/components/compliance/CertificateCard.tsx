import React from 'react';
import { ShieldCheck, Clock, AlertCircle, Eye } from 'lucide-react';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { CertificationDoc } from '../../types';

export interface CertificateCardProps {
  doc: CertificationDoc;
  onPreview?: (doc: CertificationDoc) => void;
}

export const CertificateCard: React.FC<CertificateCardProps> = ({ doc, onPreview }) => {
  const getStatusBadge = (status: CertificationDoc['status']) => {
    switch (status) {
      case 'Verified Registration':
        return (
          <Badge variant="green" size="sm" icon={<ShieldCheck className="w-3 h-3 text-agri-700" />}>
            Verified Entity
          </Badge>
        );
      case 'Active Group License':
        return (
          <Badge variant="blue" size="sm" icon={<ShieldCheck className="w-3 h-3 text-blue-700" />}>
            Active Group License
          </Badge>
        );
      case 'Pending Verification':
        return (
          <Badge variant="amber" size="sm" icon={<Clock className="w-3 h-3 text-amber-700" />}>
            Pending Client Upload
          </Badge>
        );
      default:
        return (
          <Badge variant="neutral" size="sm" icon={<AlertCircle className="w-3 h-3 text-gray-500" />}>
            On Official Request
          </Badge>
        );
    }
  };

  return (
    <Card variant="elevated" padding="md" hoverEffect={true} className="border-gray-200 bg-white flex flex-col justify-between">
      <div className="space-y-3.5">
        <div className="flex items-center justify-between gap-2">
          <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-gray-400 bg-gray-100 px-2 py-0.5 rounded">
            {doc.category}
          </span>
          {getStatusBadge(doc.status)}
        </div>

        <div>
          <h3 className="text-base font-bold text-gray-900 font-display leading-snug">
            {doc.title}
          </h3>
          <p className="text-xs text-forest-700 font-medium mt-0.5">
            {doc.issuingAuthority}
          </p>
        </div>

        <div className="p-2.5 rounded-lg bg-sand-50 border border-sand-200 text-xs font-mono text-gray-700">
          <span className="text-[10px] uppercase font-bold text-gray-400 block font-sans">
            Reference / Serial Scope:
          </span>
          {doc.registrationNumberPlaceholder}
        </div>

        <p className="text-xs text-gray-600 leading-relaxed">
          {doc.description}
        </p>

        <div className="pt-2 text-[11px] text-gray-500 border-t border-gray-100">
          <strong className="text-gray-700">Scope:</strong> {doc.verificationScope}
        </div>
      </div>

      <div className="pt-4 mt-4 border-t border-gray-100 flex items-center justify-between text-xs">
        <span className="text-gray-400 font-mono text-[11px]">{doc.documentType} Document Format</span>
        {onPreview ? (
          <button
            onClick={() => onPreview(doc)}
            className="text-forest-800 hover:text-agri-700 font-bold inline-flex items-center gap-1 transition-colors"
          >
            <Eye className="w-3.5 h-3.5" />
            <span>Inspect Scope</span>
          </button>
        ) : (
          <span className="text-gray-400 text-[11px]">Available on B2B NDA</span>
        )}
      </div>
    </Card>
  );
};
