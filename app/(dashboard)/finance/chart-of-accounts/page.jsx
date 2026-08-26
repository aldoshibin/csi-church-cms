"use client";

import Link from "next/link";
import { Plus, ChevronDown } from "lucide-react";

import { useChartOfAccounts } from "@/hooks/useChartOfAccounts";
import { Button } from "@/components/ui/Button";
import { ChartOfAccountsStatsCards } from "@/components/finance/chart-of-accounts/ChartOfAccountsStatsCards";
import { ChartOfAccountsFilters } from "@/components/finance/chart-of-accounts/ChartOfAccountsFilters";
import { ChartOfAccountsTable } from "@/components/finance/chart-of-accounts/ChartOfAccountsTable";

export default function ChartOfAccountsPage() {
  const {
    stats, isLoading, accounts, totalCount,
    search, setSearch, typeFilter, setTypeFilter, categoryFilter, setCategoryFilter, statusFilter, setStatusFilter,
    page, setPage, pageSize, view, setView,
    collapsedCodes, toggleCollapse,
  } = useChartOfAccounts();

  return (
    <div className="space-y-5 pb-10">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <h1 className="font-display text-2xl font-bold text-ink">Chart of Accounts</h1>
          <nav className="mt-1 flex items-center gap-1.5 text-xs text-interactive-500">
            <Link href="/finance" className="hover:underline">Finance &amp; Accounting</Link>
            <span className="text-ink-subtle">›</span>
            <span className="text-ink-subtle">Chart of Accounts</span>
          </nav>
        </div>
        <Link href="/finance/chart-of-accounts/add">
          <Button type="button" leftIcon={<Plus className="h-4 w-4" />} rightIcon={<ChevronDown className="h-4 w-4 opacity-70" />}>
            Add New Account
          </Button>
        </Link>
      </div>

      <ChartOfAccountsStatsCards stats={stats} />

      <ChartOfAccountsFilters
        search={search} onSearchChange={setSearch}
        typeFilter={typeFilter} onTypeChange={setTypeFilter}
        categoryFilter={categoryFilter} onCategoryChange={setCategoryFilter}
        statusFilter={statusFilter} onStatusChange={setStatusFilter}
        view={view} onViewChange={setView}
      />

      <ChartOfAccountsTable
        accounts={accounts}
        isLoading={isLoading}
        collapsedCodes={collapsedCodes}
        onToggleCollapse={toggleCollapse}
        pagination={{ page, pageSize, totalCount, onPageChange: setPage }}
      />
    </div>
  );
}
