export const CANDIDATE_STATUS_OPTIONS = ["Approved", "Pending", "Rejected"];

export const CANDIDATE_STATUS_BADGE_MAP = {
  Approved: "success",
  Pending: "warning",
  Rejected: "danger",
};

export const GENDER_OPTIONS = ["Male", "Female", "Other"];

export const CANDIDATE_ELECTION_OPTIONS = ["Parish Committee Election 2026"];

export const CANDIDATE_POSITION_OPTIONS = [
  "Chairperson", "Vice Chairperson", "Secretary", "Treasurer", "Committee Member (Male)", "Committee Member (Female)",
];

export const CANDIDATE_ELIGIBILITY_OPTIONS = [
  "Active Member (2+ years)", "Active Male Member (2+ years)", "Active Female Member (2+ years)",
];

export const CANDIDATE_NOMINATOR_OPTIONS = [
  "Sarah Thomas", "James Varghese", "Thomas Philip", "Reena Mathew", "Joseph Daniel", "Alice Jacob",
];

// Position -> {maxMembers, termDuration}, used to auto-fill the Add form's
// read-only "Term Duration" / "Max Members for Position" fields once a
// position is selected.
export const CANDIDATE_POSITION_TERM_MAP = {
  "Chairperson": { maxMembers: 1, termDuration: "2026 - 2028 (2 years)" },
  "Vice Chairperson": { maxMembers: 1, termDuration: "2026 - 2028 (2 years)" },
  "Secretary": { maxMembers: 1, termDuration: "2026 - 2028 (2 years)" },
  "Treasurer": { maxMembers: 1, termDuration: "2026 - 2028 (2 years)" },
  "Committee Member (Male)": { maxMembers: "Unlimited", termDuration: "2026 - 2028 (2 years)" },
  "Committee Member (Female)": { maxMembers: "Unlimited", termDuration: "2026 - 2028 (2 years)" },
};

export const NEW_CANDIDATE_DEFAULTS = {
  fullName: "", email: "", phone: "", dateOfBirth: "", gender: "", address: "",
  memberSince: "", membershipNumber: "",
  election: "", position: "", eligibility: "", candidateStatus: "Active",
  nominatedBy: "", nominationDate: "", nominationTime: "",
  notes: "",
};

export const CANDIDATE_GUIDELINES_MOCK = [
  "Ensure all personal details are accurate.",
  "Candidate must be an active member of the church.",
  "Verify eligibility criteria before adding the candidate.",
  "A candidate can be nominated for one position at a time.",
  "All documents should be clear and valid.",
  "You can edit candidate details before approval.",
];

export const CANDIDATES_STATS_MOCK = {
  total: { value: 12, sub: "All elections" },
  approved: { value: 8, sub: "Ready for election" },
  pendingApproval: { value: 3, sub: "Awaiting review" },
  rejected: { value: 1, sub: "Not eligible" },
};

export const CANDIDATES_OVERVIEW_MOCK = {
  total: 12,
  breakdown: [
    { label: "Approved", value: 8, color: "#16A34A" },
    { label: "Pending Approval", value: 3, color: "#D97706" },
    { label: "Rejected", value: 1, color: "#DC2626" },
  ],
};

export const CANDIDATES_QUICK_ACTIONS = [
  { key: "add", label: "Add New Candidate", description: "Register a new candidate", icon: "PlusCircle", href: "/election-management/candidates/add" },
  { key: "nominations", label: "Manage Nominations", description: "Review and manage nominations", icon: "FileCheck2", href: "/election-management/nomination" },
  { key: "approve", label: "Approve Candidates", description: "Approve or reject candidates", icon: "UserCheck", href: "/election-management/candidates" },
  { key: "export", label: "Export Candidates", description: "Download candidates list", icon: "Download", href: "#" },
];

export const CANDIDATE_VIEW_QUICK_ACTIONS = [
  { key: "edit", label: "Edit Candidate", description: "Update candidate details", icon: "Pencil", href: "/election-management/candidates" },
  { key: "nominations", label: "Manage Nominations", description: "View and manage nominations", icon: "FileCheck2", href: "/election-management/nomination" },
  { key: "status", label: "Change Status", description: "Update candidate status", icon: "RefreshCcw", href: "#" },
  { key: "export", label: "Export Candidate", description: "Download candidate details", icon: "Download", href: "#" },
  { key: "delete", label: "Delete Candidate", description: "Remove candidate", icon: "Trash2", href: "#", danger: true },
];

