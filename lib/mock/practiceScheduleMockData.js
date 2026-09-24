// Mock data for Choir & Worship Team > Practice Schedule — maps to choir_worship/practice_schedule/views.py once wired up.

export const PS_TEAM_OPTIONS = ["Vocalists", "Instrumentalists", "Sound & Tech", "Others"];
export const PS_INSTRUMENT_OPTIONS = ["Vocals", "Vocals, Guitar", "Keyboard", "Electric Guitar", "Drums", "Sound Mixing", "ProPresenter"];
export const PS_DAY_OPTIONS = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
export const PS_STATUS_VARIANT = { Active: "success", Inactive: "danger" };

export const PRACTICE_TYPE_OPTIONS = ["Vocal Practice", "Band Practice", "Full Team Practice", "Technical Run", "Sectional Practice"];
export const REPEAT_OPTIONS = ["Does not repeat", "Daily", "Weekly", "Bi-weekly", "Monthly"];

const PS_MEMBERS_SEED = [
  { id: "WTM-00001", name: "Daniel Paul", role: "Worship Leader", team: "Vocalists", instrument: "Vocals, Guitar", phone: "98765 43101", nextPractice: "2026-05-27", nextPracticeDay: "Tue", nextPracticeTime: "6:00 PM", status: "Active" },
  { id: "WTM-00002", name: "Melissa Grace", role: "Backup Vocalist", team: "Vocalists", instrument: "Vocals", phone: "98765 43102", nextPractice: "2026-05-27", nextPracticeDay: "Tue", nextPracticeTime: "6:00 PM", status: "Active" },
  { id: "WTM-00003", name: "John Samuel", role: "Keyboardist", team: "Instrumentalists", instrument: "Keyboard", phone: "98765 43103", nextPractice: "2026-05-28", nextPracticeDay: "Wed", nextPracticeTime: "7:00 PM", status: "Active" },
  { id: "WTM-00004", name: "Peter Joshua", role: "Guitarist", team: "Instrumentalists", instrument: "Electric Guitar", phone: "98765 43104", nextPractice: "2026-05-27", nextPracticeDay: "Tue", nextPracticeTime: "6:00 PM", status: "Active" },
  { id: "WTM-00005", name: "Gloria Thomas", role: "Drummer", team: "Instrumentalists", instrument: "Drums", phone: "98765 43105", nextPractice: "2026-05-29", nextPracticeDay: "Thu", nextPracticeTime: "6:30 PM", status: "Active" },
  { id: "WTM-00006", name: "Stephen Raj", role: "Sound Engineer", team: "Sound & Tech", instrument: "Sound Mixing", phone: "98765 43106", nextPractice: "2026-05-29", nextPracticeDay: "Thu", nextPracticeTime: "7:00 PM", status: "Active" },
  { id: "WTM-00007", name: "Joshua Daniel", role: "Media Operator", team: "Sound & Tech", instrument: "ProPresenter", phone: "98765 43107", nextPractice: "2026-05-30", nextPracticeDay: "Fri", nextPracticeTime: "6:00 PM", status: "Inactive" },
  { id: "WTM-00008", name: "Anna Rebekah", role: "Backup Vocalist", team: "Vocalists", instrument: "Vocals", phone: "98765 43108", nextPractice: "2026-06-01", nextPracticeDay: "Mon", nextPracticeTime: "6:00 PM", status: "Active" },
];

/** Pad the seed list out to 28 entries to match "Showing 1 to 8 of 28 members". */
export const PS_MEMBERS_MOCK = Array.from({ length: 28 }, (_, i) => {
  const seed = PS_MEMBERS_SEED[i % PS_MEMBERS_SEED.length];
  if (i < PS_MEMBERS_SEED.length) return seed;
  return { ...seed, id: `WTM-${String(9 + i).padStart(5, "0")}` };
});

