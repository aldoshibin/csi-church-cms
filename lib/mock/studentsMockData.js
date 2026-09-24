export const STUDENT_STATUS_OPTIONS = ["Active", "Inactive"];
export const STUDENT_CLASS_OPTIONS = ["Primary Class", "Junior Class", "Teen Class", "Youth Class", "Nursery Class", "Special Class"];
export const STUDENT_AGE_GROUP_OPTIONS = ["3 - 5 yrs", "6 - 8 yrs", "9 - 12 yrs", "13 - 16 yrs", "17+ yrs", "All Ages"];
export const STUDENT_GRADE_LEVEL_OPTIONS = ["Pre-School", "Grade 1 - 3", "Grade 4 - 6", "Grade 7 - 10", "Grade 11 - Above", "Mixed"];
export const STUDENT_BLOOD_GROUP_OPTIONS = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];
export const STUDENT_STATE_OPTIONS = ["Tamil Nadu", "Kerala", "Karnataka", "Andhra Pradesh", "Telangana"];
export const STUDENT_RELATIONSHIP_OPTIONS = ["Father", "Mother", "Guardian", "Grandparent", "Other"];

export const STUDENT_STATUS_VARIANT = {
  Active: "success",
  Inactive: "danger",
};

export const STUDENT_CLASS_BADGE = {
  "Primary Class": { bg: "bg-[#F3E8FF]", color: "text-[#7C3AED]" },
  "Junior Class": { bg: "bg-interactive-50", color: "text-interactive-600" },
  "Teen Class": { bg: "bg-warning-50", color: "text-warning-600" },
  "Youth Class": { bg: "bg-[#FCE7F3]", color: "text-[#DB2777]" },
  "Nursery Class": { bg: "bg-success-50", color: "text-success-600" },
  "Special Class": { bg: "bg-surface-muted", color: "text-ink-subtle" },
};

export const STUDENTS_STATS_MOCK = {
  totalStudents: { value: 248, delta: "12.4%", trendUp: true },
  boys: { value: 128, delta: "8.7%", trendUp: true },
  girls: { value: 120, delta: "16.3%", trendUp: true },
  newStudents: { value: 18, delta: "5.6%", trendUp: true },
  graduatedPromoted: { value: 12, delta: "9.1%", trendUp: true },
};

const STUDENTS_SEED = [
  { id: "STU-0001", name: "John David", gender: "Male", age: 10, dob: "2015-01-15", className: "Primary Class", guardian: "Daniel Mark", phone: "98765 43210", status: "Active" },
  { id: "STU-0002", name: "Sarah Grace", gender: "Female", age: 9, dob: "2016-03-22", className: "Junior Class", guardian: "Grace Thomas", phone: "87654 32109", status: "Active" },
  { id: "STU-0003", name: "Matthew Samuel", gender: "Male", age: 13, dob: "2012-11-08", className: "Teen Class", guardian: "Samuel Raj", phone: "98765 67890", status: "Active" },
  { id: "STU-0004", name: "Elizabeth Joy", gender: "Female", age: 11, dob: "2014-02-03", className: "Youth Class", guardian: "Joyce Wilson", phone: "91234 56789", status: "Active" },
  { id: "STU-0005", name: "Nathan James", gender: "Male", age: 5, dob: "2019-07-19", className: "Nursery Class", guardian: "James Peter", phone: "99876 54321", status: "Active" },
  { id: "STU-0006", name: "Hannah Rebekah", gender: "Female", age: 7, dob: "2018-04-27", className: "Primary Class", guardian: "Rebekah Paul", phone: "88776 65544", status: "Inactive" },
  { id: "STU-0007", name: "Ethan Joshua", gender: "Male", age: 8, dob: "2017-12-12", className: "Junior Class", guardian: "Joshua Daniel", phone: "77665 44332", status: "Active" },
  { id: "STU-0008", name: "Anna Mariam", gender: "Female", age: 14, dob: "2011-06-05", className: "Teen Class", guardian: "Mariam Shaji", phone: "66554 33221", status: "Active" },
];

/** Pad the seed list out to 248 entries to match "Showing 1 to 8 of 248 students". */
export const STUDENTS_MOCK = Array.from({ length: 248 }, (_, i) => {
  const seed = STUDENTS_SEED[i % STUDENTS_SEED.length];
  if (i < STUDENTS_SEED.length) return seed;
  return { ...seed, id: `STU-${String(i + 1).padStart(4, "0")}` };
});

export const STUDENTS_BY_CLASS_MOCK = {
  total: 248,
  breakdown: [
    { label: "Primary Class", count: 62, pct: 25.0, color: "#7C3AED" },
    { label: "Junior Class", count: 58, pct: 23.4, color: "#2563EB" },
    { label: "Teen Class", count: 47, pct: 18.9, color: "#F97316" },
    { label: "Youth Class", count: 41, pct: 16.5, color: "#DB2777" },
    { label: "Nursery Class", count: 24, pct: 9.7, color: "#16A34A" },
    { label: "Special Class", count: 16, pct: 6.5, color: "#94A3B8" },
  ],
};

export const AGE_GROUP_SUMMARY_MOCK = [
  { label: "3 – 5 yrs", count: 24, pct: 9.7 },
  { label: "6 – 8 yrs", count: 62, pct: 25.0 },
  { label: "9 – 12 yrs", count: 96, pct: 38.7 },
  { label: "13 – 17 yrs", count: 66, pct: 26.6 },
];

export const RECENT_REGISTRATIONS_MOCK = [
  { name: "Noah Philip", className: "Primary Class", date: "2025-04-27", initials: "NP" },
  { name: "Jemima Rose", className: "Junior Class", date: "2025-04-26", initials: "JR" },
  { name: "Aaron John", className: "Nursery Class", date: "2025-04-25", initials: "AJ" },
  { name: "Blessy M.", className: "Youth Class", date: "2025-04-24", initials: "BM" },
  { name: "Samuel K.", className: "Teen Class", date: "2025-04-23", initials: "SK" },
];

export const NEW_STUDENT_DEFAULTS = {
  firstName: "",
  middleName: "",
  lastName: "",
  gender: "Male",
  dob: "",
  bloodGroup: "",
  phone: "",
  email: "",
  address: "",
  city: "",
  state: "",
  pinCode: "",
  guardianName: "",
  relationship: "",
  guardianPhone: "",
  guardianEmail: "",
  className: "",
  ageGroup: "",
  gradeLevel: "",
  dateOfJoining: "",
  referredBy: "",
  notes: "",
  photoName: "",
};