export const CANDIDATES_NOTE_TEXT =
  "Review all candidate details, approve eligible nominations, and ensure compliance with election guidelines.";

export const CANDIDATES_LIST_MOCK = [
  { id: "CAND-1", name: "John Mathew", email: "john.mathew@example.com", phone: "+91 98765 43210", position: "Chairperson", election: "Parish Committee Election 2026", status: "Approved", nominatedBy: "Sarah Thomas", nominationDate: "2026-05-10T10:30:00" },
  { id: "CAND-2", name: "Mary Abraham", email: "mary.abraham@example.com", phone: "+91 87654 32109", position: "Vice Chairperson", election: "Parish Committee Election 2026", status: "Approved", nominatedBy: "James Varghese", nominationDate: "2026-05-10T11:15:00" },
  { id: "CAND-3", name: "Daniel Joseph", email: "daniel.joseph@example.com", phone: "+91 91234 56780", position: "Secretary", election: "Parish Committee Election 2026", status: "Pending", nominatedBy: "Thomas Philip", nominationDate: "2026-05-11T09:45:00" },
  { id: "CAND-4", name: "Anita Samuel", email: "anita.samuel@example.com", phone: "+91 99887 66554", position: "Treasurer", election: "Parish Committee Election 2026", status: "Approved", nominatedBy: "Reena Mathew", nominationDate: "2026-05-09T16:20:00" },
  { id: "CAND-5", name: "George Philip", email: "george.philip@example.com", phone: "+91 90000 11223", position: "Committee Member (Male)", election: "Parish Committee Election 2026", status: "Rejected", nominatedBy: "Joseph Daniel", nominationDate: "2026-05-08T14:10:00" },
  { id: "CAND-6", name: "Liza Varghese", email: "liza.varghese@example.com", phone: "+91 94455 66778", position: "Committee Member (Female)", election: "Parish Committee Election 2026", status: "Pending", nominatedBy: "Alice Jacob", nominationDate: "2026-05-11T13:05:00" },
  { id: "CAND-7", name: "Priya Nair", email: "priya.nair@example.com", phone: "+91 96677 88990", position: "Committee Member (Female)", election: "Parish Committee Election 2026", status: "Approved", nominatedBy: "Sarah Thomas", nominationDate: "2026-05-09T10:00:00" },
  { id: "CAND-8", name: "Vinod Thomas", email: "vinod.thomas@example.com", phone: "+91 93344 55667", position: "Committee Member (Male)", election: "Parish Committee Election 2026", status: "Approved", nominatedBy: "James Varghese", nominationDate: "2026-05-09T11:40:00" },
  { id: "CAND-9", name: "Susan Jacob", email: "susan.jacob@example.com", phone: "+91 92233 44556", position: "Committee Member (Female)", election: "Parish Committee Election 2026", status: "Approved", nominatedBy: "Thomas Philip", nominationDate: "2026-05-10T09:15:00" },
  { id: "CAND-10", name: "Alex Mathew", email: "alex.mathew@example.com", phone: "+91 91122 33445", position: "Committee Member (Male)", election: "Parish Committee Election 2026", status: "Approved", nominatedBy: "Reena Mathew", nominationDate: "2026-05-10T15:30:00" },
  { id: "CAND-11", name: "Kavitha Rajan", email: "kavitha.rajan@example.com", phone: "+91 90011 22334", position: "Committee Member (Female)", election: "Parish Committee Election 2026", status: "Approved", nominatedBy: "Joseph Daniel", nominationDate: "2026-05-11T10:50:00" },
  { id: "CAND-12", name: "Rohit Verma", email: "rohit.verma@example.com", phone: "+91 99900 11234", position: "Committee Member (Male)", election: "Parish Committee Election 2026", status: "Pending", nominatedBy: "Alice Jacob", nominationDate: "2026-05-11T16:00:00" },
];

