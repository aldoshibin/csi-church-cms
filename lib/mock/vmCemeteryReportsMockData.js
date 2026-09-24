export const CEMETERY_REPORT_CATEGORY_OPTIONS = ["Burial", "Plots", "Documents", "Finance", "Custom"];
export const CEMETERY_REPORT_TYPE_OPTIONS = ["Summary", "Detailed", "Chart"];
export const CEMETERY_REPORT_STATUS_OPTIONS = ["Frequently Used", "Recently Generated", "Scheduled", "Others"];

export const CEMETERY_REPORTS_LIST_MOCK = [
  { key: "burial-records", title: "Burial Records Report", description: "Detailed report of all burial records in the cemetery.", icon: "Users2", bg: "bg-[#DCFCE7]", color: "text-[#16A34A]", category: "Burial", status: "Frequently Used" },
  { key: "deceased-register", title: "Deceased Register Report", description: "List of all deceased members and burial details.", icon: "IdCard", bg: "bg-[#F3E8FF]", color: "text-[#7C3AED]", category: "Burial", status: "Frequently Used" },
  { key: "plots-summary", title: "Plots Summary Report", description: "Summary of all plots with status and allocation details.", icon: "Map", bg: "bg-[#FFEDD5]", color: "text-[#EA580C]", category: "Plots", status: "Frequently Used" },
  { key: "plot-usage", title: "Plot Usage Report", description: "Detailed report on plot usage and availability.", icon: "MapPinned", bg: "bg-[#DBEAFE]", color: "text-[#2563EB]", category: "Plots", status: "Frequently Used" },
  { key: "documents-report", title: "Documents Report", description: "Report of all documents uploaded in the system.", icon: "FileText", bg: "bg-[#FEE2E2]", color: "text-[#DC2626]", category: "Documents", status: "Frequently Used" },
  { key: "certificates-issued", title: "Certificates Issued Report", description: "Summary of all certificates issued to members.", icon: "BadgeCheck", bg: "bg-[#DCFCE7]", color: "text-[#16A34A]", category: "Documents", status: "Recently Generated" },
  { key: "payments-report", title: "Payments Report", description: "Report on all cemetery related payments and receipts.", icon: "IndianRupee", bg: "bg-[#FFEDD5]", color: "text-[#EA580C]", category: "Finance", status: "Recently Generated" },
  { key: "burials-by-year", title: "Burials by Year Report", description: "Year-wise summary of burials in the cemetery.", icon: "BarChart3", bg: "bg-[#DBEAFE]", color: "text-[#2563EB]", category: "Burial", status: "Recently Generated" },
  { key: "burial-type", title: "Burial Type Report", description: "Report of burials grouped by type (Adult, Child, etc.).", icon: "PieChart", bg: "bg-[#F3E8FF]", color: "text-[#7C3AED]", category: "Burial", status: "Recently Generated" },
  { key: "deceased-by-gender", title: "Deceased by Gender Report", description: "Summary of deceased members by gender.", icon: "Users", bg: "bg-[#DCFCE7]", color: "text-[#16A34A]", category: "Burial", status: "Scheduled" },
  { key: "ministry-burials", title: "Ministry Burials Report", description: "Report of burials conducted by different ministries.", icon: "Cross", bg: "bg-[#DBEAFE]", color: "text-[#2563EB]", category: "Burial", status: "Scheduled" },
  { key: "custom-report", title: "Custom Report", description: "Create a custom report based on selected parameters.", icon: "Clock", bg: "bg-[#F3E8FF]", color: "text-[#7C3AED]", category: "Custom", status: "Others" },
];

export const CEMETERY_REPORTS_OVERVIEW_DONUT_MOCK = {
  total: 12,
  breakdown: [
    { label: "Frequently Used", count: 5, color: "#16A34A" },
    { label: "Recently Generated", count: 4, color: "#3B82F6" },
    { label: "Scheduled", count: 2, color: "#F97316" },
    { label: "Others", count: 1, color: "#D1D5DB" },
  ],
};

export const FREQUENTLY_USED_CEMETERY_REPORTS_MOCK = CEMETERY_REPORTS_LIST_MOCK
  .filter((r) => r.status === "Frequently Used")
  .map((r) => ({ key: r.key, title: r.title, icon: r.icon }));
