export const BURIAL_STATUS_OPTIONS = ["Completed", "Scheduled", "Pending"];
export const BURIAL_STATUS_VARIANT = {
  Completed: "success",
  Scheduled: "info",
  Pending: "warning",
};

export const PLOT_STATUS_OPTIONS = ["Occupied", "Available", "Reserved", "Maintenance Due"];
export const PLOT_STATUS_VARIANT = {
  Occupied: "success",
  Available: "default",
  Reserved: "warning",
  "Maintenance Due": "danger",
};
export const PLOT_STATUS_TABS = ["All Plots", "Available", "Occupied", "Reserved", "Maintenance Due"];

export const PLOT_TYPE_OPTIONS = ["Single Plot", "Double Plot", "Family Plot", "Niche"];
export const PLOT_TYPE_SHORT_OPTIONS = ["Single", "Double", "Family Plot", "Mausoleum"];
export const SECTION_OPTIONS = ["Section A", "Section B", "Section C", "Section D", "Section E"];
export const PLOT_CATEGORY_OPTIONS = ["Standard", "Premium", "VIP"];
export const AVAILABILITY_OPTIONS = ["Available", "Reserved", "Occupied", "Under Maintenance"];
export const PATHWAY_ACCESS_OPTIONS = ["Yes", "No"];

export const PLOT_TYPE_GUIDE = [
  { label: "Single", description: "Standard plot for one burial." },
  { label: "Double", description: "Larger plot for two burials." },
  { label: "Family Plot", description: "Reserved plot for multiple family burials." },
  { label: "Mausoleum", description: "Enclosed above-ground burial structure." },
];

export const GENDER_OPTIONS = ["Male", "Female", "Other"];
export const MARITAL_STATUS_OPTIONS = ["Single", "Married", "Widowed", "Divorced"];
export const AREA_ZONE_OPTIONS = ["North Zone", "South Zone", "East Zone", "West Zone"];
export const SERVICE_TYPE_OPTIONS = ["Burial Service", "Memorial Service", "Committal Service"];
export const RECORDED_BY_OPTIONS = ["Parish Office", "Rev. Michael", "Church Secretary"];
export const RELATIONSHIP_OPTIONS = ["Spouse", "Son", "Daughter", "Father", "Mother", "Sibling", "Other"];
export const BURIAL_TYPE_OPTIONS = ["Single", "Double", "Family"];

export const CEMETERY_OVERVIEW_DONUT_MOCK = {
  total: 512,
  breakdown: [
    { label: "Occupied", count: 328, pct: 64.1, color: "#DC2626" },
    { label: "Available", count: 184, pct: 35.9, color: "#16A34A" },
  ],
};

export const PLOTS_OCCUPANCY_DONUT_MOCK = {
  total: 512,
  breakdown: [
    { label: "Occupied", count: 328, pct: 64.1, color: "#16A34A" },
    { label: "Available", count: 184, pct: 35.9, color: "#6366F1" },
    { label: "Reserved", count: 36, pct: 7.0, color: "#F97316" },
  ],
};

export function buildSectionAvailabilityDonutMock(section) {
  return {
    section,
    total: 120,
    breakdown: [
      { label: "Occupied", count: 68, pct: 56.7, color: "#16A34A" },
      { label: "Available", count: 40, pct: 33.3, color: "#6366F1" },
      { label: "Reserved", count: 12, pct: 10.0, color: "#F97316" },
    ],
  };
}

export const BURIALS_BY_YEAR_MOCK = [
  { label: "2022", count: 22 },
  { label: "2023", count: 28 },
  { label: "2024", count: 31 },
  { label: "2025", count: 34 },
  { label: "2026", count: 18, highlighted: true },
];

export const PLOTS_BY_SECTION_MOCK = [
  { label: "Section A", count: 120 },
  { label: "Section B", count: 110 },
  { label: "Section C", count: 100 },
  { label: "Section D", count: 100 },
  { label: "Section E", count: 82 },
];

