"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { MarriageStepRail } from "./StepRail";
import { MarriageStepFooter } from "./StepFooter";
import { MarriageSavedModal } from "./MarriageSavedModal";
import { PersonDetailsForm } from "./steps/PersonDetailsForm";
import { StepMarriageDetails } from "./steps/StepMarriageDetails";
import { StepWitnessDetails } from "./steps/StepWitnessDetails";
import { StepReviewConfirm } from "./steps/StepReviewConfirm";

export function MarriageWizard() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [showSuccess, setShowSuccess] = useState(false);

  const bodies = {
    1: <PersonDetailsForm role="Groom" />,
    2: <PersonDetailsForm role="Bride" />,
    3: <StepMarriageDetails />,
    4: <StepWitnessDetails />,
    5: <StepReviewConfirm />,
  };

  return (
    <div>
      <div className="mb-1 flex items-start justify-between">
        <h1 className="text-xl font-bold text-ink">Add New Marriage Record</h1>
        <Button variant="secondary" leftIcon={<HelpCircle className="h-4 w-4" />}>Help</Button>
      </div>
      <p className="mb-5 text-sm">
        <span className="text-interactive-500">Sacramental Records</span>
        <span className="mx-1.5 text-ink-subtle">&gt;</span>
        <span className="text-interactive-500">Marriage Register</span>
        <span className="mx-1.5 text-ink-subtle">&gt;</span>
        <span className="font-semibold text-ink">Add New Record</span>
      </p>

      <div className="flex flex-col gap-5 lg:flex-row">
        <MarriageStepRail step={step} onJump={setStep} />
        <div className="flex-1 rounded-lg border border-border bg-white p-6 shadow-card">
          {bodies[step]}
          <MarriageStepFooter
            step={step}
            onBack={() => setStep((s) => Math.max(1, s - 1))}
            onNext={() => setStep((s) => Math.min(5, s + 1))}
            onConfirm={() => setShowSuccess(true)}
            onCancel={() => router.push("/sacraments/marriage")}
          />
        </div>
      </div>

      <MarriageSavedModal
        open={showSuccess}
        onOpenChange={setShowSuccess}
        onGoToRegister={() => {
          setShowSuccess(false);
          router.push("/sacraments/marriage");
        }}
      />
    </div>
  );
}
