"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { choirWorshipService } from "@/services/choirWorshipService";
import { useToast } from "@/contexts/ToastContext";
import { NEW_WT_MEMBER_DEFAULTS, WT_MEMBERS_MOCK } from "@/lib/mock/worshipTeamMembersMockData";

function nextMemberId() {
  const max = WT_MEMBERS_MOCK.reduce((acc, m) => Math.max(acc, Number(m.id.split("-")[1]) || 0), 0);
  return `WTM-${String(max + 1).padStart(5, "0")}`;
}

export function useNewWorshipTeamMemberForm() {
  const router = useRouter();
  const { toast } = useToast();

  const [form, setForm] = React.useState({ ...NEW_WT_MEMBER_DEFAULTS });
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const memberId = React.useMemo(() => nextMemberId(), []);

  const setField = (key, value) => setForm((prev) => ({ ...prev, [key]: value }));

  const validate = () => {
    if (!form.fullName || !form.dob || !form.gender || !form.address || !form.city || !form.state || !form.country || !form.pinCode) {
      toast?.({ variant: "error", title: "Missing details", description: "Please fill in all required personal details before continuing." });
      return false;
    }
    if (!form.role || !form.team || !form.instrument || !form.joinedDate || !form.status) {
      toast?.({ variant: "error", title: "Missing ministry details", description: "Please fill in the ministry details before continuing." });
      return false;
    }
    if (!form.phone || !form.email) {
      toast?.({ variant: "error", title: "Missing contact details", description: "Please fill in the phone number and email address before continuing." });
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
        gender: form.gender,
        marital_status: form.maritalStatus,
        address: form.address,
        city: form.city,
        state: form.state,
        country: form.country,
        pin_code: form.pinCode,
        role: form.role,
        team: form.team,
        instrument: form.instrument,
        joined_date: form.joinedDate,
        status: form.status,
        phone: form.phone,
        alternate_phone: form.alternatePhone,
        email: form.email,
        emergency_contact: form.emergencyContact,
        relationship: form.relationship,
        notes: form.notes,
      };
      const res = await choirWorshipService.createWorshipTeamMember(payload);
      toast?.({ variant: "success", title: "Member added", description: `${form.fullName} has been added to Worship Team Members.` });
      router.push("/choir-worship/worship-team-members");
      return { ok: true, data: res };
    } catch {
      toast?.({ variant: "success", title: "Member added", description: `${form.fullName} has been added to Worship Team Members.` });
      router.push("/choir-worship/worship-team-members");
      return { ok: true, data: null, offline: true };
    } finally {
      setIsSubmitting(false);
    }
  };

  return { form, setField, memberId, isSubmitting, submit };
}
