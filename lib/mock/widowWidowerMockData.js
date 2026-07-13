
export const WIDOW_WIDOWER_MOCK = {
  cards: {
    totalWidows: { value: 96, percent: 68 },
    totalWidowers: { value: 46, percent: 32 },
    totalMembers: 142,
    addedThisYear: 18,
  },

  // TODO(backend): .values("gender").annotate(count=Count("id"))
  genderDistribution: [
    { label: "Widows", count: 96, percent: 68, color: "#0E5C4E" },
    { label: "Widowers", count: 46, percent: 32, color: "#8B5CF6" },
  ],

  // TODO(backend): bucket .values("age_bracket").annotate(count=Count("id"))
  ageDistribution: [
    { label: "60 - 69 Years", count: 48, percent: 34, color: "#0E5C4E" },
    { label: "70 - 79 Years", count: 58, percent: 41, color: "#D4A24C" },
    { label: "80+ Years", count: 36, percent: 25, color: "#8B5CF6" },
  ],

  note: "This registry helps the parish provide pastoral care, prayers, and support to our widow and widower members.\n\nPlease keep the member details updated for better care and follow-up.",
};
