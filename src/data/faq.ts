export interface FAQItem {
  question: string;
  answer: string;
  category: 'Procurement' | 'Quality' | 'Logistics' | 'Group Scale' | 'Partnerships';
}

export const faqsData: FAQItem[] = [
  {
    question: "What is TTB Agro India's core business model?",
    answer: "TTB Agro India Private Limited is a B2B agricultural sourcing, procurement, trading, processing, and distribution company. We connect origin growers in India and dedicated overseas import channels directly to organized retail chains, QSR networks, and institutional food-service buyers.",
    category: "Procurement"
  },
  {
    question: "How does TTB Agro guarantee year-round availability for apples?",
    answer: "We pair domestic orchard harvests in Himachal Pradesh and Kashmir (peaking in autumn) with dedicated import channels from Iran and Turkey (active during domestic off-season dips). This dual-hemisphere strategy neutralizes seasonal supply dips and price volatility.",
    category: "Procurement"
  },
  {
    question: "Which commodities are sourced by TTB Agro?",
    answer: "We source five core categories: Staples (Bulk & processed Rice from Tamil Nadu, Retail & institutional Pulses across India) and Fresh Produce (Premium imported & local Apples, Otto & G9 Bananas from TN, Karnataka, and Maharashtra, and Fresh & processed Coconuts from Pollachi and Karnataka).",
    category: "Procurement"
  },
  {
    question: "What is the Dual-Stage Quality Control process?",
    answer: "Quality checks are enforced at two critical stages: first at the initial procurement stage at the harvest origin, and second at the final dispatch stage from our Navi Mumbai hub prior to client delivery.",
    category: "Quality"
  },
  {
    question: "What is the ₹228 Cr group ecosystem?",
    answer: "TTB Agro operates alongside sister entities with a combined ₹228 Cr total group turnover: Just Go Eco (₹98 Cr), SP Coconut (₹80 Cr), Just Go Project (₹25 Cr), and STP Traders (₹25 Cr). This group backing provides infrastructure, processing facilities, and financial stability.",
    category: "Group Scale"
  },
  {
    question: "Where is TTB Agro's operations hub located?",
    answer: "Our operations hub and registered office are located at Shop No. 3, Plot No. 19, Sector 48, Seawoods, Nerul, Navi Mumbai, Maharashtra – 400706.",
    category: "Logistics"
  },
  {
    question: "How can commercial buyers discuss procurement requirements?",
    answer: "Commercial buyers can submit their requirements via our contact form or write directly to procurement@ttbagro.com / rfp@ttbagro.com. Our commercial desk responds with formal specifications and volume allocations.",
    category: "Partnerships"
  }
];
