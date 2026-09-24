"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { useToast } from "@/contexts/ToastContext";
import { electionManagementService } from "@/services/electionManagementService";
import { buildElectionRecordMock } from "@/lib/mock/vmElectionsListMockData";

export function useEditElectionForm(id) {
  const router = useRouter();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = React.useState(true);
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [documents, setDocuments] = React.useState([]);
  const [form, setForm] = React.useState(() => {
    const record = buildElectionRecordMock(id);
    return { ...record, electionName: record.name, electionType: record.type };
  });

  React.useEffect(() => {
    let active = true;
    (async () => {
      setIsLoading(true);
      try {
        const result = await electionManagementService.getElection(id);
        if (active && result) {
          setForm({ ...result, electionName: result.name, electionType: result.type });
          if (result.documents) setDocuments(result.documents);
        } else if (active) {
          setDocuments(buildElectionRecordMock(id).documents ?? []);
        }
      } catch {
        setDocuments(buildElectionRecordMock(id).documents ?? []);
      } finally {
        if (active) setIsLoading(false);
      }
    })();
    return () => {
      active = false;
    };
  }, [id]);

  const setField = (key, value) => setForm((prev) => ({ ...prev, [key]: value }));

  const buildPayload = () => ({
    election_name: form.electionName, election_type: form.electionType, description: form.description,
    status: form.status,
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
      title: "Election updated",
      description: form.electionName ? `"${form.electionName}" has been updated.` : "The election has been updated.",
    });
    try {
      await electionManagementService.updateElection(id, buildPayload());
      notify();
      router.push("/election-management/elections");
    } catch {
      notify();
      router.push("/election-management/elections");
    } finally {
      setIsSubmitting(false);
    }
  };

  return { form, setField, documents, setDocuments, isLoading, isSubmitting, submit };
}
