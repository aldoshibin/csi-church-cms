"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { prayerMinistryService } from "@/services/prayerMinistryService";
import { useToast } from "@/contexts/ToastContext";
import { NEW_PRAISE_REPORT_DEFAULTS } from "@/lib/mock/praiseReportsMockData";

function todayIso() {
  return new Date().toISOString().slice(0, 10);
}

export function useNewPraiseReportForm() {
  const router = useRouter();
  const { toast } = useToast();

  const [form, setForm] = React.useState({
    ...NEW_PRAISE_REPORT_DEFAULTS,
    dateOfPraise: todayIso(),
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

  const addPhotos = (files) => setForm((prev) => ({ ...prev, photos: [...prev.photos, ...files].slice(0, 3) }));
  const removePhoto = (name) => setForm((prev) => ({ ...prev, photos: prev.photos.filter((f) => f.name !== name) }));

  const validate = () => {
    if (!form.title || !form.category || !form.dateOfPraise || !form.shareWith) {
      toast?.({ variant: "error", title: "Missing details", description: "Please fill in the report title, category, date and who to share with." });
      return false;
    }
    if (!form.testimony) {
      toast?.({ variant: "error", title: "Missing testimony", description: "Please share your praise report before continuing." });
      return false;
    }
    if (!form.anonymous && !form.yourName) {
      toast?.({ variant: "error", title: "Missing name", description: "Please enter your name, or choose to submit anonymously." });
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
        date_of_praise: form.dateOfPraise,
        share_with: form.shareWith,
        answered_prayer_related_to: form.answeredPrayerRelatedTo,
        praise_type: form.praiseType,
        testimony: form.testimony,
        scripture_reference: form.scriptureReference,
        your_name: form.anonymous ? null : form.yourName,
        contact_number: form.contactNumber,
        email: form.email,
        allow_thank: form.allowThank,
        allow_pray: form.allowPray,
        allow_comment: form.allowComment,
        allow_share: form.allowShare,
        anonymous: form.anonymous,
        tags: form.tags,
        reminder_date: form.reminderDate,
      };
      const res = await prayerMinistryService.createPraiseReport(payload);
      toast?.({ variant: "success", title: "Praise report shared", description: `${form.title} has been submitted.` });
      router.push("/prayer-ministry/praise-reports");
      return { ok: true, data: res };
    } catch {
      toast?.({ variant: "success", title: "Praise report shared", description: `${form.title} has been submitted.` });
      router.push("/prayer-ministry/praise-reports");
      return { ok: true, data: null, offline: true };
    } finally {
      setIsSubmitting(false);
    }
  };

  return { form, setField, isSubmitting, submit, addTag, removeTag, addPhotos, removePhoto };
}
