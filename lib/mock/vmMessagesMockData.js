import { AUDIENCE_TYPE_OPTIONS, COMMUNICATION_CHANNEL_OPTIONS } from "@/lib/mock/vmAnnouncementsMockData";

// Re-exported for the Messages submenu — same options used by the Announcements
// submenu's audience/channel selectors (both live under Communication Module).
export { AUDIENCE_TYPE_OPTIONS, COMMUNICATION_CHANNEL_OPTIONS };

export const MESSAGE_TYPE_OPTIONS = ["Email", "SMS", "In-App"];

export const MESSAGE_TYPE_VARIANT = {
  Email: "info",
  SMS: "warning",
  "In-App": "accent",
};

export const MESSAGE_TYPE_ICON_STYLE = {
  Email: { bg: "bg-[#F3E8FF]", color: "text-[#7C3AED]" },
  SMS: { bg: "bg-warning-50", color: "text-warning-600" },
  "In-App": { bg: "bg-interactive-50", color: "text-interactive-600" },
};

export const MESSAGE_STATUS_OPTIONS = ["Sent", "Delivered", "Scheduled", "Draft"];

export const MESSAGE_STATUS_VARIANT = {
  Sent: "success",
  Delivered: "info",
  Scheduled: "warning",
  Draft: "default",
};

export const MESSAGE_AUDIENCE_OPTIONS = ["All Members", "Youth Group", "Bible Study Group", "Choir Members", "Prayer Group"];

export const MESSAGE_PRIORITY_OPTIONS = ["Low", "Normal", "High", "Urgent"];

export const MESSAGE_LIST_STATS_MOCK = {
  totalMessages: { value: 256, sub: "All time" },
  sentMessages: { value: 189, sub: "This month" },
  receivedMessages: { value: 67, sub: "This month" },
  activeConversations: { value: 23, sub: "Ongoing" },
  scheduled: { value: 8, sub: "Upcoming" },
};

export const MESSAGE_FOLDERS_MOCK = [
  { key: "inbox", label: "Inbox", count: 67, icon: "Inbox" },
  { key: "sent", label: "Sent", count: 189, icon: "Send" },
  { key: "scheduled", label: "Scheduled", count: 8, icon: "Clock" },
  { key: "drafts", label: "Drafts", count: 12, icon: "FileText" },
  { key: "archived", label: "Archived", count: 34, icon: "Archive" },
];

export const RECENT_CONVERSATIONS_MOCK = [
  { id: "1", initials: "YG", name: "Youth Group", lastMessage: "Thanks for the reminder!", time: "6:15 PM", bg: "bg-[#F3E8FF]", color: "text-[#7C3AED]" },
  { id: "2", initials: "BM", name: "Bible Study Group", lastMessage: "See you on Wednesday.", time: "4:20 PM", bg: "bg-interactive-50", color: "text-interactive-600" },
  { id: "3", initials: "CM", name: "Choir Members", lastMessage: "Noted. Thank you!", time: "5:00 PM", bg: "bg-warning-50", color: "text-warning-600" },
  { id: "4", initials: "PG", name: "Prayer Group", lastMessage: "Amen. Will be there.", time: "7:00 PM", bg: "bg-success-50", color: "text-success-600" },
  { id: "5", initials: "AM", name: "All Members", lastMessage: "Thank you for the update.", time: "9:00 AM", bg: "bg-danger-50", color: "text-danger-600" },
];

