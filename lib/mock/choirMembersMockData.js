// Mock data for Choir & Worship Team > Choir Members — maps to choir_worship/members/views.py once wired up.

export const CHOIR_VOICE_PART_OPTIONS = ["Soprano", "Alto", "Tenor", "Bass"];
export const CHOIR_ROLE_OPTIONS = ["Choir Member", "Section Leader", "Choir Leader", "Assistant Director"];
export const CHOIR_TEAM_OPTIONS = ["Choir", "Worship Team"];
export const CHOIR_STATUS_OPTIONS = ["Active", "Inactive"];
export const CHOIR_GENDER_OPTIONS = ["Male", "Female", "Other"];
export const CHOIR_MARITAL_STATUS_OPTIONS = ["Single", "Married", "Widowed", "Divorced"];
export const CHOIR_COUNTRY_OPTIONS = ["India", "United States", "United Kingdom", "Other"];
export const CHOIR_RELATIONSHIP_OPTIONS = ["Parent", "Spouse", "Sibling", "Child", "Friend", "Other"];

export const CHOIR_STATUS_VARIANT = { Active: "success", Inactive: "danger" };

const CHOIR_MEMBERS_SEED = [
  { id: "CHM-00024", name: "Sarah Thomas", voicePart: "Soprano", role: "Section Leader", phone: "98765 43211", email: "sarah.t@example.com", status: "Active" },
  { id: "CHM-00025", name: "David Samuel", voicePart: "Alto", role: "Choir Member", phone: "98765 43212", email: "david.s@example.com", status: "Active" },
  { id: "CHM-00026", name: "Grace Mary", voicePart: "Soprano", role: "Choir Member", phone: "98765 43213", email: "grace.m@example.com", status: "Active" },
  { id: "CHM-00027", name: "James Peter", voicePart: "Tenor", role: "Choir Member", phone: "98765 43214", email: "james.p@example.com", status: "Active" },
  { id: "CHM-00028", name: "Linda Joseph", voicePart: "Alto", role: "Choir Member", phone: "98765 43215", email: "linda.j@example.com", status: "Inactive" },
  { id: "CHM-00029", name: "Mark Daniel", voicePart: "Bass", role: "Choir Member", phone: "98765 43216", email: "mark.d@example.com", status: "Active" },
  { id: "CHM-00030", name: "Reena Elizabeth", voicePart: "Soprano", role: "Choir Member", phone: "98765 43217", email: "reena.e@example.com", status: "Active" },
  { id: "CHM-00031", name: "Thomas Jacob", voicePart: "Bass", role: "Section Leader", phone: "98765 43218", email: "thomas.j@example.com", status: "Active" },
];

/** Pad the seed list out to 24 entries to match "Showing 1 to 8 of 24 members". */
export const CHOIR_MEMBERS_MOCK = Array.from({ length: 24 }, (_, i) => {
  const seed = CHOIR_MEMBERS_SEED[i % CHOIR_MEMBERS_SEED.length];
  if (i < CHOIR_MEMBERS_SEED.length) return seed;
  return { ...seed, id: `CHM-${String(24 + i).padStart(5, "0")}` };
});

export const NEW_CHOIR_MEMBER_DEFAULTS = {
  fullName: "",
  dob: "",
  gender: "",
  maritalStatus: "",
  address: "",
  city: "",
  state: "",
  country: "",
  pinCode: "",
  voicePart: "",
  role: "",
  team: "",
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
// Member detail (Sarah Thomas) — shown in the "Member Details" modal
// ---------------------------------------------------------------------------

export const CHOIR_MEMBER_DETAIL_MOCK = {
  id: "CHM-00024",
  name: "Sarah Thomas",
  status: "Active",
  voicePart: "Soprano",
  role: "Section Leader",
  team: "Choir",
  phone: "98765 43211",
  email: "sarah.t@example.com",
  joinedOn: "2023-05-10",
  dob: "1995-03-12",
  gender: "Female",
  maritalStatus: "Single",
  address: "12, Church Street, Nagercoil - 629001, Tamil Nadu, India",
  alternatePhone: "87654 32109",
  emergencyContact: "John Thomas (Brother)",
  emergencyContactPhone: "98765 67890",
  notes: "Leads the soprano section and helps in training new members.",
};

export function buildChoirMemberDetailMock(id) {
  if (!id || id === CHOIR_MEMBER_DETAIL_MOCK.id) return CHOIR_MEMBER_DETAIL_MOCK;
  const fallback = CHOIR_MEMBERS_MOCK.find((m) => m.id === id);
  if (!fallback) return { ...CHOIR_MEMBER_DETAIL_MOCK, id };
  return {
    ...CHOIR_MEMBER_DETAIL_MOCK,
    id,
    name: fallback.name,
    voicePart: fallback.voicePart,
    role: fallback.role,
    phone: fallback.phone,
    email: fallback.email,
    status: fallback.status,
  };
}
