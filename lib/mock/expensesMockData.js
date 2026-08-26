export const EXPENSE_CATEGORY_OPTIONS = [
  "Ministry Expenses", "Utilities & Maintenance", "Salaries & Wages", "Administrative Expenses", "Programs & Events", "Other Expenses",
];

export const EXPENSE_ACCOUNT_OPTIONS = [
  "Ministry Expenses Account", "Utilities Account", "Salaries Account", "Administrative Expenses Account", "Programs & Events Account",
];

export const EXPENSE_PAYMENT_METHOD_OPTIONS = ["Cash", "Bank Transfer", "Cheque", "UPI", "Card"];

export const BANK_ACCOUNT_OPTIONS = [
  { code: "1234", label: "SBI - Church Main Account (1234)" },
  { code: "5678", label: "HDFC - Building Fund Account (5678)" },
  { code: "9012", label: "ICICI - Missions Account (9012)" },
];

export const EXPENSES_STATS_MOCK = {
  totalExpensesThisMonth: 123450,
  totalExpensesThisYear: 1245300,
  totalPaid: 1105850,
  totalPending: 139450,
};

export const EXPENSE_TREND_MOCK = [
  { month: "Jan", amount: 78000 }, { month: "Feb", amount: 92000 }, { month: "Mar", amount: 88000 },
  { month: "Apr", amount: 95000 }, { month: "May", amount: 115400 }, { month: "Jun", amount: 84000 },
  { month: "Jul", amount: 98000 }, { month: "Aug", amount: 110000 }, { month: "Sep", amount: 105000 },
  { month: "Oct", amount: 118000 }, { month: "Nov", amount: 108000 }, { month: "Dec", amount: 135000 },
];

export const EXPENSE_BY_CATEGORY_MOCK = [
  { label: "Salaries & Wages", amount: 485600, pct: 38.95, color: "#16A34A" },
  { label: "Ministry Expenses", amount: 215300, pct: 17.30, color: "#4F46E5" },
  { label: "Utilities & Maintenance", amount: 175650, pct: 14.10, color: "#F59E0B" },
  { label: "Administrative Expenses", amount: 125200, pct: 10.05, color: "#EC4899" },
  { label: "Programs & Events", amount: 95400, pct: 7.66, color: "#7C3AED" },
  { label: "Other Expenses", amount: 47150, pct: 3.94, color: "#0891B2" },
];
export const EXPENSE_BY_CATEGORY_TOTAL = 1245300;

export const RECENT_EXPENSES_MOCK = [
  { id: "EXP-2025-0503-015", date: "2025-05-03", category: "Ministry Expenses", description: "Sunday School Materials", paidTo: "St. John's Book Store", amount: 2450, paymentMethod: "Cash", status: "Paid" },
  { id: "EXP-2025-0502-014", date: "2025-05-02", category: "Utilities & Maintenance", description: "Electricity Bill - Apr 2025", paidTo: "TNEB", amount: 8750, paymentMethod: "Bank Transfer", status: "Paid" },
  { id: "EXP-2025-0430-013", date: "2025-04-30", category: "Salaries & Wages", description: "Staff Salary - Apr 2025", paidTo: "Church Staff", amount: 68500, paymentMethod: "Bank Transfer", status: "Paid" },
  { id: "EXP-2025-0428-012", date: "2025-04-28", category: "Administrative Expenses", description: "Office Stationery", paidTo: "City Stationers", amount: 1850, paymentMethod: "Cash", status: "Paid" },
  { id: "EXP-2025-0425-011", date: "2025-04-25", category: "Programs & Events", description: "Easter Program Expense", paidTo: "Various Vendors", amount: 12300, paymentMethod: "Cash", status: "Pending" },
];
export const RECENT_EXPENSES_TOTAL_COUNT = 25;

export const NEW_EXPENSE_DEFAULTS = {
  // Step 1 — Expense Details
  category: "",
  date: new Date().toISOString().slice(0, 10),
  paidTo: "",
  description: "",
  amount: "",
  expenseAccount: "",
  paymentMethod: "",
  referenceNo: "",
  notes: "",
  attachmentName: "",
  attachmentSize: "",

  // Step 2 — Payment Information (paymentMethod above carries over and can be refined here)
  paidFromAccount: "",
  paymentDate: new Date().toISOString().slice(0, 10),
  transactionRefNo: "",
  chequeUtrPaymentId: "",
  paymentModeDetails: "",
  paymentAttachmentName: "",
  paymentAttachmentSize: "",
};
