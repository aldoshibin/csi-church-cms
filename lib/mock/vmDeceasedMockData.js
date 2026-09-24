export const DECEASED_STATUS_OPTIONS = ["Buried", "Pending"];
export const DECEASED_STATUS_VARIANT = {
  Buried: "success",
  Pending: "warning",
};

export const GENDER_OPTIONS = ["Male", "Female", "Other"];
export const NATIONALITY_OPTIONS = ["Indian", "Other"];
export const MARITAL_STATUS_OPTIONS = ["Single", "Married", "Widowed", "Divorced"];
export const PLACE_OF_BURIAL_OPTIONS = ["CSI St. John's Church Cemetery"];
export const PLOT_TYPE_OPTIONS = ["Single", "Double", "Family Plot", "Mausoleum"];

export const GENDER_DISTRIBUTION_DONUT_MOCK = {
  total: 512,
  breakdown: [
    { label: "Male", count: 276, pct: 53.9, color: "#3B82F6" },
    { label: "Female", count: 236, pct: 46.1, color: "#EC4899" },
  ],
};

export const DECEASED_RECORDS_BY_YEAR_MOCK = [
  { label: "2022", count: 98 },
  { label: "2023", count: 112 },
  { label: "2024", count: 126 },
  { label: "2025", count: 108 },
  { label: "2026 (2026 - YTD)", count: 68, highlighted: true },
];

const DECEASED_SEED = [
  { id: "dec-512", recordId: "DEC-512", fullName: "Mr. Samuel John", gender: "Male", dateOfDeath: "2026-05-20", ageAtDeath: 76, burialRecordId: "BUR-2026-018", section: "Section A", plotNumber: "A-12", dateOfBurial: "2026-05-24", status: "Buried" },
  { id: "dec-511", recordId: "DEC-511", fullName: "Mrs. Mary Elizabeth", gender: "Female", dateOfDeath: "2026-05-18", ageAtDeath: 69, burialRecordId: "BUR-2026-017", section: "Section B", plotNumber: "B-08", dateOfBurial: "2026-05-22", status: "Buried" },
  { id: "dec-510", recordId: "DEC-510", fullName: "Mr. Daniel Abraham", gender: "Male", dateOfDeath: "2026-05-15", ageAtDeath: 82, burialRecordId: "BUR-2026-014", section: "Section D", plotNumber: "D-09", dateOfBurial: "2026-05-15", status: "Buried" },
  { id: "dec-509", recordId: "DEC-509", fullName: "Mr. Thomas Mathew", gender: "Male", dateOfDeath: "2026-05-14", ageAtDeath: 71, burialRecordId: "BUR-2026-006", section: "Section E", plotNumber: "E-01", dateOfBurial: "2026-05-14", status: "Buried" },
  { id: "dec-508", recordId: "DEC-508", fullName: "Mrs. Lily Grace", gender: "Female", dateOfDeath: "2026-05-12", ageAtDeath: 64, burialRecordId: "BUR-2026-009", section: "Section A", plotNumber: "A-25", dateOfBurial: "2026-05-19", status: "Pending" },
  { id: "dec-507", recordId: "DEC-507", fullName: "Mr. George Philip", gender: "Male", dateOfDeath: "2026-05-10", ageAtDeath: 78, burialRecordId: "BUR-2026-012", section: "Section C", plotNumber: "C-15", dateOfBurial: "2026-05-18", status: "Buried" },
  { id: "dec-506", recordId: "DEC-506", fullName: "Mrs. Annamma Varghese", gender: "Female", dateOfDeath: "2026-05-08", ageAtDeath: 73, burialRecordId: "BUR-2026-010", section: "Section B", plotNumber: "B-07", dateOfBurial: "2026-05-17", status: "Buried" },
  { id: "dec-505", recordId: "DEC-505", fullName: "Mr. Joseph Peter", gender: "Male", dateOfDeath: "2026-05-05", ageAtDeath: 65, burialRecordId: "BUR-2026-011", section: "Section D", plotNumber: "D-03", dateOfBurial: "2026-05-16", status: "Buried" },
  { id: "dec-504", recordId: "DEC-504", fullName: "Mrs. Sarah Thomas", gender: "Female", dateOfDeath: "2026-05-02", ageAtDeath: 81, burialRecordId: "BUR-2026-008", section: "Section C", plotNumber: "C-16", dateOfBurial: "2026-05-12", status: "Pending" },
  { id: "dec-503", recordId: "DEC-503", fullName: "Mr. Robert Mathew", gender: "Male", dateOfDeath: "2026-04-30", ageAtDeath: 74, burialRecordId: "BUR-2026-007", section: "Section E", plotNumber: "E-02", dateOfBurial: "2026-05-11", status: "Buried" },
];

