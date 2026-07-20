import { FaBullhorn } from "react-icons/fa6";
export const ANNOUNCEMENTS_MOCK = {
  cards: {
    totalAnnouncements: { value: 56, sublabel: "All Time" },
    published: { value: 34, sublabel: "Currently Active" },
    scheduled: { value: 8, sublabel: "Upcoming" },
  },

  tabs: ["All Announcements", "Active", "Scheduled", "Archived"],

  sortOptions: ["Published Date (Latest)", "Published Date (Oldest)", "Title (A-Z)"],

  filters: {
    search: "",
    type: "All Types",
    audience: "All Audiences",
    status: "Active",
    dateRange: "01 Jan 2025 - 31 Dec 2025",
  },

  // TODO(backend): no "Announcement" model exists yet on the backend at
  // all (also flagged on the Dashboard's mock data) — would need a new
  // model with these exact fields: title, description, type (Announcement/
  // Event/Notice/Ministry Update), audience, publish_date, author,
  // category, expiry_date, attachments, display_image.
  announcements: [
    {
      id: 1, icon: "megaphone", title: "Sunday Worship Service Time Change",
      description: "Starting from 1 June 2025, the Sunday worship service will begin at 9:00 AM.",
      type: "Announcement", audience: "All Members", date: "10 May 2025", time: "09:30 AM",
      author: "Rev. Michael", authorRole: "Parish Priest",
    },
    {
      id: 2, icon: "calendar", title: "Youth Fellowship Meeting",
      description: "All youth members are invited to the youth fellowship meeting this Friday.",
      type: "Event", audience: "Youth Ministry", date: "20 May 2025", time: "06:00 PM",
      author: "John Thomas", authorRole: "Youth Pastor",
    },
    {
      id: 3, icon: "info", title: "Bible Study – Book of Acts",
      description: "Join us for an in-depth Bible study on the Book of Acts every Wednesday at 7:00 PM.",
      type: "Ministry Update", audience: "All Members", date: "08 May 2025", time: "07:00 PM",
      author: "Sarah Daniel", authorRole: "Bible Study Lead",
    },
    {
      id: 4, icon: "heart", title: "Online Giving Update",
      description: "We are pleased to announce that online giving is now available for tithes and offerings.",
      type: "Announcement", audience: "All Members", date: "05 May 2025", time: "11:00 AM",
      author: "Admin", authorRole: "Parish Office",
    },
    {
      id: 5, icon: "calendar", title: "Choir Practice – New Schedule",
      description: "From 1 June 2025, choir practice will be held every Saturday at 5:00 PM.",
      type: "Ministry Update", audience: "Choir Members", date: "01 Jun 2025", time: "04:00 PM",
      author: "Alex Varghese", authorRole: "Choir Director",
    },
    {
      id: 6, icon: "info", title: "Fasting & Prayer Day",
      description: "The church will have a day of fasting and prayer on the first Friday of every month.",
      type: "Event", audience: "All Members", date: "03 May 2025", time: "All Day",
      author: "Rev. Michael", authorRole: "Parish Priest",
    },
    {
      id: 7, icon: "notice", title: "Annual General Meeting",
      description: "The Annual General Meeting will be held on 25 May 2025 after the second service.",
      type: "Notice", audience: "All Members", date: "25 May 2025", time: "10:00 AM",
      author: "Admin", authorRole: "Parish Office",
    },
  ],

  totalPages: 4,

  categories: ["General", "Worship", "Youth", "Bible Study", "Giving", "Music", "Prayer", "Governance"],
  audiences: ["All Members", "Youth Ministry", "Choir Members", "Women's Fellowship", "Men's Fellowship", "Parish Council"],
};

const TYPE_BADGE_CLASS = {
  Announcement: "bg-success-50 text-success-600",
  Event: "bg-purple-50 text-purple-600",
  "Ministry Update": "bg-interactive-50 text-interactive-600",
  Notice: "bg-accent-50 text-accent-600",
};

export function typeBadgeClass(type) {
  return TYPE_BADGE_CLASS[type] ?? "bg-surface-muted text-ink-muted";
}

const ICON_BG_CLASS = {
  megaphone: "bg-success-50 text-success-600",
  calendar: "bg-purple-50 text-purple-600",
  info: "bg-interactive-50 text-interactive-600",
  heart: "bg-success-50 text-success-600",
  notice: "bg-accent-50 text-accent-600",
};

export function iconBgClass(icon) {
  return ICON_BG_CLASS[icon] ?? "bg-surface-muted text-ink-muted";
}
