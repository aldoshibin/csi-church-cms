// Mission & Evangelism — Overview dashboard + Outreach Programs (list, add, detail)

export const OUTREACH_CATEGORY_COLOR_MAP = {
  "Community Service": "#16A34A",
  "Gospel Outreach": "#2563EB",
  "Education Support": "#D97706",
  "Medical Camps": "#7C3AED",
  Others: "#DB2777",
};

export const OUTREACH_STATUS_BADGE_MAP = {
  Completed: "success",
  Ongoing: "warning",
  Upcoming: "info",
  Planned: "default",
  Cancelled: "danger",
};

export const OUTREACH_CATEGORY_OPTIONS = Object.keys(OUTREACH_CATEGORY_COLOR_MAP);
export const OUTREACH_ACTIVITY_TYPE_OPTIONS = [
  "Outreach Program", "Mission Trip", "Community Service", "Fundraiser", "Awareness Campaign",
];
export const OUTREACH_ORGANIZER_OPTIONS = [
  "CSI St. John's Church", "Men's Fellowship", "Women's Fellowship", "Youth Ministry", "Sunday School",
];
export const OUTREACH_STATUS_OPTIONS = ["Planned", "Upcoming", "Ongoing", "Completed", "Cancelled"];
export const OUTREACH_VISIBILITY_OPTIONS = ["Public", "Members Only", "Private"];
export const OUTREACH_COORDINATOR_OPTIONS = ["Anita Samuel", "Rev. Michael", "George Philip", "Mary Abraham", "Daniel Joseph"];
export const OUTREACH_DEPARTMENT_OPTIONS = ["Men's Fellowship", "Women's Fellowship", "Youth Ministry", "Sunday School", "Choir Ministry"];

export const NEW_ACTIVITY_DEFAULTS = {
  activityName: "", category: "", activityType: "", organizedBy: "", status: "", visibility: "",
  description: "", location: "", date: "", startTime: "", endTime: "",
  targetAudience: "", expectedParticipants: "",
  coordinator: "", contactNumber: "", email: "", departmentsInvolved: "", volunteersNeeded: "",
};

export const ACTIVITY_TIPS_MOCK = [
  { key: "clear", icon: "FileText", iconBg: "bg-[#DCFCE7]", iconColor: "text-[#16A34A]", title: "Be Clear & Specific", description: "Provide a clear name and description so others understand the purpose of the activity." },
  { key: "goals", icon: "Target", iconBg: "bg-[#F3E8FF]", iconColor: "text-[#7C3AED]", title: "Set Realistic Goals", description: "Define expected participants and required resources to plan better." },
  { key: "coordinator", icon: "User", iconBg: "bg-[#FFEDD5]", iconColor: "text-[#EA580C]", title: "Assign a Coordinator", description: "Choose a responsible person to oversee and manage the activity smoothly." },
  { key: "plan", icon: "Calendar", iconBg: "bg-[#DBEAFE]", iconColor: "text-[#2563EB]", title: "Plan Ahead", description: "Add the activity well in advance and promote it to reach more people." },
  { key: "records", icon: "FolderOpen", iconBg: "bg-[#DCFCE7]", iconColor: "text-[#16A34A]", title: "Keep Records", description: "Attach relevant documents and reports for future reference." },
];

export const OUTREACH_STATS_MOCK = {
  totalActivities: { value: 18, sub: "This Year" },
  peopleReached: { value: "3,245", sub: "This Year" },
  volunteersInvolved: { value: 156, sub: "This Year" },
  totalDonations: { value: "₹4,85,250", sub: "This Year" },
  missionTrips: { value: 6, sub: "This Year" },
};

export const OUTREACH_BY_CATEGORY_MOCK = {
  total: 18,
  breakdown: [
    { label: "Community Service", value: 6, color: OUTREACH_CATEGORY_COLOR_MAP["Community Service"] },
    { label: "Gospel Outreach", value: 5, color: OUTREACH_CATEGORY_COLOR_MAP["Gospel Outreach"] },
    { label: "Education Support", value: 3, color: OUTREACH_CATEGORY_COLOR_MAP["Education Support"] },
    { label: "Medical Camps", value: 2, color: OUTREACH_CATEGORY_COLOR_MAP["Medical Camps"] },
    { label: "Others", value: 2, color: OUTREACH_CATEGORY_COLOR_MAP.Others },
  ],
};

// The Outreach Activities Over Time chart's own monthly figures (2, 3, 4, 6,
// 3, 0, 0, 8) sum to 26, which does not reconcile with the dashboard's own
// "Total Outreach Activities: 18" stat card / donut. This mismatch exists in
// the mockup itself — both are kept exactly as shown rather than "corrected",
// per this project's established convention (see README).
export const OUTREACH_ACTIVITIES_OVER_TIME_MOCK = [
  { month: "Jan", activities: 2 },
  { month: "Feb", activities: 3 },
  { month: "Mar", activities: 4 },
  { month: "Apr", activities: 6 },
  { month: "May", activities: 3 },
  { month: "Jun", activities: 0 },
  { month: "Jul", activities: 0 },
  { month: "Aug", activities: 8 },
];

export const DONATION_OVERVIEW_MOCK = {
  total: 485250,
  breakdown: [
    { label: "Community Service", value: 185700, color: OUTREACH_CATEGORY_COLOR_MAP["Community Service"] },
    { label: "Gospel Outreach", value: 125000, color: OUTREACH_CATEGORY_COLOR_MAP["Gospel Outreach"] },
    { label: "Education Support", value: 85000, color: OUTREACH_CATEGORY_COLOR_MAP["Education Support"] },
    { label: "Medical Camps", value: 60000, color: OUTREACH_CATEGORY_COLOR_MAP["Medical Camps"] },
    { label: "Others", value: 29550, color: OUTREACH_CATEGORY_COLOR_MAP.Others },
  ],
};

