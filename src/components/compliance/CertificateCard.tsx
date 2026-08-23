import React from 'react';
import { ShieldCheck, FileText } from 'lucide-react';
import { CertificationDoc } from '../../types';

export interface CertificateCardProps {
  doc: CertificationDoc;
}

export const CertificateCard: React.FC<CertificateCardProps> = ({ doc }) => {
  return (
    <div className="p-6 rounded bg-[#FBF7EE] border border-[#0E1C14]/10 flex flex-col justify-between space-y-4">
      <div className="space-y-3">
        <div className="flex items-center justify-between gap-2">
          <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#8C7033]">
            {doc.category}
          </span>
          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#1A3C2C]/10 text-[#1A3C2C] border border-[#1A3C2C]/20">
            {doc.status}
          </span>
        </div>

        <div>
          <h3 className="text-base font-display font-medium text-[#0E1C14] leading-snug">
            {doc.title}
          </h3>
          <p className="text-xs text-[#66746B] font-mono mt-0.5">
            {doc.issuingAuthority}
          </p>
        </div>

        <p className="text-xs text-[#3D4A42] leading-relaxed">
          {doc.description}
        </p>
      </div>

      <div className="pt-3 border-t border-[#0E1C14]/10 flex items-center justify-between text-xs text-[#66746B]">
        <div className="flex items-center gap-1.5">
          <FileText className="w-3.5 h-3.5 text-[#8C7033]" />
          <span className="font-mono text-[11px]">{doc.documentType} Document</span>
        </div>
        <div className="flex items-center gap-1 text-[11px] text-[#1A3C2C] font-medium">
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>Shared on Empanelment</span>
        </div>
      </div>
    </div>
  );
};
