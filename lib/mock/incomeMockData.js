export const INCOME_CATEGORY_OPTIONS = [
  "Sunday Offering Collection", "Special Offering", "Thanksgiving Offering",
  "Donation", "Hall Rental Income", "Other Income",
];

export const INCOME_RELATED_ACCOUNT_OPTIONS = [
  "4001 - Sunday Offering - Cash (Detail)",
  "4002 - Sunday Offering - Online (Detail)",
  "4003 - Special Offering (Detail)",
  "4004 - Thanksgiving Offering (Detail)",
];

export const INCOME_PAYMENT_METHOD_OPTIONS = ["Cash", "Cheque", "Bank Transfer", "UPI", "Card"];

export const INCOME_TYPE_DEFAULT = "General Income";

export const INCOME_STATS_MOCK = {
  totalIncomeThisMonth: 485230,
  totalIncomeThisYear: 4852300,
  totalReceived: 4610500,
  totalPending: 241800,
};

export const INCOME_TREND_MOCK = [
  { month: "Jan", amount: 312000 }, { month: "Feb", amount: 298000 }, { month: "Mar", amount: 340000 },
  { month: "Apr", amount: 365000 }, { month: "May", amount: 485230 }, { month: "Jun", amount: 355000 },
  { month: "Jul", amount: 372000 }, { month: "Aug", amount: 390000 }, { month: "Sep", amount: 358000 },
  { month: "Oct", amount: 402000 }, { month: "Nov", amount: 415000 }, { month: "Dec", amount: 560070 },
];

export const INCOME_BY_CATEGORY_MOCK = [
  { label: "Sunday Offering Collection", amount: 1985600, pct: 40.92, color: "#16A34A" },
  { label: "Special Offering", amount: 875300, pct: 18.04, color: "#4F46E5" },
  { label: "Donation", amount: 725650, pct: 14.96, color: "#F59E0B" },
  { label: "Thanksgiving Offering", amount: 525200, pct: 10.82, color: "#EC4899" },
  { label: "Hall Rental Income", amount: 445400, pct: 9.18, color: "#3B82F6" },
  { label: "Other Income", amount: 295150, pct: 6.08, color: "#8B5CF6" },
];
export const INCOME_BY_CATEGORY_TOTAL = 4852300;

export const RECENT_INCOME_MOCK = [
  { id: "SO-2025-0503-001", date: "2025-05-03", category: "Sunday Offering Collection", description: "Sunday offering collection - regular service", receivedFrom: "St. John's Parishioners", amount: 25430, paymentMethod: "Cash", status: "Received" },
  { id: "SO-2025-0502-002", date: "2025-05-02", category: "Donation", description: "Online Donation", receivedFrom: "Anonymous Donor", amount: 10000, paymentMethod: "UPI", status: "Received" },
  { id: "SO-2025-0430-003", date: "2025-04-30", category: "Hall Rental Income", description: "Hall Rent - Wedding Function", receivedFrom: "Thomas Family", amount: 15000, paymentMethod: "Bank Transfer", status: "Received" },
  { id: "SO-2025-0428-004", date: "2025-04-28", category: "Special Offering", description: "Missions Special Offering", receivedFrom: "Congregation", amount: 35000, paymentMethod: "Cash", status: "Received" },
  { id: "SO-2025-0425-005", date: "2025-04-25", category: "Thanksgiving Offering", description: "Easter Thanksgiving Offering", receivedFrom: "Congregation", amount: 42300, paymentMethod: "Cheque", status: "Pending" },
];
export const RECENT_INCOME_TOTAL_COUNT = 25;

export const NEW_INCOME_DEFAULTS = {
  // Step 1 — Income Details
  category: "",
  amount: "",
  date: new Date().toISOString().slice(0, 10),
  paymentMethod: "",
  receivedFrom: "",
  relatedAccount: "",
  description: "",
  attachmentName: "",
  attachmentSize: "",
  referenceNo: "",

  // Step 2 — Payment Information (paymentMethod above carries over and can be refined here)
  transactionReceiptNo: "",
  paidBy: "",
  paymentModeDetails: "",
  receivedBy: "",
  paymentAttachmentName: "",
  paymentAttachmentSize: "",
  notes: "",

  // Derived / fixed classification shown on Review
  incomeType: INCOME_TYPE_DEFAULT,
};
