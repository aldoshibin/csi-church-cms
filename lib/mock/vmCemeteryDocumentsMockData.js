export const DOCUMENT_TYPE_OPTIONS = ["Certificate", "Image", "Record", "Map", "Letter", "Receipt", "Document", "Other"];
export const RELATED_TO_OPTIONS = ["Deceased", "Plot", "Burial Record", "Section / Plot", "General"];
export const UPLOADED_BY_OPTIONS = ["Parish Office"];
export const CATEGORY_OPTIONS = ["Certificate", "Image", "Record", "Map", "Letter", "Receipt", "Document", "Other"];
export const CONFIDENTIAL_OPTIONS = ["Yes", "No"];

export const DOCUMENT_TYPE_STYLE = {
  Certificate: { icon: "FileText", bg: "bg-[#FEE2E2]", color: "text-[#DC2626]" },
  Image: { icon: "Image", bg: "bg-[#DCFCE7]", color: "text-[#16A34A]" },
  Record: { icon: "FileType2", bg: "bg-[#DBEAFE]", color: "text-[#2563EB]" },
  Map: { icon: "Map", bg: "bg-[#DCFCE7]", color: "text-[#16A34A]" },
  Letter: { icon: "Mail", bg: "bg-[#FEE2E2]", color: "text-[#DC2626]" },
  Receipt: { icon: "Receipt", bg: "bg-[#FEE2E2]", color: "text-[#DC2626]" },
  Document: { icon: "FileType2", bg: "bg-[#DBEAFE]", color: "text-[#2563EB]" },
  Other: { icon: "File", bg: "bg-surface-muted", color: "text-ink-subtle" },
};

export const DOCUMENT_TYPES_GUIDE = [
  { label: "Certificate", description: "Birth, No Objection, Transfer, etc.", icon: "FileCheck", bg: "bg-[#DBEAFE]", color: "text-[#2563EB]" },
  { label: "Image", description: "Photos, Scanned Images, etc.", icon: "Image", bg: "bg-[#DCFCE7]", color: "text-[#16A34A]" },
  { label: "Record", description: "Burial Records, Deed, etc.", icon: "FileType2", bg: "bg-[#FEE2E2]", color: "text-[#DC2626]" },
  { label: "Map", description: "Plot Maps, Layouts, etc.", icon: "Map", bg: "bg-[#DCFCE7]", color: "text-[#16A34A]" },
  { label: "Letter", description: "Official Letters, Requests, etc.", icon: "Mail", bg: "bg-[#E0E7FF]", color: "text-[#4F46E5]" },
  { label: "Receipt", description: "Payments, Fees, Donations, etc.", icon: "Receipt", bg: "bg-[#FEF3C7]", color: "text-[#D97706]" },
  { label: "Other", description: "Other relevant documents", icon: "MoreHorizontal", bg: "bg-surface-muted", color: "text-ink-subtle" },
];

export const STORAGE_OVERVIEW_MOCK = {
  usedLabel: "2.48 GB",
  usedGb: 2.48,
  totalGb: 10,
  breakdown: [
    { label: "Used", value: 2.48, pct: 24.8, color: "#16A34A" },
    { label: "Available", value: 7.52, pct: 75.2, color: "#E5E7EB" },
  ],
};

export const DOCUMENT_SUMMARY_MOCK = {
  totalDocuments: 86,
  certificates: 28,
  images: 24,
  documents: 18,
  maps: 6,
  receipts: 10,
};

