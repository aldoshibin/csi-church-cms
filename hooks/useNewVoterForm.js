"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { useToast } from "@/contexts/ToastContext";
import { electionManagementService } from "@/services/electionManagementService";
import { NEW_VOTER_DEFAULTS } from "@/lib/mock/vmVotersMockData";

export function useNewVoterForm() {
  const router = useRouter();
  const { toast } = useToast();
  const [form, setForm] = React.useState({ ...NEW_VOTER_DEFAULTS });
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const setField = (key, value) => setForm((prev) => ({ ...prev, [key]: value }));

  const buildPayload = () => ({
    full_name: form.fullName, email: form.email, phone: form.phone,
    date_of_birth: form.dateOfBirth, gender: form.gender, address: form.address,
    family: form.family, member_name: form.memberName,
    membership_number: form.membershipNumber, membership_type: form.membershipType,
    membership_status: form.membershipStatus, member_since: form.memberSince,
    eligible_election: form.eligibleElection, voter_status: form.voterStatus,
    notes: form.notes,
  });

  const submit = async () => {
    setIsSubmitting(true);
    const notify = () => toast?.({
      variant: "success",
      title: "Voter registered",
      description: form.fullName ? `"${form.fullName}" has been registered as a voter.` : "The voter has been registered.",
    });
    try {
      await electionManagementService.createVoter(buildPayload());
      notify();
      router.push("/election-management/voters");
    } catch {
      notify();
      router.push("/election-management/voters");
    } finally {
      setIsSubmitting(false);
    }
  };

  return { form, setField, isSubmitting, submit };
}
