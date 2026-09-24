export const LSN_STATUS_OPTIONS = ["Published", "Draft", "Scheduled"];
export const LSN_CATEGORY_OPTIONS = ["Bible Stories", "Faith & Life", "Christian Living", "Prayer", "Discipleship", "Worship"];
export const LSN_TARGET_GROUP_OPTIONS = ["Children (6-12)", "Youth (13-18)", "Young Adults (19-25)", "All Ages"];
export const LSN_BIBLE_BOOK_OPTIONS = ["Genesis", "Exodus", "Psalms", "Proverbs", "Matthew", "John", "Romans", "1 Corinthians", "Philippians", "James"];
export const LSN_LANGUAGE_OPTIONS = ["English", "Tamil", "Hindi"];
export const LSN_LEVEL_OPTIONS = ["Beginner", "Intermediate", "Advanced"];
export const LSN_DURATION_OPTIONS = ["30 minutes", "45 minutes", "1 Hour", "1.5 Hours", "2 Hours"];
export const LSN_RECURRENCE_OPTIONS = ["Weekly", "Bi-Weekly", "Monthly", "One-Time"];
export const LSN_LOCATION_OPTIONS = ["Sunday School Room 1", "Sunday School Room 2", "Main Hall", "Conference Room", "Youth Room"];
export const LSN_TEACHER_OPTIONS = ["Rev. Michael", "Sarah Wilson", "Daniel Mark", "Linda Scott", "Amit Kumar", "Sneha James"];
export const LSN_WEEKLY_AVAILABILITY_OPTIONS = ["Weekdays", "Weekends", "Sunday Only", "Flexible"];

export const LSN_STATUS_VARIANT = {
  Published: "success",
  Draft: "warning",
  Scheduled: "info",
};

const LSN_ICON_COLORS = ["#7C3AED", "#16A34A", "#DB2777", "#2563EB", "#F59E0B", "#EA580C", "#0891B2", "#65A30D"];

const LESSONS_SEED = [
  { id: "LES-00048", title: "God's Love Never Fails", bibleRef: "John 3:16", category: "Faith & Life", targetGroup: "Youth (13-18)", date: "2026-05-25", time: "9:00 AM - 10:00 AM", status: "Published", createdBy: "Rev. Michael" },
  { id: "LES-00047", title: "The Good Shepherd", bibleRef: "John 10:11-16", category: "Bible Stories", targetGroup: "Children (6-12)", date: "2026-05-18", time: "9:00 AM - 10:00 AM", status: "Published", createdBy: "Sarah Wilson" },
  { id: "LES-00046", title: "Walking in Faith", bibleRef: "2 Corinthians 5:7", category: "Christian Living", targetGroup: "Youth (13-18)", date: "2026-05-11", time: "9:00 AM - 10:00 AM", status: "Published", createdBy: "Daniel Mark" },
  { id: "LES-00045", title: "David and Goliath", bibleRef: "1 Samuel 17:1-50", category: "Bible Stories", targetGroup: "Children (6-12)", date: "2026-05-04", time: "9:00 AM - 10:00 AM", status: "Published", createdBy: "Linda Scott" },
  { id: "LES-00044", title: "The Power of Prayer", bibleRef: "Philippians 4:6-7", category: "Prayer", targetGroup: "Youth (13-18)", date: "2026-04-27", time: "9:00 AM - 10:00 AM", status: "Draft", createdBy: "Michael Brown" },
  { id: "LES-00043", title: "Esther's Courage", bibleRef: "Esther 4:13-16", category: "Bible Stories", targetGroup: "Children (6-12)", date: "2026-04-20", time: "9:00 AM - 10:00 AM", status: "Draft", createdBy: "Grace Wilson" },
  { id: "LES-00042", title: "Light of the World", bibleRef: "Matthew 5:14-16", category: "Faith & Life", targetGroup: "Youth (13-18)", date: "2026-06-01", time: "9:00 AM - 10:00 AM", status: "Scheduled", createdBy: "Amit Kumar" },
  { id: "LES-00041", title: "Creation and Care", bibleRef: "Genesis 1:26-31", category: "Christian Living", targetGroup: "Children (6-12)", date: "2026-06-08", time: "9:00 AM - 10:00 AM", status: "Scheduled", createdBy: "Sneha James" },
];

/** Pad the seed list out to 48 entries to match "Showing 1 to 8 of 48 lessons". */
export const LESSONS_MOCK = Array.from({ length: 48 }, (_, i) => {
  const seed = LESSONS_SEED[i % LESSONS_SEED.length];
  const color = LSN_ICON_COLORS[i % LSN_ICON_COLORS.length];
  if (i < LESSONS_SEED.length) return { ...seed, color };
  return { ...seed, id: `LES-${String(48 - i).padStart(5, "0")}`, color };
});

