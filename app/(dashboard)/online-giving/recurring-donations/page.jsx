"use client";

import Link from "next/link";
import { Plus, Download, ChevronDown } from "lucide-react";

import { useRecurringDonations } from "@/hooks/useRecurringDonations";
import { Button } from "@/components/ui/Button";
import { RecurringDonationsFilters } from "@/components/online-giving/recurring-donations/RecurringDonationsFilters";
import { RecurringDonationsTable } from "@/components/online-giving/recurring-donations/RecurringDonationsTable";
import { RecurringSummaryPanel } from "@/components/online-giving/recurring-donations/RecurringSummaryPanel";
import { SubscriptionsByStatusCard } from "@/components/online-giving/recurring-donations/SubscriptionsByStatusCard";
import { SubscriptionsByFrequencyCard } from "@/components/online-giving/recurring-donations/SubscriptionsByFrequencyCard";
import { RecurringQuickActions } from "@/components/online-giving/recurring-donations/RecurringQuickActions";
import { SubscriptionDetailsPanel } from "@/components/online-giving/recurring-donations/SubscriptionDetailsPanel";

export default function RecurringDonationsPage() {
  const {
    subscriptions, totalCount, isLoading, summary, statusBreakdown, frequencyBreakdown,
    search, setSearch, statusFilter, setStatusFilter, fundFilter, setFundFilter, frequencyFilter, setFrequencyFilter,
    page, setPage, pageSize,
    selectedSubscription, setSelectedSubscription,
  } = useRecurringDonations();

  return (
    <div className="space-y-5 pb-10">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <h1 className="font-display text-2xl font-bold text-ink">Recurring Donations</h1>
          <nav className="mt-1 flex items-center gap-1.5 text-xs text-interactive-500">
            <Link href="/online-giving" className="hover:underline">Online Giving &amp; Payments</Link>
            <span className="text-ink-subtle">›</span>
            <span className="text-ink-subtle">Recurring Donations</span>
          </nav>
          <p className="mt-1 text-sm text-ink-subtle">Manage and track all recurring donations and donor subscriptions.</p>
        </div>
        <div className="flex items-center gap-2">
          <Link href="/online-giving/recurring-donations/add">
            <Button type="button" leftIcon={<Plus className="h-4 w-4" />}>New Recurring Donation</Button>
          </Link>
          <Button type="button" variant="secondary" leftIcon={<Download className="h-4 w-4" />} rightIcon={<ChevronDown className="h-4 w-4 opacity-70" />}>
            Export
          </Button>
        </div>
      </div>

      <RecurringDonationsFilters
        search={search} onSearchChange={setSearch}
        statusFilter={statusFilter} onStatusChange={setStatusFilter}
        fundFilter={fundFilter} onFundChange={setFundFilter}
        frequencyFilter={frequencyFilter} onFrequencyChange={setFrequencyFilter}
      />

      <div className="grid grid-cols-1 gap-5 xl:grid-cols-3">
        <div className="xl:col-span-2">
          <RecurringDonationsTable
            subscriptions={subscriptions}
            isLoading={isLoading}
            selectedId={selectedSubscription?.id}
            pagination={{ page, pageSize, totalCount, onPageChange: setPage }}
            onView={(row) => setSelectedSubscription(row)}
            onEdit={(row) => console.log("Edit", row.id)}
            onPause={(row) => console.log("Pause", row.id)}
            onCancel={(row) => console.log("Cancel", row.id)}
            onUpdatePaymentMethod={(row) => console.log("Update payment method", row.id)}
          />
        </div>

        <div className="flex flex-col gap-5">
          {selectedSubscription ? (
            <SubscriptionDetailsPanel
              subscription={selectedSubscription}
              onClose={() => setSelectedSubscription(null)}
              onEdit={() => console.log("Edit", selectedSubscription.id)}
              onPause={() => console.log("Pause", selectedSubscription.id)}
              onCancel={() => console.log("Cancel", selectedSubscription.id)}
              onUpdatePaymentMethod={() => console.log("Update payment method", selectedSubscription.id)}
              onViewPaymentHistory={() => console.log("View payment history", selectedSubscription.id)}
              onDownloadReceipt={() => console.log("Download receipt", selectedSubscription.id)}
            />
          ) : (
            <>
              <RecurringSummaryPanel summary={summary} />
              <SubscriptionsByStatusCard breakdown={statusBreakdown} />
              <SubscriptionsByFrequencyCard breakdown={frequencyBreakdown} />
              <RecurringQuickActions />
            </>
          )}
        </div>
      </div>
    </div>
  );
}
