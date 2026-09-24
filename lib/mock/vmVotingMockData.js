import { VOTERS_LIST_MOCK } from "@/lib/mock/vmVotersMockData";

export const VOTING_STATUS_BADGE_MAP = {
  Voted: "success",
  Pending: "warning",
};

export const VOTING_ELECTION_OPTIONS = ["Parish Committee Election 2026"];
export const VOTING_STATUS_OPTIONS = ["Voted", "Pending"];
export const VOTING_MEMBERSHIP_OPTIONS = ["Active Member", "Inactive Member"];

export const VOTING_QUICK_ACTIONS = [
  { key: "start", label: "Start Voting", description: "Open voting for the election", icon: "Play", href: "/election-management/voting/start" },
  { key: "end", label: "End Voting", description: "Close voting for the election", icon: "StopCircle", href: "#" },
  { key: "results", label: "View Live Results", description: "View real-time voting results", icon: "LineChart", href: "/election-management/results" },
  { key: "reminder", label: "Send Reminder", description: "Send reminder to pending voters", icon: "Mail", href: "#" },
  { key: "export", label: "Export Voting List", description: "Export voters and voting status", icon: "Download", href: "#" },
];

export const VOTING_VIEW_QUICK_ACTIONS = [
  { key: "profile", label: "View Voter Profile", description: "View complete voter profile", icon: "CircleUserRound", href: "/election-management/voters" },
  { key: "receipt", label: "View Voting Receipt", description: "Download voting receipt", icon: "FileText", href: "#" },
  { key: "results", label: "View Live Results", description: "View real-time voting results", icon: "LineChart", href: "/election-management/results" },
  { key: "reminder", label: "Send Reminder", description: "Send reminder to this voter", icon: "Mail", href: "#" },
  { key: "export", label: "Export Voter Data", description: "Export voter and voting details", icon: "Download", href: "#" },
];

export const VOTING_NOTE_TEXT =
  "Once voting is started, eligible voters can cast their vote only once. Ensure all voter details are up to date.";
export const VOTING_DETAIL_NOTE_TEXT =
  "This voter has already cast their vote. Each voter is allowed to vote only once per election.";

export const VOTING_OVERVIEW_MOCK = {
  total: 254,
  breakdown: [
    { label: "Voted", value: 156, color: "#16A34A" },
    { label: "Pending", value: 98, color: "#D97706" },
  ],
};

// The list mockup shows 8 voters on page 1 (of 254): reproduced verbatim
// below (with their exact voting status and voted-on timestamps). The
// remaining voters are generated from the same VOTERS_LIST_MOCK data
// already built for the Voters submenu, so both submenus describe the
// same 254 people, with a deterministic Voted/Pending split that adds up
// to the mockup's own 156 Voted / 98 Pending Voting Overview donut.
const FIRST8_OVERRIDES = {
  "VOTER-1": { status: "Voted", votedOn: "2026-05-08T10:25:00" },
  "VOTER-2": { status: "Voted", votedOn: "2026-05-08T11:10:00" },
  "VOTER-3": { status: "Voted", votedOn: "2026-05-07T16:15:00" },
  "VOTER-4": { status: "Pending", votedOn: null },
  "VOTER-5": { status: "Voted", votedOn: "2026-05-06T09:35:00" },
  "VOTER-6": { status: "Pending", votedOn: null },
  "VOTER-7": { status: "Voted", votedOn: "2026-05-05T17:00:00" },
  "VOTER-9": { status: "Voted", votedOn: "2026-05-05T17:00:00" },
  "VOTER-10": { status: "Pending", votedOn: null },
  "VOTER-8": { status: "Voted", votedOn: "2026-05-06T08:20:00" },
};

// FIRST8_OVERRIDES intentionally covers the mockup's visible 8 rows —
// John Mathew (VOTER-1), Mary Abraham (VOTER-2), Daniel Joseph (VOTER-3),
// Anita Samuel (VOTER-4), George Philip (VOTER-5), Liza Varghese
// (VOTER-6), James Varghese (VOTER-9) and Alice Jacob (VOTER-10). Reena
// Mathew (VOTER-8) and Thomas Philip (VOTER-7) are not shown on this
// mockup's first page, so they're given plausible values consistent
// with the "Voters" list order.
let votedCount = 0;
let pendingCount = 0;
const VOTED_TARGET = 156;

export const VOTING_LIST_MOCK = VOTERS_LIST_MOCK.map((voter) => {
  const override = FIRST8_OVERRIDES[voter.id];
  if (override) {
    if (override.status === "Voted") votedCount += 1; else pendingCount += 1;
    return { ...voter, votingStatus: override.status, votedOn: override.votedOn };
  }
  if (votedCount < VOTED_TARGET) {
    votedCount += 1;
    return { ...voter, votingStatus: "Voted", votedOn: "2026-05-04T12:00:00" };
  }
  pendingCount += 1;
  return { ...voter, votingStatus: "Pending", votedOn: null };
});

