"use client";

import Link from "next/link";
import { Plus, Download, ChevronDown } from "lucide-react";

import { useDonations } from "@/hooks/useDonations";
import { Button } from "@/components/ui/Button";
import { DonationsFilters } from "@/components/online-giving/donations/DonationsFilters";
import { DonationsTable } from "@/components/online-giving/donations/DonationsTable";
import { DonationDetailsPanel } from "@/components/online-giving/donations/DonationDetailsPanel";

export default function DonationsPage() {
  const {
    donations, totalCount, isLoading,
    search, setSearch,
    paymentMethodFilter, setPaymentMethodFilter,
    fundFilter, setFundFilter,
    statusFilter, setStatusFilter,
    dateRange, page, setPage, pageSize,
    selectedDonation, setSelectedDonation,
  } = useDonations();

  return (
    <div className="space-y-5 pb-10">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <h1 className="font-display text-2xl font-bold text-ink">Donations</h1>
          <nav className="mt-1 flex items-center gap-1.5 text-xs text-interactive-500">
            <Link href="/online-giving" className="hover:underline">Online Giving &amp; Payments</Link>
            <span className="text-ink-subtle">›</span>
            <span className="text-ink-subtle">Donations</span>
          </nav>
          <p className="mt-1 text-sm text-ink-subtle">View and manage all online donations and contributions.</p>
        </div>
        <div className="flex items-center gap-2">
          <Link href="/online-giving/payment-links">
            <Button type="button" leftIcon={<Plus className="h-4 w-4" />}>New Payment Link</Button>
          </Link>
          <Button type="button" variant="secondary" leftIcon={<Download className="h-4 w-4" />} rightIcon={<ChevronDown className="h-4 w-4 opacity-70" />}>
            Export
          </Button>
        </div>
      </div>

      <DonationsFilters
        dateRange={dateRange}
        paymentMethodFilter={paymentMethodFilter} onPaymentMethodChange={setPaymentMethodFilter}
        fundFilter={fundFilter} onFundChange={setFundFilter}
        statusFilter={statusFilter} onStatusChange={setStatusFilter}
        search={search} onSearchChange={setSearch}
      />

      <DonationsTable
        donations={donations}
        isLoading={isLoading}
        selectedId={selectedDonation?.id}
        pagination={{ page, pageSize, totalCount, onPageChange: setPage }}
        onView={setSelectedDonation}
        onSendReceipt={(d) => console.log("Send receipt", d.id)}
        onRefund={(d) => console.log("Refund", d.id)}
        onDelete={(d) => console.log("Delete", d.id)}
      />

      <DonationDetailsPanel
        donation={selectedDonation}
        onClose={() => setSelectedDonation(null)}
        onSendReceipt={(d) => console.log("Send receipt", d.id)}
        onRefund={(d) => console.log("Refund", d.id)}
        onDelete={(d) => { console.log("Delete", d.id); setSelectedDonation(null); }}
      />
    </div>
  );
}
