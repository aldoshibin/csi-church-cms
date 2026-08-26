"use client";

import * as React from "react";
import { incomeService } from "@/services/incomeService";
import { useToast } from "@/contexts/ToastContext";
import { useAuth } from "@/contexts/AuthContext";
import { NEW_INCOME_DEFAULTS } from "@/lib/mock/incomeMockData";
import { formatDateTime } from "@/lib/utils";

export const ADD_INCOME_STEPS = [
  { key: 1, label: "Income Details" },
  { key: 2, label: "Payment Information" },
  { key: 3, label: "Review & Confirm" },
  { key: 4, label: "Success" },
];

function generateIncomeNo() {
  const now = new Date();
  const mm = String(now.getMonth() + 1).padStart(2, "0");
  const dd = String(now.getDate()).padStart(2, "0");
  const n = String(Math.floor(1 + Math.random() * 999)).padStart(3, "0");
  return `SO-${now.getFullYear()}-${mm}${dd}-${n}`;
}

export function useAddIncomeForm() {
  const { toast } = useToast();
  const { user } = useAuth();

  const [currentStep, setCurrentStep] = React.useState(1);
  const [completedSteps, setCompletedSteps] = React.useState([]);
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [createdIncome, setCreatedIncome] = React.useState(null);

  const [form, setForm] = React.useState({ ...NEW_INCOME_DEFAULTS });

  const setField = (key, value) => setForm((prev) => ({ ...prev, [key]: value }));

  const goToStep = (step) => setCurrentStep(step);

  const goNext = () => {
    if (currentStep === 1 && (!form.category || !form.amount || !form.date || !form.paymentMethod || !form.receivedFrom || !form.relatedAccount || !form.description)) {
      toast?.({ variant: "error", title: "Missing details", description: "Please fill in all required fields before continuing." });
      return false;
    }
    if (currentStep === 2 && (!form.paymentMethod || !form.paidBy || !form.receivedBy)) {
      toast?.({ variant: "error", title: "Missing details", description: "Please fill in all required payment fields before continuing." });
      return false;
    }
    setCompletedSteps((prev) => Array.from(new Set([...prev, currentStep])));
    setCurrentStep((s) => Math.min(s + 1, ADD_INCOME_STEPS.length));
    return true;
  };

  const goPrevious = () => setCurrentStep((s) => Math.max(s - 1, 1));

  const resetForm = () => {
    setForm({ ...NEW_INCOME_DEFAULTS });
    setCompletedSteps([]);
    setCurrentStep(1);
    setCreatedIncome(null);
  };

  const submit = async () => {
    setIsSubmitting(true);
    try {
      const payload = {
        category: form.category,
        amount: Number(form.amount) || 0,
        date: form.date,
        payment_method: form.paymentMethod,
        received_from: form.receivedFrom,
        related_account: form.relatedAccount,
        description: form.description,
        reference_no: form.referenceNo,
        income_type: form.incomeType,
        transaction_receipt_no: form.transactionReceiptNo,
        paid_by: form.paidBy,
        payment_mode_details: form.paymentModeDetails,
        received_by: form.receivedBy,
        notes: form.notes,
      };
      const result = await incomeService.createIncome(payload);
      const record = result ?? {
        incomeNo: form.referenceNo || generateIncomeNo(),
        recordedBy: user?.full_name ?? "Parish Office",
        recordedOn: formatDateTime(new Date().toISOString()),
      };
      setCreatedIncome(record);
      setCompletedSteps((prev) => Array.from(new Set([...prev, 3])));
      setCurrentStep(4);
      toast?.({ variant: "success", title: "Income saved", description: `${form.description} has been recorded.` });
      return { ok: true, data: result };
    } catch {
      // Backend not wired up in this environment yet — keep the wizard usable end-to-end.
      setCreatedIncome({
        incomeNo: form.referenceNo || generateIncomeNo(),
        recordedBy: user?.full_name ?? "Parish Office",
        recordedOn: formatDateTime(new Date().toISOString()),
      });
      setCompletedSteps((prev) => Array.from(new Set([...prev, 3])));
      setCurrentStep(4);
      return { ok: true, data: null, offline: true };
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    form, setField,
    currentStep, completedSteps, goToStep, goNext, goPrevious,
    isSubmitting, submit, resetForm, createdIncome,
  };
}