export function buildVoterVotingDetailMock(id) {
  const base = VOTING_LIST_MOCK.find((v) => v.id === id) ?? VOTING_LIST_MOCK[0];
  if (id === "VOTER-1" || !base) {
    return {
      id: "VOTER-1", name: "John Mathew", membershipNumber: "STJ-2012-0456",
      email: "john.mathew@example.com", phone: "+91 98765 43210",
      address: "12, Grace Avenue, Mylapore, Chennai - 600004, Tamil Nadu, India",
      memberSince: "2015-01-15", membershipType: "Active Member", dateOfBirth: "1988-05-10",
      photo: "https://i.pravatar.cc/300?u=john.mathew@example.com",
      votingStatus: "Voted",
      election: {
        name: "Parish Committee Election 2026", type: "Parish Committee",
        startDate: "2026-05-01T09:00:00", endDate: "2026-05-10T17:00:00",
        votingMethod: "Online", status: "Completed",
      },
      votingSummary: {
        votedOn: "2026-05-08T10:25:00", ipAddress: "103.45.67.89", device: "Chrome on Windows",
        location: "Chennai, Tamil Nadu, India", transactionId: "TXN-20260508-102512", status: "Vote Recorded",
      },
      votesCast: [
        { position: "Chairperson", candidateName: "Anita Samuel", candidateMembershipNo: "STJ-2016-0912" },
        { position: "Secretary", candidateName: "George Philip", candidateMembershipNo: "STJ-2008-0189" },
        { position: "Treasurer", candidateName: "Mary Abraham", candidateMembershipNo: "STJ-2014-0789" },
        { position: "Joint Secretary", candidateName: "Daniel Joseph", candidateMembershipNo: "STJ-2010-0321" },
        { position: "Finance Convenor", candidateName: "Liza Varghese", candidateMembershipNo: "STJ-2011-0677" },
      ],
      receipt: {
        churchName: "CSI St. John's Church", electionName: "Parish Committee Election 2026",
        voterName: "John Mathew", membershipNumber: "STJ-2012-0456",
        votedOn: "2026-05-08T10:25:00", transactionId: "TXN-20260508-102512",
      },
    };
  }
  return {
    id: base.id, name: base.name, membershipNumber: base.membershipNumber,
    email: base.email, phone: base.phone,
    address: "Address on file with the parish office.",
    memberSince: "2015-01-01", membershipType: base.membershipType, dateOfBirth: "1990-01-01",
    photo: `https://i.pravatar.cc/300?u=${encodeURIComponent(base.email)}`,
    votingStatus: base.votingStatus,
    election: {
      name: base.election, type: "Parish Committee",
      startDate: "2026-05-01T09:00:00", endDate: "2026-05-10T17:00:00",
      votingMethod: "Online", status: base.votingStatus === "Voted" ? "Completed" : "Ongoing",
    },
    votingSummary: base.votingStatus === "Voted" ? {
      votedOn: base.votedOn, ipAddress: "103.45.67.89", device: "Chrome on Windows",
      location: "Chennai, Tamil Nadu, India",
      transactionId: `TXN-${base.id}`, status: "Vote Recorded",
    } : null,
    votesCast: base.votingStatus === "Voted" ? [
      { position: "Chairperson", candidateName: "Anita Samuel", candidateMembershipNo: "STJ-2016-0912" },
    ] : [],
    receipt: base.votingStatus === "Voted" ? {
      churchName: "CSI St. John's Church", electionName: base.election,
      voterName: base.name, membershipNumber: base.membershipNumber,
      votedOn: base.votedOn, transactionId: `TXN-${base.id}`,
    } : null,
  };
}

export const START_VOTING_ELECTION_INFO = {
  name: "Parish Committee Election 2026", type: "Parish Committee",
  startDate: "2026-05-01T09:00:00", endDate: "2026-05-10T17:00:00",
  votingMethod: "Online", eligibleVoters: 254, status: "Upcoming",
};

export const START_VOTING_CHECKLIST = [
  "All nominations have been reviewed and approved.",
  "Eligible voters list is final and up to date.",
  "Election positions and candidates are confirmed.",
  "Election settings (start & end date) are correct.",
  "Voting method and notifications are configured.",
];

export const START_VOTING_INSTRUCTIONS = [
  { step: 1, title: "Review Election Details", description: "Please review the election information carefully before starting.", icon: "Users2" },
  { step: 2, title: "Confirm Voter Eligibility", description: "Ensure all eligible voters are added and nominations are closed.", icon: "Users2" },
  { step: 3, title: "Start Voting", description: "Click the button below to start the voting process.", icon: "PlayCircle" },
  { step: 4, title: "Notify Voters", description: "Voters will be notified automatically once voting is started.", icon: "Mail" },
];

export const START_VOTING_NOTES = [
  "Once voting is started, it cannot be paused or stopped.",
  "Voters can cast their vote only once.",
  "Make sure all information is correct before starting.",
];
