"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import {
  Vote, Pencil, ListChecks, UsersRound, Users2, Percent,
  ClipboardList, CalendarCheck2, Trophy, Clock, Activity,
} from "lucide-react";
import { Modal } from "@/components/ui/Modal";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { ElectionScheduleCard } from "@/components/election-management/ElectionScheduleCard";
import { ElectionDocumentsCard } from "@/components/election-management/ElectionDocumentsCard";
import { TabComingSoonCard } from "@/components/election-management/TabComingSoonCard";
import { buildElectionRecordMock } from "@/lib/mock/vmElectionsListMockData";
import { ELECTION_TYPE_BADGE_MAP } from "@/lib/mock/vmElectionManagementMockData";
import { formatDate } from "@/lib/utils";

// Additive to the module: this is a NEW modal for the Elections list
// screen's "eye" action, using the list's own ELEC-2026-* id scheme and
// dataset. It does not replace, and is not cross-linked from, the
// pre-existing full-page detail view at
// /election-management/elections/[id] (which uses a different id scheme
// and its own dataset) — see README_CHANGES.txt.
const STATUS_VARIANT = { Upcoming: "info", Ongoing: "warning", Completed: "success" };

const TABS = [
  { key: "overview", label: "Overview", icon: ClipboardList },
  { key: "positions", label: "Positions", icon: ListChecks },
  { key: "candidates", label: "Candidates", icon: UsersRound },
  { key: "voters", label: "Voters", icon: Users2 },
  { key: "nomination", label: "Nomination", icon: CalendarCheck2 },
  { key: "voting", label: "Voting", icon: Vote },
  { key: "results", label: "Results", icon: Trophy },
  { key: "timeline", label: "Timeline", icon: Clock },
  { key: "activity", label: "Activity Log", icon: Activity },
];

