export const SHARED_TYPE_FILTER_OPTIONS = ["PDF", "DOCX", "DOC", "XLSX", "PPTX", "JPG", "TXT"];
export const SHARED_STATUS_FILTER_OPTIONS = ["Active", "Expired", "Revoked"];
export const SHARED_BY_FILTER_OPTIONS = ["Thomas Cherian", "Sarah Mathew", "David Christopher", "Anita Rajan", "John Baptiste", "Parish Office"];

export const SHARED_DOCUMENTS_QUICK_ACTIONS = [
  { key: "shared-by-me", label: "Shared By Me", description: "View documents you shared", icon: "Share2", href: "/document-management/shared-documents" },
  { key: "starred", label: "Starred Shared Documents", description: "View starred items", icon: "Star", href: "/document-management/starred-documents" },
  { key: "download-multiple", label: "Download Multiple", description: "Download selected documents", icon: "Download", href: "/document-management/shared-documents" },
];

export const SHARED_STORAGE_MOCK = {
  totalLabel: "1.12 GB",
  breakdown: [
    { label: "Shared Used", valueLabel: "1.12 GB", value: 1.12, pct: 11.2, color: "#16A34A" },
    { label: "Other Documents", valueLabel: "8.88 GB", value: 8.88, pct: 88.8, color: "#E5E7EB" },
  ],
};

const SHARED_DOCUMENTS_SEED = [
  {
    id: "SHR-1001", documentName: "Hall Booking Guidelines.pdf", shortDescription: "Guidelines for hall booking",
    folder: "Facility Booking", fileType: "PDF", starred: true,
    sharedByName: "Thomas Cherian", sharedByRole: "Administrator",
    sharedOn: "2026-05-28T10:30:00", expiresOn: "2026-06-28T23:59:00",
    detail: {
      category: "Guidelines", fileSize: "1.24 MB",
      description: "Guidelines and terms for booking the church hall including rules, charges and responsibilities.",
      tags: ["guidelines", "booking", "hall"], status: "Active",
      accessLevel: "View Only", allowedFor: "All Users", permissions: "View", downloadAllowed: "Allowed",
    },
  },
  {
    id: "SHR-1002", documentName: "Baptism Registration Form.docx", shortDescription: "Registration form template",
    folder: "Sacramental Records", fileType: "DOCX", starred: false,
    sharedByName: "Sarah Mathew", sharedByRole: "Parish Secretary",
    sharedOn: "2026-05-27T15:15:00", expiresOn: "2026-06-27T23:59:00",
    detail: {
      category: "Forms", fileSize: "245 KB",
      description: "Standard registration form used for recording infant and adult baptisms.",
      tags: ["baptism", "form", "sacrament"], status: "Active",
      accessLevel: "View & Download", allowedFor: "All Users", permissions: "View, Download", downloadAllowed: "Allowed",
    },
  },
  {
    id: "SHR-1003", documentName: "April 2026 - Income Report.xlsx", shortDescription: "Monthly income report",
    folder: "Finance & Accounting", fileType: "XLSX", starred: false,
    sharedByName: "David Christopher", sharedByRole: "Finance Manager",
    sharedOn: "2026-05-26T11:45:00", expiresOn: "2026-06-26T23:59:00",
    detail: {
      category: "Reports", fileSize: "512 KB",
      description: "Monthly income and expense summary for April 2026.",
      tags: ["finance", "report", "income"], status: "Active",
      accessLevel: "View Only", allowedFor: "Parish Office", permissions: "View", downloadAllowed: "Not Allowed",
    },
  },
  {
    id: "SHR-1004", documentName: "Children Sunday School Plan.pptx", shortDescription: "May month presentation",
    folder: "Sunday School", fileType: "PPTX", starred: false,
    sharedByName: "Anita Rajan", sharedByRole: "Sunday School Teacher",
    sharedOn: "2026-05-25T09:20:00", expiresOn: "2026-06-25T23:59:00",
    detail: {
      category: "Presentation", fileSize: "5.52 MB",
      description: "Lesson plan and slide deck for the May Sunday school sessions.",
      tags: ["sunday-school", "presentation"], status: "Active",
      accessLevel: "View & Download", allowedFor: "All Users", permissions: "View, Download", downloadAllowed: "Allowed",
    },
  },
  {
    id: "SHR-1005", documentName: "Church Interior.jpg", shortDescription: "Renovation reference image",
    folder: "Gallery", fileType: "JPG", starred: false,
    sharedByName: "John Baptiste", sharedByRole: "Staff",
    sharedOn: "2026-05-24T14:10:00", expiresOn: "2026-06-23T23:59:00",
    detail: {
      category: "Images", fileSize: "2.15 MB",
      description: "Photograph of the church sanctuary interior, shared as a reference for the renovation committee.",
      tags: ["gallery", "photo", "renovation"], status: "Active",
      accessLevel: "View Only", allowedFor: "All Users", permissions: "View", downloadAllowed: "Not Allowed",
    },
  },
  {
    id: "SHR-1006", documentName: "Membership Application.pdf", shortDescription: "Application form",
    folder: "Member Management", fileType: "PDF", starred: false,
    sharedByName: "Parish Office", sharedByRole: "Administrator",
    sharedOn: "2026-05-24T10:05:00", expiresOn: "2026-06-24T23:59:00",
    detail: {
      category: "Forms", fileSize: "630 KB",
      description: "Application form for new church membership registration.",
      tags: ["membership", "form"], status: "Active",
      accessLevel: "View & Download", allowedFor: "All Users", permissions: "View, Download", downloadAllowed: "Allowed",
    },
  },
  {
    id: "SHR-1007", documentName: "Volunteer Guidelines.doc", shortDescription: "Guidelines for volunteers",
    folder: "Volunteer Management", fileType: "DOC", starred: true,
    sharedByName: "Thomas Cherian", sharedByRole: "Volunteer Coordinator",
    sharedOn: "2026-05-23T16:40:00", expiresOn: "2026-06-22T23:59:00",
    detail: {
      category: "Guidelines", fileSize: "320 KB",
      description: "Guidelines and expectations for church volunteers across ministries.",
      tags: ["volunteer", "guidelines"], status: "Active",
      accessLevel: "View & Download", allowedFor: "All Users", permissions: "View, Download", downloadAllowed: "Allowed",
    },
  },
  {
    id: "SHR-1008", documentName: "Event Schedule - May.txt", shortDescription: "Upcoming events schedule",
    folder: "Communication Module", fileType: "TXT", starred: false,
    sharedByName: "Sarah Mathew", sharedByRole: "Parish Secretary",
    sharedOn: "2026-05-22T11:30:00", expiresOn: "2026-06-21T23:59:00",
    detail: {
      category: "Schedule", fileSize: "12 KB",
      description: "Plain-text list of upcoming parish events for May.",
      tags: ["events", "schedule"], status: "Active",
      accessLevel: "View Only", allowedFor: "All Users", permissions: "View", downloadAllowed: "Allowed",
    },
  },
];

export const SHARED_DOCUMENTS_LIST_MOCK = Array.from({ length: 28 }, (_, i) => {
  const seed = SHARED_DOCUMENTS_SEED[i % SHARED_DOCUMENTS_SEED.length];
  if (i < SHARED_DOCUMENTS_SEED.length) return seed;
  return { ...seed, id: `SHR-${String(1009 + i).padStart(4, "0")}` };
});

export function buildSharedDocumentDetailMock(id) {
  const found = SHARED_DOCUMENTS_SEED.find((d) => d.id === id) || SHARED_DOCUMENTS_SEED[0];
  return { ...found, id: id || found.id };
}
