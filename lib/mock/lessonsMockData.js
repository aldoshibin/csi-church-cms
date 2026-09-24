export const LESSON_STATUS_OPTIONS = ["Published", "Draft", "Scheduled"];
export const LESSON_CLASS_OPTIONS = ["Beginner (Ages 4-6)", "Primary (Ages 7-9)", "Junior (Ages 10-12)", "Teen (Ages 13-15)", "Youth (Ages 16-18)", "Young Adults (19+)"];
export const LESSON_TOPIC_OPTIONS = ["Creation", "Old Testament", "New Testament", "Miracles of Jesus", "Parables of Jesus", "Christian Living", "Easter"];
export const LESSON_TEACHER_OPTIONS = ["Joyce Wilson", "Daniel Mark", "Grace Wilson", "Samuel Rai", "Linda Scott", "Amit Kumar"];
export const LESSON_TYPE_OPTIONS = ["Bible Study", "Activity", "Craft", "Discussion", "Video"];
export const LESSON_VISIBILITY_OPTIONS = ["Visible to students", "Visible to teachers only", "Hidden"];

export const LESSON_STATUS_VARIANT = {
  Published: "success",
  Draft: "warning",
  Scheduled: "info",
};

const LESSON_ICON_COLORS = ["#16A34A", "#DB2777", "#2563EB", "#EA580C", "#7C3AED", "#0891B2", "#B45309", "#0284C7", "#65A30D", "#DC2626"];

const LESSONS_SEED = [
  { id: "LES-0001", title: "God's Creation", className: "Beginner (Ages 4-6)", topic: "Creation", teacher: "Joyce Wilson", date: "2026-05-18", status: "Published", time: "9:00 AM" },
  { id: "LES-0002", title: "Noah's Ark", className: "Beginner (Ages 4-6)", topic: "Old Testament", teacher: "Joyce Wilson", date: "2026-05-25", status: "Published", time: "9:00 AM" },
  { id: "LES-0003", title: "Jesus Calms the Storm", className: "Primary (Ages 7-9)", topic: "Miracles of Jesus", teacher: "Daniel Mark", date: "2026-05-18", status: "Published", time: "10:00 AM" },
  { id: "LES-0004", title: "The Feeding of 5000", className: "Primary (Ages 7-9)", topic: "Miracles of Jesus", teacher: "Daniel Mark", date: "2026-05-25", status: "Draft", time: "10:00 AM" },
  { id: "LES-0005", title: "The Parable of the Good Samaritan", className: "Junior (Ages 10-12)", topic: "Parables of Jesus", teacher: "Grace Wilson", date: "2026-05-18", status: "Published", time: "11:00 AM" },
  { id: "LES-0006", title: "David and Goliath", className: "Junior (Ages 10-12)", topic: "Old Testament", teacher: "Grace Wilson", date: "2026-05-25", status: "Scheduled", time: "11:00 AM" },
  { id: "LES-0007", title: "The Resurrection", className: "Teen (Ages 13-15)", topic: "Easter", teacher: "Samuel Rai", date: "2026-05-18", status: "Published", time: "12:00 PM" },
  { id: "LES-0008", title: "The Holy Spirit Comes", className: "Teen (Ages 13-15)", topic: "New Testament", teacher: "Samuel Rai", date: "2026-05-25", status: "Draft", time: "12:00 PM" },
  { id: "LES-0009", title: "Living as a Christian", className: "Youth (Ages 16-18)", topic: "Christian Living", teacher: "Linda Scott", date: "2026-05-18", status: "Scheduled", time: "1:00 PM" },
  { id: "LES-0010", title: "Faith in Everyday Life", className: "Young Adults (19+)", topic: "Christian Living", teacher: "Amit Kumar", date: "2026-05-25", status: "Draft", time: "1:00 PM" },
];

