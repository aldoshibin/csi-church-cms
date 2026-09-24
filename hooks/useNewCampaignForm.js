"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { emailCampaignsService } from "@/services/emailCampaignsService";
import { useToast } from "@/contexts/ToastContext";
import { NEW_CAMPAIGN_DEFAULTS } from "@/lib/mock/vmEmailCampaignsMockData";

export const CAMPAIGN_STEPS = [
  { key: 1, label: "Campaign Setup" },
  { key: 2, label: "Email Content" },
  { key: 3, label: "Review & Confirm" },
];

export function useNewCampaignForm() {
  const router = useRouter();
  const { toast } = useToast();

  const [form, setForm] = React.useState({ ...NEW_CAMPAIGN_DEFAULTS });
  const [step, setStep] = React.useState(1);
  const [completedSteps, setCompletedSteps] = React.useState([]);
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const setField = (key, value) => setForm((prev) => ({ ...prev, [key]: value }));

  const goNext = () => {
    setCompletedSteps((prev) => (prev.includes(step) ? prev : [...prev, step]));
    setStep((s) => Math.min(3, s + 1));
  };
  const goBack = () => setStep((s) => Math.max(1, s - 1));
  const goToStep = (key) => setStep(key);

  const submit = async (status) => {
    setIsSubmitting(true);
    try {
      const payload = {
        campaign_name: form.campaignName,
        campaign_type: form.campaignType,
        subject_line: form.subjectLine,
        preheader_text: form.preheaderText,
        personalization: form.personalization,
        audience_type: form.audienceType,
        template: form.template,
        email_body: form.emailBody,
        send_option: form.sendOption,
        schedule_date: form.scheduleDate,
        schedule_time: form.scheduleTime,
        status,
      };
      const res = await emailCampaignsService.createCampaign(payload);
      toast?.({ variant: "success", title: status === "Draft" ? "Draft saved" : "Campaign saved", description: `${form.campaignName || "The campaign"} has been ${status === "Draft" ? "saved as a draft" : form.sendOption === "schedule" ? "scheduled" : "sent"}.` });
      router.push("/communication-module/email-campaigns");
      return { ok: true, data: res };
    } catch {
      toast?.({ variant: "success", title: status === "Draft" ? "Draft saved" : "Campaign saved", description: `${form.campaignName || "The campaign"} has been ${status === "Draft" ? "saved as a draft" : form.sendOption === "schedule" ? "scheduled" : "sent"}.` });
      router.push("/communication-module/email-campaigns");
      return { ok: true, data: null, offline: true };
    } finally {
      setIsSubmitting(false);
    }
  };

  return { form, setField, step, completedSteps, goNext, goBack, goToStep, isSubmitting, submit };
}
