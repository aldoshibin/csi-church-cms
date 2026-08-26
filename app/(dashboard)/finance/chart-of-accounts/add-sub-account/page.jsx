"use client";

import * as React from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { ArrowLeft, Loader2, Users } from "lucide-react";

import { Button } from "@/components/ui/Button";
import { useAddSubAccountForm } from "@/hooks/useAddSubAccountForm";
import { AccountFormStepper } from "@/components/finance/chart-of-accounts/form/AccountFormStepper";
import { AccountHierarchyTreePanel } from "@/components/finance/chart-of-accounts/form/AccountHierarchyTreePanel";
import { NextStepsPanel } from "@/components/finance/chart-of-accounts/form/NextStepsPanel";
import { NotePanel } from "@/components/finance/transactions/NotePanel";
import Step4Success from "@/components/finance/chart-of-accounts/form/steps/Step4Success";

import { ParentAccountInfoPanel } from "@/components/finance/chart-of-accounts/sub-account/ParentAccountInfoPanel";
import { SubAccountTypeGuidePanel } from "@/components/finance/chart-of-accounts/sub-account/SubAccountTypeGuidePanel";
import { ParentAccountSummaryPanel } from "@/components/finance/chart-of-accounts/sub-account/ParentAccountSummaryPanel";
import { SubAccountPreviewPanel } from "@/components/finance/chart-of-accounts/sub-account/SubAccountPreviewPanel";
import { ValidationChecklistPanel } from "@/components/finance/chart-of-accounts/sub-account/ValidationChecklistPanel";
import { TipsPanel } from "@/components/finance/chart-of-accounts/form/TipsPanel";
import Step1SubAccountDetails from "@/components/finance/chart-of-accounts/sub-account/steps/Step1SubAccountDetails";
import Step2SubAccountAdditionalInfo from "@/components/finance/chart-of-accounts/sub-account/steps/Step2SubAccountAdditionalInfo";
import Step3SubAccountReviewConfirm from "@/components/finance/chart-of-accounts/sub-account/steps/Step3SubAccountReviewConfirm";

export default function AddSubAccountPage() {
  return (
    <React.Suspense fallback={<div className="flex justify-center py-16"><Loader2 className="h-5 w-5 animate-spin text-interactive-500" /></div>}>
      <AddSubAccountContent />
    </React.Suspense>
  );
}

function AddSubAccountContent() {
  const searchParams = useSearchParams();
  const parentCode = searchParams.get("parent") || "4000";

  const {
    form, setField, parentInfo, parentLabel,
    currentStep, completedSteps, goToStep, goNext, goPrevious,
    isSubmitting, submit, resetForm,
  } = useAddSubAccountForm({ parentCode });

  return (
    <div className="space-y-5 pb-16">
      <div>
        <Link href="/finance/chart-of-accounts">
          <Button type="button" variant="secondary" size="sm" leftIcon={<ArrowLeft className="h-4 w-4" />}>Back</Button>
        </Link>
        <h1 className="mt-3 font-display text-2xl font-bold text-ink">Add Sub Account</h1>
        <nav className="mt-1 flex flex-wrap items-center gap-1.5 text-xs text-interactive-500">
          <Link href="/finance" className="hover:underline">Finance &amp; Accounting</Link>
          <span className="text-ink-subtle">›</span>
          <Link href="/finance/chart-of-accounts" className="hover:underline">Chart of Accounts</Link>
          <span className="text-ink-subtle">›</span>
          <Link href="/finance/chart-of-accounts/add" className="hover:underline">Add New Account</Link>
          <span className="text-ink-subtle">›</span>
          <span className="text-ink-subtle">Add Sub Account</span>
        </nav>
      </div>

      <AccountFormStepper
        steps={[
          { key: 1, label: "Sub Account Details" },
          { key: 2, label: "Additional Information" },
          { key: 3, label: "Review & Confirm" },
          { key: 4, label: "Success" },
        ]}
        currentStep={currentStep} completedSteps={completedSteps} onStepClick={goToStep}
      />

      <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
        <div className="lg:col-span-2">
          {currentStep === 1 && (
            <Step1SubAccountDetails form={form} setField={setField} onNext={goNext} />
          )}
          {currentStep === 2 && (
            <Step2SubAccountAdditionalInfo form={form} setField={setField} onNext={goNext} onPrevious={goPrevious} />
          )}
          {currentStep === 3 && (
            <Step3SubAccountReviewConfirm
              form={form} parentLabel={parentLabel} parentInfo={parentInfo}
              isSubmitting={isSubmitting} onConfirm={submit} onPrevious={goPrevious}
            />
          )}
          {currentStep === 4 && (
            <Step4Success form={form} isSubAccount parentLabel={parentLabel} onBackToReview={() => goToStep(3)} onAddAnother={resetForm} />
          )}
        </div>

        <div className="flex flex-col gap-5">
          {currentStep === 1 && (
            <>
              <ParentAccountInfoPanel parentInfo={parentInfo} />
              <SubAccountTypeGuidePanel />
              <TipsPanel
                title="Helpful Tips"
                tips={[
                  "Choose the correct parent account.",
                  "Select the right account nature (Debit/Credit).",
                  "Opening balance is optional but useful for tracking.",
                  "You can edit details later if needed.",
                ]}
              />
            </>
          )}

          {currentStep === 2 && (
            <>
              <ParentAccountSummaryPanel parentInfo={parentInfo} />
              <SubAccountPreviewPanel form={form} />
              <TipsPanel
                title="Helpful Tips"
                tips={[
                  "Add a clear description for easy identification.",
                  "Choose the correct department or ministry.",
                  "Select the default payment method if applicable.",
                  "Internal notes are for your reference only.",
                ]}
              />
            </>
          )}

          {currentStep === 3 && (
            <>
              <AccountHierarchyTreePanel newAccountCode={form.code} title="Hierarchy Preview" icon={Users} />
              <ValidationChecklistPanel />
              <NotePanel title="Please Note">Once confirmed, this sub account will be added to the Chart of Accounts and can be used for transactions.</NotePanel>
            </>
          )}

          {currentStep === 4 && (
            <>
              <AccountHierarchyTreePanel newAccountCode={form.code} />
              <NextStepsPanel
                title="Next Steps"
                intro="After adding this sub account, you can:"
                items={["Record transactions for this account", "Add more sub accounts under this parent", "View financial reports and balances", "Manage account settings"]}
              />
              <NotePanel>This sub account is now available for all financial transactions.</NotePanel>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
