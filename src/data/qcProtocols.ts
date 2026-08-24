export interface QCProtocol {
  gate: string;
  focus: string;
  parameters: string[];
}

export const qcInspectionProtocols: QCProtocol[] = [
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
