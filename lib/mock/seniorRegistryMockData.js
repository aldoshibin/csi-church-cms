
export const SENIOR_REGISTRY_MOCK = {
  cards: {
    totalSenior: 186,
    age60to69: { value: 78, percent: 42 },
    age70to79: { value: 72, percent: 39 },
    age80plus: { value: 36, percent: 19 },
  },

  // TODO(backend): bucket .values("age_bracket").annotate(count=Count("id"))
  ageDistribution: [
    { label: "60 - 69 Years", count: 78, percent: 42, color: "#0E5C4E" },
    { label: "70 - 79 Years", count: 72, percent: 39, color: "#8B5CF6" },
    { label: "80+ Years", count: 36, percent: 19, color: "#D4A24C" },
  ],

  // TODO(backend): .values("ministry_group").annotate(count=Count("id"))
  ministryGroupWise: [
    { label: "Women's Fellowship", count: 48 },
    { label: "Men's Fellowship", count: 42 },
    { label: "Choir", count: 24 },
    { label: "Sunday School", count: 20 },
    { label: "Ushering", count: 18 },
    { label: "Others", count: 34 },
  ],

  note: "Senior members are those who are 60 years and above. Please keep member details and health information up to date to provide better pastoral care.",
};
