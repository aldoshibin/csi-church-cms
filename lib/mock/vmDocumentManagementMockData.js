export const DOCUMENT_TABS = ["All Documents", "My Documents", "Shared with me", "Recent", "Starred", "Trash"];

// Tab set used on the My Documents page (5 tabs — distinct from DOCUMENT_TABS above, which is for All Documents).
export const MY_DOCUMENTS_TABS = ["All", "Folders", "Recent", "Starred", "Trash"];

export const FOLDER_OPTIONS = [
  "Facility Booking", "Sacramental Records", "Finance & Accounting", "Gallery", "Member Management",
  "Volunteer Management", "Sunday School", "Cemetery Management", "Choir & Worship Team", "General",
];

export const TYPE_FILTER_OPTIONS = ["PDF", "DOCX", "XLSX", "JPG", "PNG", "PPTX"];

// Document-purpose categories shown in the All Documents table/column and its filter dropdown.
// Distinct from CATEGORY_OPTIONS below (which is the Upload Document form's category select).
export const TABLE_CATEGORY_OPTIONS = ["Guidelines", "Forms", "Reports", "Policies", "Images", "Presentation", "Schedule"];

export const UPLOADED_BY_FILTER_OPTIONS = ["Parish Office", "John Baptiste", "Sarah Mathew", "Thomas Cherian", "Anita Rajan", "David Christopher"];
export const ACCESS_FILTER_OPTIONS = ["Public", "Restricted", "Confidential"];
export const STATUS_FILTER_OPTIONS = ["Active", "Archived", "Expired"];

export const AVATAR_COLORS = [
  { bg: "#DCFCE7", color: "#16A34A" },
  { bg: "#DBEAFE", color: "#2563EB" },
  { bg: "#FFEDD5", color: "#EA580C" },
  { bg: "#F3E8FF", color: "#7C3AED" },
  { bg: "#FEE2E2", color: "#DC2626" },
  { bg: "#CCFBF1", color: "#0D9488" },
];

export const DOCUMENT_TYPE_OPTIONS = ["PDF Document", "Word Document", "Excel Sheet", "Image File", "Presentation", "Other File"];
export const CATEGORY_OPTIONS = [
  "Policy & Guidelines", "Forms & Applications", "Financial Documents", "Media & Images",
  "Reports", "Legal & Certificates", "Other",
];
export const ACCESS_LEVEL_OPTIONS = ["Public", "Restricted", "Confidential"];
export const ALLOWED_FOR_OPTIONS = [
  "Everyone", "Parish Office", "Parish Office, Facility Booking Team", "Clergy Only",
  "Choir & Worship Team", "All Staff",
];
export const PERMISSIONS_OPTIONS = ["View Only", "View & Download", "View, Download & Edit", "Full Access"];

export const DOCUMENT_TYPE_STYLE = {
  PDF: { badgeVariant: "danger", icon: "FileText", iconColor: "text-[#DC2626]" },
  DOCX: { badgeVariant: "info", icon: "FileType2", iconColor: "text-[#2563EB]" },
  XLSX: { badgeVariant: "success", icon: "FileSpreadsheet", iconColor: "text-[#16A34A]" },
  JPG: { badgeVariant: "accent", icon: "Image", iconColor: "text-[#7C3AED]" },
  PNG: { badgeVariant: "accent", icon: "Image", iconColor: "text-[#7C3AED]" },
  PPTX: { badgeVariant: "warning", icon: "Presentation", iconColor: "text-[#D97706]" },
};

export const DOCUMENT_MANAGEMENT_STATS_MOCK = {
  totalDocuments: 236,
  folders: 18,
  fileSizeUsedLabel: "2.48 GB",
  fileSizeUsedPct: 24.8,
  recentlyAdded: 12,
};

