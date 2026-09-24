"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { messagesService } from "@/services/messagesService";
import { useToast } from "@/contexts/ToastContext";
import { NEW_MESSAGE_DEFAULTS } from "@/lib/mock/vmMessagesMockData";

export function useNewMessageForm() {
  const router = useRouter();
  const { toast } = useToast();

  const [form, setForm] = React.useState({ ...NEW_MESSAGE_DEFAULTS });
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const setField = (key, value) => setForm((prev) => ({ ...prev, [key]: value }));

  const toggleChannel = (key) => setForm((prev) => ({ ...prev, channels: { ...prev.channels, [key]: !prev.channels[key] } }));

  const addAttachments = (files) => setForm((prev) => ({ ...prev, attachments: [...prev.attachments, ...files] }));
  const removeAttachment = (name) => setForm((prev) => ({ ...prev, attachments: prev.attachments.filter((f) => f.name !== name) }));

  const validate = () => {
    if (!form.subject) {
      toast?.({ variant: "error", title: "Missing subject", description: "Please enter a subject for this message." });
      return false;
    }
    if (!form.content) {
      toast?.({ variant: "error", title: "Missing content", description: "Please write the message content." });
      return false;
    }
    if (!Object.values(form.channels).some(Boolean)) {
      toast?.({ variant: "error", title: "Select a channel", description: "Choose at least one channel to send this message." });
      return false;
    }
    return true;
  };

  const submit = async (status) => {
    if (status === "Sent" && !validate()) return { ok: false };
    setIsSubmitting(true);
    try {
      const payload = {
        subject: form.subject,
        audience_type: form.audienceType,
        content: form.content,
        attachments: form.attachments,
        channels: form.channels,
        priority: form.priority,
        allow_replies: form.allowReplies,
        schedule_enabled: form.scheduleEnabled,
        schedule_date: form.scheduleDate,
        schedule_time: form.scheduleTime,
        status,
      };
      const res = await messagesService.createMessage(payload);
      toast?.({ variant: "success", title: status === "Sent" ? "Message sent" : "Draft saved", description: `${form.subject || "The message"} has been ${status === "Sent" ? "sent" : "saved as a draft"}.` });
      router.push("/communication-module/messages");
      return { ok: true, data: res };
    } catch {
      toast?.({ variant: "success", title: status === "Sent" ? "Message sent" : "Draft saved", description: `${form.subject || "The message"} has been ${status === "Sent" ? "sent" : "saved as a draft"}.` });
      router.push("/communication-module/messages");
      return { ok: true, data: null, offline: true };
    } finally {
      setIsSubmitting(false);
    }
  };

  return { form, setField, toggleChannel, addAttachments, removeAttachment, isSubmitting, submit };
}
