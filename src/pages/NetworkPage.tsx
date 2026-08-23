import React from 'react';
import { PageHeader } from '../components/layout/PageHeader';
import { NetworkMapSection } from '../components/home/NetworkMapSection';
import { SeasonalDeriskingSection } from '../components/home/SeasonalDeriskingSection';

export const NetworkPage: React.FC = () => {
  return (
    <div className="bg-[#F1EBDD] min-h-screen pb-20">
      {/* Page Header */}
      <PageHeader
        badgeText="GEOGRAPHIC SOURCING CORRIDORS"
        title="Domestic Origins &amp;"
        highlightText="Global Import Pipelines."
        description="Our multi-state agricultural sourcing network spans Tamil Nadu, Karnataka, Maharashtra, and Himachal/J&K, supplemented by dedicated import corridors from Iran and Turkey."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Network & Origins' }
        ]}
      />

      {/* Network Map Section */}
      <NetworkMapSection />

      {/* Seasonal De-risking Section */}
      <SeasonalDeriskingSection />
    </div>
  );
};
