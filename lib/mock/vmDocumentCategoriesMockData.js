export const CATEGORY_COLOR_OPTIONS = [
  { name: "Purple", hex: "#A78BFA" },
  { name: "Green", hex: "#DCFCE7" },
  { name: "Pink", hex: "#FFE5E5" },
  { name: "Orange", hex: "#FFEDD5" },
  { name: "Teal", hex: "#CCFBF1" },
  { name: "Blue", hex: "#DBEAFE" },
];

export const CATEGORY_STATUS_FILTER_OPTIONS = ["Active", "Inactive"];

export const DOCUMENT_CATEGORIES_STORAGE_MOCK = {
  totalLabel: "10 GB",
  breakdown: [
    { label: "Used", valueLabel: "1.38 GB", value: 1.38, pct: 13.8, color: "#16A34A" },
    { label: "Other Documents", valueLabel: "8.62 GB", value: 8.62, pct: 86.2, color: "#E5E7EB" },
  ],
};

export const DOCUMENT_CATEGORIES_QUICK_ACTIONS = [
  { key: "new-category", label: "New Category", description: "Create a new document category", icon: "Plus", href: "/document-management/document-categories/add" },
  { key: "manage", label: "Manage Categories", description: "Edit or delete existing categories", icon: "Pencil", href: "/document-management/document-categories" },
  { key: "report", label: "Category Report", description: "View category wise document report", icon: "BarChart3", href: "/document-management/document-reports" },
];

export const CATEGORY_VIEW_QUICK_ACTIONS = [
  { key: "edit", label: "Edit Category", description: "Update category details", icon: "Pencil", href: "/document-management/document-categories" },
  { key: "add-sub", label: "Add Subcategory", description: "Create a subcategory", icon: "Plus", href: "/document-management/document-categories/add" },
  { key: "report", label: "Category Report", description: "View category wise report", icon: "BarChart3", href: "/document-management/document-reports" },
  { key: "share", label: "Share Category", description: "Share with team members", icon: "Share2", href: "/document-management/document-categories" },
  { key: "export", label: "Export Documents List", description: "Export list to Excel", icon: "FileDown", href: "/document-management/document-categories" },
];

export const CATEGORIES_SEED = [
  {
    id: "CAT-1001", name: "Administration", description: "General administrative documents and church office records",
    icon: "Folder", iconBg: "bg-[#DCFCE7]", iconColor: "text-[#16A34A]", colorHex: "#DCFCE7",
    documentsCount: 18, totalSizeLabel: "6.10 GB", createdOn: "2026-05-20T00:00:00", lastUpdated: "2026-05-23T11:10:00",
    createdByName: "Thomas Cherian", createdByRole: "Administrator", status: "Active", subcategoriesCount: 1,
  },
  {
    id: "CAT-1002", name: "Finance", description: "Financial statements, budgets, and accounting documents",
    icon: "Folder", iconBg: "bg-[#FFE5E5]", iconColor: "text-[#EF4444]", colorHex: "#FFE5E5",
    documentsCount: 28, totalSizeLabel: "12.45 GB", createdOn: "2026-05-18T16:25:00", lastUpdated: "2026-05-24T14:15:00",
    createdByName: "David Christopher", createdByRole: "Finance Manager", status: "Active", subcategoriesCount: 2,
  },
  {
    id: "CAT-1003", name: "Ministries", description: "Ministry related documents and reports",
    icon: "Folder", iconBg: "bg-[#FFEDD5]", iconColor: "text-[#EA580C]", colorHex: "#FFEDD5",
    documentsCount: 15, totalSizeLabel: "4.80 GB", createdOn: "2026-05-15T00:00:00", lastUpdated: "2026-05-21T09:30:00",
    createdByName: "Sarah Mathew", createdByRole: "Parish Secretary", status: "Active", subcategoriesCount: 0,
  },
  {
    id: "CAT-1004", name: "Sacramental Records", description: "Baptism, marriage, and other sacramental documents",
    icon: "BookOpen", iconBg: "bg-[#F3E8FF]", iconColor: "text-[#7C3AED]", colorHex: "#F3E8FF",
    documentsCount: 20, totalSizeLabel: "5.90 GB", createdOn: "2026-05-12T00:00:00", lastUpdated: "2026-05-19T15:40:00",
    createdByName: "Anita Rajan", createdByRole: "Sunday School Teacher", status: "Active", subcategoriesCount: 0,
  },
  {
    id: "CAT-1005", name: "Human Resources", description: "Staff, volunteers, and HR related documents",
    icon: "Users", iconBg: "bg-[#CCFBF1]", iconColor: "text-[#0D9488]", colorHex: "#CCFBF1",
    documentsCount: 12, totalSizeLabel: "2.30 GB", createdOn: "2026-05-10T00:00:00", lastUpdated: "2026-05-17T10:20:00",
    createdByName: "John Baptiste", createdByRole: "Staff", status: "Active", subcategoriesCount: 0,
  },
  {
    id: "CAT-1006", name: "Property & Assets", description: "Church property, assets and inventory documents",
    icon: "Home", iconBg: "bg-[#DBEAFE]", iconColor: "text-[#2563EB]", colorHex: "#DBEAFE",
    documentsCount: 8, totalSizeLabel: "1.60 GB", createdOn: "2026-05-08T00:00:00", lastUpdated: "2026-05-14T09:45:00",
    createdByName: "Parish Office", createdByRole: "Administrator", status: "Active", subcategoriesCount: 0,
  },
  {
    id: "CAT-1007", name: "Events & Programs", description: "Event planning, programs and related documents",
    icon: "Calendar", iconBg: "bg-[#FFEDD5]", iconColor: "text-[#EA580C]", colorHex: "#FFEDD5",
    documentsCount: 9, totalSizeLabel: "1.90 GB", createdOn: "2026-05-05T00:00:00", lastUpdated: "2026-05-12T14:30:00",
    createdByName: "Thomas Cherian", createdByRole: "Administrator", status: "Active", subcategoriesCount: 0,
  },
  {
    id: "CAT-1008", name: "Communication", description: "Letters, circulars, and communication records",
    icon: "Mail", iconBg: "bg-[#F3E8FF]", iconColor: "text-[#7C3AED]", colorHex: "#F3E8FF",
    documentsCount: 7, totalSizeLabel: "0.90 GB", createdOn: "2026-05-03T00:00:00", lastUpdated: "2026-05-09T11:15:00",
    createdByName: "Sarah Mathew", createdByRole: "Parish Secretary", status: "Inactive", subcategoriesCount: 0,
  },
  {
    id: "CAT-1009", name: "Legal & Compliance", description: "Legal documents, policies and compliance records",
    icon: "FileText", iconBg: "bg-[#DBEAFE]", iconColor: "text-[#2563EB]", colorHex: "#DBEAFE",
    documentsCount: 6, totalSizeLabel: "0.70 GB", createdOn: "2026-04-30T00:00:00", lastUpdated: "2026-05-05T17:05:00",
    createdByName: "David Christopher", createdByRole: "Finance Manager", status: "Active", subcategoriesCount: 0,
  },
  {
    id: "CAT-1010", name: "Archives", description: "Old records and archived documents",
    icon: "Archive", iconBg: "bg-[#DCFCE7]", iconColor: "text-[#16A34A]", colorHex: "#DCFCE7",
    documentsCount: 5, totalSizeLabel: "0.40 GB", createdOn: "2026-04-28T00:00:00", lastUpdated: "2026-05-02T12:30:00",
    createdByName: "Thomas Cherian", createdByRole: "Administrator", status: "Inactive", subcategoriesCount: 0,
  },
];

