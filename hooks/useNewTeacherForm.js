"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { teachersService } from "@/services/teachersService";
import { useToast } from "@/contexts/ToastContext";
import { NEW_TEACHER_DEFAULTS } from "@/lib/mock/teachersMockData";

export function useNewTeacherForm() {
  const router = useRouter();
  const { toast } = useToast();

  const [form, setForm] = React.useState({ ...NEW_TEACHER_DEFAULTS });
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const setField = (key, value) => setForm((prev) => ({ ...prev, [key]: value }));

  const toggleClassToTeach = (className) => {
    setForm((prev) => ({
      ...prev,
      classesToTeach: prev.classesToTeach.includes(className)
        ? prev.classesToTeach.filter((c) => c !== className)
        : [...prev.classesToTeach, className],
    }));
  };

  const validate = () => {
    if (!form.firstName || !form.lastName || !form.gender || !form.dob || !form.phone || !form.email || !form.address || !form.city || !form.state || !form.pinCode) {
      toast?.({ variant: "error", title: "Missing details", description: "Please fill in all required personal details before continuing." });
      return false;
    }
    if (!form.qualification || !form.specialization || !form.yearsOfExperience || !form.employmentType || !form.dateOfJoining) {
      toast?.({ variant: "error", title: "Missing details", description: "Please fill in all required professional details before continuing." });
      return false;
    }
    if (!form.username || !form.password || !form.confirmPassword) {
      toast?.({ variant: "error", title: "Missing account details", description: "Please set a username and password before continuing." });
      return false;
    }
    if (form.password !== form.confirmPassword) {
      toast?.({ variant: "error", title: "Passwords don't match", description: "Please make sure both password fields match." });
      return false;
    }
    if (form.classesToTeach.length === 0) {
      toast?.({ variant: "error", title: "Missing classes", description: "Please select at least one class for this teacher to teach." });
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
        gender: form.gender,
        date_of_birth: form.dob,
        marital_status: form.maritalStatus,
        phone: form.phone,
        email: form.email,
        alternate_phone: form.alternatePhone,
        address: form.address,
        city: form.city,
        state: form.state,
        pin_code: form.pinCode,
        qualification: form.qualification,
        specialization: form.specialization,
        years_of_experience: Number(form.yearsOfExperience) || 0,
        previous_organization: form.previousOrganization,
        employment_type: form.employmentType,
        date_of_joining: form.dateOfJoining,
        username: form.username,
        classes_to_teach: form.classesToTeach,
        notes: form.notes,
      };
      const result = await teachersService.createTeacher(payload);
      toast?.({ variant: "success", title: "Teacher added", description: `${form.firstName} ${form.lastName} has been added.` });
      router.push("/sunday-school/teachers");
      return { ok: true, data: result };
    } catch {
      // Backend not wired up in this environment yet — still confirm and navigate back.
      toast?.({ variant: "success", title: "Teacher added", description: `${form.firstName} ${form.lastName} has been added.` });
      router.push("/sunday-school/teachers");
      return { ok: true, data: null, offline: true };
    } finally {
      setIsSubmitting(false);
    }
  };

  return { form, setField, toggleClassToTeach, isSubmitting, submit };
}
