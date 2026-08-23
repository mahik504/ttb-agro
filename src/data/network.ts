import { NetworkNode, SupplyChainStep } from '../types';

export const networkNodes: NetworkNode[] = [
  {
    id: 'navi-mumbai',
    name: 'Navi Mumbai',
    region: 'Maharashtra (Headquarters)',
    type: 'Operations Hub',
    coordinates: { x: 50, y: 55 },
    commodities: ['Operations Hub', 'Dispatch Coordination', 'Institutional Client Relations'],
    role: 'Central Headquarters & Coordination Hub',
    details: 'Central coordination hub in Seawoods, Nerul, overseeing agricultural aggregation, import intake coordination, dual-stage quality enforcement, and client delivery schedules.'
  },
  {
    id: 'iran-turkey',
    name: 'Iran & Turkey',
    region: 'International Sourcing Region',
    type: 'Global Import Channel',
    coordinates: { x: 15, y: 28 },
    commodities: ['Premium Imported Apples'],
    role: 'Dedicated International Sourcing Region',
    details: 'Dedicated import channels from verified packhouses in Iran and Turkey, active during domestic off-season dips to bridge retail availability gaps.'
  },
  {
    id: 'hp-jk',
    name: 'Himachal Pradesh & Kashmir',
    region: 'North India Sourcing Region',
    type: 'Domestic Origin',
    coordinates: { x: 48, y: 20 },
    commodities: ['Local Apples'],
    role: 'Himalayan Apple Sourcing Region',
    details: 'Direct orchard ties across Himachal Pradesh and Kashmir during peak domestic autumn harvest.'
  },
  {
    id: 'maharashtra',
    name: 'Maharashtra',
    region: 'Western India Sourcing Region',
    type: 'Domestic Origin',
    coordinates: { x: 46, y: 58 },
    commodities: ['G9 Bananas'],
    role: 'Western Horticultural Sourcing Region',
    details: 'Procurement of G9 Cavendish bananas with coordinated dispatch for retail chains.'
  },
  {
    id: 'karnataka',
    name: 'Karnataka (Mysore, Hosur, Chitradurga)',
    region: 'South India Sourcing Region',
    type: 'Domestic Origin',
    coordinates: { x: 49, y: 72 },
    commodities: ['Coconuts', 'Otto Bananas'],
    role: 'Southern Agricultural Sourcing Region',
    details: 'Direct aggregation across Mysore, Hosur, and Chitradurga for fresh coconuts and Otto bananas.'
  },
  {
    id: 'tamil-nadu',
    name: 'Tamil Nadu (Pollachi, Erode)',
    region: 'South India Sourcing Region',
    type: 'Domestic Origin',
    coordinates: { x: 53, y: 84 },
    commodities: ['Rice', 'Coconuts', 'Bananas'],
    role: 'Southern Agro Sourcing Region',
    details: 'Direct aggregation for paddy, fresh coconuts from Pollachi, and bananas across Erode and surrounding belts.'
  }
];

export const supplyChainStages: SupplyChainStep[] = [
  {
    step: "01",
    title: "Origin Aggregation",
    subtitle: "Farmer Groups & Local Aggregators",
    description: "Deep tie-ups with regional farmer groups and local aggregators across Tamil Nadu, Karnataka, Maharashtra, Himachal Pradesh, and Jammu & Kashmir.",
    tacticalOperations: [
      "Direct farm-gate and local aggregator procurement",
      "Fair transparent practices and deep roots at source",
      "Origin-level preliminary sorting and grading"
    ],
    qcGate: "Stage 1: Origin Procurement Inspection",
    iconName: "Trees"
  },
  {
    step: "02",
    title: "Global Supplement",
    subtitle: "Dedicated Import Channels",
    description: "Triggering dedicated import channels from Iran and Turkey to supplement domestic off-season troughs and maintain retail supply continuity.",
    tacticalOperations: [
      "Dedicated import pipelines from Iran and Turkey",
      "Blending imported volumes with domestic harvest cycles",
      "Import intake and temperature-regulated logistics"
    ],
    qcGate: "Import Channel Intake Audit",
    iconName: "Globe2"
  },
  {
    step: "03",
    title: "Dual-Stage QC",
    subtitle: "Procurement & Dispatch Checks",
    description: "Rigorous quality checks enforced at both the initial procurement stage at origin and the final dispatch stage from our Navi Mumbai hub.",
    tacticalOperations: [
      "Procurement-stage inspection at origin packhouse",
      "Dispatch-stage verification at Navi Mumbai operations hub",
      "Calibrated grading matching commercial buyer requirements"
    ],
    qcGate: "Stage 2: Final Dispatch Verification",
    iconName: "ShieldCheck"
  },
  {
    step: "04",
    title: "Last-Mile Dispatch",
    subtitle: "Organised Retail & Commercial Delivery",
    description: "Reliable, on-time delivery to organized retail, food service, café networks, and institutional hospitality buyers.",
    tacticalOperations: [
      "Scheduled dispatches meeting client delivery intake windows",
      "Careful produce handling and crate protection",
      "Direct handover to retail distribution centers and commercial kitchens"
    ],
    qcGate: "Client Intake & Handover",
    iconName: "Truck"
  }
];
