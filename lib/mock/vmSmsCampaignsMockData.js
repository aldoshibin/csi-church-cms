export const SMS_CAMPAIGN_TYPE_OPTIONS = ["Reminder", "Event", "Greetings", "Announcement", "Update"];

export const SMS_CAMPAIGN_TYPE_VARIANT = {
  Reminder: "success",
  Event: "accent",
  Greetings: "warning",
  Announcement: "danger",
  Update: "info",
};

export const SMS_CAMPAIGN_STATUS_OPTIONS = ["Sent", "Scheduled", "Draft"];

export const SMS_CAMPAIGN_STATUS_VARIANT = {
  Sent: "success",
  Scheduled: "warning",
  Draft: "default",
};

export const SMS_CAMPAIGN_AUDIENCE_TYPE_OPTIONS = [
  { key: "all", label: "All Members", helper: "Send to all members", meta: "3,842 members" },
  { key: "groups", label: "Specific Groups", helper: "Send to selected groups", meta: "Select groups" },
  { key: "ageGroups", label: "Age Groups", helper: "Send to members by age", meta: "Select age range" },
  { key: "custom", label: "Custom List", helper: "Upload or enter numbers", meta: "Create list" },
];

export const SMS_CAMPAIGN_CATEGORY_OPTIONS = ["Worship", "Fellowship", "Administrative", "Pastoral Care", "Other"];

export const SMS_CAMPAIGN_OVERVIEW_STATS_MOCK = {
  totalCampaigns: { value: 26, sub: "All time" },
  sentCampaigns: { value: 21, sub: "This month" },
  deliveryRate: { value: "97.6%", sub: "Average" },
  responseRate: { value: "15.3%", sub: "Average" },
  recipients: { value: "3,842", sub: "This month" },
};

export const SMS_CAMPAIGN_OVERVIEW_DONUT_MOCK = {
  total: 21,
  totalLabel: "Sent",
  breakdown: [
    { label: "Delivered", count: 1774, pct: 97.6, color: "#16A34A" },
    { label: "Replies", count: 588, pct: 15.3, color: "#2563EB" },
    { label: "Failed", count: 32, pct: 1.8, color: "#F59E0B" },
  ],
};

export const SMS_CAMPAIGN_TYPES_SIDEBAR_MOCK = [
  { label: "Reminder", count: 8, icon: "MessageCircle" },
  { label: "Event", count: 6, icon: "CalendarDays" },
  { label: "Greetings", count: 4, icon: "Smile" },
  { label: "Announcement", count: 3, icon: "Megaphone" },
];

const SMS_CAMPAIGNS_SEED = [
  {
    id: "SMS-2026-00021", title: "Sunday Service Reminder", description: "Dear members, Don't forget to join us...",
    icon: "Cross", type: "Reminder", audience: "All Members", recipients: 1256, status: "Sent",
    sentOn: "2026-05-24T08:00:00", delivered: 1228, deliveredPct: 97.8, replies: 186, repliesPct: 15.2,
  },
  {
    id: "SMS-2026-00020", title: "Youth Fellowship Invite", description: "You are invited to our youth fellowship...",
    icon: "Gift", type: "Event", audience: "Youth Group", recipients: 87, status: "Sent",
    sentOn: "2026-05-20T18:30:00", delivered: 85, deliveredPct: 97.7, replies: 22, repliesPct: 25.9,
  },
  {
    id: "SMS-2026-00019", title: "Happy Mother's Day", description: "Wishing all mothers a blessed...",
    icon: "Gift", type: "Greetings", audience: "All Members", recipients: 1256, status: "Sent",
    sentOn: "2026-05-10T09:00:00", delivered: 1221, deliveredPct: 97.2, replies: 142, repliesPct: 11.6,
  },
  {
    id: "SMS-2026-00018", title: "Good Friday Service", description: "Join us for the Good Friday service...",
    icon: "Cross", type: "Event", audience: "All Members", recipients: 1256, status: "Sent",
    sentOn: "2026-04-18T19:00:00", delivered: 1210, deliveredPct: 96.3, replies: 168, repliesPct: 13.9,
  },
  {
    id: "SMS-2026-00017", title: "Prayer Meeting Reminder", description: "This is a reminder for tomorrow's...",
    icon: "MessageCircle", type: "Reminder", audience: "Prayer Ministry", recipients: 156, status: "Sent",
    sentOn: "2026-04-15T18:00:00", delivered: 153, deliveredPct: 98.1, replies: 28, repliesPct: 18.3,
  },
  {
    id: "SMS-2026-00016", title: "Church Anniversary", description: "We are celebrating our Church...",
    icon: "Megaphone", type: "Announcement", audience: "All Members", recipients: 1256, status: "Scheduled",
    sentOn: "2026-05-28T09:00:00", delivered: null, deliveredPct: null, replies: null, repliesPct: null,
  },
  {
    id: "SMS-2026-00015", title: "Bible Study Weekly Update", description: "Here's what we covered this week...",
    icon: "BookOpen", type: "Update", audience: "Bible Study Group", recipients: 64, status: "Draft",
    sentOn: null, delivered: null, deliveredPct: null, replies: null, repliesPct: null,
  },
];

