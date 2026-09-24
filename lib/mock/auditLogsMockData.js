export const AUDIT_MODULE_OPTIONS = [
  "Income", "Expenses", "Journal Entries", "Bank Accounts", "Transfers", "Budgets",
  "Financial Reports", "Chart of Accounts", "Users", "Settings",
];

export const AUDIT_ACTION_OPTIONS = ["Created", "Updated", "Deleted", "Generated"];

export const AUDIT_USER_OPTIONS = ["Rev. Michael", "John Samuel", "Anita Joseph", "Peter Thomas"];

/** Module -> icon/color, matched to the sidebar's own module colors. */
export const AUDIT_MODULE_STYLE = {
  "Income": { bg: "bg-success-50", color: "text-success-600" },
  "Expenses": { bg: "bg-warning-50", color: "text-warning-600" },
  "Journal Entries": { bg: "bg-[#F3E8FF]", color: "text-[#7C3AED]" },
  "Bank Accounts": { bg: "bg-interactive-50", color: "text-interactive-600" },
  "Transfers": { bg: "bg-[#CCFBF1]", color: "text-[#0D9488]" },
  "Budgets": { bg: "bg-[#FEF9C3]", color: "text-[#CA8A04]" },
  "Financial Reports": { bg: "bg-[#FCE7F3]", color: "text-[#DB2777]" },
  "Chart of Accounts": { bg: "bg-[#E0E7FF]", color: "text-[#4F46E5]" },
  "Users": { bg: "bg-interactive-50", color: "text-interactive-600" },
  "Settings": { bg: "bg-surface-muted", color: "text-ink-subtle" },
};

export const AUDIT_ACTION_VARIANT = {
  Created: "success",
  Updated: "info",
  Deleted: "danger",
  Generated: "accent",
};

const AUDIT_LOGS_SEED = [
  { date: "2025-05-18", time: "10:30 AM", user: "Rev. Michael", role: "Parish Priest", initials: "RM", module: "Income", action: "Created", details: "Created new income record \"Sunday Offering\"", recordId: "INC-2025-00045", ip: "192.168.1.10" },
  { date: "2025-05-18", time: "10:15 AM", user: "John Samuel", role: "Accountant", initials: "JS", module: "Journal Entries", action: "Updated", details: "Updated journal entry \"JE-2025-00078\"", recordId: "JE-2025-00078", ip: "192.168.1.11" },
  { date: "2025-05-18", time: "09:50 AM", user: "Anita Joseph", role: "Finance Manager", initials: "AJ", module: "Expenses", action: "Created", details: "Added new expense record \"Office Supplies\"", recordId: "EXP-2025-00032", ip: "192.168.1.12" },
  { date: "2025-05-18", time: "09:20 AM", user: "Peter Thomas", role: "Treasurer", initials: "PT", module: "Bank Accounts", action: "Updated", details: "Updated bank account details \"SBI - Main Account\"", recordId: "BA-2025-00003", ip: "192.168.1.10" },
  { date: "2025-05-18", time: "09:10 AM", user: "John Samuel", role: "Accountant", initials: "JS", module: "Transfers", action: "Created", details: "Created transfer record from \"Main Account to Mission Fund\"", recordId: "TRF-2025-00021", ip: "192.168.1.11" },
  { date: "2025-05-17", time: "04:45 PM", user: "Rev. Michael", role: "Parish Priest", initials: "RM", module: "Budgets", action: "Updated", details: "Updated budget \"Youth Ministry Budget 2025\"", recordId: "BUD-2025-00006", ip: "192.168.1.10" },
  { date: "2025-05-17", time: "03:30 PM", user: "Anita Joseph", role: "Finance Manager", initials: "AJ", module: "Financial Reports", action: "Generated", details: "Generated report \"Income Statement - April 2025\"", recordId: "RPT-2025-00015", ip: "192.168.1.12" },
  { date: "2025-05-17", time: "02:20 PM", user: "John Samuel", role: "Accountant", initials: "JS", module: "Chart of Accounts", action: "Updated", details: "Updated account details \"4000 - Donations\"", recordId: "ACC-4000", ip: "192.168.1.11" },
  { date: "2025-05-17", time: "11:05 AM", user: "Peter Thomas", role: "Treasurer", initials: "PT", module: "Users", action: "Deleted", details: "Deleted user \"Mary Daniel\"", recordId: "USR-00027", ip: "192.168.1.10" },
  { date: "2025-05-17", time: "10:30 AM", user: "Rev. Michael", role: "Parish Priest", initials: "RM", module: "Settings", action: "Updated", details: "Updated general settings", recordId: "SET-00001", ip: "192.168.1.10" },
];

/** Pad the seed list out to 156 entries to match "Showing 1 to 10 of 156 logs". */
export const AUDIT_LOGS_MOCK = Array.from({ length: 156 }, (_, i) => {
  const seed = AUDIT_LOGS_SEED[i % AUDIT_LOGS_SEED.length];
  return {
    id: `LOG-${String(156 - i).padStart(5, "0")}`,
    ...seed,
  };
});

export const AUDIT_LOGS_SUMMARY_MOCK = {
  totalLogs: 156,
  users: 8,
  modules: 12,
  createActions: 62,
  updateActions: 58,
  deleteActions: 12,
  reportGenerated: 14,
};

/** Top stat cards shown above the filters, matching the source design. */
export const AUDIT_LOGS_TOP_STATS_MOCK = {
  totalDonations: { value: 842650, delta: "18.6%", trendUp: true },
  successfulTransactions: { value: 326, delta: "14.2%", trendUp: true },
  uniqueDonors: { value: 142, delta: "10.1%", trendUp: true },
  recurringDonations: { value: 67, delta: "8.3%", trendUp: true },
  refundsThisMonth: { value: 12450, delta: "5.6%", trendUp: false },
};

export const TOP_ACTIVE_USERS_MOCK = [
  { name: "Rev. Michael", count: 45 },
  { name: "John Samuel", count: 38 },
  { name: "Anita Joseph", count: 26 },
  { name: "Peter Thomas", count: 19 },
  { name: "Others", count: 28 },
];
