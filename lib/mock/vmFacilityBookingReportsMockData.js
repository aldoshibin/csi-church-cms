export const FACILITY_BOOKING_REPORT_COMPARISON_LABEL = "vs Apr 01 - Apr 30, 2026";

export const FACILITY_BOOKING_REPORT_STATS_MOCK = {
  totalBookings: { value: 324, delta: "12.5%", trendUp: true },
  approvedBookings: { value: 210, delta: "15.8%", trendUp: true },
  pendingBookings: { value: 68, delta: "8.3%", trendUp: false },
  rejectedBookings: { value: 46, delta: "5.2%", trendUp: true },
  totalRevenue: { value: "₹ 2,45,600", delta: "18.7%", trendUp: true },
};

export const BOOKINGS_TREND_MOCK = {
  labels: ["May 01", "May 06", "May 11", "May 16", "May 21", "May 26", "May 31"],
  thisMonth: [22, 68, 42, 84, 58, 76, 18],
  lastMonth: [12, 40, 30, 55, 38, 48, 14],
};

export const BOOKINGS_BY_STATUS_REPORT_DONUT_MOCK = {
  total: 324,
  breakdown: [
    { label: "Approved", count: 210, pct: 64.8, color: "#16A34A" },
    { label: "Pending", count: 68, pct: 21.0, color: "#F97316" },
    { label: "Rejected", count: 46, pct: 14.2, color: "#DC2626" },
  ],
};

export const BOOKINGS_BY_FACILITY_REPORT_MOCK = [
  { name: "Main Hall", bookings: 128, revenue: 102400, utilization: 78 },
  { name: "Church Grounds", bookings: 76, revenue: 45600, utilization: 61 },
  { name: "Conference Room", bookings: 52, revenue: 31200, utilization: 54 },
  { name: "Sunday School Room", bookings: 38, revenue: 18600, utilization: 48 },
  { name: "Choir Room", bookings: 30, revenue: 13200, utilization: 42 },
];

export const BOOKINGS_BY_DAY_MOCK = [
  { day: "Monday", bookings: 32, pct: 9.9 },
  { day: "Tuesday", bookings: 48, pct: 14.8 },
  { day: "Wednesday", bookings: 55, pct: 17.0 },
  { day: "Thursday", bookings: 52, pct: 16.0 },
  { day: "Friday", bookings: 45, pct: 13.9 },
  { day: "Saturday", bookings: 60, pct: 18.5 },
  { day: "Sunday", bookings: 32, pct: 9.9 },
];

export const REPORT_OVERVIEW_MOCK = [
  { label: "Total Bookings", sub: "All time", value: "1,842", icon: "CalendarCheck2" },
  { label: "Total Revenue", sub: "All time", value: "₹ 12,45,800", icon: "IndianRupee" },
  { label: "Most Booked Facility", sub: "Main Hall", value: "612 Bookings", icon: "Building2" },
  { label: "Average Booking Value", sub: "This Month", value: "₹ 5,682", icon: "TrendingUp" },
  { label: "Cancellation Rate", sub: "This Month", value: "8.7%", icon: "XCircle" },
];

export const POPULAR_FACILITY_REPORTS_MOCK = [
  { title: "Booking Summary Report", description: "Overview of all bookings", icon: "FileText" },
  { title: "Revenue Report", description: "Track revenue and payments", icon: "IndianRupee" },
  { title: "Facility Utilization Report", description: "See facility usage and availability", icon: "BarChart3" },
  { title: "Cancellation Report", description: "Analyze cancelled bookings", icon: "XCircle" },
  { title: "User Activity Report", description: "Track user booking activities", icon: "Users" },
];