export const STORAGE_OVERVIEW_MOCK = {
  usedLabel: "2.48 GB", usedPct: 24.8,
  availableLabel: "7.52 GB", availablePct: 75.2,
  totalLabel: "10 GB",
  breakdown: [
    { label: "Used", valueLabel: "2.48 GB", value: 2.48, pct: 24.8, color: "#16A34A" },
    { label: "Available", valueLabel: "7.52 GB", value: 7.52, pct: 75.2, color: "#E5E7EB" },
  ],
};

// Storage figures shown on the My Documents page — the current user's own usage, distinct
// from STORAGE_OVERVIEW_MOCK above (that one is the org-wide total shown on Dashboard/All Documents).
export const MY_DOCUMENTS_STORAGE_MOCK = {
  totalLabel: "10 GB",
  breakdown: [
    { label: "Used", valueLabel: "1.38 GB", value: 1.38, pct: 13.8, color: "#16A34A" },
    { label: "Available", valueLabel: "8.62 GB", value: 8.62, pct: 86.2, color: "#E5E7EB" },
  ],
};

export const DOCUMENT_CATEGORIES_MOCK = [
  { label: "PDF Documents", count: 96, icon: "FileText", color: "text-[#DC2626]" },
  { label: "Word Documents", count: 58, icon: "FileType2", color: "text-[#2563EB]" },
  { label: "Excel Sheets", count: 28, icon: "FileSpreadsheet", color: "text-[#16A34A]" },
  { label: "Images", count: 32, icon: "Image", color: "text-[#7C3AED]" },
  { label: "Presentations", count: 14, icon: "Presentation", color: "text-[#D97706]" },
  { label: "Others", count: 8, icon: "File", color: "text-ink-subtle" },
];

export const DOCUMENT_MANAGEMENT_QUICK_ACTIONS = [
  { key: "folder", label: "Create New Folder", description: "Organize documents", icon: "FolderPlus", href: "/document-management/folders" },
  { key: "upload", label: "Upload Documents", description: "Upload files from your device", icon: "UploadCloud", href: "/document-management/upload" },
  { key: "shared", label: "Shared with me", description: "View documents shared with you", icon: "Users", href: "/document-management/shared-documents" },
  { key: "trash", label: "Trash", description: "View deleted documents", icon: "Trash2", href: "/document-management/trash" },
];

// Quick Actions list used on the All Documents page (3 items, matching that mockup — a smaller
// set than the Dashboard's DOCUMENT_MANAGEMENT_QUICK_ACTIONS above).
export const ALL_DOCUMENTS_QUICK_ACTIONS = [
  { key: "upload", label: "Upload Document", description: "Upload files from your device", icon: "UploadCloud", href: "/document-management/upload" },
  { key: "folder", label: "Create New Folder", description: "Organize documents", icon: "FolderPlus", href: "/document-management/folders" },
  { key: "trash", label: "View Trash", description: "View deleted documents", icon: "Trash2", href: "/document-management/trash" },
];

export const DOCUMENT_GUIDELINES_MOCK = [
  "Ensure the document is clear and readable.",
  "Use appropriate document type and category.",
  "Add relevant tags for easy search.",
  "Maximum file size is 50 MB.",
  "Sensitive documents will be access restricted.",
];

export const DOCUMENT_TYPE_EXAMPLES_MOCK = [
  { label: "PDF Document", icon: "FileText", color: "text-[#DC2626]" },
  { label: "Word Document", icon: "FileType2", color: "text-[#2563EB]" },
  { label: "Excel Sheet", icon: "FileSpreadsheet", color: "text-[#16A34A]" },
  { label: "Image File", icon: "Image", color: "text-[#7C3AED]" },
  { label: "Presentation", icon: "Presentation", color: "text-[#D97706]" },
  { label: "Other File", icon: "File", color: "text-ink-subtle" },
];

