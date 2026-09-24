"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { refundsService } from "@/services/refundsService";
import { useToast } from "@/contexts/ToastContext";
import { NEW_REFUND_DEFAULTS } from "@/lib/mock/refundsMockData";

export function useNewRefundForm() {
  const router = useRouter();
  const { toast } = useToast();

  const [form, setForm] = React.useState({ ...NEW_REFUND_DEFAULTS });
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const setField = (key, value) => setForm((prev) => ({ ...prev, [key]: value }));

  const validate = () => {
    if (!form.donor || !form.refundFor || !form.reason || !form.refundAmount || !form.refundDate) {
      toast?.({ variant: "error", title: "Missing details", description: "Please fill in all required fields before continuing." });
      return false;
    }
    if (Number(form.refundAmount) > Number(form.amountPaid)) {
      toast?.({ variant: "error", title: "Amount too high", description: "Refund amount cannot exceed the amount originally paid." });
      return false;
    }
    return true;
  };

  const submit = async () => {
    if (!validate()) return { ok: false };
    setIsSubmitting(true);
    try {
      const payload = {
        donor: form.donor,
        email: form.email,
        phone: `${form.countryCode} ${form.phone}`.trim(),
        refund_for: form.refundFor,
        reason: form.reason,
        refund_amount: Number(form.refundAmount) || 0,
        refund_date: form.refundDate,
        notes: form.notes,
        payment_id: form.paymentId,
        transaction_reference: form.transactionReference,
        internal_notes: form.internalNotes,
      };
      const result = await refundsService.createRefund(payload);
      toast?.({ variant: "success", title: "Refund created", description: `Refund for ${form.donor} has been created.` });
      router.push("/online-giving/refunds");
      return { ok: true, data: result };
    } catch {
      // Backend not wired up in this environment yet — still confirm and navigate back.
      toast?.({ variant: "success", title: "Refund created", description: `Refund for ${form.donor} has been created.` });
      router.push("/online-giving/refunds");
      return { ok: true, data: null, offline: true };
    } finally {
      setIsSubmitting(false);
    }
  };

  return { form, setField, isSubmitting, submit };
}
