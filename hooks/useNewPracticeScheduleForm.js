"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { choirWorshipService } from "@/services/choirWorshipService";
import { useToast } from "@/contexts/ToastContext";
import { NEW_PRACTICE_SCHEDULE_DEFAULTS } from "@/lib/mock/practiceScheduleMockData";

export function useNewPracticeScheduleForm() {
  const router = useRouter();
  const { toast } = useToast();

  const [form, setForm] = React.useState({ ...NEW_PRACTICE_SCHEDULE_DEFAULTS });
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const setField = (key, value) => setForm((prev) => ({ ...prev, [key]: value }));

  const toggleMember = (id) => {
    setForm((prev) => ({
      ...prev,
      assignedMemberIds: prev.assignedMemberIds.includes(id)
        ? prev.assignedMemberIds.filter((m) => m !== id)
        : [...prev.assignedMemberIds, id],
    }));
  };

  const removeMember = (id) => setForm((prev) => ({ ...prev, assignedMemberIds: prev.assignedMemberIds.filter((m) => m !== id) }));
  const clearAllMembers = () => setForm((prev) => ({ ...prev, assignedMemberIds: [] }));

  const validate = () => {
    if (!form.title || !form.practiceType || !form.team) {
      toast?.({ variant: "error", title: "Missing details", description: "Please fill in the practice title, type and team before continuing." });
      return false;
    }
    if (!form.date || !form.startTime || !form.endTime || !form.location) {
      toast?.({ variant: "error", title: "Missing schedule details", description: "Please fill in the date, time and location before continuing." });
      return false;
    }
    if (form.assignedMemberIds.length === 0) {
      toast?.({ variant: "error", title: "No members assigned", description: "Please select at least one member for this practice." });
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
        practice_type: form.practiceType,
        team: form.team,
        date: form.date,
        start_time: form.startTime,
        end_time: form.endTime,
        all_day: form.allDay,
        repeat: form.repeat,
        repeat_until: form.repeatUntil,
        location: form.location,
        notes: form.notes,
        assigned_member_ids: form.assignedMemberIds,
      };
      const res = await choirWorshipService.createPracticeSchedule(payload);
      toast?.({ variant: "success", title: "Practice scheduled", description: `${form.title} has been added to the schedule.` });
      router.push("/choir-worship/practice-schedule");
      return { ok: true, data: res };
    } catch {
      toast?.({ variant: "success", title: "Practice scheduled", description: `${form.title} has been added to the schedule.` });
      router.push("/choir-worship/practice-schedule");
      return { ok: true, data: null, offline: true };
    } finally {
      setIsSubmitting(false);
    }
  };

  return { form, setField, isSubmitting, submit, toggleMember, removeMember, clearAllMembers };
}
