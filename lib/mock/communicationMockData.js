export const COMMUNICATION_OVERVIEW_STATS_MOCK = {
  totalAnnouncements: { value: 24, delta: "20%", trendUp: true },
  messagesSent: { value: 156, delta: "15%", trendUp: true },
  emailsSent: { value: 1256, delta: "18%", trendUp: true },
  smsSent: { value: 842, delta: "10%", trendUp: true },
};

export const COMMUNICATION_TOOLS_MOCK = [
  { key: "announcements", title: "Announcements", description: "Create and manage church announcements for the community.", icon: "Megaphone", href: "/communication-module/announcements" },
  { key: "messages", title: "Messages", description: "Send messages to members, groups or ministries.", icon: "MessageSquareText", href: "/communication-module/messages" },
  { key: "emailCampaigns", title: "Email Campaigns", description: "Create, send and track email campaigns.", icon: "Mail", href: "/communication-module/email-campaigns" },
  { key: "smsCampaigns", title: "SMS Campaigns", description: "Send SMS notifications and important updates.", icon: "Phone", href: "/communication-module/sms-campaigns" },
  { key: "templates", title: "Templates", description: "Create and manage reusable message and email templates.", icon: "FileText", href: "/communication-module/templates" },
  { key: "groups", title: "Communication Groups", description: "Manage groups and segments for targeted communication.", icon: "Users2", href: "/communication-module/groups" },
];

export const COMMUNICATION_TYPE_VARIANT = {
  Announcement: { bg: "bg-success-50", color: "text-success-600", icon: "Megaphone" },
  Message: { bg: "bg-interactive-50", color: "text-interactive-600", icon: "MessageSquareText" },
  Email: { bg: "bg-[#F3E8FF]", color: "text-[#7C3AED]", icon: "Mail" },
  SMS: { bg: "bg-warning-50", color: "text-warning-600", icon: "Phone" },
};

export const COMMUNICATION_STATUS_VARIANT = {
  Published: "success",
  Sent: "info",
  Delivered: "success",
  Draft: "default",
  Scheduled: "warning",
  Failed: "danger",
};

const RECENT_COMMUNICATIONS_SEED = [
  { id: "C-3001", type: "Announcement", title: "Sunday Service Schedule Update", description: "Service timing changes for this weekend.", audience: "All Members", audienceCount: 1256, sentBy: "Parish Office", sentOn: "2026-05-24T10:30:00", status: "Published" },
  { id: "C-3002", type: "Message", title: "Youth Fellowship Meeting", description: "Monthly youth fellowship meeting this Friday.", audience: "Youth Group", audienceCount: 45, sentBy: "John Samuel", sentOn: "2026-05-23T18:15:00", status: "Sent" },
  { id: "C-3003", type: "Email", title: "Easter Celebration Invitation", description: "You are invited to our Easter celebration.", audience: "All Members", audienceCount: 1256, sentBy: "Parish Office", sentOn: "2026-05-22T09:00:00", status: "Sent" },
  { id: "C-3004", type: "SMS", title: "Church Maintenance Notice", description: "Notice about water supply interruption.", audience: "All Members", audienceCount: 1256, sentBy: "Parish Office", sentOn: "2026-05-21T12:45:00", status: "Delivered" },
  { id: "C-3005", type: "Announcement", title: "Thank You Volunteers!", description: "A note of thanks for your service.", audience: "Volunteers", audienceCount: 78, sentBy: "Parish Office", sentOn: "2026-05-20T20:30:00", status: "Published" },
];

/** Pad the seed list out to 24 entries to match the Total Announcements stat / "View All Communications" list. */
export const RECENT_COMMUNICATIONS_MOCK = Array.from({ length: 24 }, (_, i) => {
  const seed = RECENT_COMMUNICATIONS_SEED[i % RECENT_COMMUNICATIONS_SEED.length];
  if (i < RECENT_COMMUNICATIONS_SEED.length) return seed;
  return { ...seed, id: `C-${String(3006 + i).padStart(4, "0")}` };
});

export const ANNOUNCEMENTS_PANEL_MOCK = [
  { title: "Pentecost Sunday Service", description: "Join us for a special service this Sunday.", date: "2026-05-24" },
  { title: "Community Prayer Meeting", description: "Every Saturday at 7:00 AM in the chapel.", date: "2026-05-23" },
  { title: "Bible Study – Book of Acts", description: "Wednesdays at 6:30 PM in the hall.", date: "2026-05-22" },
];

export const UPCOMING_MESSAGES_MOCK = [
  { icon: "MessageSquareText", bg: "bg-danger-50", color: "text-danger-600", title: "Choir Practice Reminder", to: "Choir Members", scheduled: "May 25, 2026 05:00 PM" },
  { icon: "Mail", bg: "bg-[#F3E8FF]", color: "text-[#7C3AED]", title: "Monthly Newsletter - May 2026", to: "All Members", scheduled: "May 26, 2026 09:00 AM" },
  { icon: "CalendarDays", bg: "bg-warning-50", color: "text-warning-600", title: "Blood Donation Camp", to: "All Members", scheduled: "May 27, 2026 10:00 AM" },
];
