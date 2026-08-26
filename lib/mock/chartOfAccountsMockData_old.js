export const ACCOUNT_TYPE_OPTIONS = ["Header", "Detail", "Sub-Detail"];
export const ACCOUNT_CATEGORY_OPTIONS = ["Assets", "Liabilities", "Equity", "Income", "Expenses", "Offering", "Donation"];
export const ACCOUNT_NATURE_OPTIONS = ["Debit", "Credit"];
export const ACCOUNT_CURRENCY_OPTIONS = ["INR - Indian Rupee (₹)", "USD - US Dollar ($)"];
export const REPORTING_GROUP_OPTIONS = ["General Income", "General Offerings", "General Expenses", "Fixed Assets", "Current Liabilities"];

export const CHART_OF_ACCOUNTS_STATS_MOCK = {
  totalAccounts: 156,
  activeAccounts: 142,
  inactiveAccounts: 14,
  lastUpdated: "2025-05-02",
};

/** Flat list with a `level` (0 = top header) so the table can render indentation + expand/collapse. */
export const CHART_OF_ACCOUNTS_MOCK = [
  { code: "1000", name: "Assets", category: "Assets", type: "Header", status: "Active", balance: 1875230, level: 0, hasChildren: true },
  { code: "1100", name: "Current Assets", category: "Assets", type: "Header", status: "Active", balance: 1245600, level: 1, hasChildren: true },
  { code: "1110", name: "Cash in Hand", category: "Assets", type: "Detail", status: "Active", balance: 45230, level: 2, hasChildren: false },
  { code: "1120", name: "Cash at Bank", category: "Assets", type: "Detail", status: "Active", balance: 875000, level: 2, hasChildren: false },
  { code: "1130", name: "Petty Cash", category: "Assets", type: "Detail", status: "Active", balance: 12500, level: 2, hasChildren: false },
  { code: "1200", name: "Fixed Assets", category: "Assets", type: "Header", status: "Active", balance: 629630, level: 1, hasChildren: true },
  { code: "1210", name: "Land", category: "Assets", type: "Detail", status: "Active", balance: 2500000, level: 2, hasChildren: false },
  { code: "1220", name: "Building", category: "Assets", type: "Detail", status: "Active", balance: 4000000, level: 2, hasChildren: false },
  { code: "1230", name: "Furniture & Fixtures", category: "Assets", type: "Detail", status: "Active", balance: 675200, level: 2, hasChildren: false },
  { code: "2000", name: "Liabilities", category: "Liabilities", type: "Header", status: "Active", balance: -425600, level: 0, hasChildren: true },
  { code: "2100", name: "Current Liabilities", category: "Liabilities", type: "Header", status: "Active", balance: -325600, level: 1, hasChildren: true },
  { code: "2110", name: "Accounts Payable", category: "Liabilities", type: "Detail", status: "Active", balance: -125600, level: 2, hasChildren: false },
  { code: "4000", name: "Offering", category: "Offering", type: "Header", status: "Active", balance: 485230, level: 0, hasChildren: true },
  { code: "4001", name: "Sunday Offering - Cash", category: "Offering", type: "Detail", status: "Active", balance: 325230, level: 1, hasChildren: false },
  { code: "4002", name: "Sunday Offering - Online", category: "Offering", type: "Detail", status: "Active", balance: 110000, level: 1, hasChildren: false },
  { code: "4003", name: "Special Offering", category: "Offering", type: "Detail", status: "Active", balance: 35000, level: 1, hasChildren: false },
  { code: "4004", name: "Thanksgiving Offering", category: "Offering", type: "Detail", status: "Inactive", balance: 15000, level: 1, hasChildren: false },
];

/** Sibling accounts under 4000 - Offering, used to render the live hierarchy tree on the Add Sub Account screens. */
export const OFFERING_ACCOUNT_HIERARCHY_MOCK = {
  code: "4000",
  name: "Offering",
  type: "Header",
  children: [
    { code: "4001", name: "Sunday Offering - Cash", type: "Detail" },
    { code: "4002", name: "Sunday Offering - Online", type: "Detail" },
    { code: "4003", name: "Special Offering", type: "Detail" },
    { code: "4004", name: "Thanksgiving Offering", type: "Detail" },
  ],
};

export const PARENT_ACCOUNT_OPTIONS = [
  { code: "1000", label: "1000 - Assets" },
  { code: "1100", label: "1100 - Current Assets" },
  { code: "1200", label: "1200 - Fixed Assets" },
  { code: "2000", label: "2000 - Liabilities" },
  { code: "4000", label: "4000 - Offering (Header)" },
];

export const NEW_ACCOUNT_DEFAULTS = {
  code: "",
  name: "",
  parentAccount: "",
  type: "",
  category: "",
  nature: "Debit",
  openingBalance: "0.00",
  asOfDate: new Date().toISOString().slice(0, 10),
  description: "",
  level: "Detail",
  normalBalance: "Debit",
  allowTransactions: "Yes",
  taxApplicable: "No",
  currency: "INR - Indian Rupee (₹)",
  reportingGroup: "",
  tags: "",
  notes: "",
};
