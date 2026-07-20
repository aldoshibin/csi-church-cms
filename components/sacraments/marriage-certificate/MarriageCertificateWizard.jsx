"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { MCStepRail } from "./StepRail";
import { MCStepFooter } from "./StepFooter";
import { MarriageCertificatePreview } from "./MarriageCertificatePreview";
import { MarriageCertificateSavedScreen } from "./MarriageCertificateSavedScreen";
import { PersonDetailsForm } from "./steps/PersonDetailsForm";
import { StepMarriageDetails } from "./steps/StepMarriageDetails";
import { StepWitnessDetails } from "./steps/StepWitnessDetails";
import { StepReviewConfirm } from "./steps/StepReviewConfirm";

export function MarriageCertificateWizard() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [saved, setSaved] = useState(false);

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
        <h1 className="text-xl font-bold text-ink">
          {saved ? "Marriage Certificate Created Successfully" : "New Marriage Certificate"}
        </h1>
        <Button variant="secondary" leftIcon={<HelpCircle className="h-4 w-4" />}>Help</Button>
      </div>
      <p className="mb-5 text-sm">
        <span className="text-interactive-500">Sacramental Records</span>
        <span className="mx-1.5 text-ink-subtle">&gt;</span>
        <span className="text-interactive-500">Marriage Certificate</span>
        <span className="mx-1.5 text-ink-subtle">&gt;</span>
        <span className={saved ? "text-interactive-500" : "font-semibold text-ink"}>New Marriage Certificate</span>
        {saved && (
          <>
            <span className="mx-1.5 text-ink-subtle">&gt;</span>
            <span className="font-semibold text-ink">Confirmation</span>
          </>
        )}
      </p>

      {saved ? (
        <div className="flex flex-col gap-5 lg:flex-row">
          <div className="flex-1">
            <MarriageCertificateSavedScreen
              onCreateAnother={() => {
                setSaved(false);
                setStep(1);
              }}
              onBackToList={() => router.push("/sacraments/marriage-certificate")}
            />
          </div>
          <MarriageCertificatePreview />
        </div>
      ) : (
        <div className="flex flex-col gap-5 lg:flex-row">
          <MCStepRail step={step} onJump={setStep} />
          <div className="flex-1 rounded-lg border border-border bg-white p-6 shadow-card">
            {bodies[step]}
            <MCStepFooter
              step={step}
              onBack={() => setStep((s) => Math.max(1, s - 1))}
              onNext={() => setStep((s) => Math.min(5, s + 1))}
              onConfirm={() => setSaved(true)}
            />
          </div>
          <MarriageCertificatePreview />
        </div>
      )}
    </div>
  );
}