const CANDIDATE_DETAIL_SEED = {
  "CAND-1": {
    id: "CAND-1", name: "John Mathew", email: "john.mathew@example.com", phone: "+91 98765 43210",
    dateOfBirth: "1985-05-15", gender: "Male",
    address: "12, Grace Avenue, Mylapore, Chennai - 600004, Tamil Nadu, India",
    memberSince: "2012-01-10", membershipNumber: "STJ-2012-0456",
    photo: "https://i.pravatar.cc/300?u=john.mathew@example.com",
    election: "Parish Committee Election 2026", position: "Chairperson", status: "Approved",
    nominatedBy: "Sarah Thomas", nominationDate: "2026-05-10T10:30:00",
    approvedOn: "2026-05-12T15:15:00", approvedByName: "Parish Office (Admin)",
    remarks: "Eligible and approved",
    positionDetails: {
      maxMembers: 1, eligibility: "Active Member (2+ years)", termDuration: "2026 - 2028 (2 years)",
      description: "Head of the Parish Committee. Responsible for leading meetings and overall administration.",
    },
    nominationSummary: { totalNominations: 5, validNominations: 5, withdrawn: 0, latestNomination: "2026-05-10T10:30:00" },
    bio: "John Mathew has been an active member of CSI St. John's Church for over 12 years. He has served in various ministries including the Sunday School, Youth Fellowship, and Volunteer Team. He is committed to serving the church community with integrity and dedication.",
    documents: [
      { id: "DOC-1", name: "Nomination Form.pdf", fileType: "PDF", uploadedOn: "2026-05-10T10:30:00" },
      { id: "DOC-2", name: "ID Proof (Aadhaar).pdf", fileType: "IMG", uploadedOn: "2026-05-10T10:32:00" },
      { id: "DOC-3", name: "Membership Certificate.pdf", fileType: "IMG", uploadedOn: "2026-05-10T10:33:00" },
    ],
    timeline: [
      { key: "nominated", label: "Nominated", state: "done", on: "2026-05-10T10:30:00", byName: "Sarah Thomas" },
      { key: "under-review", label: "Under Review", state: "current", on: "2026-05-11T14:45:00", byName: "Parish Office (Admin)" },
      { key: "approved", label: "Approved", state: "done", on: "2026-05-12T15:15:00", byName: "Parish Office (Admin)" },
    ],
  },
};

function genericCandidateDetail(id) {
  const base = CANDIDATES_LIST_MOCK.find((c) => c.id === id) ?? CANDIDATES_LIST_MOCK[0];
  const term = CANDIDATE_POSITION_TERM_MAP[base.position] ?? { maxMembers: 1, termDuration: "2026 - 2028 (2 years)" };
  return {
    ...base,
    dateOfBirth: "1990-01-01", gender: "Male",
    address: "Address on file with the parish office.",
    memberSince: "2015-01-01", membershipNumber: "STJ-2015-0000",
    photo: `https://i.pravatar.cc/300?u=${encodeURIComponent(base.email)}`,
    approvedOn: base.status === "Approved" ? base.nominationDate : null,
    approvedByName: base.status === "Approved" ? "Parish Office (Admin)" : null,
    remarks: base.status === "Rejected" ? "Did not meet eligibility criteria" : "Pending review",
    positionDetails: {
      maxMembers: term.maxMembers, eligibility: "Active Member (2+ years)", termDuration: term.termDuration,
      description: `Serves as ${base.position} for the ${base.election}.`,
    },
    nominationSummary: { totalNominations: 1, validNominations: base.status === "Rejected" ? 0 : 1, withdrawn: 0, latestNomination: base.nominationDate },
    bio: `${base.name} is a nominated candidate for ${base.position} in the ${base.election}.`,
    documents: [
      { id: "DOC-1", name: "Nomination Form.pdf", fileType: "PDF", uploadedOn: base.nominationDate },
    ],
    timeline: [
      { key: "nominated", label: "Nominated", state: "done", on: base.nominationDate, byName: base.nominatedBy },
      base.status === "Approved"
        ? { key: "approved", label: "Approved", state: "done", on: base.nominationDate, byName: "Parish Office (Admin)" }
        : base.status === "Rejected"
        ? { key: "rejected", label: "Rejected", state: "done", on: base.nominationDate, byName: "Parish Office (Admin)" }
        : { key: "under-review", label: "Under Review", state: "current", on: base.nominationDate, byName: "Parish Office (Admin)" },
    ],
  };
}

export function buildCandidateDetailMock(id) {
  return CANDIDATE_DETAIL_SEED[id] ?? genericCandidateDetail(id);
}
