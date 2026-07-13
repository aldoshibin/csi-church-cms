"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";

import { Button } from "@/components/ui/Button";
import { useMemberTransferOutForm } from "@/hooks/useMemberTransferOutForm";
import { TransferOutStepper } from "@/components/transfer-out/TransferOutStepper";
import { TransferOutNavBar } from "@/components/transfer-out/TransferOutNavBar";
import { TransferOutSummaryPanel } from "@/components/transfer-out/TransferOutSummaryPanel";
import { TransferOutDocumentsChecklistPanel } from "@/components/transfer-out/TransferOutDocumentsChecklistPanel";
import { TransferOutGuidelinesPanel } from "@/components/transfer-out/TransferOutGuidelinesPanel";
import Step1TransferRequest from "@/components/transfer-out/steps/Step1TransferRequest";
import Step2MemberInformation from "@/components/transfer-out/steps/Step2MemberInformation";
import Step3DestinationChurch from "@/components/transfer-out/steps/Step3DestinationChurch";
import Step4DocumentsReview from "@/components/transfer-out/steps/Step4DocumentsReview";

export default function MemberTransferOutPage() {
  const router = useRouter();
  const {
    form, currentStep, completedSteps, goToStep, goNext, goPrevious,
    applyMatchedMember, documents, setDocument, removeDocument, isSubmitting, submit,
  } = useMemberTransferOutForm();

  const values = form.getValues();
  const fullName = [values.first_name, values.middle_name, values.last_name].filter(Boolean).join(" ");

  const handleSubmit = async () => {
    const result = await submit();
    if (result?.ok) router.push("/members");
  };

  const stepComponents = {
    1: <Step1TransferRequest form={form} onMatchedMember={applyMatchedMember} />,
    2: <Step2MemberInformation form={form} />,
    3: <Step3DestinationChurch form={form} />,
    4: (
      <Step4DocumentsReview
        form={form}
        documents={documents}
        setDocument={setDocument}
        removeDocument={removeDocument}
        fullName={fullName}
        goToStep={goToStep}
      />
    ),
  };

  return (
    <div className="space-y-5 pb-6">
      <div className="flex items-start justify-between">
        <div>
          <h1 className="font-display text-2xl font-bold text-ink">Member Transfer Out</h1>
          <nav className="mt-1 flex items-center gap-1.5 text-xs text-interactive-500">
            <Link href="/members" className="hover:underline">Member Management</Link>
            <span className="text-ink-subtle">›</span>
            <span className="text-ink-subtle">Member Transfer Out</span>
          </nav>
        </div>
        <Link href="/members">
          <Button type="button" variant="secondary" leftIcon={<ArrowLeft className="h-4 w-4" />}>
            Back to Member Management
          </Button>
        </Link>
      </div>

      <TransferOutStepper currentStep={currentStep} completedSteps={completedSteps} onStepClick={goToStep} />

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="space-y-4 lg:col-span-2">
          {stepComponents[currentStep]}
          <TransferOutNavBar
            isFirstStep={currentStep === 1}
            onPrevious={goPrevious}
            onSaveContinue={goNext}
            onSubmit={handleSubmit}
            isSubmitting={isSubmitting}
          />
        </div>

        <div className="space-y-4">
          <TransferOutSummaryPanel
            memberName={fullName}
            dateOfBirth={values.date_of_birth}
            membershipNo={values.membership_number}
            currentChurch={values.current_branch_church}
            destinationChurch={values.destination_church_name}
            transferOutDate={values.transfer_out_date}
            requestType={values.request_type}
          />
          <TransferOutDocumentsChecklistPanel />
          <TransferOutGuidelinesPanel />
        </div>
      </div>
    </div>
  );
}
