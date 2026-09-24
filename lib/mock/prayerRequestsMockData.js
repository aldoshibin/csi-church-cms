// Mock data for Prayer Ministry > Prayer Requests — maps to prayer_ministry/requests/views.py once wired up.

export const PRAYER_STATUS_OPTIONS = ["New", "In Progress", "Answered"];
export const PRAYER_CATEGORY_OPTIONS = ["Health", "Employment", "Education", "Ministry", "Family", "Finance"];
export const PRAYER_GROUP_OPTIONS = ["Daily Prayer Group", "Morning Prayer Group", "Youth Prayer Group", "Intercessory Team"];
export const PRAYER_CONTACT_METHOD_OPTIONS = ["Phone Call", "Email", "Text Message", "No Contact Needed"];

export const PRAYER_STATUS_VARIANT = { New: "info", "In Progress": "warning", Answered: "success" };
export const PRAYER_CATEGORY_BADGE = {
  Health: { bg: "bg-[#F3E8FF]", color: "text-[#7C3AED]" },
  Employment: { bg: "bg-interactive-50", color: "text-interactive-600" },
  Education: { bg: "bg-success-50", color: "text-success-600" },
  Ministry: { bg: "bg-[#F3E8FF]", color: "text-[#7C3AED]" },
  Family: { bg: "bg-[#FCE7F3]", color: "text-[#DB2777]" },
  Finance: { bg: "bg-orange-50", color: "text-orange-600" },
};

const PRAYER_REQUESTS_SEED = [
  { id: "PR-2026-00128", title: "Healing for my mother", preview: "Please pray for my mother who is underg...", requestedBy: "Melissa Grace", isGroup: false, category: "Health", date: "2026-05-25", time: "10:30 AM", status: "In Progress" },
  { id: "PR-2026-00127", title: "Job opportunity", preview: "Pray that I may find the right job...", requestedBy: "John Samuel", isGroup: false, category: "Employment", date: "2026-05-24", time: "08:15 PM", status: "In Progress" },
  { id: "PR-2026-00126", title: "Exams and studies", preview: "Pray for wisdom and understanding in m...", requestedBy: "Anna Paul", isGroup: false, category: "Education", date: "2026-05-24", time: "04:45 PM", status: "New" },
  { id: "PR-2026-00125", title: "Our Church Ministry", preview: "Pray for God's guidance and protection ...", requestedBy: "Worship Team", isGroup: true, category: "Ministry", date: "2026-05-23", time: "11:20 AM", status: "In Progress" },
  { id: "PR-2026-00124", title: "Father's recovery", preview: "Please pray for my father's speedy recov...", requestedBy: "Daniel Paul", isGroup: false, category: "Health", date: "2026-05-22", time: "07:10 PM", status: "Answered" },
  { id: "PR-2026-00123", title: "Marriage blessing", preview: "Pray for God's blessing on our marriage...", requestedBy: "Sophia Daniel", isGroup: false, category: "Family", date: "2026-05-21", time: "09:00 AM", status: "Answered" },
  { id: "PR-2026-00122", title: "Financial provision", preview: "Pray for God's provision for our monthly...", requestedBy: "Isaac Thomas", isGroup: false, category: "Finance", date: "2026-05-20", time: "06:35 PM", status: "In Progress" },
];

/** Pad the seed list out to 128 entries to match "Showing 1 to 7 of 128 requests". */
export const PRAYER_REQUESTS_LIST_MOCK = Array.from({ length: 128 }, (_, i) => {
  const seed = PRAYER_REQUESTS_SEED[i % PRAYER_REQUESTS_SEED.length];
  if (i < PRAYER_REQUESTS_SEED.length) return seed;
  return { ...seed, id: `PR-2026-${String(128 - i).padStart(5, "0")}` };
});

export const PRAYER_STATS_MOCK = {
  totalRequests: { value: 128, delta: "12 this week", trendUp: true },
  newRequests: { value: 18, delta: "6 this week", trendUp: true },
  inProgress: { value: 67, delta: "No change", trendUp: null },
  answered: { value: 39, delta: "9 this week", trendUp: true },
  praiseReports: { value: 24, delta: "5 this week", trendUp: true },
};

