"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { useToast } from "@/contexts/ToastContext";
import { missionEvangelismService } from "@/services/missionEvangelismService";
import { NEW_TRIP_DEFAULTS } from "@/lib/mock/vmMissionEvangelismMockData";

export function useNewMissionTripForm() {
  const router = useRouter();
  const { toast } = useToast();
  const [form, setForm] = React.useState({ ...NEW_TRIP_DEFAULTS });
  const [attachments, setAttachments] = React.useState([]);
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const setField = (key, value) => setForm((prev) => ({ ...prev, [key]: value }));

  const buildPayload = () => ({
    trip_name: form.tripName, category: form.category, destination: form.destination, visibility: form.visibility,
    purpose: form.purpose, short_description: form.shortDescription,
    start_date: form.startDate, end_date: form.endDate, days_of_outreach: form.daysOfOutreach,
    start_time: form.startTime, end_time: form.endTime,
    expected_participants: form.expectedParticipants, target_group: form.targetGroup,
    participants_goal: form.participantsGoal, volunteers_needed: form.volunteersNeeded,
    coordinator: form.coordinator, contact_number: form.contactNumber, email: form.email,
    departments_involved: form.departmentsInvolved, additional_team_members: form.additionalTeamMembers,
    estimated_budget: form.estimatedBudget, funding_source: form.fundingSource, notes: form.notes,
  });

  const submit = async () => {
    setIsSubmitting(true);
    const notify = () => toast?.({
      variant: "success",
      title: "Trip created",
      description: form.tripName ? `"${form.tripName}" has been created.` : "The trip has been created.",
    });
    try {
      await missionEvangelismService.createMissionTrip(buildPayload());
      notify();
      router.push("/mission-evangelism/mission-trips");
    } catch {
      notify();
      router.push("/mission-evangelism/mission-trips");
    } finally {
      setIsSubmitting(false);
    }
  };

  return { form, setField, attachments, setAttachments, isSubmitting, submit };
}
