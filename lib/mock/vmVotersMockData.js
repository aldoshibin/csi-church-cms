export const VOTER_STATUS_BADGE_MAP = {
  Active: "success",
  Inactive: "warning",
  Removed: "danger",
};

export const VOTER_ELECTION_OPTIONS = ["Parish Committee Election 2026"];
export const VOTER_STATUS_OPTIONS = ["Active", "Inactive", "Removed"];
export const VOTER_MEMBERSHIP_OPTIONS = ["Active Member", "Inactive Member"];

export const GENDER_OPTIONS = ["Male", "Female", "Other"];
export const FAMILY_OPTIONS = ["Mathew Family", "Abraham Family", "Joseph Family", "Samuel Family", "Philip Family", "Varghese Family", "Jacob Family"];
export const MEMBER_NAME_OPTIONS = ["John Mathew", "Mary Abraham", "Daniel Joseph", "Anita Samuel", "George Philip", "Liza Varghese", "Thomas Philip", "Reena Mathew", "James Varghese", "Alice Jacob"];
export const MEMBERSHIP_TYPE_OPTIONS = ["Active Member", "Inactive Member"];

export const NEW_VOTER_DEFAULTS = {
  fullName: "", email: "", phone: "", dateOfBirth: "", gender: "", address: "",
  family: "", memberName: "",
  membershipNumber: "", membershipType: "", membershipStatus: "Active", memberSince: "",
  eligibleElection: "", voterStatus: "Active",
  notes: "",
};

export const VOTER_GUIDELINES_MOCK = [
  "Ensure all personal details are accurate.",
  "Voter must be an active member of the church.",
  "Select the applicable election for which the voter is eligible.",
  "Only eligible voters will be able to cast their vote.",
  "You can edit voter details before saving.",
];

export const VOTERS_OVERVIEW_MOCK = {
  total: 254,
  breakdown: [
    { label: "Active Voters", value: 232, color: "#16A34A" },
    { label: "Inactive Voters", value: 12, color: "#D97706" },
    { label: "Removed Voters", value: 10, color: "#DC2626" },
  ],
};

export const VOTERS_QUICK_ACTIONS = [
  { key: "add", label: "Add New Voter", description: "Register a new voter", icon: "PlusCircle", href: "/election-management/voters/add" },
  { key: "manage", label: "Manage Voters", description: "Edit voter details", icon: "Pencil", href: "/election-management/voters" },
  { key: "import", label: "Import Voters", description: "Import from member list", icon: "Users2", href: "#" },
  { key: "export", label: "Export Voters", description: "Download voters list", icon: "Download", href: "#" },
];

export const VOTER_VIEW_QUICK_ACTIONS = [
  { key: "edit", label: "Edit Voter", description: "Update voter details", icon: "Pencil", href: "/election-management/voters" },
  { key: "membership", label: "Manage Membership", description: "View membership history", icon: "IdCard", href: "#" },
  { key: "status", label: "Change Status", description: "Update voter status", icon: "RefreshCcw", href: "#" },
  { key: "family", label: "View Family", description: "View family members", icon: "Users2", href: "/families" },
  { key: "export", label: "Export Voter", description: "Download voter details", icon: "Download", href: "#" },
  { key: "delete", label: "Delete Voter", description: "Remove voter record", icon: "Trash2", href: "#", danger: true },
];

export const VOTERS_NOTE_TEXT =
  "Only **Active** voters are eligible to vote in the election. Ensure voter information is up to date.";

