"use client";

import Link from "next/link";

import { useExpenses } from "@/hooks/useExpenses";
import { ExpensesStatsCards } from "@/components/finance/expenses/ExpensesStatsCards";
import { ExpenseTrendChart } from "@/components/finance/expenses/ExpenseTrendChart";
import { ExpenseByCategoryCard } from "@/components/finance/expenses/ExpenseByCategoryCard";
import { ExpensesTableToolbar } from "@/components/finance/expenses/ExpensesTableToolbar";
import { ExpensesTable } from "@/components/finance/expenses/ExpensesTable";

export default function ExpensesPage() {
  const {
    stats, trend, byCategory, byCategoryTotal,
    expenses, totalCount, isLoading,
    search, setSearch, page, setPage, pageSize,
  } = useExpenses();

  return (
    <div className="space-y-5 pb-10">
      <div>
        <h1 className="font-display text-2xl font-bold text-ink">Expenses</h1>
        <nav className="mt-1 flex items-center gap-1.5 text-xs text-interactive-500">
          <Link href="/finance" className="hover:underline">Finance &amp; Accounting</Link>
          <span className="text-ink-subtle">›</span>
          <span className="text-ink-subtle">Expenses</span>
        </nav>
      </div>

      <ExpensesStatsCards stats={stats} />

      <div className="grid grid-cols-1 gap-4 xl:grid-cols-2">
        <ExpenseTrendChart data={trend} />
        <ExpenseByCategoryCard categories={byCategory} total={byCategoryTotal} />
      </div>

      <ExpensesTableToolbar search={search} onSearchChange={setSearch} />

      <ExpensesTable
        expenses={expenses}
        isLoading={isLoading}
        pagination={{ page, pageSize, totalCount, onPageChange: setPage }}
      />
    </div>
  );
}
