export const REFUND_STATUS_OPTIONS = ["Completed", "Pending", "Failed"];
export const REFUND_FUND_OPTIONS = [
  "General Fund", "Building Fund", "Mission Fund", "Youth Ministry", "Thanksgiving Fund",
  "Women's Fellowship", "Children's Ministry", "Medical Aid Fund",
];
export const REFUND_REASON_OPTIONS = [
  "Duplicate donation", "Donor requested cancellation", "Incorrect amount charged",
  "Payment made in error", "Event cancelled", "Other",
];
export const REFUND_PAYMENT_METHOD_STYLE = {
  "UPI": { bg: "bg-success-50", color: "text-success-600" },
  "Card": { bg: "bg-interactive-50", color: "text-interactive-600" },
  "Net Banking": { bg: "bg-[#F3E8FF]", color: "text-[#7C3AED]" },
};

export const REFUND_STATUS_VARIANT = {
  Completed: "success",
  Pending: "warning",
  Failed: "danger",
};

const REFUNDS_SEED = [
  {
    id: "REF-00028", donor: "Anita Joseph", email: "anita.joseph@gmail.com", phone: "+91 98765 43210", initials: "AJ",
    fund: "Mission Fund", amount: 10000, paymentMethod: "UPI", refundDate: "2025-04-28", status: "Completed",
    reason: "Duplicate donation", notes: "Refund requested by donor.",
    paymentId: "PAY-00056", paymentDate: "2025-04-28", paymentTime: "10:15 AM", amountPaid: 10000,
    timeline: [
      { label: "Refund Requested", date: "28 Apr 2025, 10:30 AM", by: "By Donor" },
      { label: "Refund Approved", date: "28 Apr 2025, 10:45 AM", by: "By Rev. Michael" },
      { label: "Refund Processed", date: "28 Apr 2025, 11:10 AM", by: "By System" },
      { label: "Refund Completed", date: "28 Apr 2025, 11:12 AM", by: "Amount credited to donor" },
    ],
  },
  {
    id: "REF-00027", donor: "John Samuel", email: "john.samuel@gmail.com", phone: "+91 98765 43211", initials: "JS",
    fund: "Building Fund", amount: 5000, paymentMethod: "Card", refundDate: "2025-04-27", status: "Completed",
    reason: "Incorrect amount charged", notes: "Corrected and refunded.",
    paymentId: "PAY-00055", paymentDate: "2025-04-27", paymentTime: "02:20 PM", amountPaid: 5000,
    timeline: [
      { label: "Refund Requested", date: "27 Apr 2025, 02:30 PM", by: "By Parish Office" },
      { label: "Refund Approved", date: "27 Apr 2025, 02:45 PM", by: "By Rev. Michael" },
      { label: "Refund Processed", date: "27 Apr 2025, 03:00 PM", by: "By System" },
      { label: "Refund Completed", date: "27 Apr 2025, 03:05 PM", by: "Amount credited to donor" },
    ],
  },
  {
    id: "REF-00026", donor: "Peter Thomas", email: "peter.thomas@gmail.com", phone: "+91 98765 43212", initials: "PT",
    fund: "General Fund", amount: 7500, paymentMethod: "Net Banking", refundDate: "2025-04-25", status: "Completed",
    reason: "Donor requested cancellation", notes: "",
    paymentId: "PAY-00052", paymentDate: "2025-04-25", paymentTime: "09:10 AM", amountPaid: 7500,
    timeline: [
      { label: "Refund Requested", date: "25 Apr 2025, 09:20 AM", by: "By Donor" },
      { label: "Refund Approved", date: "25 Apr 2025, 09:40 AM", by: "By Anita Joseph" },
      { label: "Refund Processed", date: "25 Apr 2025, 10:00 AM", by: "By System" },
      { label: "Refund Completed", date: "25 Apr 2025, 10:05 AM", by: "Amount credited to donor" },
    ],
  },
  {
    id: "REF-00025", donor: "Sharon Matthew", email: "sharon.m@gmail.com", phone: "+91 98765 43213", initials: "SM",
    fund: "Youth Ministry", amount: 4000, paymentMethod: "Card", refundDate: "2025-04-24", status: "Completed",
    reason: "Event cancelled", notes: "Youth camp cancelled, all payments refunded.",
    paymentId: "PAY-00049", paymentDate: "2025-04-24", paymentTime: "05:30 PM", amountPaid: 4000,
    timeline: [
      { label: "Refund Requested", date: "24 Apr 2025, 05:40 PM", by: "By Parish Office" },
      { label: "Refund Approved", date: "24 Apr 2025, 05:50 PM", by: "By Rev. Michael" },
      { label: "Refund Processed", date: "24 Apr 2025, 06:00 PM", by: "By System" },
      { label: "Refund Completed", date: "24 Apr 2025, 06:05 PM", by: "Amount credited to donor" },
    ],
  },
  {
    id: "REF-00024", donor: "David Arul", email: "david.arul@gmail.com", phone: "+91 98765 43214", initials: "DA",
    fund: "Children's Ministry", amount: 6000, paymentMethod: "UPI", refundDate: "2025-04-23", status: "Pending",
    reason: "Payment made in error", notes: "Awaiting bank confirmation.",
    paymentId: "PAY-00047", paymentDate: "2025-04-23", paymentTime: "11:00 AM", amountPaid: 6000,
    timeline: [
      { label: "Refund Requested", date: "23 Apr 2025, 11:10 AM", by: "By Donor" },
      { label: "Refund Approved", date: "23 Apr 2025, 11:30 AM", by: "By Anita Joseph" },
    ],
  },
  {
    id: "REF-00023", donor: "Rachel Lewis", email: "rachel.l@gmail.com", phone: "+91 98765 43215", initials: "RL",
    fund: "Women's Fellowship", amount: 3000, paymentMethod: "Net Banking", refundDate: "2025-04-21", status: "Pending",
    reason: "Donor requested cancellation", notes: "",
    paymentId: "PAY-00043", paymentDate: "2025-04-21", paymentTime: "03:45 PM", amountPaid: 3000,
    timeline: [{ label: "Refund Requested", date: "21 Apr 2025, 03:55 PM", by: "By Donor" }],
  },
  {
    id: "REF-00022", donor: "Kevin Babu", email: "kevin.babu@gmail.com", phone: "+91 98765 43216", initials: "KB",
    fund: "Building Fund", amount: 2500, paymentMethod: "Card", refundDate: "2025-04-20", status: "Failed",
    reason: "Incorrect amount charged", notes: "Card declined during refund processing.",
    paymentId: "PAY-00040", paymentDate: "2025-04-20", paymentTime: "10:00 AM", amountPaid: 2500,
    timeline: [
      { label: "Refund Requested", date: "20 Apr 2025, 10:10 AM", by: "By Parish Office" },
      { label: "Refund Approved", date: "20 Apr 2025, 10:20 AM", by: "By Rev. Michael" },
      { label: "Refund Failed", date: "20 Apr 2025, 10:30 AM", by: "Card declined" },
    ],
  },
  {
    id: "REF-00021", donor: "Neha Mathew", email: "neha.mathew@gmail.com", phone: "+91 98765 43217", initials: "NM",
    fund: "Thanksgiving Fund", amount: 12000, paymentMethod: "UPI", refundDate: "2025-04-18", status: "Completed",
    reason: "Duplicate donation", notes: "",
    paymentId: "PAY-00035", paymentDate: "2025-04-18", paymentTime: "06:05 PM", amountPaid: 12000,
    timeline: [
      { label: "Refund Requested", date: "18 Apr 2025, 06:15 PM", by: "By Donor" },
      { label: "Refund Approved", date: "18 Apr 2025, 06:30 PM", by: "By Anita Joseph" },
      { label: "Refund Processed", date: "18 Apr 2025, 06:45 PM", by: "By System" },
      { label: "Refund Completed", date: "18 Apr 2025, 06:50 PM", by: "Amount credited to donor" },
    ],
  },
  {
    id: "REF-00020", donor: "Grace Paul", email: "grace.paul@gmail.com", phone: "+91 98765 43218", initials: "GP",
    fund: "Medical Aid Fund", amount: 8750, paymentMethod: "Net Banking", refundDate: "2025-04-16", status: "Completed",
    reason: "Other", notes: "Fund drive target already met.",
    paymentId: "PAY-00030", paymentDate: "2025-04-16", paymentTime: "09:00 AM", amountPaid: 8750,
    timeline: [
      { label: "Refund Requested", date: "16 Apr 2025, 09:10 AM", by: "By Parish Office" },
      { label: "Refund Approved", date: "16 Apr 2025, 09:25 AM", by: "By Rev. Michael" },
      { label: "Refund Processed", date: "16 Apr 2025, 09:40 AM", by: "By System" },
      { label: "Refund Completed", date: "16 Apr 2025, 09:45 AM", by: "Amount credited to donor" },
    ],
  },
  {
    id: "REF-00019", donor: "Rev. Michael", email: "michael.priest@gmail.com", phone: "+91 98765 43219", initials: "RM",
    fund: "General Fund", amount: 5000, paymentMethod: "Card", refundDate: "2025-04-15", status: "Failed",
    reason: "Payment made in error", notes: "Card expired before refund could be processed.",
    paymentId: "PAY-00026", paymentDate: "2025-04-15", paymentTime: "08:00 AM", amountPaid: 5000,
    timeline: [
      { label: "Refund Requested", date: "15 Apr 2025, 08:10 AM", by: "By Parish Office" },
      { label: "Refund Failed", date: "15 Apr 2025, 08:30 AM", by: "Card expired" },
    ],
  },
];

