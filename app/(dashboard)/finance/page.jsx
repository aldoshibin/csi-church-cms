"use client";

import Link from "next/link";
import { Plus, ChevronDown } from "lucide-react";

import { useFinanceDashboard } from "@/hooks/useFinanceDashboard";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { MiniTableWidget } from "@/components/dashboard/MiniTableWidget";
import { FinanceSummaryCards } from "@/components/finance/FinanceSummaryCards";
import { CashFlowChart } from "@/components/finance/CashFlowChart";
import { IncomeVsExpensesCard } from "@/components/finance/IncomeVsExpensesCard";
import { BudgetVsActualCard } from "@/components/finance/BudgetVsActualCard";
import { TopExpenseCategoriesCard } from "@/components/finance/TopExpenseCategoriesCard";
import { UpcomingPaymentsCard } from "@/components/finance/UpcomingPaymentsCard";
import { FinanceQuickActionsCard } from "@/components/finance/FinanceQuickActionsCard";
import { formatCurrency, formatDate } from "@/lib/utils";

export default function FinanceDashboardPage() {
  const { data } = useFinanceDashboard();

  return (
    <div className="space-y-5 pb-10">
      {/* Header */}
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <h1 className="font-display text-2xl font-bold text-ink">Finance &amp; Accounting</h1>
          <nav className="mt-1 flex items-center gap-1.5 text-xs text-interactive-500">
            <Link href="/finance" className="hover:underline">Finance &amp; Accounting</Link>
            <span className="text-ink-subtle">›</span>
            <span className="text-ink-subtle">Dashboard</span>
          </nav>
        </div>
        <Link href="/finance/transactions/add">
          <Button type="button" leftIcon={<Plus className="h-4 w-4" />} rightIcon={<ChevronDown className="h-4 w-4 opacity-70" />}>
            Add Transaction
          </Button>
        </Link>
      </div>

      {/* Summary cards */}
      <FinanceSummaryCards cards={data.cards} />

      {/* Recent transactions + Income vs Expenses */}
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <MiniTableWidget
            title="Recent Transactions"
            viewAllHref="/finance/income"
            rows={data.recentTransactions}
            getRowId={(row) => row.id}
            columns={[
              { key: "date", header: "Date", render: (row) => formatDate(row.date) },
              { key: "ref", header: "Reference" },
              { key: "description", header: "Description" },
              { key: "category", header: "Category" },
              {
                key: "type", header: "Type",
                render: (row) => <Badge variant={row.type === "Income" ? "success" : "danger"}>{row.type}</Badge>,
              },
              { key: "amount", header: "Amount", render: (row) => formatCurrency(row.amount) },
            ]}
          />
        </div>
        <IncomeVsExpensesCard total={data.incomeVsExpenses.total} breakdown={data.incomeVsExpenses.breakdown} />
      </div>

      {/* Cash flow + Budget vs Actual + Top expense categories */}
      <div className="grid grid-cols-1 gap-4 xl:grid-cols-3">
        <CashFlowChart data={data.cashFlow} />
        <BudgetVsActualCard rows={data.budgetVsActual} />
        <TopExpenseCategoriesCard categories={data.topExpenseCategories} />
      </div>

      {/* Quick actions + Upcoming payments */}
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <FinanceQuickActionsCard />
        </div>
        <UpcomingPaymentsCard payments={data.upcomingPayments} />
      </div>
    </div>
  );
}
