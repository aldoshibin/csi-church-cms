"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { Button } from "@/components/ui/Button";
import { useAddExpenseForm } from "@/hooks/useAddExpenseForm";
import { ExpenseFormStepper } from "@/components/finance/expenses/ExpenseFormStepper";
import { ExpenseSummaryPreviewPanel } from "@/components/finance/expenses/ExpenseSummaryPreviewPanel";
import { IconTipsPanel } from "@/components/finance/expenses/IconTipsPanel";
import { PlainTipsPanel } from "@/components/finance/expenses/PlainTipsPanel";
import { PleaseConfirmPanel } from "@/components/finance/expenses/PleaseConfirmPanel";
import { ExpenseChecklistPanel } from "@/components/finance/expenses/ExpenseChecklistPanel";
import { RecordInformationPanel } from "@/components/finance/expenses/RecordInformationPanel";
import { NotePanel } from "@/components/finance/transactions/NotePanel";
import Step1ExpenseDetails from "@/components/finance/expenses/steps/Step1ExpenseDetails";
import Step2PaymentInformation from "@/components/finance/expenses/steps/Step2PaymentInformation";
import Step3ReviewConfirm from "@/components/finance/expenses/steps/Step3ReviewConfirm";
import Step4Success from "@/components/finance/expenses/steps/Step4Success";

export default function AddExpensePage() {
  const {
    form, setField,
    currentStep, completedSteps, goToStep, goNext, goPrevious,
    isSubmitting, submit, resetForm, createdExpense,
  } = useAddExpenseForm();

  return (
    <div className="space-y-5 pb-16">
      <div>
        {currentStep < 4 && (
          <Link href="/finance/expenses">
            <Button type="button" variant="secondary" size="sm" leftIcon={<ArrowLeft className="h-4 w-4" />}>Back</Button>
          </Link>
        )}
        <h1 className="mt-3 font-display text-2xl font-bold text-ink">Add Expense</h1>
        <nav className="mt-1 flex items-center gap-1.5 text-xs text-interactive-500">
          <Link href="/finance" className="hover:underline">Finance &amp; Accounting</Link>
          <span className="text-ink-subtle">›</span>
          <Link href="/finance/expenses" className="hover:underline">Expenses</Link>
          <span className="text-ink-subtle">›</span>
          <span className="text-ink-subtle">Add Expense</span>
        </nav>
      </div>

      <ExpenseFormStepper currentStep={currentStep} completedSteps={completedSteps} onStepClick={goToStep} />

      <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
        <div className="lg:col-span-2">
          {currentStep === 1 && <Step1ExpenseDetails form={form} setField={setField} onNext={goNext} />}
          {currentStep === 2 && <Step2PaymentInformation form={form} setField={setField} onNext={goNext} onPrevious={goPrevious} />}
          {currentStep === 3 && (
            <Step3ReviewConfirm form={form} isSubmitting={isSubmitting} onConfirm={submit} onPrevious={goPrevious} />
          )}
          {currentStep === 4 && (
            <Step4Success onAddAnother={resetForm} onPrint={() => window.print()} />
          )}
        </div>

        <div className="flex flex-col gap-5">
          {currentStep === 1 && (
            <>
              <ExpenseSummaryPreviewPanel form={form} />
              <IconTipsPanel />
            </>
          )}

          {currentStep === 2 && (
            <>
              <ExpenseSummaryPreviewPanel form={form} />
              <PlainTipsPanel
                tips={[
                  "Choose the correct bank account to record this payment.",
                  "Enter the transaction or reference number for easy tracking.",
                  "Upload payment proof if available.",
                  "Ensure payment date is accurate.",
                ]}
              />
            </>
          )}

          {currentStep === 3 && (
            <>
              <ExpenseSummaryPreviewPanel form={form} />
              <PleaseConfirmPanel>Once confirmed, this expense will be recorded in the ledger and reflected in reports.</PleaseConfirmPanel>
              <ExpenseChecklistPanel />
            </>
          )}

          {currentStep === 4 && (
            <>
              <ExpenseSummaryPreviewPanel form={form} final />
              <NotePanel>You can view this expense in the Expenses list. It will also be included in your financial reports and analytics.</NotePanel>
              <RecordInformationPanel
                expenseNo={createdExpense?.expenseNo ?? "—"}
                recordedBy={createdExpense?.recordedBy ?? "—"}
                recordedOn={createdExpense?.recordedOn ?? "—"}
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
}
