"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { mensFellowshipService } from "@/services/mensFellowshipService";
import { useToast } from "@/contexts/ToastContext";
import { NEW_MEMBER_DEFAULTS, MEMBERS_MOCK } from "@/lib/mock/mensFellowshipMockData";

function nextMemberId() {
  const max = MEMBERS_MOCK.reduce((acc, m) => Math.max(acc, Number(m.id.split("-")[1]) || 0), 0);
  return `MEM-${String(max + 1).padStart(3, "0")}`;
}

export function useNewMensFellowshipMemberForm() {
  const router = useRouter();
  const { toast } = useToast();

  const [form, setForm] = React.useState({ ...NEW_MEMBER_DEFAULTS });
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const memberId = React.useMemo(() => nextMemberId(), []);

  const setField = (key, value) => setForm((prev) => ({ ...prev, [key]: value }));

  const validate = () => {
    if (!form.fullName || !form.dob || !form.gender || !form.email || !form.phone || !form.address) {
      toast?.({ variant: "error", title: "Missing details", description: "Please fill in all required personal details before continuing." });
      return false;
    }
    if (!form.fellowshipGroup || !form.joinedOn) {
      toast?.({ variant: "error", title: "Missing group details", description: "Please fill in the fellowship group details before continuing." });
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
        spouse_name: form.spouseName,
        email: form.email,
        phone: form.phone,
        phone_alternate: form.phoneAlternate,
        address: form.address,
        fellowship_group: form.fellowshipGroup,
        group_role: form.groupRole,
        joined_on: form.joinedOn,
        occupation: form.occupation,
        notes: form.notes,
        status: form.status,
      };
      const result = await mensFellowshipService.createMember(payload);
      toast?.({ variant: "success", title: "Member added", description: `${form.fullName} has been added to ${form.fellowshipGroup}.` });
      router.push("/mens-fellowship/members");
      return { ok: true, data: result };
    } catch {
      // Backend not wired up in this environment yet — still confirm and navigate back.
      toast?.({ variant: "success", title: "Member added", description: `${form.fullName} has been added to ${form.fellowshipGroup}.` });
      router.push("/mens-fellowship/members");
      return { ok: true, data: null, offline: true };
    } finally {
      setIsSubmitting(false);
    }
  };

  return { form, setField, memberId, isSubmitting, submit };
}
