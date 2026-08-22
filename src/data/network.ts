import { NetworkNode } from '../types';

export const networkNodes: NetworkNode[] = [
  {
    id: 'navi-mumbai',
    name: 'Navi Mumbai Central Hub',
    region: 'Maharashtra (Seawoods, Nerul)',
    type: 'Operations Hub',
    coordinates: { x: 50, y: 55 },
    commodities: ['Strategic Coordination', 'Central Quality Gate', 'Client Dispatch Logistics'],
    role: 'Central Corporate & Operations Headquarters',
    details: 'Coordinates multi-state dispatches, port import clearances from Nhava Sheva (JNPT), cold-chain allocation, and client relationship management for institutional retail.'
  },
  {
    id: 'iran-import',
    name: 'Iran Import Corridor',
    region: 'International (Middle East)',
    type: 'Global Import Channel',
    coordinates: { x: 18, y: 30 },
    commodities: ['Premium Red Delicious Apples', 'Cold-Stored Apples'],
    role: 'Dedicated International Supplement Channel',
    details: 'Dedicated reefer maritime channel supplementing Indian domestic off-season troughs (December through July) to maintain 100% calendar-year retail availability.'
  },
  {
    id: 'turkey-import',
    name: 'Turkey Import Corridor',
    region: 'International (Mediterranean/Eurasia)',
    type: 'Global Import Channel',
    coordinates: { x: 12, y: 22 },
    commodities: ['Royal Gala Apples', 'Fuji Apples'],
    role: 'Dedicated International Supplement Channel',
    details: 'Direct import partnership with certified European/Eurasian packhouses ensuring strict residue testing and calibrated grading.'
  },
  {
    id: 'hp-jk',
    name: 'Himachal Pradesh & J&K',
    region: 'North India (Shimla, Kinnaur, Sopore)',
    type: 'Domestic Origin',
    coordinates: { x: 48, y: 20 },
    commodities: ['Orchard Fresh Apples', 'Kashmir Delicious'],
    role: 'High-Altitude Himalayan Sourcing Hub',
    details: 'Direct farm-gate aggregation during peak harvest season (August to November), utilizing farm-side pre-cooling and CA storage.'
  },
  {
    id: 'maharashtra',
    name: 'Maharashtra Agricultural Belt',
    region: 'Western India (Jalgaon, Solapur, Pune)',
    type: 'Domestic Origin',
    coordinates: { x: 46, y: 58 },
    commodities: ['G9 Cavendish Bananas', 'Pulses & Staples'],
    role: 'High-Volume Western Sourcing Belt',
    details: 'Direct aggregation from premier banana cooperatives in Jalgaon with rapid turn-around to controlled ethylene ripening facilities.'
  },
  {
    id: 'karnataka',
    name: 'Karnataka Procurement Belt',
    region: 'South India (Mysore, Hosur, Chitradurga)',
    type: 'Domestic Origin',
    coordinates: { x: 49, y: 72 },
    commodities: ['Fresh Coconut', 'Otto / Yelakki Bananas'],
    role: 'Southern Horticultural Aggregation Node',
    details: 'Direct farm aggregation linking smallholder grower clusters with dedicated sorting and grading sheds.'
  },
  {
    id: 'tamil-nadu',
    name: 'Tamil Nadu Agri Corridors',
    region: 'South India (Pollachi, Erode, Thanjavur)',
    type: 'Domestic Origin',
    coordinates: { x: 53, y: 84 },
    commodities: ['Paddy & Milled Rice', 'Pollachi Coconuts', 'Bananas'],
    role: 'Premier Coastal & Delta Procurement Hub',
    details: 'Deep origin aggregation in Pollachi (coconut capital) and Thanjavur (rice granary) ensuring strict direct-from-source price competitiveness.'
  }
];

export const supplyChainStages = [
  {
    step: "01",
    title: "Origin Aggregation",
    subtitle: "Farmer-First Direct Ties",
    description: "Deep, long-term procurement relationships with regional farmer producer groups and local aggregators across Tamil Nadu, Karnataka, Maharashtra, and Himachal Pradesh/J&K, eliminating unnecessary speculative middlemen.",
    tacticalOperations: [
      "Direct farm-gate aggregation & fair weight assessment",
      "On-field preliminary grading & moisture testing",
      "Fair transparent settlement with grower collectives",
      "Batch origin tagging for complete lot traceability"
    ],
    qcGate: "Gate 1: Farm-Level Visual, Moisture & Sizing Screen",
    iconName: "Trees"
  },
  {
    step: "02",
    title: "Global Supplement",
    subtitle: "Counter-Seasonal De-risking",
    description: "Dedicated reefer maritime import pipelines from Iran and Turkey seamlessly bridge domestic off-season production lulls, ensuring our corporate retail partners never face inventory stockouts.",
    tacticalOperations: [
      "Counter-cyclical harvest scheduling across hemispheres",
      "Port-side reefer customs clearance via JNPT / Nhava Sheva",
      "Phytosanitary inspection & cold-chain temperature logger verification",
      "Continuous Controlled Atmosphere (CA) inventory buffering"
    ],
    qcGate: "Gate 2: International Phytosanitary & Cold-Chain Integrity Audit",
    iconName: "Globe2"
  },
  {
    step: "03",
    title: "Dual-Stage Quality Control",
    subtitle: "Zero Tolerance on Quality",
    description: "Quality is not inspected once; it is verified twice. First at the origin aggregation point before dispatch, and second at our central fulfillment facilities prior to final client handover.",
    tacticalOperations: [
      "Brix sugar testing, penetrometer firmness & skin defect analysis",
      "Optical sorting for rice and pulses with zero foreign matter tolerance",
      "Ethylene chamber ripening monitoring for bananas",
      "Standardized grading against retail chain compliance manuals"
    ],
    qcGate: "Gate 3: Central Laboratory & Sorting Screen Approval",
    iconName: "ShieldCheck"
  },
  {
    step: "04",
    title: "Last-Mile Dispatch",
    subtitle: "SLA-Driven Institutional Handover",
    description: "Scheduled, temperature-controlled, daily multi-drop logistics connecting our Navi Mumbai operational hub with distribution centers of organized retail giants, café networks, and hotel chains.",
    tacticalOperations: [
      "Dedicated multi-temperature fleet with GPS tracking",
      "Early-morning dock delivery meeting retail warehouse intake windows",
      "Barcoded palletization and retail-ready packaging",
      "Real-time electronic Proof of Delivery (e-POD) integration"
    ],
    qcGate: "Gate 4: Dispatch Dock Handover & Temperature Audit",
    iconName: "Truck"
  }
];
