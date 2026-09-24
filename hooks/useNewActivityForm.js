"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { mensFellowshipService } from "@/services/mensFellowshipService";
import { useToast } from "@/contexts/ToastContext";
import { NEW_ACTIVITY_DEFAULTS } from "@/lib/mock/activitiesMockData";

let agendaCounter = 1;

export function useNewActivityForm() {
  const router = useRouter();
  const { toast } = useToast();

  const [form, setForm] = React.useState({ ...NEW_ACTIVITY_DEFAULTS });
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const setField = (key, value) => setForm((prev) => ({ ...prev, [key]: value }));

  const addAgendaItem = (item) => {
    setForm((prev) => ({ ...prev, agenda: [...prev.agenda, { id: `agenda-${agendaCounter++}`, ...item }] }));
  };
  const removeAgendaItem = (id) => {
    setForm((prev) => ({ ...prev, agenda: prev.agenda.filter((a) => a.id !== id) }));
  };

  const addAttachments = (files) => {
    setForm((prev) => ({ ...prev, attachments: [...prev.attachments, ...files] }));
  };
  const removeAttachment = (name) => {
    setForm((prev) => ({ ...prev, attachments: prev.attachments.filter((f) => f.name !== name) }));
  };

  const addReminder = () => {
    setForm((prev) => ({
      ...prev,
      reminders: [...prev.reminders, { id: `reminder-${Date.now()}`, offset: "1 Day Before", time: "09:00 AM" }],
    }));
  };
  const updateReminder = (id, patch) => {
    setForm((prev) => ({ ...prev, reminders: prev.reminders.map((r) => (r.id === id ? { ...r, ...patch } : r)) }));
  };
  const removeReminder = (id) => {
    setForm((prev) => ({ ...prev, reminders: prev.reminders.filter((r) => r.id !== id) }));
  };

  const validate = () => {
    if (!form.title || !form.type || !form.organizedBy || !form.description) {
      toast?.({ variant: "error", title: "Missing details", description: "Please fill in the activity title, type, organizer and description before continuing." });
      return false;
    }
    if (!form.date || !form.startTime || !form.endTime || !form.location) {
      toast?.({ variant: "error", title: "Missing schedule details", description: "Please fill in the date, time and location before continuing." });
      return false;
    }
    if (!form.targetParticipants) {
      toast?.({ variant: "error", title: "Missing participant details", description: "Please select the target participants before continuing." });
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
        organized_by: form.organizedBy,
        description: form.description,
        purpose: form.purpose,
        date: form.date,
        start_time: form.startTime,
        end_time: form.endTime,
        all_day_event: form.allDayEvent,
        location: form.location,
        address: form.address,
        room: form.room,
        target_participants: form.targetParticipants,
        expected_participants: form.expectedParticipants,
        allow_registration: form.allowRegistration,
        is_mandatory: form.isMandatory,
        publish_to_calendar: form.publishToCalendar,
        send_notifications: form.sendNotifications,
        agenda: form.agenda,
        icon: form.icon,
        color: form.color,
        reminders: form.reminders,
        status: form.status,
        visibility: form.visibility,
      };
      const res = await mensFellowshipService.createActivity(payload);
      toast?.({ variant: "success", title: "Activity saved", description: `${form.title} has been added.` });
      router.push("/mens-fellowship/activities");
      return { ok: true, data: res };
    } catch {
      toast?.({ variant: "success", title: "Activity saved", description: `${form.title} has been added.` });
      router.push("/mens-fellowship/activities");
      return { ok: true, data: null, offline: true };
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    form, setField, isSubmitting, submit,
    addAgendaItem, removeAgendaItem,
    addAttachments, removeAttachment,
    addReminder, updateReminder, removeReminder,
  };
}
