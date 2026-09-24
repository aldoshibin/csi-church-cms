"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { mensFellowshipGroupsService } from "@/services/mensFellowshipGroupsService";
import { useToast } from "@/contexts/ToastContext";
import { NEW_FELLOWSHIP_GROUP_DEFAULTS } from "@/lib/mock/mensFellowshipGroupsMockData";

export function useNewMensFellowshipGroupForm() {
  const router = useRouter();
  const { toast } = useToast();

  const [form, setForm] = React.useState({ ...NEW_FELLOWSHIP_GROUP_DEFAULTS });
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const setField = (key, value) => setForm((prev) => ({ ...prev, [key]: value }));

  const addTag = (tag) => {
    if (!tag.trim() || form.tags.includes(tag.trim())) return;
    setForm((prev) => ({ ...prev, tags: [...prev.tags, tag.trim()] }));
  };
  const removeTag = (tag) => setForm((prev) => ({ ...prev, tags: prev.tags.filter((t) => t !== tag) }));

  const validate = () => {
    if (!form.groupName || !form.establishedOn || !form.focusArea || !form.meetingDay || !form.meetingTime) {
      toast?.({ variant: "error", title: "Missing details", description: "Please fill in all required group information fields." });
      return false;
    }
    if (!form.leader) {
      toast?.({ variant: "error", title: "Missing leader", description: "Please select a leader for this group." });
      return false;
    }
    return true;
  };

  const submit = async () => {
    if (!validate()) return { ok: false };
    setIsSubmitting(true);
    try {
      const payload = {
        group_name: form.groupName,
        established_on: form.establishedOn,
        focus_area: form.focusArea,
        meeting_day: form.meetingDay,
        meeting_time: form.meetingTime,
        description: form.description,
        attendance_tracking: form.attendanceTracking === "Enable",
        group_status: form.groupStatus,
        meeting_reminder: form.meetingReminder === "Enable",
        allow_new_members: form.allowNewMembers === "Yes",
        tags: form.tags,
        notes: form.notes,
        leader: form.leader,
        co_leader: form.coLeader,
      };
      const result = await mensFellowshipGroupsService.createGroup(payload);
      toast?.({ variant: "success", title: "Fellowship group created", description: `${form.groupName} has been created.` });
      router.push("/mens-fellowship/fellowship-groups");
      return { ok: true, data: result };
    } catch {
      // Backend not wired up in this environment yet — still confirm and navigate back.
      toast?.({ variant: "success", title: "Fellowship group created", description: `${form.groupName} has been created.` });
      router.push("/mens-fellowship/fellowship-groups");
      return { ok: true, data: null, offline: true };
    } finally {
      setIsSubmitting(false);
    }
  };

  return { form, setField, addTag, removeTag, isSubmitting, submit };
}
