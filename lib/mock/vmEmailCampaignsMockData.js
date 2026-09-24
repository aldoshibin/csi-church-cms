export const CAMPAIGN_TYPE_OPTIONS = ["Regular Campaign", "Event Invitation", "Greeting", "Announcement"];

export const CAMPAIGN_TYPE_SHORT_LABEL = {
  "Regular Campaign": "Regular",
  "Event Invitation": "Event",
  Greeting: "Greeting",
  Announcement: "Announcement",
};

export const CAMPAIGN_TYPE_VARIANT = {
  Regular: "info",
  Event: "accent",
  Greeting: "warning",
  Announcement: "success",
};

export const CAMPAIGN_STATUS_OPTIONS = ["Sent", "Scheduled", "Draft"];

export const CAMPAIGN_STATUS_VARIANT = {
  Sent: "success",
  Scheduled: "warning",
  Draft: "default",
};

export const CAMPAIGN_AUDIENCE_TYPE_OPTIONS = [
  { key: "all", label: "All Members", helper: "Send to all members", meta: "1,256 members" },
  { key: "groups", label: "Specific Groups", helper: "Send to selected groups", meta: "Select groups" },
  { key: "ageGroups", label: "Age Groups", helper: "Send to members by age", meta: "Select age range" },
  { key: "custom", label: "Custom Segment", helper: "Create a custom audience", meta: "Create segment" },
];

export const CAMPAIGN_TEMPLATE_OPTIONS = [
  "Sunday Service Invitation", "Youth Fellowship", "Prayer Meeting", "Newsletter", "Custom Template",
];

export const CAMPAIGN_OVERVIEW_STATS_MOCK = {
  totalCampaigns: { value: 24, sub: "All time" },
  sentCampaigns: { value: 18, sub: "This month" },
  openRate: { value: "48.6%", sub: "Average" },
  clickRate: { value: "12.3%", sub: "Average" },
  subscribers: { value: "1,256", sub: "Total" },
};

export const CAMPAIGN_OVERVIEW_DONUT_MOCK = {
  total: 18,
  totalLabel: "Sent",
  breakdown: [
    { label: "Opened", count: 468, pct: 48.6, color: "#16A34A" },
    { label: "Clicked", count: 118, pct: 12.3, color: "#2563EB" },
    { label: "Bounced", count: 24, pct: 2.5, color: "#F59E0B" },
    { label: "Unopened", count: 454, pct: 47.1, color: "#94A3B8" },
  ],
};

export const CAMPAIGN_TYPES_SIDEBAR_MOCK = [
  { label: "Regular Campaigns", count: 12, icon: "Send" },
  { label: "Event Invitations", count: 4, icon: "CalendarDays" },
  { label: "Greetings", count: 3, icon: "Smile" },
  { label: "Announcements", count: 3, icon: "Megaphone" },
];

const CAMPAIGNS_SEED = [
  {
    id: "CMP-2026-00024", title: "Sunday Service Reminder", description: "Join us this Sunday for worship and a time in God's Word.",
    icon: "Cross", type: "Regular Campaign", audience: "All Members", recipients: 1256, status: "Sent",
    sentOn: "2026-05-24T08:00:00", openRate: 52.1, clickRate: 13.8,
  },
  {
    id: "CMP-2026-00023", title: "Youth Fellowship Invite", description: "You are invited to our youth fellowship...",
    icon: "Users2", type: "Event Invitation", audience: "Youth Group", recipients: 87, status: "Sent",
    sentOn: "2026-05-20T18:30:00", openRate: 61.2, clickRate: 18.4,
  },
  {
    id: "CMP-2026-00022", title: "Happy Mother's Day", description: "Wishing all mothers a blessed...",
    icon: "Heart", type: "Greeting", audience: "All Members", recipients: 1256, status: "Sent",
    sentOn: "2026-05-10T09:00:00", openRate: 49.7, clickRate: 10.2,
  },
  {
    id: "CMP-2026-00021", title: "Good Friday Service", description: "Join us for the Good Friday service...",
    icon: "Cross", type: "Event Invitation", audience: "All Members", recipients: 1256, status: "Sent",
    sentOn: "2026-04-18T19:00:00", openRate: 55.3, clickRate: 14.6,
  },
  {
    id: "CMP-2026-00020", title: "Easter Celebration", description: "He is risen! Celebrate the joy of Easter...",
    icon: "Sparkles", type: "Regular Campaign", audience: "All Members", recipients: 1256, status: "Sent",
    sentOn: "2026-04-12T08:30:00", openRate: 57.8, clickRate: 16.1,
  },
  {
    id: "CMP-2026-00019", title: "Bible Study Weekly Update", description: "Here's what we covered this week...",
    icon: "BookOpen", type: "Regular Campaign", audience: "Bible Study Group", recipients: 64, status: "Scheduled",
    sentOn: "2026-05-27T18:00:00", openRate: null, clickRate: null,
  },
  {
    id: "CMP-2026-00018", title: "Church Building Fund Update", description: "Thank you for your generous support...",
    icon: "HeartHandshake", type: "Regular Campaign", audience: "All Members", recipients: 1256, status: "Draft",
    sentOn: null, openRate: null, clickRate: null,
  },
];

