
export const INACTIVE_TRACKING_MOCK = {
  cards: {
    totalInactive: 128,
    inactive3to6: { value: 42, percent: 33 },
    inactive6to12: { value: 36, percent: 28 },
    inactiveOver12: { value: 50, percent: 39 },
  },

  // TODO(backend): bucket .values("inactive_since_months").annotate(count=Count("id"))
  summaryBreakdown: [
    { label: "3 - 6 Months", count: 42, percent: 33, color: "#16A34A" },
    { label: "6 - 12 Months", count: 36, percent: 28, color: "#3B5BDB" },
    { label: "More than 12 Months", count: 50, percent: 39, color: "#DC2626" },
  ],

  // TODO(backend): .values("ministry_group").annotate(count=Count("id"))
  ministryGroupWise: [
    { label: "Choir", count: 22 },
    { label: "Women's Fellowship", count: 20 },
    { label: "Men's Fellowship", count: 18 },
    { label: "Sunday School", count: 16 },
    { label: "Youth Ministry", count: 12 },
    { label: "Others", count: 40 },
  ],

  note: "Members are considered inactive based on the last attendance date. You can customize the inactive duration in system settings.",
};
