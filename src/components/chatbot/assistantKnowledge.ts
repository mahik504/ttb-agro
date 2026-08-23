export interface KnowledgeItem {
  id: string;
  keywords: string[];
  title: string;
  response: string;
  suggestedAction?: {
    label: string;
    href: string;
  };
}

export const assistantKnowledgeBase: KnowledgeItem[] = [
  {
    id: 'company-overview',
    keywords: ['about', 'who are you', 'what is ttb agro', 'business model', 'company', 'intro', 'overview'],
    title: 'About TTB Agro India',
    response: 'TTB Agro India Private Limited is a B2B agricultural sourcing, procurement, trading, processing, and distribution company. Guided by "Farmer-First Procurement. Customer-First Quality.", we connect origin growers across India and overseas import corridors directly with organized retail, café networks, and institutional hospitality buyers.',
    suggestedAction: { label: 'Explore Company Profile', href: '/about' }
  },
  {
    id: 'commodities-sourced',
    keywords: ['commodities', 'products', 'what do you sell', 'source', 'rice', 'pulses', 'apple', 'banana', 'coconut', 'staples', 'fresh produce'],
    title: 'Commodities Sourced',
    response: 'TTB Agro sources 5 core commodity categories:\n• Rice: Bulk & processed grades via direct local aggregation in Tamil Nadu\n• Pulses: Retail & institutional grades via pan-India general trading\n• Apples: Premium imported (Iran, Turkey) & local (Himachal, Kashmir)\n• Bananas: Otto & G9 varieties across Tamil Nadu, Karnataka, and Maharashtra\n• Coconut: Fresh & processed formats from Pollachi and Karnataka with SP Coconut processing.',
    suggestedAction: { label: 'View Commodity Matrix', href: '/commodities' }
  },
  {
    id: 'seasonal-derisking',
    keywords: ['season', 'seasonal', 'year round', 'winter', 'summer', 'continuity', 'availability', 'import', 'iran', 'turkey'],
    title: 'Seasonal De-risking Strategy',
    response: 'We neutralize seasonal supply volatility by pairing domestic harvest peaks (such as Himalayan apples in Aug–Nov) with dedicated import channels from Iran and Turkey (active during domestic off-season dips), ensuring 365-day availability for retail partners.',
    suggestedAction: { label: 'Our Supply Chain', href: '/supply-chain' }
  },
  {
    id: 'quality-control',
    keywords: ['qc', 'quality', 'testing', 'standards', 'inspection', 'dual-stage', 'checks'],
    title: 'Dual-Stage Quality Control',
    response: 'Our Dual-Stage QC protocol enforces checks at two critical milestones:\n1. Initial Procurement Stage at the farm-gate/origin packhouse.\n2. Final Dispatch Stage at our Navi Mumbai hub prior to retail delivery.',
    suggestedAction: { label: 'Quality & Standards', href: '/quality-compliance' }
  },
  {
    id: 'group-ecosystem',
    keywords: ['turnover', '228', 'group', 'just go eco', 'sp coconut', 'just go project', 'financial', 'scale'],
    title: '₹228 Cr Group Ecosystem',
    response: 'TTB Agro operates alongside sister entities with a combined ₹228 Cr total group turnover:\n• Just Go Eco (₹98 Cr): Sustainability & Execution\n• SP Coconut (₹80 Cr): Processing & Value-Add\n• Just Go Project (₹25 Cr): Sustainability & Execution\n• STP Traders & TTB Agro (₹25 Cr): Trading & Procurement.',
    suggestedAction: { label: 'Group Ecosystem', href: '/group' }
  },
  {
    id: 'leadership',
    keywords: ['director', 'leadership', 'founders', 'prakash patil', 'harshal nikam', 'board'],
    title: 'Board of Directors',
    response: 'TTB Agro India Private Limited is directed by:\n• Mr. Prakash Patil (Director)\n• Mr. Harshal Nikam (Director)\nOur corporate registered office and operations hub are located in Seawoods, Nerul, Navi Mumbai.',
    suggestedAction: { label: 'About Leadership', href: '/about' }
  },
  {
    id: 'contact-rfp',
    keywords: ['rfp', 'partner', 'contact', 'quote', 'buy', 'supply', 'price', 'pricing', 'order', 'moq', 'email', 'address'],
    title: 'Commercial Inquiries & Contact',
    response: 'For commercial inquiries, custom volume allocations, and delivery schedules, please submit your requirements through our contact form or email our desk at procurement@ttbagro.com / rfp@ttbagro.com.',
    suggestedAction: { label: 'Contact Commercial Desk', href: '/contact' }
  }
];

export const quickPromptChips = [
  "How do you ensure year-round apple availability?",
  "Which commodities are sourced?",
  "What is the Dual-Stage QC process?",
  "What is the ₹228 Cr group ecosystem?",
  "How to discuss procurement requirements?"
];

export function findAssistantResponse(query: string): { response: string; title?: string; action?: { label: string; href: string } } {
  const normalized = query.toLowerCase().trim();
  
  if (!normalized) {
    return {
      response: "Please ask a question regarding TTB Agro's agricultural sourcing, commodities, supply chain, or group ecosystem."
    };
  }

  // Scan knowledge items
  for (const item of assistantKnowledgeBase) {
    const match = item.keywords.some(kw => normalized.includes(kw));
    if (match) {
      return {
        response: item.response,
        title: item.title,
        action: item.suggestedAction
      };
    }
  }

  // Grounded fallback
  return {
    response: "I can answer questions regarding TTB Agro's verified agricultural commodities, sourcing origins, dual-stage QC, and group ecosystem. For custom volume requirements, specifications, or commercial pricing, please contact our desk.",
    title: "Commercial Requirements",
    action: {
      label: "Contact Commercial Desk",
      href: "/contact"
    }
  };
}
