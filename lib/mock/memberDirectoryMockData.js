
export const MEMBER_DIRECTORY_MOCK = {
  summary: {
    totalMembers: 4732,
    activeMembers: { count: 3890, percent: 82.2 },
    inactiveMembers: { count: 642, percent: 13.6 },
    newMembersThisYear: 256,
    baptizedMembers: 4215,
  },

  tabs: [
    { key: "all", label: "All Members", count: 4732 },
    { key: "active", label: "Active Members", count: 3890 },
    { key: "inactive", label: "Inactive Members", count: 642 },
    { key: "new_this_year", label: "New Members (This Year)", count: 256 },
    { key: "baptized", label: "Baptized Members", count: 4215 },
  ],

  // TODO(backend): .values("member_category").annotate(count=Count("id"))
  membersByCategory: {
    total: 4732,
    breakdown: [
      { label: "Family Head", count: 1248, percent: 26.4, color: "#0E5C4E" },
      { label: "Spouse", count: 1102, percent: 23.3, color: "#3B5BDB" },
      { label: "Child", count: 987, percent: 20.9, color: "#E8983A" },
      { label: "Individual", count: 1395, percent: 29.4, color: "#8B5CF6" },
    ],
  },

  // TODO(backend): .values("church").annotate(count=Count("id"))
  membersByBranch: [
    { label: "St. John's Church (Main)", count: 2845 },
    { label: "St. Peter's Church (North)", count: 876 },
    { label: "CSI Church (West)", count: 562 },
    { label: "St. Thomas Church (South)", count: 449 },
  ],
};
