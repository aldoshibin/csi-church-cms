"use client";

import * as React from "react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { FolderCheck, Pencil, MoreVertical, SlidersHorizontal, Plus, UserRound, Vote, BarChart3, UsersRound, Users } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { useElectionDetail } from "@/hooks/useElectionDetail";
import { ElectionSummaryCard } from "@/components/election-management/ElectionSummaryCard";
import { ElectionInfoCard } from "@/components/election-management/ElectionInfoCard";
import { ElectionScheduleCard } from "@/components/election-management/ElectionScheduleCard";
import { ElectionDocumentsCard } from "@/components/election-management/ElectionDocumentsCard";
import { RecentActivityCard } from "@/components/election-management/RecentActivityCard";
import { PositionsTable } from "@/components/election-management/PositionsTable";
import { TabComingSoonCard } from "@/components/election-management/TabComingSoonCard";
import { QuickActionsCard } from "@/components/election-management/QuickActionsCard";
import { NoteCard } from "@/components/election-management/NoteCard";
import { ELECTION_DETAIL_TABS } from "@/lib/mock/vmElectionDetailMockData";

const STATUS_VARIANT = { Upcoming: "info", Ongoing: "warning", Completed: "success" };

const ELECTION_DETAIL_QUICK_ACTIONS = [
  { key: "add-position", label: "Add New Position", description: "Create a new position", icon: "PlusCircle", href: "/election-management/positions" },
  { key: "candidates", label: "Manage Candidates", description: "View and manage candidates", icon: "UsersRound", href: "/election-management/candidates" },
  { key: "voters", label: "Manage Voters", description: "View and manage voters", icon: "Users", href: "/election-management/voters" },
  { key: "timeline", label: "Election Timeline", description: "View election schedule", icon: "Calendar", href: "#timeline" },
  { key: "report", label: "Generate Report", description: "Generate election report", icon: "FileText", href: "/election-management/reports" },
];

const NOTE_TEXT =
  "You can manage positions, candidates, voters and monitor the entire election process from this election dashboard.";

const menuItemClass =
  "flex w-full items-center gap-2 rounded px-2.5 py-2 text-sm text-ink-muted outline-none transition-colors hover:bg-surface-canvas hover:text-ink focus:bg-surface-canvas cursor-pointer";

export function ElectionDetailView({ id }) {
  const { election, isLoading } = useElectionDetail(id);
  const [tab, setTab] = React.useState("Overview");
  const [positionsPage, setPositionsPage] = React.useState(1);
  const positionsPageSize = 10;

  if (isLoading || !election) {
    return <div className="h-64 animate-pulse rounded-lg bg-surface-muted" />;
  }

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-start">
        <div className="flex items-start gap-4">
          <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-lg bg-[#DCFCE7] text-[#16A34A]">
            <FolderCheck className="h-6 w-6" />
          </span>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-2xl font-semibold text-ink">{election.name}</h1>
              <Badge variant={STATUS_VARIANT[election.status] ?? "info"}>{election.status}</Badge>
            </div>
            <p className="mt-1 text-sm text-ink-subtle">{election.description}</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Button type="button" variant="secondary" leftIcon={<Pencil className="h-4 w-4" />}>Edit Election</Button>
          <DropdownMenu.Root>
            <DropdownMenu.Trigger asChild>
              <Button type="button" variant="secondary" leftIcon={<MoreVertical className="h-4 w-4" />}>More</Button>
            </DropdownMenu.Trigger>
            <DropdownMenu.Portal>
              <DropdownMenu.Content align="end" sideOffset={6} className="z-50 w-52 rounded-md border border-border bg-white p-1.5 shadow-elevated animate-fade-in">
                <DropdownMenu.Item className={menuItemClass}>Back to Elections</DropdownMenu.Item>
                <DropdownMenu.Item className={menuItemClass}>Duplicate Election</DropdownMenu.Item>
                <DropdownMenu.Item className={menuItemClass}>Export Details</DropdownMenu.Item>
                <DropdownMenu.Item className={`${menuItemClass} text-danger-600 hover:text-danger-600`}>Cancel Election</DropdownMenu.Item>
              </DropdownMenu.Content>
            </DropdownMenu.Portal>
          </DropdownMenu.Root>
        </div>
      </div>

      <ElectionSummaryCard election={election} />

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_300px]">
        <div className="flex flex-col gap-4">
          <div className="rounded-lg border border-border bg-white p-1.5 shadow-card">
            <div className="flex flex-wrap items-center gap-1">
              {ELECTION_DETAIL_TABS.map((t) => (
                <button
                  key={t} type="button" onClick={() => setTab(t)}
                  className={`rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                    tab === t ? "bg-interactive-50 text-interactive-600" : "text-ink-subtle hover:bg-surface-canvas"
                  }`}
                >
                  {t === "Positions" ? `Positions (${election.totalPositions})`
                    : t === "Candidates" ? `Candidates (${election.totalCandidates})`
                    : t === "Voters" ? `Voters (${election.totalVoters})`
                    : t}
                </button>
              ))}
            </div>
          </div>

          {tab === "Overview" && (
            <div className="flex flex-col gap-6">
              <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                <ElectionScheduleCard schedule={election.schedule} />
                <RecentActivityCard activity={election.activityLog} />
              </div>
              <ElectionDocumentsCard documents={election.documents} />
            </div>
          )}

          {tab === "Positions" && (
            <div id="positions" className="flex flex-col gap-4">
              <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
                <div>
                  <h3 className="text-sm font-semibold text-ink">Positions ({election.totalPositions})</h3>
                  <p className="text-xs text-ink-subtle">List of positions available in this election.</p>
                </div>
                <div className="flex items-center gap-2">
                  <Button type="button" variant="secondary" leftIcon={<SlidersHorizontal className="h-4 w-4" />}>Filters</Button>
                  <Button type="button" variant="primary" leftIcon={<Plus className="h-4 w-4" />}>Add Position</Button>
                </div>
              </div>
              <PositionsTable
                positions={election.positions} isLoading={false}
                page={positionsPage} pageSize={positionsPageSize} totalCount={election.positions.length} onPageChange={setPositionsPage}
              />
            </div>
          )}

          {tab === "Candidates" && (
            <div id="candidates">
              <TabComingSoonCard icon={UsersRound} title="Candidates" description="Candidate nominations and profiles for this election will appear here." />
            </div>
          )}

          {tab === "Voters" && (
            <div id="voters">
              <TabComingSoonCard icon={Users} title="Voters" description="Registered voters eligible to vote in this election will appear here." />
            </div>
          )}

          {tab === "Nomination" && (
            <TabComingSoonCard icon={UserRound} title="Nomination" description="Nomination submissions and approvals for this election will appear here." />
          )}

          {tab === "Voting" && (
            <TabComingSoonCard icon={Vote} title="Voting" description="Live voting status and turnout for this election will appear here." />
          )}

          {tab === "Results" && (
            <TabComingSoonCard icon={BarChart3} title="Results" description="Election results will be published here once voting closes." />
          )}

          {tab === "Timeline" && (
            <div id="timeline">
              <ElectionScheduleCard schedule={election.schedule} title="Election Timeline" />
            </div>
          )}

          {tab === "Activity Log" && (
            <RecentActivityCard activity={election.activityLog} />
          )}
        </div>

        <div className="flex flex-col gap-6">
          <ElectionInfoCard election={election} />
          <QuickActionsCard actions={ELECTION_DETAIL_QUICK_ACTIONS} />
          <NoteCard>{NOTE_TEXT}</NoteCard>
        </div>
      </div>
    </div>
  );
}
