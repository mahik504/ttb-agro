import { CustomerSegment } from '../types';

export const customerSegments: CustomerSegment[] = [
  {
    id: 'organised-retail',
    title: 'Organised Retail',
    clientReferences: ['D-Mart', 'Regional Retail Partners'],
    requirements: [
      'Large-scale, consistent volume supply',
      'Continuous year-round availability across seasonal cycles',
      'Uniform grading and dock-ready packaging',
      'Dependable delivery schedules'
    ],
    ttbSolution: 'Multi-origin domestic procurement combined with dedicated import channels from Iran and Turkey ensures uninterrupted retail fill rates.',
    volumeTier: 'Commercial High Volume'
  },
  {
    id: 'qsr-cafe',
    title: 'QSR & Café Networks',
    clientReferences: ['Thumbi', "Mani's Cafe"],
    requirements: [
      'Premium quality and steady daily supply',
      'Fresh coconut and banana culinary consistency',
      'Reliable morning kitchen intake windows',
      'Clean food-grade packaging'
    ],
    ttbSolution: 'Daily scheduled dispatches coordinated from our Navi Mumbai operations hub, supplying kitchen-ready produce graded for consistent culinary yield.',
    volumeTier: 'Scheduled Daily & Multi-Drop Volume'
  },
  {
    id: 'regional-hospitality',
    title: 'Regional Hospitality',
    clientReferences: ['Udupi Hotels', 'Food Service Sector'],
    requirements: [
      'Bulk institutional supply for the food service sector',
      'Consistent milling quality in staples (Rice & Pulses)',
      'Culinary coconut volume reliability',
      'Competitive institutional contract terms'
    ],
    ttbSolution: 'Direct mill aggregation in Tamil Nadu and industrial coconut processing via SP Coconut provide high-volume stability.',
    volumeTier: 'Bulk Institutional Supply'
  }
];

export const clientDisclaimer = "Brand names referenced above reflect customer sectors and commercial relationship categories presented in TTB Agro's corporate strategic deck. Names are displayed as text for sector illustration and remain the intellectual property of their respective holders.";
