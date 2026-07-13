
export const MEMBER_MANAGEMENT_MOCK = {
  cards: {
    totalMembers: { value: 4732, delta: "↑ 68 this month" },
    activeMembers: { value: 3890, delta: "82.2% of total" },
    inactiveMembers: { value: 642, delta: "13.6% of total" },
    newMembersThisMonth: { value: 32, delta: "↑ 12 this month", label: "New Members (May)" },
    baptizedMembers: { value: 4215, delta: "89.1% of total" },
    families: { value: 1248, delta: "↑ 24 this month" },
  },

  tabs: ["All Members", "Active Members", "New Members", "Baptized Members", "Inactive Members", "Member Directory"],

  ageGroups: ["All Age Groups", "Children (0-12)", "Youth (13-17)", "Adults (18+)"],

  quickActions: ["Add New Member", "Add New Family", "Import Members", "Bulk Update Members", "Member Directory", "Advanced Search"],

  // TODO(backend): no single aggregation endpoint exists for an age-group
  // breakdown yet — members.Member has date_of_birth, so this is a
  // straightforward addition once needed for real.
  memberStatistics: {
    total: 4732,
    breakdown: [
      { label: "Adults (18+)", count: 2756, percent: 58.2, color: "#0E5C4E" },
      { label: "Youth (13-17)", count: 842, percent: 17.8, color: "#3B5BDB" },
      { label: "Children (0-12)", count: 1134, percent: 23.9, color: "#E8983A" },
    ],
  },

  // TODO(backend): a per-Church count of members.Member — straightforward
  // .values("church").annotate(count=Count("id")) addition.
  membersByBranch: [
    { label: "St. John's Church (Main)", count: 2845 },
    { label: "St. Peter's Church", count: 834 },
    { label: "CSI Bethel Church", count: 612 },
    { label: "St. Thomas Church", count: 441 },
  ],
};