const MESSAGES_SEED = [
  {
    id: "MSG-2026-05-000256", title: "Youth Fellowship Meeting", description: "Reminder: Youth fellowship meeting this Friday at 6:15 PM.",
    type: "Email", audience: "Youth Group", sender: "Parish Office", sentOn: "2026-05-24T18:15:00", status: "Sent",
  },
  {
    id: "MSG-2026-05-000255", title: "Sunday Service Reminder", description: "Don't forget to join us for Sunday service...",
    type: "SMS", audience: "All Members", sender: "Parish Office", sentOn: "2026-05-24T09:00:00", status: "Sent",
  },
  {
    id: "MSG-2026-05-000254", title: "Bible Study Group", description: "Bible study this Wednesday at 6:30 PM in...",
    type: "In-App", audience: "Bible Study Group", sender: "Parish Office", sentOn: "2026-05-23T16:20:00", status: "Delivered",
  },
  {
    id: "MSG-2026-05-000253", title: "Church Newsletter - May 2026", description: "View the latest updates and upcoming events...",
    type: "Email", audience: "All Members", sender: "Parish Office", sentOn: "2026-05-23T09:00:00", status: "Scheduled",
  },
  {
    id: "MSG-2026-05-000252", title: "Blood Donation Camp", description: "Join us for the blood donation camp this Saturday...",
    type: "SMS", audience: "All Members", sender: "Parish Office", sentOn: "2026-05-22T10:00:00", status: "Sent",
  },
  {
    id: "MSG-2026-05-000251", title: "Choir Practice Update", description: "Choir practice time changed to 5:00 PM i...",
    type: "In-App", audience: "Choir Members", sender: "Parish Office", sentOn: "2026-05-21T17:00:00", status: "Delivered",
  },
  {
    id: "MSG-2026-05-000250", title: "VBS 2026 Registration Open", description: "Vacation Bible School registration is now open...",
    type: "Email", audience: "All Members", sender: "Parish Office", sentOn: "2026-05-20T08:30:00", status: "Sent",
  },
  {
    id: "MSG-2026-05-000249", title: "Prayer Meeting Reminder", description: "Weekly prayer meeting every Saturday at 7:00 PM...",
    type: "SMS", audience: "Prayer Group", sender: "Parish Office", sentOn: "2026-05-19T19:00:00", status: "Sent",
  },
];

/** Pad the seed list out to 256 entries to match "Showing 1 to 8 of 256 messages". */
export const MESSAGES_LIST_MOCK = Array.from({ length: 256 }, (_, i) => {
  const seed = MESSAGES_SEED[i % MESSAGES_SEED.length];
  if (i < MESSAGES_SEED.length) return seed;
  return { ...seed, id: `MSG-2026-05-${String(256 - i).padStart(6, "0")}` };
});

export const NEW_MESSAGE_DEFAULTS = {
  audienceType: "all",
  channels: { inApp: true, email: true, sms: false, website: false },
  subject: "",
  content: "",
  attachments: [],
  priority: "Normal",
  allowReplies: true,
  scheduleEnabled: false,
  scheduleDate: "",
  scheduleTime: "",
};

export const MESSAGE_DETAIL_MOCK = {
  id: "MSG-2026-05-000256",
  title: "Youth Fellowship Meeting",
  status: "Sent",
  type: "Email",
  preview: "Reminder: Youth fellowship meeting this Friday at 6:15 PM.",
  audience: "Youth Group",
  sender: "Parish Office",
  sentOn: "2026-05-24T18:15:00",
  priority: "Normal",
  createdOn: "2026-05-23T09:30:00",
  createdBy: "Parish Office",
  channel: "Email",
  allowReplies: false,
  subject: "Youth Fellowship Meeting",
  content:
    "Dear Youth,\n\nThis is a friendly reminder that our Youth Fellowship Meeting is happening this Friday, May 24, 2026 at 6:15 PM in the Fellowship Hall.\n\nWe will have a time of worship, a short message, fun activities, and fellowship.\nDon't miss it! Bring a friend along.\n\nLooking forward to seeing you there!\n\nBlessings,\nParish Youth Team",
  attachments: [{ name: "Fellowship_Poster.pdf", size: "1.2 MB" }],
  audienceType: "Youth Group",
  totalRecipients: 51,
  delivered: 42,
  deliveredPct: 82.4,
  opened: 28,
  openedPct: 54.9,
  clicked: 12,
  clickedPct: 23.5,
  bounced: 2,
  bouncedPct: 3.9,
};

export function buildMessageDetailMock(id) {
  const fallback = MESSAGES_LIST_MOCK.find((m) => m.id === id);
  if (!fallback) return { ...MESSAGE_DETAIL_MOCK, id };
  return {
    ...MESSAGE_DETAIL_MOCK,
    id,
    title: fallback.title,
    status: fallback.status,
    type: fallback.type,
    preview: fallback.description,
    audience: fallback.audience,
    audienceType: fallback.audience,
    sender: fallback.sender,
    sentOn: fallback.sentOn,
    channel: fallback.type,
    subject: fallback.title,
  };
}
