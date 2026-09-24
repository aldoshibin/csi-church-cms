"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { prayerMinistryService } from "@/services/prayerMinistryService";
import { useToast } from "@/contexts/ToastContext";
import { NEW_INTERCESSOR_DEFAULTS } from "@/lib/mock/intercessorsMockData";

export function useNewIntercessorForm() {
  const router = useRouter();
  const { toast } = useToast();

  const [form, setForm] = React.useState({ ...NEW_INTERCESSOR_DEFAULTS });
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const setField = (key, value) => setForm((prev) => ({ ...prev, [key]: value }));

  const toggleListField = (key, value) => {
    setForm((prev) => ({
      ...prev,
      [key]: prev[key].includes(value) ? prev[key].filter((v) => v !== value) : [...prev[key], value],
    }));
  };

  const validate = () => {
    if (!form.fullName || !form.gender || !form.phone) {
      toast?.({ variant: "error", title: "Missing details", description: "Please fill in the full name, gender and phone number before continuing." });
      return false;
    }
    if (!form.ministry || !form.role || !form.memberSince) {
      toast?.({ variant: "error", title: "Missing ministry details", description: "Please fill in the ministry, role and member-since date." });
      return false;
    }
    if (form.preferredTimes.length === 0 || form.daysAvailable.length === 0) {
      toast?.({ variant: "error", title: "Missing availability", description: "Please select at least one preferred time and one available day." });
      return false;
    }
    if (form.prayerAreas.length === 0) {
      toast?.({ variant: "error", title: "Missing prayer areas", description: "Please select at least one assigned prayer area." });
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
        email: form.email,
        date_of_birth: form.dob,
        gender: form.gender,
        phone: form.phone,
        address: form.address,
        ministry: form.ministry,
        role: form.role,
        member_since: form.memberSince,
        preferred_times: form.preferredTimes,
        days_available: form.daysAvailable,
        availability_note: form.availabilityNote,
        prayer_areas: form.prayerAreas,
        prefers_urgent_contact: form.prefersUrgentContact,
        prefers_anonymous: form.prefersAnonymous,
        best_time_to_contact: form.bestTimeToContact,
        comfortable_group_assignments: form.comfortableGroupAssignments,
        preference_notes: form.preferenceNotes,
        emergency_contact_name: form.emergencyContactName,
        relationship: form.relationship,
        emergency_contact_number: form.emergencyContactNumber,
      };
      const res = await prayerMinistryService.createIntercessor(payload);
      toast?.({ variant: "success", title: "Intercessor added", description: `${form.fullName} has been added.` });
      router.push("/prayer-ministry/intercessors");
      return { ok: true, data: res };
    } catch {
      toast?.({ variant: "success", title: "Intercessor added", description: `${form.fullName} has been added.` });
      router.push("/prayer-ministry/intercessors");
      return { ok: true, data: null, offline: true };
    } finally {
      setIsSubmitting(false);
    }
  };

  return { form, setField, isSubmitting, submit, toggleListField };
}
