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
  { label: 'Quality & Standards', href: '/quality-compliance' },
  { label: 'Contact', href: '/contact' },
];

export const footerNavigation = {
  capabilities: [
    { label: 'Rice (Tamil Nadu)', href: '/commodities#rice' },
    { label: 'Pulses & Legumes (Pan-India)', href: '/commodities#pulses' },
    { label: 'Apples (Iran, Turkey, HP/J&K)', href: '/commodities#apples' },
    { label: 'Bananas (TN, Karnataka, Maharashtra)', href: '/commodities#bananas' },
    { label: 'Coconuts (TN, Karnataka)', href: '/commodities#coconut' },
  ],
  company: [
    { label: 'Corporate Overview', href: '/about' },
    { label: 'Board of Directors', href: '/about#leadership' },
    { label: '₹228 Cr Group Ecosystem', href: '/group' },
    { label: 'Quality & Compliance Architecture', href: '/quality-compliance' },
    { label: 'Commercial Contact & Inquiries', href: '/contact' },
  ],
  legal: [
    { label: 'Privacy Policy', href: '/privacy-policy' },
    { label: 'Terms of Supply', href: '/terms' },
    { label: 'Regulatory Disclaimer', href: '/disclaimer' },
    { label: 'Content Verification', href: '/quality-compliance' },
  ]
};
