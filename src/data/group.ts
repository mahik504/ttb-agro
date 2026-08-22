import { GroupEntity } from '../types';

export const groupEntities: GroupEntity[] = [
  {
    id: 'just-go-eco',
    name: 'Just Go Eco',
    role: 'Sustainable Products & Circular Economy',
    turnoverContribution: '₹98 Cr',
    description: 'Specializes in sustainable, eco-friendly agricultural products, organic inputs, and eco-packaging solutions, championing circular economy frameworks within the agro-industrial supply chain.',
    capabilities: [
      'Eco-friendly packaging formats for retail produce',
      'Sustainable agri-residue upcycling & co-products',
      'Environmentally conscious logistics & reduction of single-use plastics'
    ],
    synergyWithTTB: 'Provides TTB Agro with sustainable packaging infrastructure and eco-aligned corporate branding for modern ESG-conscious retail buyers.',
    badgeColor: 'bg-emerald-100 text-emerald-800 border-emerald-300'
  },
  {
    id: 'sp-coconut',
    name: 'SP Coconut',
    role: 'Industrial Processing & Zero-Waste Value Addition',
    turnoverContribution: '₹80 Cr',
    description: 'A state-of-the-art dedicated coconut processing and aggregation unit. Operates high-capacity sorting, de-husking, and value-addition infrastructure targeting complete zero-waste utilization.',
    capabilities: [
      'Industrial-scale de-husking and sorting (100k+ nuts daily capacity)',
      'Desiccated coconut powder and copra processing facilities',
      'Zero-waste extraction converting husk/shell into coir and bio-carbon'
    ],
    synergyWithTTB: 'Enables TTB Agro to deliver both whole high-meat culinary coconuts and processed formats with unmatched price stability and processing margins.',
    badgeColor: 'bg-amber-100 text-amber-800 border-amber-300'
  },
  {
    id: 'just-go-project',
    name: 'Just Go Project',
    role: 'Infrastructure, Warehousing & Agro-Logistics Execution',
    turnoverContribution: '₹25 Cr',
    description: 'Focuses on complex project execution, cold storage infrastructure setup, warehouse logistics management, and turnkey agri-infrastructure projects across key trade corridors.',
    capabilities: [
      'Cold-chain and Controlled Atmosphere storage asset management',
      'Turnkey logistical execution and multi-modal fleet coordination',
      'Specialized agricultural project engineering'
    ],
    synergyWithTTB: 'Powers TTB Agro’s rapid logistical turnaround and cold-chain asset availability across Western and Southern India.',
    badgeColor: 'bg-blue-100 text-blue-800 border-blue-300'
  },
  {
    id: 'stp-traders-ttb',
    name: 'TTB Agro & STP Traders',
    role: 'Agricultural Procurement, Trading & Distribution Engine',
    turnoverContribution: '₹25 Cr',
    description: 'The core commercial trading and origin procurement vehicle connecting growers, millers, and international import desks with institutional retail, QSR, and hotel networks.',
    capabilities: [
      'Pan-India agricultural commodity trading & direct aggregation',
      'Dedicated international import corridors (Iran, Turkey)',
      'Institutional SLA management and retail category supply contracts'
    ],
    synergyWithTTB: 'Acts as the primary client-facing trading entity, directly executing retail contracts with D-Mart, café chains, and hospitality leaders.',
    badgeColor: 'bg-forest-100 text-forest-800 border-forest-300'
  }
];

export const groupSummary = {
  totalTurnover: "₹228 Cr",
  ecosystemStatement: "TTB Agro India Private Limited operates within a diversified ₹228 Cr agricultural and sustainable processing group ecosystem. This institutional backing ensures robust working capital reserves, dedicated processing facilities, and resilient logistics infrastructure to support uninterrupted commercial supply.",
  disclaimerNote: "Financial figures represent the combined ecosystem turnover of sister and affiliate entities as presented in the corporate strategic profile."
};
