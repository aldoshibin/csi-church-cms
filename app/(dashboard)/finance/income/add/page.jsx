"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { Button } from "@/components/ui/Button";
import { useAddIncomeForm } from "@/hooks/useAddIncomeForm";
import { IncomeFormStepper } from "@/components/finance/income/IncomeFormStepper";
import { IncomeSummaryPreviewPanel } from "@/components/finance/income/IncomeSummaryPreviewPanel";
import { IncomeIconTipsPanel } from "@/components/finance/income/IncomeIconTipsPanel";
import { IncomePlainTipsPanel } from "@/components/finance/income/IncomePlainTipsPanel";
import { IncomeWhatsNextPanel } from "@/components/finance/income/IncomeWhatsNextPanel";
import { IncomeChecklistPanel } from "@/components/finance/income/IncomeChecklistPanel";
import { IncomeRecordInformationPanel } from "@/components/finance/income/IncomeRecordInformationPanel";
import { NotePanel } from "@/components/finance/transactions/NotePanel";
import Step1IncomeDetails from "@/components/finance/income/steps/Step1IncomeDetails";
import Step2PaymentInformation from "@/components/finance/income/steps/Step2PaymentInformation";
import Step3ReviewConfirm from "@/components/finance/income/steps/Step3ReviewConfirm";
import Step4Success from "@/components/finance/income/steps/Step4Success";

export default function AddIncomePage() {
  const {
    form, setField,
    currentStep, completedSteps, goToStep, goNext, goPrevious,
    isSubmitting, submit, resetForm, createdIncome,
  } = useAddIncomeForm();

  return (
    <div className="space-y-5 pb-16">
      <div>
        {currentStep < 4 && (
          <Link href="/finance/income">
            <Button type="button" variant="secondary" size="sm" leftIcon={<ArrowLeft className="h-4 w-4" />}>Back</Button>
          </Link>
        )}
        <h1 className="mt-3 font-display text-2xl font-bold text-ink">Add Income</h1>
        <nav className="mt-1 flex items-center gap-1.5 text-xs text-interactive-500">
          <Link href="/finance" className="hover:underline">Finance &amp; Accounting</Link>
          <span className="text-ink-subtle">›</span>
          <Link href="/finance/income" className="hover:underline">Income</Link>
          <span className="text-ink-subtle">›</span>
          <span className="text-ink-subtle">Add Income</span>
        </nav>
      </div>

      <IncomeFormStepper currentStep={currentStep} completedSteps={completedSteps} onStepClick={goToStep} />

      <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
        <div className="lg:col-span-2">
          {currentStep === 1 && <Step1IncomeDetails form={form} setField={setField} onNext={goNext} />}
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
              <IncomeSummaryPreviewPanel form={form} />
              <IncomeIconTipsPanel />
            </>
          )}

          {currentStep === 2 && (
            <>
              <IncomeSummaryPreviewPanel form={form} />
              <IncomePlainTipsPanel
                tips={[
                  "Choose the correct payment method.",
                  "Enter receipt or transaction number for easy tracking.",
                  "Upload supporting document if available.",
                  "Ensure all details are accurate before proceeding.",
                ]}
              />
            </>
          )}

          {currentStep === 3 && (
            <>
              <IncomeSummaryPreviewPanel form={form} />
              <IncomeWhatsNextPanel>Once saved, this income will be added to the ledger and available in reports.</IncomeWhatsNextPanel>
              <IncomeChecklistPanel />
              <NotePanel>You won't be able to edit the income after saving. Please confirm all details carefully.</NotePanel>
            </>
          )}

          {currentStep === 4 && (
            <>
              <IncomeSummaryPreviewPanel form={form} final />
              <NotePanel>You can view this income in the Income list. It will also be included in your financial reports and analytics.</NotePanel>
              <IncomeRecordInformationPanel
                incomeNo={createdIncome?.incomeNo ?? "—"}
                recordedBy={createdIncome?.recordedBy ?? "—"}
                recordedOn={createdIncome?.recordedOn ?? "—"}
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
}
