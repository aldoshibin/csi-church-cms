"use client";

import { Search, Plus, Users2 } from "lucide-react";
import { useMensFellowshipSection } from "@/hooks/useMensFellowshipSection";
import { Table } from "@/components/ui/Table";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { FELLOWSHIP_GROUPS_MOCK } from "@/lib/mock/mensFellowshipMockData";

export default function FellowshipGroupsPage() {
  const { items, totalCount, isLoading, search, setSearch, page, setPage, pageSize } =
    useMensFellowshipSection(FELLOWSHIP_GROUPS_MOCK, ["name", "leader", "coLeader"]);

  const columns = [
    {
      key: "name", header: "Group Name",
      render: (row) => (
        <div className="flex items-center gap-2.5">
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-interactive-50 text-interactive-600">
            <Users2 className="h-4 w-4" />
          </span>
          <span className="font-medium text-ink">{row.name}</span>
        </div>
      ),
    },
    { key: "leader", header: "Leader", render: (row) => <span className="text-ink">{row.leader}</span> },
    { key: "coLeader", header: "Co-Leader", render: (row) => <span className="text-ink-muted">{row.coLeader}</span> },
    { key: "members", header: "Members", render: (row) => <span className="text-ink">{row.members}</span> },
    { key: "meetingDay", header: "Meeting Day", render: (row) => <span className="text-ink-muted">{row.meetingDay}</span> },
    { key: "meetingTime", header: "Meeting Time", render: (row) => <span className="text-ink-muted">{row.meetingTime}</span> },
    { key: "location", header: "Location", render: (row) => <span className="text-ink-muted">{row.location}</span> },
    { key: "status", header: "Status", render: (row) => <Badge variant="success">{row.status}</Badge> },
  ];

  return (
    <div className="space-y-5 pb-10">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <h1 className="font-display text-2xl font-bold text-ink">Fellowship Groups</h1>
          <p className="mt-1 text-sm text-ink-subtle">Manage men&apos;s fellowship groups and their leadership.</p>
        </div>
        <Button type="button" leftIcon={<Plus className="h-4 w-4" />}>Add New Group</Button>
      </div>

      <div className="rounded-lg border border-border bg-white shadow-card">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border px-4 py-3">
          <h3 className="text-base font-semibold text-ink">Groups List</h3>
          <div className="relative">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-subtle" />
            <input
              value={search} onChange={(e) => setSearch(e.target.value)}
              placeholder="Search groups..."
              className="h-9 w-56 rounded-md border border-border bg-white pl-9 pr-3 text-sm text-ink placeholder:text-ink-subtle focus:outline-none focus:ring-2 focus:ring-interactive-500/20 focus:border-interactive-500"
            />
          </div>
        </div>
        <Table columns={columns} data={items} isLoading={isLoading} getRowId={(row) => row.id} className="rounded-none border-0 shadow-none" pagination={{ page, pageSize, totalCount, onPageChange: setPage }} />
      </div>
    </div>
  );
}