export function ElectionDetailsModal({ electionId, open, onOpenChange }) {
  const router = useRouter();
  const [activeTab, setActiveTab] = React.useState("overview");
  const election = React.useMemo(() => (electionId ? buildElectionRecordMock(electionId) : null), [electionId]);

  React.useEffect(() => {
    if (open) setActiveTab("overview");
  }, [open, electionId]);

  if (!election) return null;

  const schedule = [
    { key: "nomination-start", label: "Nomination Starts", date: election.nominationStartDate, time: "", icon: "CalendarPlus", iconBg: "bg-[#DCFCE7]", iconColor: "text-[#16A34A]" },
    { key: "nomination-end", label: "Nomination Ends", date: election.nominationEndDate, time: "", icon: "CalendarX2", iconBg: "bg-[#DBEAFE]", iconColor: "text-[#2563EB]" },
    { key: "candidate-list", label: "Candidate List Published", date: election.candidateListPublishDate, time: "", icon: "Users2", iconBg: "bg-[#F3E8FF]", iconColor: "text-[#7C3AED]" },
    { key: "voting-day", label: "Voting Day", date: election.electionDate, time: election.timeRange, icon: "Vote", iconBg: "bg-[#FFEDD5]", iconColor: "text-[#EA580C]" },
    { key: "results", label: "Results Declaration", date: election.resultsDeclarationDate, time: "", icon: "Trophy", iconBg: "bg-[#FFE5E5]", iconColor: "text-[#DC2626]" },
  ];

  return (
    <Modal
      open={open}
      onOpenChange={onOpenChange}
      size="xl"
      footer={<Button variant="secondary" onClick={() => onOpenChange(false)}>Close</Button>}
    >
      <div className="flex flex-col gap-5">
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-start gap-3">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-[#DCFCE7] text-[#16A34A]">
              <Vote className="h-5 w-5" />
            </span>
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <h2 className="text-lg font-semibold text-ink">{election.name}</h2>
                <Badge variant={STATUS_VARIANT[election.status] ?? "info"}>{election.status}</Badge>
                <Badge variant={ELECTION_TYPE_BADGE_MAP[election.type] ?? "info"}>{election.type}</Badge>
              </div>
              <p className="mt-1 text-sm text-ink-subtle">{election.tagline}</p>
            </div>
          </div>
          <Button
            variant="secondary" size="sm" leftIcon={<Pencil className="h-3.5 w-3.5" />}
            onClick={() => router.push(`/election-management/elections/${election.id}/edit`)}
          >
            Edit
          </Button>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          <StatTile icon={ListChecks} iconBg="bg-[#DBEAFE]" iconColor="text-[#2563EB]" label="Positions" value={election.totalPositions} />
          <StatTile icon={UsersRound} iconBg="bg-[#F3E8FF]" iconColor="text-[#7C3AED]" label="Candidates" value={election.totalCandidates} />
          <StatTile icon={Users2} iconBg="bg-[#FFEDD5]" iconColor="text-[#EA580C]" label="Voters" value={election.totalVoters} />
          <StatTile icon={Percent} iconBg="bg-[#DCFCE7]" iconColor="text-[#16A34A]" label="Turnout" value={election.totalVoters ? "—" : "—"} />
        </div>

        <div className="flex flex-wrap gap-1 border-b border-border">
          {TABS.map((tab) => (
            <button
              key={tab.key} type="button" onClick={() => setActiveTab(tab.key)}
              className={`flex items-center gap-1.5 rounded-t-md px-3 py-2 text-xs font-medium transition-colors ${
                activeTab === tab.key ? "border-b-2 border-interactive-600 text-interactive-600" : "text-ink-subtle hover:text-ink"
              }`}
            >
              <tab.icon className="h-3.5 w-3.5" /> {tab.label}
            </button>
          ))}
        </div>

        {activeTab === "overview" ? (
          <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
            <div className="rounded-lg border border-border bg-white p-5 shadow-card">
              <h3 className="text-sm font-semibold text-ink">Basic Information</h3>
              <div className="mt-3 flex flex-col gap-2.5 divide-y divide-border">
                <InfoRow label="Description" value={election.description} />
                <InfoRow label="Election Date" value={`${formatDate(election.electionDate)} · ${election.timeRange}`} />
                <InfoRow label="Voting Method" value={election.votingMethod} />
                <InfoRow label="Voter Eligibility" value={election.voterEligibility} />
                <InfoRow label="Eligible Membership" value={election.eligibleMembership} />
                <InfoRow label="Min. Membership Duration" value={election.minimumMembershipDuration} />
                <InfoRow label="Candidate Limit" value={election.candidateLimit} />
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <ElectionScheduleCard schedule={schedule} />
              <ElectionDocumentsCard documents={election.documents} />
            </div>
          </div>
        ) : (
          <TabComingSoonCard
            icon={TABS.find((t) => t.key === activeTab)?.icon ?? ClipboardList}
            title={`${TABS.find((t) => t.key === activeTab)?.label} — Coming Soon`}
            description="This tab's detailed view is not yet available for the new Elections list dataset."
          />
        )}
      </div>
    </Modal>
  );
}

function StatTile({ icon: Icon, iconBg, iconColor, label, value }) {
  return (
    <div className="flex flex-col items-center gap-1.5 rounded-lg border border-border bg-surface-canvas p-3 text-center">
      <span className={`flex h-8 w-8 items-center justify-center rounded-md ${iconBg} ${iconColor}`}>
        <Icon className="h-4 w-4" />
      </span>
      <p className="font-display text-lg font-bold text-ink">{value}</p>
      <p className="text-xs text-ink-subtle">{label}</p>
    </div>
  );
}

function InfoRow({ label, value }) {
  return (
    <div className="pt-2.5 first:pt-0">
      <p className="text-xs text-ink-subtle">{label}</p>
      <p className="text-sm font-medium text-ink">{value || "–"}</p>
    </div>
  );
}
