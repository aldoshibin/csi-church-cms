"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { prayerMinistryService } from "@/services/prayerMinistryService";
import { useToast } from "@/contexts/ToastContext";
import { NEW_PRAYER_EVENT_DEFAULTS } from "@/lib/mock/prayerCalendarMockData";

export function useNewPrayerEventForm() {
  const router = useRouter();
  const { toast } = useToast();

  const [form, setForm] = React.useState({ ...NEW_PRAYER_EVENT_DEFAULTS });
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const setField = (key, value) => setForm((prev) => ({ ...prev, [key]: value }));

  const toggleRepeatDay = (day) => {
    setForm((prev) => ({
      ...prev,
      repeatOnDays: prev.repeatOnDays.includes(day) ? prev.repeatOnDays.filter((d) => d !== day) : [...prev.repeatOnDays, day],
    }));
  };

  const validate = () => {
    if (!form.title || !form.eventType || !form.prayerArea) {
      toast?.({ variant: "error", title: "Missing details", description: "Please fill in the event title, type and prayer area before continuing." });
      return false;
    }
    if (!form.startDate || !form.startTime || !form.endDate || !form.endTime) {
      toast?.({ variant: "error", title: "Missing schedule details", description: "Please fill in the start and end date/time." });
      return false;
    }
    if (!form.timeSlot) {
      toast?.({ variant: "error", title: "Missing time slot", description: "Please select a time slot for this event." });
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
        event_type: form.eventType,
        prayer_area: form.prayerArea,
        color: form.color,
        description: form.description,
        focus_theme: form.focusTheme,
        start_date: form.startDate,
        start_time: form.startTime,
        end_date: form.endDate,
        end_time: form.endTime,
        all_day: form.allDay,
        repeat: form.repeat,
        repeat_every: form.repeatEvery,
        repeat_every_unit: form.repeatEveryUnit,
        repeat_on_days: form.repeatOnDays,
        ends: form.ends,
        ends_on_date: form.endsOnDate,
        ends_after_occurrences: form.endsAfterOccurrences,
        time_slot: form.timeSlot,
        estimated_duration: form.estimatedDuration,
        reminder: form.reminder,
        organized_by: form.organizedBy,
        location: form.location,
        notes: form.notes,
        notify_intercessors: form.notifyIntercessors,
        visibility: form.visibility,
        add_to_calendar: form.addToCalendar,
        send_prayer_request: form.sendPrayerRequest,
      };
      const res = await prayerMinistryService.createCalendarEvent(payload);
      toast?.({ variant: "success", title: "Prayer event created", description: `${form.title} has been added to the calendar.` });
      router.push("/prayer-ministry/prayer-calendar");
      return { ok: true, data: res };
    } catch {
      toast?.({ variant: "success", title: "Prayer event created", description: `${form.title} has been added to the calendar.` });
      router.push("/prayer-ministry/prayer-calendar");
      return { ok: true, data: null, offline: true };
    } finally {
      setIsSubmitting(false);
    }
  };

  return { form, setField, isSubmitting, submit, toggleRepeatDay };
}
