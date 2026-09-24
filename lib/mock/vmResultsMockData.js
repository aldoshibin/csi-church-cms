export const RESULTS_STATS_MOCK = {
  totalEligibleVoters: { value: 254, sub: "100% of eligible voters" },
  totalVotesCast: { value: 156, sub: "61.42% turnout" },
  validVotes: { value: 154, sub: "98.72% of total votes cast" },
  rejectedVotes: { value: 2, sub: "1.28% of total votes cast" },
};

export const RESULTS_OVERVIEW_MOCK = {
  total: 156,
  breakdown: [
    { label: "Valid Votes", value: 154, color: "#16A34A" },
    { label: "Rejected Votes", value: 2, color: "#EA580C" },
  ],
};

export const RESULTS_TABS = ["Position Results", "Overall Summary"];

export const RESULTS_QUICK_ACTIONS = [
  { key: "report", label: "View Detailed Report", description: "View complete election report", icon: "FileText", href: "/election-management/reports" },
  { key: "download", label: "Download Results", description: "Download results as PDF", icon: "Download", href: "#" },
  { key: "share", label: "Share Results", description: "Share results with members", icon: "Share2", href: "#" },
  { key: "print", label: "Print Results", description: "Print election results", icon: "Printer", href: "#" },
];

export const RESULTS_NOTE_TEXT =
  "Results shown are final and approved. For any queries, please contact the Election Committee.";

export const POSITION_RESULTS_MOCK = [
  { id: "PR-1", position: "Chairperson", positionCount: "1 Position", candidateName: "Anita Samuel", votes: 68, percentage: 44.16, result: "Elected" },
  { id: "PR-2", position: "Secretary", positionCount: "1 Position", candidateName: "George Philip", votes: 65, percentage: 42.21, result: "Elected" },
  { id: "PR-3", position: "Treasurer", positionCount: "1 Position", candidateName: "Mary Abraham", votes: 62, percentage: 40.26, result: "Elected" },
  { id: "PR-4", position: "Joint Secretary", positionCount: "1 Position", candidateName: "Daniel Joseph", votes: 58, percentage: 37.66, result: "Elected" },
  { id: "PR-5", position: "Finance Convenor", positionCount: "1 Position", candidateName: "Liza Varghese", votes: 54, percentage: 35.06, result: "Elected" },
];

export const OVERALL_SUMMARY_MOCK = {
  totalPositions: 5, totalCandidates: 12, totalElected: 5,
  electionName: "Parish Committee Election 2026",
  votingMethod: "Online", declaredOn: "2026-05-10T18:00:00", declaredByName: "Parish Office (Admin)",
};
