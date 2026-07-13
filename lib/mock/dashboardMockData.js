
export const DASHBOARD_MOCK = {
  cards: {
    totalFamilies: { value: 1248, delta: "+24 this month" },
    totalMembers: { value: 4732, delta: "+68 this month" },
    activeMembers: { value: 3890, delta: "82.2% of total" },
    baptizedMembers: { value: 4215, delta: "+55 this month" },
    newMembers: { value: 32, delta: "+12 this month" },
    contributions: { value: 245780, delta: "+15.6% vs Apr" },
  },

  memberTrend: [
    { month: "Dec 2024", totalMembers: 4520, activeMembers: 3640, newMembers: 18 },
    { month: "Jan 2025", totalMembers: 4560, activeMembers: 3680, newMembers: 14 },
    { month: "Feb 2025", totalMembers: 4610, activeMembers: 3720, newMembers: 22 },
    { month: "Mar 2025", totalMembers: 4655, activeMembers: 3760, newMembers: 19 },
    { month: "Apr 2025", totalMembers: 4700, activeMembers: 3820, newMembers: 28 },
    { month: "May 2025", totalMembers: 4732, activeMembers: 3890, newMembers: 32 },
  ],

  upcomingEvents: [
    { id: 1, day: "20", month: "MAY", title: "Youth Fellowship Meeting", when: "Tuesday, 6:00 PM", location: "Youth Hall" },
    { id: 2, day: "25", month: "MAY", title: "Sunday School Anniversary", when: "Sunday, 9:30 AM", location: "Auditorium" },
    { id: 3, day: "01", month: "JUN", title: "Holy Communion Service", when: "Sunday, 8:00 AM", location: "Main Church", highlight: true },
    { id: 4, day: "07", month: "JUN", title: "Women's Fellowship", when: "Saturday, 4:00 PM", location: "Hall" },
    { id: 5, day: "15", month: "JUN", title: "Parish Council Meeting", when: "Sunday, 5:00 PM", location: "Conference Room" },
  ],

  todaysSchedule: [
    { id: 1, time: "08:00 AM", title: "Holy Communion Service", location: "Main Church" },
    { id: 2, time: "09:30 AM", title: "Sunday School Classes", location: "Sunday School Rooms" },
    { id: 3, time: "11:00 AM", title: "English Service", location: "Main Church" },
    { id: 4, time: "04:00 PM", title: "Choir Practice", location: "Music Room" },
    { id: 5, time: "06:00 PM", title: "Youth Meeting", location: "Youth Hall" },
  ],

  // TODO(backend): extend reports.views to aggregate from sacraments app's
  // 4 register models, filtered to the current year.
  sacramentSummary: [
    { label: "Baptisms", count: 56, icon: "baptism" },
    { label: "Confirmations", count: 48, icon: "confirmation" },
    { label: "First Communions", count: 62, icon: "communion" },
    { label: "Marriages", count: 18, icon: "marriage" },
    { label: "Funerals", count: 23, icon: "funeral" },
  ],

  // TODO(backend): reports.views already aggregates income by category —
  // this just needs a thin re-shape to feed a donut instead of a bar chart.
  financialOverview: {
    totalIncome: 245780,
    breakdown: [
      { label: "Tithe", amount: 120000, color: "#3B5BDB" },
      { label: "Offerings", amount: 65300, color: "#1E9E5A" },
      { label: "Donations", amount: 45250, color: "#D4A24C" },
      { label: "Other Income", amount: 15230, color: "#8B5CF6" },
    ],
  },

  // TODO(backend): prayers app has PrayerRequest.status already — this is
  // just a status-breakdown count endpoint away from being real.
  prayerRequests: {
    newRequests: 12,
    inPrayer: 28,
    answered: 45,
    total: 85,
  },

  recentRegistrations: [
    { id: 1, name: "James Thomas", type: "New Member", date: "18/05/2025", addedBy: "Parish Office" },
    { id: 2, name: "Anna Grace", type: "New Member", date: "18/05/2025", addedBy: "Parish Office" },
    { id: 3, name: "Michael David", type: "New Member", date: "17/05/2025", addedBy: "Parish Office" },
    { id: 4, name: "Sarah Elizabeth", type: "New Family", date: "16/05/2025", addedBy: "Parish Office" },
  ],

  recentContributions: [
    { id: 1, donor: "John Samuel", amount: 10000, type: "Tithe", date: "18/05/2025" },
    { id: 2, donor: "Mary Samuel", amount: 5000, type: "Sunday Offering", date: "18/05/2025" },
    { id: 3, donor: "David Joseph", amount: 7500, type: "Donation", date: "17/05/2025" },
    { id: 4, donor: "George Thomas", amount: 3000, type: "Mission Offering", date: "17/05/2025" },
  ],

  announcements: [
    {
      id: 1, title: "Bible Convention 2025",
      description: "Annual Bible Convention will be held from May 30 - June 1, 2025.",
      date: "17 May 2025",
    },
    {
      id: 2, title: "Church Office Holiday",
      description: "Church office will be closed on May 20, 2025 due to staff retreat.",
      date: "16 May 2025",
    },
    {
      id: 3, title: "Blood Donation Camp",
      description: "Please participate and support.",
      date: "15 May 2025", highlight: true,
    },
  ],
};
