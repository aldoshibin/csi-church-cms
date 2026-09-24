export const PLEDGE_STATUS_OPTIONS = ["Active", "Completed", "Cancelled"];
export const PLEDGE_FUND_OPTIONS = [
  "General Fund", "Building Fund", "Mission Fund", "Youth Ministry", "Thanksgiving Fund",
  "Women's Fellowship", "Children's Ministry", "Medical Aid Fund",
];
export const PLEDGE_YEAR_OPTIONS = ["2026", "2025", "2024"];
export const PLEDGE_COMMITMENT_TYPE_OPTIONS = ["One-Time", "Installments", "Open-Ended"];
export const PLEDGE_PAYMENT_FREQUENCY_OPTIONS = ["Weekly", "Monthly", "Quarterly", "Yearly"];

export const PLEDGE_STATUS_VARIANT = {
  Active: "success",
  Completed: "info",
  Cancelled: "danger",
};

const PLEDGES_SEED = [
  {
    id: "PLG-00048", donor: "John Samuel", email: "john.samuel@gmail.com", phone: "+91 98765 43210", initials: "JS",
    fund: "Building Fund", pledgedAmount: 250000, paidAmount: 125000, startDate: "2025-01-01", endDate: "2025-12-31", status: "Active",
    paymentSchedule: [
      { date: "2025-01-01", amount: 50000, status: "Paid" },
      { date: "2025-02-01", amount: 25000, status: "Paid" },
      { date: "2025-03-01", amount: 25000, status: "Paid" },
      { date: "2025-04-01", amount: 25000, status: "Upcoming" },
      { date: "2025-05-01", amount: 25000, status: "Upcoming" },
    ],
  },
  {
    id: "PLG-00047", donor: "Anita Joseph", email: "anita.joseph@gmail.com", phone: "+91 98765 43211", initials: "AJ",
    fund: "Mission Fund", pledgedAmount: 100000, paidAmount: 40000, startDate: "2025-02-01", endDate: "2026-01-31", status: "Active",
    paymentSchedule: [
      { date: "2025-02-01", amount: 20000, status: "Paid" },
      { date: "2025-03-01", amount: 20000, status: "Paid" },
      { date: "2025-04-01", amount: 20000, status: "Upcoming" },
    ],
  },
  {
    id: "PLG-00046", donor: "Peter Thomas", email: "peter.thomas@gmail.com", phone: "+91 98765 43212", initials: "PT",
    fund: "General Fund", pledgedAmount: 75000, paidAmount: 75000, startDate: "2024-01-01", endDate: "2024-12-31", status: "Completed",
    paymentSchedule: [
      { date: "2024-01-01", amount: 37500, status: "Paid" },
      { date: "2024-06-01", amount: 37500, status: "Paid" },
    ],
  },
  {
    id: "PLG-00045", donor: "Sharon Matthew", email: "sharon.m@gmail.com", phone: "+91 98765 43213", initials: "SM",
    fund: "Youth Ministry", pledgedAmount: 50000, paidAmount: 20000, startDate: "2025-04-01", endDate: "2026-03-31", status: "Active",
    paymentSchedule: [
      { date: "2025-04-01", amount: 10000, status: "Paid" },
      { date: "2025-05-01", amount: 10000, status: "Paid" },
      { date: "2025-06-01", amount: 10000, status: "Upcoming" },
    ],
  },
  {
    id: "PLG-00044", donor: "David Arul", email: "david.arul@gmail.com", phone: "+91 98765 43214", initials: "DA",
    fund: "Children's Ministry", pledgedAmount: 60000, paidAmount: 30000, startDate: "2025-03-01", endDate: "2026-02-28", status: "Active",
    paymentSchedule: [
      { date: "2025-03-01", amount: 15000, status: "Paid" },
      { date: "2025-04-01", amount: 15000, status: "Paid" },
    ],
  },
  {
    id: "PLG-00043", donor: "Rachel Lewis", email: "rachel.l@gmail.com", phone: "+91 98765 43215", initials: "RL",
    fund: "Women's Fellowship", pledgedAmount: 30000, paidAmount: 30000, startDate: "2025-01-01", endDate: "2025-12-31", status: "Completed",
    paymentSchedule: [
      { date: "2025-01-01", amount: 15000, status: "Paid" },
      { date: "2025-06-01", amount: 15000, status: "Paid" },
    ],
  },
  {
    id: "PLG-00042", donor: "Kevin Babu", email: "kevin.babu@gmail.com", phone: "+91 98765 43216", initials: "KB",
    fund: "Building Fund", pledgedAmount: 200000, paidAmount: 60000, startDate: "2025-05-01", endDate: "2026-04-30", status: "Active",
    paymentSchedule: [
      { date: "2025-05-01", amount: 30000, status: "Paid" },
      { date: "2025-06-01", amount: 30000, status: "Paid" },
    ],
  },
  {
    id: "PLG-00041", donor: "Neha Mathew", email: "neha.mathew@gmail.com", phone: "+91 98765 43217", initials: "NM",
    fund: "Thanksgiving Fund", pledgedAmount: 25000, paidAmount: 5000, startDate: "2025-06-01", endDate: "2026-05-31", status: "Cancelled",
    paymentSchedule: [{ date: "2025-06-01", amount: 5000, status: "Paid" }],
  },
  {
    id: "PLG-00040", donor: "Grace Paul", email: "grace.paul@gmail.com", phone: "+91 98765 43218", initials: "GP",
    fund: "Medical Aid Fund", pledgedAmount: 40000, paidAmount: 16000, startDate: "2025-02-01", endDate: "2026-01-31", status: "Active",
    paymentSchedule: [
      { date: "2025-02-01", amount: 8000, status: "Paid" },
      { date: "2025-03-01", amount: 8000, status: "Paid" },
    ],
  },
  {
    id: "PLG-00039", donor: "Rev. Michael", email: "michael.priest@gmail.com", phone: "+91 98765 43219", initials: "RM",
    fund: "General Fund", pledgedAmount: 150000, paidAmount: 150000, startDate: "2024-01-01", endDate: "2024-12-31", status: "Completed",
    paymentSchedule: [
      { date: "2024-01-01", amount: 75000, status: "Paid" },
      { date: "2024-07-01", amount: 75000, status: "Paid" },
    ],
  },
];

