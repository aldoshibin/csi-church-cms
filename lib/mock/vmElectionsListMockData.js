// Election Management — Elections list / Create / Edit / Details modal.
// These four screens ("Create New Election", "Edit Election", "Election
// Details" modal, and "Elections" list) round out the already-built
// Election Management module's Elections submenu, whose list/add pages
// were missing (only the dashboard's abbreviated preview and the
// standalone detail route existed — see README_CHANGES.txt).
//
// This file's own 5-election dataset (Total Elections 5, Total Positions
// 28, Total Candidates 86, Total Voters 1,245) does not reconcile with
// the Dashboard's existing, untouched dataset in
// vmElectionManagementMockData.js (Upcoming Elections 2, Total Positions
// 8, Total Candidates 24, Total Voters 512, and a different 6-election
// set). Both are kept exactly as their own mockups show them, per this
// project's established practice — see README_CHANGES.txt.

export const ELECTIONS_LIST_TABS = ["Upcoming Elections", "Ongoing Elections", "Completed Elections"];

export const ELECTIONS_LIST_STATS_MOCK = {
  totalElections: { value: 5, trend: "↑ 25% vs Last Year" },
  totalPositions: { value: 28, trend: "↑ 12% vs Last Year" },
  totalCandidates: { value: 86, trend: "↑ 18% vs Last Year" },
  totalVoters: { value: 1245, trend: "↑ 10% vs Last Year" },
  completedElections: { value: 3, trend: "— No Change" },
};

export const ELECTION_TYPE_OPTIONS = ["Parish Committee", "Ministry Committee", "Trust Board"];
export const VOTING_METHOD_OPTIONS = ["Physical Voting (Ballot)", "Online Voting", "Show of Hands"];
export const VOTER_ELIGIBILITY_OPTIONS = ["Eligible Active Members", "All Members", "Members 18+"];
export const ELIGIBLE_MEMBERSHIP_OPTIONS = ["Active Members", "All Members"];
export const MEMBERSHIP_DURATION_OPTIONS = ["6 Months", "1 Year", "2 Years", "3 Years", "5 Years"];

export const NEW_ELECTION_DEFAULTS = {
  electionName: "", electionType: "", description: "",
  electionDate: "", startTime: "", endTime: "",
  nominationStartDate: "", nominationEndDate: "", candidateListPublishDate: "", resultsDeclarationDate: "",
  votingMethod: "", voterEligibility: "",
  eligibleMembership: "", minimumMembershipDuration: "", candidateLimit: "",
  allowMultipleNominations: false, displayVoterListToCandidates: false,
  requireApprovalForNominations: true, sendEmailNotifications: true,
};

// The 5 elections shown on the Elections list mockup, all real rows (its
// own footer states "Showing 1 to 5 of 5 elections" — no filler needed).
export const ELECTIONS_LIST_MOCK = [
  {
    id: "ELEC-2026-001", name: "Parish Committee Election 2026", tagline: "Annual election for parish committee",
    type: "Parish Committee", electionDate: "2026-06-15", timeRange: "09:00 AM - 05:00 PM",
    positions: 6, candidates: 24, status: "Upcoming", statusNote: "45 days remaining",
  },
  {
    id: "ELEC-2026-002", name: "Sunday School Committee Election 2026", tagline: "Election for Sunday School committee",
    type: "Ministry Committee", electionDate: "2026-07-10", timeRange: "09:00 AM - 03:00 PM",
    positions: 4, candidates: 18, status: "Upcoming", statusNote: "70 days remaining",
  },
  {
    id: "ELEC-2026-003", name: "Trust Board Election 2026", tagline: "Election for Trust Board members",
    type: "Trust Board", electionDate: "2026-08-05", timeRange: "09:00 AM - 05:00 PM",
    positions: 5, candidates: 16, status: "Ongoing", statusNote: "Voting in progress",
  },
  {
    id: "ELEC-2026-004", name: "Choir Committee Election 2026", tagline: "Election for Choir Committee",
    type: "Ministry Committee", electionDate: "2026-09-12", timeRange: "09:00 AM - 05:00 PM",
    positions: 5, candidates: 14, status: "Upcoming", statusNote: "108 days remaining",
  },
  {
    id: "ELEC-2026-005", name: "Women's Fellowship Election 2026", tagline: "Election for Women's Fellowship committee",
    type: "Ministry Committee", electionDate: "2026-03-15", timeRange: "09:00 AM - 04:00 PM",
    positions: 8, candidates: 14, status: "Completed", statusNote: "Conducted on Mar 15, 2026",
  },
];

