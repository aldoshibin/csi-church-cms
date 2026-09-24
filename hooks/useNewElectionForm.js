"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { useToast } from "@/contexts/ToastContext";
import { electionManagementService } from "@/services/electionManagementService";
import { NEW_ELECTION_DEFAULTS } from "@/lib/mock/vmElectionsListMockData";

export function useNewElectionForm() {
  const router = useRouter();
  const { toast } = useToast();
  const [form, setForm] = React.useState({ ...NEW_ELECTION_DEFAULTS });
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const setField = (key, value) => setForm((prev) => ({ ...prev, [key]: value }));

  const buildPayload = () => ({
    election_name: form.electionName, election_type: form.electionType, description: form.description,
    election_date: form.electionDate, start_time: form.startTime, end_time: form.endTime,
    nomination_start_date: form.nominationStartDate, nomination_end_date: form.nominationEndDate,
    candidate_list_publish_date: form.candidateListPublishDate, results_declaration_date: form.resultsDeclarationDate,
    voting_method: form.votingMethod, voter_eligibility: form.voterEligibility,
    eligible_membership: form.eligibleMembership, minimum_membership_duration: form.minimumMembershipDuration,
    candidate_limit: form.candidateLimit,
    allow_multiple_nominations: form.allowMultipleNominations,
    display_voter_list_to_candidates: form.displayVoterListToCandidates,
    require_approval_for_nominations: form.requireApprovalForNominations,
    send_email_notifications: form.sendEmailNotifications,
  });

  const submit = async () => {
    setIsSubmitting(true);
    const notify = () => toast?.({
      variant: "success",
      title: "Election created",
      description: form.electionName ? `"${form.electionName}" has been created.` : "The election has been created.",
    });
    try {
      await electionManagementService.createElection(buildPayload());
      notify();
      router.push("/election-management/elections");
    } catch {
      notify();
      router.push("/election-management/elections");
    } finally {
      setIsSubmitting(false);
    }
  };

  return { form, setField, isSubmitting, submit };
}
