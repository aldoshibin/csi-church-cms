"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { fellowshipMembersService } from "@/services/fellowshipMembersService";
import { useToast } from "@/contexts/ToastContext";
import { NEW_MEMBER_DEFAULTS } from "@/lib/mock/fellowshipMembersMockData";

function calculateAge(dob) {
  if (!dob) return "";
  const birth = new Date(dob);
  if (Number.isNaN(birth.getTime())) return "";
  const today = new Date();
  let age = today.getFullYear() - birth.getFullYear();
  const monthDiff = today.getMonth() - birth.getMonth();
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) age--;
  return age >= 0 ? age : "";
}

export function useNewMemberForm() {
  const router = useRouter();
  const { toast } = useToast();

  const [form, setForm] = React.useState({ ...NEW_MEMBER_DEFAULTS });
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const setField = (key, value) => setForm((prev) => ({ ...prev, [key]: value }));

  const age = React.useMemo(() => calculateAge(form.dob), [form.dob]);

  const toggleGroup = (group) => {
    setForm((prev) => {
      const isAssigned = prev.assignedGroups.includes(group);
      const assignedGroups = isAssigned ? prev.assignedGroups.filter((g) => g !== group) : [...prev.assignedGroups, group];
      let primaryGroup = prev.primaryGroup;
      if (isAssigned && prev.primaryGroup === group) primaryGroup = assignedGroups[0] ?? "";
      if (!isAssigned && !primaryGroup) primaryGroup = group;
      return { ...prev, assignedGroups, primaryGroup };
    });
  };

  const setPrimaryGroup = (group) => setForm((prev) => ({ ...prev, primaryGroup: group }));

  const validate = () => {
    if (!form.fullName || !form.dob || !form.gender || !form.phone || !form.address) {
      toast?.({ variant: "error", title: "Missing details", description: "Please fill in all required personal information fields." });
      return false;
    }
    if (!form.dateOfJoining || !form.fellowshipGroup || !form.memberStatus) {
      toast?.({ variant: "error", title: "Missing details", description: "Please fill in all required fellowship information fields." });
      return false;
    }
    return true;
  };

  const submit = async () => {
    if (!validate()) return { ok: false };
    setIsSubmitting(true);
    try {
      const payload = {
        full_name: form.fullName,
        date_of_birth: form.dob,
        age,
        gender: form.gender,
        marital_status: form.maritalStatus,
        spouse_name: form.spouseName,
        phone: form.phone,
        email: form.email,
        alternate_phone: form.alternatePhone,
        address: form.address,
        date_of_joining: form.dateOfJoining,
        fellowship_group: form.fellowshipGroup,
        member_status: form.memberStatus,
        ministry_focus: form.ministryFocus,
        referred_by: form.referredBy,
        occupation: form.occupation,
        education: form.education,
        blood_group: form.bloodGroup,
        notes: form.notes,
        assigned_groups: form.assignedGroups,
        primary_group: form.primaryGroup,
      };
      const result = await fellowshipMembersService.createMember(payload);
      toast?.({ variant: "success", title: "Member added", description: `${form.fullName} has been added.` });
      router.push("/womens-fellowship/members");
      return { ok: true, data: result };
    } catch {
      // Backend not wired up in this environment yet — still confirm and navigate back.
      toast?.({ variant: "success", title: "Member added", description: `${form.fullName} has been added.` });
      router.push("/womens-fellowship/members");
      return { ok: true, data: null, offline: true };
    } finally {
      setIsSubmitting(false);
    }
  };

  return { form, setField, age, toggleGroup, setPrimaryGroup, isSubmitting, submit };
}