/** Pad the seed list out to 26 entries to match "Showing 1 to 7 of 26 campaigns". */
export const SMS_CAMPAIGNS_LIST_MOCK = Array.from({ length: 26 }, (_, i) => {
  const seed = SMS_CAMPAIGNS_SEED[i % SMS_CAMPAIGNS_SEED.length];
  if (i < SMS_CAMPAIGNS_SEED.length) return seed;
  return { ...seed, id: `SMS-2026-${String(26 - i).padStart(5, "0")}` };
});

export const NEW_SMS_CAMPAIGN_DEFAULTS = {
  campaignName: "",
  campaignType: "Reminder",
  purposeCategory: "",
  senderId: "STJOHNS",
  audienceType: "all",
  estimatedRecipients: 3842,
  sendOption: "immediate",
  scheduleDate: "2026-05-24",
  scheduleTime: "10:00 AM",
  message: "",
};

export const SMS_CAMPAIGN_DETAIL_MOCK = {
  id: "SMS-2026-00021",
  title: "Sunday Service Reminder",
  status: "Sent",
  type: "Reminder",
  preview: "Dear members, Don't forget to join us this Sunday for worship and a time in God's Word.",
  audience: "All Members",
  recipientsCount: 1256,
  sentOn: "2026-05-24T08:00:00",
  subject: "Sunday Service Reminder",
  message: "Dear members, Don't forget to join us this Sunday for worship and a time in God's Word.",
  characterCount: 88,
  smsPartsLabel: "1 SMS",
  channel: "SMS",
  templateUsed: "Sunday Service Reminder",
  createdBy: "Parish Office (Admin)",
  createdOn: "2026-05-20T10:15:00",
  lastUpdated: "2026-05-24T08:05:00",
  totalSmsLabel: "1 (Single Part)",
  deliveryTimeLabel: "~ 2 minutes",
  allowReplies: true,
  attachments: [],
  performance: {
    delivered: 1228, deliveredPct: 97.8, replies: 186, repliesPct: 15.2, failed: 32, failedPct: 1.8, pending: 10, pendingPct: 0.8,
  },
  activityLog: [
    { action: "Campaign Created", by: "Parish Office (Admin)", dateTime: "2026-05-20T10:15:00", details: "" },
    { action: "Audience Selected", by: "Parish Office (Admin)", dateTime: "2026-05-20T10:20:00", details: "All Members (1,256 recipients)" },
    { action: "Campaign Scheduled", by: "Parish Office (Admin)", dateTime: "2026-05-24T07:55:00", details: "Scheduled for May 24, 2026 08:00 AM" },
    { action: "Campaign Sent", by: "Parish Office (Admin)", dateTime: "2026-05-24T08:00:00", details: "Campaign sent successfully" },
    { action: "Delivery Completed", by: "Parish Office (Admin)", dateTime: "2026-05-24T08:02:00", details: "97.8% delivered" },
  ],
};

export function buildSmsCampaignDetailMock(id) {
  const fallback = SMS_CAMPAIGNS_LIST_MOCK.find((c) => c.id === id);
  if (!fallback) return { ...SMS_CAMPAIGN_DETAIL_MOCK, id };
  return {
    ...SMS_CAMPAIGN_DETAIL_MOCK,
    id,
    title: fallback.title,
    status: fallback.status,
    type: fallback.type,
    preview: fallback.description,
    audience: fallback.audience,
    recipientsCount: fallback.recipients,
    sentOn: fallback.sentOn ?? SMS_CAMPAIGN_DETAIL_MOCK.sentOn,
    subject: fallback.title,
    message: fallback.description,
    templateUsed: fallback.title,
  };
}
