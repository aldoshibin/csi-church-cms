export const FINANCE_DASHBOARD_MOCK = {
  cards: {
    totalIncome: { value: 485230, delta: "12.5%", trendUp: true, sub: "This Month" },
    totalExpenses: { value: 342650, delta: "8.3%", trendUp: false, sub: "This Month" },
    netBalance: { value: 142580, delta: "18.7%", trendUp: true, sub: "This Month" },
    bankBalance: { value: 876950, sub: "All Accounts", href: "/finance/bank-accounts" },
  },

  recentTransactions: [
    { id: "TRX-2025-0321", date: "2025-05-03", ref: "TRX-2025-0321", description: "Sunday Offering Collection", category: "Offering", type: "Income", amount: 25430 },
    { id: "TRX-2025-0320", date: "2025-05-02", ref: "TRX-2025-0320", description: "Electricity Bill Payment", category: "Utilities", type: "Expense", amount: 12500 },
    { id: "TRX-2025-0319", date: "2025-05-01", ref: "TRX-2025-0319", description: "Online Donation", category: "Donation", type: "Income", amount: 10000 },
    { id: "TRX-2025-0318", date: "2025-04-30", ref: "TRX-2025-0318", description: "Salaries - April 2025", category: "Salaries", type: "Expense", amount: 85000 },
    { id: "TRX-2025-0317", date: "2025-04-30", ref: "TRX-2025-0317", description: "Hall Rent Income", category: "Hall Rental", type: "Income", amount: 15000 },
  ],

  cashFlow: [
    { label: "01 May", income: 12000, expense: 4000 },
    { label: "08 May", income: 58000, expense: 26000 },
    { label: "15 May", income: 72000, expense: 30000 },
    { label: "22 May", income: 68000, expense: 45000 },
    { label: "31 May", income: 95000, expense: 40000 },
  ],

  incomeVsExpenses: {
    total: 485230,
    breakdown: [
      { label: "Income", amount: 485230, pct: 58.7, color: "#16A34A" },
      { label: "Expenses", amount: 342650, pct: 41.3, color: "#DC2626" },
    ],
  },

  topExpenseCategories: [
    { label: "Salaries", amount: 185000, pct: 53.9, color: "#DC2626" },
    { label: "Utilities", amount: 45200, pct: 13.2, color: "#EA580C" },
    { label: "Maintenance", amount: 32500, pct: 9.5, color: "#7C3AED" },
    { label: "Ministry Expenses", amount: 28750, pct: 8.4, color: "#0891B2" },
    { label: "Others", amount: 51200, pct: 14.9, color: "#4B5563" },
  ],

  budgetVsActual: [
    { label: "Total Income", current: 485230, target: 600000, pct: 80.9, color: "#16A34A" },
    { label: "Total Expenses", current: 342650, target: 500000, pct: 68.5, color: "#DC2626" },
    { label: "Net Savings", current: 142580, target: 100000, pct: 142.6, color: "#7C3AED" },
  ],

  upcomingPayments: [
    { id: 1, label: "Electricity Bill", date: "2025-05-10", amount: 12500, status: "Overdue" },
    { id: 2, label: "Water Bill", date: "2025-05-15", amount: 2800, status: "Due Soon" },
    { id: 3, label: "Property Tax", date: "2025-05-31", amount: 18000, status: "Upcoming" },
  ],
};

/** Options + defaults used by the Add Transaction wizard. */
export const TRANSACTION_CATEGORY_OPTIONS = ["Offering", "Donation", "Hall Rental", "Utilities", "Salaries", "Maintenance", "Ministry Expenses", "Others"];
export const TRANSACTION_ACCOUNT_OPTIONS = ["Sunday Offering Income (4001)", "General Fund (1001)", "Building Fund (1002)", "Missions Fund (1003)"];
export const PAYMENT_METHOD_OPTIONS = ["Cash", "Cheque", "Bank Transfer", "UPI", "Card"];
export const CURRENCY_OPTIONS = ["INR - Indian Rupee", "USD - US Dollar"];
export const ALLOCATION_DEPARTMENT_OPTIONS = ["General Ministry", "Youth Ministry", "Women's Fellowship", "Men's Fellowship", "Choir & Worship Team", "Building Fund"];

export const NEW_TRANSACTION_DEFAULTS = {
  type: "Income",
  date: new Date().toISOString().slice(0, 10),
  refNo: "",
  category: "Offering",
  account: "Sunday Offering Income (4001)",
  payer: "",
  paymentMethod: "Cash",
  amount: "",
  currency: "INR - Indian Rupee",
  description: "",
  tags: "",
  saveAndAddAnother: false,
};

export const ACCOUNT_BALANCE_MOCK = {
  "Sunday Offering Income (4001)": { balance: 485230, lastUpdated: "2025-05-02" },
  "General Fund (1001)": { balance: 220400, lastUpdated: "2025-05-01" },
  "Building Fund (1002)": { balance: 640500, lastUpdated: "2025-04-28" },
  "Missions Fund (1003)": { balance: 98200, lastUpdated: "2025-04-30" },
};