export const SECTION_SUMMARY_MOCK = [
  { section: "Section A", total: 120, occupied: 68, available: 40, reserved: 12 },
  { section: "Section B", total: 110, occupied: 72, available: 30, reserved: 8 },
  { section: "Section C", total: 100, occupied: 58, available: 34, reserved: 8 },
  { section: "Section D", total: 100, occupied: 66, available: 28, reserved: 6 },
  { section: "Section E", total: 82, occupied: 64, available: 24, reserved: 2 },
];

export const PLOT_MAP_LEGEND = [
  { label: "Occupied", status: "Occupied", color: "#16A34A" },
  { label: "Available", status: "Available", color: "#3B82F6" },
  { label: "Reserved", status: "Reserved", color: "#F97316" },
  { label: "Maintenance Due", status: "Maintenance Due", color: "#EF4444" },
  { label: "Mausoleum", status: "Mausoleum", color: "#9CA3AF" },
];

export const PLOT_MAP_OVERVIEW_DONUT_MOCK = {
  total: 512,
  breakdown: [
    { label: "Occupied", count: 328, pct: 64.1, color: "#16A34A" },
    { label: "Available", count: 184, pct: 35.9, color: "#3B82F6" },
    { label: "Reserved", count: 36, pct: 7.0, color: "#F97316" },
    { label: "Maintenance Due", count: 12, pct: 2.3, color: "#EF4444" },
    { label: "Mausoleum", count: 8, pct: 1.6, color: "#9CA3AF" },
  ],
};

export const PLOT_MAP_SECTIONS = ["Section A", "Section B", "Section C", "Section D", "Section E"];

// Section A is the only section with an exact mockup layout; the map for any
// other selected section falls back to a plain, mostly-unhighlighted grid of
// the same shape, generated in the component, since only Section A's plot
// coloring was supplied.
export const SECTION_A_PLOT_MAP_MOCK = {
  section: "Section A",
  columns: 15,
  rowGroups: [
    { rows: [1, 2, 3] },
    { pathway: true },
    { rows: [4, 5, 6] },
  ],
  highlights: {
    "A-03": "Occupied", "A-06": "Available", "A-08": "Reserved", "A-12": "Occupied",
    "A-17": "Occupied", "A-21": "Available", "A-25": "Maintenance Due", "A-28": "Occupied",
    "A-33": "Occupied", "A-37": "Available", "A-43": "Reserved",
    "A-47": "Available", "A-50": "Occupied", "A-56": "Reserved",
    "A-63": "Occupied", "A-66": "Available", "A-71": "Maintenance Due",
    "A-79": "Reserved", "A-83": "Occupied", "A-89": "Occupied",
  },
};

export const MAINTENANCE_REMINDERS_MOCK = [
  {
    id: "mr-1",
    title: "12 plots",
    description: "Maintenance due in next 30 days",
  },
  {
    id: "mr-2",
    title: "8 plots",
    description: "Maintenance overdue",
  },
];

export const RECENT_DOCUMENTS_MOCK = [
  { id: "doc-1", name: "Cemetery Rules & Guidelines", fileType: "PDF", updatedOn: "2026-04-10" },
  { id: "doc-2", name: "Burial Application Form", fileType: "DOCX", updatedOn: "2026-04-05" },
  { id: "doc-3", name: "Plot Transfer Request Form", fileType: "PDF", updatedOn: "2026-03-28" },
];

