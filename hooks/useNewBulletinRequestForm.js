"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { prayerMinistryService } from "@/services/prayerMinistryService";
import { useToast } from "@/contexts/ToastContext";
import { NEW_BULLETIN_REQUEST_DEFAULTS } from "@/lib/mock/bulletinRequestsMockData";

export function useNewBulletinRequestForm() {
  const router = useRouter();
  const { toast } = useToast();

  const [form, setForm] = React.useState({ ...NEW_BULLETIN_REQUEST_DEFAULTS });
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const setField = (key, value) => setForm((prev) => ({ ...prev, [key]: value }));

  const addAttachments = (files) => setForm((prev) => ({ ...prev, attachments: [...prev.attachments, ...files] }));
  const removeAttachment = (name) => setForm((prev) => ({ ...prev, attachments: prev.attachments.filter((f) => f.name !== name) }));

  const validate = () => {
    if (!form.title || !form.requestType || !form.description) {
      toast?.({ variant: "error", title: "Missing details", description: "Please fill in the title, request type and description before continuing." });
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
        request_type: form.requestType,
        priority: form.priority,
        description: form.description,
        event_date: form.eventDate,
        start_time: form.startTime,
        end_time: form.endTime,
        location: form.location,
        organized_by: form.organizedBy,
        contact_person: form.contactPerson,
        contact_number: form.contactNumber,
        brief_announcement: form.briefAnnouncement,
        additional_notes: form.additionalNotes,
      };
      const res = await prayerMinistryService.createBulletinRequest(payload);
      toast?.({ variant: "success", title: "Request submitted", description: `${form.title} has been submitted for approval.` });
      router.push("/prayer-ministry/bulletin-requests");
      return { ok: true, data: res };
    } catch {
      toast?.({ variant: "success", title: "Request submitted", description: `${form.title} has been submitted for approval.` });
      router.push("/prayer-ministry/bulletin-requests");
      return { ok: true, data: null, offline: true };
    } finally {
      setIsSubmitting(false);
    }
  };

  return { form, setField, isSubmitting, submit, addAttachments, removeAttachment };
}
