
export const MIGRATED_TRACKING_MOCK = {
  cards: {
    totalMigrated: 96,
    thisMonth: 8,
    thisYear: 37,
    awaitingConfirmation: 12,
  },

  // TODO(backend): .values("migration_status").annotate(count=Count("id"))
  summaryBreakdown: [
    { label: "Completed", count: 72, percent: 75, color: "#16A34A" },
    { label: "Pending Confirmation", count: 12, percent: 13, color: "#E8983A" },
    { label: "Awaiting Details", count: 12, percent: 12, color: "#8B5CF6" },
  ],

  // TODO(backend): .values("migrated_to_church").annotate(count=Count("id")).order_by("-count")
  topReceivingChurches: [
    { label: "St. Thomas Church, Kochi", count: 12 },
    { label: "CSI Christ Church, Dubai", count: 10 },
    { label: "St. Peter's Church, Bangalore", count: 8 },
    { label: "Holy Trinity Church, Mumbai", count: 7 },
    { label: "CSI Cathedral Church, Delhi", count: 6 },
  ],

  note: "Migrated members are those who have been transferred out of the parish to another church/diocese. Track confirmation from the receiving church to complete the migration process.",
};