// 18 outreach activities total, matching OUTREACH_BY_CATEGORY_MOCK's
// category counts exactly. The first 5 reproduce the Overview dashboard's
// "Recent Outreach Activities" table rows verbatim; the other 13 are
// deterministic filler built to keep every category's total consistent.
// Three of the filler rows (ACT-9, ACT-16, ACT-10) are also the three
// items shown on the dashboard's "Upcoming Activities" card, so their
// name/date/time/location match that card exactly.
export const OUTREACH_ACTIVITIES_LIST_MOCK = [
  { id: "ACT-1", name: "Food Distribution Drive", category: "Community Service", date: "2026-05-08", location: "Besant Nagar, Chennai", peopleReached: 320, volunteers: 18, status: "Completed" },
  { id: "ACT-2", name: "Free Medical Camp", category: "Medical Camps", date: "2026-04-25", location: "Alandur, Chennai", peopleReached: 215, volunteers: 22, status: "Completed" },
  { id: "ACT-3", name: "Education Support Program", category: "Education Support", date: "2026-04-12", location: "Velachery, Chennai", peopleReached: 180, volunteers: 15, status: "Completed" },
  { id: "ACT-4", name: "Gospel Outreach", category: "Gospel Outreach", date: "2026-03-29", location: "Tambaram, Chennai", peopleReached: 250, volunteers: 20, status: "Completed" },
  { id: "ACT-5", name: "Clothing Donation Drive", category: "Community Service", date: "2026-03-15", location: "Chromepet, Chennai", peopleReached: 275, volunteers: 16, status: "Completed" },
  { id: "ACT-6", name: "Community Kitchen Drive", category: "Community Service", date: "2026-02-20", location: "Adyar, Chennai", peopleReached: 190, volunteers: 12, status: "Completed" },
  { id: "ACT-7", name: "Elderly Care Visit", category: "Community Service", date: "2026-01-18", location: "Mylapore, Chennai", peopleReached: 85, volunteers: 8, status: "Completed" },
  { id: "ACT-8", name: "Blanket Distribution", category: "Community Service", date: "2025-12-10", location: "Guindy, Chennai", peopleReached: 150, volunteers: 10, status: "Completed" },
  { id: "ACT-9", name: "Food Distribution", category: "Community Service", date: "2026-05-15", location: "St. John's Community Center", peopleReached: 0, volunteers: 0, status: "Upcoming" },
  { id: "ACT-10", name: "Youth Gospel Outreach", category: "Gospel Outreach", date: "2026-06-05", location: "Perungudi Beach", peopleReached: 0, volunteers: 0, status: "Upcoming" },
  { id: "ACT-11", name: "Street Evangelism Drive", category: "Gospel Outreach", date: "2026-02-08", location: "T. Nagar, Chennai", peopleReached: 140, volunteers: 14, status: "Completed" },
  { id: "ACT-12", name: "Village Gospel Camp", category: "Gospel Outreach", date: "2026-01-25", location: "Thiruvallur", peopleReached: 210, volunteers: 18, status: "Completed" },
  { id: "ACT-13", name: "Campus Outreach Program", category: "Gospel Outreach", date: "2026-07-12", location: "Anna University, Chennai", peopleReached: 0, volunteers: 0, status: "Planned" },
  { id: "ACT-14", name: "Free Tuition Camp", category: "Education Support", date: "2026-02-28", location: "Ambattur, Chennai", peopleReached: 95, volunteers: 9, status: "Completed" },
  { id: "ACT-15", name: "Scholarship Distribution", category: "Education Support", date: "2026-07-20", location: "St. John's Church Hall", peopleReached: 0, volunteers: 0, status: "Upcoming" },
  { id: "ACT-16", name: "Medical Camp", category: "Medical Camps", date: "2026-05-22", location: "Nesapakkam, Chennai", peopleReached: 0, volunteers: 0, status: "Upcoming" },
  { id: "ACT-17", name: "Vocational Training Workshop", category: "Others", date: "2026-03-02", location: "Perambur, Chennai", peopleReached: 60, volunteers: 6, status: "Completed" },
  { id: "ACT-18", name: "Community Well-being Fair", category: "Others", date: "2026-08-15", location: "Velachery, Chennai", peopleReached: 0, volunteers: 0, status: "Planned" },
];

export const UPCOMING_ACTIVITIES_MOCK = [
  { id: "ACT-9", label: "MAY 15", title: "Food Distribution", dateTimeText: "May 15, 2026 • 10:00 AM", location: "St. John's Community Center" },
  { id: "ACT-16", label: "MAY 22", title: "Medical Camp", dateTimeText: "May 22, 2026 • 09:00 AM", location: "Nesapakkam, Chennai" },
  { id: "ACT-10", label: "JUN 05", title: "Youth Gospel Outreach", dateTimeText: "Jun 05, 2026 • 04:00 PM", location: "Perungudi Beach" },
];

export const OVERVIEW_QUICK_ACTIONS = [
  { key: "add-activity", label: "Add New Activity", description: "Create a new outreach activity", icon: "PlusCircle", href: "/mission-evangelism/outreach-programs/add" },
  { key: "add-trip", label: "Add Mission Trip", description: "Plan a new mission trip", icon: "Plane", href: "/mission-evangelism/mission-trips" },
  { key: "record-donation", label: "Record Donation", description: "Record a new donation", icon: "HandCoins", href: "/mission-evangelism/donations" },
  { key: "view-reports", label: "View All Reports", description: "View mission & outreach reports", icon: "FileBarChart2", href: "/mission-evangelism/reports" },
];

export const OUTREACH_LIST_QUICK_ACTIONS = [
  { key: "add-activity", label: "Add New Activity", description: "Create a new outreach activity", icon: "PlusCircle", href: "/mission-evangelism/outreach-programs/add" },
  { key: "manage", label: "Manage Activities", description: "Edit or update outreach activities", icon: "SlidersHorizontal", href: "#" },
  { key: "export", label: "Export Activities", description: "Export the activities list", icon: "Download", href: "#" },
];

export const OUTREACH_LIST_NOTE_TEXT =
  "Activities marked as Completed have their reports and donation records available for download.";

export const OUTREACH_DETAIL_QUICK_ACTIONS = [
  { key: "participants", label: "View Participant List", description: "View all participants for this activity", icon: "Users2", href: "#" },
  { key: "download", label: "Download Report", description: "Download the activity report", icon: "Download", href: "#" },
  { key: "edit", label: "Edit Activity", description: "Edit this activity's details", icon: "Pencil", href: "#" },
  { key: "add-activity", label: "Add New Activity", description: "Create a new outreach activity", icon: "PlusCircle", href: "/mission-evangelism/outreach-programs/add" },
];

export const OUTREACH_DETAIL_NOTE_TEXT =
  "This activity has been marked as completed. All reports and records are available for download.";

export const ACTIVITY_DETAIL_TABS = ["Overview", "Participants", "Donations", "Photos", "Reports", "Timeline", "Attachments"];

