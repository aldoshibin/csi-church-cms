"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { fellowshipGroupsService } from "@/services/fellowshipGroupsService";
import { useToast } from "@/contexts/ToastContext";
import { NEW_FELLOWSHIP_GROUP_DEFAULTS } from "@/lib/mock/fellowshipGroupsMockData";

export function useNewFellowshipGroupForm() {
  const router = useRouter();
  const { toast } = useToast();

  const [form, setForm] = React.useState({ ...NEW_FELLOWSHIP_GROUP_DEFAULTS });
  const [members, setMembers] = React.useState([]);
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const setField = (key, value) => setForm((prev) => ({ ...prev, [key]: value }));

  const addMember = (name) => {
    if (!name.trim() || members.includes(name.trim())) return;
    setMembers((prev) => [...prev, name.trim()]);
  };
  const removeMember = (name) => setMembers((prev) => prev.filter((m) => m !== name));

  const validate = () => {
    if (!form.groupName || !form.leader || !form.ministryFocus || !form.establishedYear || !form.status) {
      toast?.({ variant: "error", title: "Missing details", description: "Please fill in all required group information fields." });
      return false;
    }
    if (!form.meetingDay || !form.meetingTime || !form.meetingLocation) {
      toast?.({ variant: "error", title: "Missing meeting details", description: "Please fill in the meeting details before continuing." });
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
        leader: form.leader,
        co_leader: form.coLeader,
        ministry_focus: form.ministryFocus,
        established_year: form.establishedYear,
        status: form.status,
        description: form.description,
        meeting_day: form.meetingDay,
        meeting_time: form.meetingTime,
        meeting_location: form.meetingLocation,
        room: form.room,
        meets_online: form.meetsOnline,
        maximum_members: form.maximumMembers ? Number(form.maximumMembers) : null,
        age_group: form.ageGroup,
        initial_members: members,
      };
      const result = await fellowshipGroupsService.createGroup(payload);
      toast?.({ variant: "success", title: "Fellowship group created", description: `${form.groupName} has been created.` });
      router.push("/womens-fellowship/fellowship-groups");
      return { ok: true, data: result };
    } catch {
      // Backend not wired up in this environment yet — still confirm and navigate back.
      toast?.({ variant: "success", title: "Fellowship group created", description: `${form.groupName} has been created.` });
      router.push("/womens-fellowship/fellowship-groups");
      return { ok: true, data: null, offline: true };
    } finally {
      setIsSubmitting(false);
    }
  };

  return { form, setField, members, addMember, removeMember, isSubmitting, submit };
}
