// Mock data for Choir & Worship Team > Songs & Setlist — maps to choir_worship/songs/views.py once wired up.

export const SONG_CATEGORY_OPTIONS = ["Praise & Worship", "Hymns", "Worship", "Tamil Worship", "Choral", "Others"];
export const SONG_LANGUAGE_OPTIONS = ["English", "Hindi", "Tamil", "Telugu", "Malayalam"];
export const SONG_KEY_OPTIONS = ["C", "C#", "D", "Eb", "E", "F", "F#", "G", "Ab", "A", "Bb", "B"];
export const SONG_TIME_SIGNATURE_OPTIONS = ["4/4", "3/4", "6/8", "2/4"];
export const SONG_STATUS_OPTIONS = ["Active", "Inactive"];
export const SONG_STATUS_FILTER_OPTIONS = ["Active Songs", "Inactive Songs"];

export const SONG_STATUS_VARIANT = { Active: "success", Inactive: "danger" };
export const SONG_CATEGORY_BADGE = {
  "Praise & Worship": { bg: "bg-[#F3E8FF]", color: "text-[#7C3AED]" },
  Hymns: { bg: "bg-interactive-50", color: "text-interactive-600" },
  Worship: { bg: "bg-success-50", color: "text-success-600" },
  "Tamil Worship": { bg: "bg-orange-50", color: "text-orange-600" },
  Choral: { bg: "bg-[#FCE7F3]", color: "text-[#DB2777]" },
  Others: { bg: "bg-surface-muted", color: "text-ink-subtle" },
};

const SONGS_SEED = [
  { id: "SONG-0001", title: "Great Is Thy Faithfulness", category: "Praise & Worship", language: "English", key: "C", tempo: 72, addedBy: "Daniel Paul", addedOn: "2026-05-20", status: "Active" },
  { id: "SONG-0002", title: "How Great Thou Art", category: "Hymns", language: "English", key: "Eb", tempo: 68, addedBy: "Melissa Grace", addedOn: "2026-05-18", status: "Active" },
  { id: "SONG-0003", title: "Tere Bin Nahi Lagda", category: "Worship", language: "Hindi", key: "G", tempo: 70, addedBy: "John Samuel", addedOn: "2026-05-15", status: "Active" },
  { id: "SONG-0004", title: "Yesu Ennal Azhagae", category: "Tamil Worship", language: "Tamil", key: "D", tempo: 74, addedBy: "Daniel Paul", addedOn: "2026-05-12", status: "Active" },
  { id: "SONG-0005", title: "Bless the Lord O My Soul", category: "Choral", language: "English", key: "F", tempo: 60, addedBy: "Melissa Grace", addedOn: "2026-05-10", status: "Active" },
  { id: "SONG-0006", title: "Jeevan Ke Data", category: "Worship", language: "Hindi", key: "A", tempo: 76, addedBy: "John Samuel", addedOn: "2026-05-08", status: "Active" },
  { id: "SONG-0007", title: "Aaradhana", category: "Praise & Worship", language: "Telugu", key: "E", tempo: 78, addedBy: "Daniel Paul", addedOn: "2026-05-05", status: "Active" },
  { id: "SONG-0008", title: "Amazing Grace", category: "Hymns", language: "English", key: "G", tempo: 66, addedBy: "Melissa Grace", addedOn: "2026-05-02", status: "Active" },
];

/** Pad the seed list out to 186 entries to match "Showing 1 to 8 of 186 songs". */
export const SONGS_LIST_MOCK = Array.from({ length: 186 }, (_, i) => {
  const seed = SONGS_SEED[i % SONGS_SEED.length];
  if (i < SONGS_SEED.length) return seed;
  return { ...seed, id: `SONG-${String(i + 1).padStart(4, "0")}` };
});

export const SONGS_QUICK_ACTIONS_TARGETS = { add: "/choir-worship/songs-setlist/add" };

export const NEW_SONG_DEFAULTS = {
  title: "",
  category: "",
  language: "",
  alternateTitle: "",
  key: "",
  tempo: "",
  timeSignature: "",
  duration: "",
  lyrics: "",
  chords: "",
  composer: "",
  copyright: "",
  source: "",
  tags: [],
  notes: "",
  status: "Active",
  attachments: [],
};

// ---------------------------------------------------------------------------
// Song detail (Great Is Thy Faithfulness) — shown in the Song Details drawer
// ---------------------------------------------------------------------------

export const SONG_DETAIL_MOCK = {
  id: "SONG-0001",
  title: "Great Is Thy Faithfulness",
  status: "Active",
  category: "Praise & Worship",
  language: "English",
  key: "C",
  tempo: 72,
  timeSignature: "4/4",
  duration: "3:45",
  addedBy: "Daniel Paul",
  addedByRole: "Worship Leader",
  addedOn: "2026-05-20",
  lastUpdatedOn: "2026-05-25",
  lastUpdatedBy: "Daniel Paul",
  description: "A classic hymn of God's faithfulness and goodness. Suitable for opening praise and thanksgiving.",
  tags: ["Faithfulness", "Praise", "Thanksgiving", "Classic Hymn"],
  usage: {
    usedInServices: 18,
    usedInSetlists: 12,
    lastUsedOn: "2026-05-25",
    lastUsedService: "Sunday Worship Service",
    upcomingUseOn: "2026-05-27",
    upcomingUseService: "Youth Worship Service",
  },
  relatedSetlists: [
    { name: "Sunday Worship Service", date: "2026-05-25", status: "Past" },
    { name: "Youth Worship Service", date: "2026-05-27", status: "Upcoming" },
    { name: "Thanksgiving Service", date: "2026-06-01", status: "Scheduled" },
  ],
  attachments: [
    { name: "Great_Is_Thy_Faithfulness_Sheet.pdf", size: "245 KB", kind: "pdf" },
  ],
};

export const RELATED_SETLIST_STATUS_VARIANT = { Past: "default", Upcoming: "info", Scheduled: "warning" };

export function buildSongDetailMock(id) {
  if (!id || id === SONG_DETAIL_MOCK.id) return SONG_DETAIL_MOCK;
  const fallback = SONGS_LIST_MOCK.find((s) => s.id === id);
  if (!fallback) return { ...SONG_DETAIL_MOCK, id };
  return {
    ...SONG_DETAIL_MOCK,
    id,
    title: fallback.title,
    category: fallback.category,
    language: fallback.language,
    key: fallback.key,
    tempo: fallback.tempo,
    addedBy: fallback.addedBy,
    addedOn: fallback.addedOn,
    status: fallback.status,
  };
}
