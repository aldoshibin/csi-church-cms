"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { useToast } from "@/contexts/ToastContext";
import { missionEvangelismService } from "@/services/missionEvangelismService";
import { NEW_DONATION_DEFAULTS } from "@/lib/mock/vmMissionEvangelismMockData";

export function useNewMissionDonationForm() {
  const router = useRouter();
  const { toast } = useToast();
  const [form, setForm] = React.useState({ ...NEW_DONATION_DEFAULTS });
  const [attachments, setAttachments] = React.useState([]);
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const setField = (key, value) => setForm((prev) => ({ ...prev, [key]: value }));

  const buildPayload = () => ({
    donor_type: form.donorType, selected_donor: form.selectedDonor, donor_name: form.donorName,
    contact_number: form.contactNumber, email: form.email,
    fund_purpose: form.fundPurpose, amount: form.amount, payment_method: form.paymentMethod,
    payment_date: form.paymentDate, payment_time: form.paymentTime, transaction_id: form.transactionId,
    receipt_required: form.receiptRequired, send_thank_you_message: form.sendThankYouMessage,
    notes: form.notes,
  });

  const submit = async () => {
    setIsSubmitting(true);
    const notify = () => toast?.({
      variant: "success",
      title: "Donation recorded",
      description: form.donorName ? `Donation from "${form.donorName}" has been recorded.` : "The donation has been recorded.",
    });
    try {
      await missionEvangelismService.createDonation(buildPayload());
      notify();
      router.push("/mission-evangelism/donations");
    } catch {
      notify();
      router.push("/mission-evangelism/donations");
    } finally {
      setIsSubmitting(false);
    }
  };

  return { form, setField, attachments, setAttachments, isSubmitting, submit };
}
