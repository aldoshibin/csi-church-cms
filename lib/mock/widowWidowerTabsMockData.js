/**
 * Mock data for the Upcoming Milestones, Support & Assistance, and
 * Follow-up & Notes tabs on the Widow/Widower Registry page. No
 * Milestone/SupportRecord/FollowUpNote model exists anywhere in this
 * codebase — same situation as seniorTabsMockData.js. The "Add
 * Milestone"/"Add Support"/"Add Note" actions are real API calls (see
 * services/widowWidowerService.js) against best-guess endpoints; only
 * the lists shown here are static mock data.
 */
export const WW_UPCOMING_MILESTONES_MOCK = [
  {
    id: "wm1",
    month: "JUN",
    day: "15",
    title: "Spouse Memorial Prayer",
    description: "Mrs. Leela Daniel • Family prayer at Main Church",
  },
  {
    id: "wm2",
    month: "JUN",
    day: "28",
    title: "Pastoral Visit",
    description: "Mr. John Varghese • Home visit scheduled",
  },
];

export const WW_SUPPORT_ASSISTANCE_MOCK = [
  {
    id: "ws1",
    icon: "heart",
    title: "Monthly Care Support",
    description: "Track assistance and welfare support for registered members.",
    actionLabel: "Add Support",
  },
  {
    id: "ws2",
    icon: "shieldPlus",
    title: "Health Assistance",
    description: "Maintain medical, visit and emergency assistance notes.",
    actionLabel: "Update",
  },
  {
    id: "ws3",
    icon: "users",
    title: "Volunteer Help",
    description: "Assign volunteers for visits, transport and daily needs.",
    actionLabel: "Assign",
  },
];

export const WW_FOLLOW_UP_NOTES_MOCK = [
  {
    id: "wn1",
    type: "CALL",
    title: "Follow-up call completed for Mrs. Leela Daniel",
    description: "Prayer support and monthly visit confirmed by Women's Fellowship.",
    timestamp: "24 May 2025 • 10:45 AM",
  },
  {
    id: "wn2",
    type: "MESSAGE",
    title: "Support reminder sent to Mr. John Varghese",
    description: "Care team reminded about scheduled support visit.",
    timestamp: "22 May 2025 • 04:15 PM",
  },
  {
    id: "wn3",
    type: "NOTE",
    title: "Assistance note added for Mrs. Annie George",
    description: "Transport requested for Sunday service.",
    timestamp: "19 May 2025 • 09:30 AM",
  },
];
