import React from 'react';
import { PageHeader } from '../components/layout/PageHeader';
import { NetworkMapSection } from '../components/home/NetworkMapSection';
import { SeasonalDeriskingSection } from '../components/home/SeasonalDeriskingSection';

export const NetworkPage: React.FC = () => {
  return (
    <div className="bg-cream-100 min-h-screen pb-24">
      {/* Page Header */}
      <PageHeader
        badgeText="GEOGRAPHIC SOURCING CORRIDORS • SLIDE 5 &amp; 7"
        title="Domestic Farm Origins &amp;"
        highlightText="Global Import Pipelines."
        description="Our multi-state agricultural sourcing network spans Tamil Nadu, Karnataka, Maharashtra, and Himachal/J&K, supplemented by dedicated import corridors from Iran and Turkey."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Network & Origins' }
        ]}
      />

      {/* Network Map Section with interactive SVG */}
      <NetworkMapSection />

      {/* Seasonal De-risking Section */}
      <SeasonalDeriskingSection />
    </div>
  );
};
