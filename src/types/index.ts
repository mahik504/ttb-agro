export interface Commodity {
  id: string;
  name: string;
  category: 'Staples' | 'Fresh Produce';
  tagline: string;
  origins: string[];
  procurementStrategy: string;
  gradeVariants: string[];
  keySpecs: {
    packaging: string;
    shelfLife: string;
    coldChainTemp?: string;
    moq: string;
    seasonalPeak: string;
  };
  description: string;
  b2bHighlights: string[];
  imageUrl: string;
}

export interface NetworkNode {
  id: string;
  name: string;
  region: string;
  type: 'Domestic Origin' | 'Global Import Channel' | 'Operations Hub';
  coordinates: { x: number; y: number };
  commodities: string[];
  role: string;
  details: string;
}

export interface GroupEntity {
  id: string;
  name: string;
  role: string;
  turnoverContribution: string;
  description: string;
  capabilities: string[];
  synergyWithTTB: string;
  badgeColor: string;
}

export interface LeadershipMember {
  id: string;
  name: string;
  title: string;
  focusArea: string;
  summary: string;
  verifiedDirectorship: boolean;
}

export interface CustomerSegment {
  id: string;
  title: string;
  clientReferences: string[];
  requirements: string[];
  ttbSolution: string;
  volumeTier: string;
}

export interface SupplyChainStep {
  step: string;
  title: string;
  subtitle: string;
  description: string;
  tacticalOperations: string[];
  qcGate: string;
  iconName: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'Overview' | 'Commodities' | 'Supply Chain' | 'Group Scale' | 'Procurement';
}
