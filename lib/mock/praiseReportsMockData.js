// Mock data for Prayer Ministry > Praise Reports — maps to prayer_ministry/praise_reports/views.py once wired up.

export const PRAISE_CATEGORY_OPTIONS = ["Health", "Provision", "Guidance", "Family", "Protection", "Answered Prayer", "Others"];
export const PRAISE_STATUS_OPTIONS = ["Published", "Unpublished"];
export const PRAISE_SHARE_WITH_OPTIONS = ["Church Members", "Prayer Team Only", "Leadership Only", "Public"];
export const PRAISE_TYPE_OPTIONS = ["Healing", "Provision", "Guidance", "Protection", "Answered Prayer", "Other"];

export const PRAISE_STATUS_VARIANT = { Published: "success", Unpublished: "default" };
export const PRAISE_CATEGORY_BADGE = {
  Health: { bg: "bg-[#F3E8FF]", color: "text-[#7C3AED]" },
  Provision: { bg: "bg-success-50", color: "text-success-600" },
  Guidance: { bg: "bg-interactive-50", color: "text-interactive-600" },
  Family: { bg: "bg-[#FCE7F3]", color: "text-[#DB2777]" },
  Protection: { bg: "bg-warning-50", color: "text-warning-600" },
  "Answered Prayer": { bg: "bg-interactive-50", color: "text-interactive-600" },
  Others: { bg: "bg-surface-muted", color: "text-ink-subtle" },
};

const PRAISE_REPORTS_SEED = [
  { id: "PR-2026-000156", title: "Healing from surgery", preview: "Thanking God for a successful surgery...", category: "Health", sharedBy: "Melissa Grace", date: "2026-05-25", time: "10:30 AM", status: "Published" },
  { id: "PR-2026-000155", title: "Job Interview Success", preview: "I got selected for the job I prayed for...", category: "Provision", sharedBy: "John Samuel", date: "2026-05-24", time: "08:15 PM", status: "Published" },
  { id: "PR-2026-000154", title: "Peace and guidance", preview: "God guided me through a difficult decision...", category: "Guidance", sharedBy: "Anna Paul", date: "2026-05-24", time: "04:45 PM", status: "Published" },
  { id: "PR-2026-000153", title: "Family reconciliation", preview: "Praise God for healing our family relations...", category: "Family", sharedBy: "Daniel Paul", date: "2026-05-23", time: "11:20 AM", status: "Published" },
  { id: "PR-2026-000152", title: "Financial provision", preview: "God provided when we had no hope...", category: "Provision", sharedBy: "Sophia Daniel", date: "2026-05-22", time: "07:10 PM", status: "Published" },
  { id: "PR-2026-000151", title: "Safe travel", preview: "Thank God for safe travel and protection...", category: "Protection", sharedBy: "Isaac Thomas", date: "2026-05-21", time: "09:00 AM", status: "Published" },
  { id: "PR-2026-000150", title: "Answered Prayer", preview: "God answered my long-time prayer today!", category: "Answered Prayer", sharedBy: "Maria Joseph", date: "2026-05-20", time: "06:35 PM", status: "Published" },
];

/** Pad the seed list out to 156 entries to match "Showing 1 to 7 of 156 reports". */
export const PRAISE_REPORTS_LIST_MOCK = Array.from({ length: 156 }, (_, i) => {
  const seed = PRAISE_REPORTS_SEED[i % PRAISE_REPORTS_SEED.length];
  if (i < PRAISE_REPORTS_SEED.length) return seed;
  return { ...seed, id: `PR-2026-${String(156 - i).padStart(6, "0")}` };
});

export const PRAISE_BY_CATEGORY_MOCK = {
  total: 156,
  breakdown: [
    { label: "Health", count: 42, pct: 27, color: "#7C3AED" },
    { label: "Provision", count: 38, pct: 24, color: "#2563EB" },
    { label: "Family", count: 24, pct: 15, color: "#94A3B8" },
    { label: "Guidance", count: 20, pct: 13, color: "#DC2626" },
    { label: "Protection", count: 18, pct: 11, color: "#F97316" },
    { label: "Others", count: 14, pct: 10, color: "#16A34A" },
  ],
};

export const TOP_PRAISE_CONTRIBUTORS_MOCK = [
  { name: "Melissa Grace", reports: 12 },
  { name: "John Samuel", reports: 9 },
  { name: "Anna Paul", reports: 8 },
  { name: "Daniel Paul", reports: 7 },
  { name: "Sophia Daniel", reports: 7 },
];

export const NEW_PRAISE_REPORT_DEFAULTS = {
  title: "",
  category: "",
  dateOfPraise: "",
  shareWith: "",
  answeredPrayerRelatedTo: "",
  praiseType: "",
  testimony: "",
  scriptureReference: "",
  yourName: "",
  contactNumber: "",
  email: "",
  allowThank: true,
  allowPray: true,
  allowComment: false,
  allowShare: false,
  anonymous: false,
  tags: [],
  photos: [],
  reminderDate: "",
};

// ---------------------------------------------------------------------------
// Praise report detail (Healing from surgery) — shown in the details drawer
// ---------------------------------------------------------------------------

export const PRAISE_REPORT_DETAIL_MOCK = {
  id: "PR-2026-000156",
  title: "Healing from surgery",
  status: "Published",
  category: "Health",
  sharedBy: "Melissa Grace",
  sharedByRole: "Member",
  visibility: "Church Members",
  dateSharedOn: "2026-05-25",
  dateSharedTime: "10:30 AM",
  lastUpdatedOn: "2026-05-25",
  lastUpdatedTime: "10:30 AM",
  description: "Thanking God for a successful surgery. The doctors said everything went well and I am recovering day by day. I appreciate all the prayers from our church family. Truly, God is faithful!",
  scriptureReference: "\u201cGive thanks to the Lord, for he is good; his love endures forever.\u201d",
  scriptureCitation: "Psalm 107:1",
  reactions: { thanked: 42, prayedFor: 18, comments: 7, shared: 12 },
  peopleWhoThankedCount: 42,
  peopleWhoThankedExtra: 37,
  comments: [
    { author: "Sophia Daniel", date: "2026-05-25", time: "11:15 AM", text: "Praise the Lord! So happy to hear this wonderful news. God be praised! \uD83D\uDE4F", likes: 2 },
  ],
};

export function buildPraiseReportDetailMock(id) {
  if (!id || id === PRAISE_REPORT_DETAIL_MOCK.id) return PRAISE_REPORT_DETAIL_MOCK;
  const fallback = PRAISE_REPORTS_LIST_MOCK.find((r) => r.id === id);
  if (!fallback) return { ...PRAISE_REPORT_DETAIL_MOCK, id };
  return {
    ...PRAISE_REPORT_DETAIL_MOCK,
    id,
    title: fallback.title,
    status: fallback.status,
    category: fallback.category,
    sharedBy: fallback.sharedBy,
    dateSharedOn: fallback.date,
    dateSharedTime: fallback.time,
    description: fallback.preview,
  };
}
