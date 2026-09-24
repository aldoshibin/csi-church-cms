"use client";

import { useRouter } from "next/navigation";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { useNewTemplateForm } from "@/hooks/useNewTemplateForm";
import { TemplateStepper } from "@/components/communication-module/templates/wizard/TemplateStepper";
import { TemplateSetupStep } from "@/components/communication-module/templates/wizard/TemplateSetupStep";
import { TemplateContentStep } from "@/components/communication-module/templates/wizard/TemplateContentStep";
import { ReviewSaveStep } from "@/components/communication-module/templates/wizard/ReviewSaveStep";
import { TemplatePreviewCard } from "@/components/communication-module/templates/wizard/TemplatePreviewCard";
import { TemplateFormTipsCard } from "@/components/communication-module/templates/wizard/TemplateFormTipsCard";
import { TemplateHelpCard } from "@/components/communication-module/templates/wizard/TemplateHelpCard";

export default function AddTemplatePage() {
  const router = useRouter();
  const {
    form, setField, step, completedSteps, goNext, goBack, goToStep, isSubmitting, submit,
  } = useNewTemplateForm();

  const handleSubmit = async () => {
    await submit();
    router.push("/communication-module/templates");
  };

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-2xl font-semibold text-ink">Create New Template</h1>
        <p className="mt-1 text-sm text-ink-subtle">Build a reusable email or SMS template in three quick steps.</p>
      </div>

      <TemplateStepper step={step} completedSteps={completedSteps} onStepClick={goToStep} />

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_320px]">
        <div className="flex flex-col gap-5">
          {step === 1 && <TemplateSetupStep form={form} setField={setField} />}
          {step === 2 && <TemplateContentStep form={form} setField={setField} />}
          {step === 3 && <ReviewSaveStep form={form} />}

          <div className="flex items-center justify-between">
            <Button
              type="button" variant="secondary" onClick={step === 1 ? () => router.back() : goBack}
              leftIcon={<ArrowLeft className="h-4 w-4" />}
            >
              {step === 1 ? "Cancel" : "Back"}
            </Button>

            {step < 3 ? (
              <Button type="button" onClick={goNext} rightIcon={<ArrowRight className="h-4 w-4" />}>
                Next
              </Button>
            ) : (
              <Button type="button" onClick={handleSubmit} isLoading={isSubmitting} leftIcon={<Check className="h-4 w-4" />}>
                Save Template
              </Button>
            )}
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <TemplatePreviewCard form={form} />
          <TemplateFormTipsCard />
          <TemplateHelpCard />
        </div>
      </div>
    </div>
  );
}
