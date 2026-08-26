"use client";

import Link from "next/link";

import { useIncome } from "@/hooks/useIncome";
import { IncomeStatsCards } from "@/components/finance/income/IncomeStatsCards";
import { IncomeTrendChart } from "@/components/finance/income/IncomeTrendChart";
import { IncomeByCategoryCard } from "@/components/finance/income/IncomeByCategoryCard";
import { IncomeTableToolbar } from "@/components/finance/income/IncomeTableToolbar";
import { IncomeTable } from "@/components/finance/income/IncomeTable";

export default function IncomePage() {
  const {
    stats, trend, byCategory, byCategoryTotal,
    income, totalCount, isLoading,
    search, setSearch, page, setPage, pageSize,
  } = useIncome();

  return (
    <div className="space-y-5 pb-10">
      <div>
        <h1 className="font-display text-2xl font-bold text-ink">Income</h1>
        <nav className="mt-1 flex items-center gap-1.5 text-xs text-interactive-500">
          <Link href="/finance" className="hover:underline">Finance &amp; Accounting</Link>
          <span className="text-ink-subtle">›</span>
          <span className="text-ink-subtle">Income</span>
        </nav>
      </div>

      <IncomeStatsCards stats={stats} />

      <div className="grid grid-cols-1 gap-4 xl:grid-cols-2">
        <IncomeTrendChart data={trend} />
        <IncomeByCategoryCard categories={byCategory} total={byCategoryTotal} />
      </div>

      <IncomeTableToolbar search={search} onSearchChange={setSearch} />

      <IncomeTable
        income={income}
        isLoading={isLoading}
        pagination={{ page, pageSize, totalCount, onPageChange: setPage }}
      />
    </div>
  );
}
