export interface NavLinkItem {
  label: string;
  href: string;
  description?: string;
}

// Essential Commercial Journey for Main Navigation
export const mainNavigation: NavLinkItem[] = [
  { label: 'About', href: '/about' },
  { label: 'Commodities', href: '/commodities' },
  { label: 'Supply Chain', href: '/supply-chain' },
  { label: 'Network', href: '/network' },
  { label: 'Contact', href: '/contact' },
];

export const footerNavigation = {
  capabilities: [
    { label: 'Rice (Tamil Nadu)', href: '/commodities#rice' },
    { label: 'Pulses (Pan-India)', href: '/commodities#pulses' },
    { label: 'Apples (Iran, Turkey, HP/J&K)', href: '/commodities#apples' },
    { label: 'Bananas (TN, Karnataka, Maharashtra)', href: '/commodities#bananas' },
    { label: 'Coconuts (TN, Karnataka)', href: '/commodities#coconut' },
  ],
  company: [
    { label: 'Corporate Overview', href: '/about' },
    { label: 'Board of Directors', href: '/about#leadership' },
    { label: '₹228 Cr Group Portfolio', href: '/group' },
    { label: 'Quality at Procurement & Dispatch', href: '/quality-compliance' },
    { label: 'Commercial Contact & Inquiries', href: '/contact' },
  ],
  legal: [
    { label: 'Privacy Policy', href: '/privacy-policy' },
    { label: 'Terms of Supply', href: '/terms' },
    { label: 'Regulatory Disclaimer', href: '/disclaimer' },
    { label: 'Asset Sources & Provenance', href: '/about' },
  ]
};
