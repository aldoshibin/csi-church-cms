
export const PRAYER_REQUEST_SUMMARY_MOCK = {
  cards: {
    totalRequests: { value: 128, sublabel: "All Time" },
    activeRequests: { value: 52, sublabel: "Currently Active" },
    answeredRequests: { value: 64, sublabel: "This Year" },
    closedRequests: { value: 12, sublabel: "This Year" },
    requestsThisMonth: { value: 9, sublabel: "May 2025" },
  },

  
  statusOverview: [
    { label: "Active", count: 52, percent: 40.6, color: "#0E5C4E" },
    { label: "Answered", count: 64, percent: 50.0, color: "#3B5BDB" },
    { label: "Closed", count: 12, percent: 9.4, color: "#7C3AED" },
    { label: "Cancelled", count: 0, percent: 0, color: "#E8983A" },
  ],

  // TODO(backend): no "category" field exists yet on prayers.PrayerRequest
  // — would need a new field (free-text or a small enum) to support this
  // breakdown for real.
  topCategories: [
    { label: "Health", count: 45, percent: 35.2, color: "#0E5C4E" },
    { label: "Family", count: 28, percent: 21.9, color: "#0E5C4E" },
    { label: "Financial", count: 18, percent: 14.1, color: "#3B5BDB" },
    { label: "Employment", count: 14, percent: 10.9, color: "#7C3AED" },
    { label: "Education", count: 9, percent: 7.0, color: "#E8983A" },
  ],


  requestsOverTime: [
    11, 22, 18, 12, 22, 23, 28, 32, 38, 25, 18, 14, 15, 17,
  ],

  filters: {
    status: "All",
    category: "All",
    dateRange: "01 Jan 2025 - 31 Dec 2025",
    requestedBy: "All",
  },


  recentRequests: [
    {
      id: 1, date: "14 May 2025", time: "09:30 AM",
      requestedBy: "Mary Varghese", requestedByLocation: "St. Mary's Mission",
      requestFor: "John Varghese", requestForRelation: "Husband",
      category: "Health", details: "Prayers for complete recovery from surgery and good health.",
      status: "Active", requestedFor: "Self",
    },
    {
      id: 2, date: "13 May 2025", time: "07:15 PM",
      requestedBy: "Thomas Samuel", requestedByLocation: "Main Church",
      requestFor: "Thomas Samuel", requestForRelation: "—",
      category: "Family", details: "Prayers for family unity and peace at home.",
      status: "Active", requestedFor: "Self",
    },
    {
      id: 3, date: "12 May 2025", time: "06:45 PM",
      requestedBy: "Anitha Peter", requestedByLocation: "St. Peter's Chapel",
      requestFor: "Riya Peter", requestForRelation: "Daughter",
      category: "Education", details: "Prayers for good studies and success in exams.",
      status: "Answered", requestedFor: "Other",
    },
    {
      id: 4, date: "10 May 2025", time: "11:20 AM",
      requestedBy: "George Mathew", requestedByLocation: "Main Church",
      requestFor: "George Mathew", requestForRelation: "—",
      category: "Financial", details: "Prayers for financial stability and wisdom in decisions.",
      status: "Active", requestedFor: "Self",
    },
    {
      id: 5, date: "08 May 2025", time: "08:05 PM",
      requestedBy: "Daniel Thomas", requestedByLocation: "Main Church",
      requestFor: "Job Opportunity", requestForRelation: "—",
      category: "Employment", details: "Prayers for a suitable job and good workplace.",
      status: "Active", requestedFor: "Self",
    },
    {
      id: 6, date: "06 May 2025", time: "05:30 PM",
      requestedBy: "Sarah Grace", requestedByLocation: "Hill View Branch",
      requestFor: "Mother", requestForRelation: "Mother",
      category: "Health", details: "Prayers for better health and relief from pain.",
      status: "Active", requestedFor: "Other",
    },
  ],
};

const STATUS_BADGE_CLASS = {
  Active: "bg-success-50 text-success-600",
  Answered: "bg-interactive-50 text-interactive-600",
  Closed: "bg-purple-50 text-purple-600",
  Cancelled: "bg-accent-50 text-accent-600",
};

export function statusBadgeClass(status) {
  return STATUS_BADGE_CLASS[status] ?? "bg-surface-muted text-ink-muted";
}

const CATEGORY_BADGE_CLASS = {
  Health: "bg-success-50 text-success-600",
  Family: "bg-success-50 text-success-600",
  Financial: "bg-interactive-50 text-interactive-600",
  Employment: "bg-purple-50 text-purple-600",
  Education: "bg-accent-50 text-accent-600",
};

export function categoryBadgeClass(category) {
  return CATEGORY_BADGE_CLASS[category] ?? "bg-surface-muted text-ink-muted";
}
