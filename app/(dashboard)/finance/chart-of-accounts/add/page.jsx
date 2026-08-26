"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { Button } from "@/components/ui/Button";
import { useAddAccountForm } from "@/hooks/useAddAccountForm";
import { AccountFormStepper } from "@/components/finance/chart-of-accounts/form/AccountFormStepper";
import { AccountTypeGuidePanel } from "@/components/finance/chart-of-accounts/form/AccountTypeGuidePanel";
import { TipsPanel } from "@/components/finance/chart-of-accounts/form/TipsPanel";
import { AccountingHierarchyDiagramPanel } from "@/components/finance/chart-of-accounts/form/AccountingHierarchyDiagramPanel";
import { AccountSummaryPanel } from "@/components/finance/chart-of-accounts/form/AccountSummaryPanel";
import { NextStepsPanel } from "@/components/finance/chart-of-accounts/form/NextStepsPanel";
import { NotePanel } from "@/components/finance/transactions/NotePanel";
import Step1AccountDetails from "@/components/finance/chart-of-accounts/form/steps/Step1AccountDetails";
import Step2AdditionalInformation from "@/components/finance/chart-of-accounts/form/steps/Step2AdditionalInformation";
import Step3ReviewConfirm from "@/components/finance/chart-of-accounts/form/steps/Step3ReviewConfirm";
import Step4Success from "@/components/finance/chart-of-accounts/form/steps/Step4Success";

export default function AddNewAccountPage() {
  const {
    isSubAccount, steps, parentLabel, form, setField,
    currentStep, completedSteps, goToStep, goNext, goPrevious,
    isSubmitting, submit, resetForm,
  } = useAddAccountForm({ mode: "account" });

  return (
    <div className="space-y-5 pb-16">
      <div>
        <Link href="/finance/chart-of-accounts">
          <Button type="button" variant="secondary" size="sm" leftIcon={<ArrowLeft className="h-4 w-4" />}>Back</Button>
        </Link>
        <h1 className="mt-3 font-display text-2xl font-bold text-ink">Add New Account</h1>
        <nav className="mt-1 flex items-center gap-1.5 text-xs text-interactive-500">
          <Link href="/finance" className="hover:underline">Finance &amp; Accounting</Link>
          <span className="text-ink-subtle">›</span>
          <Link href="/finance/chart-of-accounts" className="hover:underline">Chart of Accounts</Link>
          <span className="text-ink-subtle">›</span>
          <span className="text-ink-subtle">Add New Account</span>
        </nav>
      </div>

      <AccountFormStepper steps={steps} currentStep={currentStep} completedSteps={completedSteps} onStepClick={goToStep} />

      <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
        <div className="lg:col-span-2">
          {currentStep === 1 && (
            <Step1AccountDetails form={form} setField={setField} isSubAccount={isSubAccount} parentLocked={false} onNext={goNext} />
          )}
          {currentStep === 2 && (
            <Step2AdditionalInformation form={form} setField={setField} isSubAccount={isSubAccount} onNext={goNext} onPrevious={goPrevious} />
          )}
          {currentStep === 3 && (
            <Step3ReviewConfirm form={form} isSubAccount={isSubAccount} parentLabel={parentLabel} isSubmitting={isSubmitting} onConfirm={submit} onPrevious={goPrevious} />
          )}
          {currentStep === 4 && (
            <Step4Success form={form} isSubAccount={isSubAccount} onBackToReview={() => goToStep(3)} onAddAnother={resetForm} />
          )}
        </div>

        {(
          <div className="flex flex-col gap-5">
            {currentStep === 1 && (
              <>
                <AccountTypeGuidePanel />
                <TipsPanel
                  title="Quick Tips"
                  tips={[
                    "Choose the correct account type and category.",
                    "Use meaningful account names for easy identification.",
                    "Set opening balance if the account had a balance before this date.",
                    "You can add sub accounts after creating the account.",
                  ]}
                />
              </>
            )}

            {currentStep === 2 && (
              <>
                <AccountingHierarchyDiagramPanel />
                <TipsPanel
                  title="Helpful Tips"
                  tips={[
                    "Select the correct level to maintain the chart structure.",
                    "Choose the normal balance carefully. It affects reporting.",
                    "Enable transactions only if this account will be used.",
                    "Tags help in quick filtering and reporting.",
                    "Notes are for internal reference.",
                  ]}
                />
              </>
            )}

            {currentStep === 3 && (
              <>
                <AccountSummaryPanel form={form} isSubAccount={isSubAccount} parentLabel={parentLabel} />
                <NextStepsPanel
                  intro="After saving, you can:"
                  items={["Add sub accounts under this account", "Record transactions for this account", "View this account in the Chart of Accounts"]}
                />
              </>
            )}

            {currentStep === 4 && (
              <>
                <AccountSummaryPanel form={form} isSubAccount={isSubAccount} parentLabel={parentLabel} final />
                <NotePanel>You can edit account details or manage sub accounts and transactions from the Chart of Accounts.</NotePanel>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
