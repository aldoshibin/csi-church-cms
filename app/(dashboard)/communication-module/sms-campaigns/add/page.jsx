"use client";

import Link from "next/link";
import { ArrowLeft, ArrowRight, Send } from "lucide-react";

import { useNewSmsCampaignForm } from "@/hooks/useNewSmsCampaignForm";
import { Button } from "@/components/ui/Button";
import { CampaignStepper } from "@/components/communication-module/sms-campaigns/wizard/CampaignStepper";
import { CampaignSetupStep } from "@/components/communication-module/sms-campaigns/wizard/CampaignSetupStep";
import { MessageContentStep } from "@/components/communication-module/sms-campaigns/wizard/MessageContentStep";
import { ReviewConfirmStep } from "@/components/communication-module/sms-campaigns/wizard/ReviewConfirmStep";
import { CampaignSummarySidebarCard } from "@/components/communication-module/sms-campaigns/wizard/CampaignSummarySidebarCard";
import { MessagePreviewCard } from "@/components/communication-module/sms-campaigns/wizard/MessagePreviewCard";
import { CampaignFormTipsCard } from "@/components/communication-module/sms-campaigns/wizard/CampaignFormTipsCard";
import { CampaignHelpCard } from "@/components/communication-module/sms-campaigns/wizard/CampaignHelpCard";

export default function CreateSmsCampaignPage() {
  const { form, setField, step, completedSteps, goNext, goBack, goToStep, isSubmitting, submit } = useNewSmsCampaignForm();

  return (
    <div className="space-y-5 pb-10">
      <div className="flex items-center gap-1.5 text-xs font-medium text-interactive-500">
        <Link href="/communication-module/sms-campaigns" className="flex items-center gap-1.5 hover:underline">
          <ArrowLeft className="h-3.5 w-3.5" /> SMS Campaigns
        </Link>
        <span className="text-ink-subtle">&gt;</span>
        <span className="text-ink-subtle">Create SMS Campaign</span>
      </div>

      <div>
        <h1 className="font-display text-2xl font-bold text-ink">Create SMS Campaign</h1>
        <p className="mt-1 text-sm text-ink-subtle">Create and send impactful SMS campaigns to your community.</p>
      </div>

      <CampaignStepper step={step} completedSteps={completedSteps} onStepClick={goToStep} />

      <div className="grid grid-cols-1 gap-5 xl:grid-cols-3">
        <div className="flex flex-col gap-5 xl:col-span-2">
          {step === 1 && <CampaignSetupStep form={form} setField={setField} />}
          {step === 2 && <MessageContentStep form={form} setField={setField} />}
          {step === 3 && <ReviewConfirmStep form={form} />}

          <div className="flex items-center justify-end gap-2">
            <Button type="button" variant="secondary" onClick={() => (step === 1 ? history.back() : goBack())}>
              {step === 1 ? "Cancel" : "Back"}
            </Button>
            {step < 3 ? (
              <Button type="button" rightIcon={<ArrowRight className="h-4 w-4" />} onClick={goNext}>
                Save &amp; Continue
              </Button>
            ) : (
              <Button type="button" leftIcon={<Send className="h-4 w-4" />} isLoading={isSubmitting} onClick={() => submit(form.sendOption === "draft" ? "Draft" : "Sent")}>
                {form.sendOption === "draft" ? "Save as Draft" : form.sendOption === "schedule" ? "Schedule Campaign" : "Send Campaign"}
              </Button>
            )}
          </div>
        </div>

        <div className="flex flex-col gap-5">
          <CampaignSummarySidebarCard form={form} />
          <MessagePreviewCard form={form} />
          <CampaignFormTipsCard />
          <CampaignHelpCard />
        </div>
      </div>
    </div>
  );
}
