"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Printer } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { StepRail } from "./StepRail";
import { StepFooter } from "./StepFooter";
import { ConfirmationSavedModal } from "./ConfirmationSavedModal";
import { StepChildInformation } from "./steps/StepChildInformation";
import { StepParentsGuardians } from "./steps/StepParentsGuardians";
import { StepConfirmationDetails } from "./steps/StepConfirmationDetails";
import { StepSponsors } from "./steps/StepSponsors";
import { StepDocumentsNotes } from "./steps/StepDocumentsNotes";
import { StepReviewConfirm } from "./steps/StepReviewConfirm";

const BODIES = {
  1: StepChildInformation,
  2: StepParentsGuardians,
  3: StepConfirmationDetails,
  4: StepSponsors,
  5: StepDocumentsNotes,
  6: StepReviewConfirm,
};

const CRUMBS = {
  base: ["Sacramental Records", "Confirmation Register", "Add New Record"],
  review: ["Sacramental Records", "Confirmation Register", "Add New Record", "Review & Confirm"],
};

export function ConfirmationWizard() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [showSuccess, setShowSuccess] = useState(false);
  const StepBody = BODIES[step];
  const crumbs = step === 6 ? CRUMBS.review : CRUMBS.base;

  return (
    <div>
      <div className="mb-1 flex items-start justify-between">
        <h1 className="text-xl font-bold text-ink">Add New Confirmation Record</h1>
        {step === 6 && (
          <Button variant="secondary" leftIcon={<Printer className="h-4 w-4" />}>Print Preview</Button>
        )}
      </div>
      <p className="mb-5 text-sm">
        {crumbs.map((c, i) => (
          <span key={c}>
            <span className={i === crumbs.length - 1 ? "font-semibold text-ink" : "text-interactive-500"}>{c}</span>
            {i < crumbs.length - 1 && <span className="mx-1.5 text-ink-subtle">&gt;</span>}
          </span>
        ))}
      </p>

      <div className="flex flex-col gap-5 lg:flex-row">
        <StepRail step={step} onJump={setStep} />
        <div className="flex-1 rounded-lg border border-border bg-white p-6 shadow-card">
          <StepBody />
          <StepFooter
            step={step}
            onBack={() => setStep((s) => Math.max(1, s - 1))}
            onNext={() => setStep((s) => Math.min(6, s + 1))}
            onSaveDraft={() => setShowSuccess(true)}
            onConfirm={() => setShowSuccess(true)}
          />
        </div>
      </div>

      <ConfirmationSavedModal
        open={showSuccess}
        onOpenChange={setShowSuccess}
        onGoToRegister={() => {
          setShowSuccess(false);
          router.push("/sacraments/confirmation");
        }}
      />
    </div>
  );
}
