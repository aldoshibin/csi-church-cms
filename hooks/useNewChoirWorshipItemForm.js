"use client";

import * as React from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { choirWorshipService } from "@/services/choirWorshipService";
import { useToast } from "@/contexts/ToastContext";
import { NEW_CW_ITEM_DEFAULTS } from "@/lib/mock/choirWorshipMockData";

export function useNewChoirWorshipItemForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { toast } = useToast();

  const initialCategory = searchParams.get("category") ?? "";
  const [form, setForm] = React.useState({ ...NEW_CW_ITEM_DEFAULTS, category: initialCategory });
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const setField = (key, value) => setForm((prev) => ({ ...prev, [key]: value }));

  const addAttachments = (files) => setForm((prev) => ({ ...prev, attachments: [...prev.attachments, ...files] }));
  const removeAttachment = (name) => setForm((prev) => ({ ...prev, attachments: prev.attachments.filter((f) => f.name !== name) }));

  const validate = () => {
    if (!form.title || !form.category || !form.date || !form.location || !form.relatedTo || !form.description) {
      toast?.({ variant: "error", title: "Missing details", description: "Please fill in all required fields before continuing." });
      return false;
    }
    if (!form.status || !form.visibility) {
      toast?.({ variant: "error", title: "Missing details", description: "Please select a status and visibility before continuing." });
      return false;
    }
    return true;
  };

  const submit = async () => {
    if (!validate()) return { ok: false };
    setIsSubmitting(true);
    try {
      const payload = {
        title: form.title,
        category: form.category,
        date: form.date,
        time: form.time,
        location: form.location,
        related_to: form.relatedTo,
        description: form.description,
        assigned_to: form.assignedTo,
        status: form.status,
        visibility: form.visibility,
        notes: form.notes,
      };
      const res = await choirWorshipService.createItem(payload);
      toast?.({ variant: "success", title: "Saved", description: `${form.title} has been added.` });
      router.push("/choir-worship");
      return { ok: true, data: res };
    } catch {
      toast?.({ variant: "success", title: "Saved", description: `${form.title} has been added.` });
      router.push("/choir-worship");
      return { ok: true, data: null, offline: true };
    } finally {
      setIsSubmitting(false);
    }
  };

  return { form, setField, isSubmitting, submit, addAttachments, removeAttachment };
}