const FIRST10 = [
  { id: "VOTER-1", name: "John Mathew", email: "john.mathew@example.com", phone: "+91 98765 43210", membershipNumber: "STJ-2012-0456", familyName: "Mathew Family", election: "Parish Committee Election 2026", status: "Active", membershipType: "Active Member" },
  { id: "VOTER-2", name: "Mary Abraham", email: "mary.abraham@example.com", phone: "+91 87654 32109", membershipNumber: "STJ-2014-0789", familyName: "Abraham Family", election: "Parish Committee Election 2026", status: "Active", membershipType: "Active Member" },
  { id: "VOTER-3", name: "Daniel Joseph", email: "daniel.joseph@example.com", phone: "+91 91234 56780", membershipNumber: "STJ-2010-0321", familyName: "Joseph Family", election: "Parish Committee Election 2026", status: "Active", membershipType: "Active Member" },
  { id: "VOTER-4", name: "Anita Samuel", email: "anita.samuel@example.com", phone: "+91 99887 66554", membershipNumber: "STJ-2016-0912", familyName: "Samuel Family", election: "Parish Committee Election 2026", status: "Inactive", membershipType: "Active Member" },
  { id: "VOTER-5", name: "George Philip", email: "george.philip@example.com", phone: "+91 90000 11223", membershipNumber: "STJ-2008-0189", familyName: "Philip Family", election: "Parish Committee Election 2026", status: "Active", membershipType: "Active Member" },
  { id: "VOTER-6", name: "Liza Varghese", email: "liza.varghese@example.com", phone: "+91 94455 66778", membershipNumber: "STJ-2011-0677", familyName: "Varghese Family", election: "Parish Committee Election 2026", status: "Removed", membershipType: "Inactive Member" },
  { id: "VOTER-7", name: "Thomas Philip", email: "thomas.philip@example.com", phone: "+91 98945 11223", membershipNumber: "STJ-2013-0555", familyName: "Philip Family", election: "Parish Committee Election 2026", status: "Active", membershipType: "Active Member" },
  { id: "VOTER-8", name: "Reena Mathew", email: "reena.mathew@example.com", phone: "+91 91234 88990", membershipNumber: "STJ-2015-0991", familyName: "Mathew Family", election: "Parish Committee Election 2026", status: "Active", membershipType: "Active Member" },
  { id: "VOTER-9", name: "James Varghese", email: "james.varghese@example.com", phone: "+91 98765 22110", membershipNumber: "STJ-2009-0233", familyName: "Varghese Family", election: "Parish Committee Election 2026", status: "Inactive", membershipType: "Inactive Member" },
  { id: "VOTER-10", name: "Alice Jacob", email: "alice.jacob@example.com", phone: "+91 93456 77880", membershipNumber: "STJ-2017-1112", familyName: "Jacob Family", election: "Parish Committee Election 2026", status: "Active", membershipType: "Active Member" },
];

// The mockup shows "Showing 1 to 10 of 254 voters" (26 pages) with a
// Voters Overview donut of 232 Active / 12 Inactive / 10 Removed. Only
// the first 10 rows were shown in the mockup (reproduced verbatim
// above); the remaining 244 are generated deterministically below so
// pagination and the donut totals both add up to the real 254/232/12/10
// figures the mockup displays.
const FIRST_NAMES = ["Paul", "Rachel", "Simon", "Grace", "Peter", "Ruth", "Andrew", "Naomi", "Philip", "Esther", "Stephen", "Miriam", "Joel", "Hannah", "Nathan", "Priya", "Vinod", "Susan", "Alex", "Kavitha"];
const LAST_NAMES = ["Mathew", "Abraham", "Joseph", "Samuel", "Philip", "Varghese", "Jacob", "Thomas", "Kurian", "Nair", "Rajan", "Verma", "Daniel", "George", "John"];

function generateVoter(index, status, membershipType) {
  const first = FIRST_NAMES[index % FIRST_NAMES.length];
  const last = LAST_NAMES[Math.floor(index / FIRST_NAMES.length) % LAST_NAMES.length];
  const name = `${first} ${last}`;
  const email = `${first.toLowerCase()}.${last.toLowerCase()}${index}@example.com`;
  return {
    id: `VOTER-${11 + index}`,
    name, email,
    phone: `+91 9${String(10000000 + index * 37).padStart(8, "0")}`,
    membershipNumber: `STJ-20${10 + (index % 15)}-${String(1000 + index).slice(-4)}`,
    familyName: `${last} Family`,
    election: "Parish Committee Election 2026",
    status, membershipType,
  };
}

const GENERATED = [
  ...Array.from({ length: 225 }, (_, i) => generateVoter(i, "Active", "Active Member")),
  ...Array.from({ length: 10 }, (_, i) => generateVoter(225 + i, "Inactive", "Inactive Member")),
  ...Array.from({ length: 9 }, (_, i) => generateVoter(235 + i, "Removed", "Inactive Member")),
];

