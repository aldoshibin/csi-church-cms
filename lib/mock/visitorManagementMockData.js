
export const VISITOR_MANAGEMENT_MOCK = {
  cards: {
    totalVisitors: { value: 128, sublabel: "This Month" },
    newVisitors: { value: 42, sublabel: "This Month" },
    returningVisitors: { value: 86, sublabel: "This Month" },
    visitorsConverted: { value: 18, sublabel: "This Month" },
  },

  // TODO(backend): .values("source").annotate(count=Count("id"))
  visitorSources: {
    total: 128,
    breakdown: [
      { label: "Walk-in", count: 45, percent: 35, color: "#0E5C4E" },
      { label: "Website", count: 32, percent: 25, color: "#3B5BDB" },
      { label: "Friend Invitation", count: 26, percent: 20, color: "#8B5CF6" },
      { label: "Social Media", count: 13, percent: 10, color: "#38BDF8" },
      { label: "Church Event", count: 12, percent: 10, color: "#E8983A" },
    ],
  },

  // TODO(backend): .values("follow_up_status").annotate(count=Count("id"))
  followUpOverview: [
    { label: "Pending", count: 58, color: "#E8983A" },
    { label: "Contacted", count: 32, color: "#16A34A" },
    { label: "Invited", count: 20, color: "#3B82F6" },
    { label: "Member", count: 18, color: "#8B5CF6" },
  ],

  checkIn: {
    today: 12,
    thisWeek: 45,
  },

  // TODO(backend): a real notes/activity feed tied to visitors — no such
  // model exists yet.
  recentNotes: [
    { id: "n1", timestamp: "24 May 2025 · 10:45 AM", text: "Follow-up call scheduled with David Thompson" },
    { id: "n2", timestamp: "24 May 2025 · 09:30 AM", text: "Sarah Johnson expressed interest in Bible Study group" },
  ],
};
