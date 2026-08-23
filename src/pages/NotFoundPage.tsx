import React from 'react';
import { Home, ArrowLeft } from 'lucide-react';
import { Button } from '../components/ui/Button';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="bg-[#F1EBDD] min-h-[70vh] flex items-center justify-center py-20 px-4">
      <div className="max-w-md w-full text-center space-y-6 bg-[#E4D7BA] p-8 sm:p-10 rounded-md border border-[#122017]/15 shadow-subtle">
        <div className="font-mono text-4xl sm:text-5xl font-bold text-[#B99045]">
          404
        </div>

        <div className="space-y-2">
          <h1 className="text-2xl font-display font-medium text-[#122017]">
            Page Not Found
          </h1>
          <p className="text-xs sm:text-sm text-[#405046] leading-relaxed">
            The page or resource you are looking for has moved or does not exist within our corporate directory.
          </p>
        </div>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Button href="/" variant="primary" size="md" icon={<Home className="w-4 h-4 text-[#B99045]" />}>
            Return to Homepage
          </Button>
          <Button href="/commodities" variant="secondary" size="md" icon={<ArrowLeft className="w-4 h-4 text-[#122017]" />} iconPosition="left">
            What We Source
          </Button>
        </div>

        <div className="pt-4 border-t border-[#122017]/10 text-[11px] font-mono text-[#63756A]">
          TTB Agro India Private Limited
        </div>
      </div>
    </div>
  );
};
