export const ANNOUNCEMENT_CATEGORY_OPTIONS = [
  "Worship", "Prayer", "Bible Study", "Youth", "Event", "Notice", "Appreciation", "Others",
];

export const ANNOUNCEMENT_CATEGORY_VARIANT = {
  Worship: "success",
  Prayer: "info",
  "Bible Study": "accent",
  Youth: "warning",
  Event: "danger",
  Notice: "info",
  Appreciation: "warning",
  Others: "default",
};

export const ANNOUNCEMENT_STATUS_OPTIONS = ["Draft", "Scheduled", "Published", "Expired"];

export const ANNOUNCEMENT_STATUS_VARIANT = {
  Draft: "default",
  Scheduled: "info",
  Published: "success",
  Expired: "danger",
};

export const ANNOUNCEMENT_AUDIENCE_OPTIONS = ["All Members", "Youth Group", "Volunteers", "Choir Members", "Specific Groups"];

export const AUDIENCE_TYPE_OPTIONS = [
  { key: "all", label: "All Members", helper: "All church members" },
  { key: "groups", label: "Specific Groups", helper: "Church groups or ministries" },
  { key: "ageGroups", label: "Age Groups", helper: "Specific age groups" },
  { key: "role", label: "Role/Position", helper: "Members by role or ministry" },
  { key: "custom", label: "Custom Selection", helper: "Select specific members" },
];

export const COMMUNICATION_CHANNEL_OPTIONS = [
  { key: "inApp", label: "In-App", helper: "Members will see in app" },
  { key: "email", label: "Email", helper: "Send via email" },
  { key: "sms", label: "SMS", helper: "Send via SMS" },
  { key: "website", label: "Website", helper: "Publish on website" },
];

export const ANNOUNCEMENT_LIST_STATS_MOCK = {
  totalAnnouncements: { value: 32, sub: "All time" },
  published: { value: 18, sub: "Active" },
  scheduled: { value: 6, sub: "Upcoming" },
  drafts: { value: 5, sub: "Not published" },
  expired: { value: 3, sub: "Inactive" },
};

export const ANNOUNCEMENT_CATEGORIES_SIDEBAR_MOCK = [
  { label: "Worship", count: 8, icon: "Megaphone", bg: "bg-success-50", color: "text-success-600" },
  { label: "Prayer", count: 6, icon: "HandHeart", bg: "bg-interactive-50", color: "text-interactive-600" },
  { label: "Bible Study", count: 4, icon: "BookOpen", bg: "bg-[#F3E8FF]", color: "text-[#7C3AED]" },
  { label: "Youth", count: 5, icon: "Users2", bg: "bg-warning-50", color: "text-warning-600" },
  { label: "Event", count: 3, icon: "CalendarDays", bg: "bg-danger-50", color: "text-danger-600" },
  { label: "Notice", count: 3, icon: "Info", bg: "bg-interactive-50", color: "text-interactive-600" },
  { label: "Appreciation", count: 2, icon: "Gift", bg: "bg-warning-50", color: "text-warning-600" },
  { label: "Others", count: 1, icon: "MoreHorizontal", bg: "bg-surface-muted", color: "text-ink-subtle" },
];

