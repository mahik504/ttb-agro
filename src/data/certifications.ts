import { CertificationDoc } from '../types';

export const certificationsData: CertificationDoc[] = [
  {
    id: 'fssai-license',
    title: 'FSSAI Food Safety & Standards License',
    category: 'Food Safety & Standards',
    issuingAuthority: 'Food Safety and Standards Authority of India (FSSAI)',
    registrationNumberPlaceholder: 'FSSAI Reg: [Verified License on File]',
    status: 'Active Group License',
    description: 'Mandatory statutory food business operator compliance governing safe handling, storage, packaging, and hygienic transport of fresh produce and staple commodities.',
    verificationScope: 'Applicable across central fulfillment centers, grading packhouses, and food-grade logistics hubs.',
    documentType: 'PDF'
  },
  {
    id: 'gstin-registration',
    title: 'Goods & Services Tax Registration (GSTIN)',
    category: 'Corporate',
    issuingAuthority: 'Ministry of Finance, Government of India',
    registrationNumberPlaceholder: 'GSTIN: 27XXXXX0000X1Z5 [State of Maharashtra]',
    status: 'Verified Registration',
    description: 'Statutory GST registration enabling seamless inter-state agricultural input and B2B output billing across all domestic trade corridors.',
    verificationScope: 'Corporate entity registration for TTB Agro India Private Limited.',
    documentType: 'Certificate'
  },
  {
    id: 'iec-dgft',
    title: 'Importer Exporter Code (IEC)',
    category: 'Trade & Export',
    issuingAuthority: 'Directorate General of Foreign Trade (DGFT), Ministry of Commerce',
    registrationNumberPlaceholder: 'IEC: [Active Import Clearance Account]',
    status: 'Active Group License',
    description: 'Authorizes direct international maritime agricultural imports, including dedicated apple import corridors from Iran and Turkey via JNPT.',
    verificationScope: 'International trade execution and port customs clearance.',
    documentType: 'PDF'
  },
  {
    id: 'apeda-registration',
    title: 'APEDA Agri-Trade Registration',
    category: 'Trade & Export',
    issuingAuthority: 'Agricultural & Processed Food Products Export Development Authority',
    registrationNumberPlaceholder: 'APEDA Reg: [Trade Verification Protocol]',
    status: 'Pending Verification',
    description: 'Regulatory integration for processed agricultural produce, coconut value-added formats, and certified fresh horticulture trade.',
    verificationScope: 'Scheduled agricultural commodity standards and trade facilitation.',
    documentType: 'Certificate'
  },
  {
    id: 'iso-9001-22000',
    title: 'ISO 9001:2015 & ISO 22000 Quality Architecture',
    category: 'Quality Management',
    issuingAuthority: 'Accredited Quality Management Registrar',
    registrationNumberPlaceholder: 'Quality Framework: QMS-AGRI-STD',
    status: 'Document on Request',
    description: 'Structured Quality Management System (QMS) and Hazard Analysis Critical Control Points (HACCP) operational framework across dual-stage QC gates.',
    verificationScope: 'Procurement grading, cold-chain temperature logging, and dispatch traceability.',
    documentType: 'Certificate'
  }
];

export const qcInspectionProtocols = [
  {
    gate: 'Gate 01: Origin Farm-Gate Screening',
    focus: 'Raw Produce Quality & Moisture Integrity',
    parameters: [
      'Visual defect grading and caliber measurement',
      'Digital moisture analysis for paddy and pulses (<14%)',
      'Maturity index and firmness assessment for bananas and apples',
      'Preliminary sorting rejecting bruised or diseased produce'
    ]
  },
  {
    gate: 'Gate 02: Transit & Cold-Chain Monitoring',
    focus: 'Thermal Stability & Logistics Integrity',
    parameters: [
      'Continuous USB/IoT data logger temperature recording',
      'Reefer container set-point audit (0.5°C to 2°C for apples, 13.5°C for bananas)',
      'Ventilation and relative humidity management',
      'Pre-unloading visual seal verification at Navi Mumbai hub'
    ]
  },
  {
    gate: 'Gate 03: Central Facility Sorting & Calibration',
    focus: 'Institutional Retail Compliance Grading',
    parameters: [
      'Optical sortexing and foreign matter filtration',
      'Brix sweetness testing for fruit consignments',
      'Ethylene chamber ripening staging (Color stage 3 to 5)',
      'Retail-grade corrugated packing with moisture-barrier liners'
    ]
  },
  {
    gate: 'Gate 04: Dispatch Dock Final Verification',
    focus: 'SLA Fulfillment & Traceability Handover',
    parameters: [
      'Barcode batch generation linking produce to origin state/grower cluster',
      'Weight cross-verification and crate sealing',
      'Electronic Proof of Delivery (e-POD) generation',
      'Cold-chain transfer directly into client receiving bay'
    ]
  }
];
