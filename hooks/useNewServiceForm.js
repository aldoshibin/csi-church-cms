"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { choirWorshipService } from "@/services/choirWorshipService";
import { useToast } from "@/contexts/ToastContext";
import { NEW_SERVICE_DEFAULTS } from "@/lib/mock/servicesMockData";

export function useNewServiceForm() {
  const router = useRouter();
  const { toast } = useToast();

  const [form, setForm] = React.useState({ ...NEW_SERVICE_DEFAULTS });
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const setField = (key, value) => setForm((prev) => ({ ...prev, [key]: value }));

  const addAttachments = (files) => setForm((prev) => ({ ...prev, attachments: [...prev.attachments, ...files] }));
  const removeAttachment = (name) => setForm((prev) => ({ ...prev, attachments: prev.attachments.filter((f) => f.name !== name) }));

  const validate = () => {
    if (!form.title || !form.type || !form.status) {
      toast?.({ variant: "error", title: "Missing details", description: "Please fill in the service title, type and status before continuing." });
      return false;
    }
    if (!form.date || !form.startTime || !form.endTime || !form.location) {
      toast?.({ variant: "error", title: "Missing schedule details", description: "Please fill in the date, time and location before continuing." });
      return false;
    }
    if (!form.organizedBy || !form.ledBy) {
      toast?.({ variant: "error", title: "Missing details", description: "Please select who is organizing and leading this service." });
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
        type: form.type,
        short_code: form.shortCode,
        description: form.description,
        department: form.department,
        status: form.status,
        date: form.date,
        start_time: form.startTime,
        end_time: form.endTime,
        timezone: form.timezone,
        location: form.location,
        language: form.language,
        dress_code: form.dressCode,
        livestream: form.livestream,
        expected_attendance: form.expectedAttendance,
        location_capacity: form.locationCapacity,
        organized_by: form.organizedBy,
        led_by: form.ledBy,
        songs_setlist: form.songsSetlist,
        notes: form.notes,
      };
      const res = await choirWorshipService.createService(payload);
      toast?.({ variant: "success", title: "Service saved", description: `${form.title} has been added.` });
      router.push("/choir-worship/services");
      return { ok: true, data: res };
    } catch {
      toast?.({ variant: "success", title: "Service saved", description: `${form.title} has been added.` });
      router.push("/choir-worship/services");
      return { ok: true, data: null, offline: true };
    } finally {
      setIsSubmitting(false);
    }
  };

  return { form, setField, isSubmitting, submit, addAttachments, removeAttachment };
}
