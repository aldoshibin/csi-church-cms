// Mock data for Prayer Ministry > Bulletin Requests — maps to prayer_ministry/bulletin_requests/views.py once wired up.

export const BULLETIN_REQUEST_TYPE_OPTIONS = ["Announcement", "Event", "Reminder", "Request"];
export const BULLETIN_STATUS_OPTIONS = ["Pending", "Approved", "Rejected"];
export const BULLETIN_PRIORITY_OPTIONS = ["Low", "Normal", "High", "Urgent"];
export const BULLETIN_AUDIENCE_OPTIONS = ["All Church Members", "Leaders Only", "Specific Ministry"];
export const BULLETIN_LANGUAGE_OPTIONS = ["English", "Hindi", "Tamil", "Telugu"];

export const BULLETIN_STATUS_VARIANT = { Approved: "success", Pending: "warning", Rejected: "danger" };
export const BULLETIN_TYPE_BADGE = {
  Event: { bg: "bg-interactive-50", color: "text-interactive-600" },
  Announcement: { bg: "bg-[#F3E8FF]", color: "text-[#7C3AED]" },
  Reminder: { bg: "bg-success-50", color: "text-success-600" },
  Request: { bg: "bg-warning-50", color: "text-warning-600" },
};

const BULLETIN_REQUESTS_SEED = [
  { id: "BR-2026-0045", title: "Youth Fellowship Meeting", preview: "Youth fellowship meeting this Sunday...", type: "Event", submittedBy: "John Samuel", memberId: "M-1023", submittedOn: "2026-05-16", submittedTime: "10:30 AM", publishDate: "2026-05-18", status: "Approved" },
  { id: "BR-2026-0044", title: "VBS Registration Open", preview: "Vacation Bible School registrations...", type: "Announcement", submittedBy: "Sophia Daniel", memberId: "M-1045", submittedOn: "2026-05-15", submittedTime: "09:15 AM", publishDate: "2026-05-19", status: "Approved" },
  { id: "BR-2026-0043", title: "Church Picnic 2026", preview: "Annual church picnic on June 5th...", type: "Event", submittedBy: "Thomas Philip", memberId: "M-1011", submittedOn: "2026-05-14", submittedTime: "04:20 PM", publishDate: "2026-05-21", status: "Pending" },
  { id: "BR-2026-0042", title: "Blood Donation Camp", preview: "Join us for a blood donation camp...", type: "Announcement", submittedBy: "Anita Joseph", memberId: "M-1067", submittedOn: "2026-05-14", submittedTime: "11:05 AM", publishDate: "2026-05-20", status: "Pending" },
  { id: "BR-2026-0041", title: "Marriage Preparation Class", preview: "Marriage preparation class starts...", type: "Event", submittedBy: "Daniel Paul", memberId: "M-1032", submittedOn: "2026-05-13", submittedTime: "03:45 PM", publishDate: "2026-05-22", status: "Rejected" },
  { id: "BR-2026-0040", title: "Prayer Meeting Reminder", preview: "Don't miss the midweek prayer meeting...", type: "Reminder", submittedBy: "Lydia Benjamin", memberId: "M-1098", submittedOn: "2026-05-12", submittedTime: "08:50 AM", publishDate: "2026-05-16", status: "Approved" },
  { id: "BR-2026-0039", title: "Choir Practice Schedule", preview: "New choir practice timings...", type: "Announcement", submittedBy: "Samuel David", memberId: "M-1005", submittedOn: "2026-05-11", submittedTime: "06:10 PM", publishDate: "2026-05-17", status: "Approved" },
  { id: "BR-2026-0038", title: "Condolence Meeting", preview: "Condolence meeting for late Mr...", type: "Announcement", submittedBy: "Mary Grace", memberId: "M-1077", submittedOn: "2026-05-10", submittedTime: "02:30 PM", publishDate: "2026-05-12", status: "Approved" },
  { id: "BR-2026-0037", title: "Sunday School Teachers Needed", preview: "We are looking for volunteers...", type: "Request", submittedBy: "Pauline David", memberId: "M-1112", submittedOn: "2026-05-09", submittedTime: "09:00 AM", publishDate: "2026-05-15", status: "Pending" },
  { id: "BR-2026-0036", title: "Mission Trip Update", preview: "Mission trip to Manipur update...", type: "Announcement", submittedBy: "George Mathew", memberId: "M-1008", submittedOn: "2026-05-08", submittedTime: "12:20 PM", publishDate: "2026-05-14", status: "Approved" },
];

