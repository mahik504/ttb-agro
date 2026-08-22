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
    response: 'TTB Agro India Private Limited is a specialized B2B agricultural sourcing, procurement, trading, processing, and distribution enterprise. We connect origin growers and global import channels directly with organized retail chains, QSR networks, and institutional food-service buyers under our philosophy: "Farmer-First Procurement, Customer-First Quality."',
    suggestedAction: { label: 'Explore Company Profile', href: '/about' }
  },
  {
    id: 'commodities-sourced',
    keywords: ['commodities', 'products', 'what do you sell', 'source', 'rice', 'pulses', 'apple', 'banana', 'coconut', 'staples', 'fresh produce'],
    title: 'Sourced Commodities',
    response: 'TTB Agro sources 5 core agricultural categories:\n• Rice: Direct aggregation from Tamil Nadu paddy belts\n• Pulses: Pan-India trading & mill aggregation (Toor, Chana, Moong, Urad)\n• Apples: Continuous supply via Iran & Turkey imports + Himalayan orchards (HP/J&K)\n• Bananas: Multi-state farm-gate sourcing (Maharashtra, Tamil Nadu, Karnataka)\n• Coconut: Direct aggregation from Pollachi & Karnataka with SP Coconut processing.',
    suggestedAction: { label: 'View Commodity Matrix', href: '/commodities' }
  },
  {
    id: 'seasonal-derisking',
    keywords: ['season', 'seasonal', 'year round', 'winter', 'summer', 'continuity', 'availability', 'import', 'iran', 'turkey'],
    title: 'Year-Round Availability & De-risking',
    response: 'We eliminate seasonal stockouts for retail partners through counter-seasonal sourcing. For example, during India’s domestic apple off-season (December to July), dedicated reefer maritime import pipelines from Iran and Turkey supply fresh, cold-chain apples, ensuring 365-day uninterrupted retail availability.',
    suggestedAction: { label: 'Explore Supply Chain', href: '/supply-chain' }
  },
  {
    id: 'quality-control',
    keywords: ['qc', 'quality', 'testing', 'standards', 'inspection', 'dual-stage', 'fssai', 'checks'],
    title: 'Dual-Stage Quality Control',
    response: 'Our Dual-Stage QC protocol verifies quality twice:\n1. Origin Gate: Farm-level visual, sizing, and digital moisture inspection (<14% for staples).\n2. Dispatch Gate: Central laboratory testing in Navi Mumbai for brix sweetness, firmness, optical sorting, and temperature logging prior to retail delivery.',
    suggestedAction: { label: 'Review QC Protocols', href: '/quality-compliance' }
  },
  {
    id: 'group-ecosystem',
    keywords: ['turnover', '228', 'group', 'just go eco', 'sp coconut', 'just go project', 'financial', 'scale'],
    title: '₹228 Cr Group Synergy',
    response: 'TTB Agro operates alongside a diversified ₹228 Cr group ecosystem:\n• Just Go Eco (₹98 Cr): Sustainable packaging & circular economy\n• SP Coconut (₹80 Cr): Dedicated industrial coconut processing & zero waste\n• Just Go Project (₹25 Cr): Agri-infrastructure & cold logistics\n• TTB Agro & STP Traders (₹25 Cr): Core agricultural procurement & distribution.',
    suggestedAction: { label: 'View Group Ecosystem', href: '/group' }
  },
  {
    id: 'leadership',
    keywords: ['director', 'leadership', 'founders', 'prakash patil', 'harshal nikam', 'management'],
    title: 'Corporate Leadership',
    response: 'TTB Agro India Private Limited is directed by:\n• Mr. Prakash Patil (Director - Strategic Sourcing & Origin Procurement)\n• Mr. Harshal Nikam (Director - Supply Chain Operations & Institutional Relations).\nOur corporate headquarters and operations hub are located in Seawoods, Nerul, Navi Mumbai.',
    suggestedAction: { label: 'Meet Leadership', href: '/about#leadership' }
  },
  {
    id: 'rfp-partnership',
    keywords: ['rfp', 'partner', 'contact', 'quote', 'buy', 'supply', 'price', 'pricing', 'order', 'moq'],
    title: 'B2B Procurement RFP',
    response: 'We welcome institutional procurement partnerships with Organised Retail, QSR Chains, Hospitality Groups, and Food Service Caterers. You can submit your requirements directly through our online RFP engine for a customized volume-tiered quote.',
    suggestedAction: { label: 'Submit B2B RFP', href: '/contact' }
  },
  {
    id: 'location-address',
    keywords: ['address', 'location', 'office', 'where', 'navi mumbai', 'phone', 'email'],
    title: 'Operations Hub Location',
    response: 'Our Operations Hub & Registered Office:\nShop No. 3, Plot No. 19, Sector 48, Seawoods, Nerul, Navi Mumbai, Maharashtra – 400706.\nOfficial Email: procurement@ttbagro.com / rfp@ttbagro.com.',
    suggestedAction: { label: 'View on Map & Contact', href: '/contact' }
  }
];

export const quickPromptChips = [
  "How do you ensure year-round apple supply?",
  "What is your Dual-Stage QC process?",
  "Which commodities do you source?",
  "What is the ₹228 Cr group ecosystem?",
  "How to submit an RFP for retail supply?"
];

export function findAssistantResponse(query: string): { response: string; title?: string; action?: { label: string; href: string } } {
  const normalized = query.toLowerCase().trim();
  
  if (!normalized) {
    return {
      response: "Please enter a question regarding TTB Agro's agricultural sourcing, commodities, supply chain, or procurement partnerships."
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

  // Generic fallback if not matched directly
  return {
    response: "TTB Agro specializes in B2B procurement across Staples (Rice, Pulses) and Fresh Produce (Apples, Bananas, Coconut) with dual-stage QC and multi-origin supply. For custom volume quotations, pricing SLAs, or contract terms, please submit an enquiry through our B2B RFP form.",
    title: "Institutional Procurement Enquiry",
    action: {
      label: "Open B2B RFP Form",
      href: "/contact"
    }
  };
}
