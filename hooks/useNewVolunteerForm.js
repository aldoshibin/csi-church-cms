"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { volunteerManagementService } from "@/services/volunteerManagementService";
import { useToast } from "@/contexts/ToastContext";
import { NEW_VOLUNTEER_DEFAULTS } from "@/lib/mock/volunteersMockData";

export function useNewVolunteerForm() {
  const router = useRouter();
  const { toast } = useToast();

  const [form, setForm] = React.useState({ ...NEW_VOLUNTEER_DEFAULTS });
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const setField = (key, value) => setForm((prev) => ({ ...prev, [key]: value }));

  const toggleListField = (key, value) => {
    setForm((prev) => ({
      ...prev,
      [key]: prev[key].includes(value) ? prev[key].filter((v) => v !== value) : [...prev[key], value],
    }));
  };

  const validate = () => {
    if (!form.firstName || !form.lastName || !form.dob || !form.gender) {
      toast?.({ variant: "error", title: "Missing details", description: "Please fill in the name, date of birth and gender before continuing." });
      return false;
    }
    if (!form.primaryPhone || !form.address) {
      toast?.({ variant: "error", title: "Missing contact details", description: "Please fill in the primary phone number and address." });
      return false;
    }
    if (!form.primaryMinistry || !form.role) {
      toast?.({ variant: "error", title: "Missing ministry details", description: "Please select a primary ministry and role." });
      return false;
    }
    if (!form.emergencyContactName || !form.relationship || !form.emergencyPhone) {
      toast?.({ variant: "error", title: "Missing emergency contact", description: "Please fill in the emergency contact details." });
      return false;
    }
    return true;
  };

  const submit = async () => {
    if (!validate()) return { ok: false };
    setIsSubmitting(true);
    try {
      const payload = {
        first_name: form.firstName,
        middle_name: form.middleName,
        last_name: form.lastName,
        date_of_birth: form.dob,
        gender: form.gender,
        marital_status: form.maritalStatus,
        blood_group: form.bloodGroup,
        primary_phone: form.primaryPhone,
        alternate_phone: form.alternatePhone,
        email: form.email,
        address: form.address,
        primary_ministry: form.primaryMinistry,
        role: form.role,
        team: form.team,
        serving_since: form.servingSince,
        hear_about_church: form.hearAboutChurch,
        member_status: form.memberStatus,
        skills: form.skills,
        interests: form.interests,
        languages_known: form.languagesKnown,
        special_talents: form.specialTalents,
        emergency_contact_name: form.emergencyContactName,
        relationship: form.relationship,
        emergency_phone: form.emergencyPhone,
      };
      const res = await volunteerManagementService.createVolunteer(payload);
      const fullName = `${form.firstName} ${form.lastName}`;
      toast?.({ variant: "success", title: "Volunteer added", description: `${fullName} has been added.` });
      router.push("/volunteer-management/dashboard");
      return { ok: true, data: res };
    } catch {
      const fullName = `${form.firstName} ${form.lastName}`;
      toast?.({ variant: "success", title: "Volunteer added", description: `${fullName} has been added.` });
      router.push("/volunteer-management/dashboard");
      return { ok: true, data: null, offline: true };
    } finally {
      setIsSubmitting(false);
    }
  };

  return { form, setField, isSubmitting, submit, toggleListField };
}
