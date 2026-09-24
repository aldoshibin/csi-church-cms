export const NOMINATION_STATUS_BADGE_MAP = {
  Approved: "success",
  Pending: "warning",
  Rejected: "danger",
};

export const NOMINATION_ELECTION_OPTIONS = ["Parish Committee Election 2026"];
export const NOMINATION_STATUS_OPTIONS = ["Approved", "Pending", "Rejected"];
export const NOMINATION_POSITION_OPTIONS = [
  "Secretary", "Treasurer", "Joint Secretary", "Finance Convenor", "Youth Representative", "Women's Representative", "Member",
];

export const NOMINATIONS_OVERVIEW_MOCK = {
  total: 18,
  breakdown: [
    { label: "Approved", value: 15, color: "#16A34A" },
    { label: "Pending", value: 2, color: "#D97706" },
    { label: "Rejected", value: 1, color: "#DC2626" },
  ],
};

export const NOMINATIONS_QUICK_ACTIONS = [
  { key: "add", label: "Add New Nomination", description: "Create a new nomination", icon: "PlusCircle", href: "#" },
  { key: "manage", label: "Manage Nominations", description: "Edit or review nominations", icon: "Pencil", href: "/election-management/nomination" },
  { key: "approve", label: "Approve Nominations", description: "Approve pending nominations", icon: "UserCheck", href: "#" },
  { key: "reject", label: "Reject Nominations", description: "Reject selected nominations", icon: "UserX", href: "#" },
  { key: "export", label: "Export Nominations", description: "Export nominations list", icon: "Download", href: "#" },
];

export const NOMINATION_VIEW_QUICK_ACTIONS = [
  { key: "edit", label: "Edit Nomination", description: "Edit nomination details", icon: "Pencil", href: "#" },
  { key: "approve", label: "Approve Nomination", description: "Approve this nomination", icon: "UserCheck2", href: "#" },
  { key: "reject", label: "Reject Nomination", description: "Reject this nomination", icon: "XCircle", href: "#", danger: true },
  { key: "export", label: "Export Nomination", description: "Export nomination details", icon: "Download", href: "#" },
  { key: "history", label: "View Nomination History", description: "View history and status logs", icon: "History", href: "#" },
];

export const NOMINATIONS_NOTE_TEXT =
  "Review all nominations carefully. Only approved nominations will be eligible for the election.";
export const NOMINATION_VIEW_NOTE_TEXT =
  "Only approved nominations will be eligible for the election.";

// The mockup shows 8 nominations on page 1 of "18 nominations", with a
// Nomination Overview donut of 15 Approved / 2 Pending / 1 Rejected. The
// 8 visible rows are reproduced verbatim below and already contain 2
// Rejected entries (Liza Varghese, Alice Jacob) — one more than the
// donut's own "1 Rejected" total. That mismatch comes from the mockup
// itself (the visible table and the sidebar donut don't reconcile), so
// both are kept exactly as shown rather than "corrected" — see the
// README for this batch.
const FIRST8 = [
  { id: "NOM-1", nomineeName: "Daniel Joseph", nomineeMembershipNo: "STJ-2010-0321", position: "Secretary", nominatedByName: "John Mathew", nominatedByMembershipNo: "STJ-2012-0456", election: "Parish Committee Election 2026", status: "Approved", nominatedOn: "2026-05-08T10:25:00" },
  { id: "NOM-2", nomineeName: "Anita Samuel", nomineeMembershipNo: "STJ-2016-0912", position: "Treasurer", nominatedByName: "Mary Abraham", nominatedByMembershipNo: "STJ-2014-0789", election: "Parish Committee Election 2026", status: "Pending", nominatedOn: "2026-05-08T11:10:00" },
  { id: "NOM-3", nomineeName: "George Philip", nomineeMembershipNo: "STJ-2008-0189", position: "Joint Secretary", nominatedByName: "Daniel Joseph", nominatedByMembershipNo: "STJ-2010-0321", election: "Parish Committee Election 2026", status: "Approved", nominatedOn: "2026-05-07T16:15:00" },
  { id: "NOM-4", nomineeName: "Liza Varghese", nomineeMembershipNo: "STJ-2011-0677", position: "Finance Convenor", nominatedByName: "Anita Samuel", nominatedByMembershipNo: "STJ-2016-0912", election: "Parish Committee Election 2026", status: "Rejected", nominatedOn: "2026-05-07T15:40:00" },
  { id: "NOM-5", nomineeName: "Thomas Philip", nomineeMembershipNo: "STJ-2013-0555", position: "Youth Representative", nominatedByName: "George Philip", nominatedByMembershipNo: "STJ-2008-0189", election: "Parish Committee Election 2026", status: "Approved", nominatedOn: "2026-05-06T09:35:00" },
  { id: "NOM-6", nomineeName: "Reena Mathew", nomineeMembershipNo: "STJ-2015-0991", position: "Women's Representative", nominatedByName: "Mary Abraham", nominatedByMembershipNo: "STJ-2014-0789", election: "Parish Committee Election 2026", status: "Pending", nominatedOn: "2026-05-06T08:20:00" },
  { id: "NOM-7", nomineeName: "James Varghese", nomineeMembershipNo: "STJ-2009-0233", position: "Member", nominatedByName: "John Mathew", nominatedByMembershipNo: "STJ-2012-0456", election: "Parish Committee Election 2026", status: "Approved", nominatedOn: "2026-05-05T17:00:00" },
  { id: "NOM-8", nomineeName: "Alice Jacob", nomineeMembershipNo: "STJ-2017-1112", position: "Member", nominatedByName: "Daniel Joseph", nominatedByMembershipNo: "STJ-2010-0321", election: "Parish Committee Election 2026", status: "Rejected", nominatedOn: "2026-05-05T14:30:00" },
];

