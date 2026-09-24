// Reports & Analytics — the top-level "Reports & Analytics" sidebar module's
// executive dashboard (route: /reports). This is a genuinely new module with
// no page built before this batch. An unrelated, never-wired-up scaffold
// already existed (services/reportsService.js, hooks/useReports.js,
// lib/mock/reportsMockData.js) for a different, member/finance-list-focused
// design that no page ever used — left completely untouched; this file uses
// a distinct name to avoid any confusion with it. See README_CHANGES.txt.

export const REPORTS_ANALYTICS_DATE_RANGE_LABEL = "This Year (Jan 1 - Dec 31, 2026)";

export const REPORTS_ANALYTICS_STATS_MOCK = {
  totalDonations: { value: "₹8,65,000", sub: "This Year", trend: "↑ 18.6% vs Last Year" },
  totalDonors: { value: 98, sub: "This Year", trend: "↑ 10.2% vs Last Year" },
  missionTrips: { value: 6, sub: "This Year", trend: "↑ 20.0% vs Last Year" },
  participants: { value: 186, sub: "This Year", trend: "↑ 12.4% vs Last Year" },
  outreachPrograms: { value: 12, sub: "This Year", trend: "↑ 14.3% vs Last Year" },
  totalExpenses: { value: "₹3,45,750", sub: "This Year", trend: "↑ 9.8% vs Last Year" },
};

// Same shape/values as the Mission & Evangelism Donations page's own
// "Donations by Month" chart — both mockups show the identical curve.
export const REPORTS_DONATIONS_OVER_TIME_MOCK = [
  { month: "Jan", amount: 35000 },
  { month: "Feb", amount: 62000 },
  { month: "Mar", amount: 78000 },
  { month: "Apr", amount: 80000 },
  { month: "May", amount: 130000 },
  { month: "Jun", amount: 92000 },
  { month: "Jul", amount: 68000 },
  { month: "Aug", amount: 58000 },
  { month: "Sep", amount: 98000 },
  { month: "Oct", amount: 63000 },
  { month: "Nov", amount: 58000 },
  { month: "Dec", amount: 113000 },
];

const DONATION_FUND_COLOR_MAP = {
  "General Fund": "#16A34A",
  "Mission & Outreach": "#2563EB",
  "Building Fund": "#7C3AED",
  "Sunday School": "#EA580C",
  Others: "#DC2626",
};

// Matches the Mission & Evangelism Donations page's own donut exactly.
export const REPORTS_DONATIONS_BY_FUND_MOCK = {
  total: 865000,
  breakdown: [
    { label: "General Fund", value: 405000, color: DONATION_FUND_COLOR_MAP["General Fund"] },
    { label: "Mission & Outreach", value: 210000, color: DONATION_FUND_COLOR_MAP["Mission & Outreach"] },
    { label: "Building Fund", value: 135000, color: DONATION_FUND_COLOR_MAP["Building Fund"] },
    { label: "Sunday School", value: 75000, color: DONATION_FUND_COLOR_MAP["Sunday School"] },
    { label: "Others", value: 40000, color: DONATION_FUND_COLOR_MAP.Others },
  ],
};

export const REPORTS_DONATIONS_BY_PAYMENT_METHOD_MOCK = {
  total: 865000,
  breakdown: [
    { label: "Online", value: 405000, color: "#16A34A" },
    { label: "Card", value: 200000, color: "#2563EB" },
    { label: "UPI", value: 150000, color: "#7C3AED" },
    { label: "Cash", value: 110000, color: "#EA580C" },
  ],
};

