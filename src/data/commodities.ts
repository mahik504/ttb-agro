import { Commodity } from '../types';

export const commoditiesData: Commodity[] = [
  {
    id: 'rice',
    name: 'Rice',
    category: 'Staples',
    tagline: 'Direct Local Aggregation from Premier Paddy Belts of Tamil Nadu',
    origins: ['Tamil Nadu (Thanjavur, Erode, Tirunelveli)', 'Pan-India Paddy Zones'],
    procurementStrategy: 'Direct Local Aggregation with Farmer Groups & Millers',
    gradeVariants: ['Sona Masoori', 'Ponni Raw / Boiled', 'Single Polish', 'Institutional Bulk Grades'],
    keySpecs: {
      packaging: '25kg / 50kg HDPE & PP Bags, Custom Retail Packs',
      shelfLife: '12–24 Months under standard dry warehouse conditions',
      moq: '10 Metric Tons (Full Truckload / FCL)',
      seasonalPeak: 'Year-Round supply with peak domestic procurement post-Kharif & Rabi'
    },
    description: 'Procured through direct origin networks across Tamil Nadu, our rice sourcing pipeline ensures consistent milling quality, strict moisture control (<14%), low broken percentage, and uniform grain length suited for high-volume retail shelves and commercial hospitality kitchens.',
    b2bHighlights: [
      'Direct aggregation bypassing intermediate speculative mandi layers',
      'Dual optical sorting and de-stoning verification',
      'Moisture-controlled ventilated freight transport',
      'Batch traceability with farm-belt origin tagging'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 'pulses',
    name: 'Pulses & Legumes',
    category: 'Staples',
    tagline: 'Pan-India Commodity Trading & Institutional Grade Aggregation',
    origins: ['Maharashtra', 'Madhya Pradesh', 'Karnataka', 'Pan-India Mandi Corridors'],
    procurementStrategy: 'Strategic Commodity Trading & Direct Mill Aggregation',
    gradeVariants: ['Toor Dal (Pigeon Pea)', 'Chana Dal (Gram)', 'Moong Dal', 'Urad Dal'],
    keySpecs: {
      packaging: '30kg / 50kg Jute & Laminated Polypropylene Bags',
      shelfLife: '12 Months in dry, fumigated storage',
      moq: '5–10 Metric Tons',
      seasonalPeak: 'Winter & Spring harvests backed by buffered trading reserves'
    },
    description: 'Our pulses trading and aggregation operations focus on uniform grading, zero artificial color polish, high protein retention, and rapid turnaround for bulk retail packaging and food-service requirements across Western and Southern India.',
    b2bHighlights: [
      'Unpolished and naturally processed pulse lots',
      'Machine-cleaned, sortexed, and foreign-matter filtered (<0.1%)',
      'Institutional contracts with predictable pricing mechanisms',
      'Continuous buffer inventory across regional fulfillment nodes'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1599785209707-a456fc1337bb?auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 'apples',
    name: 'Apples (Domestic & Imported)',
    category: 'Fresh Produce',
    tagline: 'Year-Round Cold-Chain Supply via Iran & Turkey Import Corridors + Himalayan Belts',
    origins: ['Iran (Direct Import)', 'Turkey (Direct Import)', 'Himachal Pradesh (Shimla, Kinnaur)', 'Jammu & Kashmir (Sopore, Shopian)'],
    procurementStrategy: 'Dedicated Global Import Channels + Direct Himalayan Orchard Sourcing',
    gradeVariants: ['Red Delicious', 'Royal Gala', 'Golden Delicious', 'Fuji', 'Kashmir Delicious'],
    keySpecs: {
      packaging: '10kg / 18kg Corrugated Telescopic Vent Boxes with Cell Trays',
      shelfLife: '30–60 Days under Controlled Atmosphere (CA) storage',
      coldChainTemp: '0.5°C to 2°C with 90–95% Relative Humidity',
      moq: '2 Metric Tons (Reefer Multi-Drop) or 1 FCL Container',
      seasonalPeak: 'Domestic harvest (Aug–Nov) supplemented seamlessly by Global Imports (Dec–Jul)'
    },
    description: 'Solving the critical agricultural challenge of seasonal availability, TTB Agro combines direct Himalayan orchard procurement with dedicated import pipelines from Iran and Turkey. This dual-hemisphere sourcing ensures continuous, pristine-quality fresh apples 365 days a year for organised retail and hospitality.',
    b2bHighlights: [
      'Continuous 12-month uninterrupted supply pipeline for retail partners',
      'CA (Controlled Atmosphere) cold-chain from origin packing to destination hub',
      'Pre-calibrated sizing (80 / 100 / 120 count) with uniform skin coloration',
      'Dual-stage brix testing and firmness penetrometer verification'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 'bananas',
    name: 'Bananas (G9 & Otto)',
    category: 'Fresh Produce',
    tagline: 'Multi-State Farm Gate Sourcing & Precise Ripening Chamber Coordination',
    origins: ['Maharashtra (Jalgaon, Solapur)', 'Tamil Nadu (Theni, Erode)', 'Karnataka (Chitradurga, Mysore)'],
    procurementStrategy: 'Multi-State Sourcing to Mitigate Regional Weather & Harvest Risks',
    gradeVariants: ['Grand Nain (G9 Cavendish)', 'Otto / Yelakki', 'Robusta', 'Red Banana'],
    keySpecs: {
      packaging: '13.5kg / 18kg Bottom-Grip Corrugated Boxes with Foam Cushions',
      shelfLife: '5–8 Days at Color Stage 3–4 post-ripening',
      coldChainTemp: '13.5°C to 14.5°C (Strict Ethylene Protocol)',
      moq: '3 Metric Tons',
      seasonalPeak: 'Continuous harvest cycles staggered across Western and Southern India'
    },
    description: 'By sourcing across three major agricultural states—Maharashtra, Tamil Nadu, and Karnataka—TTB Agro shields corporate buyers from regional crop shortfalls. We deliver export-quality bunches harvested at optimal finger length and caliber.',
    b2bHighlights: [
      'Multi-state harvest rotation guaranteeing daily dispatches',
      'Careful de-handing, washing in alum water, and anti-fungal treatment',
      'Controlled ethylene chamber ripening to precise color stages (Stage 3 to 5)',
      'Direct farm-to-dispatch turnaround in under 24 hours'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 'coconut',
    name: 'Coconut & Value-Added Formats',
    category: 'Fresh Produce',
    tagline: 'Direct Coastal Aggregation & Zero-Waste Processing via SP Coconut Unit',
    origins: ['Tamil Nadu (Pollachi, Coimbatore)', 'Karnataka (Hosur, Mysore, Chitradurga)'],
    procurementStrategy: 'Direct Origin Aggregation & Dedicated Industrial Processing',
    gradeVariants: ['De-husked Mature Fresh Coconut', 'Semi-Husked Export Grade', 'Desiccated Coconut Powder', 'Copra'],
    keySpecs: {
      packaging: '25-piece & 50-piece Mesh Bags, Corrugated Cartons, Custom Liners',
      shelfLife: '45–60 Days for mature whole nuts',
      moq: '5,000 Nuts or 5 Metric Tons',
      seasonalPeak: 'Year-Round with heavy summer demand across institutional buyers'
    },
    description: 'Backed by sister entity SP Coconut (a ₹80 Cr processing facility), our coconut sourcing spans the fertile belts of Pollachi and Karnataka. We deliver both high-yield fresh culinary coconuts and processed value-added formats with zero-waste recovery.',
    b2bHighlights: [
      'Pollachi and Mysore origin sourcing renowned for high meat thickness & water sweetness',
      'Integrated sorting by weight, nut diameter, and shell thickness',
      'Synergy with SP Coconut processing unit enabling zero-waste utilization',
      'Daily dedicated supply to QSR networks, Udupi hotel chains, and retail giants'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1544476915-ed1370594142?auto=format&fit=crop&w=1000&q=80'
  }
];
