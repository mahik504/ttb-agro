import { CustomerSegment } from '../types';

export const customerSegments: CustomerSegment[] = [
  {
    id: 'organised-retail',
    title: 'Organised Retail & Hypermarket Chains',
    clientReferences: ['D-Mart (Hypermarket Model)', 'Modern Trade Supermarket Chains', 'E-Grocery Warehouses'],
    requirements: [
      'Strict grading consistency (uniform color, sizing, brix)',
      'High-volume daily fulfillment across regional distribution centers (DCs)',
      'Barcode-level batch traceability & retail shelf-life guarantees',
      'Contractual price stability across seasonal peaks and troughs'
    ],
    ttbSolution: 'Multi-origin sourcing paired with counter-seasonal import corridors guarantees 100% fill-rate SLAs with zero seasonal stockouts.',
    volumeTier: 'High Volume (10–100 MT / Week per Category)'
  },
  {
    id: 'qsr-cafe',
    title: 'QSR, Cloud Kitchens & Café Networks',
    clientReferences: ["Mani's Cafe", 'Thumbi South Indian QSR', 'Fast-Casual Food Service Chains'],
    requirements: [
      'Daily morning delivery before commercial kitchen prep windows',
      'Pre-calibrated produce (high-yield coconut meat, consistent banana ripening)',
      'Hygienic food-grade crates and zero-contact sorting',
      'Flexible minimum order quantities (MOQ) with rapid re-orders'
    ],
    ttbSolution: 'Dedicated daily milk-run logistics from our Navi Mumbai operations hub, delivering kitchen-ready produce graded specifically for culinary yield.',
    volumeTier: 'Medium-High Volume (Daily/Bi-Weekly Dispatches)'
  },
  {
    id: 'hospitality-institutional',
    title: 'Hospitality & Institutional Food Service',
    clientReferences: ['Udupi Hotel Networks', 'Corporate Dining & Industrial Caterers', 'Institutional Canteens'],
    requirements: [
      'Bulk staples (Rice & Pulses) with uniform cooking characteristics',
      'Consistent culinary coconut meat thickness and low moisture variance in staples',
      'Competitive institutional bulk pricing with structured payment credit cycles',
      'Consolidated single-vendor invoice for fresh produce and staples'
    ],
    ttbSolution: 'Synergistic group integration with SP Coconut and direct rice mill aggregations allows unified institutional supply contracts with significant cost advantages.',
    volumeTier: 'Institutional Bulk Contracts (Monthly Freight Schedules)'
  }
];

export const clientDisclaimer = "Client names referenced above reflect strategic commercial relationships, reference enterprise accounts, and institutional target categories presented in TTB Agro's corporate profile. Brand logos are displayed for sector illustration and remain the intellectual property of their respective owners.";
