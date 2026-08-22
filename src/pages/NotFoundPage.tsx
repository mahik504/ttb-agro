import React from 'react';
import { Home, Building2 } from 'lucide-react';
import { Button } from '../components/ui/Button';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-[#FAFBF9] px-4 py-16">
      <div className="max-w-md w-full text-center space-y-6">
        <div className="w-16 h-16 rounded-2xl bg-forest-900 text-agri-400 flex items-center justify-center mx-auto shadow-elevated">
          <Building2 className="w-8 h-8" />
        </div>

        <div className="space-y-2">
          <span className="text-xs font-mono font-bold text-agri-700 bg-agri-100 px-2.5 py-1 rounded-full uppercase tracking-wider">
            404 • Page Not Found
          </span>
          <h1 className="text-3xl font-extrabold text-gray-900 font-display">
            Sourcing Route Unavailable
          </h1>
          <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
            The corporate page or agricultural specification you are looking for has moved or does not exist.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <Button href="/" variant="primary" size="md" icon={<Home className="w-4 h-4" />}>
            Return to Homepage
          </Button>
          <Button href="/contact" variant="outline" size="md">
            Commercial RFP Desk
          </Button>
        </div>
      </div>
    </div>
  );
};
