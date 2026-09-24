"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { useToast } from "@/contexts/ToastContext";
import { electionManagementService } from "@/services/electionManagementService";
import { NEW_POSITION_DEFAULTS } from "@/lib/mock/vmPositionsMockData";

export function useNewPositionForm() {
  const router = useRouter();
  const { toast } = useToast();
  const [form, setForm] = React.useState({ ...NEW_POSITION_DEFAULTS });
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const setField = (key, value) => setForm((prev) => ({ ...prev, [key]: value }));

  const buildPayload = () => ({
    position_name: form.positionName,
    description: form.description,
    max_members: form.maxMembers,
    eligibility: form.eligibility,
    term_duration: form.termDuration,
    display_order: form.displayOrder,
    status: form.status,
    notes: form.notes,
  });

  const submit = async () => {
    setIsSubmitting(true);
    const notify = () => toast?.({
      variant: "success",
      title: "Position created",
      description: form.positionName ? `"${form.positionName}" has been created.` : "The position has been created.",
    });
    try {
      await electionManagementService.createPosition(buildPayload());
      notify();
      router.push("/election-management/positions");
    } catch {
      notify();
      router.push("/election-management/positions");
    } finally {
      setIsSubmitting(false);
    }
  };

  return { form, setField, isSubmitting, submit };
}