// "Top Mission Trips by Participants" — this is literally the first 5 of
// the module's own 6 Mission Trips (TRIP-1..TRIP-5, TRIP-6 "Christmas
// Blessing Mission" omitted), reproduced in that same order rather than
// actually sorted by participant count — the mockup's own table isn't
// numerically sorted despite its title, so that's kept verbatim rather
// than "corrected".
export const REPORTS_MISSION_TRIPS_OVERVIEW_MOCK = {
  stats: { totalTrips: 6, destinations: 4, participants: 186, daysOfOutreach: 48 },
  topTrips: [
    { id: "TRIP-1", name: "Youth Outreach Mission", destination: "Perungudi Beach", startDate: "2026-05-05", participants: 28 },
    { id: "TRIP-2", name: "Medical Awareness Camp", destination: "Nesapakkam, Chennai", startDate: "2026-05-22", participants: 32 },
    { id: "TRIP-4", name: "Children's VBS Outreach", destination: "Kanchipuram", startDate: "2026-07-15", participants: 38 },
    { id: "TRIP-5", name: "Community Service Trip", destination: "Besant Nagar Beach", startDate: "2026-08-05", participants: 24 },
    { id: "TRIP-3", name: "Rural Evangelism Trip", destination: "Tiruvallur", startDate: "2026-06-10", participants: 26 },
  ],
  maxParticipants: 40,
};

// Outreach Programs total here reads 12, same as the Reports stat card
// above but different from the Outreach Programs list page's own "Total
// Programs" stat card (18) — both numbers are stated explicitly in their
// own mockups, so both are kept as shown rather than reconciled.
export const REPORTS_OUTREACH_PROGRAMS_SUMMARY_MOCK = {
  stats: { totalPrograms: 12, beneficiaries: 1250, locations: 7, volunteers: 96 },
  impactByCategory: [
    { label: "Education", pct: 35 },
    { label: "Medical", pct: 25 },
    { label: "Community Service", pct: 20 },
    { label: "Spiritual", pct: 12 },
    { label: "Others", pct: 8 },
  ],
};

export const REPORTS_CEMETERY_OVERVIEW_MOCK = {
  stats: { totalBurials: 45, burialPlotsSold: 32, availablePlots: 68, maintenanceRequests: 12 },
  recentBurials: [
    { name: "Mr. Samuel David", burialDate: "2026-05-15", location: "Block A - Plot 12", age: 78 },
    { name: "Mrs. Mary Elizabeth", burialDate: "2026-05-14", location: "Block B - Plot 07", age: 65 },
    { name: "Mr. John Peter", burialDate: "2026-05-10", location: "Block A - Plot 18", age: 82 },
  ],
};

export const REPORTS_YEARLY_COMPARISON_MOCK = [
  { key: "donations", label: "Donations", icon: "HandCoins", iconBg: "bg-[#DCFCE7]", iconColor: "text-[#16A34A]", thisYear: "₹8,65,000", lastYear: "₹7,29,000", trend: "↑ 18.6%" },
  { key: "donors", label: "Donors", icon: "User", iconBg: "bg-[#FFEDD5]", iconColor: "text-[#EA580C]", thisYear: 98, lastYear: 89, trend: "↑ 10.2%" },
  { key: "participants", label: "Participants", icon: "Users2", iconBg: "bg-[#F3E8FF]", iconColor: "text-[#7C3AED]", thisYear: 186, lastYear: 165, trend: "↑ 12.4%" },
  { key: "expenses", label: "Expenses", icon: "Wallet", iconBg: "bg-[#DBEAFE]", iconColor: "text-[#2563EB]", thisYear: "₹3,45,750", lastYear: "₹3,15,000", trend: "↑ 9.8%" },
];

export const REPORTS_RECENT_REPORTS_MOCK = [
  { key: "r1", name: "Donation Summary Report", dateTimeText: "May 15, 2026 at 10:30 AM", format: "PDF" },
  { key: "r2", name: "Mission Trips Report", dateTimeText: "May 14, 2026 at 04:15 PM", format: "PDF" },
  { key: "r3", name: "Expense Report", dateTimeText: "May 14, 2026 at 03:40 PM", format: "Excel" },
  { key: "r4", name: "Outreach Programs Report", dateTimeText: "May 13, 2026 at 11:20 AM", format: "PDF" },
];
