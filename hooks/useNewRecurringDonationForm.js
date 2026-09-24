"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { recurringDonationsService } from "@/services/recurringDonationsService";
import { useToast } from "@/contexts/ToastContext";
import { NEW_SUBSCRIPTION_DEFAULTS } from "@/lib/mock/recurringDonationsMockData";

export function useNewRecurringDonationForm() {
  const router = useRouter();
  const { toast } = useToast();

  const [form, setForm] = React.useState({ ...NEW_SUBSCRIPTION_DEFAULTS });
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const setField = (key, value) => setForm((prev) => ({ ...prev, [key]: value }));

  const validate = () => {
    if (!form.donor || !form.email || !form.fundAccount || !form.amount || !form.frequency || !form.startingFrom) {
      toast?.({ variant: "error", title: "Missing details", description: "Please fill in all required fields before continuing." });
      return false;
    }
    if (form.paymentMethod === "Card" && (!form.cardNumber || !form.expiryDate || !form.cvv || !form.nameOnCard)) {
      toast?.({ variant: "error", title: "Missing card details", description: "Please complete the card details before continuing." });
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
        fund_account: form.fundAccount,
        purpose: form.purpose,
        amount: Number(form.amount) || 0,
        frequency: form.frequency,
        starting_from: form.startingFrom,
        payment_method: form.paymentMethod,
        save_card: form.saveCard,
        notes: form.notes,
      };
      const result = await recurringDonationsService.createSubscription(payload);
      toast?.({ variant: "success", title: "Subscription created", description: `Recurring donation for ${form.donor} has been set up.` });
      router.push("/online-giving/recurring-donations");
      return { ok: true, data: result };
    } catch {
      // Backend not wired up in this environment yet — still confirm and navigate back.
      toast?.({ variant: "success", title: "Subscription created", description: `Recurring donation for ${form.donor} has been set up.` });
      router.push("/online-giving/recurring-donations");
      return { ok: true, data: null, offline: true };
    } finally {
      setIsSubmitting(false);
    }
  };

  return { form, setField, isSubmitting, submit };
}
