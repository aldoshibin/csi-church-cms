"use client";

import Link from "next/link";
import { Download, ChevronDown, Plus } from "lucide-react";

import { useAuditLogs } from "@/hooks/useAuditLogs";
import { Button } from "@/components/ui/Button";
import { AuditLogsTopStatsCards } from "@/components/finance/audit-logs/AuditLogsTopStatsCards";
import { AuditLogsFilters } from "@/components/finance/audit-logs/AuditLogsFilters";
import { AuditLogsTable } from "@/components/finance/audit-logs/AuditLogsTable";
import { AuditLogInfoPanel } from "@/components/finance/audit-logs/AuditLogInfoPanel";
import { AuditLogsSummaryPanel } from "@/components/finance/audit-logs/AuditLogsSummaryPanel";
import { TopActiveUsersPanel } from "@/components/finance/audit-logs/TopActiveUsersPanel";

export default function AuditLogsPage() {
  const {
    logs, totalCount, summary, topStats, topActiveUsers, isLoading,
    search, setSearch,
    moduleFilter, setModuleFilter, actionFilter, setActionFilter, userFilter, setUserFilter,
    dateRange,
    page, setPage, pageSize,
  } = useAuditLogs();

  return (
    <div className="space-y-5 pb-10">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <h1 className="font-display text-2xl font-bold text-ink">Audit Logs</h1>
          <nav className="mt-1 flex items-center gap-1.5 text-xs text-interactive-500">
            <Link href="/finance" className="hover:underline">Finance &amp; Accounting</Link>
            <span className="text-ink-subtle">›</span>
            <span className="text-ink-subtle">Audit Logs</span>
          </nav>
          <p className="mt-1 text-sm text-ink-subtle">Track and review all system activities and changes made by users.</p>
        </div>
        <div className="flex items-center gap-2">
          <Button type="button" leftIcon={<Plus className="h-4 w-4" />}>New Payment Link</Button>
          <Button type="button" variant="secondary" leftIcon={<Download className="h-4 w-4" />} rightIcon={<ChevronDown className="h-4 w-4 opacity-70" />}>
            Export
          </Button>
        </div>
      </div>

      <AuditLogsTopStatsCards stats={topStats} />

      <AuditLogsFilters
        dateRange={dateRange}
        moduleFilter={moduleFilter} onModuleChange={setModuleFilter}
        actionFilter={actionFilter} onActionChange={setActionFilter}
        userFilter={userFilter} onUserChange={setUserFilter}
        search={search} onSearchChange={setSearch}
      />

      <div className="grid grid-cols-1 gap-5 xl:grid-cols-3">
        <div className="xl:col-span-2">
          <AuditLogsTable
            logs={logs}
            isLoading={isLoading}
            pagination={{ page, pageSize, totalCount, onPageChange: setPage }}
          />
        </div>

        <div className="flex flex-col gap-5">
          <AuditLogInfoPanel />
          <AuditLogsSummaryPanel summary={summary} />
          <TopActiveUsersPanel users={topActiveUsers} />
        </div>
      </div>
    </div>
  );
}