export const PRAYER_GROUPS_MOCK = [
  { name: "Daily Prayer Group", schedule: "Every Day \u2022 6:00 AM", members: 28, colorBg: "bg-interactive-50", colorFg: "text-interactive-600" },
  { name: "Wednesday Intercessors", schedule: "Wednesdays \u2022 7:00 PM", members: 16, colorBg: "bg-success-50", colorFg: "text-success-600" },
  { name: "Youth Prayer Team", schedule: "Saturdays \u2022 6:00 PM", members: 12, colorBg: "bg-warning-50", colorFg: "text-warning-600" },
  { name: "Women Prayer Circle", schedule: "Fridays \u2022 10:00 AM", members: 22, colorBg: "bg-[#FCE7F3]", colorFg: "text-[#DB2777]" },
];

export const UPCOMING_PRAYER_MEETINGS_MOCK = [
  { day: "27", month: "MAY", title: "Daily Morning Prayer", meta: "Tomorrow", time: "6:00 AM - 6:30 AM", location: "Prayer Hall" },
  { day: "28", month: "MAY", title: "Wednesday Intercessors", meta: "Wed", time: "7:00 PM - 8:00 PM", location: "Online (Google Meet)" },
  { day: "30", month: "MAY", title: "Youth Prayer Team", meta: "Sat", time: "6:00 PM - 7:00 PM", location: "Youth Room" },
];

export const NEW_PRAYER_REQUEST_DEFAULTS = {
  title: "",
  category: "",
  urgency: "High",
  prayerGroup: "",
  requestedFor: "Myself",
  requestType: "",
  description: "",
  scriptureReference: "",
  yourName: "",
  contactNumber: "",
  email: "",
  visibility: "Church Members",
  allowComments: "Yes",
  tags: [],
  reminderDate: "",
  attachments: [],
};

export const PRAYER_URGENCY_OPTIONS = [
  { value: "High", color: "#DC2626" },
  { value: "Medium", color: "#F97316" },
  { value: "Low", color: "#16A34A" },
];
export const PRAYER_REQUEST_TYPE_OPTIONS = ["Healing", "Guidance", "Provision", "Protection", "Thanksgiving", "Other"];
export const PRAYER_VISIBILITY_OPTIONS = ["Church Members", "Prayer Team Only", "Leadership Only", "Private"];

// ---------------------------------------------------------------------------
// Prayer request detail (Healing for my mother) — shown in the details drawer
// ---------------------------------------------------------------------------

export const PRAYER_REQUEST_DETAIL_MOCK = {
  id: "PR-2026-00128",
  title: "Healing for my mother",
  status: "In Progress",
  requestedBy: "Melissa Grace",
  requestedByRole: "Member",
  phone: "+91 98765 43210",
  email: "melissa.grace@gmail.com",
  category: "Health",
  preferredContactMethod: "Phone Call",
  prayerGroup: "Daily Prayer Group",
  dateRequestedOn: "2026-05-25",
  dateRequestedTime: "10:30 AM",
  lastUpdatedOn: "2026-05-25",
  lastUpdatedTime: "11:45 AM",
  description: "Please pray for my mother who is undergoing treatment for her health issues. We believe in the power of prayer and kindly request your prayers for her complete healing and strength.",
  updates: [
    { date: "2026-05-25", time: "11:45 AM", author: "Melissa Grace", authorType: "requester", text: "Thank you for your prayers. My mother's condition is stable and she is feeling a little better." },
    { date: "2026-05-23", time: "09:10 PM", author: "Maria Joseph", authorType: "intercessor", text: "We will continue to pray. May God's healing touch be upon her." },
  ],
  assignedIntercessors: [
    { name: "Maria Joseph", role: "Intercessor", phone: "+91 91234 56789", email: "maria.joseph@gmail.com" },
  ],
};

export function buildPrayerRequestDetailMock(id) {
  if (!id || id === PRAYER_REQUEST_DETAIL_MOCK.id) return PRAYER_REQUEST_DETAIL_MOCK;
  const fallback = PRAYER_REQUESTS_LIST_MOCK.find((r) => r.id === id);
  if (!fallback) return { ...PRAYER_REQUEST_DETAIL_MOCK, id };
  return {
    ...PRAYER_REQUEST_DETAIL_MOCK,
    id,
    title: fallback.title,
    status: fallback.status,
    requestedBy: fallback.requestedBy,
    category: fallback.category,
    dateRequestedOn: fallback.date,
    dateRequestedTime: fallback.time,
    description: fallback.preview,
  };
}
