"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { useToast } from "@/contexts/ToastContext";
import { missionEvangelismService } from "@/services/missionEvangelismService";
import { NEW_ACTIVITY_DEFAULTS } from "@/lib/mock/vmMissionEvangelismMockData";

export function useNewOutreachActivityForm() {
  const router = useRouter();
  const { toast } = useToast();
  const [form, setForm] = React.useState({ ...NEW_ACTIVITY_DEFAULTS });
  const [attachments, setAttachments] = React.useState([]);
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const setField = (key, value) => setForm((prev) => ({ ...prev, [key]: value }));

  const buildPayload = () => ({
    activity_name: form.activityName, category: form.category, activity_type: form.activityType,
    organized_by: form.organizedBy, status: form.status, visibility: form.visibility,
    description: form.description, location: form.location, date: form.date,
    start_time: form.startTime, end_time: form.endTime,
    target_audience: form.targetAudience, expected_participants: form.expectedParticipants,
    coordinator: form.coordinator, contact_number: form.contactNumber, email: form.email,
    departments_involved: form.departmentsInvolved, volunteers_needed: form.volunteersNeeded,
  });

  const submit = async () => {
    setIsSubmitting(true);
    const notify = () => toast?.({
      variant: "success",
      title: "Activity created",
      description: form.activityName ? `"${form.activityName}" has been created.` : "The activity has been created.",
    });
    try {
      await missionEvangelismService.createOutreachActivity(buildPayload());
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
