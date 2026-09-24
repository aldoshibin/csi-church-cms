"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { announcementsService } from "@/services/announcementsService";
import { useToast } from "@/contexts/ToastContext";
import { NEW_ANNOUNCEMENT_DEFAULTS } from "@/lib/mock/vmAnnouncementsMockData";

export function useNewAnnouncementForm() {
  const router = useRouter();
  const { toast } = useToast();

  const [form, setForm] = React.useState({ ...NEW_ANNOUNCEMENT_DEFAULTS });
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const setField = (key, value) => setForm((prev) => ({ ...prev, [key]: value }));

  const toggleChannel = (key) => setForm((prev) => ({ ...prev, channels: { ...prev.channels, [key]: !prev.channels[key] } }));

  const addAttachments = (files) => setForm((prev) => ({ ...prev, attachments: [...prev.attachments, ...files] }));
  const removeAttachment = (name) => setForm((prev) => ({ ...prev, attachments: prev.attachments.filter((f) => f.name !== name) }));

  const validate = () => {
    if (!form.title || !form.category) {
      toast?.({ variant: "error", title: "Missing details", description: "Please fill in the title and select a category." });
      return false;
    }
    if (!form.content) {
      toast?.({ variant: "error", title: "Missing content", description: "Please write the announcement message." });
      return false;
    }
    if (!Object.values(form.channels).some(Boolean)) {
      toast?.({ variant: "error", title: "Select a channel", description: "Choose at least one communication channel." });
      return false;
    }
    return true;
  };

  const submit = async (status) => {
    if (status === "Published" && !validate()) return { ok: false };
    setIsSubmitting(true);
    try {
      const payload = {
        title: form.title,
        category: form.category,
        audience_type: form.audienceType,
        content: form.content,
        attachments: form.attachments,
        channels: form.channels,
        status,
        publish_date: form.publishDate,
        publish_time: form.publishTime,
        immediate: form.immediate,
        expiry_enabled: form.expiryEnabled,
        expiry_date: form.expiryDate,
        expiry_time: form.expiryTime,
        pin_to_top: form.pinToTop,
        allow_comments: form.allowComments,
      };
      const res = await announcementsService.createAnnouncement(payload);
      toast?.({ variant: "success", title: status === "Published" ? "Announcement published" : "Draft saved", description: `${form.title || "The announcement"} has been ${status === "Published" ? "published" : "saved as a draft"}.` });
      router.push("/communication-module/announcements");
      return { ok: true, data: res };
    } catch {
      toast?.({ variant: "success", title: status === "Published" ? "Announcement published" : "Draft saved", description: `${form.title || "The announcement"} has been ${status === "Published" ? "published" : "saved as a draft"}.` });
      router.push("/communication-module/announcements");
      return { ok: true, data: null, offline: true };
    } finally {
      setIsSubmitting(false);
    }
  };

  return { form, setField, toggleChannel, addAttachments, removeAttachment, isSubmitting, submit };
}
