"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";

import { Button } from "@/components/ui/Button";
import { useAddTransactionForm } from "@/hooks/useAddTransactionForm";
import { TransactionStepper } from "@/components/finance/transactions/TransactionStepper";
import { TransactionSummaryPanel } from "@/components/finance/transactions/TransactionSummaryPanel";
import { AccountBalancePanel } from "@/components/finance/transactions/AccountBalancePanel";
import { AllocationSummaryPanel } from "@/components/finance/transactions/AllocationSummaryPanel";
import { NotePanel } from "@/components/finance/transactions/NotePanel";
import Step1TransactionDetails from "@/components/finance/transactions/steps/Step1TransactionDetails";
import Step2AdditionalInformation from "@/components/finance/transactions/steps/Step2AdditionalInformation";
import Step3ReviewConfirm from "@/components/finance/transactions/steps/Step3ReviewConfirm";
import Step4Success from "@/components/finance/transactions/steps/Step4Success";

export default function AddTransactionPage() {
  const router = useRouter();
  const {
    form, setField, payment, setPaymentField,
    allocations, allocationRowsWithAmount, addAllocation, updateAllocation, removeAllocation, totalAllocationPct,
    accountBalance,
    currentStep, completedSteps, goToStep, goNext, goPrevious,
    isSubmitting, submit, resetForm,
  } = useAddTransactionForm();

  const totalAllocationAmount = allocationRowsWithAmount.reduce((sum, row) => sum + row.amount, 0);

  const handleConfirm = async () => {
    await submit();
  };

  return (
    <div className="space-y-5 pb-16">
      <div className="flex items-start justify-between">
        <div>
          <Link href="/finance">
            <Button type="button" variant="secondary" size="sm" leftIcon={<ArrowLeft className="h-4 w-4" />}>
              Back
            </Button>
          </Link>
          <h1 className="mt-3 font-display text-2xl font-bold text-ink">Add Transaction</h1>
          <nav className="mt-1 flex items-center gap-1.5 text-xs text-interactive-500">
            <Link href="/finance" className="hover:underline">Finance &amp; Accounting</Link>
            <span className="text-ink-subtle">›</span>
            <Link href="/finance/income" className="hover:underline">Transactions</Link>
            <span className="text-ink-subtle">›</span>
            <span className="text-ink-subtle">Add Transaction</span>
          </nav>
        </div>
      </div>

      <TransactionStepper currentStep={currentStep} completedSteps={completedSteps} onStepClick={goToStep} />

      <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
        <div className="lg:col-span-2">
          {currentStep === 1 && (
            <Step1TransactionDetails form={form} setField={setField} onNext={goNext} />
          )}

          {currentStep === 2 && (
            <Step2AdditionalInformation
              form={form} payment={payment} setPaymentField={setPaymentField}
              allocationRowsWithAmount={allocationRowsWithAmount}
              addAllocation={addAllocation} updateAllocation={updateAllocation} removeAllocation={removeAllocation}
              totalAllocationPct={totalAllocationPct}
              onNext={goNext} onPrevious={goPrevious}
            />
          )}

          {currentStep === 3 && (
            <Step3ReviewConfirm
              form={form} payment={payment} isSubmitting={isSubmitting}
              onConfirm={handleConfirm} onPrevious={goPrevious}
            />
          )}

          {currentStep === 4 && (
            <Step4Success
              form={form}
              onAddAnother={resetForm}
              onBackToDashboard={() => router.push("/finance")}
            />
          )}
        </div>

        {currentStep < 4 && (
          <div className="flex flex-col gap-5">
            <TransactionSummaryPanel form={form} />

            {currentStep === 1 && (
              <>
                <AccountBalancePanel accountName={form.account} balance={accountBalance.balance} lastUpdated={accountBalance.lastUpdated} />
                <NotePanel>Please verify all details before proceeding. You can review and confirm in the next step.</NotePanel>
              </>
            )}

            {currentStep === 2 && (
              <>
                <AllocationSummaryPanel rows={allocationRowsWithAmount} totalPct={totalAllocationPct} totalAmount={totalAllocationAmount} />
                <NotePanel>Please review the additional information before proceeding to the final confirmation.</NotePanel>
              </>
            )}

            {currentStep === 3 && (
              <NotePanel>Once confirmed, this transaction will be posted to the ledger and cannot be edited without an audit trail entry.</NotePanel>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