const ANNOUNCEMENTS_SEED = [
  {
    id: "AN-4001", title: "Pentecost Sunday Service", description: "Join us for a special Pentecost Sunday service with Holy Communion.",
    category: "Worship", audience: "All Members", audienceCount: 1256, status: "Published",
    publishedOn: "2026-05-19T08:00:00", createdOn: "2026-05-15T15:45:00",
  },
  {
    id: "AN-4002", title: "Community Prayer Meeting", description: "All are invited to our community prayer meeting this Saturday.",
    category: "Prayer", audience: "All Members", audienceCount: 1256, status: "Scheduled",
    publishedOn: "2026-05-24T07:00:00", createdOn: "2026-05-18T10:00:00",
  },
  {
    id: "AN-4003", title: "Youth Fellowship Gathering", description: "Calling all youth! Join us for a fun and spirit-filled evening.",
    category: "Youth", audience: "Youth Group", audienceCount: 45, status: "Published",
    publishedOn: "2026-05-18T18:00:00", createdOn: "2026-05-14T09:30:00",
  },
  {
    id: "AN-4004", title: "Bible Study – Book of Acts", description: "Weekly Bible study every Wednesday in the church hall.",
    category: "Bible Study", audience: "All Members", audienceCount: 1256, status: "Published",
    publishedOn: "2026-05-17T18:30:00", createdOn: "2026-05-12T14:00:00",
  },
  {
    id: "AN-4005", title: "Church Maintenance Notice", description: "Please note that there will be a water supply interruption this Friday.",
    category: "Notice", audience: "All Members", audienceCount: 1256, status: "Scheduled",
    publishedOn: "2026-05-23T09:00:00", createdOn: "2026-05-19T11:20:00",
  },
  {
    id: "AN-4006", title: "Thank You Volunteers!", description: "A heartfelt thank you to all our volunteers for your service.",
    category: "Appreciation", audience: "Volunteers", audienceCount: 78, status: "Published",
    publishedOn: "2026-05-16T20:00:00", createdOn: "2026-05-13T16:10:00",
  },
  {
    id: "AN-4007", title: "VBS 2026 Registration Open", description: "Vacation Bible School registration is now open. Register your children today!",
    category: "Event", audience: "All Members", audienceCount: 1256, status: "Draft",
    publishedOn: null, createdOn: "2026-05-20T13:00:00",
  },
  {
    id: "AN-4008", title: "Good Friday Service", description: "Join us as we remember the sacrifice of our Lord.",
    category: "Worship", audience: "All Members", audienceCount: 1256, status: "Expired",
    publishedOn: "2026-04-18T10:00:00", createdOn: "2026-04-10T09:00:00",
  },
];

/** Pad the seed list out to 32 entries to match "Showing 1 to 8 of 32 announcements". */
export const ANNOUNCEMENTS_LIST_MOCK = Array.from({ length: 32 }, (_, i) => {
  const seed = ANNOUNCEMENTS_SEED[i % ANNOUNCEMENTS_SEED.length];
  if (i < ANNOUNCEMENTS_SEED.length) return seed;
  return { ...seed, id: `AN-${String(4009 + i).padStart(4, "0")}` };
});

export const NEW_ANNOUNCEMENT_DEFAULTS = {
  title: "",
  category: "",
  audienceType: "all",
  content: "",
  attachments: [],
  channels: { inApp: true, email: true, sms: true, website: true },
  status: "Draft",
  publishDate: "2026-05-24",
  publishTime: "07:00 AM",
  immediate: false,
  expiryEnabled: true,
  expiryDate: "2026-06-07",
  expiryTime: "11:59 PM",
  pinToTop: false,
  allowComments: false,
};

export const ANNOUNCEMENT_DETAIL_MOCK = {
  id: "AN-4001",
  title: "Pentecost Sunday Service",
  status: "Published",
  category: "Worship",
  audience: "All Members",
  audienceDescription: "This announcement is visible to all church members.",
  publishedOn: "2026-05-19T08:00:00",
  publishedBy: "Parish Office",
  description: "We warmly invite you and your family to join us for a special Pentecost Sunday service as we celebrate the outpouring of the Holy Spirit.\n\nThe service will include inspiring worship, a message, and Holy Communion.\n\nLet us come together in unity and faith.",
  dateTime: "2026-05-19T08:00:00",
  location: "Main Church",
  attachments: [{ name: "Pentecost_Service_Program.pdf", size: "1.2 MB" }],
  currentStatusSince: "2026-05-19T08:00:00",
  createdOn: "2026-05-15T15:45:00",
  lastUpdated: "2026-05-19T07:55:00",
  createdBy: "Parish Office",
  updatedBy: "Parish Office",
  engagement: { views: 1256, emailsSent: 1256, smsSent: 842, engagements: 384 },
  channels: {
    email: { status: "Sent", detail: "Sent to 1,256 members" },
    sms: { status: "Sent", detail: "Sent to 842 members" },
    inApp: { status: "Sent", detail: "Sent to all members" },
    website: { status: "Published", detail: "Visible on website" },
  },
};

export function buildAnnouncementDetailMock(id) {
  const fallback = ANNOUNCEMENTS_LIST_MOCK.find((a) => a.id === id);
  if (!fallback) return { ...ANNOUNCEMENT_DETAIL_MOCK, id };
  return {
    ...ANNOUNCEMENT_DETAIL_MOCK,
    id,
    title: fallback.title,
    status: fallback.status,
    category: fallback.category,
    audience: fallback.audience,
    publishedOn: fallback.publishedOn ?? ANNOUNCEMENT_DETAIL_MOCK.publishedOn,
    createdOn: fallback.createdOn,
    description: fallback.description,
  };
}
