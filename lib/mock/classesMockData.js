export const CLASS_STATUS_OPTIONS = ["Active", "Inactive"];
export const CLASS_AGE_GROUP_OPTIONS = ["3 - 5 yrs", "6 - 8 yrs", "9 - 12 yrs", "13 - 16 yrs", "17+ yrs", "All Ages"];
export const CLASS_GRADE_LEVEL_OPTIONS = ["Pre-School", "Grade 1 - 3", "Grade 4 - 6", "Grade 7 - 10", "Grade 11 - Above", "Mixed"];
export const CLASS_TYPE_OPTIONS = ["Sunday School", "Bible Study", "Confirmation Class", "Special Needs"];
export const CLASS_TEACHER_OPTIONS = ["Sarah Thomas", "Jonathan David", "Grace Mathew", "Michael Joseph", "Linda Scott", "Amit Kumar", "James Daniel"];
export const CLASS_ROOM_OPTIONS = ["Room 101", "Room 102", "Room 103", "Room 104", "Room 105", "Nursery Room", "Conference Room"];
export const CLASS_DAY_OPTIONS = ["Sunday", "Saturday", "Wednesday", "Friday"];
export const CLASS_RECURRENCE_OPTIONS = ["Weekly", "Bi-Weekly", "Monthly"];

export const CLASS_STATUS_VARIANT = {
  Active: "success",
  Inactive: "danger",
};

export const CLASSES_STATS_MOCK = {
  totalClasses: { value: 18, delta: "2", trendUp: true },
  totalStudents: { value: 248, delta: "12", trendUp: true },
  totalTeachers: { value: 26, delta: "3", trendUp: true },
  activeClasses: { value: 16, sub: "88.9% of total" },
  inactiveClasses: { value: 2, sub: "11.1% of total" },
};

const CLASSES_SEED = [
  { id: "CLS-001", name: "Primary Class", ageGroup: "6 - 8 yrs", ageGroupBadge: "Primary (6-8 yrs)", gradeLevel: "Grade 1 - 3", teacher: "Sarah Thomas", students: 32, day: "Sun", time: "09:00 AM - 10:00 AM", room: "Room 101", status: "Active", color: "#7C3AED" },
  { id: "CLS-002", name: "Junior Class", ageGroup: "9 - 12 yrs", ageGroupBadge: "Junior (9-12 yrs)", gradeLevel: "Grade 4 - 6", teacher: "Jonathan David", students: 27, day: "Sun", time: "09:00 AM - 10:00 AM", room: "Room 102", status: "Active", color: "#2563EB" },
  { id: "CLS-003", name: "Teen Class", ageGroup: "13 - 16 yrs", ageGroupBadge: "Teen (13-16 yrs)", gradeLevel: "Grade 7 - 10", teacher: "Grace Mathew", students: 21, day: "Sun", time: "10:15 AM - 11:15 AM", room: "Room 103", status: "Active", color: "#F97316" },
  { id: "CLS-004", name: "Youth Class", ageGroup: "17+ yrs", ageGroupBadge: "Youth (17+ yrs)", gradeLevel: "Grade 11 - Above", teacher: "Michael Joseph", students: 20, day: "Sun", time: "10:15 AM - 11:15 AM", room: "Room 104", status: "Active", color: "#DB2777" },
  { id: "CLS-005", name: "Nursery Class", ageGroup: "3 - 5 yrs", ageGroupBadge: "Nursery (3-5 yrs)", gradeLevel: "Pre-School", teacher: "Linda Scott", students: 18, day: "Sun", time: "09:00 AM - 10:00 AM", room: "Nursery Room", status: "Active", color: "#16A34A" },
  { id: "CLS-006", name: "Special Class", ageGroup: "All Ages", ageGroupBadge: "All Ages", gradeLevel: "Mixed", teacher: "Amit Kumar", students: 8, day: "Sun", time: "11:30 AM - 12:30 PM", room: "Room 105", status: "Inactive", color: "#64748B" },
  { id: "CLS-007", name: "New Believers Class", ageGroup: "All Ages", ageGroupBadge: "All Ages", gradeLevel: "Mixed", teacher: "James Daniel", students: 15, day: "Sun", time: "11:30 AM - 12:30 PM", room: "Conference Room", status: "Active", color: "#64748B" },
];

/** Pad the seed list out to 18 entries to match "Showing 1 to 7 of 18 classes". */
export const CLASSES_MOCK = Array.from({ length: 18 }, (_, i) => {
  const seed = CLASSES_SEED[i % CLASSES_SEED.length];
  if (i < CLASSES_SEED.length) return seed;
  return { ...seed, id: `CLS-${String(i + 1).padStart(3, "0")}` };
});

export const CLASS_OVERVIEW_MOCK = {
  total: 156,
  breakdown: [
    { label: "Primary Class", count: 32, pct: 22.2, color: "#7C3AED" },
    { label: "Junior Class", count: 27, pct: 18.8, color: "#2563EB" },
    { label: "Teen Class", count: 21, pct: 14.6, color: "#F97316" },
    { label: "Youth Class", count: 20, pct: 13.9, color: "#DB2777" },
    { label: "Nursery Class", count: 18, pct: 12.5, color: "#16A34A" },
    { label: "Others", count: 40, pct: 27.8, color: "#94A3B8" },
  ],
};

export const UPCOMING_CLASS_SCHEDULES_MOCK = [
  { month: "MAY", day: "25", className: "Primary Class", time: "09:00 AM - 10:00 AM", room: "Room 101", ageGroupBadge: "Primary (6-8 yrs)", color: "#7C3AED" },
  { month: "MAY", day: "25", className: "Junior Class", time: "09:00 AM - 10:00 AM", room: "Room 102", ageGroupBadge: "Junior (9-12 yrs)", color: "#2563EB" },
  { month: "MAY", day: "25", className: "Teen Class", time: "10:15 AM - 11:15 AM", room: "Room 103", ageGroupBadge: "Teen (13-16 yrs)", color: "#F97316" },
  { month: "MAY", day: "25", className: "Youth Class", time: "10:15 AM - 11:15 AM", room: "Room 104", ageGroupBadge: "Youth (17+ yrs)", color: "#DB2777" },
  { month: "MAY", day: "25", className: "Nursery Class", time: "09:00 AM - 10:00 AM", room: "Nursery Room", ageGroupBadge: "Nursery (3-5 yrs)", color: "#16A34A" },
];

export const NEW_CLASS_DEFAULTS = {
  className: "",
  ageGroup: "",
  gradeLevel: "",
  classType: "",
  description: "",
  status: "Active",
  classTeacher: "",
  assistantTeacher: "",
  room: "",
  maxCapacity: "",
  day: "",
  startTime: "",
  endTime: "",
  recurrence: "Weekly",
  effectiveFrom: "",
};
