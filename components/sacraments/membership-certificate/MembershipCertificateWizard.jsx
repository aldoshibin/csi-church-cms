"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { MCStepRail } from "./StepRail";
import { MCStepFooter } from "./StepFooter";
import { CertificateSavedModal } from "./CertificateSavedModal";
import { StepMemberDetails } from "./steps/StepMemberDetails";
import { StepCertificateDetails } from "./steps/StepCertificateDetails";
import { StepPurposeAddress } from "./steps/StepPurposeAddress";
import { StepReviewConfirm } from "./steps/StepReviewConfirm";

const BODIES = {
  1: StepMemberDetails,
  2: StepCertificateDetails,
  3: StepPurposeAddress,
  4: StepReviewConfirm,
};

export function MembershipCertificateWizard() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [showSuccess, setShowSuccess] = useState(false);
  const StepBody = BODIES[step];

  return (
    <div>
      <div className="mb-1 flex items-start justify-between">
        <h1 className="text-xl font-bold text-ink">New Membership Certificate</h1>
        <Button variant="secondary" leftIcon={<HelpCircle className="h-4 w-4" />}>Help</Button>
      </div>
      <p className="mb-5 text-sm">
        <span className="text-interactive-500">Sacramental Records</span>
        <span className="mx-1.5 text-ink-subtle">&gt;</span>
        <span className="text-interactive-500">Membership Certificate</span>
        <span className="mx-1.5 text-ink-subtle">&gt;</span>
        <span className="font-semibold text-ink">New Certificate</span>
      </p>

      <div className="flex flex-col gap-5 lg:flex-row">
        <MCStepRail step={step} onJump={setStep} />
        <div className="flex-1 rounded-lg border border-border bg-white p-6 shadow-card">
          <StepBody />
          <MCStepFooter
            step={step}
            onBack={() => setStep((s) => Math.max(1, s - 1))}
            onNext={() => setStep((s) => Math.min(4, s + 1))}
            onConfirm={() => setShowSuccess(true)}
            onCancel={() => router.push("/sacraments/membership-certificate")}
            onSaveDraft={() => router.push("/sacraments/membership-certificate")}
          />
        </div>
      </div>

      <CertificateSavedModal open={showSuccess} onOpenChange={(v) => {
        setShowSuccess(v);
        if (!v) router.push("/sacraments/membership-certificate");
      }} />
    </div>
  );
}
