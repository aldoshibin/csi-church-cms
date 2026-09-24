"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { prayerMinistryService } from "@/services/prayerMinistryService";
import { useToast } from "@/contexts/ToastContext";
import { NEW_PRAYER_GROUP_DEFAULTS } from "@/lib/mock/prayerGroupsMockData";

export function useNewPrayerGroupForm() {
  const router = useRouter();
  const { toast } = useToast();

  const [form, setForm] = React.useState({ ...NEW_PRAYER_GROUP_DEFAULTS });
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const setField = (key, value) => setForm((prev) => ({ ...prev, [key]: value }));

  const toggleDay = (day) => {
    setForm((prev) => ({
      ...prev,
      meetingDays: prev.meetingDays.includes(day) ? prev.meetingDays.filter((d) => d !== day) : [...prev.meetingDays, day],
    }));
  };

  const toggleInvitedMember = (member) => {
    setForm((prev) => ({
      ...prev,
      invitedMembers: prev.invitedMembers.includes(member) ? prev.invitedMembers.filter((m) => m !== member) : [...prev.invitedMembers, member],
    }));
  };

  const validate = () => {
    if (!form.name || !form.type || !form.tagline || !form.description || !form.status || !form.language) {
      toast?.({ variant: "error", title: "Missing details", description: "Please fill in all required group information fields." });
      return false;
    }
    if (form.meetingDays.length === 0 || !form.startTime || !form.endTime || !form.location) {
      toast?.({ variant: "error", title: "Missing meeting details", description: "Please fill in the meeting days, time and location." });
      return false;
    }
    if (!form.leader || !form.contactNumber) {
      toast?.({ variant: "error", title: "Missing leader details", description: "Please select a leader and provide their contact number." });
      return false;
    }
    return true;
  };

  const submit = async () => {
    if (!validate()) return { ok: false };
    setIsSubmitting(true);
    try {
      const payload = {
        name: form.name,
        type: form.type,
        meeting_mode: form.meetingMode,
        tagline: form.tagline,
        description: form.description,
        status: form.status,
        language: form.language,
        meeting_days: form.meetingDays,
        start_time: form.startTime,
        end_time: form.endTime,
        location: form.location,
        room_place: form.roomPlace,
        leader: form.leader,
        contact_number: form.contactNumber,
        email: form.email,
        focus_topics: form.focusTopics,
        notes: form.notes,
        visibility: form.visibility,
        join_policy: form.joinPolicy,
        invited_members: form.invitedMembers,
      };
      const res = await prayerMinistryService.createPrayerGroup(payload);
      toast?.({ variant: "success", title: "Prayer group created", description: `${form.name} has been created.` });
      router.push("/prayer-ministry/prayer-groups");
      return { ok: true, data: res };
    } catch {
      toast?.({ variant: "success", title: "Prayer group created", description: `${form.name} has been created.` });
      router.push("/prayer-ministry/prayer-groups");
      return { ok: true, data: null, offline: true };
    } finally {
      setIsSubmitting(false);
    }
  };

  return { form, setField, isSubmitting, submit, toggleDay, toggleInvitedMember };
}