export function buildActivityDetailMock(id) {
  if (id === "ACT-1" || !id) {
    return {
      id: "ACT-1", name: "Food Distribution Drive", tagline: "Serve the community. Share God's love.",
      status: "Completed", category: "Community Service", organizedBy: "CSI St. John's Church",
      coordinatorName: "Anita Samuel",
      date: "2026-05-08", startTime: "10:15 AM", endTime: "04:30 PM",
      location: "Besant Nagar, Chennai", targetAudience: "Underprivileged Families",
      expectedParticipants: 300, peopleReached: 320, volunteersInvolved: 18,
      description:
        "The Food Distribution Drive was organized to support underprivileged families in our locality. Volunteers distributed nutritious food packets to the needy and shared God's love through this act of service. The event was a great success with the active participation of church members and local volunteers.",
      objectives: [
        "Support needy families in the community",
        "Share the love of Christ through service",
        "Build stronger community relationships",
      ],
      teamVolunteers: { totalVolunteers: 18, departmentsInvolved: 5, peopleReached: 320 },
      donationsSupport: { totalDonations: 485250, donors: 42, sponsors: 3 },
      timeline: [
        { key: "created", title: "Activity Created", date: "2026-05-01T10:15:00", by: "Rev. Michael", done: true },
        { key: "approved", title: "Approved", date: "2026-05-02T09:30:00", by: "Parish Committee", done: true },
        { key: "started", title: "Started", date: "2026-05-08T10:15:00", at: "Besant Nagar, Chennai", done: true },
        { key: "completed", title: "Completed", date: "2026-05-08T16:30:00", by: "Anita Samuel", done: true },
      ],
    };
  }
  const base = OUTREACH_ACTIVITIES_LIST_MOCK.find((a) => a.id === id) ?? OUTREACH_ACTIVITIES_LIST_MOCK[0];
  return {
    id: base.id, name: base.name, tagline: "Track and manage this outreach activity.",
    status: base.status, category: base.category, organizedBy: "CSI St. John's Church",
    coordinatorName: "Anita Samuel",
    date: base.date, startTime: "09:00 AM", endTime: "01:00 PM",
    location: base.location, targetAudience: "Community",
    expectedParticipants: base.peopleReached || 100, peopleReached: base.peopleReached, volunteersInvolved: base.volunteers,
    description: `${base.name} is an outreach activity organized under the ${base.category} category.`,
    objectives: ["Support the community", "Share God's love through service", "Strengthen fellowship"],
    teamVolunteers: { totalVolunteers: base.volunteers, departmentsInvolved: 2, peopleReached: base.peopleReached },
    donationsSupport: { totalDonations: 0, donors: 0, sponsors: 0 },
    timeline: [
      { key: "created", title: "Activity Created", date: `${base.date}T09:00:00`, by: "Parish Office (Admin)", done: true },
      { key: "approved", title: "Approved", date: null, by: null, done: base.status !== "Planned" },
      { key: "started", title: "Started", date: null, at: base.location, done: base.status === "Completed" || base.status === "Ongoing" },
      { key: "completed", title: "Completed", date: null, by: null, done: base.status === "Completed" },
    ],
  };
}

// ========================================================================
// REVISION — Outreach Programs (list / add / detail), 2nd round of mockups
// ========================================================================
// A later batch of mockups for the SAME "Outreach Programs" submenu used
// "Program" terminology throughout (Program Details / Program Summary /
// Add New Program) instead of the "Activity" wording the first round used
// for this submenu, a different field set (Total Expenditure, Visibility,
// a real Team & Volunteers table, a Quick Stats tile grid, an Attachments
// list), a different tab set, and its own 18-program dataset with its own
// category taxonomy (Community Service / Medical & Health / Education
// Support / Spiritual & Discipleship) that does not match the first
// round's taxonomy (Community Service / Gospel Outreach / Education
// Support / Medical Camps / Others). Per this project's established
// practice for revisions, the exports below are ADDITIVE — they power a
// rebuilt list/add/detail flow — while every export above this line is
// left exactly as it was, since the Overview dashboard (not remocked)
// still depends on it. See README_CHANGES.txt for the full breakdown.

export const PROGRAM_CATEGORY_COLOR_MAP = {
  "Community Service": "#16A34A",
  "Medical & Health": "#7C3AED",
  "Education Support": "#2563EB",
  "Spiritual & Discipleship": "#EA580C",
};

export const PROGRAM_STATUS_BADGE_MAP = {
  Completed: "success",
  Active: "info",
  Planned: "accent",
  Cancelled: "danger",
};

export const PROGRAM_CATEGORY_OPTIONS = Object.keys(PROGRAM_CATEGORY_COLOR_MAP);
export const PROGRAM_STATUS_OPTIONS = ["Planned", "Active", "Completed", "Cancelled"];
export const PROGRAM_VISIBILITY_OPTIONS = ["Public", "Members Only", "Private"];
export const PROGRAM_COORDINATOR_OPTIONS = ["Anita Samuel", "Rev. Michael", "George Philip", "Mary Abraham", "Daniel Joseph"];
export const PROGRAM_DEPARTMENT_OPTIONS = ["Men's Fellowship", "Women's Fellowship", "Youth Ministry", "Sunday School", "Choir Ministry"];

export const NEW_PROGRAM_DEFAULTS = {
  programName: "", category: "", status: "", visibility: "",
  shortDescription: "", targetAudience: "",
  location: "", startDate: "", endDate: "", startTime: "", endTime: "",
  expectedParticipants: "", peopleReachedGoal: "", volunteersNeeded: "", programObjectives: "",
  coordinator: "", contactNumber: "", email: "", departmentsInvolved: "", partners: "",
};

export const PROGRAM_TIPS_MOCK = [
  { key: "info", icon: "Home", iconBg: "bg-[#DCFCE7]", iconColor: "text-[#16A34A]", title: "Provide Clear Information", description: "Add detailed information about the program to help volunteers and participants understand the purpose and plan." },
  { key: "goals", icon: "Link2", iconBg: "bg-[#F3E8FF]", iconColor: "text-[#7C3AED]", title: "Set Realistic Goals", description: "Define achievable goals for participants and outreach impact." },
  { key: "team", icon: "User", iconBg: "bg-[#FFEDD5]", iconColor: "text-[#EA580C]", title: "Involve the Right Team", description: "Assign a coordinator and involve relevant departments for smooth execution." },
  { key: "plan", icon: "Calendar", iconBg: "bg-[#DBEAFE]", iconColor: "text-[#2563EB]", title: "Plan Ahead", description: "Add timeline and event schedule to stay organized and reach more people." },
  { key: "records", icon: "FolderOpen", iconBg: "bg-[#DCFCE7]", iconColor: "text-[#16A34A]", title: "Keep Records", description: "Upload important documents and photos for future reference and reporting." },
];

export const PROGRAM_LIST_STATS_MOCK = {
  totalPrograms: { value: 18, sub: "This Year" },
  activePrograms: { value: 12, sub: "This Year" },
  completedPrograms: { value: 6, sub: "This Year" },
  peopleReached: { value: "3,245", sub: "This Year" },
  volunteersInvolved: { value: 156, sub: "This Year" },
};

