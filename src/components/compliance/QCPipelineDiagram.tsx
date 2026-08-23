import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { qcInspectionProtocols } from '../../data/certifications';

export const QCPipelineDiagram: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {qcInspectionProtocols.map((protocol, idx) => (
        <div
          key={idx}
          className="p-6 sm:p-8 rounded bg-[#FBF7EE] border border-[#0E1C14]/10 flex flex-col justify-between space-y-4"
        >
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#8C7033]">
                {protocol.gate}
              </span>
              <span className="px-2 py-0.5 rounded bg-[#1A3C2C]/10 text-[#1A3C2C] border border-[#1A3C2C]/20 text-[10px] font-mono">
                Mandatory Check
              </span>
            </div>

            <div>
              <h4 className="text-lg font-display font-medium text-[#0E1C14]">
                {protocol.focus}
              </h4>
            </div>

            <div className="space-y-2 pt-2 border-t border-[#0E1C14]/10">
              <span className="text-[10px] uppercase font-mono font-bold text-[#66746B] block">
                Standard Inspection Parameters:
              </span>
              <ul className="space-y-1.5">
                {protocol.parameters.map((param, pIdx) => (
                  <li key={pIdx} className="flex items-start gap-2 text-xs text-[#3D4A42]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#1A3C2C] shrink-0 mt-0.5" />
                    <span>{param}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="pt-3 border-t border-[#0E1C14]/10 text-[11px] font-mono text-[#66746B]">
            Enforced across all institutional consignments
          </div>
        </div>
      ))}
    </div>
  );
};