const BURIAL_RECORDS_SEED = [
  {
    id: "bur-2026-018",
    recordNumber: "BUR-2026-018",
    deceasedName: "Mr. Samuel John",
    ageAtDeath: 76,
    dateOfBurial: "2026-05-24",
    plotNumber: "A-12",
    section: "Section A",
    recordedBy: "Parish Office",
    status: "Completed",
    familyContact: "Ruth John",
  },
  {
    id: "bur-2026-017",
    recordNumber: "BUR-2026-017",
    deceasedName: "Mrs. Mary Elizabeth",
    ageAtDeath: 82,
    dateOfBurial: "2026-05-22",
    plotNumber: "B-07",
    section: "Section B",
    recordedBy: "Parish Office",
    status: "Completed",
    familyContact: "David Thomas",
  },
  {
    id: "bur-2026-016",
    recordNumber: "BUR-2026-016",
    deceasedName: "Mr. Thomas Mathew",
    ageAtDeath: 69,
    dateOfBurial: "2026-05-20",
    plotNumber: "C-15",
    section: "Section C",
    recordedBy: "Parish Office",
    status: "Completed",
    familyContact: "Mary Mathew",
  },
  {
    id: "bur-2026-015",
    recordNumber: "BUR-2026-015",
    deceasedName: "Mrs. Lily Grace",
    ageAtDeath: 74,
    dateOfBurial: "2026-05-18",
    plotNumber: "A-03",
    section: "Section A",
    recordedBy: "Parish Office",
    status: "Completed",
    familyContact: "John George",
  },
  {
    id: "bur-2026-014",
    recordNumber: "BUR-2026-014",
    deceasedName: "Mr. Daniel Abraham",
    ageAtDeath: 61,
    dateOfBurial: "2026-05-15",
    plotNumber: "D-09",
    section: "Section D",
    recordedBy: "Parish Office",
    status: "Completed",
    familyContact: "Anna Varghese",
  },
];

export const BURIAL_RECORDS_LIST_MOCK = Array.from({ length: 18 }, (_, i) => {
  const seed = BURIAL_RECORDS_SEED[i % BURIAL_RECORDS_SEED.length];
  const suffix = i < BURIAL_RECORDS_SEED.length ? "" : `-${i + 1}`;
  return {
    ...seed,
    id: `${seed.id}${suffix}`,
    recordNumber: i < BURIAL_RECORDS_SEED.length ? seed.recordNumber : `BUR-2026-${String(18 - i).padStart(3, "0")}`,
  };
});

export const BURIAL_DETAIL_MOCK = {
  id: "bur-2026-018",
  recordNumber: "BUR-2026-018",
  status: "Completed",
  createdOn: "2026-05-24T11:15:00",
  updatedOn: "2026-05-24T11:15:00",
  photoUrl: null,
  deceased: {
    fullName: "Mr. Samuel John",
    dateOfBirth: "1950-05-10",
    dateOfDeath: "2026-05-22",
    ageAtDeath: 76,
    gender: "Male",
    maritalStatus: "Married",
    nationality: "Indian",
    occupation: "Retired Teacher",
    placeOfDeath: "",
    causeOfDeath: "",
  },
  burial: {
    dateOfBurial: "2026-05-24",
    timeOfBurial: "10:30 AM",
    plotNumber: "A-12",
    section: "Section A",
    burialType: "Single",
    recordedBy: "Parish Office",
    serviceType: "Burial Service",
    remarks: "",
  },
  plot: {
    plotNumber: "A-12",
    section: "Section A",
    row: "3",
    graveNumber: "12",
    area: "North Zone",
  },
  familyContacts: [
    { id: "fc-1", relation: "Spouse", name: "Mrs. Mary John", relationshipWithDeceased: "Spouse", phone: "", email: "" },
    { id: "fc-2", relation: "Son", name: "Mr. John Samuel", relationshipWithDeceased: "Son", phone: "+91 98765 43210", email: "" },
    { id: "fc-3", relation: "Daughter", name: "Mrs. Susan John", relationshipWithDeceased: "Daughter", phone: "+91 91234 56789", email: "" },
  ],
  address: "12, Church Road, Nagercoil, Tamil Nadu - 629001, India",
  email: "johnsamuel@gmail.com",
  documents: [
    { id: "doc-b18-1", name: "Burial Application Form", fileType: "PDF", sizeLabel: "245 KB" },
    { id: "doc-b18-2", name: "Death Certificate", fileType: "PDF", sizeLabel: "180 KB" },
    { id: "doc-b18-3", name: "Permission Letter", fileType: "PDF", sizeLabel: "120 KB" },
    { id: "doc-b18-4", name: "Burial Service Sheet", fileType: "PDF", sizeLabel: "210 KB" },
  ],
  plotMap: {
    columns: ["9", "10", "11", "12", "13"],
    rows: [
      { label: "A", cells: ["A-9", "A-10", "A-11", "A-12", "A-13"] },
      { label: "B", cells: ["B-9", "B-10", "B-11", "B-12", "B-13"] },
      { label: "C", cells: ["C-9", "C-10", "C-11", "C-12", "C-13"] },
    ],
    current: "A-12",
  },
};

