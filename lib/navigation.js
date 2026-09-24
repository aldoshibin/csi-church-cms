import {
  LayoutDashboard, Building2, Users, BookHeart, Home, Wallet, CreditCard,
  GraduationCap, Sparkles, HeartHandshake, Users2, Mic2, HandHeart,
  CalendarDays, UserCog, MessageSquare, Cross, Boxes, CalendarCheck2,
  Briefcase, FolderKanban, Vote, Globe2, FileBarChart, Settings,
} from "lucide-react";
import { MdHome } from "react-icons/md";
import { FaCalendarAlt } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { FaCross } from "react-icons/fa6";
import { FaPeopleRoof } from "react-icons/fa6";
import { FaIndianRupeeSign } from "react-icons/fa6";
import { FaRegCreditCard } from "react-icons/fa6";
import { FaSchool } from "react-icons/fa6";
import { FaChild } from "react-icons/fa";

export const NAV_ITEMS = [
  { label: "Dashboard", href: "/dashboard", icon: MdHome, roles: "all" },
  {
    label: "Parish Administration", icon: FaCalendarAlt,
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
    label: "Member Management", icon: FaUsers,
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
    label: "Sacramental Records", icon: FaCross,
    roles: ["SUPER_ADMIN", "BISHOP", "DIOCESE_ADMIN", "PASTOR", "CHURCH_SECRETARY"],
    children: [
      { label: "Sacramental Records", href: "/sacraments" },
      { label: "Baptism Register", href: "/sacraments/baptism" },
      { label: "Confirmation Register", href: "/sacraments/confirmation" },
      { label: "Holy Communion Register", href: "/sacraments/holy-communion" },
      { label: "Marriage Register", href: "/sacraments/marriage" },
      { label: "Funeral Register", href: "/sacraments/funeral" },
      { label: "Membership Certificate", href: "/sacraments/membership-certificate" },
      { label: "Transfer Certificate", href: "/sacraments/transfer-certificate" },
      { label: "Baptism Certificate", href: "/sacraments/baptism-certificate" },
      { label: "Marriage Certificate", href: "/sacraments/marriage-certificate" },
      { label: "Confirmation Certificate", href: "/sacraments/confirmation-certificate" },
    ],
  },

  {
    label: "Family Management", icon: FaPeopleRoof,
    roles: ["SUPER_ADMIN", "BISHOP", "DIOCESE_ADMIN", "PASTOR", "CHURCH_SECRETARY"],
    children: [
      { label: "Family Overview", href: "/families" },
      { label: "Add New Family", href: "/families/add" },
      { label: "Family Directory", href: "/families/directory" },
      { label: "Family Members", href: "/families/members" },
      { label: "Family Events", href: "/families/events" },
      { label: "Reports", href: "/families/reports" },
    ],
  },
  {
    label: "Finance & Accounting", icon: FaIndianRupeeSign,
    roles: ["SUPER_ADMIN", "BISHOP", "DIOCESE_ADMIN", "PASTOR", "TREASURER"],
    // children: [
    //   { label: "Dashboard", href: "/finance/dashboard" },
    //   { label: "Chart of Accounts", href: "/finance/expenses" },
    //   { label: "Income", href: "/finance/budgets" },
    // ],
     children: [
      { label: "Dashboard", href: "/finance" },
      { label: "Chart of Accounts", href: "/finance/chart-of-accounts" },
      { label: "Income", href: "/finance/income" },
      { label: "Expenses", href: "/finance/expenses" },
      { label: "Bank Accounts", href: "/finance/bank-accounts" },
      { label: "Journal Entries", href: "/finance/journal-entries" },
      { label: "Transfers", href: "/finance/transfers" },
      { label: "Budgets", href: "/finance/budgets" },
      { label: "Financial Reports", href: "/finance/reports" },
      { label: "Audit Logs", href: "/finance/audit-logs" },
    ],
  },
  {
    label: "Online Giving & Payments", icon: FaRegCreditCard,
    roles: ["SUPER_ADMIN", "BISHOP", "DIOCESE_ADMIN", "PASTOR", "TREASURER"],
    children: [
      { label: "Dashboard", href: "/online-giving" },
      { label: "Donations", href: "/online-giving/donations" },
      { label: "Payment Links", href: "/online-giving/payment-links" },
      { label: "Recurring Donations", href: "/online-giving/recurring-donations" },
      { label: "Pledges", href: "/online-giving/pledges" },
      { label: "Refunds", href: "/online-giving/refunds" },
      { label: "Settings", href: "/online-giving/settings" },
    ],
  },
  {
    label: "Sunday School Management", icon: FaSchool,
    roles: ["SUPER_ADMIN", "BISHOP", "DIOCESE_ADMIN", "PASTOR", "MINISTRY_LEADER"],
    children: [
      { label: "Dashboard", href: "/sunday-school" },
      { label: "Classes", href: "/sunday-school/classes" },
      { label: "Students", href: "/sunday-school/students" },
      { label: "Teachers", href: "/sunday-school/teachers" },
      { label: "Attendance", href: "/sunday-school/attendance" },
      { label: "Lessons", href: "/sunday-school/lessons" },
      { label: "Events", href: "/sunday-school/events" },
      { label: "Reports", href: "/sunday-school/reports" },
    ],
  },
 {
     label: "Youth Ministry", icon: FaChild,
     roles: ["SUPER_ADMIN", "BISHOP", "DIOCESE_ADMIN", "PASTOR", "MINISTRY_LEADER"],
     children: [
       { label: "Dashboard", href: "/youth-ministry" },
       { label: "Youth Groups", href: "/youth-ministry/youth-groups" },
       { label: "Events", href: "/youth-ministry/events" },
       { label: "Attendance", href: "/youth-ministry/attendance" },
       { label: "Volunteers", href: "/youth-ministry/volunteers" },
       { label: "Lessons", href: "/youth-ministry/lessons" },
       { label: "Reports", href: "/youth-ministry/reports" },
     ],
   },
  {
      label: "Women's Fellowship", icon: HeartHandshake,
      roles: ["SUPER_ADMIN", "BISHOP", "DIOCESE_ADMIN", "PASTOR", "MINISTRY_LEADER"],
      children: [
        { label: "Dashboard", href: "/womens-fellowship" },
        { label: "Fellowship Groups", href: "/womens-fellowship/fellowship-groups" },
        { label: "Members", href: "/womens-fellowship/members" },
        { label: "Events", href: "/womens-fellowship/events" },
        { label: "Activities", href: "/womens-fellowship/activities" },
        { label: "Bible Studies", href: "/womens-fellowship/bible-studies" },
        { label: "Meeting Attendance", href: "/womens-fellowship/meeting-attendance" },
        { label: "Reports", href: "/womens-fellowship/reports" },
      ],
    },
  {
      label: "Men's Fellowship", icon: Users2,
      roles: ["SUPER_ADMIN", "BISHOP", "DIOCESE_ADMIN", "PASTOR", "MINISTRY_LEADER"],
      children: [
        { label: "Dashboard", href: "/mens-fellowship" },
        { label: "Fellowship Groups", href: "/mens-fellowship/fellowship-groups" },
        { label: "Members", href: "/mens-fellowship/members" },
        { label: "Meetings", href: "/mens-fellowship/meetings" },
        { label: "Activities", href: "/mens-fellowship/activities" },
        { label: "Bible Studies", href: "/mens-fellowship/bible-studies" },
        { label: "Meeting Attendance", href: "/mens-fellowship/attendance" },
        { label: "Reports", href: "/mens-fellowship/reports" },
      ],
    },
  {
    label: "Choir & Worship Team", icon: Mic2,
    roles: ["SUPER_ADMIN", "BISHOP", "DIOCESE_ADMIN", "PASTOR", "MINISTRY_LEADER"],
    children: [
      { label: "Dashboard", href: "/choir-worship" },
      { label: "Choir Members", href: "/choir-worship/choir-members" },
      { label: "Worship Team Members", href: "/choir-worship/worship-team-members" },
      { label: "Practice Schedule", href: "/choir-worship/practice-schedule" },
      { label: "Rehearsals", href: "/choir-worship/rehearsals" },
      { label: "Services", href: "/choir-worship/services" },
      { label: "Songs & Setlist", href: "/choir-worship/songs-setlist" },
      { label: "Reports", href: "/choir-worship/reports" },
    ],
  },
  // {
  //   label: "Prayer Ministry", icon: HandHeart, roles: "all",
  //   children: [
  //     { label: "Dashboard", href: "/prayer-ministry/dashboard" },
  //     { label: "Prayer Requests", href: "/prayer-ministry/prayer-requests" },
  //     { label: "Praise Reports", href: "/prayer-ministry/praise-reports" },
  //     { label: "Prayer Groups", href: "/prayer-ministry/prayer-groups" },
  //     { label: "Intercessors", href: "/prayer-ministry/intercessors" },
  //     { label: "Prayer Calendar", href: "/prayer-ministry/prayer-calendar" },
  //     { label: "Bulletin Requests", href: "/prayer-ministry/bulletin-requests" },
  //   ],
  // },
  {
    label: "Event Management", icon: CalendarDays, roles: "all",
    children: [{ label: "All Events", href: "/events" }, { label: "Create Event", href: "/events?new=1" }],
  },
//  {
//     label: "Volunteer Management", icon: UserCog,
//     roles: ["SUPER_ADMIN", "BISHOP", "DIOCESE_ADMIN", "PASTOR", "MINISTRY_LEADER"],
//     children: [
//       { label: "Dashboard", href: "/volunteer-management/dashboard" },
//       { label: "Volunteers", href: "/volunteer-management/volunteers" },
//       { label: "Ministries & Teams", href: "/volunteer-management/ministries-teams" },
//       { label: "Service Assignments", href: "/volunteer-management/service-assignments" },
//       { label: "Availability", href: "/volunteer-management/availability" },
//       { label: "Attendance", href: "/volunteer-management/attendance" },
//       { label: "Reports", href: "/volunteer-management/reports" },
//     ],
//   },
  // {
  //   label: "Communication Module", icon: MessageSquare,
  //   roles: ["SUPER_ADMIN", "BISHOP", "DIOCESE_ADMIN", "PASTOR", "CHURCH_SECRETARY"],
  //   children: [
  //     { label: "Overview", href: "/communication-module" },
  //     { label: "Announcements", href: "/communication-module/announcements" },
  //     { label: "Messages", href: "/communication-module/messages" },
  //     { label: "Email Campaigns", href: "/communication-module/email-campaigns" },
  //     { label: "SMS Campaigns", href: "/communication-module/sms-campaigns" },
  //     { label: "Templates", href: "/communication-module/templates" },
  //   ],
  // },
  // {
  //   label: "Cemetery Management", icon: Cross,
  //   roles: ["SUPER_ADMIN", "BISHOP", "DIOCESE_ADMIN", "PASTOR", "CHURCH_SECRETARY"],
  //   children: [
  //     { label: "Overview", href: "/cemetery-management" },
  //     { label: "Burial Records", href: "/cemetery-management/burial-records" },
  //     { label: "Plots Management", href: "/cemetery-management/plots-management" },
  //     { label: "Plot Map", href: "/cemetery-management/plot-map" },
  //     { label: "Deceased Management", href: "/cemetery-management/deceased-management" },
  //     { label: "Documents", href: "/cemetery-management/documents" },
  //     { label: "Reports", href: "/cemetery-management/reports" },
  //   ],
  // },
  // {
  //   label: "Asset Management", icon: Boxes,
  //   roles: ["SUPER_ADMIN", "BISHOP", "DIOCESE_ADMIN", "PASTOR", "CHURCH_SECRETARY"],
  //   children: [{ label: "Assets", href: "/assets" }, { label: "Maintenance Logs", href: "/assets/maintenance" }],
  // },
  {
    label: "Facility Booking", icon: CalendarCheck2,
    roles: ["SUPER_ADMIN", "BISHOP", "DIOCESE_ADMIN", "PASTOR", "CHURCH_SECRETARY"],
    children: [
      { label: "Overview", href: "/facility-booking" },
      { label: "Bookings Calendar", href: "/facility-booking/bookings-calendar" },
      { label: "All Bookings", href: "/facility-booking/all-bookings" },
      { label: "Add Booking", href: "/facility-booking/add-booking" },
      { label: "Facilities", href: "/facility-booking/facilities" },
      { label: "Booking Requests", href: "/facility-booking/booking-requests" },
      { label: "Reports", href: "/facility-booking/reports" },
    ],
  },
  
  // {
  //   label: "Human Resource Management", icon: Briefcase,
  //   roles: ["SUPER_ADMIN", "BISHOP", "DIOCESE_ADMIN"],
  //   children: [{ label: "Staff Accounts", href: "/settings/users" }],
  // },
  {
    label: "Document Management", icon: FolderKanban,
    roles: ["SUPER_ADMIN", "BISHOP", "DIOCESE_ADMIN", "PASTOR", "CHURCH_SECRETARY"],
    children: [
      { label: "Dashboard", href: "/document-management/dashboard" },
      { label: "All Documents", href: "/document-management/all-documents" },
      { label: "My Documents", href: "/document-management/my-documents" },
      { label: "Shared Documents", href: "/document-management/shared-documents" },
      { label: "Folders", href: "/document-management/folders" },
      { label: "Recent Documents", href: "/document-management/recent-documents" },
      { label: "Starred Documents", href: "/document-management/starred-documents" },
      { label: "Trash", href: "/document-management/trash" },
      { label: "Document Categories", href: "/document-management/document-categories" },
      { label: "Document Reports", href: "/document-management/document-reports" },
    ],
  },
  // {
  //   label: "Election Management", icon: Vote,
  //   roles: ["SUPER_ADMIN", "BISHOP", "DIOCESE_ADMIN", "PASTOR"],
  //   children: [
  //     { label: "Dashboard", href: "/election-management/dashboard" },
  //     { label: "Elections", href: "/election-management/elections" },
  //     { label: "Positions", href: "/election-management/positions" },
  //     { label: "Candidates", href: "/election-management/candidates" },
  //     { label: "Voters", href: "/election-management/voters" },
  //     { label: "Nomination", href: "/election-management/nomination" },
  //     { label: "Voting", href: "/election-management/voting" },
  //     { label: "Results", href: "/election-management/results" },
  //     { label: "Reports", href: "/election-management/reports" },
  //   ],
  // },
  // {
  //   label: "Mission & Evangelism", icon: Globe2,
  //   roles: ["SUPER_ADMIN", "BISHOP", "DIOCESE_ADMIN", "PASTOR", "MINISTRY_LEADER"],
  //   children: [
  //     { label: "Overview", href: "/mission-evangelism/overview" },
  //     { label: "Outreach Programs", href: "/mission-evangelism/outreach-programs" },
  //     { label: "Mission Trips", href: "/mission-evangelism/mission-trips" },
  //     { label: "Donations", href: "/mission-evangelism/donations" },
  //     { label: "Reports", href: "/mission-evangelism/reports" },
  //   ],
  // },
  // {
  //   label: "Reports & Analytics", icon: FileBarChart, roles: "all",
  //   children: [{ label: "Reports", href: "/reports" }],
  // },
  // {
  //   label: "Settings", icon: Settings,
  //   roles: ["SUPER_ADMIN", "BISHOP", "DIOCESE_ADMIN", "PASTOR", "MINISTRY_LEADER"],
  //   children: [{ label: "General Settings", href: "/settings" }],
  // },
];

export function getVisibleNavItems(role) {
  return NAV_ITEMS.filter((item) => item.roles === "all" || item.roles.includes(role));
}