const DOCUMENTS_SEED = [
  {
    id: "DOC-2026-001", documentName: "Burial Certificate - Samuel John", documentType: "Certificate",
    relatedTo: "Deceased", relatedId: "DEC-512", uploadedBy: "Parish Office", uploadDate: "2026-05-24T10:30:00",
    size: "256 KB", fileType: "PDF", fileName: "burial_certificate_samuel_john.pdf",
    description: "Burial certificate issued for Mr. Samuel John.",
    related: { deceasedName: "Mr. Samuel John", dateOfDeath: "2026-05-20", burialRecordId: "BUR-2026-018", sectionPlot: "Section A / A-12" },
    additional: { remarks: "Official burial certificate issued by church committee.", category: "Certificate", tags: ["Burial"], status: "Active" },
  },
  {
    id: "DOC-2026-002", documentName: "Grave Photo - Section A / A-12", documentType: "Image",
    relatedTo: "Plot", relatedId: "PLOT-125", uploadedBy: "Parish Office", uploadDate: "2026-05-24T10:15:00",
    size: "1.2 MB", fileType: "JPG", fileName: "grave_photo_section_a_a12.jpg",
    description: "Photograph of the grave site at Section A / A-12.",
    related: { deceasedName: "-", dateOfDeath: "-", burialRecordId: "-", sectionPlot: "Section A / A-12" },
    additional: { remarks: "Captured during routine plot inspection.", category: "Image", tags: ["Plot"], status: "Active" },
  },
  {
    id: "DOC-2026-003", documentName: "No Objection Certificate", documentType: "Certificate",
    relatedTo: "Deceased", relatedId: "DEC-511", uploadedBy: "Parish Office", uploadDate: "2026-05-22T14:45:00",
    size: "312 KB", fileType: "PDF", fileName: "no_objection_certificate.pdf",
    description: "No objection certificate for burial transfer.",
    related: { deceasedName: "Mrs. Mary Elizabeth", dateOfDeath: "2026-05-18", burialRecordId: "BUR-2026-017", sectionPlot: "Section A / A-11" },
    additional: { remarks: "Issued for family records.", category: "Certificate", tags: ["Burial"], status: "Active" },
  },
  {
    id: "DOC-2026-004", documentName: "Burial Record - Mary Elizabeth", documentType: "Record",
    relatedTo: "Deceased", relatedId: "DEC-511", uploadedBy: "Parish Office", uploadDate: "2026-05-22T11:20:00",
    size: "89 KB", fileType: "DOCX", fileName: "burial_record_mary_elizabeth.docx",
    description: "Burial record document for Mrs. Mary Elizabeth.",
    related: { deceasedName: "Mrs. Mary Elizabeth", dateOfDeath: "2026-05-18", burialRecordId: "BUR-2026-017", sectionPlot: "Section A / A-11" },
    additional: { remarks: "Filed with cemetery office.", category: "Record", tags: ["Burial"], status: "Active" },
  },
  {
    id: "DOC-2026-005", documentName: "Plot Map - Section B", documentType: "Map",
    relatedTo: "Section / Plot", relatedId: "SEC-B", uploadedBy: "Parish Office", uploadDate: "2026-05-21T16:10:00",
    size: "1.8 MB", fileType: "PNG", fileName: "plot_map_section_b.png",
    description: "Layout map of Section B plots.",
    related: { deceasedName: "-", dateOfDeath: "-", burialRecordId: "-", sectionPlot: "Section B" },
    additional: { remarks: "Updated after latest plot survey.", category: "Map", tags: ["Plot Map"], status: "Active" },
  },
  {
    id: "DOC-2026-006", documentName: "Transfer Letter - Daniel Abraham", documentType: "Letter",
    relatedTo: "Deceased", relatedId: "DEC-510", uploadedBy: "Parish Office", uploadDate: "2026-05-20T09:50:00",
    size: "245 KB", fileType: "PDF", fileName: "transfer_letter_daniel_abraham.pdf",
    description: "Transfer letter for plot reassignment.",
    related: { deceasedName: "Mr. Daniel Abraham", dateOfDeath: "2026-05-15", burialRecordId: "BUR-2026-015", sectionPlot: "Section B / B-04" },
    additional: { remarks: "Approved by parish office.", category: "Letter", tags: ["Transfer"], status: "Active" },
  },
  {
    id: "DOC-2026-007", documentName: "Grave Maintenance Before", documentType: "Image",
    relatedTo: "Plot", relatedId: "PLOT-112", uploadedBy: "Parish Office", uploadDate: "2026-05-19T15:30:00",
    size: "980 KB", fileType: "JPG", fileName: "grave_maintenance_before.jpg",
    description: "Condition of plot before maintenance work.",
    related: { deceasedName: "-", dateOfDeath: "-", burialRecordId: "-", sectionPlot: "Plot 112" },
    additional: { remarks: "Attached to maintenance request.", category: "Image", tags: ["Maintenance"], status: "Active" },
  },
  {
    id: "DOC-2026-008", documentName: "Grave Maintenance After", documentType: "Image",
    relatedTo: "Plot", relatedId: "PLOT-112", uploadedBy: "Parish Office", uploadDate: "2026-05-19T15:32:00",
    size: "1.1 MB", fileType: "JPG", fileName: "grave_maintenance_after.jpg",
    description: "Condition of plot after maintenance work.",
    related: { deceasedName: "-", dateOfDeath: "-", burialRecordId: "-", sectionPlot: "Plot 112" },
    additional: { remarks: "Maintenance completed and verified.", category: "Image", tags: ["Maintenance"], status: "Active" },
  },
  {
    id: "DOC-2026-009", documentName: "Payment Receipt - Plot 125", documentType: "Receipt",
    relatedTo: "Plot", relatedId: "PLOT-125", uploadedBy: "Parish Office", uploadDate: "2026-05-18T10:05:00",
    size: "198 KB", fileType: "PDF", fileName: "payment_receipt_plot_125.pdf",
    description: "Payment receipt for plot allocation fee.",
    related: { deceasedName: "-", dateOfDeath: "-", burialRecordId: "-", sectionPlot: "Plot 125" },
    additional: { remarks: "Payment received in full.", category: "Receipt", tags: ["Payment"], status: "Active" },
  },
  {
    id: "DOC-2026-010", documentName: "Cemetery Rules & Guidelines", documentType: "Document",
    relatedTo: "General", relatedId: "-", uploadedBy: "Parish Office", uploadDate: "2026-05-15T14:00:00",
    size: "112 KB", fileType: "DOCX", fileName: "cemetery_rules_guidelines.docx",
    description: "General rules and guidelines for the cemetery.",
    related: { deceasedName: "-", dateOfDeath: "-", burialRecordId: "-", sectionPlot: "-" },
    additional: { remarks: "Shared with all parish office staff.", category: "Document", tags: ["Guidelines"], status: "Active" },
  },
];

export const DOCUMENTS_LIST_MOCK = Array.from({ length: 86 }, (_, i) => {
  const seed = DOCUMENTS_SEED[i % DOCUMENTS_SEED.length];
  if (i < DOCUMENTS_SEED.length) return seed;
  return { ...seed, id: `DOC-2026-${String(11 + i).padStart(3, "0")}` };
});

export function buildDocumentDetailMock(id) {
  const found = DOCUMENTS_SEED.find((d) => d.id === id) || DOCUMENTS_SEED[0];
  return { ...found, id: id || found.id };
}

export const NEW_DOCUMENT_DEFAULTS = {
  documentName: "", documentType: "", relatedTo: "", relatedId: "", description: "", tags: "",
  category: "", confidential: "", remarks: "",
};
