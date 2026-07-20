"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { FuneralStepRail } from "./StepRail";
import { FuneralStepFooter } from "./StepFooter";
import { FuneralSavedScreen } from "./FuneralSavedScreen";
import { StepDeceasedDetails } from "./steps/StepDeceasedDetails";
import { StepDeathDetails } from "./steps/StepDeathDetails";
import { StepFuneralDetails } from "./steps/StepFuneralDetails";
import { StepFamilyDetails } from "./steps/StepFamilyDetails";
import { StepReviewConfirm } from "./steps/StepReviewConfirm";

const BODIES = {
  1: StepDeceasedDetails,
  2: StepDeathDetails,
  3: StepFuneralDetails,
  4: StepFamilyDetails,
  5: StepReviewConfirm,
};

export function FuneralWizard() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [saved, setSaved] = useState(false);
  const StepBody = BODIES[step];

  return (
    <div>
      <div className="mb-1 flex items-start justify-between">
        <h1 className="text-xl font-bold text-ink">Add New Funeral Record</h1>
        {!saved && <Button variant="secondary" leftIcon={<HelpCircle className="h-4 w-4" />}>Help</Button>}
      </div>
      <p className="mb-5 text-sm">
        <span className="text-interactive-500">Sacramental Records</span>
        <span className="mx-1.5 text-ink-subtle">&gt;</span>
        <span className="text-interactive-500">Funeral Register</span>
        <span className="mx-1.5 text-ink-subtle">&gt;</span>
        <span className="font-semibold text-ink">Add New Record</span>
      </p>

      {saved ? (
        <FuneralSavedScreen
          onAddAnother={() => {
            setSaved(false);
            setStep(1);
          }}
          onGoToRegister={() => router.push("/sacraments/funeral")}
        />
      ) : (
        <div className="flex flex-col gap-5 lg:flex-row">
          <FuneralStepRail step={step} onJump={setStep} />
          <div className="flex-1 rounded-lg border border-border bg-white p-6 shadow-card">
            <StepBody />
            <FuneralStepFooter
              step={step}
              onBack={() => setStep((s) => Math.max(1, s - 1))}
              onNext={() => setStep((s) => Math.min(5, s + 1))}
              onConfirm={() => setSaved(true)}
              onCancel={() => router.push("/sacraments/funeral")}
            />
          </div>
        </div>
      )}
    </div>
  );
}
