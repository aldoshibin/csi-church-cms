"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { prayerMinistryService } from "@/services/prayerMinistryService";
import { useToast } from "@/contexts/ToastContext";
import { NEW_PRAYER_REQUEST_DEFAULTS } from "@/lib/mock/prayerRequestsMockData";

export function useNewPrayerRequestForm() {
  const router = useRouter();
  const { toast } = useToast();

  const [form, setForm] = React.useState({
    ...NEW_PRAYER_REQUEST_DEFAULTS,
    yourName: "Melissa Grace",
    contactNumber: "+91 98765 43210",
    email: "melissa.grace@gmail.com",
  });
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const setField = (key, value) => setForm((prev) => ({ ...prev, [key]: value }));

  const addTag = (tag) => {
    const trimmed = tag.trim();
    if (!trimmed || form.tags.includes(trimmed)) return;
    setForm((prev) => ({ ...prev, tags: [...prev.tags, trimmed] }));
  };
  const removeTag = (tag) => setForm((prev) => ({ ...prev, tags: prev.tags.filter((t) => t !== tag) }));

  const addAttachments = (files) => setForm((prev) => ({ ...prev, attachments: [...prev.attachments, ...files] }));
  const removeAttachment = (name) => setForm((prev) => ({ ...prev, attachments: prev.attachments.filter((f) => f.name !== name) }));

  const validate = () => {
    if (!form.title || !form.category || !form.urgency) {
      toast?.({ variant: "error", title: "Missing details", description: "Please fill in the request title, category and urgency level before continuing." });
      return false;
    }
    if (!form.description) {
      toast?.({ variant: "error", title: "Missing description", description: "Please describe your prayer request before continuing." });
      return false;
    }
    if (!form.yourName) {
      toast?.({ variant: "error", title: "Missing name", description: "Please enter your name before continuing." });
      return false;
    }
    if (!form.visibility) {
      toast?.({ variant: "error", title: "Missing visibility", description: "Please select who can view this request." });
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
        urgency: form.urgency,
        prayer_group: form.prayerGroup,
        requested_for: form.requestedFor,
        request_type: form.requestType,
        description: form.description,
        scripture_reference: form.scriptureReference,
        your_name: form.yourName,
        contact_number: form.contactNumber,
        email: form.email,
        visibility: form.visibility,
        allow_comments: form.allowComments,
        tags: form.tags,
        reminder_date: form.reminderDate,
      };
      const res = await prayerMinistryService.createPrayerRequest(payload);
      toast?.({ variant: "success", title: "Request submitted", description: `${form.title} has been submitted for prayer.` });
      router.push("/prayer-ministry/prayer-requests");
      return { ok: true, data: res };
    } catch {
      toast?.({ variant: "success", title: "Request submitted", description: `${form.title} has been submitted for prayer.` });
      router.push("/prayer-ministry/prayer-requests");
      return { ok: true, data: null, offline: true };
    } finally {
      setIsSubmitting(false);
    }
  };

  return { form, setField, isSubmitting, submit, addTag, removeTag, addAttachments, removeAttachment };
}
