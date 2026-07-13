"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";

import { Button } from "@/components/ui/Button";
import { useMemberTransferInForm } from "@/hooks/useMemberTransferInForm";
import { TransferStepper } from "@/components/transfer-in/TransferStepper";
import { TransferNavBar } from "@/components/transfer-in/TransferNavBar";
import { TransferSummaryPanel } from "@/components/transfer-in/TransferSummaryPanel";
import { DocumentsChecklistPanel } from "@/components/transfer-in/DocumentsChecklistPanel";
import { TransferGuidelinesPanel } from "@/components/transfer-in/TransferGuidelinesPanel";
import Step1TransferInformation from "@/components/transfer-in/steps/Step1TransferInformation";
import Step2MemberInformation from "@/components/transfer-in/steps/Step2MemberInformation";
import Step3ChurchInformation from "@/components/transfer-in/steps/Step3ChurchInformation";
import Step4DocumentsReview from "@/components/transfer-in/steps/Step4DocumentsReview";

export default function MemberTransferInPage() {
  const router = useRouter();
  const {
    form, currentStep, completedSteps, goToStep, goNext, goPrevious,
    applyMatchedMember, documents, setDocument, isSubmitting, submit,
  } = useMemberTransferInForm();

  const values = form.getValues();
  const fullName = [values.first_name, values.middle_name, values.last_name].filter(Boolean).join(" ");

  const handleSubmit = async () => {
    const result = await submit();
    if (result?.ok) router.push("/members");
  };

  const stepComponents = {
    1: <Step1TransferInformation form={form} onMatchedMember={applyMatchedMember} />,
    2: <Step2MemberInformation form={form} />,
    3: <Step3ChurchInformation form={form} />,
    4: <Step4DocumentsReview form={form} documents={documents} setDocument={setDocument} fullName={fullName} />,
  };

  return (
    <div className="space-y-5 pb-6">
      <div className="flex items-start justify-between">
        <div>
          <h1 className="font-display text-2xl font-bold text-ink">Member Transfer In</h1>
          <nav className="mt-1 flex items-center gap-1.5 text-xs text-interactive-500">
            <Link href="/members" className="hover:underline">Member Management</Link>
            <span className="text-ink-subtle">›</span>
            <span className="text-ink-subtle">Member Transfer In</span>
          </nav>
        </div>
        <Link href="/members">
          <Button type="button" variant="secondary" leftIcon={<ArrowLeft className="h-4 w-4" />}>
            Back to Member Management
          </Button>
        </Link>
      </div>

      <TransferStepper currentStep={currentStep} completedSteps={completedSteps} onStepClick={goToStep} />

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="space-y-4 lg:col-span-2">
          {stepComponents[currentStep]}
          <TransferNavBar
            isFirstStep={currentStep === 1}
            onPrevious={goPrevious}
            onSaveContinue={goNext}
            onSubmit={handleSubmit}
            isSubmitting={isSubmitting}
          />
        </div>

        <div className="space-y-4">
          <TransferSummaryPanel
            memberName={fullName}
            dateOfBirth={values.date_of_birth}
            membershipNo={values.membership_number}
            currentChurch={values.current_church}
            transferInDate={values.transfer_in_date}
            requestType={values.request_type}
          />
          <DocumentsChecklistPanel />
          <TransferGuidelinesPanel />
        </div>
      </div>
    </div>
  );
}
