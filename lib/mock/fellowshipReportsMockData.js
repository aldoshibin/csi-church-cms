// Mock data for Men's Fellowship > Reports — maps to mens_fellowship/reports/views.py once wired up.
// NOTE: distinct from lib/mock/reportsMockData.js, which powers the church-wide Reports & Analytics module.

export const FELLOWSHIP_REPORTS_STATS_MOCK = {
  totalMembers: { value: 256, delta: "11.2%", trendUp: true },
  totalMeetings: { value: 24, delta: "33.3%", trendUp: true },
  activitiesConducted: { value: 18, delta: "20.0%", trendUp: true },
  totalParticipants: { value: 186, delta: "12.5%", trendUp: true },
};

export const FELLOWSHIP_REPORT_CATEGORY_TABS = ["All Reports", "Membership", "Meetings", "Attendance", "Activities", "Ministry", "Finance"];

export const FELLOWSHIP_REPORT_CATEGORY_BADGE = {
  Membership: "success",
  Meetings: "accent",
  Attendance: "warning",
  Activities: "info",
  Ministry: "success",
  Finance: "danger",
  Custom: "default",
};

const ICON_KEY = {
  Membership: "users",
  Meetings: "calendar",
  Attendance: "check",
  Activities: "activity",
  Ministry: "sprout",
  Finance: "dollar",
  Custom: "file",
};

export const FELLOWSHIP_REPORTS_LIST_MOCK = [
  { id: "FRPT-001", name: "Membership Report", description: "Overview of total members, new members and member status.", category: "Membership", lastGenerated: "2024-05-25T10:30:00", icon: ICON_KEY.Membership },
  { id: "FRPT-002", name: "Meeting Report", description: "Summary of all meetings conducted, upcoming meetings and attendance.", category: "Meetings", lastGenerated: "2024-05-25T09:45:00", icon: ICON_KEY.Meetings },
  { id: "FRPT-003", name: "Attendance Report", description: "Detailed attendance report for meetings and events.", category: "Attendance", lastGenerated: "2024-05-25T09:15:00", icon: ICON_KEY.Attendance },
  { id: "FRPT-004", name: "Activity Report", description: "Summary of all activities organized and participation.", category: "Activities", lastGenerated: "2024-05-24T18:20:00", icon: ICON_KEY.Activities },
  { id: "FRPT-005", name: "Ministry Report", description: "Overview of ministries, leaders and involvement.", category: "Ministry", lastGenerated: "2024-05-24T17:40:00", icon: ICON_KEY.Ministry },
  { id: "FRPT-006", name: "Finance Report", description: "Income, expenses and fund utilization summary.", category: "Finance", lastGenerated: "2024-05-24T16:30:00", icon: ICON_KEY.Finance },
  { id: "FRPT-007", name: "Custom Report", description: "Create a custom report based on your selected filters.", category: "Custom", lastGenerated: null, icon: ICON_KEY.Custom },
];

export const FELLOWSHIP_REPORTS_OVERVIEW_MOCK = {
  breakdown: [
    { label: "Membership", count: 1, color: "#16A34A" },
    { label: "Meetings", count: 1, color: "#7C3AED" },
    { label: "Attendance", count: 1, color: "#F97316" },
    { label: "Activities", count: 1, color: "#2563EB" },
    { label: "Ministry", count: 1, color: "#0D9488" },
    { label: "Finance", count: 1, color: "#DC2626" },
  ],
};

export const FELLOWSHIP_RECENT_REPORTS_MOCK = [
  { name: "Membership Report", generatedOn: "2024-05-25T10:30:00", icon: ICON_KEY.Membership },
  { name: "Meeting Report", generatedOn: "2024-05-25T09:45:00", icon: ICON_KEY.Meetings },
  { name: "Attendance Report", generatedOn: "2024-05-25T09:15:00", icon: ICON_KEY.Attendance },
];