/** Pad the seed list out to 128 entries to match "Showing 1 to 10 of 128 lessons". */
export const LESSONS_MOCK = Array.from({ length: 128 }, (_, i) => {
  const seed = LESSONS_SEED[i % LESSONS_SEED.length];
  const color = LESSON_ICON_COLORS[i % LESSON_ICON_COLORS.length];
  if (i < LESSONS_SEED.length) return { ...seed, color };
  return { ...seed, id: `LES-${String(i + 1).padStart(4, "0")}`, color };
});

export const POPULAR_TOPICS_MOCK = [
  { label: "Old Testament", count: 28 },
  { label: "Miracles of Jesus", count: 22 },
  { label: "Parables of Jesus", count: 18 },
  { label: "Christian Living", count: 26 },
  { label: "New Testament", count: 20 },
  { label: "Easter", count: 14 },
];

export const UPCOMING_LESSONS_MOCK = [
  { month: "MAY", day: "18", title: "God's Creation", className: "Beginner (Ages 4-6)", teacher: "Joyce Wilson", time: "9:00 AM" },
  { month: "MAY", day: "18", title: "Jesus Calms the Storm", className: "Primary (Ages 7-9)", teacher: "Daniel Mark", time: "10:00 AM" },
  { month: "MAY", day: "18", title: "The Parable of the Good Samaritan", className: "Junior (Ages 10-12)", teacher: "Grace Wilson", time: "11:00 AM" },
];

export const NEW_LESSON_DEFAULTS = {
  title: "",
  biblePassage: "",
  topic: "",
  memoryVerse: "",
  className: "",
  date: "",
  teacher: "",
  duration: "",
  lessonType: "",
  status: "Draft",
  description: "",
  learningObjectives: [],
  materialsNeeded: [],
  outline: [{ id: 1, label: "Introduction" }],
  visibility: "Visible to students",
  tags: ["Creation", "God", "Bible Study"],
  thumbnailName: "",
};

/** Full lesson detail record shown on the Lesson Details page (matches LES-0001 seed). */
export const LESSON_DETAIL_MOCK = {
  id: "LES-0001",
  title: "God's Creation",
  status: "Published",
  className: "Beginner (Ages 4-6)",
  createdBy: "Joyce Wilson",
  createdByInitials: "JW",
  createdOn: "2026-05-10",
  lastUpdated: "2026-05-18",
  topic: "Creation",
  lessonType: "Bible Study",
  class: "Beginner (Ages 4-6)",
  biblePassage: "Genesis 1:1 – 2:3",
  teacher: "Joyce Wilson",
  memoryVerse: "\u201cIn the beginning God created the heavens and the earth.\u201d — Genesis 1:1",
  date: "2026-05-18",
  mainObjective: "Students will understand that God created the world and everything in it.",
  duration: "45 mins",
  keywords: ["Creation", "God", "World", "+2"],
  status2: "Published",
  tags: ["Nature", "Faith", "Understanding"],
  visibility: "Visible to students",
  description: "This lesson helps children learn about God's amazing creation — the world, animals, plants, and people. Through stories, activities, and discussions, students will discover how God made everything with love and purpose.",
  learningObjectives: [
    "Understand that God created everything.",
    "Identify the different parts of creation.",
    "Develop gratitude towards God for His creation.",
  ],
  materialsNeeded: ["Bible", "Pictures of nature and animals", "Crayons and drawing sheets", "Charts / Flashcards"],
  stats: { totalClasses: 2, studentsEnrolled: 38, assignments: 2, resources: 4, completionRate: 82 },
  relatedLessons: [
    { title: "Noah's Ark", className: "Beginner (Ages 4-6)", icon: "heart", color: "#DB2777" },
    { title: "Jesus Calms the Storm", className: "Primary (Ages 7-9)", icon: "wave", color: "#2563EB" },
    { title: "The Creation of Light", className: "Beginner (Ages 4-6)", icon: "sparkle", color: "#EA580C" },
  ],
};
