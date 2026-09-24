"use client";

import Link from "next/link";
import { Plus, Download, ChevronDown } from "lucide-react";

import { useRefunds } from "@/hooks/useRefunds";
import { Button } from "@/components/ui/Button";
import { RefundsStatsCards } from "@/components/online-giving/refunds/RefundsStatsCards";
import { RefundsFilters } from "@/components/online-giving/refunds/RefundsFilters";
import { RefundsTable } from "@/components/online-giving/refunds/RefundsTable";
import { RefundSummaryPanel } from "@/components/online-giving/refunds/RefundSummaryPanel";
import { RefundsByStatusCard } from "@/components/online-giving/refunds/RefundsByStatusCard";
import { RefundsByPaymentMethodCard } from "@/components/online-giving/refunds/RefundsByPaymentMethodCard";
import { RefundsQuickActions } from "@/components/online-giving/refunds/RefundsQuickActions";
import { RefundDetailsPanel } from "@/components/online-giving/refunds/RefundDetailsPanel";

export default function RefundsPage() {
  const {
    refunds, totalCount, isLoading, stats, summary, statusBreakdown, paymentMethodBreakdown,
    search, setSearch, statusFilter, setStatusFilter, fundFilter, setFundFilter, dateRange,
    page, setPage, pageSize,
    selectedRefund, setSelectedRefund,
  } = useRefunds();

  return (
    <div className="space-y-5 pb-10">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <h1 className="font-display text-2xl font-bold text-ink">Refunds</h1>
          <nav className="mt-1 flex items-center gap-1.5 text-xs text-interactive-500">
            <Link href="/online-giving" className="hover:underline">Online Giving &amp; Payments</Link>
            <span className="text-ink-subtle">›</span>
            <span className="text-ink-subtle">Refunds</span>
          </nav>
          <p className="mt-1 text-sm text-ink-subtle">Track and manage all refunds issued to donors.</p>
        </div>
        <div className="flex items-center gap-2">
          <Link href="/online-giving/refunds/add">
            <Button type="button" leftIcon={<Plus className="h-4 w-4" />}>New Refund</Button>
          </Link>
          <Button type="button" variant="secondary" leftIcon={<Download className="h-4 w-4" />} rightIcon={<ChevronDown className="h-4 w-4 opacity-70" />}>
            Export
          </Button>
        </div>
      </div>

      <RefundsStatsCards stats={stats} />

      <RefundsFilters
        search={search} onSearchChange={setSearch}
        statusFilter={statusFilter} onStatusChange={setStatusFilter}
        fundFilter={fundFilter} onFundChange={setFundFilter}
        dateRange={dateRange}
      />

      <div className="grid grid-cols-1 gap-5 xl:grid-cols-3">
        <div className="xl:col-span-2">
          <RefundsTable
            refunds={refunds}
            isLoading={isLoading}
            selectedId={selectedRefund?.id}
            pagination={{ page, pageSize, totalCount, onPageChange: setPage }}
            onView={(row) => setSelectedRefund(row)}
            onViewPayment={(row) => console.log("View payment", row.id)}
            onDownloadInvoice={(row) => console.log("Download invoice", row.id)}
            onRefundReceipt={(row) => console.log("Refund receipt", row.id)}
            onCancel={(row) => console.log("Cancel", row.id)}
          />
        </div>

        <div className="flex flex-col gap-5">
          {selectedRefund ? (
            <RefundDetailsPanel
              refund={selectedRefund}
              onClose={() => setSelectedRefund(null)}
              onViewPayment={() => console.log("View payment", selectedRefund.id)}
              onDownloadInvoice={() => console.log("Download invoice", selectedRefund.id)}
              onRefundReceipt={() => console.log("Refund receipt", selectedRefund.id)}
              onCancel={() => console.log("Cancel", selectedRefund.id)}
            />
          ) : (
            <>
              <RefundSummaryPanel summary={summary} />
              <RefundsByStatusCard breakdown={statusBreakdown} />
              <RefundsByPaymentMethodCard breakdown={paymentMethodBreakdown} />
              <RefundsQuickActions />
            </>
          )}
        </div>
      </div>
    </div>
  );
}