export function buildBurialDetailMock(id) {
  const seed = BURIAL_RECORDS_LIST_MOCK.find((r) => r.id === id);
  if (!seed) return { ...BURIAL_DETAIL_MOCK, id };
  return {
    ...BURIAL_DETAIL_MOCK,
    id: seed.id,
    recordNumber: seed.recordNumber,
    status: seed.status,
    deceased: { ...BURIAL_DETAIL_MOCK.deceased, fullName: seed.deceasedName, ageAtDeath: seed.ageAtDeath },
    burial: {
      ...BURIAL_DETAIL_MOCK.burial,
      dateOfBurial: seed.dateOfBurial,
      plotNumber: seed.plotNumber,
      section: seed.section,
      recordedBy: seed.recordedBy,
    },
    plot: { ...BURIAL_DETAIL_MOCK.plot, plotNumber: seed.plotNumber, section: seed.section },
  };
}

export const NEW_BURIAL_RECORD_DEFAULTS = {
  fullName: "",
  dateOfDeath: "",
  dateOfBirth: "",
  ageAtDeath: "",
  gender: "",
  maritalStatus: "",
  nationality: "",
  occupation: "",
  placeOfDeath: "",
  causeOfDeath: "",
  section: "",
  plotNumber: "",
  row: "",
  graveNumber: "",
  areaZone: "",
  burialDate: "",
  burialTime: "",
  serviceType: "",
  recordedBy: "",
  remarks: "",
  contactName: "",
  relationship: "",
  contactPhone: "",
  contactEmail: "",
  contactAddress: "",
};

const PLOTS_SEED = [
  { id: "plot-a12", plotNumber: "A-12", section: "Section A", row: "3", graveNumber: "12", plotType: "Single", status: "Occupied", assignedTo: { name: "Mr. Samuel John", refId: "BUR-2026-018" }, lastUpdated: "2026-05-24" },
  { id: "plot-a13", plotNumber: "A-13", section: "Section A", row: "3", graveNumber: "13", plotType: "Single", status: "Available", assignedTo: null, lastUpdated: "2026-05-20" },
  { id: "plot-b07", plotNumber: "B-07", section: "Section B", row: "2", graveNumber: "07", plotType: "Single", status: "Reserved", assignedTo: { name: "Mrs. Lily Grace", refId: "RES-2026-009" }, lastUpdated: "2026-05-19" },
  { id: "plot-b08", plotNumber: "B-08", section: "Section B", row: "2", graveNumber: "08", plotType: "Double", status: "Occupied", assignedTo: { name: "Mrs. Mary Elizabeth", refId: "BUR-2026-017" }, lastUpdated: "2026-05-22" },
  { id: "plot-c15", plotNumber: "C-15", section: "Section C", row: "1", graveNumber: "15", plotType: "Single", status: "Available", assignedTo: null, lastUpdated: "2026-05-18" },
  { id: "plot-c16", plotNumber: "C-16", section: "Section C", row: "1", graveNumber: "16", plotType: "Single", status: "Maintenance Due", assignedTo: null, lastUpdated: "2026-05-16" },
  { id: "plot-d03", plotNumber: "D-03", section: "Section D", row: "4", graveNumber: "03", plotType: "Single", status: "Available", assignedTo: null, lastUpdated: "2026-05-15" },
  { id: "plot-d09", plotNumber: "D-09", section: "Section D", row: "4", graveNumber: "09", plotType: "Double", status: "Occupied", assignedTo: { name: "Mr. Daniel Abraham", refId: "BUR-2026-014" }, lastUpdated: "2026-05-15" },
  { id: "plot-e01", plotNumber: "E-01", section: "Section E", row: "5", graveNumber: "01", plotType: "Single", status: "Reserved", assignedTo: { name: "Mr. Thomas Mathew", refId: "RES-2026-006" }, lastUpdated: "2026-05-14" },
  { id: "plot-e02", plotNumber: "E-02", section: "Section E", row: "5", graveNumber: "02", plotType: "Single", status: "Available", assignedTo: null, lastUpdated: "2026-05-14" },
];

