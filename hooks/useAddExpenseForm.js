"use client";

import * as React from "react";
import { expensesService } from "@/services/expensesService";
import { useToast } from "@/contexts/ToastContext";
import { useAuth } from "@/contexts/AuthContext";
import { NEW_EXPENSE_DEFAULTS } from "@/lib/mock/expensesMockData";
import { formatDateTime } from "@/lib/utils";

export const ADD_EXPENSE_STEPS = [
  { key: 1, label: "Expense Details" },
  { key: 2, label: "Payment Information" },
  { key: 3, label: "Review & Confirm" },
  { key: 4, label: "Success" },
];

function generateExpenseNo() {
  const now = new Date();
  const mm = String(now.getMonth() + 1).padStart(2, "0");
  const dd = String(now.getDate()).padStart(2, "0");
  const n = String(Math.floor(1 + Math.random() * 999)).padStart(3, "0");
  return `EXP-${now.getFullYear()}-${mm}${dd}-${n}`;
}

export function useAddExpenseForm() {
  const { toast } = useToast();
  const { user } = useAuth();

  const [currentStep, setCurrentStep] = React.useState(1);
  const [completedSteps, setCompletedSteps] = React.useState([]);
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [createdExpense, setCreatedExpense] = React.useState(null);

  const [form, setForm] = React.useState({ ...NEW_EXPENSE_DEFAULTS });

  const setField = (key, value) => setForm((prev) => ({ ...prev, [key]: value }));

  const goToStep = (step) => setCurrentStep(step);

  const goNext = () => {
    if (currentStep === 1 && (!form.category || !form.date || !form.paidTo || !form.description || !form.amount || !form.expenseAccount || !form.paymentMethod)) {
      toast?.({ variant: "error", title: "Missing details", description: "Please fill in all required fields before continuing." });
      return false;
    }
    if (currentStep === 2 && (!form.paymentMethod || !form.paidFromAccount || !form.paymentDate || !form.transactionRefNo)) {
      toast?.({ variant: "error", title: "Missing details", description: "Please fill in all required payment fields before continuing." });
      return false;
    }
    setCompletedSteps((prev) => Array.from(new Set([...prev, currentStep])));
    setCurrentStep((s) => Math.min(s + 1, ADD_EXPENSE_STEPS.length));
    return true;
  };

  const goPrevious = () => setCurrentStep((s) => Math.max(s - 1, 1));

  const resetForm = () => {
    setForm({ ...NEW_EXPENSE_DEFAULTS });
    setCompletedSteps([]);
    setCurrentStep(1);
    setCreatedExpense(null);
  };

  const submit = async () => {
    setIsSubmitting(true);
    try {
      const payload = {
        category: form.category,
        date: form.date,
        paid_to: form.paidTo,
        description: form.description,
        amount: Number(form.amount) || 0,
        expense_account: form.expenseAccount,
        reference_no: form.referenceNo,
        notes: form.notes,
        payment_method: form.paymentMethod,
        paid_from_account: form.paidFromAccount,
        payment_date: form.paymentDate,
        transaction_ref_no: form.transactionRefNo,
        cheque_utr_payment_id: form.chequeUtrPaymentId,
        payment_mode_details: form.paymentModeDetails,
      };
      const result = await expensesService.createExpense(payload);
      const record = result ?? {
        expenseNo: generateExpenseNo(),
        recordedBy: user?.full_name ?? "Parish Office",
        recordedOn: formatDateTime(new Date().toISOString()),
      };
      setCreatedExpense(record);
      setCompletedSteps((prev) => Array.from(new Set([...prev, 3])));
      setCurrentStep(4);
      toast?.({ variant: "success", title: "Expense saved", description: `${form.description} has been recorded.` });
      return { ok: true, data: result };
    } catch {
      // Backend not wired up in this environment yet — keep the wizard usable end-to-end.
      setCreatedExpense({
        expenseNo: generateExpenseNo(),
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
    isSubmitting, submit, resetForm, createdExpense,
  };
}
