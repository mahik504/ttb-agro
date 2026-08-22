import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { Badge } from '../ui/Badge';
import { qcInspectionProtocols } from '../../data/certifications';

export const QCPipelineDiagram: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {qcInspectionProtocols.map((protocol, idx) => (
          <div
            key={idx}
            className="p-6 rounded-2xl bg-white border border-gray-200 shadow-subtle flex flex-col justify-between hover:border-forest-400 transition-colors"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="w-8 h-8 rounded-lg bg-forest-900 text-white font-mono font-bold text-xs flex items-center justify-center">
                  G0{idx + 1}
                </span>
                <Badge variant="green" size="sm">
                  Active Gate
                </Badge>
              </div>

              <div>
                <h4 className="text-sm font-bold text-gray-900 font-display">
                  {protocol.gate}
                </h4>
                <p className="text-xs text-agri-700 font-semibold mt-0.5">
                  {protocol.focus}
                </p>
              </div>

              <div className="space-y-2 pt-2 border-t border-gray-100">
                <span className="text-[10px] uppercase font-bold text-gray-400 block">
                  Mandatory Verification Parameters:
                </span>
                <ul className="space-y-1.5">
                  {protocol.parameters.map((param, pIdx) => (
                    <li key={pIdx} className="flex items-start gap-1.5 text-xs text-gray-600">
                      <CheckCircle2 className="w-3.5 h-3.5 text-agri-600 shrink-0 mt-0.5" />
                      <span>{param}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-gray-100 text-[11px] font-mono text-gray-400">
              100% Lot Screened
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