export const ELECTIONS_LIST_TIMELINE_MOCK = [
  { key: "nomination-start", label: "Nomination Starts", date: "2026-05-01", icon: "CalendarPlus", iconBg: "bg-[#DCFCE7]", iconColor: "text-[#16A34A]" },
  { key: "nomination-end", label: "Nomination Ends", date: "2026-05-20", icon: "CalendarX2", iconBg: "bg-[#DBEAFE]", iconColor: "text-[#2563EB]" },
  { key: "candidate-list", label: "Candidate List", date: "2026-05-24", icon: "Users2", iconBg: "bg-[#F3E8FF]", iconColor: "text-[#7C3AED]" },
  { key: "voting-day", label: "Voting Day", date: "2026-06-15", icon: "Vote", iconBg: "bg-[#FFEDD5]", iconColor: "text-[#EA580C]" },
  { key: "results-declaration", label: "Results Declaration", date: "2026-06-16", icon: "Trophy", iconBg: "bg-[#FFE5E5]", iconColor: "text-[#DC2626]" },
];

// A 2x2 icon-card grid — visually distinct from the module's own
// vertical-list QuickActionsCard.jsx (used elsewhere in this module),
// matching this mockup's own card-grid style exactly.
export const ELECTIONS_LIST_QUICK_ACTIONS_GRID = [
  { key: "create", label: "Create New Election", description: "Set up a new election", icon: "PlusCircle", iconBg: "bg-[#DCFCE7]", iconColor: "text-[#16A34A]", href: "/election-management/elections/add" },
  { key: "positions", label: "Manage Positions", description: "Add or edit election positions", icon: "Users2", iconBg: "bg-[#DBEAFE]", iconColor: "text-[#2563EB]", href: "/election-management/positions" },
  { key: "candidates", label: "Manage Candidates", description: "View and manage candidates", icon: "UsersRound", iconBg: "bg-[#F3E8FF]", iconColor: "text-[#7C3AED]", href: "/election-management/candidates" },
  { key: "reports", label: "Generate Reports", description: "View election reports", icon: "FileText", iconBg: "bg-[#FFEDD5]", iconColor: "text-[#EA580C]", href: "/election-management/reports" },
];

export const ELECTION_TIPS_MOCK = {
  informationNote: "You can edit all details later before the nomination start date. Once voting has started, certain details cannot be modified.",
};

// Full record for "Parish Committee Election 2026" (ELEC-2026-001),
// matching the Create/Edit/Details-modal mockups exactly. Powers the Edit
// form's default values, the Election Details modal, and (via the form
// hook) what a newly created election's preview looks like. A generic
// fallback is derived from ELECTIONS_LIST_MOCK for any other election id.
export function buildElectionRecordMock(id) {
  if (id === "ELEC-2026-001" || !id) {
    return {
      id: "ELEC-2026-001",
      name: "Parish Committee Election 2026", type: "Parish Committee", status: "Upcoming",
      description: "Election to select members for the Parish Committee for the term 2026-2027.",
      tagline: "Annual election for parish committee members for the term 2026-2027.",
      electionDate: "2026-06-15", startTime: "09:00 AM", endTime: "05:00 PM", timeRange: "09:00 AM - 05:00 PM",
      nominationStartDate: "2026-05-01", nominationEndDate: "2026-05-20",
      candidateListPublishDate: "2026-05-24", resultsDeclarationDate: "2026-06-16",
      votingMethod: "Physical Voting (Ballot)", voterEligibility: "Eligible Active Members",
      eligibleMembership: "Active Members", minimumMembershipDuration: "2 Years", candidateLimit: 12,
      allowMultipleNominations: false, displayVoterListToCandidates: false,
      requireApprovalForNominations: true, sendEmailNotifications: true,
      totalPositions: 6, totalCandidates: 24, totalVoters: 512,
      electionCode: "ELEC-2026-001",
      createdByName: "Parish Office (Admin)", createdOn: "2026-04-20T10:30:00", lastUpdated: "2026-05-24T14:15:00",
      documents: [
        { id: "DOC-1", name: "Election Guidelines.pdf", size: "1.24 MB", uploadedOn: "2026-04-20" },
        { id: "DOC-2", name: "Nomination Form.pdf", size: "350 KB", uploadedOn: "2026-04-21" },
      ],
    };
  }
  const base = ELECTIONS_LIST_MOCK.find((e) => e.id === id) ?? ELECTIONS_LIST_MOCK[0];
  return {
    id: base.id,
    name: base.name, type: base.type, status: base.status,
    description: `Election to select members for the ${base.type} for the current term.`,
    tagline: base.tagline,
    electionDate: base.electionDate, startTime: base.timeRange.split(" - ")[0], endTime: base.timeRange.split(" - ")[1], timeRange: base.timeRange,
    nominationStartDate: "", nominationEndDate: "", candidateListPublishDate: "", resultsDeclarationDate: "",
    votingMethod: "Physical Voting (Ballot)", voterEligibility: "Eligible Active Members",
    eligibleMembership: "Active Members", minimumMembershipDuration: "2 Years", candidateLimit: base.positions * 2,
    allowMultipleNominations: false, displayVoterListToCandidates: false,
    requireApprovalForNominations: true, sendEmailNotifications: true,
    totalPositions: base.positions, totalCandidates: base.candidates, totalVoters: 0,
    electionCode: base.id,
    createdByName: "Parish Office (Admin)", createdOn: `${base.electionDate}T10:00:00`, lastUpdated: `${base.electionDate}T10:00:00`,
    documents: [],
  };
}
