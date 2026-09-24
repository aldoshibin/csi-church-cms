// Mock data for Prayer Ministry > Intercessors — maps to prayer_ministry/intercessors/views.py once wired up.

export const INTERCESSOR_MINISTRY_OPTIONS = ["Women's Fellowship", "Men's Fellowship", "Youth Ministry", "Senior Saints", "Prayer Group - 1", "Prayer Group - 2"];
export const INTERCESSOR_ROLE_OPTIONS = ["Intercessor", "Lead Intercessor", "Prayer Coordinator"];
export const INTERCESSOR_STATUS_OPTIONS = ["Active", "Inactive"];
export const INTERCESSOR_GENDER_OPTIONS = ["Male", "Female", "Other"];
export const INTERCESSOR_AVAILABILITY_OPTIONS = ["Morning", "Afternoon", "Evening", "Night", "Flexible"];
export const INTERCESSOR_DAY_OPTIONS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
export const INTERCESSOR_PRAYER_AREA_OPTIONS = ["Church Leaders", "Families", "Women & Children", "Youth", "Missions", "Sick & Healing", "Finance", "Evangelism", "Others"];
export const INTERCESSOR_CONTACT_TIME_OPTIONS = ["Anytime", "Morning", "Afternoon", "Evening", "Night"];
export const INTERCESSOR_SORT_OPTIONS = ["Name (A-Z)", "Name (Z-A)", "Recently Joined", "Availability"];

export const INTERCESSOR_STATUS_VARIANT = { Active: "success", Inactive: "default" };
export const INTERCESSOR_MINISTRY_BADGE = {
  "Women's Fellowship": { bg: "bg-[#FCE7F3]", color: "text-[#DB2777]" },
  "Men's Fellowship": { bg: "bg-interactive-50", color: "text-interactive-600" },
  "Youth Ministry": { bg: "bg-warning-50", color: "text-warning-600" },
  "Senior Saints": { bg: "bg-success-50", color: "text-success-600" },
  "Prayer Group - 1": { bg: "bg-[#F3E8FF]", color: "text-[#7C3AED]" },
  "Prayer Group - 2": { bg: "bg-[#F3E8FF]", color: "text-[#7C3AED]" },
};

const INTERCESSORS_SEED = [
  { id: "INT-0001", name: "Mary Grace", ministry: "Women's Fellowship", email: "mary.grace@example.com", phone: "+91 98765 43210", availability: "Morning", availabilityTime: "6:00 AM - 12:00 PM", areas: ["Church Leaders", "Families"], status: "Active" },
  { id: "INT-0002", name: "John Samuel", ministry: "Men's Fellowship", email: "john.samuel@example.com", phone: "+91 91234 56789", availability: "Evening", availabilityTime: "6:00 PM - 10:00 PM", areas: ["Youth", "Missions", "Nation"], status: "Active" },
  { id: "INT-0003", name: "Sophia Daniel", ministry: "Prayer Group - 1", email: "sophia.daniel@example.com", phone: "+91 99887 76655", availability: "Night", availabilityTime: "10:00 PM - 5:00 AM", areas: ["Sick & Healing", "Church"], status: "Active" },
  { id: "INT-0004", name: "Thomas Philip", ministry: "Senior Saints", email: "thomas.philip@example.com", phone: "+91 90012 34567", availability: "Morning", availabilityTime: "5:00 AM - 12:00 PM", areas: ["Church", "Families"], status: "Active" },
  { id: "INT-0005", name: "Anita Joseph", ministry: "Women's Fellowship", email: "anita.joseph@example.com", phone: "+91 95678 12345", availability: "Flexible", availabilityTime: "Anytime", areas: ["Children", "Education"], status: "Active" },
  { id: "INT-0006", name: "Daniel Paul", ministry: "Youth Ministry", email: "daniel.paul@example.com", phone: "+91 97901 23456", availability: "Evening", availabilityTime: "6:00 PM - 9:00 PM", areas: ["Youth", "Protection"], status: "Inactive" },
  { id: "INT-0007", name: "Lydia Benjamin", ministry: "Prayer Group - 2", email: "lydia.benjamin@example.com", phone: "+91 98456 78901", availability: "Morning", availabilityTime: "6:00 AM - 11:00 AM", areas: ["Finance", "Church Projects"], status: "Active" },
  { id: "INT-0008", name: "Samuel David", ministry: "Men's Fellowship", email: "samuel.david@example.com", phone: "+91 96543 21098", availability: "Flexible", availabilityTime: "Anytime", areas: ["Evangelism", "Outreach"], status: "Active" },
];

