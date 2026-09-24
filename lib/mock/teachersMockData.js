export const TEACHER_STATUS_OPTIONS = ["Active", "Inactive"];
export const TEACHER_QUALIFICATION_OPTIONS = ["High School", "Bachelor's Degree", "Master's Degree", "Theology Diploma", "Doctorate"];
export const TEACHER_EMPLOYMENT_TYPE_OPTIONS = ["Volunteer", "Part-Time", "Full-Time"];
export const TEACHER_MARITAL_STATUS_OPTIONS = ["Single", "Married", "Widowed", "Divorced"];
export const TEACHER_STATE_OPTIONS = ["Tamil Nadu", "Kerala", "Karnataka", "Andhra Pradesh", "Telangana"];
export const TEACHER_CLASS_OPTIONS = ["Primary Class", "Junior Class", "Teen Class", "Youth Class", "Nursery Class", "Special Class"];

export const TEACHER_STATUS_VARIANT = {
  Active: "success",
  Inactive: "danger",
};

const TEACHERS_SEED = [
  { id: "TCH-001", name: "Daniel Mark", gender: "Male", phone: "98765 43210", email: "daniel.mark@stjohnschurch.org", classesAssigned: 3, status: "Active" },
  { id: "TCH-002", name: "Grace Thomas", gender: "Female", phone: "87654 32109", email: "grace.thomas@stjohnschurch.org", classesAssigned: 2, status: "Active" },
  { id: "TCH-003", name: "Samuel Rai", gender: "Male", phone: "98765 67890", email: "samuel.rai@stjohnschurch.org", classesAssigned: 2, status: "Active" },
  { id: "TCH-004", name: "Joyce Wilson", gender: "Female", phone: "91234 56789", email: "joyce.wilson@stjohnschurch.org", classesAssigned: 3, status: "Active" },
  { id: "TCH-005", name: "James Peter", gender: "Male", phone: "99876 54321", email: "james.peter@stjohnschurch.org", classesAssigned: 1, status: "Active" },
  { id: "TCH-006", name: "Rebekah Paul", gender: "Female", phone: "88776 65544", email: "rebekah.paul@stjohnschurch.org", classesAssigned: 2, status: "Inactive" },
  { id: "TCH-007", name: "Linda Scott", gender: "Female", phone: "77665 44332", email: "linda.scott@stjohnschurch.org", classesAssigned: 1, status: "Active" },
  { id: "TCH-008", name: "Amit Kumar", gender: "Male", phone: "66554 33221", email: "amit.kumar@stjohnschurch.org", classesAssigned: 2, status: "Active" },
];

/** Pad the seed list out to 26 entries to match "Showing 1 to 8 of 26 teachers". */
export const TEACHERS_MOCK = Array.from({ length: 26 }, (_, i) => {
  const seed = TEACHERS_SEED[i % TEACHERS_SEED.length];
  if (i < TEACHERS_SEED.length) return seed;
  return { ...seed, id: `TCH-${String(i + 1).padStart(3, "0")}` };
});

export const TEACHERS_BY_GENDER_MOCK = {
  total: 26,
  breakdown: [
    { label: "Male", count: 10, pct: 38.5, color: "#7C3AED" },
    { label: "Female", count: 16, pct: 61.5, color: "#16A34A" },
  ],
};

export const CLASSES_BY_TEACHER_MOCK = [
  { name: "Daniel Mark", classes: 3, initials: "DM" },
  { name: "Joyce Wilson", classes: 3, initials: "JW" },
  { name: "Grace Thomas", classes: 2, initials: "GT" },
  { name: "Samuel Rai", classes: 2, initials: "SR" },
  { name: "Rebekah Paul", classes: 2, initials: "RP" },
];

export const EXPERIENCE_SUMMARY_MOCK = [
  { label: "0 - 2 years", count: 6, pct: 23.1 },
  { label: "3 - 5 years", count: 8, pct: 30.8 },
  { label: "6 - 10 years", count: 7, pct: 26.9 },
  { label: "10+ years", count: 5, pct: 19.2 },
];

export const NEW_TEACHER_DEFAULTS = {
  firstName: "",
  middleName: "",
  lastName: "",
  gender: "Male",
  dob: "",
  maritalStatus: "",
  phone: "",
  email: "",
  alternatePhone: "",
  address: "",
  city: "",
  state: "",
  pinCode: "",
  qualification: "",
  specialization: "",
  yearsOfExperience: "",
  previousOrganization: "",
  employmentType: "",
  dateOfJoining: "",
  username: "",
  password: "",
  confirmPassword: "",
  classesToTeach: [],
  notes: "",
  photoName: "",
};