export const LESSONS_STATS_MOCK = {
  totalLessons: { value: 48, delta: "12.5%", trendUp: true },
  publishedLessons: { value: 36, delta: "10.3%", trendUp: true },
  draftLessons: { value: 8, delta: "5.2%", trendUp: false },
  upcomingLessons: { value: 7, delta: "18.8%", trendUp: true },
};

export const UPCOMING_LESSONS_MOCK = [
  { month: "MAY", day: "25", title: "God's Love Never Fails", time: "9:00 AM - 10:00 AM", targetGroup: "Youth (13-18)", status: "Published" },
  { month: "JUN", day: "01", title: "Light of the World", time: "9:00 AM - 10:00 AM", targetGroup: "Youth (13-18)", status: "Scheduled" },
  { month: "JUN", day: "08", title: "Creation and Care", time: "9:00 AM - 10:00 AM", targetGroup: "Children (6-12)", status: "Scheduled" },
  { month: "JUN", day: "15", title: "Fruit of the Spirit", time: "9:00 AM - 10:00 AM", targetGroup: "Youth (13-18)", status: "Scheduled" },
];

export const LESSONS_BY_CATEGORY_MOCK = {
  breakdown: [
    { label: "Bible Stories", count: 18, pct: 37.5, color: "#16A34A" },
    { label: "Faith & Life", count: 12, pct: 25.0, color: "#7C3AED" },
    { label: "Christian Living", count: 8, pct: 16.7, color: "#F59E0B" },
    { label: "Prayer", count: 4, pct: 8.3, color: "#06B6D4" },
    { label: "Others", count: 6, pct: 12.5, color: "#94A3B8" },
  ],
};

export const NEW_LESSON_DEFAULTS = {
  title: "",
  category: "",
  targetGroup: "",
  bibleBook: "",
  bibleChapterVerse: "",
  mainTheme: "",
  keyVerse: "",
  subThemes: "",
  tags: "",
  language: "",
  level: "",
  duration: "",
  classSize: "",
  description: "",
  learningObjectives: ["", "", "", "", ""],
  lessonDate: "",
  startTime: "",
  endTime: "",
  recurrence: "",
  locationRoom: "",
  teacherLeader: "",
  weeklyAvailability: "",
  preferredDaysTime: "",
  materialsFileNames: [],
  additionalNotes: "",
};

/** Full lesson detail record shown on the Lesson Details page (matches LES-00048 seed). */
export const LESSON_DETAIL_MOCK = {
  id: "LES-00048",
  title: "God's Love Never Fails",
  status: "Published",
  category: "Faith & Life",
  targetGroup: "Youth (13-18)",
  bibleRef: "John 3:16",
  date: "2026-05-25",
  time: "9:00 AM - 10:00 AM",
  createdBy: "Rev. Michael",
  createdOn: "2026-05-20",
  lastUpdated: "2026-05-20",
  lastUpdatedBy: "Rev. Michael",
  mainTheme: "God's unconditional love for us",
  keyVerse: "John 3:16",
  subThemes: "Salvation, Grace, Faith, Eternal Life",
  tags: "love, salvation, faith, grace",
  language: "English",
  classSize: "25-35 Students",
  duration: "1 Hour",
  level: "Intermediate",
  summary: "This lesson teaches students about God's amazing love as shown in John 3:16. It helps students understand that God sent His only Son so that we may have eternal life through faith in Him. Students will learn how this verse applies to their daily lives and how they can share God's love with others.",
  learningObjectives: [
    "Understand the meaning of John 3:16.",
    "Recognize God's love and grace.",
    "Understand the concept of eternal life.",
    "Apply God's love in daily life.",
    "Share the message of God's love with others.",
  ],
  schedule: {
    lessonDate: "2026-05-25",
    startTime: "9:00 AM",
    endTime: "10:00 AM",
    recurrence: "Weekly",
    nextOccurrence: "2026-06-01",
    locationRoom: "Sunday School Room 1",
    teacherLeader: "Rev. Michael",
  },
  materials: [
    { name: "Lesson Outline - God's Love Never Fails.pdf", size: "1.2 MB", type: "pdf" },
    { name: "John 3-16 Scripture Handout.pdf", size: "245 KB", type: "pdf" },
    { name: "Activity Worksheet.docx", size: "320 KB", type: "docx" },
    { name: "Presentation Slides.pptx", size: "2.4 MB", type: "pptx" },
  ],
};