export const PS_UPCOMING_PRACTICES_MOCK = [
  { day: "27", month: "MAY", title: "Vocal Team Practice", meta: "Tuesday", time: "6:00 PM - 7:30 PM", location: "Worship Room" },
  { day: "28", month: "MAY", title: "Band Practice", meta: "Wednesday", time: "7:00 PM - 8:30 PM", location: "Main Hall" },
  { day: "29", month: "MAY", title: "Full Team Practice", meta: "Thursday", time: "6:30 PM - 8:00 PM", location: "Main Hall" },
  { day: "30", month: "MAY", title: "Technical Run", meta: "Friday", time: "6:00 PM - 7:30 PM", location: "Worship Room" },
];

export const PS_TEAM_SUMMARY_MOCK = {
  total: 28,
  breakdown: [
    { label: "Vocalists", count: 12, pct: 42.9, color: "#16A34A" },
    { label: "Instrumentalists", count: 9, pct: 32.1, color: "#7C3AED" },
    { label: "Sound & Tech", count: 5, pct: 17.9, color: "#F97316" },
    { label: "Others", count: 2, pct: 7.1, color: "#2563EB" },
  ],
};

export const PS_TEAM_MEMBERS_SIDEBAR_MOCK = [
  { name: "Daniel Paul", role: "Worship Leader", status: "Active" },
  { name: "Melissa Grace", role: "Backup Vocalist", status: "Active" },
  { name: "John Samuel", role: "Keyboardist", status: "Active" },
  { name: "Gloria Thomas", role: "Drummer", status: "Active" },
  { name: "Stephen Raj", role: "Sound Engineer", status: "Active" },
];

/** The 5 members pre-checked by default in the "Assign Members" panel on the Add to Schedule form. */
export const PS_DEFAULT_ASSIGNED_MEMBER_IDS = ["WTM-00001", "WTM-00002", "WTM-00003", "WTM-00005", "WTM-00006"];

export const NEW_PRACTICE_SCHEDULE_DEFAULTS = {
  title: "",
  practiceType: "",
  team: "",
  date: "",
  startTime: "",
  endTime: "",
  allDay: false,
  repeat: "Does not repeat",
  repeatUntil: "",
  location: "",
  notes: "",
  assignedMemberIds: [...PS_DEFAULT_ASSIGNED_MEMBER_IDS],
};

// ---------------------------------------------------------------------------
// Member detail (Daniel Paul) — shown in the "Member Details" modal
// ---------------------------------------------------------------------------

export const PS_MEMBER_DETAIL_MOCK = {
  id: "WTM-00001",
  name: "Daniel Paul",
  status: "Active",
  role: "Worship Leader",
  team: "Vocalists",
  instrument: "Vocals, Guitar",
  phone: "98765 43101",
  email: "daniel.p@example.com",
  joinedOn: "2023-01-15",
  dob: "1992-08-18",
  gender: "Male",
  maritalStatus: "Married",
  address: "25, Faith Street, Nagercoil - 629001, Tamil Nadu, India",
  alternatePhone: "87654 32109",
  emergencyContact: "Paul George (Brother)",
  emergencyContactPhone: "98765 67890",
  notes: "Leads worship and coordinates vocal team.",
  previousExperience: "5 years in worship ministry",
  availableDays: "Sunday, Tuesday, Thursday",
  lastUpdatedOn: "2026-05-20",
  lastUpdatedBy: "Parish Office",
};

export function buildPsMemberDetailMock(id) {
  if (!id || id === PS_MEMBER_DETAIL_MOCK.id) return PS_MEMBER_DETAIL_MOCK;
  const fallback = PS_MEMBERS_MOCK.find((m) => m.id === id);
  if (!fallback) return { ...PS_MEMBER_DETAIL_MOCK, id };
  return {
    ...PS_MEMBER_DETAIL_MOCK,
    id,
    name: fallback.name,
    role: fallback.role,
    team: fallback.team,
    instrument: fallback.instrument,
    phone: fallback.phone,
    status: fallback.status,
  };
}
