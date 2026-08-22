export interface NavLinkItem {
  label: string;
  href: string;
  description?: string;
}

export const mainNavigation: NavLinkItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'What We Source', href: '/commodities' },
  { label: 'Our Supply Chain', href: '/supply-chain' },
  { label: 'Network & Origins', href: '/network' },
  { label: 'Group Ecosystem', href: '/group' },
  { label: 'Quality & Compliance', href: '/quality-compliance' },
  { label: 'Contact & RFP', href: '/contact' },
];

export const footerNavigation = {
  capabilities: [
    { label: 'Agricultural Sourcing', href: '/commodities' },
    { label: 'Fresh Produce (Apples, Bananas, Coconut)', href: '/commodities#fresh-produce' },
    { label: 'Staples (Rice & Pulses)', href: '/commodities#staples' },
    { label: 'Global Import Corridors', href: '/network#global-channels' },
    { label: 'Dual-Stage Quality Control', href: '/supply-chain#qc-protocols' },
  ],
  company: [
    { label: 'Corporate Overview', href: '/about' },
    { label: 'Leadership & Directors', href: '/about#leadership' },
    { label: '₹228 Cr Group Synergy', href: '/group' },
    { label: 'Certifications & Standards', href: '/quality-compliance' },
    { label: 'Partner RFP Form', href: '/contact' },
  ],
  legal: [
    { label: 'Privacy Policy', href: '/privacy-policy' },
    { label: 'Terms of Supply', href: '/terms' },
    { label: 'Regulatory Disclaimer', href: '/disclaimer' },
    { label: 'Content Verification', href: '/quality-compliance#verification' },
  ]
};
