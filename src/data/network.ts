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
    details: 'Central coordination hub overseeing nationwide agricultural aggregation, port import offloading, dual-stage quality enforcement, and client delivery schedules.'
  },
  {
    id: 'iran-turkey',
    name: 'Iran & Turkey',
    region: 'International Import Corridors',
    type: 'Global Import Channel',
    coordinates: { x: 15, y: 28 },
    commodities: ['Premium Imported Apples'],
    role: 'Dedicated International Supplement Channel',
    details: 'Dedicated import pipelines from certified Eurasian packhouses active during domestic off-season dips to maintain year-round retail availability.'
  },
  {
    id: 'hp-jk',
    name: 'Himachal Pradesh & J&K',
    region: 'North India',
    type: 'Domestic Origin',
    coordinates: { x: 48, y: 20 },
    commodities: ['Local Apples'],
    role: 'Himalayan Apple Origin Belts',
    details: 'Direct orchard ties across Himachal Pradesh and Kashmir during peak domestic harvest season.'
  },
  {
    id: 'maharashtra',
    name: 'Maharashtra',
    region: 'Western India',
    type: 'Domestic Origin',
    coordinates: { x: 46, y: 58 },
    commodities: ['G9 Bananas'],
    role: 'Western Horticultural Origin',
    details: 'Procurement of G9 Cavendish bananas with rapid dispatch coordination for retail chains.'
  },
  {
    id: 'karnataka',
    name: 'Karnataka',
    region: 'Mysore, Hosur, Chitradurga',
    type: 'Domestic Origin',
    coordinates: { x: 49, y: 72 },
    commodities: ['Coconuts', 'Otto Bananas'],
    role: 'Southern Agricultural Node',
    details: 'Direct aggregation across Mysore, Hosur, and Chitradurga for fresh coconuts and Otto bananas.'
  },
  {
    id: 'tamil-nadu',
    name: 'Tamil Nadu',
    region: 'Pollachi, Erode',
    type: 'Domestic Origin',
    coordinates: { x: 53, y: 84 },
    commodities: ['Rice', 'Coconuts', 'Bananas'],
    role: 'Southern Agro Corridor',
    details: 'Direct aggregation for paddy, fresh coconuts from Pollachi, and bananas across Erode and surrounding belts.'
  }
];

export const supplyChainStages: SupplyChainStep[] = [
  {
    step: "01",
    title: "Origin Aggregation",
    subtitle: "Farmer & Aggregator Ties",
    description: "Deep tie-ups with regional farmer groups and local aggregators across Tamil Nadu, Karnataka, Maharashtra, Himachal Pradesh, and Jammu & Kashmir.",
    tacticalOperations: [
      "Direct farm-gate and local aggregator procurement",
      "Fair transparent practices and deep roots at source",
      "Origin-level preliminary grading and sorting"
    ],
    qcGate: "Stage 1: Origin Procurement Inspection",
    iconName: "Trees"
  },
  {
    step: "02",
    title: "Global Supplement",
    subtitle: "Counter-Seasonal Supply",
    description: "Triggering dedicated import channels from Iran and Turkey to supplement domestic off-season dips and guarantee year-round retail availability.",
    tacticalOperations: [
      "Dedicated import pipelines from Iran and Turkey",
      "Seamless blending with domestic seasonal cycles",
      "Port customs clearance and temperature-regulated intake"
    ],
    qcGate: "Import Channel Phytosanitary & Intake Audit",
    iconName: "Globe2"
  },
  {
    step: "03",
    title: "Dual-Stage QC",
    subtitle: "Two Inspection Gates",
    description: "Rigorous quality checks enforced at both the initial procurement stage and the final dispatch stage prior to client delivery.",
    tacticalOperations: [
      "Procurement stage inspection at origin packhouse",
      "Dispatch stage verification at Navi Mumbai operations hub",
      "Calibrated grading against commercial customer specifications"
    ],
    qcGate: "Stage 2: Final Dispatch Verification Gate",
    iconName: "ShieldCheck"
  },
  {
    step: "04",
    title: "Last-Mile Dispatch",
    subtitle: "Institutional Handover",
    description: "Reliable, on-time delivery to organized retail, food service, café networks, and institutional hospitality buyers.",
    tacticalOperations: [
      "Scheduled dispatches meeting customer intake windows",
      "Temperature-regulated logistics for fresh produce",
      "Direct handover to retail distribution centers and commercial kitchens"
    ],
    qcGate: "Dock Intake & Delivery Handover",
    iconName: "Truck"
  }
];