export const CATEGORIES_LIST_MOCK = CATEGORIES_SEED;

export const PARENT_CATEGORY_OPTIONS = CATEGORIES_SEED.map((c) => c.name);

const CATEGORY_DOCUMENTS_SEED = [
  { documentName: "Annual Budget 2026-27.pdf", fileType: "PDF", size: "1.24 MB", uploadedByName: "David Christopher", uploadedByRole: "Finance Manager", uploadedOn: "2026-05-18T04:25:00" },
  { documentName: "Q1 Financial Statement.xlsx", fileType: "XLSX", size: "256 KB", uploadedByName: "David Christopher", uploadedByRole: "Finance Manager", uploadedOn: "2026-05-18T03:10:00" },
  { documentName: "March Expense Report.pdf", fileType: "PDF", size: "512 KB", uploadedByName: "Sarah Mathew", uploadedByRole: "Parish Secretary", uploadedOn: "2026-05-17T11:30:00" },
  { documentName: "Vendor Payment Summary.docx", fileType: "DOCX", size: "198 KB", uploadedByName: "Anita Rajan", uploadedByRole: "Accounts Assistant", uploadedOn: "2026-05-17T10:15:00" },
  { documentName: "Budget vs Actual 2026.xlsx", fileType: "XLSX", size: "320 KB", uploadedByName: "David Christopher", uploadedByRole: "Finance Manager", uploadedOn: "2026-05-16T06:45:00" },
];

const CATEGORY_ACTIVITY_LOG_SEED = [
  { action: "Category created", byName: "David Christopher", on: "2026-05-18T16:25:00" },
  { action: "Description updated", byName: "David Christopher", on: "2026-05-20T09:10:00" },
  { action: "5 documents uploaded", byName: "Sarah Mathew", on: "2026-05-22T14:00:00" },
  { action: "Category last updated", byName: "David Christopher", on: "2026-05-24T14:15:00" },
];

export function buildCategoryDetailMock(id) {
  const base = CATEGORIES_SEED.find((c) => c.id === id) ?? CATEGORIES_SEED[1];
  const documents = Array.from({ length: base.documentsCount }, (_, i) => {
    const seed = CATEGORY_DOCUMENTS_SEED[i % CATEGORY_DOCUMENTS_SEED.length];
    return { id: `${base.id}-DOC-${i + 1}`, ...seed };
  });
  const activityLog = CATEGORY_ACTIVITY_LOG_SEED.map((a, i) => ({ id: `${base.id}-LOG-${i + 1}`, ...a }));
  const subcategories = Array.from({ length: base.subcategoriesCount }, (_, i) => ({
    id: `${base.id}-SUB-${i + 1}`, name: `${base.name} - Sub ${i + 1}`, documentsCount: Math.max(1, Math.round(base.documentsCount / (base.subcategoriesCount + 1))),
  }));
  return { ...base, documents, activityLog, subcategories };
}

export const NEW_CATEGORY_DEFAULTS = {
  categoryName: "", categoryColor: CATEGORY_COLOR_OPTIONS[0].hex, description: "",
  parentCategory: "", displayOrder: 0, status: true, allowSubcategories: true,
};

export const CATEGORY_GUIDELINES_MOCK = [
  "Use clear and meaningful names",
  "Choose appropriate colors for easy identification",
  "Add a description to help users understand the category purpose",
  "Organize categories in a logical hierarchy",
  "Keep categories updated and relevant",
];
