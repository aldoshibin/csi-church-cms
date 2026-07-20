"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { Button } from "@/components/ui/Button";
import { useAddBaptismForm } from "@/hooks/useAddBaptismForm";
import { BaptismWizardStepper } from "@/components/baptism-register/wizard/BaptismWizardStepper";
import { BaptismWizardNav } from "@/components/baptism-register/wizard/BaptismWizardNav";
import { BaptismSuccessScreen } from "@/components/baptism-register/wizard/BaptismSuccessScreen";
import Step1ChildInformation from "@/components/baptism-register/wizard/Step1ChildInformation";
import Step2ParentsGuardians from "@/components/baptism-register/wizard/Step2ParentsGuardians";
import Step3BaptismDetails from "@/components/baptism-register/wizard/Step3BaptismDetails";
import Step4Godparents from "@/components/baptism-register/wizard/Step4Godparents";
import Step5DocumentsNotes from "@/components/baptism-register/wizard/Step5DocumentsNotes";
import Step6ReviewConfirm from "@/components/baptism-register/wizard/Step6ReviewConfirm";

export default function AddBaptismRecordPage() {
  const {
    form, currentStep, completedSteps, goToStep, goNext, goPrevious,
    documents, setDocument, requiredDocuments, applySameAsFather,
    isSubmitting, submit, savedRecord, resetWizard,
  } = useAddBaptismForm();

  if (savedRecord) {
    return (
      <div className="space-y-5">
        <div>
          <h1 className="font-display text-2xl font-bold text-ink">Add New Baptism Record</h1>
          <nav className="mt-1 flex items-center gap-1.5 text-xs text-interactive-500">
            <Link href="/sacraments/baptism" className="hover:underline">Baptism Register</Link>
            <span className="text-ink-subtle">›</span>
            <span className="text-ink-subtle">Add New Record</span>
          </nav>
        </div>
        <BaptismSuccessScreen record={savedRecord} onAddAnother={resetWizard} />
      </div>
    );
  }

  const isFirstStep = currentStep === 1;
  const isLastStep = currentStep === 6;

  const nav = (
    <BaptismWizardNav
      isFirstStep={isFirstStep}
      isLastStep={isLastStep}
      onPrevious={goPrevious}
      onNext={goNext}
      onSubmit={submit}
      isSubmitting={isSubmitting}
    />
  );

  const stepComponents = {
    1: <Step1ChildInformation form={form} nav={nav} />,
    2: <Step2ParentsGuardians form={form} nav={nav} />,
    3: <Step3BaptismDetails form={form} nav={nav} />,
    4: <Step4Godparents form={form} nav={nav} onToggleSameAsFather={applySameAsFather} />,
    5: <Step5DocumentsNotes form={form} nav={nav} documents={documents} setDocument={setDocument} requiredDocuments={requiredDocuments} />,
    6: <Step6ReviewConfirm form={form} nav={nav} documents={documents} requiredDocuments={requiredDocuments} onEditAll={() => goToStep(1)} />,
  };

  return (
    <div className="space-y-5 pb-6">
      <div className="flex items-start justify-between">
        <div>
          <h1 className="font-display text-2xl font-bold text-ink">Add New Baptism Record</h1>
          <nav className="mt-1 flex items-center gap-1.5 text-xs text-interactive-500">
            <Link href="/sacraments/baptism" className="hover:underline">Baptism Register</Link>
            <span className="text-ink-subtle">›</span>
            <span className="text-ink-subtle">Add New Record</span>
          </nav>
        </div>
        <Link href="/sacraments/baptism">
          <Button type="button" variant="secondary" leftIcon={<ArrowLeft className="h-4 w-4" />}>
            Back to Baptism Register
          </Button>
        </Link>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-[280px_1fr]">
        <BaptismWizardStepper currentStep={currentStep} completedSteps={completedSteps} onStepClick={goToStep} />
        <div className="rounded-lg border border-border bg-white p-6 shadow-card">
          {stepComponents[currentStep]}
        </div>
      </div>
    </div>
  );
}
