
export const PARISH_ADMIN_MOCK = {
  cards: {
    upcomingEvents: { value: 12, sublabel: "This Month" },
    sacramentsThisYear: { value: 186, sublabel: "Completed" },
    prayerRequests: { value: 85, sublabel: "Total Requests" },
    announcements: { value: 8, sublabel: "Active" },
    activeCommittees: { value: 15, sublabel: "Committees" },
    branchChurches: { value: 4, sublabel: "Branches" },
  },

  // TODO(backend): events app already has start_datetime/venue — this
  // just needs a "this month, ordered" filter, already close to
  // events.views.EventViewSet.upcoming.
  upcomingEvents: [
    { id: 1, day: "20", month: "MAY", title: "Youth Fellowship Meeting", when: "Tuesday, 6:00 PM", location: "Youth Hall", type: "event" },
    { id: 2, day: "25", month: "MAY", title: "Sunday School Anniversary", when: "Sunday, 9:30 AM", location: "Main Auditorium", type: "event" },
    { id: 3, day: "01", month: "JUN", title: "Holy Communion Service", when: "Sunday, 8:00 AM", location: "Main Church", type: "service", highlight: true },
    { id: 4, day: "07", month: "JUN", title: "Women's Fellowship Meeting", when: "Saturday, 4:00 PM", location: "Fellowship Hall", type: "meeting" },
    { id: 5, day: "15", month: "JUN", title: "Parish Council Meeting", when: "Sunday, 5:00 PM", location: "Conference Room", type: "event" },
  ],

  // TODO(backend): would combine events.Event with attendance.AttendanceSession
  // dates into one calendar feed, tagged by type for the dot colors.
  calendarMonth: "May 2025",
  calendarDays: buildCalendarDays(),

  // TODO(backend): no "Announcement" model exists yet — flagged the same
  // way in the Dashboard's mock data. Needs a small new model + ViewSet.
  // announcements: [
  //   { id: 1, title: "Bible Convention 2025", description: "Annual Bible Convention will be held from May 30 – June 1, 2025.", date: "17 May 2025", color: "border-interactive-500" },
  //   { id: 2, title: "Church Office Holiday", description: "Church office will be closed on May 20, 2025 due to staff retreat.", date: "16 May 2025", color: "border-accent-400" },
  //   { id: 3, title: "Blood Donation Camp", description: "Blood donation camp on June 5, 2025. Please participate and support.", date: "15 May 2025", color: "border-danger-500" },
  //   { id: 4, title: "Sunday School Summer Classes", description: "Summer classes will begin from June 10, 2025.", date: "14 May 2025", color: "border-success-500" },
  //   { id: 5, title: "Youth Retreat Registration", description: "Register for Youth Retreat before May 25, 2025.", date: "13 May 2025", color: "border-danger-500" },
  // ],
  announcements: [
  {
    id: 1,
    title: "Bible Convention 2025",
    description:
      "Annual Bible Convention will be held from May 30 – June 1, 2025.",
    date: "17 May 2025",
    color: "border-l-[#009688]",
    borderColor: "#009688",
  },
  {
    id: 2,
    title: "Church Office Holiday",
    description:
      "Church office will be closed on May 20, 2025 due to staff retreat.",
    date: "16 May 2025",
    
    color: "border-l-[#FF8A00]",
    borderColor: "#ff8a00",
  },
  {
    id: 3,
    title: "Blood Donation Camp",
    description:
      "Blood donation camp on June 5, 2025. Please participate and support.",
    date: "15 May 2025",
    color: "border-l-[#009688]",
    borderColor: "#009688",
  },
  {
    id: 4,
    title: "Sunday School Summer Classes",
    description:
      "Summer classes will begin from June 10, 2025.",
    date: "14 May 2025",
    color: "border-l-[#FF5252]",
    borderColor: "#FF5252",
  },
  {
    id: 5,
    title: "Youth Retreat Registration",
    description:
      "Register for Youth Retreat before May 25, 2025.",
    date: "13 May 2025",
    color: "border-l-[#009688]",
    borderColor: "#009688",
  },
],

  // TODO(backend): prayers.PrayerRequest.status breakdown — straightforward
  // count-by-status addition to reports.views, same shape as the
  // Dashboard's prayerRequests mock.
  prayerRequestSummary: {
    total: 85,
    breakdown: [
      { label: "New Requests", count: 12, percent: 14.1, color: "#3B5BDB" },
      { label: "In Prayer", count: 28, percent: 32.9, color: "#E8983A" },
      { label: "Answered", count: 45, percent: 52.9, color: "#1E9E5A" },
    ],
  },

  // TODO(backend): members.Member.date_of_birth filtered to the current
  // week — a narrower version of the Dashboard's birthdaysForMonth action.
  birthdaysThisWeek: [
    { id: 1, initials: "JS", name: "John Samuel", date: "20 May" },
    { id: 2, initials: "MS", name: "Mary Samuel", date: "21 May" },
    { id: 3, initials: "DS", name: "David Samuel", date: "22 May" },
    { id: 4, initials: "RS", name: "Ruth Samuel", date: "23 May" },
    { id: 5, initials: "AS", name: "Anna Samuel", date: "24 May" },
  ],

  // TODO(backend): members.Member.marriage_date filtered to the current
  // week, paired by spouse_name — same data already used by the
  // Dashboard's anniversary_members, just narrower.
  anniversariesThisWeek: [
    { id: 1, names: "John & Mary Samuel", date: "20 May" },
    { id: 2, names: "David & Ruth Samuel", date: "22 May" },
    { id: 3, names: "Daniel & Anna Samuel", date: "24 May" },
  ],

  // TODO(backend): no "Committee" model exists yet. Would need a new
  // small model (name, member capacity, members joined) — distinct from
  // Ministry, since committees here look like governance bodies
  // (Parish Council, Finance Committee) rather than ministries.
  committees: [
    { id: 1, name: "Parish Council", filled: 8, capacity: 10 },
    { id: 2, name: "Finance Committee", filled: 6, capacity: 8 },
    { id: 3, name: "Worship Committee", filled: 7, capacity: 10 },
    { id: 4, name: "Youth Committee", filled: 5, capacity: 7 },
    { id: 5, name: "Outreach Committee", filled: 6, capacity: 9 },
  ],

  // TODO(backend): accounts.Church already models a parish/branch
  // relationship via Diocese -> Church; this table just needs a
  // per-church aggregation of family/member counts and last service date.
  branchChurches: [
    { id: 1, name: "St. Peter's Church", location: "Nagercoil", families: 120, members: 456, lastService: "18 May 2025", activities: "Sunday Service, Prayer Meet", status: "Active" },
    { id: 2, name: "Good Shepherd Church", location: "Kanyakumari", families: 86, members: 312, lastService: "18 May 2025", activities: "Sunday School, Bible Study", status: "Active" },
    { id: 3, name: "CSI Bethel Church", location: "Marungoor", families: 64, members: 198, lastService: "11 May 2025", activities: "Youth Fellowship", status: "Active" },
    { id: 4, name: "Emmanuel Church", location: "Thovalai", families: 74, members: 265, lastService: "17 May 2025", activities: "Family Fellowship", status: "Active" },
  ],
};


function buildCalendarDays() {
  const days = [];
  // Leading days from April
  for (let d = 27; d <= 30; d++) days.push({ date: d, inMonth: false });
  // May 1–31
  const tags = { 1: "service", 18: "service", 25: "service" };
  const italicDates = new Set([12, 20]);
  for (let d = 1; d <= 31; d++) {
    days.push({ date: d, inMonth: true, tag: tags[d], italic: italicDates.has(d) });
  }
  // Trailing days from June
  for (let d = 1; d <= 7; d++) days.push({ date: d, inMonth: false });
  return days;
}
