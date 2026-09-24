// Mock data for Men's Fellowship > Bible Studies — maps to mens_fellowship/bible_studies/views.py once wired up.

export const STUDY_STATUS_OPTIONS = ["Active", "Upcoming", "Completed"];
export const STUDY_CATEGORY_OPTIONS = ["New Testament", "Old Testament", "Foundational Truths", "Topical"];
export const STUDY_TEACHER_OPTIONS = ["Mr. Peter Jacob", "Mr. David Paul", "Mr. John Samuel", "Mr. Daniel Raj", "Mr. Michael Thomas", "Mr. Sam Clifford"];
export const STUDY_DAY_OPTIONS = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

export const STUDY_STATUS_VARIANT = {
  Active: "success",
  Upcoming: "info",
  Completed: "default",
};

const STUDIES_SEED = [
  { id: "BST-001", title: "Book of James Study", series: "Book of James", topic: "Verse by verse study", teacher: "Mr. Peter Jacob", day: "Saturday", timeRange: "6:00 PM - 7:30 PM", location: "Fellowship Hall", target: 40, participants: 32, status: "Active" },
  { id: "BST-002", title: "Gospel of John Study", series: "Gospel of John", topic: "Walking with Jesus", teacher: "Mr. David Paul", day: "Friday", timeRange: "7:00 PM - 8:30 PM", location: "Room 3", target: 35, participants: 28, status: "Active" },
  { id: "BST-003", title: "Faith Foundations", series: "Foundational Truths", topic: "Basic Christian Teachings", teacher: "Mr. John Samuel", day: "Sunday", timeRange: "7:30 AM - 8:30 AM", location: "Fellowship Hall", target: 30, participants: 25, status: "Active" },
  { id: "BST-004", title: "Psalms Study", series: "Psalms", topic: "Prayers for Everyday Life", teacher: "Mr. Daniel Raj", day: "Wednesday", timeRange: "6:30 PM - 7:30 PM", location: "Prayer Room", target: 30, participants: 22, status: "Active" },
  { id: "BST-005", title: "Living in Grace", series: "Christian Living", topic: "Grace in Daily Living", teacher: "Mr. Michael Thomas", day: "Thursday", timeRange: "7:00 PM - 8:00 PM", location: "Room 2", target: 25, participants: 18, status: "Upcoming" },
  { id: "BST-006", title: "Ephesians Series", series: "Ephesians", topic: "Paul's letter to the Church", teacher: "Mr. Sam Clifford", day: "Tuesday", timeRange: "6:00 PM - 7:15 PM", location: "Fellowship Hall", target: 40, participants: 35, status: "Completed" },
  { id: "BST-007", title: "Proverbs Study", series: "Proverbs", topic: "Wisdom for Life", teacher: "Mr. Peter Jacob", day: "Monday", timeRange: "6:30 PM - 7:30 PM", location: "Room 4", target: 25, participants: 20, status: "Completed" },
  { id: "BST-008", title: "Revelation Study", series: "Revelation", topic: "End Times & Hope", teacher: "Mr. David Paul", day: "Friday", timeRange: "6:30 PM - 8:00 PM", location: "Fellowship Hall", target: 25, participants: 16, status: "Completed" },
];

/** Pad the seed list out to 12 entries to match "Showing 1 to 8 of 12 bible studies". */
export const BIBLE_STUDIES_LIST_MOCK = Array.from({ length: 12 }, (_, i) => {
  const seed = STUDIES_SEED[i % STUDIES_SEED.length];
  if (i < STUDIES_SEED.length) return seed;
  return { ...seed, id: `BST-${String(i + 1).padStart(3, "0")}` };
});

export const STUDY_OVERVIEW_MOCK = {
  breakdown: [
    { label: "Active", count: 8, pct: 66.7, color: "#16A34A" },
    { label: "Upcoming", count: 1, pct: 8.3, color: "#2563EB" },
    { label: "Completed", count: 3, pct: 25.0, color: "#94A3B8" },
  ],
};

export const UPCOMING_SESSIONS_LIST_MOCK = [
  { day: "25", month: "MAY", title: "Book of James Study", meta: "Saturday", location: "Fellowship Hall", timeRange: "6:00 PM - 7:30 PM" },
  { day: "26", month: "MAY", title: "Gospel of John Study", meta: "Friday", location: "Room 3", timeRange: "7:00 PM - 8:30 PM" },
  { day: "29", month: "MAY", title: "Faith Foundations", meta: "Sunday", location: "Fellowship Hall", timeRange: "7:30 AM - 8:30 AM" },
];

// ---------------------------------------------------------------------------
// Bible study detail (Book of James Study)
// ---------------------------------------------------------------------------

export const STUDY_DETAIL_MOCK = {
  id: "BST-001",
  title: "Book of James Study",
  subtitle: "Verse by verse study",
  status: "Active",
  series: "Book of James",
  category: "New Testament",
  teacher: "Mr. Peter Jacob",
  startedOn: "2024-05-04",
  expectedEndDate: "2024-12-21",
  day: "Saturday",
  timeRange: "6:00 PM - 7:30 PM",
  location: "Fellowship Hall",
  target: 40,
  participants: 32,
  createdBy: "Rev. Michael",
  createdOn: "2024-04-20T09:15:00",
  lastUpdated: "2024-05-25T10:30:00",
  description: "A verse by verse study of the Book of James, focusing on practical Christian living and applying God's Word in our daily lives.",
  about: "The Book of James is a practical guide for Christian living. This study helps us understand how to apply biblical principles to our daily challenges and grow in faith through obedience.",
  goals: [
    "To understand the key teachings of the Book of James.",
    "To apply God's Word in our daily lives.",
    "To grow in faith and maturity as believers.",
  ],
  attachments: [
    { name: "James_Study_Guide.pdf", size: "1.2 MB", kind: "pdf" },
    { name: "Study_Schedule.pdf", size: "385 KB", kind: "pdf" },
  ],
  overview: STUDY_OVERVIEW_MOCK,
  upcomingSessions: [
    { day: "25", month: "MAY", title: "Session 9: Faith Without Favoritism", meta: "Saturday", location: "Fellowship Hall", timeRange: "6:00 PM - 7:30 PM" },
    { day: "01", month: "JUN", title: "Session 10: Taming the Tongue", meta: "Saturday", location: "Fellowship Hall", timeRange: "6:00 PM - 7:30 PM" },
    { day: "08", month: "JUN", title: "Session 11: Wisdom from Above", meta: "Saturday", location: "Fellowship Hall", timeRange: "6:00 PM - 7:30 PM" },
  ],
};

export function buildStudyDetailMock(id) {
  if (!id || id === STUDY_DETAIL_MOCK.id) return STUDY_DETAIL_MOCK;
  const fallback = BIBLE_STUDIES_LIST_MOCK.find((s) => s.id === id);
  if (!fallback) return { ...STUDY_DETAIL_MOCK, id };
  return {
    ...STUDY_DETAIL_MOCK,
    id,
    title: fallback.title,
    subtitle: fallback.topic,
    series: fallback.series,
    teacher: fallback.teacher,
    day: fallback.day,
    timeRange: fallback.timeRange,
    location: fallback.location,
    target: fallback.target,
    participants: fallback.participants,
    status: fallback.status,
  };
}
