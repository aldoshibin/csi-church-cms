"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { useToast } from "@/contexts/ToastContext";
import { electionManagementService } from "@/services/electionManagementService";
import { NEW_CANDIDATE_DEFAULTS, CANDIDATE_POSITION_TERM_MAP } from "@/lib/mock/vmCandidatesMockData";

export function useNewCandidateForm() {
  const router = useRouter();
  const { toast } = useToast();
  const [form, setForm] = React.useState({ ...NEW_CANDIDATE_DEFAULTS });
  const [file, setFile] = React.useState(null);
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const setField = (key, value) => {
    setForm((prev) => {
      const next = { ...prev, [key]: value };
      if (key === "position") {
        const term = CANDIDATE_POSITION_TERM_MAP[value];
        next.termDuration = term?.termDuration ?? "";
        next.maxMembers = term?.maxMembers ?? "";
      }
      return next;
    });
  };

  const buildPayload = () => ({
    full_name: form.fullName, email: form.email, phone: form.phone,
    date_of_birth: form.dateOfBirth, gender: form.gender, address: form.address,
    member_since: form.memberSince, membership_number: form.membershipNumber,
    election: form.election, position: form.position, eligibility: form.eligibility,
    candidate_status: form.candidateStatus,
    nominated_by: form.nominatedBy, nomination_date: form.nominationDate, nomination_time: form.nominationTime,
    notes: form.notes,
  });

  const submit = async () => {
    setIsSubmitting(true);
    const notify = () => toast?.({
      variant: "success",
      title: "Candidate registered",
      description: form.fullName ? `"${form.fullName}" has been registered as a candidate.` : "The candidate has been registered.",
    });
    try {
      await electionManagementService.createCandidate(buildPayload());
      notify();
      router.push("/election-management/candidates");
    } catch {
      notify();
      router.push("/election-management/candidates");
    } finally {
      setIsSubmitting(false);
    }
  };

  return { form, setField, file, setFile, isSubmitting, submit };
}
