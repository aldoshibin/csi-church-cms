export const OG_STATS_MOCK = {
  totalDonations: { value: 842650, delta: "18.6%", trendUp: true },
  successfulTransactions: { value: 326, delta: "14.2%", trendUp: true },
  uniqueDonors: { value: 142, delta: "10.1%", trendUp: true },
  recurringDonations: { value: 67, delta: "8.3%", trendUp: true },
  refundsThisPeriod: { value: 12450, delta: "5.6%", trendUp: false },
};

export const OG_DONATIONS_OVERVIEW_MOCK = [
  { label: "01 May", thisPeriod: 32000, lastPeriod: 22000 },
  { label: "02 May", thisPeriod: 38000, lastPeriod: 28000 },
  { label: "03 May", thisPeriod: 35000, lastPeriod: 30000 },
  { label: "04 May", thisPeriod: 45000, lastPeriod: 26000 },
  { label: "05 May", thisPeriod: 40000, lastPeriod: 32000 },
  { label: "06 May", thisPeriod: 52000, lastPeriod: 34000 },
  { label: "07 May", thisPeriod: 48000, lastPeriod: 30000 },
  { label: "08 May", thisPeriod: 42000, lastPeriod: 27000 },
  { label: "09 May", thisPeriod: 58000, lastPeriod: 36000 },
  { label: "10 May", thisPeriod: 84000, lastPeriod: 40000 },
  { label: "11 May", thisPeriod: 60000, lastPeriod: 33000 },
  { label: "12 May", thisPeriod: 55000, lastPeriod: 29000 },
  { label: "13 May", thisPeriod: 62000, lastPeriod: 35000 },
  { label: "14 May", thisPeriod: 58000, lastPeriod: 31000 },
  { label: "15 May", thisPeriod: 70000, lastPeriod: 38000 },
  { label: "16 May", thisPeriod: 78000, lastPeriod: 42000 },
  { label: "17 May", thisPeriod: 65000, lastPeriod: 37000 },
  { label: "18 May", thisPeriod: 72000, lastPeriod: 40000 },
];

export const OG_PAYMENT_METHOD_MOCK = {
  total: 842650,
  breakdown: [
    { label: "UPI", amount: 379192.5, pct: 45, color: "#16A34A" },
    { label: "Credit Card", amount: 210662.5, pct: 25, color: "#2563EB" },
    { label: "Net Banking", amount: 126397.5, pct: 15, color: "#7C3AED" },
    { label: "Debit Card", amount: 84265, pct: 10, color: "#EA580C" },
    { label: "Others", amount: 42132.5, pct: 5, color: "#94A3B8" },
  ],
};

export const OG_FUND_BREAKDOWN_MOCK = [
  { label: "Sunday Offering", amount: 295927.5, pct: 35 },
  { label: "Building Fund", amount: 210662.5, pct: 25 },
  { label: "Mission Fund", amount: 126397.5, pct: 15 },
  { label: "General Fund", amount: 84265, pct: 10 },
  { label: "Youth Ministry", amount: 67412.5, pct: 8 },
  { label: "Others", amount: 58985, pct: 7 },
];

export const OG_RECENT_DONATIONS_MOCK = [
  { id: 1, date: "2025-05-18", time: "10:30 AM", donor: "John Samuel", email: "john.samuel@gmail.com", initials: "JS", fund: "Sunday Offering", amount: 1200, paymentMethod: "UPI", status: "Successful" },
  { id: 2, date: "2025-05-18", time: "09:45 AM", donor: "Anita Joseph", email: "anita.joseph@gmail.com", initials: "AJ", fund: "Building Fund", amount: 5000, paymentMethod: "Credit Card", status: "Successful" },
  { id: 3, date: "2025-05-18", time: "09:20 AM", donor: "Peter Thomas", email: "peter.thomas@gmail.com", initials: "PT", fund: "Mission Fund", amount: 2500, paymentMethod: "Net Banking", status: "Successful" },
  { id: 4, date: "2025-05-17", time: "08:15 PM", donor: "Rev. Michael", email: "michael.priest@gmail.com", initials: "RM", fund: "General Fund", amount: 750, paymentMethod: "UPI", status: "Successful" },
  { id: 5, date: "2025-05-17", time: "06:40 PM", donor: "Sharon Matthew", email: "sharon.m@gmail.com", initials: "SM", fund: "Thanksgiving", amount: 1800, paymentMethod: "Debit Card", status: "Successful" },
];
export const OG_RECENT_DONATIONS_TOTAL_COUNT = 326;

export const OG_QUICK_STATS_MOCK = {
  activePaymentLinks: 12,
  pendingTransactions: 5,
  pledges: 8,
};

export const OG_PAYMENT_SUMMARY_MOCK = {
  totalDonations: 842650,
  totalRefunds: 12450,
  netDonations: 830200,
  averageDonation: 2583.13,
};

export const OG_TOP_DONORS_MOCK = [
  { rank: 1, name: "John Samuel", initials: "JS", amount: 15000 },
  { rank: 2, name: "Anita Joseph", initials: "AJ", amount: 10000 },
  { rank: 3, name: "Peter Thomas", initials: "PT", amount: 7500 },
  { rank: 4, name: "Rev. Michael", initials: "RM", amount: 5000 },
  { rank: 5, name: "Sharon Matthew", initials: "SM", amount: 3000 },
];

export const OG_PAYMENT_METHOD_BADGE = {
  "UPI": { bg: "bg-success-50", color: "text-success-600" },
  "Credit Card": { bg: "bg-interactive-50", color: "text-interactive-600" },
  "Net Banking": { bg: "bg-[#F3E8FF]", color: "text-[#7C3AED]" },
  "Debit Card": { bg: "bg-warning-50", color: "text-warning-600" },
};