export const VOTERS_LIST_MOCK = [...FIRST10, ...GENERATED];

const VOTER_DETAIL_SEED = {
  "VOTER-1": {
    id: "VOTER-1", name: "John Mathew", email: "john.mathew@example.com", phone: "+91 98765 43210",
    dateOfBirth: "1985-05-15", gender: "Male",
    address: "12, Grace Avenue, Mylapore, Chennai - 600004, Tamil Nadu, India",
    memberSince: "2012-01-10", membershipNumber: "STJ-2012-0456", familyName: "Mathew Family",
    photo: "https://i.pravatar.cc/300?u=john.mathew@example.com",
    membershipType: "Active Member", status: "Active",
    joinedOn: "2012-01-10", lastUpdated: "2026-05-08T16:15:00", updatedByName: "Parish Office (Admin)",
    electionParticipation: {
      eligibleElections: 5, participatedElections: 3, upcomingElections: 1,
      lastParticipated: "Parish Committee Election 2023", lastParticipatedOn: "2023-05-12",
    },
    votingSummary: {
      totalVotesCast: 3, pendingVotes: 0, lastVoteCast: "2023-05-12T15:25:00",
      nextEligibleElection: "Parish Committee Election 2026", nextEligibleOn: "2026-05-20",
    },
    documents: [
      { id: "DOC-1", label: "Voter ID Proof", fileName: "ID_John_Mathew.pdf" },
      { id: "DOC-2", label: "Address Proof", fileName: "Address_John_Mathew.pdf" },
      { id: "DOC-3", label: "Member Certificate", fileName: "Member_Certificate.pdf" },
    ],
    timeline: [
      { key: "registered", label: "Voter Registered", icon: "UserPlus", iconBg: "bg-[#DCFCE7]", iconColor: "text-[#16A34A]", on: "2012-01-10T10:30:00", byName: "Parish Office (Admin)" },
      { key: "membership-updated", label: "Membership Updated", icon: "RefreshCcw", iconBg: "bg-[#DBEAFE]", iconColor: "text-[#2563EB]", on: "2026-05-08T16:15:00", byName: "Parish Office (Admin)" },
      { key: "status-active", label: "Status Changed to Active", icon: "CheckCircle2", iconBg: "bg-[#FEF3C7]", iconColor: "text-[#D97706]", on: "2026-05-08T16:15:00", byName: "Parish Office (Admin)" },
    ],
    notes: "", remarks: "",
  },
};

function genericVoterDetail(id) {
  const base = VOTERS_LIST_MOCK.find((v) => v.id === id) ?? VOTERS_LIST_MOCK[0];
  return {
    ...base,
    dateOfBirth: "1990-01-01", gender: "Male",
    address: "Address on file with the parish office.",
    memberSince: "2015-01-01", familyName: base.familyName,
    photo: `https://i.pravatar.cc/300?u=${encodeURIComponent(base.email)}`,
    joinedOn: "2015-01-01", lastUpdated: "2026-05-08T16:15:00", updatedByName: "Parish Office (Admin)",
    electionParticipation: {
      eligibleElections: 1, participatedElections: 0, upcomingElections: 1,
      lastParticipated: null, lastParticipatedOn: null,
    },
    votingSummary: {
      totalVotesCast: 0, pendingVotes: base.status === "Active" ? 1 : 0, lastVoteCast: null,
      nextEligibleElection: "Parish Committee Election 2026", nextEligibleOn: "2026-05-20",
    },
    documents: [
      { id: "DOC-1", label: "Voter ID Proof", fileName: `ID_${base.name.replace(/\s+/g, "_")}.pdf` },
    ],
    timeline: [
      { key: "registered", label: "Voter Registered", icon: "UserPlus", iconBg: "bg-[#DCFCE7]", iconColor: "text-[#16A34A]", on: base.membershipNumber ? "2015-01-01T10:30:00" : "2015-01-01T10:30:00", byName: "Parish Office (Admin)" },
    ],
    notes: "", remarks: "",
  };
}

export function buildVoterDetailMock(id) {
  return VOTER_DETAIL_SEED[id] ?? genericVoterDetail(id);
}