// 18 outreach programs. The first 8 reproduce the "All Outreach Programs"
// table's visible rows verbatim (name, category, status, people reached,
// volunteers, start/end date). The other 10 are deterministic filler.
// Three of the filler rows (PROG-9, PROG-10) plus PROG-4 are also the
// programs shown on this list page's own "Upcoming Programs" card, so
// their names match that card exactly — see the note on date mismatches
// in README_CHANGES.txt.
export const PROGRAMS_LIST_MOCK = [
  { id: "PROG-1", name: "Food Distribution Drive", category: "Community Service", status: "Completed", peopleReached: 320, volunteers: 18, startDate: "2026-05-01", endDate: "2026-05-08" },
  { id: "PROG-2", name: "Free Medical Camp", category: "Medical & Health", status: "Active", peopleReached: 215, volunteers: 22, startDate: "2026-05-20", endDate: "2026-05-22" },
  { id: "PROG-3", name: "Education Support Program", category: "Education Support", status: "Active", peopleReached: 180, volunteers: 15, startDate: "2026-06-10", endDate: "2026-06-30" },
  { id: "PROG-4", name: "Youth Gospel Outreach", category: "Spiritual & Discipleship", status: "Planned", peopleReached: 150, volunteers: 12, startDate: "2026-07-05", endDate: "2026-07-05" },
  { id: "PROG-5", name: "Clothing Donation Drive", category: "Community Service", status: "Completed", peopleReached: 275, volunteers: 16, startDate: "2026-04-15", endDate: "2026-04-20" },
  { id: "PROG-6", name: "Environmental Clean-Up", category: "Community Service", status: "Completed", peopleReached: 210, volunteers: 14, startDate: "2026-03-10", endDate: "2026-03-15" },
  { id: "PROG-7", name: "Senior Citizen Outreach", category: "Community Service", status: "Active", peopleReached: 130, volunteers: 10, startDate: "2026-06-18", endDate: "2026-07-18" },
  { id: "PROG-8", name: "Holiday Gift Drive", category: "Community Service", status: "Planned", peopleReached: null, volunteers: null, startDate: "2026-12-15", endDate: "2026-12-25" },
  { id: "PROG-9", name: "Medical Awareness Camp", category: "Medical & Health", status: "Active", peopleReached: 0, volunteers: 0, startDate: "2026-06-12", endDate: "2026-06-12" },
  { id: "PROG-10", name: "Community Clean-Up Drive", category: "Community Service", status: "Active", peopleReached: 0, volunteers: 0, startDate: "2026-06-20", endDate: "2026-06-20" },
  { id: "PROG-11", name: "Community Kitchen", category: "Community Service", status: "Active", peopleReached: 140, volunteers: 9, startDate: "2026-04-01", endDate: "2026-04-05" },
  { id: "PROG-12", name: "Free Eye Check-up Camp", category: "Medical & Health", status: "Active", peopleReached: 110, volunteers: 7, startDate: "2026-05-25", endDate: "2026-05-25" },
  { id: "PROG-13", name: "Bible Distribution Drive", category: "Spiritual & Discipleship", status: "Completed", peopleReached: 175, volunteers: 11, startDate: "2026-01-20", endDate: "2026-01-20" },
  { id: "PROG-14", name: "Scholarship Awareness Drive", category: "Education Support", status: "Active", peopleReached: 90, volunteers: 6, startDate: "2026-08-10", endDate: "2026-08-12" },
  { id: "PROG-15", name: "Orphanage Support Visit", category: "Community Service", status: "Active", peopleReached: 60, volunteers: 5, startDate: "2026-09-02", endDate: "2026-09-02" },
  { id: "PROG-16", name: "Street Children Outreach", category: "Community Service", status: "Completed", peopleReached: 130, volunteers: 10, startDate: "2026-02-22", endDate: "2026-02-22" },
  { id: "PROG-17", name: "Flood Relief Camp", category: "Community Service", status: "Active", peopleReached: 300, volunteers: 20, startDate: "2026-07-20", endDate: "2026-07-25" },
  { id: "PROG-18", name: "Christmas Carol Outreach", category: "Spiritual & Discipleship", status: "Planned", peopleReached: null, volunteers: null, startDate: "2026-12-20", endDate: "2026-12-24" },
];

export const UPCOMING_PROGRAMS_MOCK = [
  { id: "PROG-4", label: "JUN 05", title: "Youth Gospel Outreach", dateTimeText: "Jun 05, 2026 • 04:00 PM", location: "Perungudi Beach" },
  { id: "PROG-9", label: "JUN 12", title: "Medical Awareness Camp", dateTimeText: "Jun 12, 2026 • 09:00 AM", location: "Nesapakkam, Chennai" },
  { id: "PROG-10", label: "JUN 20", title: "Community Clean-Up Drive", dateTimeText: "Jun 20, 2026 • 07:00 AM", location: "Besant Nagar Beach" },
];

export const PROGRAM_LIST_QUICK_ACTIONS = [
  { key: "add-program", label: "Add New Program", description: "Create a new outreach program", icon: "PlusCircle", href: "/mission-evangelism/outreach-programs/add" },
  { key: "add-trip", label: "Add Mission Trip", description: "Plan a new mission trip", icon: "Plane", href: "/mission-evangelism/mission-trips" },
  { key: "add-volunteer", label: "Add Volunteer", description: "Register a new volunteer", icon: "UserPlus", href: "#" },
  { key: "record-donation", label: "Record Donation", description: "Record a new donation", icon: "HandCoins", href: "/mission-evangelism/donations" },
  { key: "view-reports", label: "View All Reports", description: "View mission & outreach reports", icon: "FileBarChart2", href: "/mission-evangelism/reports" },
];

export const PROGRAM_DETAIL_TABS = ["Overview", "Participants", "Volunteers", "Photos", "Reports", "Documents", "Timeline"];

export const PROGRAM_DETAIL_NOTE_TEXT =
  "All reports and records related to this program are available for download.";

