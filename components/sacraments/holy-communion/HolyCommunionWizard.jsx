"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { HelpCircle } from "lucide-react";
import { HCStepRail } from "./StepRail";
import { HCStepFooter } from "./StepFooter";
import { HolyCommunionSavedModal } from "./HolyCommunionSavedModal";
import { StepCommunicantInformation } from "./steps/StepCommunicantInformation";
import { StepParentGuardian } from "./steps/StepParentGuardian";
import { StepRecordDetails } from "./steps/StepRecordDetails";
import { StepConfirmationReview } from "./steps/StepConfirmationReview";

const BODIES = {
  1: StepCommunicantInformation,
  2: StepParentGuardian,
  3: StepRecordDetails,
  4: StepConfirmationReview,
};

export function HolyCommunionWizard() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [showSuccess, setShowSuccess] = useState(false);
  const StepBody = BODIES[step];

  const goToRegister = () => {
    setShowSuccess(false);
    router.push("/sacraments/holy-communion");
  };
  const addAnother = () => {
    setShowSuccess(false);
    setStep(1);
  };

  return (
    <div>
      <div className="mb-1 flex items-start justify-between">
        <h1 className="text-xl font-bold text-ink">Add New Holy Communion Record</h1>
        <Button variant="secondary" leftIcon={<HelpCircle className="h-4 w-4" />}>Help</Button>
      </div>
      <p className="mb-5 text-sm">
        <span className="text-interactive-500">Sacramental Records</span>
        <span className="mx-1.5 text-ink-subtle">&gt;</span>
        <span className="text-interactive-500">Holy Communion Register</span>
        <span className="mx-1.5 text-ink-subtle">&gt;</span>
        <span className="font-semibold text-ink">Add New Record</span>
      </p>

      <div className="flex flex-col gap-5 lg:flex-row">
        <HCStepRail step={step} onJump={setStep} />
        <div className="flex-1 rounded-lg border border-border bg-white p-6 shadow-card">
          <StepBody />
          <HCStepFooter
            step={step}
            onBack={() => setStep((s) => Math.max(1, s - 1))}
            onNext={() => setStep((s) => Math.min(4, s + 1))}
            onConfirm={() => setShowSuccess(true)}
          />
        </div>
      </div>

      <HolyCommunionSavedModal
        open={showSuccess}
        onOpenChange={setShowSuccess}
        onGoToRegister={goToRegister}
        onAddAnother={addAnother}
      />
    </div>
  );
}
