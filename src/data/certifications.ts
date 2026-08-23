import { CertificationDoc } from '../types';

export const certificationsData: CertificationDoc[] = [
  {
    id: 'fssai-license',
    title: 'Food Safety Standards (FSSAI)',
    category: 'Food Safety & Standards',
    issuingAuthority: 'Food Safety and Standards Authority of India',
    registrationNumberPlaceholder: 'Statutory compliance on corporate file',
    status: 'Document on Request',
    description: 'Food safety governance covering safe handling, hygienic packaging, and transport of agricultural produce and staples.',
    verificationScope: 'Provided directly to institutional retail buyers during vendor empanelment.',
    documentType: 'PDF'
  },
  {
    id: 'gstin-registration',
    title: 'Goods & Services Tax (GSTIN)',
    category: 'Corporate',
    issuingAuthority: 'Government of India',
    registrationNumberPlaceholder: 'State of Maharashtra registration on file',
    status: 'Verified Registration',
    description: 'Statutory GST registration enabling inter-state trade billing across domestic agricultural corridors.',
    verificationScope: 'Corporate entity registration for TTB Agro India Private Limited.',
    documentType: 'Certificate'
  },
  {
    id: 'iec-dgft',
    title: 'Importer Exporter Code (IEC)',
    category: 'Trade & Export',
    issuingAuthority: 'Directorate General of Foreign Trade (DGFT)',
    registrationNumberPlaceholder: 'Active import clearance credentials on file',
    status: 'Document on Request',
    description: 'Statutory authorization enabling dedicated apple import corridors from Iran and Turkey.',
    verificationScope: 'International import execution and port customs clearance.',
    documentType: 'PDF'
  },
  {
    id: 'apeda-registration',
    title: 'APEDA Agri-Trade Registration',
    category: 'Trade & Export',
    issuingAuthority: 'APEDA, Ministry of Commerce & Industry',
    registrationNumberPlaceholder: 'Trade documentation on file',
    status: 'Pending Verification',
    description: 'Scheduled agricultural commodity standards and trade facilitation.',
    verificationScope: 'Agricultural trade facilitation.',
    documentType: 'Certificate'
  }
];

export const qcInspectionProtocols = [
  {
    gate: 'Stage 01: Initial Procurement QC',
    focus: 'Origin Farm-Gate & Sourcing Screening',
    parameters: [
      'Visual defect grading and sizing screening at harvest origin',
      'Preliminary sorting rejecting damaged or bruised produce',
      'Origin-level moisture and quality assessment',
      'Origin packing into ventilated field crates'
    ]
  },
  {
    gate: 'Stage 02: Final Dispatch QC',
    focus: 'Navi Mumbai Central Hub & Dock Inspection',
    parameters: [
      'Grading and calibration against institutional customer specifications',
      'Cold-chain temperature verification prior to vehicle loading',
      'Consignment count and crate integrity inspection',
      'Final dispatch release for on-time customer delivery'
    ]
  }
];
