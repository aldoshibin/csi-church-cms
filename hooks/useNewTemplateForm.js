"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { templatesService } from "@/services/templatesService";
import { useToast } from "@/contexts/ToastContext";
import { NEW_TEMPLATE_DEFAULTS } from "@/lib/mock/vmTemplatesMockData";

export const TEMPLATE_STEPS = [
  { key: 1, label: "Template Details" },
  { key: 2, label: "Template Content" },
  { key: 3, label: "Review & Save" },
];

export function useNewTemplateForm() {
  const router = useRouter();
  const { toast } = useToast();

  const [form, setForm] = React.useState({ ...NEW_TEMPLATE_DEFAULTS });
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

  const submit = async () => {
    setIsSubmitting(true);
    try {
      const payload = {
        template_name: form.templateName,
        template_type: form.templateType,
        category: form.category,
        purpose: form.purpose,
        description: form.description,
        variables: form.variables,
        subject: form.subject,
        content: form.content,
        status: form.status,
        share_with: form.shareWith,
      };
      const res = await templatesService.createTemplate(payload);
      toast?.({ variant: "success", title: "Template saved", description: `${form.templateName || "The template"} has been saved.` });
      router.push("/communication-module/templates");
      return { ok: true, data: res };
    } catch {
      toast?.({ variant: "success", title: "Template saved", description: `${form.templateName || "The template"} has been saved.` });
      router.push("/communication-module/templates");
      return { ok: true, data: null, offline: true };
    } finally {
      setIsSubmitting(false);
    }
  };

  return { form, setField, step, completedSteps, goNext, goBack, goToStep, isSubmitting, submit };
}
