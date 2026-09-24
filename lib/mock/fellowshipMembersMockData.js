export const MEM_STATUS_OPTIONS = ["Active", "Inactive"];
export const MEM_GENDER_OPTIONS = ["Male", "Female", "Other"];
export const MEM_MARITAL_STATUS_OPTIONS = ["Single", "Married", "Widowed", "Divorced"];
export const MEM_GROUP_OPTIONS = ["Ruth Fellowship", "Esther Fellowship", "Martha Fellowship", "Dorcas Fellowship", "Mary Fellowship", "Tabitha Fellowship", "Hannah Fellowship", "Deborah Fellowship"];
export const MEM_MINISTRY_FOCUS_OPTIONS = ["Bible Study", "Prayer & Intercession", "Outreach & Service", "Fellowship & Care", "Worship & Praise"];
export const MEM_BLOOD_GROUP_OPTIONS = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];

export const MEM_STATUS_VARIANT = { Active: "success", Inactive: "default" };

const MEMBERS_SEED = [
  { id: "WF-2018-0256", name: "Mrs. Sarah Wilson", age: 42, dob: "1982-04-12", gender: "Female", maritalStatus: "Married", spouseName: "Mr. David Wilson", weddingAnniversary: "June 18", phone: "98765 43210", email: "sarah.wilson@example.com", address: "12, Peace Avenue, Nagercoil, Tamil Nadu - 629001", group: "Ruth Fellowship", groupLeader: "Mrs. Sarah Wilson", coLeader: "Mrs. Anitha Kumar", ministryFocus: "Prayer & Intercession", joinedOn: "2018-05-25", status: "Active" },
  { id: "WF-2019-0187", name: "Mrs. Grace Thomas", age: 38, dob: "1988-02-20", gender: "Female", maritalStatus: "Married", spouseName: "Mr. Thomas Kurian", weddingAnniversary: "Nov 3", phone: "91234 56789", email: "grace.thomas@example.com", address: "45, Lake View Road, Chennai, Tamil Nadu - 600018", group: "Esther Fellowship", groupLeader: "Mrs. Grace Thomas", coLeader: "", ministryFocus: "Bible Study", joinedOn: "2019-01-10", status: "Active" },
  { id: "WF-2020-0098", name: "Mrs. Linda Scott", age: 45, dob: "1981-07-14", gender: "Female", maritalStatus: "Married", spouseName: "Mr. Robert Scott", weddingAnniversary: "Aug 22", phone: "99876 54321", email: "linda.scott@example.com", address: "8, Church Street, Chennai, Tamil Nadu - 600001", group: "Martha Fellowship", groupLeader: "Mrs. Linda Scott", coLeader: "", ministryFocus: "Fellowship & Care", joinedOn: "2020-03-12", status: "Active" },
  { id: "WF-2021-0142", name: "Mrs. Mary Daniel", age: 36, dob: "1990-09-30", gender: "Female", maritalStatus: "Married", spouseName: "Mr. Daniel Paul", weddingAnniversary: "Feb 14", phone: "93456 78901", email: "mary.daniel@example.com", address: "22, Grace Avenue, Chennai, Tamil Nadu - 600034", group: "Dorcas Fellowship", groupLeader: "Mrs. Mary Daniel", coLeader: "", ministryFocus: "Outreach & Service", joinedOn: "2021-07-18", status: "Active" },
  { id: "WF-2017-0072", name: "Mrs. Anitha Kumar", age: 40, dob: "1986-01-05", gender: "Female", maritalStatus: "Married", spouseName: "Mr. Kumar Raj", weddingAnniversary: "May 9", phone: "98987 65432", email: "anitha.kumar@example.com", address: "5, Prayer Hall Road, Chennai, Tamil Nadu - 600018", group: "Mary Fellowship", groupLeader: "Mrs. Anitha Kumar", coLeader: "", ministryFocus: "Prayer & Intercession", joinedOn: "2017-02-05", status: "Active" },
  { id: "WF-2022-0210", name: "Mrs. Rebecca John", age: 33, dob: "1993-06-25", gender: "Female", maritalStatus: "Married", spouseName: "Mr. John Mathew", weddingAnniversary: "Oct 12", phone: "91567 89012", email: "rebecca.john@example.com", address: "17, Room 3 Lane, Chennai, Tamil Nadu - 600020", group: "Tabitha Fellowship", groupLeader: "Mrs. Rebecca John", coLeader: "", ministryFocus: "Fellowship & Care", joinedOn: "2022-09-11", status: "Inactive" },
  { id: "WF-2023-0231", name: "Mrs. Jency Paul", age: 37, dob: "1989-03-17", gender: "Female", maritalStatus: "Married", spouseName: "Mr. Paul George", weddingAnniversary: "Jan 28", phone: "90012 34567", email: "jency.paul@example.com", address: "9, Hope Street, Chennai, Tamil Nadu - 600028", group: "Hannah Fellowship", groupLeader: "Mrs. Jency Paul", coLeader: "", ministryFocus: "Prayer & Intercession", joinedOn: "2023-06-23", status: "Active" },
  { id: "WF-2024-0248", name: "Mrs. Shiney David", age: 29, dob: "1997-11-02", gender: "Female", maritalStatus: "Single", spouseName: "", weddingAnniversary: "", phone: "95678 90123", email: "shiney.david@example.com", address: "31, New Colony, Chennai, Tamil Nadu - 600041", group: "Deborah Fellowship", groupLeader: "Mrs. Shiney David", coLeader: "", ministryFocus: "Outreach & Service", joinedOn: "2024-01-15", status: "Active" },
];

