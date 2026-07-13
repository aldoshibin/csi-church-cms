import {
  LayoutDashboard, Building2, Users, BookHeart, Home, Wallet, CreditCard,
  GraduationCap, Sparkles, HeartHandshake, Users2, Mic2, HandHeart,
  CalendarDays, UserCog, MessageSquare, Cross, Boxes, CalendarCheck2,
  Briefcase, FolderKanban, Vote, Globe2, FileBarChart, Settings,
} from "lucide-react";

export const NAV_ITEMS = [
  { label: "Dashboard", href: "/dashboard", icon: LayoutDashboard, roles: "all" },
  {
    label: "Parish Administration", icon: Building2,
    roles: ["SUPER_ADMIN", "BISHOP", "DIOCESE_ADMIN", "PASTOR"],
    children: [
      { label: "Parish Administration", href: "/parish-administration" },
      { label: "Upcoming Events Services", href: "/parish-administration/events" },
      { label: "Sacrament Reports", href: "/parish-administration/sacrament-reports" },
      { label: "Birthdays Anniversaries", href: "/parish-administration/birthdays-anniversaries" },
      { label: "Prayer Request Summary", href: "/parish-administration/prayer-requests" },
      { label: "Notifications Announcements", href: "/parish-administration/announcements" },
      { label: "Committee Activity Overview", href: "/parish-administration/committees" },
      { label: "Branch Church Overview", href: "/parish-administration/branches" },
    ],
  },
  {
    label: "Member Management", icon: Users,
    roles: ["SUPER_ADMIN", "BISHOP", "DIOCESE_ADMIN", "PASTOR", "CHURCH_SECRETARY"],
    children: [
      { label: "Member Management", href: "/members" },
      { label: "Family Registration", href: "/members/family-registration" },
      { label: "Individual Member Registration", href: "/members/individual-registration" },
      { label: "Member Directory", href: "/members/directory" },
      { label: "New Member Enrollment", href: "/members/new-enrollment" },
      { label: "Visitor Management", href: "/members/visitors" },
      { label: "Member Transfer In", href: "/members/transfer-in" },
      { label: "Member Transfer Out", href: "/members/transfer-out" },
      { label: "Inactive Member Tracking", href: "/members/inactive-tracking" },
      { label: "Migrated Member Tracking", href: "/members/migrated-tracking" },
      { label: "Senior Citizen Registry", href: "/members/senior-citizens" },
      { label: "Widow Widower Registry", href: "/members/widow-widower" },
      { label: "Member Photo Management", href: "/members/photo-management" },
    ],
  },
  {
    label: "Sacramental Records", icon: BookHeart,
    roles: ["SUPER_ADMIN", "BISHOP", "DIOCESE_ADMIN", "PASTOR", "CHURCH_SECRETARY"],
    children: [
      { label: "Baptism Register", href: "/sacraments/baptism" },
      { label: "Confirmation Register", href: "/sacraments/confirmation" },
      { label: "Marriage Register", href: "/sacraments/marriage" },
      { label: "Funeral Register", href: "/sacraments/funeral" },
    ],
  },
  {
    label: "Family Management", icon: Home,
    roles: ["SUPER_ADMIN", "BISHOP", "DIOCESE_ADMIN", "PASTOR", "CHURCH_SECRETARY"],
    children: [
      { label: "All Families", href: "/families" },
      { label: "Family Reports", href: "/families/reports" },
    ],
  },
  {
    label: "Finance & Accounting", icon: Wallet,
    roles: ["SUPER_ADMIN", "BISHOP", "DIOCESE_ADMIN", "PASTOR", "TREASURER"],
    children: [
      { label: "Tithes & Offerings", href: "/finance/income" },
      { label: "Expenses", href: "/finance/expenses" },
      { label: "Budgets", href: "/finance/budgets" },
    ],
  },
  {
    label: "Online Giving & Payments", icon: CreditCard,
    roles: ["SUPER_ADMIN", "BISHOP", "DIOCESE_ADMIN", "PASTOR", "TREASURER"],
    children: [
      { label: "Payment Gateway Settings", href: "/settings/payments" },
      { label: "Online Donations", href: "/finance/online-giving" },
    ],
  },
  {
    label: "Sunday School Management", icon: GraduationCap,
    roles: ["SUPER_ADMIN", "BISHOP", "DIOCESE_ADMIN", "PASTOR", "MINISTRY_LEADER"],
    children: [
      { label: "Classes", href: "/sunday-school/classes" },
      { label: "Attendance", href: "/attendance?type=BIBLE_STUDY" },
    ],
  },
  {
    label: "Youth Ministry", icon: Sparkles,
    roles: ["SUPER_ADMIN", "BISHOP", "DIOCESE_ADMIN", "PASTOR", "MINISTRY_LEADER"],
    children: [{ label: "Members", href: "/ministries?type=youth" }, { label: "Events", href: "/events?ministry=youth" }],
  },
  {
    label: "Women's Fellowship", icon: HeartHandshake,
    roles: ["SUPER_ADMIN", "BISHOP", "DIOCESE_ADMIN", "PASTOR", "MINISTRY_LEADER"],
    children: [{ label: "Members", href: "/ministries?type=womens-fellowship" }, { label: "Events", href: "/events?ministry=womens-fellowship" }],
  },
  {
    label: "Men's Fellowship", icon: Users2,
    roles: ["SUPER_ADMIN", "BISHOP", "DIOCESE_ADMIN", "PASTOR", "MINISTRY_LEADER"],
    children: [{ label: "Members", href: "/ministries?type=mens-fellowship" }, { label: "Events", href: "/events?ministry=mens-fellowship" }],
  },
  {
    label: "Choir & Worship Team", icon: Mic2,
    roles: ["SUPER_ADMIN", "BISHOP", "DIOCESE_ADMIN", "PASTOR", "MINISTRY_LEADER"],
    children: [{ label: "Members", href: "/ministries?type=choir" }, { label: "Schedule", href: "/events?ministry=choir" }],
  },
  {
    label: "Prayer Ministry", icon: HandHeart, roles: "all",
    children: [{ label: "Prayer Requests", href: "/prayers" }],
  },
  {
    label: "Event Management", icon: CalendarDays, roles: "all",
    children: [{ label: "All Events", href: "/events" }, { label: "Create Event", href: "/events?new=1" }],
  },
  {
    label: "Volunteer Management", icon: UserCog,
    roles: ["SUPER_ADMIN", "BISHOP", "DIOCESE_ADMIN", "PASTOR", "MINISTRY_LEADER"],
    children: [{ label: "Volunteers", href: "/volunteers" }, { label: "Schedules", href: "/volunteers/schedules" }],
  },
  {
    label: "Communication Module", icon: MessageSquare,
    roles: ["SUPER_ADMIN", "BISHOP", "DIOCESE_ADMIN", "PASTOR", "CHURCH_SECRETARY"],
    children: [
      { label: "Bulk Messaging", href: "/communication/bulk" },
      { label: "Templates", href: "/communication/templates" },
    ],
  },
  {
    label: "Cemetery Management", icon: Cross,
    roles: ["SUPER_ADMIN", "BISHOP", "DIOCESE_ADMIN", "PASTOR", "CHURCH_SECRETARY"],
    children: [{ label: "Grave Plots", href: "/cemetery" }],
  },
  {
    label: "Asset Management", icon: Boxes,
    roles: ["SUPER_ADMIN", "BISHOP", "DIOCESE_ADMIN", "PASTOR", "CHURCH_SECRETARY"],
    children: [{ label: "Assets", href: "/assets" }, { label: "Maintenance Logs", href: "/assets/maintenance" }],
  },
  {
    label: "Facility Booking", icon: CalendarCheck2,
    roles: ["SUPER_ADMIN", "BISHOP", "DIOCESE_ADMIN", "PASTOR", "CHURCH_SECRETARY"],
    children: [{ label: "Booking Calendar", href: "/facilities/bookings" }],
  },
  {
    label: "Human Resource Management", icon: Briefcase,
    roles: ["SUPER_ADMIN", "BISHOP", "DIOCESE_ADMIN"],
    children: [{ label: "Staff Accounts", href: "/settings/users" }],
  },
  {
    label: "Document Management", icon: FolderKanban,
    roles: ["SUPER_ADMIN", "BISHOP", "DIOCESE_ADMIN", "PASTOR", "CHURCH_SECRETARY"],
    children: [{ label: "Document Library", href: "/documents" }],
  },
  {
    label: "Election Management", icon: Vote,
    roles: ["SUPER_ADMIN", "BISHOP", "DIOCESE_ADMIN", "PASTOR"],
    children: [{ label: "Elections", href: "/elections" }],
  },
  {
    label: "Mission & Evangelism", icon: Globe2,
    roles: ["SUPER_ADMIN", "BISHOP", "DIOCESE_ADMIN", "PASTOR", "MINISTRY_LEADER"],
    children: [{ label: "Visitors", href: "/members/visitors" }, { label: "Mission Trips", href: "/missions" }],
  },
  {
    label: "Reports & Analytics", icon: FileBarChart, roles: "all",
    children: [{ label: "Reports", href: "/reports" }],
  },
  {
    label: "Settings", icon: Settings,
    roles: ["SUPER_ADMIN", "BISHOP", "DIOCESE_ADMIN"],
    children: [{ label: "General Settings", href: "/settings" }],
  },
];

export function getVisibleNavItems(role) {
  return NAV_ITEMS.filter((item) => item.roles === "all" || item.roles.includes(role));
}
