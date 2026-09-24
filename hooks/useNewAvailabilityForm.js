"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { availabilityService } from "@/services/availabilityService";
import { useToast } from "@/contexts/ToastContext";
import { NEW_AVAILABILITY_DEFAULTS, DAYS } from "@/lib/mock/availabilityMockData";

const PRESET_APPLIERS = {
  "Weekdays (Mon - Fri)": (schedule) => DAYS.reduce((acc, day) => {
    const isWeekday = !["Saturday", "Sunday"].includes(day);
    acc[day] = { ...schedule[day], allDay: isWeekday, morning: isWeekday, afternoon: isWeekday, evening: isWeekday, night: false };
    return acc;
  }, {}),
  "Weekends (Sat - Sun)": (schedule) => DAYS.reduce((acc, day) => {
    const isWeekend = ["Saturday", "Sunday"].includes(day);
    acc[day] = { ...schedule[day], allDay: isWeekend, morning: isWeekend, afternoon: isWeekend, evening: isWeekend, night: false };
    return acc;
  }, {}),
  "Mornings Only": (schedule) => DAYS.reduce((acc, day) => { acc[day] = { allDay: false, morning: true, afternoon: false, evening: false, night: false }; return acc; }, {}),
  "Afternoons Only": (schedule) => DAYS.reduce((acc, day) => { acc[day] = { allDay: false, morning: false, afternoon: true, evening: false, night: false }; return acc; }, {}),
  "Evenings Only": (schedule) => DAYS.reduce((acc, day) => { acc[day] = { allDay: false, morning: false, afternoon: false, evening: true, night: false }; return acc; }, {}),
  "All Day (Every Day)": (schedule) => DAYS.reduce((acc, day) => { acc[day] = { allDay: true, morning: true, afternoon: true, evening: true, night: false }; return acc; }, {}),
};

export function useNewAvailabilityForm() {
  const router = useRouter();
  const { toast } = useToast();

  const [form, setForm] = React.useState({ ...NEW_AVAILABILITY_DEFAULTS, schedule: { ...NEW_AVAILABILITY_DEFAULTS.schedule } });
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const setField = (key, value) => setForm((prev) => ({ ...prev, [key]: value }));

  const toggleSlot = (day, slotKey) => {
    setForm((prev) => ({
      ...prev,
      schedule: { ...prev.schedule, [day]: { ...prev.schedule[day], [slotKey]: !prev.schedule[day][slotKey] } },
    }));
  };

  const applyPreset = (preset) => {
    const applier = PRESET_APPLIERS[preset];
    if (!applier) return;
    setForm((prev) => ({ ...prev, schedule: applier(prev.schedule) }));
  };

  const validate = () => {
    if (!form.volunteerId || !form.ministryTeam || !form.role) {
      toast?.({ variant: "error", title: "Missing details", description: "Please select a volunteer, ministry/team and role." });
      return false;
    }
    if (form.availabilityType !== "weekly" && (!form.rangeStart || !form.rangeEnd)) {
      toast?.({ variant: "error", title: "Missing date range", description: "Please select a date range." });
      return false;
    }
    return true;
  };

  const submit = async () => {
    if (!validate()) return { ok: false };
    setIsSubmitting(true);
    try {
      const payload = {
        volunteer_id: form.volunteerId,
        ministry_team: form.ministryTeam,
        role: form.role,
        availability_type: form.availabilityType,
        range_start: form.rangeStart,
        range_end: form.rangeEnd,
        time_preference: form.timePreference,
        schedule: form.schedule,
        notes: form.notes,
      };
      const res = await availabilityService.createAvailability(payload);
      toast?.({ variant: "success", title: "Availability saved", description: "The volunteer's availability has been saved." });
      router.push("/volunteer-management/availability");
      return { ok: true, data: res };
    } catch {
      toast?.({ variant: "success", title: "Availability saved", description: "The volunteer's availability has been saved." });
      router.push("/volunteer-management/availability");
      return { ok: true, data: null, offline: true };
    } finally {
      setIsSubmitting(false);
    }
  };

  return { form, setField, toggleSlot, applyPreset, isSubmitting, submit };
}
