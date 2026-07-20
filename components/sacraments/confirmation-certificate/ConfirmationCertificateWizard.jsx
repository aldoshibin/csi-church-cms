"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { CCStepRail } from "./StepRail";
import { CCStepFooter } from "./StepFooter";
import { CCBreadcrumb } from "./CCBreadcrumb";
import { ConfirmationCertificatePreview } from "./ConfirmationCertificatePreview";
import { ConfirmationCertificateSavedModal } from "./ConfirmationCertificateSavedModal";
import { StepConfirmandDetails } from "./steps/StepConfirmandDetails";
import { StepSponsorDetails } from "./steps/StepSponsorDetails";
import { StepConfirmationDetails } from "./steps/StepConfirmationDetails";
import { StepReviewConfirm } from "./steps/StepReviewConfirm";

const BODIES = {
  1: StepConfirmandDetails,
  2: StepSponsorDetails,
  3: StepConfirmationDetails,
  4: StepReviewConfirm,
};

export function ConfirmationCertificateWizard() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [showSuccess, setShowSuccess] = useState(false);
  const StepBody = BODIES[step];

  return (
    <div>
      <div className="mb-1 flex items-start justify-between">
        <h1 className="text-xl font-bold text-ink">New Confirmation Certificate</h1>
        <Button variant="secondary" leftIcon={<HelpCircle className="h-4 w-4" />}>Help</Button>
      </div>
      <CCBreadcrumb step={step} />

      <div className="flex flex-col gap-5 lg:flex-row">
        <CCStepRail step={step} onJump={setStep} />
        <div className="flex-1 rounded-lg border border-border bg-white p-6 shadow-card">
          <StepBody />
          <CCStepFooter
            step={step}
            onBack={() => setStep((s) => Math.max(1, s - 1))}
            onNext={() => setStep((s) => Math.min(4, s + 1))}
            onConfirm={() => setShowSuccess(true)}
            onCancel={() => router.push("/sacraments/confirmation-certificate")}
          />
        </div>
        <ConfirmationCertificatePreview />
      </div>

      <ConfirmationCertificateSavedModal
        open={showSuccess}
        onOpenChange={setShowSuccess}
        onGoToList={() => {
          setShowSuccess(false);
          router.push("/sacraments/confirmation-certificate");
        }}
      />
    </div>
  );
}
