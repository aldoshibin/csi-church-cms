
export const COMMITTEES_MOCK = {
  dataAsOf: "23 May 2025",

  cards: {
    totalCommittees: { value: 24, sublabel: "Across all branches" },
    activeCommittees: { value: 18, sublabel: "Currently active" },
    pendingActivities: { value: 27, sublabel: "Require attention" },
    completedActivities: { value: 142, sublabel: "This month" },
    committeeMembers: { value: 368, sublabel: "Across all committees" },
    upcomingMeetings: { value: 12, sublabel: "Next 7 days" },
  },

  tabs: ["Overview", "Committees", "Activities", "Meetings", "Tasks", "Reports"],

  // TODO(backend): committees app doesn't exist yet — would need new
  // models for Committee, CommitteeActivity, CommitteeMeeting, and
  // CommitteeTask to support all 6 tabs for real (flagged the same way
  // back on the Parish Administration overview page, which also has a
  // "Committee Activity Overview" widget pointing here).
  performanceOverview: [
    { month: "Dec 2024", activitiesCompleted: 88, newActivities: 22 },
    { month: "Jan 2025", activitiesCompleted: 95, newActivities: 30 },
    { month: "Feb 2025", activitiesCompleted: 118, newActivities: 38 },
    { month: "Mar 2025", activitiesCompleted: 122, newActivities: 42 },
    { month: "Apr 2025", activitiesCompleted: 128, newActivities: 40 },
    { month: "May 2025", activitiesCompleted: 142, newActivities: 41 },
  ],

  activityStatus: [
    { label: "Completed", count: 142, percent: 72.4, color: "#0E5C4E" },
    { label: "In Progress", count: 27, percent: null, color: "#3B5BDB" },
    { label: "Pending", count: 21, percent: 10.7, color: "#E8983A" },
    { label: "Cancelled", count: 6, percent: 3.1, color: "#E0457B" },
  ],

  memberParticipation: [
    { label: "Active", count: 268, percent: 72.8, color: "#0E5C4E" },
    { label: "Moderate", count: 66, percent: 17.9, color: "#3B5BDB" },
    { label: "Low", count: 24, percent: 6.5, color: "#E8983A" },
    { label: "Inactive", count: 10, percent: 2.7, color: "#E0457B" },
  ],

  quickActions: ["Add New Committee", "Schedule Meeting", "Add New Activity", "Assign Task", "Generate Report"],

  committeeSummary: [
    { label: "Active Committees", value: 18 },
    { label: "Inactive Committees", value: 6 },
    { label: "Total Activities (This Month)", value: 196 },
    { label: "Total Members", value: 368 },
    { label: "Avg. Member Participation", value: "72.8%" },
  ],

  recentActivities: [
    { id: 1, icon: "medical", title: "Medical Camp Organized", committee: "Health Committee", date: "23 May 2025" },
    { id: 2, icon: "people", title: "Youth Retreat Planning", committee: "Youth Ministry Committee", date: "22 May 2025" },
    { id: 3, icon: "book", title: "Sunday School Curriculum Update", committee: "Christian Education Committee", date: "21 May 2025" },
    { id: 4, icon: "music", title: "Choir Practice Session", committee: "Worship Committee", date: "20 May 2025" },
    { id: 5, icon: "leaf", title: "Environment Clean-up Drive", committee: "Social Service Committee", date: "19 May 2025" },
  ],

  upcomingCommitteeMeetings: [
    { id: 1, title: "Finance Committee Meeting", date: "24 May 2025 (Sat)", time: "10:00 AM", location: "Parish Office Conference Room" },
    { id: 2, title: "Worship Committee Meeting", date: "25 May 2025 (Sun)", time: "11:30 AM", location: "Church Meeting Hall" },
    { id: 3, title: "Youth Ministry Meeting", date: "27 May 2025 (Tue)", time: "06:00 PM", location: "Youth Room" },
    { id: 4, title: "Social Service Committee Meeting", date: "28 May 2025 (Wed)", time: "04:00 PM", location: "Parish Office Conference Room" },
  ],

  committeeWiseActivitySummary: [
    { id: 1, name: "Worship Committee", total: 28, completed: 22, inProgress: 4, pending: 2, cancelled: 7 },
    { id: 2, name: "Christian Education Committee", total: 24, completed: 18, inProgress: 3, pending: 3, cancelled: 7 },
    { id: 3, name: "Youth Ministry Committee", total: 22, completed: 15, inProgress: 4, pending: 3, cancelled: 6 },
    { id: 4, name: "Social Service Committee", total: 26, completed: 19, inProgress: 5, pending: 2, cancelled: 7 },
    { id: 5, name: "Finance Committee", total: 18, completed: 14, inProgress: 2, pending: 2, cancelled: 7 },
    { id: 6, name: "Property Management Committee", total: 16, completed: 10, inProgress: 3, pending: 3, cancelled: 6 },
  ],

  committees: [
    { id: 1, name: "Worship Committee", chairperson: "Rev. Michael", members: 24, status: "Active" },
    { id: 2, name: "Finance Committee", chairperson: "John Samuel", members: 18, status: "Active" },
    { id: 3, name: "Youth Ministry Committee", chairperson: "Mary Samuel", members: 22, status: "In Progress" },
    { id: 4, name: "Social Service Committee", chairperson: "David Joseph", members: 26, status: "Active" },
  ],
};

const ICON_BG_CLASS = {
  medical: "bg-success-50 text-success-600",
  people: "bg-success-50 text-success-600",
  book: "bg-success-50 text-success-600",
  music: "bg-success-50 text-success-600",
  leaf: "bg-success-50 text-success-600",
};

export function iconBgClass(icon) {
  return ICON_BG_CLASS[icon] ?? "bg-surface-muted text-ink-muted";
}

const STATUS_BADGE_CLASS = {
  Active: "bg-success-50 text-success-600",
  "In Progress": "bg-interactive-50 text-interactive-600",
  Inactive: "bg-surface-muted text-ink-muted",
};

export function statusBadgeClass(status) {
  return STATUS_BADGE_CLASS[status] ?? "bg-surface-muted text-ink-muted";
}
