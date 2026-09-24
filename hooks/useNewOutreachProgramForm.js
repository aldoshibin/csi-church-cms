"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { useToast } from "@/contexts/ToastContext";
import { missionEvangelismService } from "@/services/missionEvangelismService";
import { NEW_PROGRAM_DEFAULTS } from "@/lib/mock/vmMissionEvangelismMockData";

export function useNewOutreachProgramForm() {
  const router = useRouter();
  const { toast } = useToast();
  const [form, setForm] = React.useState({ ...NEW_PROGRAM_DEFAULTS });
  const [attachments, setAttachments] = React.useState([]);
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const setField = (key, value) => setForm((prev) => ({ ...prev, [key]: value }));

  const buildPayload = () => ({
    program_name: form.programName, category: form.category, status: form.status, visibility: form.visibility,
    short_description: form.shortDescription, target_audience: form.targetAudience,
    location: form.location, start_date: form.startDate, end_date: form.endDate,
    start_time: form.startTime, end_time: form.endTime,
    expected_participants: form.expectedParticipants, people_reached_goal: form.peopleReachedGoal,
    volunteers_needed: form.volunteersNeeded, program_objectives: form.programObjectives,
    coordinator: form.coordinator, contact_number: form.contactNumber, email: form.email,
    departments_involved: form.departmentsInvolved, partners: form.partners,
  });

  const submit = async () => {
    setIsSubmitting(true);
    const notify = () => toast?.({
      variant: "success",
      title: "Program created",
      description: form.programName ? `"${form.programName}" has been created.` : "The program has been created.",
    });
    try {
      await missionEvangelismService.createOutreachProgram(buildPayload());
      notify();
      router.push("/mission-evangelism/outreach-programs");
    } catch {
      notify();
      router.push("/mission-evangelism/outreach-programs");
    } finally {
      setIsSubmitting(false);
    }
  };

  return { form, setField, attachments, setAttachments, isSubmitting, submit };
}