const FILLER_NAMES = ["Priya Nair", "Vinod Thomas", "Susan Jacob", "Alex Mathew", "Kavitha Rajan", "Rohit Verma", "Nathan Paul", "Esther Grace", "Stephen Kurian", "Miriam Rajan"];
const NOMINATORS = ["John Mathew", "Mary Abraham", "Daniel Joseph", "Anita Samuel", "George Philip"];
const NOMINATOR_IDS = { "John Mathew": "STJ-2012-0456", "Mary Abraham": "STJ-2014-0789", "Daniel Joseph": "STJ-2010-0321", "Anita Samuel": "STJ-2016-0912", "George Philip": "STJ-2008-0189" };

const FILLER = FILLER_NAMES.map((name, i) => {
  const nominator = NOMINATORS[i % NOMINATORS.length];
  return {
    id: `NOM-${9 + i}`,
    nomineeName: name, nomineeMembershipNo: `STJ-20${11 + (i % 9)}-${String(2000 + i).slice(-4)}`,
    position: "Member", nominatedByName: nominator, nominatedByMembershipNo: NOMINATOR_IDS[nominator],
    election: "Parish Committee Election 2026", status: "Approved",
    nominatedOn: `2026-05-0${1 + (i % 4)}T${10 + (i % 6)}:00:00`,
  };
});

export const NOMINATIONS_LIST_MOCK = [...FIRST8, ...FILLER];

const NOMINATION_DETAIL_SEED = {
  "NOM-1": {
    id: "NOM-1", nomineeName: "Daniel Joseph", nomineeMembershipNo: "STJ-2010-0321",
    email: "daniel.joseph@example.com", phone: "+91 91234 56780",
    address: "12, Grace Avenue, Mylapore, Chennai - 600004, Tamil Nadu, India",
    photo: "https://i.pravatar.cc/300?u=daniel.joseph@example.com",
    position: "Secretary", election: "Parish Committee Election 2026",
    nominatedByName: "John Mathew", nominatedByMembershipNo: "STJ-2012-0456",
    nominatedOn: "2026-05-08T10:25:00", status: "Approved",
    approvedByName: "Parish Office (Admin)", approvedOn: "2026-05-09T09:15:00", remarks: "-",
    positionDetails: {
      description: "Oversees the administrative functions and records of the Parish Committee.",
      term: "2026 - 2028", maxNomineesAllowed: 1,
    },
    nominationStatus: [
      { key: "nominated", label: "Nominated", state: "done", on: "2026-05-08T10:25:00", byName: "John Mathew (STJ-2012-0456)" },
      { key: "under-review", label: "Under Review", state: "done", on: "2026-05-08T10:30:00", byName: "Parish Office (Admin)" },
      { key: "approved", label: "Approved", state: "done", on: "2026-05-09T09:15:00", byName: "Parish Office (Admin)" },
    ],
    documents: [
      { id: "DOC-1", label: "Nomination Form", fileName: "Nomination_Form_Daniel_Joseph.pdf" },
      { id: "DOC-2", label: "Nominee Consent", fileName: "Consent_Daniel_Joseph.pdf" },
      { id: "DOC-3", label: "Supporting Document", fileName: "ID_Proof_Daniel_Joseph.pdf" },
    ],
    notes: "", remarksAdmin: "Active member with good standing.",
  },
};

function genericNominationDetail(id) {
  const base = NOMINATIONS_LIST_MOCK.find((n) => n.id === id) ?? NOMINATIONS_LIST_MOCK[0];
  return {
    ...base,
    email: `${base.nomineeName.toLowerCase().replace(/\s+/g, ".")}@example.com`,
    phone: "+91 90000 00000",
    address: "Address on file with the parish office.",
    photo: `https://i.pravatar.cc/300?u=${encodeURIComponent(base.nomineeName)}`,
    approvedByName: base.status === "Approved" ? "Parish Office (Admin)" : null,
    approvedOn: base.status === "Approved" ? base.nominatedOn : null,
    remarks: base.status === "Rejected" ? "Did not meet eligibility criteria" : "-",
    positionDetails: {
      description: `Serves as ${base.position} for the ${base.election}.`,
      term: "2026 - 2028", maxNomineesAllowed: 1,
    },
    nominationStatus: [
      { key: "nominated", label: "Nominated", state: "done", on: base.nominatedOn, byName: `${base.nominatedByName} (${base.nominatedByMembershipNo})` },
      base.status === "Approved"
        ? { key: "approved", label: "Approved", state: "done", on: base.nominatedOn, byName: "Parish Office (Admin)" }
        : base.status === "Rejected"
        ? { key: "rejected", label: "Rejected", state: "done", on: base.nominatedOn, byName: "Parish Office (Admin)" }
        : { key: "under-review", label: "Under Review", state: "current", on: base.nominatedOn, byName: "Parish Office (Admin)" },
    ],
    documents: [
      { id: "DOC-1", label: "Nomination Form", fileName: `Nomination_Form_${base.nomineeName.replace(/\s+/g, "_")}.pdf` },
    ],
    notes: "", remarksAdmin: "",
  };
}

export function buildNominationDetailMock(id) {
  return NOMINATION_DETAIL_SEED[id] ?? genericNominationDetail(id);
}
