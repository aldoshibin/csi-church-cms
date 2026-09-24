export const REPORTS_DATE_RANGE_OPTIONS = ["Last 30 Days", "Last 3 Months", "Last 6 Months", "This Year", "Custom Range"];
export const REPORTS_CATEGORY_OPTIONS = [
  "Finance", "Ministries", "Sacramental Records", "Human Resources", "Property & Assets",
  "Events & Programs", "Communication", "Legal & Compliance", "Archives", "Administration",
];
export const REPORTS_TYPE_OPTIONS = ["PDF", "DOCX", "XLSX", "PPTX", "JPG", "TXT"];

export const DOCUMENT_REPORTS_STATS_MOCK = {
  totalDocuments: { value: 128, trendPct: 12, trendUp: true, sub: "Compared to previous 6 months" },
  totalCategories: { value: 10, trendPct: 0, trendUp: null, sub: "No change" },
  totalUploads: { value: 124, trendPct: 15, trendUp: true, sub: "Compared to previous 6 months" },
  totalDownloads: { value: 96, trendPct: 18, trendUp: true, sub: "Compared to previous 6 months" },
};

export const DOCUMENTS_BY_CATEGORY_MOCK = {
  total: 128,
  breakdown: [
    { label: "Finance", value: 28, pct: 21.9, color: "#2563EB" },
    { label: "Ministries", value: 15, pct: 11.7, color: "#16A34A" },
    { label: "Sacramental Records", value: 20, pct: 15.6, color: "#DC2626" },
    { label: "Human Resources", value: 12, pct: 9.4, color: "#F59E0B" },
    { label: "Property & Assets", value: 8, pct: 6.3, color: "#0D9488" },
    { label: "Events & Programs", value: 9, pct: 7.0, color: "#7C3AED" },
    { label: "Others", value: 36, pct: 28.1, color: "#DC2626" },
  ],
};

export const DOCUMENT_ACTIVITY_TREND_MOCK = {
  months: ["Nov", "Dec", "Jan", "Feb", "Mar", "Apr"],
  uploads: [14, 17, 15, 22, 30, 24],
  downloads: [10, 12, 11, 16, 20, 19],
};

export const TOP_CATEGORIES_BY_DOCUMENTS_MOCK = [
  { label: "Finance", value: 28, pct: 21.9, color: "#2563EB" },
  { label: "Ministries", value: 15, pct: 11.7, color: "#16A34A" },
  { label: "Sacramental Records", value: 20, pct: 15.6, color: "#7C3AED" },
  { label: "Human Resources", value: 12, pct: 9.4, color: "#EA580C" },
  { label: "Property & Assets", value: 8, pct: 6.3, color: "#0D9488" },
];

export const CATEGORY_WISE_REPORT_MOCK = [
  { id: "CAT-1002", name: "Finance", icon: "Folder", iconBg: "bg-[#FFE5E5]", iconColor: "text-[#EF4444]", totalDocuments: 28, uploads: 24, uploadsTrendPct: 18, downloads: 18, downloadsTrendPct: 20, lastActivity: "2026-05-18T16:25:00" },
  { id: "CAT-1003", name: "Ministries", icon: "Folder", iconBg: "bg-[#FFEDD5]", iconColor: "text-[#EA580C]", totalDocuments: 15, uploads: 12, uploadsTrendPct: 11, downloads: 10, downloadsTrendPct: 14, lastActivity: "2026-05-15T15:10:00" },
  { id: "CAT-1004", name: "Sacramental Records", icon: "BookOpen", iconBg: "bg-[#F3E8FF]", iconColor: "text-[#7C3AED]", totalDocuments: 20, uploads: 16, uploadsTrendPct: 19, downloads: 12, downloadsTrendPct: 22, lastActivity: "2026-05-12T13:15:00" },
  { id: "CAT-1005", name: "Human Resources", icon: "Users", iconBg: "bg-[#CCFBF1]", iconColor: "text-[#0D9488]", totalDocuments: 12, uploads: 10, uploadsTrendPct: 9, downloads: 8, downloadsTrendPct: 13, lastActivity: "2026-05-10T10:20:00" },
  { id: "CAT-1006", name: "Property & Assets", icon: "Home", iconBg: "bg-[#DBEAFE]", iconColor: "text-[#2563EB]", totalDocuments: 8, uploads: 7, uploadsTrendPct: 0, downloads: 6, downloadsTrendPct: 0, lastActivity: "2026-05-08T09:45:00" },
  { id: "CAT-1007", name: "Events & Programs", icon: "Calendar", iconBg: "bg-[#FFEDD5]", iconColor: "text-[#EA580C]", totalDocuments: 9, uploads: 8, uploadsTrendPct: 14, downloads: 6, downloadsTrendPct: 20, lastActivity: "2026-05-05T14:30:00" },
  { id: "CAT-1008", name: "Communication", icon: "Mail", iconBg: "bg-[#F3E8FF]", iconColor: "text-[#7C3AED]", totalDocuments: 7, uploads: 5, uploadsTrendPct: 0, downloads: 4, downloadsTrendPct: 0, lastActivity: "2026-05-03T11:15:00" },
  { id: "CAT-1009", name: "Legal & Compliance", icon: "FileText", iconBg: "bg-[#DBEAFE]", iconColor: "text-[#2563EB]", totalDocuments: 6, uploads: 5, uploadsTrendPct: 17, downloads: 3, downloadsTrendPct: 50, lastActivity: "2026-04-30T17:05:00" },
  { id: "CAT-1010", name: "Archives", icon: "Archive", iconBg: "bg-[#DCFCE7]", iconColor: "text-[#16A34A]", totalDocuments: 5, uploads: 4, uploadsTrendPct: 25, downloads: 2, downloadsTrendPct: 100, lastActivity: "2026-04-28T12:30:00" },
  { id: "CAT-1001", name: "Administration", icon: "Folder", iconBg: "bg-[#DCFCE7]", iconColor: "text-[#16A34A]", totalDocuments: 18, uploads: 15, uploadsTrendPct: 10, downloads: 12, downloadsTrendPct: 12, lastActivity: "2026-05-20T04:30:00" },
];

export const REPORTS_QUICK_ACTIONS = [
  { key: "export", label: "Export Report", description: "Download current report as PDF/Excel", icon: "Download", href: "/document-management/document-reports" },
  { key: "print", label: "Print Report", description: "Print document report", icon: "Printer", href: "/document-management/document-reports" },
  { key: "analytics", label: "View Analytics", description: "Detailed charts and insights", icon: "LineChart", href: "/document-management/document-reports" },
];