/** Pad the seed list out to 45 entries to match "Showing 1 to 10 of 45 requests". */
export const BULLETIN_REQUESTS_LIST_MOCK = Array.from({ length: 45 }, (_, i) => {
  const seed = BULLETIN_REQUESTS_SEED[i % BULLETIN_REQUESTS_SEED.length];
  if (i < BULLETIN_REQUESTS_SEED.length) return seed;
  return { ...seed, id: `BR-2026-${String(45 - i).padStart(4, "0")}` };
});

export const BULLETIN_OVERVIEW_MOCK = { total: 45, approved: 25, pending: 15, rejected: 5 };

export const BULLETIN_BY_TYPE_MOCK = {
  total: 45,
  breakdown: [
    { label: "Announcements", count: 20, pct: 44, color: "#7C3AED" },
    { label: "Events", count: 12, pct: 27, color: "#2563EB" },
    { label: "Reminders", count: 7, pct: 16, color: "#16A34A" },
    { label: "Requests", count: 6, pct: 13, color: "#F97316" },
  ],
};

export const BULLETIN_RECENT_ACTIVITY_MOCK = [
  { title: "Youth Fellowship Meeting", action: "Approved by Parish Office", date: "2026-05-16", time: "11:20 AM", kind: "approved" },
  { title: "Church Picnic 2026", action: "Status changed to Pending", date: "2026-05-14", time: "04:45 PM", kind: "pending" },
  { title: "Marriage Preparation Class", action: "Rejected by Parish Office", date: "2026-05-13", time: "05:30 PM", kind: "rejected" },
  { title: "Prayer Meeting Reminder", action: "Approved by Parish Office", date: "2026-05-12", time: "09:15 AM", kind: "approved" },
];

export const NEW_BULLETIN_REQUEST_DEFAULTS = {
  title: "",
  requestType: "",
  priority: "Normal",
  description: "",
  eventDate: "",
  startTime: "",
  endTime: "",
  location: "",
  organizedBy: "",
  contactPerson: "",
  contactNumber: "",
  briefAnnouncement: "",
  additionalNotes: "",
  attachments: [],
};

// ---------------------------------------------------------------------------
// Bulletin request detail (Youth Fellowship Meeting) — full detail page
// ---------------------------------------------------------------------------

export const BULLETIN_REQUEST_DETAIL_MOCK = {
  id: "BR-2026-0045",
  title: "Youth Fellowship Meeting",
  description: "Youth fellowship meeting this Sunday after the morning service.",
  requestType: "Event",
  prayerAreaFocus: "Youth",
  submittedBy: "John Samuel",
  memberId: "M-1023",
  submissionDate: "2026-05-16",
  submissionTime: "10:30 AM",
  publishDate: "2026-05-18",
  preferredBulletinDate: "2026-05-18",
  attachments: [{ name: "Youth_Fellowship_Details.pdf", size: "245 KB", kind: "pdf" }],
  eventDate: "2026-05-18",
  eventDay: "Sunday",
  eventTime: "11:00 AM - 01:00 PM",
  location: "Fellowship Hall, St. John's Church",
  organizedBy: "Youth Ministry Team",
  additionalNotes: "All youth members are encouraged to participate.",
  status: "Approved",
  approvalHistory: [
    { status: "Approved", by: "Sophia Daniel", date: "2026-05-17", time: "09:15 AM", note: "Request has been approved and scheduled for bulletin." },
    { status: "Submitted", by: "John Samuel", date: "2026-05-16", time: "10:30 AM", note: "Request submitted successfully." },
  ],
  reviewedBy: "Sophia Daniel",
  reviewedOn: "2026-05-17",
  reviewedTime: "09:15 AM",
  visibleInBulletin: true,
  priority: "Normal",
  audience: "All Church Members",
  estimatedReach: null,
  language: "English",
  visibleTo: "All Members",
  displayInBulletinDate: "2026-05-18",
};

export function buildBulletinRequestDetailMock(id) {
  if (!id || id === BULLETIN_REQUEST_DETAIL_MOCK.id) return BULLETIN_REQUEST_DETAIL_MOCK;
  const fallback = BULLETIN_REQUESTS_LIST_MOCK.find((r) => r.id === id);
  if (!fallback) return { ...BULLETIN_REQUEST_DETAIL_MOCK, id };
  return {
    ...BULLETIN_REQUEST_DETAIL_MOCK,
    id,
    title: fallback.title,
    description: fallback.preview,
    requestType: fallback.type,
    submittedBy: fallback.submittedBy,
    memberId: fallback.memberId,
    submissionDate: fallback.submittedOn,
    submissionTime: fallback.submittedTime,
    publishDate: fallback.publishDate,
    preferredBulletinDate: fallback.publishDate,
    status: fallback.status,
  };
}