const DOCUMENTS_SEED = [
  {
    id: "DOC-1001", documentName: "Hall Booking Guidelines.pdf", folder: "Facility Booking", fileType: "PDF", category: "Guidelines",
    uploadedByName: "Parish Office", uploadedByRole: "Admin", size: "1.24 MB", sizeBytes: 1301504, uploadedOn: "2026-05-28T10:30:00",
    starred: false,
    detail: {
      category: "Guidelines",
      lastModified: "2026-05-28T10:30:00",
      description: "Guidelines and terms for booking the church hall including rules, charges and responsibilities.",
      tags: ["guidelines", "booking", "hall"],
      status: "Active", access: "Restricted", allowedFor: "Parish Office, Facility Booking Team", permissions: "View, Download",
    },
  },
  {
    id: "DOC-1002", documentName: "Baptism Registration Form.docx", folder: "Sacramental Records", fileType: "DOCX", category: "Forms",
    uploadedByName: "Parish Office", uploadedByRole: "Admin", size: "245 KB", sizeBytes: 250880, uploadedOn: "2026-05-27T15:15:00",
    starred: false,
    detail: {
      category: "Forms",
      lastModified: "2026-05-27T15:15:00",
      description: "Standard registration form used for recording infant and adult baptisms.",
      tags: ["baptism", "form", "sacrament"],
      status: "Active", access: "Public", allowedFor: "Everyone", permissions: "View & Download",
    },
  },
  {
    id: "DOC-1003", documentName: "April 2026 - Income Report.xlsx", folder: "Finance & Accounting", fileType: "XLSX", category: "Reports",
    uploadedByName: "Parish Office", uploadedByRole: "Admin", size: "512 KB", sizeBytes: 524288, uploadedOn: "2026-05-26T11:45:00",
    starred: false,
    detail: {
      category: "Reports",
      lastModified: "2026-05-26T11:45:00",
      description: "Monthly income and expense summary for April 2026.",
      tags: ["finance", "report", "income"],
      status: "Active", access: "Confidential", allowedFor: "Parish Office", permissions: "View Only",
    },
  },
  {
    id: "DOC-1004", documentName: "Wedding Policy & Guidelines.pdf", folder: "Facility Booking", fileType: "PDF", category: "Policies",
    uploadedByName: "John Baptiste", uploadedByRole: "Staff", size: "890 KB", sizeBytes: 911360, uploadedOn: "2026-05-25T09:20:00",
    starred: false,
    detail: {
      category: "Policies",
      lastModified: "2026-05-25T09:20:00",
      description: "Policy document outlining wedding booking rules, deposits and cancellation terms.",
      tags: ["wedding", "policy", "hall"],
      status: "Active", access: "Public", allowedFor: "Everyone", permissions: "View & Download",
    },
  },
  {
    id: "DOC-1005", documentName: "Church Interior.jpg", folder: "Gallery", fileType: "JPG", category: "Images",
    uploadedByName: "Sarah Mathew", uploadedByRole: "Staff", size: "2.15 MB", sizeBytes: 2254930, uploadedOn: "2026-05-24T14:10:00",
    starred: false,
    detail: {
      category: "Images",
      lastModified: "2026-05-24T14:10:00",
      description: "Photograph of the church sanctuary interior for the gallery.",
      tags: ["gallery", "photo", "church"],
      status: "Active", access: "Public", allowedFor: "Everyone", permissions: "View & Download",
    },
  },
  {
    id: "DOC-1006", documentName: "Membership Application.pdf", folder: "Member Management", fileType: "PDF", category: "Forms",
    uploadedByName: "Parish Office", uploadedByRole: "Admin", size: "630 KB", sizeBytes: 645120, uploadedOn: "2026-05-24T10:05:00",
    starred: false,
    detail: {
      category: "Forms",
      lastModified: "2026-05-24T10:05:00",
      description: "Application form for new church membership registration.",
      tags: ["membership", "form"],
      status: "Active", access: "Public", allowedFor: "Everyone", permissions: "View & Download",
    },
  },
  {
    id: "DOC-1007", documentName: "Volunteer Guidelines.docx", folder: "Volunteer Management", fileType: "DOCX", category: "Guidelines",
    uploadedByName: "Thomas Cherian", uploadedByRole: "Staff", size: "320 KB", sizeBytes: 327680, uploadedOn: "2026-05-23T16:40:00",
    starred: false,
    detail: {
      category: "Guidelines",
      lastModified: "2026-05-23T16:40:00",
      description: "Guidelines and expectations for church volunteers across ministries.",
      tags: ["volunteer", "guidelines"],
      status: "Active", access: "Restricted", allowedFor: "All Staff", permissions: "View, Download & Edit",
    },
  },
  {
    id: "DOC-1008", documentName: "Children Sunday School Presentation.pptx", folder: "Sunday School", fileType: "PPTX", category: "Presentation",
    uploadedByName: "Anita Rajan", uploadedByRole: "Teacher", size: "5.52 MB", sizeBytes: 5788058, uploadedOn: "2026-05-22T11:30:00",
    starred: false,
    detail: {
      category: "Presentation",
      lastModified: "2026-05-22T11:30:00",
      description: "Slide deck used for the children's Sunday school lesson.",
      tags: ["sunday-school", "presentation"],
      status: "Active", access: "Restricted", allowedFor: "All Staff", permissions: "View & Download",
    },
  },
  {
    id: "DOC-1009", documentName: "Funeral Procedure Guide.pdf", folder: "Cemetery Management", fileType: "PDF", category: "Guidelines",
    uploadedByName: "Parish Office", uploadedByRole: "Admin", size: "760 KB", sizeBytes: 778240, uploadedOn: "2026-05-21T09:15:00",
    starred: false,
    detail: {
      category: "Guidelines",
      lastModified: "2026-05-21T09:15:00",
      description: "Step-by-step procedure guide for arranging funerals and burials.",
      tags: ["cemetery", "funeral", "procedure"],
      status: "Active", access: "Restricted", allowedFor: "Clergy Only", permissions: "View Only",
    },
  },
  {
    id: "DOC-1010", documentName: "Choir Practice Schedule.docx", folder: "Choir & Worship Team", fileType: "DOCX", category: "Schedule",
    uploadedByName: "David Christopher", uploadedByRole: "Choir Leader", size: "180 KB", sizeBytes: 184320, uploadedOn: "2026-05-20T18:00:00",
    starred: true,
    detail: {
      category: "Schedule",
      lastModified: "2026-05-20T18:00:00",
      description: "Weekly rehearsal and performance schedule for the choir.",
      tags: ["choir", "schedule"],
      status: "Active", access: "Restricted", allowedFor: "Choir & Worship Team", permissions: "View & Download",
    },
  },
];

