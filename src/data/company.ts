export const companyInfo = {
  legalName: "TTB Agro India Private Limited",
  shortName: "TTB Agro",
  tagline: "Resilient Supply Chains Connecting Origin Growers to Organised Retail",
  operatingPhilosophy: "Farmer-First Procurement. Customer-First Quality.",
  description: "TTB Agro India Private Limited is a B2B agricultural sourcing, procurement, trading, processing, and distribution company connecting origin growers and global import channels to organized retail, food service, and institutional buyers.",
  
  // Group financials - strictly framed as total group turnover
  groupTurnover: "₹228 Cr",
  groupEcosystemDescription: "TTB Agro India operates alongside sister entities with a combined ₹228 Cr total group turnover, sharing a holistic agricultural ecosystem, extensive infrastructure, and financial stability.",
  
  // Registered Office / Operations Hub (Exact from PDF Slide 11)
  registeredOffice: {
    addressLine1: "Shop No. 3, Plot No. 19, Sector 48",
    addressLine2: "Seawoods, Nerul",
    city: "Navi Mumbai",
    state: "Maharashtra",
    pincode: "400706",
    country: "India",
    fullAddress: "Shop No. 3, Plot No. 19, Sector 48, Seawoods, Nerul, Navi Mumbai, Maharashtra – 400706",
    googleMapsEmbedUrl: "https://maps.google.com/maps?q=Seawoods+Sector+48+Nerul+Navi+Mumbai&t=&z=14&ie=UTF8&iwloc=&output=embed",
  },
  
  // Contact Channels (Clean placeholders, no XXXX numbers)
  contact: {
    officialEmail: "procurement@ttbagro.com",
    salesEmail: "rfp@ttbagro.com",
    phonePrimary: null as string | null, // Populated only when client provides real phone
    workingHours: "Monday – Saturday: 09:00 AM – 06:30 PM IST",
  },

  // Key Corporate Metrics (Strictly backed by Slide 3 & Slide 5)
  metrics: [
    { label: "Total Group Turnover", value: "₹228 Cr", subtext: "Combined ecosystem scale across 4 sister entities" },
    { label: "Domestic Origin States", value: "5 States", subtext: "Tamil Nadu, Karnataka, Maharashtra, HP & J&K" },
    { label: "Dedicated Global Channels", value: "2 Nations", subtext: "Iran & Turkey import corridors" },
    { label: "Quality Architecture", value: "Dual-Stage", subtext: "Procurement & dispatch quality checks" },
  ],

  // Core Value Pillars (Exact from Slide 10: The TTB Advantage)
  pillars: [
    {
      title: "Financial Scale",
      highlight: "₹228 Cr+ Combined Group Turnover",
      description: "Backed by an established group with a ₹228 Cr+ combined turnover, offering extensive infrastructure, deep market roots, and financial stability.",
    },
    {
      title: "Agile Reach",
      highlight: "Local Depth + Global Imports",
      description: "A highly diversified footprint combining deep local roots across India with strategic import capabilities to guarantee year-round supply.",
    },
    {
      title: "Market Trust",
      highlight: "Dual-Category Category Depth",
      description: "Proven category depth across staples and fresh produce, trusted by leading retail chains, café networks, and regional hospitality partners.",
    }
  ]
};
