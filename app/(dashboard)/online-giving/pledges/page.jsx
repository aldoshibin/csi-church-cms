"use client";

import Link from "next/link";
import { Plus, Download, ChevronDown } from "lucide-react";

import { usePledges } from "@/hooks/usePledges";
import { Button } from "@/components/ui/Button";
import { PledgesFilters } from "@/components/online-giving/pledges/PledgesFilters";
import { PledgesTable } from "@/components/online-giving/pledges/PledgesTable";
import { PledgeSummaryPanel } from "@/components/online-giving/pledges/PledgeSummaryPanel";
import { PledgesByStatusCard } from "@/components/online-giving/pledges/PledgesByStatusCard";
import { PledgesByFundCard } from "@/components/online-giving/pledges/PledgesByFundCard";
import { PledgesQuickActions } from "@/components/online-giving/pledges/PledgesQuickActions";
import { PledgeDetailsPanel } from "@/components/online-giving/pledges/PledgeDetailsPanel";

export default function PledgesPage() {
  const {
    pledges, totalCount, isLoading, summary, statusBreakdown, fundBreakdown,
    search, setSearch, statusFilter, setStatusFilter, fundFilter, setFundFilter, yearFilter, setYearFilter,
    page, setPage, pageSize,
    selectedPledge, setSelectedPledge,
  } = usePledges();

  return (
    <div className="space-y-5 pb-10">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <h1 className="font-display text-2xl font-bold text-ink">Pledges</h1>
          <nav className="mt-1 flex items-center gap-1.5 text-xs text-interactive-500">
            <Link href="/online-giving" className="hover:underline">Online Giving &amp; Payments</Link>
            <span className="text-ink-subtle">›</span>
            <span className="text-ink-subtle">Pledges</span>
          </nav>
          <p className="mt-1 text-sm text-ink-subtle">Manage pledged donations and track commitment progress.</p>
        </div>
        <div className="flex items-center gap-2">
          <Link href="/online-giving/pledges/add">
            <Button type="button" leftIcon={<Plus className="h-4 w-4" />}>New Pledge</Button>
          </Link>
          <Button type="button" variant="secondary" leftIcon={<Download className="h-4 w-4" />} rightIcon={<ChevronDown className="h-4 w-4 opacity-70" />}>
            Export
          </Button>
        </div>
      </div>

      <PledgesFilters
        search={search} onSearchChange={setSearch}
        statusFilter={statusFilter} onStatusChange={setStatusFilter}
        fundFilter={fundFilter} onFundChange={setFundFilter}
        yearFilter={yearFilter} onYearChange={setYearFilter}
      />

      <div className="grid grid-cols-1 gap-5 xl:grid-cols-3">
        <div className="xl:col-span-2">
          <PledgesTable
            pledges={pledges}
            isLoading={isLoading}
            selectedId={selectedPledge?.id}
            pagination={{ page, pageSize, totalCount, onPageChange: setPage }}
            onView={(row) => setSelectedPledge(row)}
            onEdit={(row) => console.log("Edit", row.id)}
            onRecordPayment={(row) => console.log("Record payment", row.id)}
            onViewPaymentHistory={(row) => console.log("View payment history", row.id)}
            onCancel={(row) => console.log("Cancel", row.id)}
          />
        </div>

        <div className="flex flex-col gap-5">
          {selectedPledge ? (
            <PledgeDetailsPanel
              pledge={selectedPledge}
              onClose={() => setSelectedPledge(null)}
              onEdit={() => console.log("Edit", selectedPledge.id)}
              onRecordPayment={() => console.log("Record payment", selectedPledge.id)}
              onCancel={() => console.log("Cancel", selectedPledge.id)}
              onViewPaymentHistory={() => console.log("View payment history", selectedPledge.id)}
              onDownload={() => console.log("Download", selectedPledge.id)}
            />
          ) : (
            <>
              <PledgeSummaryPanel summary={summary} />
              <PledgesByStatusCard breakdown={statusBreakdown} />
              <PledgesByFundCard breakdown={fundBreakdown} />
              <PledgesQuickActions />
            </>
          )}
        </div>
      </div>
    </div>
  );
}