export function buildProgramDetailMock(id) {
  if (id === "PROG-1" || !id) {
    return {
      id: "PROG-1", name: "Food Distribution Drive", tagline: "Serve the community. Share God's love.",
      status: "Completed", category: "Community Service", organizedBy: "CSI St. John's Church",
      coordinatorName: "Anita Samuel",
      location: "Perungudi Beach, Chennai", date: "2026-05-01", startTime: "10:00 AM", endTime: "04:00 PM",
      targetAudience: "Underprivileged Families", expectedParticipants: 300, peopleReached: 320,
      volunteersInvolved: 18, totalExpenditure: 24560, visibility: "Public",
      description:
        "The Food Distribution Drive was organized to support underprivileged families in our locality. Volunteers distributed nutritious food packets to the needy and shared God's love through this act of service. The event was a great success with the active participation of church members and local volunteers.",
      objectives: [
        "Support needy families in the community",
        "Share the love of Christ through service",
        "Build stronger community relationships",
      ],
      team: [
        { name: "Anita Samuel", role: "Coordinator", contact: "+91 98765 43210", email: "anita.samuel@csistjohns.org" },
        { name: "John Abraham", role: "Volunteer", contact: "+91 91234 56789", email: "john.abraham@csistjohns.org" },
        { name: "Mary Thomas", role: "Volunteer", contact: "+91 99887 66554", email: "mary.thomas@csistjohns.org" },
      ],
      timeline: [
        { key: "planned", title: "Planned", date: "2026-04-15T09:00:00", by: "Anita Samuel", color: "slate" },
        { key: "started", title: "Started", date: "2026-05-01T10:00:00", by: "Anita Samuel", color: "blue" },
        { key: "inprogress", title: "In Progress", date: "2026-05-01T12:30:00", by: "Volunteer Team", color: "amber" },
        { key: "completed", title: "Completed", date: "2026-05-01T16:00:00", by: "Anita Samuel", color: "green" },
      ],
      quickStats: { volunteers: 18, peopleReached: 320, foodPacketsDistributed: 250, totalExpenditure: 24560 },
      attachments: [
        { name: "Expense Report.pdf", size: "245 KB", type: "pdf" },
        { name: "Participant List.xlsx", size: "18 KB", type: "xlsx" },
        { name: "Photos.zip", size: "12.4 MB", type: "zip" },
      ],
    };
  }
  const base = PROGRAMS_LIST_MOCK.find((p) => p.id === id) ?? PROGRAMS_LIST_MOCK[0];
  return {
    id: base.id, name: base.name, tagline: "Track and manage this outreach program.",
    status: base.status, category: base.category, organizedBy: "CSI St. John's Church",
    coordinatorName: "Anita Samuel",
    location: "Chennai", date: base.startDate, startTime: "09:00 AM", endTime: "01:00 PM",
    targetAudience: "Community", expectedParticipants: base.peopleReached || 100,
    peopleReached: base.peopleReached ?? 0, volunteersInvolved: base.volunteers ?? 0,
    totalExpenditure: 0, visibility: "Public",
    description: `${base.name} is an outreach program organized under the ${base.category} category.`,
    objectives: ["Support the community", "Share God's love through service", "Strengthen fellowship"],
    team: [{ name: "Anita Samuel", role: "Coordinator", contact: "+91 98765 43210", email: "anita.samuel@csistjohns.org" }],
    timeline: [
      { key: "planned", title: "Planned", date: `${base.startDate}T09:00:00`, by: "Parish Office (Admin)", color: "slate" },
      { key: "started", title: "Started", date: null, by: null, color: "blue" },
      { key: "inprogress", title: "In Progress", date: null, by: null, color: "amber" },
      { key: "completed", title: "Completed", date: null, by: null, color: "green" },
    ],
    quickStats: { volunteers: base.volunteers ?? 0, peopleReached: base.peopleReached ?? 0, foodPacketsDistributed: 0, totalExpenditure: 0 },
    attachments: [],
  };
}

// ========================================================================
// Mission Trips (list / add / detail) — a new submenu, its own screens.
// Visually related to Outreach Programs' Program Details pattern (same
// card language: trip info / description+objectives / timeline / team /
// attachments) but genuinely a different dataset and a few different
// field/section names (e.g. "Trip Timeline" steps are Planned / Team
// Briefing / Trip Started / Trip Completed, not the Program timeline's
// Planned / Started / In Progress / Completed), so it gets its own exports.
// ========================================================================

export const TRIP_CATEGORY_OPTIONS = ["Outreach", "Medical", "Education", "Evangelism", "Community Service"];
export const TRIP_VISIBILITY_OPTIONS = ["Public", "Members Only", "Private"];
export const TRIP_COORDINATOR_OPTIONS = ["Anita Samuel", "Rev. Michael", "George Philip", "Mary Abraham", "Daniel Joseph"];
export const TRIP_DEPARTMENT_OPTIONS = ["Men's Fellowship", "Women's Fellowship", "Youth Ministry", "Sunday School", "Choir Ministry"];
export const TRIP_TEAM_MEMBER_OPTIONS = ["John Abraham", "Mary Thomas", "George Philip", "Daniel Joseph", "Liza Varghese"];
export const TRIP_FUNDING_SOURCE_OPTIONS = ["Church General Fund", "Mission Fund", "Member Donations", "Sponsorship", "Other"];

export const TRIP_STATUS_BADGE_MAP = {
  Completed: "success",
  Upcoming: "info",
  Planned: "accent",
  Cancelled: "danger",
};

export const NEW_TRIP_DEFAULTS = {
  tripName: "", category: "", destination: "", visibility: "", purpose: "", shortDescription: "",
  startDate: "", endDate: "", daysOfOutreach: "", startTime: "", endTime: "",
  expectedParticipants: "", targetGroup: "", participantsGoal: "", volunteersNeeded: "",
  coordinator: "", contactNumber: "", email: "", departmentsInvolved: "", additionalTeamMembers: "",
  estimatedBudget: "", fundingSource: "", notes: "",
};

export const TRIP_TIPS_MOCK = [
  { key: "plan", icon: "Calendar", iconBg: "bg-[#DCFCE7]", iconColor: "text-[#16A34A]", title: "Plan Ahead", description: "Plan your trip well in advance to ensure better preparation and participation." },
  { key: "goals", icon: "Users2", iconBg: "bg-[#F3E8FF]", iconColor: "text-[#7C3AED]", title: "Define Clear Goals", description: "Set clear and measurable goals to make your trip impactful." },
  { key: "team", icon: "Users2", iconBg: "bg-[#FFEDD5]", iconColor: "text-[#EA580C]", title: "Involve the Right People", description: "Add the right team members and volunteers for smooth execution." },
  { key: "organized", icon: "FileText", iconBg: "bg-[#DBEAFE]", iconColor: "text-[#2563EB]", title: "Stay Organized", description: "Upload important documents and keep all trip details organized." },
  { key: "safety", icon: "HeartHandshake", iconBg: "bg-[#FFE5E5]", iconColor: "text-[#DC2626]", title: "Safety First", description: "Ensure safety guidelines and permissions are in place before the trip." },
];

export const TRIP_ADD_NOTE_TEXT = "All trips will be reviewed by the Mission Committee before approval.";

export const TRIP_LIST_STATS_MOCK = {
  totalTrips: { value: 6, sub: "This Year" },
  participants: { value: 186, sub: "This Year" },
  destinations: { value: 4, sub: "This Year" },
  daysOfOutreach: { value: 48, sub: "This Year" },
  totalExpenditure: { value: "₹8,65,000", sub: "This Year" },
};