/** Pad the seed list out to 24 entries to match "Showing 1 to 7 of 24 campaigns". */
export const CAMPAIGNS_LIST_MOCK = Array.from({ length: 24 }, (_, i) => {
  const seed = CAMPAIGNS_SEED[i % CAMPAIGNS_SEED.length];
  if (i < CAMPAIGNS_SEED.length) return seed;
  return { ...seed, id: `CMP-2026-${String(24 - i).padStart(5, "0")}` };
});

export const NEW_CAMPAIGN_DEFAULTS = {
  campaignName: "",
  campaignType: "Regular Campaign",
  subjectLine: "",
  preheaderText: "",
  personalization: "",
  audienceType: "all",
  estimatedRecipients: 1256,
  sendOption: "immediate",
  scheduleDate: "2026-05-24",
  scheduleTime: "10:00 AM",
  template: "Sunday Service Invitation",
  emailBody: "",
};

export const CAMPAIGN_DETAIL_MOCK = {
  id: "CMP-2026-00024",
  title: "Sunday Service Reminder",
  status: "Sent",
  type: "Regular Campaign",
  preview: "Join us this Sunday for worship and a time in God's Word.",
  audience: "All Members",
  recipientsCount: 1256,
  sentOn: "2026-05-24T08:00:00",
  priority: "Normal",
  createdOn: "2026-05-20T09:15:00",
  createdBy: "Parish Office (Admin)",
  lastUpdated: "2026-05-24T08:05:00",
  channel: "Email",
  templateUsed: "Sunday Service Reminder",
  allowReplies: true,
  subject: "Sunday Service Reminder",
  previewText: "Don't forget to join us for worship this Sunday at St. John's Church.",
  emailPreview: {
    heading: "You're Invited!",
    subheading: "Sunday Service",
    body: "Join us this Sunday for a time of worship, fellowship,\nand God's Word.",
    date: "Sunday, May 24, 2026",
    time: "10:00 AM",
    location: "St. John's Church, Main Hall",
    closing: "We look forward to worshiping with you!",
    signoff: "Blessings,\nSt. John's Church Family",
  },
  attachments: [{ name: "Sunday Service Details.pdf", size: "582 KB" }],
  links: [{ label: "Service Schedule", url: "https://stjohnschurch.org/schedule" }],
  performance: {
    sent: 1256, opened: 713, openedPct: 56.8, clicked: 231, clickedPct: 18.4, bounced: 24, bouncedPct: 1.9, unopened: 288, unopenedPct: 22.9,
  },
  activityLog: [
    { action: "Campaign Created", by: "Parish Office (Admin)", dateTime: "2026-05-20T09:15:00", details: "Campaign created and saved as draft." },
    { action: "Audience Selected", by: "Parish Office (Admin)", dateTime: "2026-05-20T09:30:00", details: "All Members (1,256 recipients) selected." },
    { action: "Campaign Sent", by: "Parish Office (Admin)", dateTime: "2026-05-24T08:00:00", details: "Campaign sent successfully." },
  ],
};

export function buildCampaignDetailMock(id) {
  const fallback = CAMPAIGNS_LIST_MOCK.find((c) => c.id === id);
  if (!fallback) return { ...CAMPAIGN_DETAIL_MOCK, id };
  return {
    ...CAMPAIGN_DETAIL_MOCK,
    id,
    title: fallback.title,
    status: fallback.status,
    type: fallback.type,
    preview: fallback.description,
    audience: fallback.audience,
    recipientsCount: fallback.recipients,
    sentOn: fallback.sentOn ?? CAMPAIGN_DETAIL_MOCK.sentOn,
    subject: fallback.title,
    templateUsed: fallback.title,
  };
}
