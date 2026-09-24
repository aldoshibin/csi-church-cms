export const VOL_MINISTRY_OPTIONS = ["Youth Ministry", "Youth Fellowship", "Worship Team", "Audio Visual", "Outreach Ministry", "Children Ministry", "Prayer Ministry"];
export const VOL_ROLE_OPTIONS = ["Team Leader", "Coordinator", "Volunteer", "Musician", "Usher", "Greeter", "Technician"];
export const VOL_STATUS_OPTIONS = ["Active", "Inactive"];
export const VOL_GENDER_OPTIONS = ["Male", "Female", "Other"];
export const VOL_MARITAL_STATUS_OPTIONS = ["Single", "Married", "Widowed", "Divorced"];
export const VOL_WEEKLY_AVAILABILITY_OPTIONS = ["Weekdays", "Weekends", "Sunday Only", "Flexible"];

export const VOL_STATUS_VARIANT = {
  Active: "success",
  Inactive: "default",
};

const VOLUNTEERS_SEED = [
  { id: "VOL-001", name: "Sarah Wilson", email: "sarah.wilson@example.com", ministry: "Youth Ministry", role: "Team Leader", status: "Active", phone: "+91 98765 43210", joinedOn: "2025-01-12", initials: "SW" },
  { id: "VOL-002", name: "Daniel Mark", email: "daniel.mark@example.com", ministry: "Youth Fellowship", role: "Coordinator", status: "Active", phone: "+91 91234 56789", joinedOn: "2025-02-05", initials: "DM" },
  { id: "VOL-003", name: "Grace Wilson", email: "grace.wilson@example.com", ministry: "Worship Team", role: "Volunteer", status: "Active", phone: "+91 93456 78901", joinedOn: "2024-12-18", initials: "GW" },
  { id: "VOL-004", name: "Michael Brown", email: "michael.brown@example.com", ministry: "Audio Visual", role: "Volunteer", status: "Active", phone: "+91 90123 45678", joinedOn: "2024-11-22", initials: "MB" },
  { id: "VOL-005", name: "Linda Scott", email: "linda.scott@example.com", ministry: "Outreach Ministry", role: "Volunteer", status: "Inactive", phone: "+91 95555 66777", joinedOn: "2025-01-03", initials: "LS" },
  { id: "VOL-006", name: "Amit Kumar", email: "amit.kumar@example.com", ministry: "Worship Team", role: "Musician", status: "Active", phone: "+91 94444 11223", joinedOn: "2024-10-15", initials: "AK" },
  { id: "VOL-007", name: "Rachel Thomas", email: "rachel.thomas@example.com", ministry: "Children Ministry", role: "Volunteer", status: "Active", phone: "+91 98888 22334", joinedOn: "2025-03-10", initials: "RT" },
  { id: "VOL-008", name: "Sneha James", email: "sneha.james@example.com", ministry: "Prayer Ministry", role: "Coordinator", status: "Active", phone: "+91 97777 33445", joinedOn: "2025-02-28", initials: "SJ" },
];

/** Pad the seed list out to 156 entries to match "Showing 1 to 8 of 156 volunteers". */
export const VOLUNTEERS_MOCK = Array.from({ length: 156 }, (_, i) => {
  const seed = VOLUNTEERS_SEED[i % VOLUNTEERS_SEED.length];
  if (i < VOLUNTEERS_SEED.length) return seed;
  return { ...seed, id: `VOL-${String(i + 1).padStart(3, "0")}` };
});

export const NEW_VOLUNTEER_DEFAULTS = {
  fullName: "",
  dob: "",
  gender: "",
  maritalStatus: "",
  email: "",
  countryCode: "+91",
  phone: "",
  emergencyContactName: "",
  emergencyCountryCode: "+91",
  emergencyContactPhone: "",
  address: "",
  ministryDept: "",
  role: "",
  areasOfService: "",
  serviceStartDate: "",
  weeklyAvailability: "",
  preferredDaysTime: "",
  status: "",
  username: "",
  password: "",
  confirmPassword: "",
  sendWelcomeEmail: false,
  notes: "",
  referredBy: "",
  photoName: "",
};

/** Full volunteer detail record shown on the Volunteer Details page (matches VOL-001 seed). */
export const VOLUNTEER_DETAIL_MOCK = {
  id: "VOL-000156",
  name: "Sarah Wilson",
  initials: "SW",
  status: "Active",
  role: "Team Leader",
  ministry: "Youth Ministry",
  phone: "+91 98765 43210",
  email: "sarah.wilson@example.com",
  joinedOn: "2025-01-12",
  personal: {
    fullName: "Sarah Wilson",
    dob: "1992-05-15",
    gender: "Female",
    phone: "+91 98765 43210",
    email: "sarah.wilson@example.com",
    address: "12, Grace Avenue, Chennai - 600 034, Tamil Nadu, India",
    maritalStatus: "Married",
    emergencyContact: "James Wilson (Husband)",
    emergencyPhone: "+91 91234 56789",
    bloodGroup: "B+",
    memberSince: "2023-01-05",
  },
  ministryInfo: {
    ministryDept: "Youth Ministry",
    role: "Team Leader",
    areasOfService: "Youth Events, Mentorship, Discipleship Programs",
    serviceStartDate: "2025-01-12",
    weeklyAvailability: "Sunday (9:00 AM - 1:00 PM)",
    skills: "Leadership, Communication, Event Planning",
  },
  serviceSummary: {
    totalEventsServed: 18,
    totalHoursContributed: 96,
    lastServiceDate: "2026-05-24",
    nextAssignment: "Youth Worship Night",
    nextAssignmentDate: "2026-05-24",
  },
  recentAssignments: [
    { month: "MAY", day: "24", title: "Youth Worship Night", date: "2026-05-24", time: "6:00 PM - 8:30 PM", venue: "Main Hall", status: "Confirmed" },
    { month: "MAY", day: "31", title: "Bible Study Seminar", date: "2026-05-31", time: "10:00 AM - 1:00 PM", venue: "Conference Room", status: "Confirmed" },
    { month: "JUN", day: "07", title: "Children's Day Celebration", date: "2026-06-07", time: "9:00 AM - 12:00 PM", venue: "Church Grounds", status: "Confirmed" },
  ],
  notes: [],
};
