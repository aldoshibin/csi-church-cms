"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { BCStepRail } from "./StepRail";
import { BCStepFooter } from "./StepFooter";
import { BaptismCertificatePreview } from "./BaptismCertificatePreview";
import { BaptismCertificateSavedScreen } from "./BaptismCertificateSavedScreen";
import { StepMemberDetails } from "./steps/StepMemberDetails";
import { StepBaptismDetails } from "./steps/StepBaptismDetails";
import { StepSponsorsDetails } from "./steps/StepSponsorsDetails";
import { StepParishDetails } from "./steps/StepParishDetails";
import { StepReviewConfirm } from "./steps/StepReviewConfirm";

const BODIES = {
  1: StepMemberDetails,
  2: StepBaptismDetails,
  3: StepSponsorsDetails,
  4: StepParishDetails,
  5: StepReviewConfirm,
};

export function BaptismCertificateWizard() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [saved, setSaved] = useState(false);
  const StepBody = BODIES[step];

  return (
    <div>
      <div className="mb-1 flex items-start justify-between">
        <h1 className="text-xl font-bold text-ink">New Baptism Certificate</h1>
        {!saved && <Button variant="secondary" leftIcon={<HelpCircle className="h-4 w-4" />}>Help</Button>}
      </div>
      <p className="mb-5 text-sm">
        <span className="text-interactive-500">Sacramental Records</span>
        <span className="mx-1.5 text-ink-subtle">&gt;</span>
        <span className="text-interactive-500">Baptism Certificate</span>
        <span className="mx-1.5 text-ink-subtle">&gt;</span>
        <span className={saved ? "text-interactive-500" : "font-semibold text-ink"}>New Baptism Certificate</span>
        {saved && (
          <>
            <span className="mx-1.5 text-ink-subtle">&gt;</span>
            <span className="font-semibold text-ink">Success</span>
          </>
        )}
      </p>

      {saved ? (
        <div className="flex flex-col gap-5 lg:flex-row">
          <div className="flex-1">
            <BaptismCertificateSavedScreen
              onCreateAnother={() => {
                setSaved(false);
                setStep(1);
              }}
              onBackToList={() => router.push("/sacraments/baptism-certificate")}
            />
          </div>
          <BaptismCertificatePreview />
        </div>
      ) : (
        <div className="flex flex-col gap-5 lg:flex-row">
          <BCStepRail step={step} onJump={setStep} />
          <div className="flex-1 rounded-lg border border-border bg-white p-6 shadow-card">
            <StepBody />
            <BCStepFooter
              step={step}
              onBack={() => setStep((s) => Math.max(1, s - 1))}
              onNext={() => setStep((s) => Math.min(5, s + 1))}
              onConfirm={() => setSaved(true)}
              onCancel={() => router.push("/sacraments/baptism-certificate")}
            />
          </div>
          <BaptismCertificatePreview />
        </div>
      )}
    </div>
  );
}