/** Pad the seed list out to 256 entries to match "Showing 1 to 8 of 256 members". */
export const MEMBERS_MOCK = Array.from({ length: 256 }, (_, i) => {
  const seed = MEMBERS_SEED[i % MEMBERS_SEED.length];
  if (i < MEMBERS_SEED.length) return seed;
  return { ...seed, id: `WF-${String(2017 + (i % 8))}-${String(1000 + i)}` };
});

export const MEMBERS_STATS_MOCK = {
  totalMembers: { value: 256, delta: "7.8%", trendUp: true },
  activeMembers: { value: 220, delta: "6.5%", trendUp: true },
  newThisMonth: { value: 12, delta: "20%", trendUp: true },
  inactiveMembers: { value: 36, delta: "10%", trendUp: false },
  birthdaysThisMonth: { value: 18, sub: "View upcoming birthdays" },
};

export const MEMBERS_BY_GENDER_MOCK = {
  total: 256,
  breakdown: [
    { label: "Male", count: 32, pct: 12.5, color: "#16A34A" },
    { label: "Female", count: 224, pct: 87.5, color: "#7C3AED" },
  ],
};

export const UPCOMING_BIRTHDAYS_MOCK = [
  { month: "MAY", day: "28", name: "Mrs. Linda Scott", date: "May 28", group: "Martha Fellowship", daysAway: 2 },
  { month: "JUN", day: "02", name: "Mrs. Mary Daniel", date: "June 2", group: "Dorcas Fellowship", daysAway: 7 },
  { month: "JUN", day: "07", name: "Mrs. Anitha Kumar", date: "June 7", group: "Mary Fellowship", daysAway: 12 },
  { month: "JUN", day: "15", name: "Mrs. Grace Thomas", date: "June 15", group: "Esther Fellowship", daysAway: 20 },
];

export const NEW_MEMBER_DEFAULTS = {
  fullName: "",
  dob: "",
  age: "",
  gender: "",
  maritalStatus: "",
  spouseName: "",
  phone: "",
  email: "",
  alternatePhone: "",
  address: "",
  dateOfJoining: "",
  fellowshipGroup: "",
  memberStatus: "",
  ministryFocus: "",
  referredBy: "",
  occupation: "",
  education: "",
  bloodGroup: "",
  notes: "",
  assignedGroups: [],
  primaryGroup: "",
};

/** Full member detail record shown in the Member Details modal (matches WF-2018-0256 seed). */
export const MEMBER_DETAIL_MOCK = {
  ...MEMBERS_SEED[0],
  quickSummary: { meetingsAttended: 48, activities: 32, bibleStudies: 18, documents: 7 },
  recentActivity: [
    { title: "Attended Ruth Fellowship Meeting", date: "2026-05-19", time: "4:00 PM", location: "Fellowship Hall" },
    { title: "Participated in Prayer & Intercession", date: "2026-05-12", time: "6:00 PM", location: "Fellowship Hall" },
    { title: "Joined Ruth Fellowship", date: "2018-05-25", time: "", location: "Fellowship Hall" },
  ],
};

/** Fallback detail fields merged onto any member row when opening the modal, so every row has something to show. */
export const MEMBER_DETAIL_DEFAULTS = {
  quickSummary: { meetingsAttended: 12, activities: 8, bibleStudies: 5, documents: 2 },
  recentActivity: [
    { title: "Attended Fellowship Meeting", date: "2026-05-18", time: "4:00 PM", location: "Fellowship Hall" },
    { title: "Joined Fellowship Group", date: "2020-01-01", time: "", location: "Fellowship Hall" },
  ],
};
