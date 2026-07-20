"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { TCStepRail } from "./StepRail";
import { TCStepFooter } from "./StepFooter";
import { TransferCertificatePreview } from "./TransferCertificatePreview";
import { TransferCertificateSavedScreen } from "./TransferCertificateSavedScreen";
import { StepMemberDetails } from "./steps/StepMemberDetails";
import { StepFromParish } from "./steps/StepFromParish";
import { StepToParish } from "./steps/StepToParish";
import { StepAdditionalInformation } from "./steps/StepAdditionalInformation";
import { StepReviewConfirm } from "./steps/StepReviewConfirm";

const BODIES = {
  1: StepMemberDetails,
  2: StepFromParish,
  3: StepToParish,
  4: StepAdditionalInformation,
  5: StepReviewConfirm,
};

export function TransferCertificateWizard() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [saved, setSaved] = useState(false);
  const StepBody = BODIES[step];

  return (
    <div>
      <div className="mb-1 flex items-start justify-between">
        <h1 className="text-xl font-bold text-ink">New Transfer Certificate</h1>
        {!saved && <Button variant="secondary" leftIcon={<HelpCircle className="h-4 w-4" />}>Help</Button>}
      </div>
      <p className="mb-5 text-sm">
        <span className="text-interactive-500">Sacramental Records</span>
        <span className="mx-1.5 text-ink-subtle">&gt;</span>
        <span className="text-interactive-500">Transfer Certificate</span>
        <span className="mx-1.5 text-ink-subtle">&gt;</span>
        <span className="font-semibold text-ink">New Transfer Certificate</span>
      </p>

      {saved ? (
        <TransferCertificateSavedScreen
          onCreateAnother={() => {
            setSaved(false);
            setStep(1);
          }}
          onViewAllRequests={() => router.push("/sacraments/transfer-certificate")}
        />
      ) : (
        <div className="flex flex-col gap-5 lg:flex-row">
          <TCStepRail step={step} onJump={setStep} />
          <div className="flex-1 rounded-lg border border-border bg-white p-6 shadow-card">
            <StepBody />
            <TCStepFooter
              step={step}
              onBack={() => setStep((s) => Math.max(1, s - 1))}
              onNext={() => setStep((s) => Math.min(5, s + 1))}
              onConfirm={() => setSaved(true)}
              onCancel={() => router.push("/sacraments/transfer-certificate")}
            />
          </div>
          <TransferCertificatePreview />
        </div>
      )}
    </div>
  );
}
