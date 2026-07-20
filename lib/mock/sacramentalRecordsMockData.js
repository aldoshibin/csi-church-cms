
export const SACRAMENTAL_RECORDS_MOCK = {
  dateLabel: "18 May 2025",

  cards: [
    { key: "baptism", label: "Baptism", value: 156, sublabel: "This Year", icon: "church", tone: "teal" },
    { key: "holy_communion", label: "Holy Communion", value: 98, sublabel: "This Year", icon: "wine", tone: "purple" },
    { key: "confirmation", label: "Confirmation", value: 76, sublabel: "This Year", icon: "dove", tone: "red" },
    { key: "marriage", label: "Marriage", value: 42, sublabel: "This Year", icon: "rings", tone: "blue" },
    { key: "holy_orders", label: "Holy Orders", value: 8, sublabel: "This Year", icon: "cross", tone: "orange" },
    { key: "anointing", label: "Anointing", value: 31, sublabel: "This Year", icon: "heart-hands", tone: "green" },
  ],

  overviewDonut: {
    total: 411,
    breakdown: [
      { label: "Baptism", count: 156, percent: 37.9, color: "#0E5C4E" },
      { label: "Holy Communion", count: 98, percent: 23.8, color: "#8B5CF6" },
      { label: "Confirmation", count: 76, percent: 18.5, color: "#EF4444" },
      { label: "Marriage", count: 42, percent: 10.2, color: "#3B82F6" },
      { label: "Holy Orders", count: 8, percent: 1.9, color: "#D4A24C" },
      { label: "Anointing", count: 31, percent: 7.7, color: "#22C55E" },
    ],
  },

  recordsThisMonth: [
    { key: "baptism", label: "Baptism", count: 14, icon: "church" },
    { key: "holy_communion", label: "Holy Communion", count: 9, icon: "wine" },
    { key: "confirmation", label: "Confirmation", count: 6, icon: "dove" },
    { key: "marriage", label: "Marriage", count: 4, icon: "rings" },
    { key: "anointing", label: "Anointing", count: 7, icon: "heart-hands" },
  ],

  recentRecords: [
    { id: "r1", name: "John Samuel", sacrament: "Baptism", date: "17 May 2025" },
    { id: "r2", name: "Emily Grace", sacrament: "Holy Communion", date: "16 May 2025" },
    { id: "r3", name: "David Samuel", sacrament: "Confirmation", date: "15 May 2025" },
    { id: "r4", name: "Samuel & Rachel", sacrament: "Marriage", date: "14 May 2025" },
    { id: "r5", name: "Mary Johnson", sacrament: "Anointing", date: "13 May 2025" },
  ],

  calendar: {
    monthLabel: "May 2025",
    highlighted: { 18: "today", 25: "meeting" }, // 18 = teal (today), 25 = purple
    legend: [
      { label: "Baptism", color: "#0E5C4E" },
      { label: "Holy Communion", color: "#8B5CF6" },
      { label: "Confirmation", color: "#EF4444" },
      { label: "Marriage", color: "#3B82F6" },
      { label: "Anointing", color: "#22C55E" },
    ],
  },

  table: {
    total: 27,
    pageSize: 5,
    results: [
      { id: 1, name: "John Samuel", sacrament: "Baptism", date: "17 May 2025", officiatedBy: "Rev. Michael", location: "Main Church", status: "Completed" },
      { id: 2, name: "Emily Grace", sacrament: "Holy Communion", date: "16 May 2025", officiatedBy: "Rev. Thomas", location: "Main Church", status: "Completed" },
      { id: 3, name: "David Samuel", sacrament: "Confirmation", date: "15 May 2025", officiatedBy: "Bishop William", location: "Main Church", status: "Completed" },
      { id: 4, name: "Samuel & Rachel", sacrament: "Marriage", date: "14 May 2025", officiatedBy: "Rev. Michael", location: "Main Church", status: "Completed" },
      { id: 5, name: "Mary Johnson", sacrament: "Anointing", date: "13 May 2025", officiatedBy: "Rev. Thomas", location: "Parish Hall", status: "Completed" },
    ],
  },
};
