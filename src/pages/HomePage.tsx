import React from 'react';
import { HeroSection } from '../components/home/HeroSection';
import { SupplyChainVisualizer } from '../components/home/SupplyChainVisualizer';
import { SourcingMatrixPreview } from '../components/home/SourcingMatrixPreview';
import { SeasonalDeriskingSection } from '../components/home/SeasonalDeriskingSection';
import { NetworkMapSection } from '../components/home/NetworkMapSection';
import { GroupEcosystemSection } from '../components/home/GroupEcosystemSection';
import { ValuePillarsSection } from '../components/home/ValuePillarsSection';
import { HomeCtaSection } from '../components/home/HomeCtaSection';

export const HomePage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. Hero & Strategic Positioning */}
      <HeroSection />

      {/* 2. Supply Chain Journey (Origin to Retail) */}
      <SupplyChainVisualizer />

      {/* 3. Diagnostic Commodity Sourcing Matrix */}
      <SourcingMatrixPreview />

      {/* 4. Seasonal De-risking Model */}
      <SeasonalDeriskingSection />

      {/* 5. Geographic Network & Origins */}
      <NetworkMapSection />

      {/* 6. Group Ecosystem & Scale (₹228 Cr) */}
      <GroupEcosystemSection />

      {/* 7. The TTB Advantage (Three Pillars) */}
      <ValuePillarsSection />

      {/* 8. Commercial Close CTA */}
      <HomeCtaSection />
    </div>
  );
};
