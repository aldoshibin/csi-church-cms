export const STARRED_BY_FILTER_OPTIONS = [
  "Thomas Cherian", "Sarah Mathew", "David Christopher", "Anita Rajan", "John Baptiste", "Parish Office",
];

export const STARRED_TYPE_FILTER_OPTIONS = ["PDF", "DOCX", "DOC", "XLSX", "PPTX", "JPG", "TXT"];

export const STARRED_DOCUMENTS_STATS_MOCK = {
  total: 16,
  label: "Total Starred Documents",
  sub: "Documents you starred",
};

export const STARRED_DOCUMENTS_STORAGE_MOCK = {
  totalLabel: "10 GB",
  breakdown: [
    { label: "Used", valueLabel: "1.38 GB", value: 1.38, pct: 13.8, color: "#16A34A" },
    { label: "Available", valueLabel: "8.62 GB", value: 8.62, pct: 86.2, color: "#E5E7EB" },
  ],
};

const STARRED_DOCUMENTS_SEED = [
  {
    id: "STR-1001", documentName: "Hall Booking Guidelines.pdf", folder: "Facility Booking", fileType: "PDF", starred: true,
    activityOnLabel: "Starred On", activityByLabel: "Starred By",
    activityOn: "2026-05-28T10:30:00", activityByName: "Thomas Cherian", activityByRole: "Administrator",
    detail: {
      category: "Guidelines", fileSize: "1.24 MB", pages: 14,
      createdOn: "2026-04-15T09:15:00", createdByName: "Thomas Cherian", createdByRole: "Administrator",
      lastModifiedOn: "2026-05-20T16:22:00", lastModifiedByName: "Thomas Cherian", lastModifiedByRole: "Administrator",
      description: "Guidelines and rules for booking the church hall including terms, charges and responsibilities.",
      tags: ["guidelines", "booking", "hall", "rules"],
      status: "Active", accessLevel: "View & Download", allowedFor: "All Users", permissions: "View, Download, Share",
      expiresOn: "2026-06-28T23:59:00",
    },
  },
  {
    id: "STR-1002", documentName: "Baptism Registration Form.docx", folder: "Sacramental Records", fileType: "DOCX", starred: true,
    activityOnLabel: "Starred On", activityByLabel: "Starred By",
    activityOn: "2026-05-27T15:15:00", activityByName: "Sarah Mathew", activityByRole: "Parish Secretary",
    detail: {
      category: "Forms", fileSize: "245 KB", pages: 2,
      createdOn: "2026-03-10T10:00:00", createdByName: "Sarah Mathew", createdByRole: "Parish Secretary",
      lastModifiedOn: "2026-05-27T15:15:00", lastModifiedByName: "Sarah Mathew", lastModifiedByRole: "Parish Secretary",
      description: "Standard registration form used for recording infant and adult baptisms.",
      tags: ["baptism", "form", "sacrament"],
      status: "Active", accessLevel: "View & Download", allowedFor: "All Users", permissions: "View, Download",
      expiresOn: null,
    },
  },
  {
    id: "STR-1003", documentName: "April 2026 - Income Report.xlsx", folder: "Finance & Accounting", fileType: "XLSX", starred: true,
    activityOnLabel: "Starred On", activityByLabel: "Starred By",
    activityOn: "2026-05-26T11:45:00", activityByName: "David Christopher", activityByRole: "Finance Manager",
    detail: {
      category: "Reports", fileSize: "512 KB", pages: 6,
      createdOn: "2026-05-01T09:00:00", createdByName: "David Christopher", createdByRole: "Finance Manager",
      lastModifiedOn: "2026-05-26T11:45:00", lastModifiedByName: "David Christopher", lastModifiedByRole: "Finance Manager",
      description: "Monthly income and expense summary for April 2026.",
      tags: ["finance", "report", "income"],
      status: "Active", accessLevel: "View Only", allowedFor: "Parish Office", permissions: "View Only",
      expiresOn: null,
    },
  },
  {
    id: "STR-1004", documentName: "Children Sunday School Plan.pptx", folder: "Sunday School", fileType: "PPTX", starred: true,
    activityOnLabel: "Starred On", activityByLabel: "Starred By",
    activityOn: "2026-05-25T09:20:00", activityByName: "Anita Rajan", activityByRole: "Sunday School Teacher",
    detail: {
      category: "Presentation", fileSize: "3.4 MB", pages: 22,
      createdOn: "2026-05-18T10:00:00", createdByName: "Anita Rajan", createdByRole: "Sunday School Teacher",
      lastModifiedOn: "2026-05-25T09:20:00", lastModifiedByName: "Anita Rajan", lastModifiedByRole: "Sunday School Teacher",
      description: "Presentation plan for May month Sunday School sessions.",
      tags: ["sunday-school", "plan", "presentation"],
      status: "Active", accessLevel: "View & Download", allowedFor: "Sunday School Teachers", permissions: "View, Download",
      expiresOn: null,
    },
  },
  {
    id: "STR-1005", documentName: "Church Interior.jpg", folder: "Gallery", fileType: "JPG", starred: true,
    activityOnLabel: "Starred On", activityByLabel: "Starred By",
    activityOn: "2026-05-24T14:10:00", activityByName: "John Baptiste", activityByRole: "Staff",
    detail: {
      category: "Images", fileSize: "2.1 MB", pages: 1,
      createdOn: "2026-04-02T12:00:00", createdByName: "John Baptiste", createdByRole: "Staff",
      lastModifiedOn: "2026-05-24T14:10:00", lastModifiedByName: "John Baptiste", lastModifiedByRole: "Staff",
      description: "Renovation reference image of the church interior.",
      tags: ["gallery", "interior", "renovation"],
      status: "Active", accessLevel: "View Only", allowedFor: "All Users", permissions: "View Only",
      expiresOn: null,
    },
  },
  {
    id: "STR-1006", documentName: "Membership Application.pdf", folder: "Member Management", fileType: "PDF", starred: true,
    activityOnLabel: "Starred On", activityByLabel: "Starred By",
    activityOn: "2026-05-24T10:05:00", activityByName: "Parish Office", activityByRole: "Administrator",
    detail: {
      category: "Forms", fileSize: "310 KB", pages: 3,
      createdOn: "2026-02-14T09:30:00", createdByName: "Parish Office", createdByRole: "Administrator",
      lastModifiedOn: "2026-05-24T10:05:00", lastModifiedByName: "Parish Office", lastModifiedByRole: "Administrator",
      description: "Application form used for new church membership registration.",
      tags: ["membership", "application", "form"],
      status: "Active", accessLevel: "View & Download", allowedFor: "All Users", permissions: "View, Download",
      expiresOn: null,
    },
  },
  {
    id: "STR-1007", documentName: "Volunteer Guidelines.doc", folder: "Volunteer Management", fileType: "DOC", starred: true,
    activityOnLabel: "Starred On", activityByLabel: "Starred By",
    activityOn: "2026-05-23T16:40:00", activityByName: "Thomas Cherian", activityByRole: "Volunteer Coordinator",
    detail: {
      category: "Guidelines", fileSize: "198 KB", pages: 5,
      createdOn: "2026-01-20T09:00:00", createdByName: "Thomas Cherian", createdByRole: "Volunteer Coordinator",
      lastModifiedOn: "2026-05-23T16:40:00", lastModifiedByName: "Thomas Cherian", lastModifiedByRole: "Volunteer Coordinator",
      description: "Guidelines and code of conduct for church volunteers.",
      tags: ["volunteer", "guidelines"],
      status: "Active", accessLevel: "View & Download", allowedFor: "Volunteer Management Team", permissions: "View, Download",
      expiresOn: null,
    },
  },
  {
    id: "STR-1008", documentName: "Event Schedule - May.txt", folder: "Communication Module", fileType: "TXT", starred: true,
    activityOnLabel: "Starred On", activityByLabel: "Starred By",
    activityOn: "2026-05-22T11:30:00", activityByName: "Sarah Mathew", activityByRole: "Parish Secretary",
    detail: {
      category: "Schedule", fileSize: "12 KB", pages: 1,
      createdOn: "2026-05-01T08:00:00", createdByName: "Sarah Mathew", createdByRole: "Parish Secretary",
      lastModifiedOn: "2026-05-22T11:30:00", lastModifiedByName: "Sarah Mathew", lastModifiedByRole: "Parish Secretary",
      description: "Upcoming events schedule for the month of May.",
      tags: ["events", "schedule"],
      status: "Active", accessLevel: "View Only", allowedFor: "All Users", permissions: "View Only",
      expiresOn: null,
    },
  },
];

export const STARRED_DOCUMENTS_LIST_MOCK = Array.from({ length: 16 }, (_, i) => {
  const base = STARRED_DOCUMENTS_SEED[i % STARRED_DOCUMENTS_SEED.length];
  return { ...base, id: `${base.id}-${i + 1}` };
});

export function buildStarredDocumentDetailMock(id) {
  const base = STARRED_DOCUMENTS_SEED.find((d) => id?.startsWith(d.id)) ?? STARRED_DOCUMENTS_SEED[0];
  return { ...base, id };
}
