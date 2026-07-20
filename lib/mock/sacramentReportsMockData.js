
export const SACRAMENT_REPORTS_MOCK = {
  overview: {
    totalSacraments: { value: 171, sublabel: "This Year", trend: "↑ 14% vs Last Year" },
    baptisms: { value: 48, sublabel: "This Year", percent: "28.1%" },
    holyCommunions: { value: 62, sublabel: "This Year", percent: "36.3%" },
    confirmations: { value: 34, sublabel: "This Year", percent: "19.9%" },
    marriages: { value: 18, sublabel: "This Year", percent: "19.9%" },

    funerals: { value: 9, sublabel: "This Year", percent: "5.3%" },
  },


  byLocation: [
    { label: "Main Church", count: 78, percent: 45.6, color: "#0E5C4E" },
    { label: "St. Peter's Chapel", count: 34, percent: 19.9, color: "#E8983A" },
    { label: "St. Mary's Mission", count: 31, percent: 18.1, color: "#7C3AED" },
    { label: "Hill View Branch", count: 28, percent: 16.4, color: "#8FC4B6" },
  ],

  filters: {
    dateFrom: "01-01-2025",
    dateTo: "31-12-2025",
    location: "All Locations",
    sacramentType: "Holy Communion",
    performedBy: "All",
  },

  tabs: ["All Sacraments", "Baptisms", "Holy Communions", "Confirmations", "Marriages", "Funerals"],

  // TODO(backend): each tab maps to one of sacraments.models'
  // BaptismRegisterEntry / ConfirmationRegisterEntry / MarriageRegisterEntry
  // / FuneralRegisterEntry, plus a "Holy Communion" register that doesn't
  // exist as its own model yet (currently only tracked as a boolean/date
  // pair on members.Member, not a full register like the other 4).
  recordsByTab: {
    Baptisms: [
      {
        id: 1, date: "18", month: "MAY", year: "2025", sacramentType: "Baptism",
        name: "Aaron Joseph", relation: "Son of Joseph & Maria", gender: "Male", ageGroup: "Child (0-12)",
        parentsOrSpouse: "Joseph Mathew\nMaria Joseph", location: "Main Church", officiatedBy: "Rev. Michael",
      },
      {
        id: 2, date: "12", month: "APR", year: "2025", sacramentType: "Baptism",
        name: "Joshua Peter", relation: "Son of Peter & Anitha", gender: "Male", ageGroup: "Child (0-12)",
        parentsOrSpouse: "Peter Samuel\nAnitha Peter", location: "St. Peter's Chapel", officiatedBy: "Rev. Michael",
      },
    ],

    "Holy Communions": [
      {
        id: 1, date: "11", month: "MAY", year: "2025", sacramentType: "Holy Communion",
        name: "Anna Grace", relation: "Daughter of Grace & Samuel", gender: "Female", ageGroup: "Child (0-12)",
        parentsOrSpouse: "Grace Samuel", location: "St. Peter's Chapel", officiatedBy: "Rev. Michael",
      },
      {
        id: 2, date: "20", month: "APR", year: "2025", sacramentType: "Holy Communion",
        name: "Emily Rose", relation: "Daughter of Alex & Rose", gender: "Female", ageGroup: "Child (0-12)",
        parentsOrSpouse: "Alex Rose", location: "Hill View Branch", officiatedBy: "Rev. Michael",
      },
    ],
    Confirmations: [
      {
        id: 1, date: "04", month: "MAY", year: "2025", sacramentType: "Confirmation",
        name: "Daniel Thomas", relation: "Son of Thomas & Lily", gender: "Male", ageGroup: "Teen (13-17)",
        parentsOrSpouse: "Thomas & Lily", location: "Main Church", officiatedBy: "Bishop John Samuel",
      },
    ],
    Marriages: [
      {
        id: 1, date: "27", month: "APR", year: "2025", sacramentType: "Marriage",
        name: "Alex Varghese & Rose Alex", relation: "Reg. No. MRG-2025-025", gender: "—", ageGroup: "Adult (18+)",
        parentsOrSpouse: "Reg. No. MRG-2025-025", location: "St. Mary's Mission", officiatedBy: "Rev. Michael",
      },
    ],
    Funerals: [
      {
        id: 1, date: "15", month: "APR", year: "2025", sacramentType: "Funeral",
        name: "Mathew Abraham", relation: "(73 Years)", gender: "Male", ageGroup: "Senior (60+)",
        parentsOrSpouse: "—", location: "Main Church", officiatedBy: "Rev. Michael",
      },
    ],
  },
};

const SACRAMENT_BADGE_CLASS = {
  Baptism: "bg-[#e8f7f1] text-[#00846e]",
  "Holy Communion": "bg-[#fff2e6] text-[#f07100]",
  Confirmation: "bg-[#f3e9ff] text-[#7838d4]",
  Marriage: "bg-[#eaf9f7] text-[#007d74]",
  Funeral: "bg-[#ecebff] text-[#5442d5]",
};

export function sacramentBadgeClass(type) {
  return SACRAMENT_BADGE_CLASS[type] ?? "bg-surface-muted text-ink-muted";
}

const GENDER_BADGE_CLASS = {
  Male: "bg-[#e4efff] text-[#2563eb]",
  Female: "bg-[#ffe4ef] text-[#f0447b]",
};

export function genderBadgeClass(gender) {
  return GENDER_BADGE_CLASS[gender] ?? "bg-surface-muted text-ink-muted";
}


export function getTabRecords(mock, tabLabel) {
  if (tabLabel === "All Sacraments") {
    return Object.values(mock.recordsByTab).flat();
  }
  return mock.recordsByTab[tabLabel] ?? [];
}

export function getTabRecordLabel(tabLabel) {
  const map = {
    "All Sacraments": "Sacrament",
    Baptisms: "Baptism",
    "Holy Communions": "Holy Communion",
    Confirmations: "Confirmation",
    Marriages: "Marriage",
    Funerals: "Funeral",
  };
  return map[tabLabel] ?? tabLabel;
}
