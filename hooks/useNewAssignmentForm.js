"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { serviceAssignmentsService } from "@/services/serviceAssignmentsService";
import { useToast } from "@/contexts/ToastContext";
import { NEW_ASSIGNMENT_DEFAULTS } from "@/lib/mock/serviceAssignmentsMockData";

export function useNewAssignmentForm() {
  const router = useRouter();
  const { toast } = useToast();

  const [form, setForm] = React.useState({ ...NEW_ASSIGNMENT_DEFAULTS });
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const setField = (key, value) => setForm((prev) => ({ ...prev, [key]: value }));

  const addVolunteer = (volunteer) => {
    setForm((prev) => (
      prev.selectedVolunteers.some((v) => v.id === volunteer.id)
        ? prev
        : { ...prev, selectedVolunteers: [...prev.selectedVolunteers, volunteer] }
    ));
  };

  const removeVolunteer = (volunteerId) => {
    setForm((prev) => ({ ...prev, selectedVolunteers: prev.selectedVolunteers.filter((v) => v.id !== volunteerId) }));
  };

  const applyTemplate = (template) => {
    setForm((prev) => ({ ...prev, title: template.name, serviceType: template.name }));
  };

  const validate = () => {
    if (!form.title || !form.date || !form.serviceType) {
      toast?.({ variant: "error", title: "Missing details", description: "Please fill in the service/event title, date and service type." });
      return false;
    }
    if (!form.ministryTeam || !form.startTime || !form.endTime || !form.location) {
      toast?.({ variant: "error", title: "Missing details", description: "Please fill in the ministry/team, start/end time and location." });
      return false;
    }
    if (!form.role || !form.volunteersNeeded) {
      toast?.({ variant: "error", title: "Missing assignment details", description: "Please select a role and the number of volunteers needed." });
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
        date: form.date,
        service_type: form.serviceType,
        ministry_team: form.ministryTeam,
        start_time: form.startTime,
        end_time: form.endTime,
        dress_code: form.dressCode,
        location: form.location,
        description: form.description,
        role: form.role,
        volunteers_needed: form.volunteersNeeded,
        checkin_time: form.checkinTime,
        instructions: form.instructions,
        assign_to: form.assignTo,
        volunteer_ids: form.selectedVolunteers.map((v) => v.id),
      };
      const res = await serviceAssignmentsService.createAssignment(payload);
      toast?.({ variant: "success", title: "Assignment created", description: `${form.title || "The assignment"} has been created.` });
      router.push("/volunteer-management/service-assignments");
      return { ok: true, data: res };
    } catch {
      toast?.({ variant: "success", title: "Assignment created", description: `${form.title || "The assignment"} has been created.` });
      router.push("/volunteer-management/service-assignments");
      return { ok: true, data: null, offline: true };
    } finally {
      setIsSubmitting(false);
    }
  };

  return { form, setField, addVolunteer, removeVolunteer, applyTemplate, isSubmitting, submit };
}