// All 6 trips shown on the mockup's list page — "Showing 1 to 6 of 6
// trips", so unlike the other submenus there's no filler data needed here.
export const MISSION_TRIPS_LIST_MOCK = [
  { id: "TRIP-1", name: "Youth Outreach Mission", destination: "Perungudi Beach", startDate: "2026-05-05", endDate: "2026-05-06", participants: 28, status: "Completed" },
  { id: "TRIP-2", name: "Medical Awareness Camp", destination: "Nesapakkam, Chennai", startDate: "2026-05-22", endDate: "2026-05-23", participants: 32, status: "Completed" },
  { id: "TRIP-3", name: "Rural Evangelism Trip", destination: "Tiruvallur", startDate: "2026-06-10", endDate: "2026-06-12", participants: 26, status: "Upcoming" },
  { id: "TRIP-4", name: "Children's VBS Outreach", destination: "Kanchipuram", startDate: "2026-07-15", endDate: "2026-07-17", participants: 38, status: "Upcoming" },
  { id: "TRIP-5", name: "Community Service Trip", destination: "Besant Nagar Beach", startDate: "2026-08-05", endDate: "2026-08-06", participants: 24, status: "Planned" },
  { id: "TRIP-6", name: "Christmas Blessing Mission", destination: "Sriperumbudur", startDate: "2026-12-18", endDate: "2026-12-20", participants: 38, status: "Planned" },
];

export const UPCOMING_TRIPS_MOCK = [
  { id: "TRIP-3", label: "JUN 10", title: "Rural Evangelism Trip", dateTimeText: "Jun 10, 2026 - Jun 12, 2026", location: "Tiruvallur" },
  { id: "TRIP-4", label: "JUL 15", title: "Children's VBS Outreach", dateTimeText: "Jul 15, 2026 - Jul 17, 2026", location: "Kanchipuram" },
  { id: "TRIP-5", label: "AUG 05", title: "Community Service Trip", dateTimeText: "Aug 05, 2026 - Aug 06, 2026", location: "Besant Nagar Beach" },
];

export const TRIP_LIST_QUICK_ACTIONS = [
  { key: "add-trip", label: "Add New Trip", description: "Plan a new mission trip", icon: "PlusCircle", href: "/mission-evangelism/mission-trips/add" },
  { key: "add-participant", label: "Add Participant", description: "Register a new trip participant", icon: "UserPlus", href: "#" },
  { key: "add-expense", label: "Add Expense", description: "Record a trip expense", icon: "Receipt", href: "#" },
  { key: "view-reports", label: "View All Reports", description: "View mission & outreach reports", icon: "FileBarChart2", href: "/mission-evangelism/reports" },
];

export const TRIP_DETAIL_TABS = ["Overview", "Participants", "Itinerary", "Expenses", "Reports", "Photos", "Documents"];

// ========================================================================
// Donations (list / add / detail) — a new submenu, its own screens.
// ========================================================================

export const DONATION_TYPE_OPTIONS = ["Member", "Family", "Non-Member"];
export const DONATION_FUND_OPTIONS = ["General Fund", "Mission & Outreach", "Building Fund", "Sunday School", "Others"];
export const DONATION_PAYMENT_METHOD_OPTIONS = ["Cash", "UPI", "Bank Transfer", "Cheque", "Online"];

export const DONATION_FUND_COLOR_MAP = {
  "General Fund": "#16A34A",
  "Mission & Outreach": "#2563EB",
  "Building Fund": "#7C3AED",
  "Sunday School": "#EA580C",
  Others: "#DC2626",
};

export const DONATION_PAYMENT_METHOD_BADGE_MAP = {
  Online: "info",
  Card: "accent",
  UPI: "warning",
  Cash: "success",
  Cheque: "default",
  "Bank Transfer": "info",
};

export const DONATION_PAYMENT_STATUS_BADGE_MAP = {
  Completed: "success",
  Pending: "warning",
  Failed: "danger",
  Refunded: "default",
};

export const NEW_DONATION_DEFAULTS = {
  donorType: "Member", selectedDonor: "", donorName: "", contactNumber: "", email: "",
  fundPurpose: "", amount: "", paymentMethod: "Cash", paymentDate: "", paymentTime: "",
  transactionId: "", receiptRequired: true, sendThankYouMessage: true, notes: "",
};

export const DONATION_GUIDELINES_MOCK = [
  { key: "record", icon: "Heart", iconBg: "bg-[#DCFCE7]", iconColor: "text-[#16A34A]", title: "Record Accurately", description: "Ensure all donation details are recorded accurately for proper accounting and transparency." },
  { key: "receipt", icon: "ShieldCheck", iconBg: "bg-[#DBEAFE]", iconColor: "text-[#2563EB]", title: "Generate Receipt", description: "Official receipts will be generated automatically for all donations." },
  { key: "tax", icon: "Gift", iconBg: "bg-[#FFEDD5]", iconColor: "text-[#EA580C]", title: "Tax Benefits", description: "Eligible donations may qualify for tax exemption benefits under Section 80G." },
  { key: "secure", icon: "Lock", iconBg: "bg-[#F3E8FF]", iconColor: "text-[#7C3AED]", title: "Secure Information", description: "All donor information is kept confidential and secure." },
];

export const DONATIONS_LIST_STATS_MOCK = {
  totalDonations: { value: "₹8,65,000", sub: "This Year", trend: "↑ 18.6% vs Last Year" },
  totalTransactions: { value: 156, sub: "This Year", trend: "↑ 12.4% vs Last Year" },
  totalDonors: { value: 98, sub: "This Year", trend: "↑ 10.2% vs Last Year" },
  averageDonation: { value: "₹5,544", sub: "This Year", trend: "↑ 8.7% vs Last Year" },
  recurringDonations: { value: 32, sub: "Active", trend: "↑ 6.3% vs Last Year" },
};

// Matches the Donations page's own donut exactly: ₹8,65,000 total, 46.8% /
// 24.3% / 15.6% / 8.7% / 4.6% split. Reused unmodified for the Reports
// dashboard's "Donations by Fund" widget, since both mockups show the
// identical breakdown.
export const DONATIONS_BY_FUND_MOCK = {
  total: 865000,
  breakdown: [
    { label: "General Fund", value: 405000, color: DONATION_FUND_COLOR_MAP["General Fund"] },
    { label: "Mission & Outreach", value: 210000, color: DONATION_FUND_COLOR_MAP["Mission & Outreach"] },
    { label: "Building Fund", value: 135000, color: DONATION_FUND_COLOR_MAP["Building Fund"] },
    { label: "Sunday School", value: 75000, color: DONATION_FUND_COLOR_MAP["Sunday School"] },
    { label: "Others", value: 40000, color: DONATION_FUND_COLOR_MAP.Others },
  ],
};

