import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Button } from '../components/ui/Button';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-[70vh] bg-[#F4EFE4] flex items-center justify-center px-4 py-20">
      <div className="max-w-md w-full text-center space-y-6">
        <span className="text-xs font-mono uppercase font-bold text-[#8C7033] tracking-widest block">
          404 ERROR • PAGE NOT FOUND
        </span>

        <h1 className="text-4xl sm:text-5xl font-display font-medium text-[#0E1C14] tracking-tight">
          Page Not Located
        </h1>

        <p className="text-sm text-[#3D4A42] leading-relaxed">
          The requested page could not be found. Please navigate back to the home page or explore our agricultural commodity sourcing portfolio.
        </p>

        <div className="pt-2 flex justify-center gap-3">
          <Button href="/" variant="primary" size="md" icon={<ArrowLeft className="w-4 h-4 text-[#C4A35A]" />} iconPosition="left">
            Return to Home
          </Button>
          <Link
            to="/commodities"
            className="px-4 py-2 rounded text-sm text-[#1A3C2C] hover:bg-[#0E1C14]/5 transition-colors font-medium"
          >
            What We Source
          </Link>
        </div>
      </div>
    </div>
  );
};
