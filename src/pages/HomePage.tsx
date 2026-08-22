import React from 'react';
import { HeroSection } from '../components/home/HeroSection';
import { SupplyChainVisualizer } from '../components/home/SupplyChainVisualizer';
import { SeasonalDeriskingSection } from '../components/home/SeasonalDeriskingSection';
import { NetworkMapSection } from '../components/home/NetworkMapSection';
import { SourcingMatrixPreview } from '../components/home/SourcingMatrixPreview';
import { GroupEcosystemSection } from '../components/home/GroupEcosystemSection';
import { ValuePillarsSection } from '../components/home/ValuePillarsSection';
import { HomeCtaSection } from '../components/home/HomeCtaSection';

interface HomePageProps {
  onOpenAssistant?: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onOpenAssistant }) => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. Hero & Business Positioning */}
      <HeroSection onOpenAssistant={onOpenAssistant} />

      {/* 2. Supply Chain Excellence (Origin to Retail) */}
      <SupplyChainVisualizer />

      {/* 3. Core Sourcing Capabilities (Commodity Matrix Preview) */}
      <SourcingMatrixPreview />

      {/* 4. Seasonal De-risking (Year-Round Availability) */}
      <SeasonalDeriskingSection />

      {/* 5. Geographic Network & Origins Map */}
      <NetworkMapSection />

      {/* 6. Group Scale & Ecosystem Synergy (₹228 Cr) */}
      <GroupEcosystemSection />

      {/* 7. The Three Pillars of TTB Advantage */}
      <ValuePillarsSection />

      {/* 8. Corporate Institutional RFP CTA */}
      <HomeCtaSection onOpenAssistant={onOpenAssistant} />
    </div>
  );
};