// Matches the "Donations by Month" chart's shape on the Donations page.
// Reused unmodified as "Donations Over Time" on the Reports dashboard.
export const DONATIONS_BY_MONTH_MOCK = [
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

// First 5 rows reproduce the "Recent Transactions" table / "Recent
// Donations" sidebar verbatim (RCP-2026-0152..0156). The remaining 151
// rows are deterministic filler (no Math.random) generated below, built
// to satisfy the mockup's own "Showing 1 to 5 of 156 transactions" footer
// text without hand-typing 156 rows.
const DONATIONS_REAL_ROWS = [
  { id: "RCP-2026-0156", date: "2026-05-15", donorName: "John Samuel", donorId: "DON-2026-0012", fund: "General Fund", amount: 5000, method: "Online" },
  { id: "RCP-2026-0155", date: "2026-05-14", donorName: "Anita Samuel", donorId: "DON-2026-0034", fund: "Mission & Outreach", amount: 2000, method: "Card" },
  { id: "RCP-2026-0154", date: "2026-05-14", donorName: "Ravi Abraham", donorId: "DON-2026-0021", fund: "Building Fund", amount: 10000, method: "UPI" },
  { id: "RCP-2026-0153", date: "2026-05-13", donorName: "Sarah Mathew", donorId: "DON-2026-0045", fund: "General Fund", amount: 1500, method: "Cash" },
  { id: "RCP-2026-0152", date: "2026-05-12", donorName: "Daniel Christopher", donorId: "DON-2026-0018", fund: "Sunday School", amount: 500, method: "Online" },
];

const DONATION_FILLER_DONORS = [
  { name: "Mary Thomas", id: "DON-2026-0027" },
  { name: "George Philip", id: "DON-2026-0009" },
  { name: "Liza Varghese", id: "DON-2026-0052" },
  { name: "Thomas Kurian", id: "DON-2026-0061" },
  { name: "Priya Raj", id: "DON-2026-0073" },
  { name: "Joseph Mathai", id: "DON-2026-0038" },
];
const DONATION_FILLER_FUNDS = ["General Fund", "Mission & Outreach", "Building Fund", "Sunday School", "Others"];
const DONATION_FILLER_METHODS = ["Online", "Card", "UPI", "Cash", "Cheque", "Bank Transfer"];
const DONATION_FILLER_AMOUNTS = [5000, 2000, 10000, 1500, 500, 3000, 7500, 1200, 20000, 800];

function buildDonationFillerRow(index) {
  // index is 0-based across the 151 filler rows, continuing downward from
  // RCP-2026-0151 to RCP-2026-0001.
  const seq = 151 - index;
  const donor = DONATION_FILLER_DONORS[index % DONATION_FILLER_DONORS.length];
  const fund = DONATION_FILLER_FUNDS[index % DONATION_FILLER_FUNDS.length];
  const method = DONATION_FILLER_METHODS[index % DONATION_FILLER_METHODS.length];
  const amount = DONATION_FILLER_AMOUNTS[index % DONATION_FILLER_AMOUNTS.length];
  const date = new Date(2026, 4, 12);
  date.setDate(date.getDate() - (index + 1));
  return {
    id: `RCP-2026-${String(seq).padStart(4, "0")}`,
    date: date.toISOString().slice(0, 10),
    donorName: donor.name, donorId: donor.id,
    fund, amount, method,
  };
}

export const DONATIONS_LIST_MOCK = [
  ...DONATIONS_REAL_ROWS,
  ...Array.from({ length: 151 }, (_, i) => buildDonationFillerRow(i)),
];

export const RECENT_DONATIONS_MOCK = DONATIONS_REAL_ROWS;

export const DONATIONS_LIST_QUICK_ACTIONS = [
  { key: "add-donation", label: "Add New Donation", description: "Record a new donation", icon: "HandCoins", href: "/mission-evangelism/donations/add" },
  { key: "add-donor", label: "Add Donor", description: "Register a new donor", icon: "UserPlus", href: "#" },
  { key: "create-fund", label: "Create Fund", description: "Set up a new donation fund", icon: "Wallet", href: "#" },
  { key: "generate-receipt", label: "Generate Receipt", description: "Generate a donation receipt", icon: "FileText", href: "#" },
  { key: "donation-reports", label: "Donation Reports", description: "View donation reports", icon: "FileBarChart2", href: "/mission-evangelism/reports" },
];

export function buildDonationDetailMock(id) {
  if (id === "RCP-2026-0156" || !id) {
    return {
      id: "RCP-2026-0156", status: "Completed",
      receiptDate: "2026-05-15", createdAt: "2026-05-15T10:30:00",
      donorName: "John Samuel", donorId: "DON-2026-0012",
      fundPurpose: "General Fund", paymentMethod: "Online",
      amount: 5000, paymentStatus: "Completed",
      transactionId: "TXN4589632145", receiptNo: "RCP-2026-0156",
      appealCampaign: null, anonymous: "No",
      note: "Thank you for your generous support.",
      donorMessage: "Happy to contribute to the church's mission and initiatives. God bless!",
      allocation: [{ fund: "General Fund", amount: 5000, description: "General contribution for church activities" }],
      timeline: [
        { key: "created", title: "Donation Created", date: "2026-05-15T10:30:00", by: "Parish Office", color: "green" },
        { key: "completed", title: "Payment Completed", date: "2026-05-15T10:31:00", at: "Online", color: "blue" },
      ],
      donor: {
        name: "John Samuel", type: "Member",
        phone: "+91 98765 43210", email: "john.samuel@example.com",
        address: "123, Park Street, Chennai - 600001",
      },
      payment: {
        method: "Online", gateway: "Razorpay", transactionId: "TXN4589632145",
        dateTime: "2026-05-15T10:31:00", status: "Completed",
      },
      notesByline: "May 15, 2026 by Parish Office",
      attachments: [{ name: "Receipt_RCP-2026-0156.pdf", size: "120 KB", type: "pdf" }],
    };
  }
  const base = DONATIONS_LIST_MOCK.find((d) => d.id === id) ?? DONATIONS_LIST_MOCK[0];
  return {
    id: base.id, status: "Completed",
    receiptDate: base.date, createdAt: `${base.date}T10:00:00`,
    donorName: base.donorName, donorId: base.donorId,
    fundPurpose: base.fund, paymentMethod: base.method,
    amount: base.amount, paymentStatus: "Completed",
    transactionId: `TXN${base.id.replace(/\D/g, "")}`, receiptNo: base.id,
    appealCampaign: null, anonymous: "No",
    note: "Thank you for your generous support.",
    donorMessage: "",
    allocation: [{ fund: base.fund, amount: base.amount, description: `General contribution for church activities` }],
    timeline: [
      { key: "created", title: "Donation Created", date: `${base.date}T10:00:00`, by: "Parish Office", color: "green" },
      { key: "completed", title: "Payment Completed", date: `${base.date}T10:01:00`, at: base.method, color: "blue" },
    ],
    donor: { name: base.donorName, type: "Member", phone: "—", email: "—", address: "—" },
    payment: { method: base.method, gateway: base.method === "Online" ? "Razorpay" : "—", transactionId: `TXN${base.id.replace(/\D/g, "")}`, dateTime: `${base.date}T10:01:00`, status: "Completed" },
    notesByline: `${base.date} by Parish Office`,
    attachments: [],
  };
}

// ========================================================================
// Reports — Mission & Evangelism's own reports dashboard, a new submenu.
// A single dashboard page (no add/detail routes — the mockup's rows are
// report actions, not navigable sub-records).
// ========================================================================

export const REPORTS_STATS_MOCK = {
  totalDonations: { value: "₹8,65,000", sub: "This Year" },
  totalDonors: { value: 98, sub: "This Year" },
  missionTrips: { value: 6, sub: "This Year", trend: "↑ 20.0% vs Last Year" },
  outreachPrograms: { value: 12, sub: "This Year", trend: "↑ 14.3% vs Last Year" },
  participants: { value: 186, sub: "This Year", trend: "↑ 12.4% vs Last Year" },
  totalExpenses: { value: "₹3,45,750", sub: "This Year", trend: "↑ 9.8% vs Last Year" },
};

export const REPORT_CATEGORIES_MOCK = [
  { key: "donation", label: "Donation Reports", icon: "HandCoins", href: "#" },
  { key: "donor", label: "Donor Reports", icon: "Users2", href: "#" },
  { key: "trips", label: "Mission Trips Reports", icon: "Plane", href: "#" },
  { key: "outreach", label: "Outreach Reports", icon: "HeartHandshake", href: "#" },
  { key: "financial", label: "Financial Reports", icon: "Wallet", href: "#" },
  { key: "participant", label: "Participant Reports", icon: "UserCheck", href: "#" },
  { key: "comparative", label: "Comparative Reports", icon: "BarChart3", href: "#" },
];

export const POPULAR_REPORTS_MOCK = [
  { id: "RPT-1", name: "Donation Summary Report", category: "Donation Reports", description: "Summary of all donations received", frequency: "Monthly", lastGenerated: "2026-05-15" },
  { id: "RPT-2", name: "Donor List Report", category: "Donor Reports", description: "List of all donors and their contributions", frequency: "Monthly", lastGenerated: "2026-05-15" },
  { id: "RPT-3", name: "Mission Trips Report", category: "Mission Trips Reports", description: "Details of mission trips and participants", frequency: "Quarterly", lastGenerated: "2026-05-14" },
  { id: "RPT-4", name: "Outreach Programs Report", category: "Outreach Reports", description: "Summary of outreach programs", frequency: "Monthly", lastGenerated: "2026-05-13" },
  { id: "RPT-5", name: "Financial Summary Report", category: "Financial Reports", description: "Income, expenses and fund summary", frequency: "Monthly", lastGenerated: "2026-05-15" },
];

export const RECENTLY_GENERATED_REPORTS_MOCK = [
  { key: "r1", name: "Donation Summary Report", dateTimeText: "May 15, 2026 at 10:30 AM", format: "PDF" },
  { key: "r2", name: "Donor List Report", dateTimeText: "May 15, 2026 at 10:25 AM", format: "Excel" },
  { key: "r3", name: "Mission Trips Report", dateTimeText: "May 14, 2026 at 04:15 PM", format: "PDF" },
  { key: "r4", name: "Expense Report", dateTimeText: "May 14, 2026 at 03:40 PM", format: "Excel" },
  { key: "r5", name: "Outreach Programs Report", dateTimeText: "May 13, 2026 at 11:20 AM", format: "PDF" },
];

export function buildMissionTripDetailMock(id) {
  if (id === "TRIP-1" || !id) {
    return {
      id: "TRIP-1", name: "Youth Outreach Mission",
      status: "Completed", category: "Outreach", destination: "Perungudi Beach, Chennai",
      purpose: "Youth Engagement & Community Outreach",
      organizedBy: "CSI St. John's Church", coordinatorName: "Anita Samuel",
      startDate: "2026-05-05", endDate: "2026-05-06", daysOfOutreach: "2 Days",
      totalParticipants: 28, volunteers: 18, totalExpenditure: 48750, visibility: "Public",
      description:
        "The Youth Outreach Mission was organized to engage with the local community at Perungudi Beach. The team conducted fun games, sharing sessions, and distributed refreshments to spread God's love and care.",
      objectives: [
        "Reach out to the youth and local community",
        "Share the message of love and hope",
        "Build lasting relationships and trust",
      ],
      highlights: [
        { key: "participants", label: "Participants", value: 28 },
        { key: "refreshments", label: "Refreshments Distributed", value: 120 },
        { key: "contacts", label: "New Contacts", value: 15 },
      ],
      team: [
        { name: "Anita Samuel", role: "Coordinator" },
        { name: "John Abraham", role: "Volunteer" },
        { name: "Mary Thomas", role: "Volunteer" },
      ],
      timeline: [
        { key: "planned", title: "Planned", date: "2026-04-20T09:00:00", by: "Anita Samuel", color: "green" },
        { key: "briefing", title: "Team Briefing", date: "2026-05-01T18:00:00", by: "Anita Samuel", color: "blue" },
        { key: "started", title: "Trip Started", date: "2026-05-05T07:00:00", color: "amber" },
        { key: "completed", title: "Trip Completed", date: "2026-05-06T20:00:00", color: "green" },
      ],
      attachments: [
        { name: "Itinerary.pdf", size: "245 KB", type: "pdf" },
        { name: "Budget Sheet.xlsx", size: "18 KB", type: "xlsx" },
        { name: "Permission Letter.pdf", size: "128 KB", type: "pdf" },
      ],
    };
  }
  const base = MISSION_TRIPS_LIST_MOCK.find((t) => t.id === id) ?? MISSION_TRIPS_LIST_MOCK[0];
  return {
    id: base.id, name: base.name,
    status: base.status, category: "Outreach", destination: base.destination,
    purpose: "Community Outreach",
    organizedBy: "CSI St. John's Church", coordinatorName: "Anita Samuel",
    startDate: base.startDate, endDate: base.endDate, daysOfOutreach: "-",
    totalParticipants: base.participants, volunteers: 0, totalExpenditure: 0, visibility: "Public",
    description: `${base.name} is a mission trip to ${base.destination}.`,
    objectives: ["Reach out to the local community", "Share the message of love and hope", "Build lasting relationships and trust"],
    highlights: [
      { key: "participants", label: "Participants", value: base.participants },
    ],
    team: [{ name: "Anita Samuel", role: "Coordinator" }],
    timeline: [
      { key: "planned", title: "Planned", date: `${base.startDate}T09:00:00`, by: "Parish Office (Admin)", color: "green" },
      { key: "briefing", title: "Team Briefing", date: null, by: null, color: "blue" },
      { key: "started", title: "Trip Started", date: null, color: "amber" },
      { key: "completed", title: "Trip Completed", date: null, color: "green" },
    ],
    attachments: [],
  };
}
