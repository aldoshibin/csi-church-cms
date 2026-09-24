export const ELECTION_DETAIL_TABS = [
  "Overview", "Positions", "Candidates", "Voters", "Nomination", "Voting", "Results", "Timeline", "Activity Log",
];

const ELECTION_DETAIL_SEED = {
  "ELEC-1001": {
    id: "ELEC-1001", electionCode: "ELEC-2026-001",
    name: "Parish Committee Election 2026", type: "Parish Committee", status: "Upcoming",
    description: "Annual election for parish committee members.",
    summaryDescription: "Election to select members for the Parish Committee for the term 2026-2027.",
    electionDate: "2026-06-15", timeRange: "09:00 AM - 05:00 PM",
    nominationStart: "2026-05-01", nominationEnd: "2026-05-20",
    organizedByName: "Parish Office", organizedByRole: "Admin",
    votingMethod: "Physical Voting (Ballot)",
    totalPositions: 6, totalCandidates: 12, totalVoters: 512,
    createdByName: "Parish Office (Admin)", createdOn: "2026-04-20T10:30:00", lastUpdated: "2026-05-24T14:15:00",
    documents: [
      { id: "DOC-1", name: "Election Guidelines.pdf", fileType: "PDF", size: "1.24 MB", uploadedOn: "2026-04-20" },
    ],
    schedule: [
      { key: "nomination-start", label: "Nomination Start Date", date: "2026-05-01", time: "10:00 AM", icon: "CalendarPlus", iconBg: "bg-[#DCFCE7]", iconColor: "text-[#16A34A]" },
      { key: "nomination-end", label: "Nomination End Date", date: "2026-05-20", time: "05:00 PM", icon: "CalendarX2", iconBg: "bg-[#DBEAFE]", iconColor: "text-[#2563EB]" },
      { key: "candidate-list", label: "Candidate List Published", date: "2026-05-24", time: "11:00 AM", icon: "Users2", iconBg: "bg-[#F3E8FF]", iconColor: "text-[#7C3AED]" },
      { key: "voting-start", label: "Voting Start Date", date: "2026-06-15", time: "09:00 AM", icon: "Vote", iconBg: "bg-[#DBEAFE]", iconColor: "text-[#2563EB]" },
      { key: "voting-end", label: "Voting End Date", date: "2026-06-15", time: "05:00 PM", icon: "Vote", iconBg: "bg-[#FFEDD5]", iconColor: "text-[#EA580C]" },
      { key: "results", label: "Results Declaration", date: "2026-06-16", time: "10:00 AM", icon: "Trophy", iconBg: "bg-[#FEF3C7]", iconColor: "text-[#D97706]" },
    ],
    activityLog: [
      { id: "ACT-1", title: "New candidate nominated", description: "John Mathew nominated for Chairperson", icon: "Users", iconBg: "bg-[#DBEAFE]", iconColor: "text-[#2563EB]", on: "2026-05-24T14:30:00" },
      { id: "ACT-2", title: "Nomination approved", description: "Sarah Mathew's nomination for Secretary approved", icon: "UserCheck", iconBg: "bg-[#DCFCE7]", iconColor: "text-[#16A34A]", on: "2026-05-23T11:15:00" },
      { id: "ACT-3", title: "Candidate list published", description: "12 candidates published for this election", icon: "Users2", iconBg: "bg-[#F3E8FF]", iconColor: "text-[#7C3AED]", on: "2026-05-24T11:00:00" },
      { id: "ACT-4", title: "Election created", description: "Parish Committee Election 2026 has been created", icon: "Vote", iconBg: "bg-[#FFEDD5]", iconColor: "text-[#EA580C]", on: "2026-04-20T10:30:00" },
      { id: "ACT-5", title: "Election updated", description: "Election details updated by Parish Office (Admin)", icon: "Calendar", iconBg: "bg-[#FFE5E5]", iconColor: "text-[#DC2626]", on: "2026-05-10T16:15:00" },
    ],
    positions: [
      { id: "POS-1", name: "Chairperson", description: "Head of the Parish Committee", maxMembers: 1, eligibility: "Active Member (2+ years)", status: "Active" },
      { id: "POS-2", name: "Vice Chairperson", description: "Deputy to the Chairperson", maxMembers: 1, eligibility: "Active Member (2+ years)", status: "Active" },
      { id: "POS-3", name: "Secretary", description: "Responsible for committee records", maxMembers: 1, eligibility: "Active Member (2+ years)", status: "Active" },
      { id: "POS-4", name: "Treasurer", description: "Handles financial operations", maxMembers: 1, eligibility: "Active Member (2+ years)", status: "Active" },
      { id: "POS-5", name: "Committee Member (Male)", description: "General committee member (Male)", maxMembers: 1, eligibility: "Active Male Member (2+ years)", status: "Active" },
      { id: "POS-6", name: "Committee Member (Female)", description: "General committee member (Female)", maxMembers: 1, eligibility: "Active Female Member (2+ years)", status: "Active" },
    ],
  },
};

export function buildElectionDetailMock(id) {
  return ELECTION_DETAIL_SEED[id] ?? ELECTION_DETAIL_SEED["ELEC-1001"];
}