export const DOCUMENTS_LIST_MOCK = Array.from({ length: 236 }, (_, i) => {
  const seed = DOCUMENTS_SEED[i % DOCUMENTS_SEED.length];
  if (i < DOCUMENTS_SEED.length) return seed;
  return { ...seed, id: `DOC-${String(1011 + i).padStart(4, "0")}` };
});

// Padded to 42 to match the My Documents mockup's "Showing 1 to 8 of 42 documents" total.
// (Reuses the same 10-record seed as DOCUMENTS_LIST_MOCK above — the two lists intentionally
// carry different totals per this project's convention of matching each mockup's own numbers.)
export const MY_DOCUMENTS_LIST_MOCK = Array.from({ length: 42 }, (_, i) => {
  const seed = DOCUMENTS_SEED[i % DOCUMENTS_SEED.length];
  if (i < DOCUMENTS_SEED.length) return seed;
  return { ...seed, id: `DOC-MY-${String(1011 + i).padStart(4, "0")}` };
});

export function buildDocumentManagementDetailMock(id) {
  const found = DOCUMENTS_SEED.find((d) => d.id === id) || DOCUMENTS_SEED[0];
  return { ...found, id: id || found.id };
}

export const NEW_DOCUMENT_MANAGEMENT_DEFAULTS = {
  documentName: "", documentType: "", category: "", folder: "", tags: "", description: "",
  expiryDate: "", accessLevel: "", allowedFor: "", permissions: "", notifyUsers: false,
};