/** Pad the seed list out to 58 entries to match "Showing 1 to 8 of 58 intercessors". */
export const INTERCESSORS_LIST_MOCK = Array.from({ length: 58 }, (_, i) => {
  const seed = INTERCESSORS_SEED[i % INTERCESSORS_SEED.length];
  if (i < INTERCESSORS_SEED.length) return seed;
  return { ...seed, id: `INT-${String(i + 1).padStart(4, "0")}` };
});

export const PRAYER_COVERAGE_MOCK = {
  total: 24,
  totalLabel: "Areas",
  breakdown: [
    { label: "Church Leaders", count: 5, pct: 21, color: "#2563EB" },
    { label: "Families", count: 5, pct: 21, color: "#DB2777" },
    { label: "Youth", count: 4, pct: 17, color: "#7C3AED" },
    { label: "Missions", count: 3, pct: 13, color: "#16A34A" },
    { label: "Sick & Healing", count: 3, pct: 13, color: "#F97316" },
    { label: "Education", count: 2, pct: 8, color: "#0EA5E9" },
    { label: "Others", count: 2, pct: 8, color: "#94A3B8" },
  ],
};

export const UPCOMING_PRAYER_SCHEDULES_MOCK = [
  { title: "Morning Prayer Watch", date: "2026-05-28", time: "6:00 AM - 7:00 AM" },
  { title: "Evening Intercession", date: "2026-05-28", time: "7:00 PM - 8:00 PM" },
  { title: "Youth Protection Prayer", date: "2026-05-29", time: "6:00 PM - 7:00 PM" },
  { title: "Church & Leaders Prayer", date: "2026-05-30", time: "6:00 AM - 7:00 AM" },
];

export const NEW_INTERCESSOR_DEFAULTS = {
  fullName: "",
  email: "",
  dob: "",
  gender: "",
  phone: "",
  address: "",
  ministry: "",
  role: "Intercessor",
  memberSince: "",
  preferredTimes: ["Morning", "Afternoon", "Evening", "Night"],
  daysAvailable: ["Mon", "Tue", "Wed"],
  availabilityNote: "",
  prayerAreas: ["Church Leaders", "Families"],
  prefersUrgentContact: "Yes",
  prefersAnonymous: "Yes",
  bestTimeToContact: "Anytime",
  comfortableGroupAssignments: "Yes",
  preferenceNotes: "",
  emergencyContactName: "",
  relationship: "",
  emergencyContactNumber: "",
};

// ---------------------------------------------------------------------------
// Intercessor detail (Mary Grace) — shown in the details drawer
// ---------------------------------------------------------------------------

export const INTERCESSOR_DETAIL_MOCK = {
  id: "INT-0001",
  name: "Mary Grace",
  status: "Active",
  ministry: "Women's Fellowship",
  email: "mary.grace@example.com",
  phone: "+91 98765 43210",
  availability: "Morning",
  availabilityTime: "6:00 AM - 12:00 PM",
  assignedAreasPreview: "Church Leaders, Families",
  joinedOn: "2023-01-15",
  about: "Mary is a faithful intercessor who has a passion for praying for church leaders and families. She regularly participates in morning prayer watches and special prayer meetings.",
  role: "Intercessor",
  preferredContact: "Phone",
  assignedAreas: ["Church Leaders", "Families", "Women & Children", "Sick & Healing"],
  preferences: [
    { label: "Prefers to be contacted for urgent prayers", value: "Yes" },
    { label: "Prefers anonymous prayer requests", value: "Yes" },
    { label: "Best time to contact", value: "Anytime" },
    { label: "Comfortable with group assignments", value: "Yes" },
  ],
  notes: "Mary has been very consistent in prayer ministry and also leads the women's intercessory prayer every Tuesday.",
};

export function buildIntercessorDetailMock(id) {
  if (!id || id === INTERCESSOR_DETAIL_MOCK.id) return INTERCESSOR_DETAIL_MOCK;
  const fallback = INTERCESSORS_LIST_MOCK.find((p) => p.id === id);
  if (!fallback) return { ...INTERCESSOR_DETAIL_MOCK, id };
  return {
    ...INTERCESSOR_DETAIL_MOCK,
    id,
    name: fallback.name,
    ministry: fallback.ministry,
    email: fallback.email,
    phone: fallback.phone,
    availability: fallback.availability,
    availabilityTime: fallback.availabilityTime,
    assignedAreasPreview: fallback.areas.join(", "),
    assignedAreas: fallback.areas,
    status: fallback.status,
  };
}