/** Pad the seed list out to 48 entries to match "Showing 1 to 10 of 48 pledges". */
export const PLEDGES_MOCK = Array.from({ length: 48 }, (_, i) => {
  const seed = PLEDGES_SEED[i % PLEDGES_SEED.length];
  if (i < PLEDGES_SEED.length) return seed;
  return { ...seed, id: `PLG-${String(48 - i).padStart(5, "0")}` };
});

export const PLEDGE_SUMMARY_MOCK = {
  totalPledgedAmount: 1875000,
  totalPaidAmount: 713000,
  remainingAmount: 1162000,
  completionRate: 37.9,
};

export const PLEDGE_STATUS_BREAKDOWN_MOCK = [
  { label: "Active", count: 36, pct: 75.0, color: "#16A34A" },
  { label: "Completed", count: 8, pct: 16.7, color: "#2563EB" },
  { label: "Cancelled", count: 4, pct: 8.3, color: "#DC2626" },
];

export const PLEDGE_FUND_BREAKDOWN_MOCK = [
  { label: "Building Fund", amount: 650000, pct: 34.7 },
  { label: "General Fund", amount: 420000, pct: 22.4 },
  { label: "Mission Fund", amount: 275000, pct: 14.7 },
  { label: "Youth Ministry", amount: 150000, pct: 8.0 },
  { label: "Others", amount: 380000, pct: 20.2 },
];

export const NEW_PLEDGE_DEFAULTS = {
  donor: "",
  email: "",
  countryCode: "+91",
  phone: "",
  fundPurpose: "",
  purpose: "",
  pledgedAmount: "",
  commitmentType: "",
  startDate: "",
  endDate: "",
  paymentFrequency: "",
  numberOfPayments: "",
  firstPaymentDate: "",
  notes: "",
  internalNotes: "",
};