export const DECEASED_RECORDS_LIST_MOCK = Array.from({ length: 512 }, (_, i) => {
  const seed = DECEASED_SEED[i % DECEASED_SEED.length];
  const suffix = i < DECEASED_SEED.length ? "" : `-${i + 1}`;
  return {
    ...seed,
    id: `${seed.id}${suffix}`,
    recordId: i < DECEASED_SEED.length ? seed.recordId : `DEC-${String(512 - i).padStart(3, "0")}`,
  };
});

export const DECEASED_DETAIL_MOCK = {
  id: "dec-512",
  recordId: "DEC-512",
  burialRecordId: "BUR-2026-018",
  status: "Buried",
  photoUrl: null,
  fullName: "Mr. Samuel John",
  gender: "Male",
  dateOfDeath: "2026-05-20",
  ageAtDeath: 76,
  dateOfBurial: "2026-05-24",
  section: "Section A",
  plotNumber: "A-12",
  personal: {
    fullName: "Mr. Samuel John",
    dateOfBirth: "1950-04-10",
    nationality: "Indian",
    fatherName: "Mr. John Abraham",
    motherName: "Mrs. Rebecca John",
    maritalStatus: "Married",
    spouseName: "Mrs. Rose Mary",
    numberOfChildren: 3,
    occupation: "Retired Teacher",
  },
  contact: {
    address: "12, Church Street, Mylapore, Chennai - 600 004, Tamil Nadu, India",
    phone: "+91 98765 43210",
    alternatePhone: "+91 91234 56789",
    email: "samuel.john@example.com",
  },
  burial: {
    placeOfBurial: "CSI St. John's Church Cemetery",
    plotType: "Single",
    priestPastor: "Rev. Michael",
    depth: "6 ft",
    remarks: "Rest in peace.",
    conductedBy: "Church Committee",
  },
  additional: {
    createdBy: "Parish Office",
    createdOn: "2026-05-20T10:30:00",
    updatedOn: "2026-05-24T11:45:00",
  },
};

export function buildDeceasedDetailMock(id) {
  const seed = DECEASED_RECORDS_LIST_MOCK.find((r) => r.id === id);
  if (!seed) return { ...DECEASED_DETAIL_MOCK, id };
  return {
    ...DECEASED_DETAIL_MOCK,
    id: seed.id,
    recordId: seed.recordId,
    burialRecordId: seed.burialRecordId,
    status: seed.status,
    fullName: seed.fullName,
    gender: seed.gender,
    dateOfDeath: seed.dateOfDeath,
    ageAtDeath: seed.ageAtDeath,
    dateOfBurial: seed.dateOfBurial,
    section: seed.section,
    plotNumber: seed.plotNumber,
    personal: { ...DECEASED_DETAIL_MOCK.personal, fullName: seed.fullName },
  };
}

export const NEW_DECEASED_DEFAULTS = {
  fullName: "",
  gender: "",
  dateOfBirth: "",
  dateOfDeath: "",
  ageAtDeath: "",
  nationality: "",
  maritalStatus: "",
  occupation: "",
  fatherName: "",
  motherName: "",
  spouseName: "",
  numberOfChildren: "",
  address: "",
  phone: "",
  alternatePhone: "",
  email: "",
  placeOfBurial: "",
  sectionPlot: "",
  plotType: "",
  depth: "",
  priestPastor: "",
  conductedBy: "",
  remarks: "",
};
