import { GroupEntity } from '../types';

export const groupEntities: GroupEntity[] = [
  {
    id: 'just-go-eco',
    name: 'Just Go Eco',
    role: 'Sustainability & Execution',
    turnoverContribution: '₹98 Cr',
    description: 'The sustainable products line and project execution arm driving eco-friendly practices across all group operations.',
    capabilities: [
      'Sustainable agri-product lines',
      'Eco-friendly practices across supply operations',
      'Circular resource utilization'
    ],
    synergyWithTTB: 'Provides TTB Agro with sustainable practices and environmentally conscious execution capabilities.',
    badgeColor: 'bg-[#1A3C2C]/10 text-[#1A3C2C] border-[#1A3C2C]/20'
  },
  {
    id: 'sp-coconut',
    name: 'SP Coconut',
    role: 'Processing & Value-Add',
    turnoverContribution: '₹80 Cr',
    description: 'Dedicated unit for processing fresh coconuts into value-added formats, ensuring zero waste and higher market margins.',
    capabilities: [
      'Industrial fresh coconut processing unit',
      'Value-added coconut formats',
      'Zero-waste operational philosophy'
    ],
    synergyWithTTB: 'Enables TTB Agro to deliver both whole culinary coconuts and processed formats with stable processing capacity.',
    badgeColor: 'bg-[#C4A35A]/15 text-[#8C7033] border-[#C4A35A]/30'
  },
  {
    id: 'just-go-project',
    name: 'Just Go Project',
    role: 'Sustainability & Execution',
    turnoverContribution: '₹25 Cr',
    description: 'Project execution arm driving eco-friendly practices, agricultural projects, and operational infrastructure across all group operations.',
    capabilities: [
      'Agro-logistics and infrastructure execution',
      'Turnkey project management across trade belts',
      'Operational infrastructure support'
    ],
    synergyWithTTB: 'Supports TTB Agro’s execution and regional logistics infrastructure.',
    badgeColor: 'bg-[#0E1C14]/5 text-[#3D4A42] border-[#0E1C14]/15'
  },
  {
    id: 'stp-traders-ttb',
    name: 'TTB Agro & STP Traders',
    role: 'Trading & Procurement',
    turnoverContribution: '₹25 Cr (STP Traders)',
    description: 'The core engine sourcing staples like rice and pulses, alongside fresh produce like apples and bananas for retail markets.',
    capabilities: [
      'Domestic agricultural commodity trading & direct aggregation',
      'Dedicated international import channels (Iran & Turkey)',
      'Organized retail and institutional supply contracts'
    ],
    synergyWithTTB: 'Acts as the primary commercial sourcing engine executing retail and institutional supply.',
    badgeColor: 'bg-[#0B1E15] text-[#C4A35A] border-[#C4A35A]/30'
  }
];

export const groupSummary = {
  totalTurnover: "₹228 Cr",
  ecosystemStatement: "TTB Agro India operates seamlessly alongside these sister entities. By sharing a holistic agricultural ecosystem, we leverage extensive infrastructure, deep market roots, and the immense financial stability of a highly capitalized conglomerate.",
  disclaimerNote: "₹228 Cr represents the combined total group turnover across sister and affiliate entities as presented in the corporate profile. TTB Agro operates alongside these entities."
};
