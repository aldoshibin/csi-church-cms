export const TRASH_TYPE_FILTER_OPTIONS = ["PDF", "DOCX", "DOC", "XLSX", "PPTX", "JPG", "TXT"];

export const TRASH_STORAGE_MOCK = {
  totalLabel: "10 GB",
  breakdown: [
    { label: "Used", valueLabel: "1.38 GB", value: 1.38, pct: 13.8, color: "#16A34A" },
    { label: "Other Documents", valueLabel: "8.62 GB", value: 8.62, pct: 86.2, color: "#E5E7EB" },
  ],
};

const TRASH_SEED = [
  { id: "TRS-1001", documentName: "Hall Booking Guidelines.pdf", originalFolder: "Facility Booking", fileType: "PDF", deletedOn: "2026-05-28T14:45:00", deletedByName: "Thomas Cherian", deletedByRole: "Administrator", size: "1.24 MB" },
  { id: "TRS-1002", documentName: "Baptism Registration Form.docx", originalFolder: "Sacramental Records", fileType: "DOCX", deletedOn: "2026-05-27T16:10:00", deletedByName: "Sarah Mathew", deletedByRole: "Parish Secretary", size: "256 KB" },
  { id: "TRS-1003", documentName: "April 2026 - Income Report.xlsx", originalFolder: "Finance & Accounting", fileType: "XLSX", deletedOn: "2026-05-26T13:15:00", deletedByName: "David Christopher", deletedByRole: "Finance Manager", size: "198 KB" },
  { id: "TRS-1004", documentName: "Children Sunday School Plan.pptx", originalFolder: "Sunday School", fileType: "PPTX", deletedOn: "2026-05-25T11:30:00", deletedByName: "Anita Rajan", deletedByRole: "Sunday School Teacher", size: "3.16 MB" },
  { id: "TRS-1005", documentName: "Church Interior.jpg", originalFolder: "Gallery", fileType: "JPG", deletedOn: "2026-05-24T15:20:00", deletedByName: "John Baptiste", deletedByRole: "Staff", size: "2.05 MB" },
  { id: "TRS-1006", documentName: "Membership Application.pdf", originalFolder: "Member Management", fileType: "PDF", deletedOn: "2026-05-24T11:15:00", deletedByName: "Parish Office", deletedByRole: "Administrator", size: "512 KB" },
  { id: "TRS-1007", documentName: "Volunteer Guidelines.doc", originalFolder: "Volunteer Management", fileType: "DOC", deletedOn: "2026-05-23T17:05:00", deletedByName: "Thomas Cherian", deletedByRole: "Volunteer Coordinator", size: "320 KB" },
  { id: "TRS-1008", documentName: "Event Schedule - May.txt", originalFolder: "Communication Module", fileType: "TXT", deletedOn: "2026-05-22T12:30:00", deletedByName: "Sarah Mathew", deletedByRole: "Parish Secretary", size: "1.12 KB" },
];

export const TRASH_LIST_MOCK = Array.from({ length: 12 }, (_, i) => {
  const base = TRASH_SEED[i % TRASH_SEED.length];
  return { ...base, id: `${base.id}-${i + 1}` };
});
