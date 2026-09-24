// Mock data for Choir & Worship Team > Worship Team Members — maps to choir_worship/worship_members/views.py once wired up.

export const WT_TEAM_OPTIONS = ["Vocalists", "Instrumentalists", "Sound & Tech", "Others"];
export const WT_ROLE_OPTIONS = ["Worship Leader", "Backup Vocalist", "Keyboardist", "Guitarist", "Drummer", "Bassist", "Sound Engineer", "Media Operator"];
export const WT_INSTRUMENT_OPTIONS = ["Vocals", "Vocals, Guitar", "Keyboard", "Electric Guitar", "Acoustic Guitar", "Bass Guitar", "Drums", "Sound Mixing", "ProPresenter", "Other"];
export const WT_STATUS_OPTIONS = ["Active", "Inactive"];
export const WT_GENDER_OPTIONS = ["Male", "Female", "Other"];
export const WT_MARITAL_STATUS_OPTIONS = ["Single", "Married", "Widowed", "Divorced"];
export const WT_COUNTRY_OPTIONS = ["India", "United States", "United Kingdom", "Other"];
export const WT_RELATIONSHIP_OPTIONS = ["Parent", "Spouse", "Sibling", "Child", "Friend", "Other"];

export const WT_STATUS_VARIANT = { Active: "success", Inactive: "danger" };

const WT_MEMBERS_SEED = [
  { id: "WTM-00003", name: "Daniel Paul", role: "Worship Leader", team: "Vocalists", instrument: "Vocals, Guitar", phone: "98765 43101", email: "daniel.p@example.com", status: "Active" },
  { id: "WTM-00004", name: "Melissa Grace", role: "Backup Vocalist", team: "Vocalists", instrument: "Vocals", phone: "98765 43102", email: "melissa.g@example.com", status: "Active" },
  { id: "WTM-00005", name: "John Samuel", role: "Keyboardist", team: "Instrumentalists", instrument: "Keyboard", phone: "98765 43103", email: "john.s@example.com", status: "Active" },
  { id: "WTM-00006", name: "Peter Joshua", role: "Guitarist", team: "Instrumentalists", instrument: "Electric Guitar", phone: "98765 43104", email: "peter.j@example.com", status: "Active" },
  { id: "WTM-00007", name: "Gloria Thomas", role: "Drummer", team: "Instrumentalists", instrument: "Drums", phone: "98765 43105", email: "gloria.t@example.com", status: "Active" },
  { id: "WTM-00008", name: "Stephen Raj", role: "Sound Engineer", team: "Sound & Tech", instrument: "Sound Mixing", phone: "98765 43106", email: "stephen.r@example.com", status: "Active" },
  { id: "WTM-00009", name: "Joshua Daniel", role: "Media Operator", team: "Sound & Tech", instrument: "ProPresenter", phone: "98765 43107", email: "joshua.d@example.com", status: "Inactive" },
  { id: "WTM-00010", name: "Anna Rebekah", role: "Backup Vocalist", team: "Vocalists", instrument: "Vocals", phone: "98765 43108", email: "anna.r@example.com", status: "Active" },
];

/** Pad the seed list out to 18 entries to match "Showing 1 to 8 of 18 members". */
export const WT_MEMBERS_MOCK = Array.from({ length: 18 }, (_, i) => {
  const seed = WT_MEMBERS_SEED[i % WT_MEMBERS_SEED.length];
  if (i < WT_MEMBERS_SEED.length) return seed;
  return { ...seed, id: `WTM-${String(3 + WT_MEMBERS_SEED.length + i).padStart(5, "0")}` };
});

export const WT_UPCOMING_REHEARSALS_MOCK = [
  { day: "25", month: "MAY", title: "Vocal Team Rehearsal", meta: "Saturday", time: "5:00 PM - 6:30 PM", location: "Worship Room" },
  { day: "26", month: "MAY", title: "Band Practice", meta: "Sunday", time: "4:00 PM - 5:30 PM", location: "Main Hall" },
  { day: "28", month: "MAY", title: "Full Team Rehearsal", meta: "Tuesday", time: "6:00 PM - 8:00 PM", location: "Main Hall" },
];

export const WT_UPCOMING_SERVICES_MOCK = [
  { day: "25", month: "MAY", title: "Sunday Morning Service", meta: "Sunday", time: "9:00 AM", location: "Main Sanctuary", team: "Worship Team" },
  { day: "25", month: "MAY", title: "Evening Worship", meta: "Sunday", time: "6:00 PM", location: "Main Hall", team: "Worship Team" },
  { day: "29", month: "MAY", title: "Midweek Service", meta: "Wednesday", time: "6:30 PM", location: "Main Sanctuary", team: "Worship Team" },
];

export const NEW_WT_MEMBER_DEFAULTS = {
  fullName: "",
  dob: "",
  gender: "",
  maritalStatus: "",
  address: "",
  city: "",
  state: "",
  country: "",
  pinCode: "",
  role: "",
  team: "",
  instrument: "",
  joinedDate: "",
  status: "Active",
  phone: "",
  alternatePhone: "",
  email: "",
  emergencyContact: "",
  relationship: "",
  notes: "",
  photoName: "",
};

// ---------------------------------------------------------------------------
// Member detail (Daniel Paul) — shown in the "Member Details" modal
// ---------------------------------------------------------------------------

export const WT_MEMBER_DETAIL_MOCK = {
  id: "WTM-00003",
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

export function buildWtMemberDetailMock(id) {
  if (!id || id === WT_MEMBER_DETAIL_MOCK.id) return WT_MEMBER_DETAIL_MOCK;
  const fallback = WT_MEMBERS_MOCK.find((m) => m.id === id);
  if (!fallback) return { ...WT_MEMBER_DETAIL_MOCK, id };
  return {
    ...WT_MEMBER_DETAIL_MOCK,
    id,
    name: fallback.name,
    role: fallback.role,
    team: fallback.team,
    instrument: fallback.instrument,
    phone: fallback.phone,
    email: fallback.email,
    status: fallback.status,
  };
}
