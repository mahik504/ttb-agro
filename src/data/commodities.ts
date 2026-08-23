import { Commodity } from '../types';

export const commoditiesData: Commodity[] = [
  {
    id: 'rice',
    name: 'Rice',
    category: 'Staples',
    tagline: 'Bulk & processed grades sourced through direct local aggregation in Tamil Nadu.',
    origins: ['Tamil Nadu (Pollachi, Erode)'],
    procurementStrategy: 'Direct Local Aggregation',
    gradeVariants: ['Bulk & Processed Grades'],
    keySpecs: {
      packaging: 'Institutional bulk bags & standard trade packaging',
      shelfLife: 'Standard ambient warehouse storage',
      moq: 'FCL / Full truckload consignments',
      seasonalPeak: 'Year-round supply via direct local aggregation'
    },
    description: 'Procured through direct local aggregation in the primary growing belts of Tamil Nadu, providing consistent milling and bulk grades for commercial retail and hospitality partners.',
    b2bHighlights: [
      'Direct local aggregation with regional grower networks',
      'Dual-stage quality verification at procurement and dispatch',
      'Consistent volume allocation for organized retail schedules'
    ],
    imageUrl: '' // Local / typographic tile
  },
  {
    id: 'pulses',
    name: 'Pulses',
    category: 'Staples',
    tagline: 'Retail & institutional grades aggregated through pan-India general trading.',
    origins: ['Pan-India Mandi Corridors'],
    procurementStrategy: 'General Trading',
    gradeVariants: ['Retail & Institutional Grades'],
    keySpecs: {
      packaging: 'Standard trade bags & bulk institutional packaging',
      shelfLife: 'Clean dry warehouse storage',
      moq: 'Commercial truckload consignments',
      seasonalPeak: 'Continuous trade flow across major harvest cycles'
    },
    description: 'General trading and aggregation across major Indian pulse corridors, supplying graded staples to retail distributors, cloud kitchens, and institutional food service.',
    b2bHighlights: [
      'Pan-India trade access and strategic procurement',
      'Rigorous visual and foreign matter screening',
      'Institutional contracts with dependable delivery schedules'
    ],
    imageUrl: ''
  },
  {
    id: 'apples',
    name: 'Apples',
    category: 'Fresh Produce',
    tagline: 'Premium imported & local varieties via dedicated import corridors and Himalayan orchards.',
    origins: ['Iran (Direct Import)', 'Turkey (Direct Import)', 'Himachal Pradesh', 'Kashmir'],
    procurementStrategy: 'Dedicated Import Channel',
    gradeVariants: ['Premium Imported & Local Varieties'],
    keySpecs: {
      packaging: 'Telescopic ventilated cartons with protective cell trays',
      shelfLife: 'Cold-chain and Controlled Atmosphere storage',
      coldChainTemp: 'Maintained through cold-chain logistics',
      moq: 'Commercial reefer & multi-drop consignments',
      seasonalPeak: 'Domestic harvest (Aug–Nov) supplemented by Iran/Turkey imports (Dec–Jul)'
    },
    description: 'Combining direct Himalayan orchard procurement in Himachal Pradesh and Kashmir with dedicated import corridors from Iran and Turkey to ensure 365-day availability for retail partners.',
    b2bHighlights: [
      'Dedicated Eurasian import channels for domestic off-season supply',
      'Orchard-level procurement during peak domestic harvest',
      'Continuous year-round supply neutralizing seasonal price volatility'
    ],
    imageUrl: ''
  },
  {
    id: 'bananas',
    name: 'Bananas',
    category: 'Fresh Produce',
    tagline: 'Otto & G9 varieties sourced across multi-state farm networks in TN, Karnataka, and Maharashtra.',
    origins: ['Tamil Nadu', 'Karnataka', 'Maharashtra'],
    procurementStrategy: 'Multi-State Sourcing',
    gradeVariants: ['Otto & G9'],
    keySpecs: {
      packaging: 'Corrugated cartons with protective lining',
      shelfLife: 'Managed post-harvest ripening cycles',
      coldChainTemp: 'Regulated transit temperatures',
      moq: 'Scheduled commercial consignments',
      seasonalPeak: 'Staggered harvest rotations across Western & Southern India'
    },
    description: 'Multi-state sourcing across Maharashtra, Karnataka, and Tamil Nadu to mitigate regional weather risks and maintain steady daily supply of G9 and Otto bananas for modern trade.',
    b2bHighlights: [
      'Multi-state farm network mitigating regional supply shortfalls',
      'Careful sorting and calibrated grading',
      'Scheduled dispatch for daily supermarket and QSR intake'
    ],
    imageUrl: ''
  },
  {
    id: 'coconut',
    name: 'Coconut',
    category: 'Fresh Produce',
    tagline: 'Fresh & processed formats aggregated directly from Tamil Nadu and Karnataka.',
    origins: ['Tamil Nadu (Pollachi)', 'Karnataka (Mysore, Hosur, Chitradurga)'],
    procurementStrategy: 'Direct Local Aggregation',
    gradeVariants: ['Fresh & Processed Formats'],
    keySpecs: {
      packaging: 'Ventilated mesh sacks & corrugated cartons',
      shelfLife: 'Standard mature nut shelf-life',
      moq: 'Commercial bulk dispatch',
      seasonalPeak: 'Continuous year-round coastal aggregation'
    },
    description: 'Direct aggregation from premier coconut belts in Pollachi and Karnataka, working in synergy with SP Coconut to supply both whole culinary coconuts and processed value-added formats.',
    b2bHighlights: [
      'Direct coastal aggregation from Pollachi, Mysore, Hosur & Chitradurga',
      'Synergy with SP Coconut dedicated processing unit',
      'Steady daily supply to regional retail, QSR, and Udupi hotel networks'
    ],
    imageUrl: ''
  }
];
