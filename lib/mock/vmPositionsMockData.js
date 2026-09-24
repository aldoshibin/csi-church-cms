export const POSITION_STATUS_FILTER_OPTIONS = ["Active", "Inactive"];

export const ELIGIBILITY_OPTIONS = [
  "Active Member (2+ years)",
  "Active Male Member (2+ years)",
  "Active Female Member (2+ years)",
  "Active Member (5+ years)",
  "Any Registered Member",
];

export const TERM_DURATION_OPTIONS = ["1 Year", "2 Years", "3 Years", "Lifetime"];

export const NEW_POSITION_DEFAULTS = {
  positionName: "",
  description: "",
  maxMembers: "",
  eligibility: "",
  termDuration: "",
  displayOrder: "",
  status: "Active",
  notes: "",
};

export const POSITION_GUIDELINES_MOCK = [
  "Position name should be clear and descriptive.",
  "Provide a detailed description of the role and responsibilities.",
  "Set appropriate eligibility criteria for the position.",
  "Maximum members should be more than 0.",
  "You can edit all details after creating the position.",
];

export const POSITIONS_QUICK_ACTIONS = [
  { key: "add", label: "Add New Position", description: "Create a new position", icon: "PlusCircle", href: "/election-management/positions/add" },
  { key: "manage", label: "Manage Positions", description: "Edit or delete positions", icon: "Pencil", href: "/election-management/positions" },
  { key: "elections", label: "View in Elections", description: "See positions in elections", icon: "Vote", href: "/election-management/elections" },
  { key: "export", label: "Export Positions", description: "Export positions list", icon: "Download", href: "#" },
];

export const POSITION_VIEW_QUICK_ACTIONS = [
  { key: "edit", label: "Edit Position", description: "Update position details", icon: "Pencil", href: "/election-management/positions" },
  { key: "elections", label: "View in Elections", description: "See position in elections", icon: "Users2", href: "/election-management/elections" },
  { key: "export", label: "Export Position", description: "Download position details", icon: "Download", href: "#" },
  { key: "deactivate", label: "Deactivate Position", description: "Mark position as inactive", icon: "Trash2", href: "#" },
];

export const POSITIONS_LIST_MOCK = [
  { id: "POS-1", name: "Chairperson", description: "Head of the Parish Committee", maxMembers: 1, eligibility: "Active Member (2+ years)", status: "Active" },
  { id: "POS-2", name: "Vice Chairperson", description: "Deputy to the Chairperson", maxMembers: 1, eligibility: "Active Member (2+ years)", status: "Active" },
  { id: "POS-3", name: "Secretary", description: "Responsible for committee records", maxMembers: 1, eligibility: "Active Member (2+ years)", status: "Active" },
  { id: "POS-4", name: "Treasurer", description: "Handles financial operations", maxMembers: 1, eligibility: "Active Member (2+ years)", status: "Active" },
  { id: "POS-5", name: "Committee Member (Male)", description: "General committee member (Male)", maxMembers: "Unlimited", eligibility: "Active Male Member (2+ years)", status: "Active" },
  { id: "POS-6", name: "Committee Member (Female)", description: "General committee member (Female)", maxMembers: "Unlimited", eligibility: "Active Female Member (2+ years)", status: "Active" },
];

export const POSITION_OVERVIEW_MOCK = {
  total: 6,
  breakdown: [
    { label: "Chairperson", value: 1, color: "#2563EB" },
    { label: "Vice Chairperson", value: 1, color: "#16A34A" },
    { label: "Secretary", value: 1, color: "#7C3AED" },
    { label: "Treasurer", value: 1, color: "#EA580C" },
    { label: "Members (M)", value: 1, color: "#D97706" },
    { label: "Members (F)", value: 1, color: "#C084FC" },
  ],
};

export const POSITIONS_NOTE_TEXT =
  "Positions define the roles available in elections. You can add, edit or delete positions as per the church requirements.";

const POSITION_DETAIL_SEED = {
  "POS-1": {
    id: "POS-1", name: "Chairperson", description: "Head of the Parish Committee",
    maxMembers: 1, eligibility: "Active Member (2+ years)", status: "Active",
    createdByName: "Parish Office (Admin)", createdOn: "2026-04-20T10:30:00", lastUpdated: "2026-05-24T14:15:00",
    responsibilities: [
      "Leads and chairs all committee meetings.",
      "Oversees the planning and execution of committee activities.",
      "Represents the committee in parish and external events.",
      "Works with the committee members to achieve parish goals.",
      "Ensures compliance with church policies and guidelines.",
    ],
    usedInElections: [
      { id: "ELEC-1001", name: "Parish Committee Election 2026", type: "Parish Committee", status: "Upcoming", electionDate: "2026-06-15" },
    ],
    currentHolder: {
      name: "John Mathew", membership: "Active Member (5+ years)",
      email: "john.mathew@example.com", phone: "+91 98765 43210", appointedOn: "2026-05-01",
    },
    history: [
      { id: "HIST-1", holderName: "John Mathew", from: "2026-05-01", to: "Present", duration: "24 days" },
    ],
    auditTrail: [
      { id: "AUD-1", title: "Position created", byName: "Parish Office (Admin)", on: "2026-04-20T10:30:00" },
      { id: "AUD-2", title: "Position updated", byName: "Parish Office (Admin)", on: "2026-05-10T11:45:00" },
      { id: "AUD-3", title: "Position assigned", byName: "Parish Office (Admin)", on: "2026-05-01T09:20:00" },
      { id: "AUD-4", title: "Status changed to Active", byName: "Parish Office (Admin)", on: "2026-05-01T09:20:00" },
    ],
  },
};

function genericPositionDetail(id) {
  const base = POSITIONS_LIST_MOCK.find((p) => p.id === id) ?? POSITIONS_LIST_MOCK[0];
  return {
    ...base,
    createdByName: "Parish Office (Admin)", createdOn: "2026-04-20T10:30:00", lastUpdated: "2026-05-24T14:15:00",
    responsibilities: [
      "Carries out the duties assigned to this position.",
      "Attends and participates in committee meetings.",
      "Reports progress to the Chairperson and Secretary.",
    ],
    usedInElections: [
      { id: "ELEC-1001", name: "Parish Committee Election 2026", type: "Parish Committee", status: "Upcoming", electionDate: "2026-06-15" },
    ],
    currentHolder: null,
    history: [],
    auditTrail: [
      { id: "AUD-1", title: "Position created", byName: "Parish Office (Admin)", on: "2026-04-20T10:30:00" },
    ],
  };
}

export function buildPositionDetailMock(id) {
  return POSITION_DETAIL_SEED[id] ?? genericPositionDetail(id);
}