export const PLOTS_LIST_MOCK = Array.from({ length: 512 }, (_, i) => {
  const seed = PLOTS_SEED[i % PLOTS_SEED.length];
  return {
    ...seed,
    id: `${seed.id}-${i + 1}`,
    plotNumber: i < PLOTS_SEED.length ? seed.plotNumber : `${seed.section.slice(-1)}-${String(100 + i).slice(-3)}`,
  };
});

export const NEW_PLOT_DEFAULTS = {
  section: "",
  row: "",
  graveNumber: "",
  plotType: "",
  length: "",
  width: "",
  depth: "",
  area: "",
  areaZone: "",
  status: "",
  availability: "",
  category: "",
  maintenanceFee: "",
  assignedTo: "",
  remarks: "",
  block: "",
  pathwayAccess: "",
  landmark: "",
  gpsLocation: "",
};

export const PLOT_DETAIL_MOCK = {
  id: "plot-a12-1",
  plotNumber: "A-12",
  section: "Section A",
  row: "3",
  graveNumber: "12",
  plotType: "Single",
  areaZone: "North Zone",
  status: "Occupied",
  dimensions: "2.4 ft x 7.0 ft",
  depth: "6.5 ft",
  createdOn: "2020-01-15T10:30:00",
  updatedOn: "2026-05-24T11:15:00",
  createdBy: "Parish Office",
  remarks: "",
  block: "A",
  pathwayAccess: "Yes",
  assignedTo: { name: "Mr. Samuel John", refId: "BUR-2026-018" },
  burial: {
    deceasedName: "Mr. Samuel John",
    ageAtDeath: 76,
    burialRecordId: "BUR-2026-018",
    gender: "Male",
    dateOfDeath: "2026-05-20",
    maritalStatus: "Married",
    dateOfBurial: "2026-05-24",
    nationality: "Indian",
    timeOfBurial: "10:30 AM",
    occupation: "Retired Teacher",
    recordedBy: "Parish Office",
    funeralConductedBy: "Rev. Michael",
    serviceType: "Burial Service",
  },
  familyContact: {
    name: "Mr. John Samuel",
    relation: "Son",
    phone: "+91 98765 43210",
    email: "johnsamuel@gmail.com",
    address: "12, Church Road, Nagercoil, Tamil Nadu - 629001, India",
  },
  documents: [
    { id: "pdoc-1", name: "Plot Allotment Letter", fileType: "PDF", sizeLabel: "245 KB" },
    { id: "pdoc-2", name: "Section Layout Map", fileType: "PDF", sizeLabel: "320 KB" },
    { id: "pdoc-3", name: "Burial Record", fileType: "PDF", sizeLabel: "210 KB" },
  ],
  plotMap: {
    columns: ["9", "10", "11", "12", "13"],
    rows: [
      { label: "1", cells: ["A-09", "A-10", "A-11", "A-12", "A-13"], cellStatus: ["Available", "Available", "Available", "Occupied", "Available"] },
      { label: "2", cells: ["A-09", "A-10", "A-11", "A-12", "A-13"], cellStatus: ["Available", "Available", "Available", "Occupied", "Available"] },
      { label: "3", cells: ["A-09", "A-10", "A-11", "A-12", "A-13"], cellStatus: ["Available", "Available", "Available", "Occupied", "Reserved"] },
      { label: "4", cells: ["A-09", "A-10", "A-11", "A-12", "A-13"], cellStatus: ["Available", "Available", "Available", "Occupied", "Available"] },
    ],
    current: "A-12",
  },
};

export function buildPlotDetailMock(id) {
  const seed = PLOTS_LIST_MOCK.find((p) => p.id === id);
  if (!seed) return { ...PLOT_DETAIL_MOCK, id };
  return {
    ...PLOT_DETAIL_MOCK,
    id: seed.id,
    plotNumber: seed.plotNumber,
    section: seed.section,
    row: seed.row,
    graveNumber: seed.graveNumber,
    plotType: seed.plotType,
    status: seed.status,
    assignedTo: seed.assignedTo,
    updatedOn: seed.lastUpdated,
  };
}
