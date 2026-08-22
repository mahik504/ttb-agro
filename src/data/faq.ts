export interface FAQItem {
  question: string;
  answer: string;
  category: 'Procurement' | 'Quality' | 'Logistics' | 'Group Scale' | 'Partnerships';
}

export const faqsData: FAQItem[] = [
  {
    question: "What is TTB Agro India's primary business model?",
    answer: "TTB Agro India Private Limited is a B2B agricultural sourcing, procurement, trading, processing, and supply chain enterprise. We aggregate agricultural commodities and fresh produce directly from origin growers and global import channels and supply them to organized retail chains, QSR networks, and institutional food-service buyers.",
    category: "Procurement"
  },
  {
    question: "How does TTB Agro guarantee year-round availability for seasonal produce like apples?",
    answer: "We solve seasonal agricultural troughs through strategic origin diversification and counter-seasonal sourcing. Domestic harvest from Himachal Pradesh and Jammu & Kashmir (Aug–Nov) is seamlessly supplemented by dedicated reefer import corridors from Iran and Turkey (Dec–Jul), ensuring 365-day uninterrupted retail availability.",
    category: "Procurement"
  },
  {
    question: "What are the core commodities sourced by TTB Agro?",
    answer: "We focus on two major categories: Staples (Paddy & Milled Rice from Tamil Nadu, Pan-India Pulses) and Fresh Produce (Domestic & Imported Apples, G9/Otto Bananas from TN/KA/MH, and Fresh Culinary Coconuts from Pollachi & Karnataka).",
    category: "Procurement"
  },
  {
    question: "How does the Dual-Stage Quality Control (QC) process work?",
    answer: "Quality is verified twice. Gate 1 occurs at the farm/origin aggregation point (grading, moisture, visual defect sorting). Gate 2 occurs at our central fulfillment facilities and dispatch docks in Navi Mumbai (brix testing, optical sorting, controlled ripening, cold-chain temperature verification) prior to retail delivery.",
    category: "Quality"
  },
  {
    question: "What is TTB Agro's connection to the ₹228 Cr group ecosystem?",
    answer: "TTB Agro operates alongside established sister entities (Just Go Eco - ₹98 Cr, SP Coconut - ₹80 Cr, Just Go Project - ₹25 Cr, STP Traders - ₹25 Cr) with a combined group turnover of ₹228 Cr. This backing provides institutional balance-sheet strength, dedicated coconut processing units, and robust logistics infrastructure.",
    category: "Group Scale"
  },
  {
    question: "Where is TTB Agro's central operations hub located?",
    answer: "Our operations hub and registered office are located at Shop No. 3, Plot No. 19, Sector 48, Seawoods, Nerul, Navi Mumbai, Maharashtra – 400706, strategically positioned near the JNPT port and Western India consumption centers.",
    category: "Logistics"
  },
  {
    question: "How do commercial buyers submit an RFP or partner with TTB Agro?",
    answer: "Commercial buyers (Retail chains, QSRs, Hospitality chains) can submit requirements directly via our online B2B RFP engine on the Contact page, or reach out to procurement@ttbagro.com. Our institutional desk responds with customized volume-tiered quotes within 24 hours.",
    category: "Partnerships"
  }
];