/** Pad the seed list out to 28 entries to match "Showing 1 to 10 of 28 refunds". */
export const REFUNDS_MOCK = Array.from({ length: 28 }, (_, i) => {
  const seed = REFUNDS_SEED[i % REFUNDS_SEED.length];
  if (i < REFUNDS_SEED.length) return seed;
  return { ...seed, id: `REF-${String(28 - i).padStart(5, "0")}` };
});

export const REFUNDS_STATS_MOCK = {
  totalRefunds: { value: 28, delta: "16.7%", trendUp: true },
  pendingRefunds: { value: 5, delta: "25%", trendUp: true },
  completedRefunds: { value: 20, delta: "11.1%", trendUp: true },
  failedRefunds: { value: 3, delta: "25%", trendUp: false },
  totalRefundedAmount: { value: 158250, delta: "18.3%", trendUp: true },
};

export const REFUND_SUMMARY_MOCK = {
  totalRefundedAmount: 158250,
  completedAmount: 120750,
  pendingAmount: 22000,
  failedAmount: 15500,
  refundRate: 3.8,
};

export const REFUND_STATUS_BREAKDOWN_MOCK = [
  { label: "Completed", count: 20, pct: 71.4, color: "#16A34A" },
  { label: "Pending", count: 5, pct: 17.9, color: "#F59E0B" },
  { label: "Failed", count: 3, pct: 10.7, color: "#DC2626" },
];

export const REFUND_PAYMENT_METHOD_BREAKDOWN_MOCK = [
  { label: "UPI", amount: 57750, pct: 36.5 },
  { label: "Card", amount: 48250, pct: 30.5 },
  { label: "Net Banking", amount: 36000, pct: 22.7 },
  { label: "Others", amount: 16250, pct: 10.3 },
];

export const REFUND_FOR_OPTIONS = [
  "PAY-00056 - Sunday Offering - ₹10,000.00 (28 Apr 2025)",
  "PAY-00055 - Building Fund - ₹5,000.00 (27 Apr 2025)",
  "PAY-00052 - General Fund - ₹7,500.00 (25 Apr 2025)",
];

export const NEW_REFUND_DEFAULTS = {
  donor: "",
  email: "",
  countryCode: "+91",
  phone: "",
  refundFor: "",
  reason: "",
  refundAmount: "",
  refundDate: "",
  notes: "",
  paymentId: "PAY-00056",
  paymentDate: "28 Apr 2025 10:15 AM",
  paymentMethod: "UPI",
  amountPaid: 10000,
  transactionReference: "",
  internalNotes: "",
};
