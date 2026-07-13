
export const PHOTO_MANAGEMENT_MOCK = {
  cards: {
    totalMembers: 1248,
    withPhoto: { value: 986, percent: 79 },
    withoutPhoto: { value: 262, percent: 21 },
    recentlyAdded: 24,
  },

  // TODO(backend): .aggregate(with_photo=Count("id", filter=Q(photo__isnull=False)), ...)
  photoSummary: [
    { label: "With Photo", count: 986, percent: 79, color: "#0E5C4E" },
    { label: "Without Photo", count: 262, percent: 21, color: "#D4A24C" },
  ],

  // TODO(backend): .values("photo_source").annotate(count=Count("id"))
  photoSource: [
    { label: "Uploaded by Parish", count: 872, percent: 70 },
    { label: "Bulk Upload", count: 78, percent: 6 },
    { label: "Imported", count: 36, percent: 3 },
    { label: "Other", count: 0, percent: 0 },
  ],

  note: "Upload clear, front-facing photos for better identification.\nAccepted formats: JPG, PNG.\nRecommended size: 500x500 px.\nMaximum file size: 2MB.",
};
