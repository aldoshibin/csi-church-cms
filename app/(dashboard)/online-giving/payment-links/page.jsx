"use client";

import Link from "next/link";
import { Plus, Download, ChevronDown } from "lucide-react";

import { usePaymentLinks } from "@/hooks/usePaymentLinks";
import { Button } from "@/components/ui/Button";
import { PaymentLinksStatsCards } from "@/components/online-giving/payment-links/PaymentLinksStatsCards";
import { PaymentLinksFilters } from "@/components/online-giving/payment-links/PaymentLinksFilters";
import { PaymentLinksTable } from "@/components/online-giving/payment-links/PaymentLinksTable";
import { LinkSummaryPanel } from "@/components/online-giving/payment-links/LinkSummaryPanel";
import { ClicksAmountOverviewChart } from "@/components/online-giving/payment-links/ClicksAmountOverviewChart";
import { RecentLinkActivityPanel } from "@/components/online-giving/payment-links/RecentLinkActivityPanel";
import { PaymentLinksQuickActions } from "@/components/online-giving/payment-links/PaymentLinksQuickActions";
import { LinkDetailsPanel } from "@/components/online-giving/payment-links/LinkDetailsPanel";

export default function PaymentLinksPage() {
  const {
    links, totalCount, isLoading, stats, clicksAmountOverview, linkSummary, recentActivity,
    search, setSearch, statusFilter, setStatusFilter, fundFilter, setFundFilter, createdFilter,
    page, setPage, pageSize,
    selectedLink, setSelectedLink,
  } = usePaymentLinks();

  return (
    <div className="space-y-5 pb-10">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <h1 className="font-display text-2xl font-bold text-ink">Payment Links</h1>
          <nav className="mt-1 flex items-center gap-1.5 text-xs text-interactive-500">
            <Link href="/online-giving" className="hover:underline">Online Giving &amp; Payments</Link>
            <span className="text-ink-subtle">›</span>
            <span className="text-ink-subtle">Payment Links</span>
          </nav>
          <p className="mt-1 text-sm text-ink-subtle">Create, manage and share payment links for easy and secure donations.</p>
        </div>
        <div className="flex items-center gap-2">
          <Button type="button" leftIcon={<Plus className="h-4 w-4" />}>New Payment Link</Button>
          <Button type="button" variant="secondary" leftIcon={<Download className="h-4 w-4" />} rightIcon={<ChevronDown className="h-4 w-4 opacity-70" />}>
            Export
          </Button>
        </div>
      </div>

      <PaymentLinksStatsCards stats={stats} />

      <PaymentLinksFilters
        search={search} onSearchChange={setSearch}
        statusFilter={statusFilter} onStatusChange={setStatusFilter}
        fundFilter={fundFilter} onFundChange={setFundFilter}
        createdFilter={createdFilter}
      />

      <div className="grid grid-cols-1 gap-5 xl:grid-cols-3">
        <div className="xl:col-span-2">
          <PaymentLinksTable
            links={links}
            isLoading={isLoading}
            selectedId={selectedLink?.id}
            pagination={{ page, pageSize, totalCount, onPageChange: setPage }}
            onView={(row) => setSelectedLink(row)}
            onEdit={(row) => console.log("Edit", row.id)}
            onDuplicate={(row) => console.log("Duplicate", row.id)}
            onDeactivate={(row) => console.log("Deactivate", row.id)}
            onDelete={(row) => console.log("Delete", row.id)}
          />
        </div>

        <div className="flex flex-col gap-5">
          {selectedLink ? (
            <LinkDetailsPanel
              link={selectedLink}
              onClose={() => setSelectedLink(null)}
              onViewDashboard={() => console.log("View dashboard", selectedLink.id)}
              onShare={() => console.log("Share", selectedLink.id)}
              onEdit={() => console.log("Edit", selectedLink.id)}
              onDuplicate={() => console.log("Duplicate", selectedLink.id)}
              onDeactivate={() => console.log("Deactivate", selectedLink.id)}
              onDelete={() => { console.log("Delete", selectedLink.id); setSelectedLink(null); }}
            />
          ) : (
            <>
              <LinkSummaryPanel summary={linkSummary} />
              <ClicksAmountOverviewChart data={clicksAmountOverview} />
              <RecentLinkActivityPanel activity={recentActivity} />
              <PaymentLinksQuickActions />
            </>
          )}
        </div>
      </div>
    </div>
  );
}
