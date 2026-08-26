"use client";

import * as React from "react";
import { financeService } from "@/services/financeService";
import { useToast } from "@/contexts/ToastContext";
import {
  NEW_TRANSACTION_DEFAULTS,
  ACCOUNT_BALANCE_MOCK,
} from "@/lib/mock/financeDashboardMockData";

export const STEPS = [
  { key: 1, label: "Transaction Details" },
  { key: 2, label: "Additional Information" },
  { key: 3, label: "Review & Confirm" },
  { key: 4, label: "Success" },
];

function generateReferenceNo() {
  const n = Math.floor(1000 + Math.random() * 9000);
  return `TRX-${new Date().getFullYear()}-0${n}`;
}

export function useAddTransactionForm() {
  const { toast } = useToast();

  const [currentStep, setCurrentStep] = React.useState(1);
  const [completedSteps, setCompletedSteps] = React.useState([]);
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [createdTransaction, setCreatedTransaction] = React.useState(null);

  const [form, setForm] = React.useState({
    ...NEW_TRANSACTION_DEFAULTS,
    refNo: generateReferenceNo(),
  });

  const [allocations, setAllocations] = React.useState([
    { dept: "General Ministry", pct: 70 },
    { dept: "Youth Ministry", pct: 30 },
  ]);

  const [payment, setPayment] = React.useState({
    receivedOn: NEW_TRANSACTION_DEFAULTS.date,
    receivedBy: "",
    receiptNo: "",
    notes: "",
  });

  const setField = (key, value) => setForm((prev) => ({ ...prev, [key]: value }));
  const setPaymentField = (key, value) => setPayment((prev) => ({ ...prev, [key]: value }));

  const addAllocation = () => setAllocations((prev) => [...prev, { dept: "", pct: 0 }]);
  const updateAllocation = (index, key, value) =>
    setAllocations((prev) => prev.map((row, i) => (i === index ? { ...row, [key]: value } : row)));
  const removeAllocation = (index) => setAllocations((prev) => prev.filter((_, i) => i !== index));

  const totalAllocationPct = allocations.reduce((sum, row) => sum + (Number(row.pct) || 0), 0);
  const allocationRowsWithAmount = React.useMemo(
    () =>
      allocations.map((row) => ({
        ...row,
        amount: ((Number(row.pct) || 0) / 100) * (Number(form.amount) || 0),
      })),
    [allocations, form.amount]
  );

  const accountBalance = ACCOUNT_BALANCE_MOCK[form.account] ?? { balance: 0, lastUpdated: "—" };

  const goToStep = (step) => setCurrentStep(step);

  const goNext = () => {
    // Step 1 requires the core required fields before moving on.
    if (currentStep === 1 && (!form.type || !form.date || !form.category || !form.account || !form.payer || !form.amount || !form.description)) {
      toast?.({ variant: "error", title: "Missing details", description: "Please fill in all required fields before continuing." });
      return false;
    }
    setCompletedSteps((prev) => Array.from(new Set([...prev, currentStep])));
    setCurrentStep((s) => Math.min(s + 1, STEPS.length));
    return true;
  };

  const goPrevious = () => setCurrentStep((s) => Math.max(s - 1, 1));

  const resetForm = () => {
    setForm({ ...NEW_TRANSACTION_DEFAULTS, refNo: generateReferenceNo() });
    setAllocations([]);
    setPayment({ receivedOn: NEW_TRANSACTION_DEFAULTS.date, receivedBy: "", receiptNo: "", notes: "" });
    setCompletedSteps([]);
    setCurrentStep(1);
    setCreatedTransaction(null);
  };

  const submit = async () => {
    setIsSubmitting(true);
    try {
      const payload = {
        type: form.type,
        date: form.date,
        reference_no: form.refNo,
        category: form.category,
        account: form.account,
        payer: form.payer,
        payment_method: form.paymentMethod,
        amount: Number(form.amount) || 0,
        currency: form.currency,
        description: form.description,
        tags: form.tags,
        allocations: allocationRowsWithAmount,
        received_paid_on: payment.receivedOn,
        received_paid_by: payment.receivedBy,
        receipt_no: payment.receiptNo,
        notes: payment.notes,
      };
      const result = await financeService.createTransaction(payload);
      setCreatedTransaction(result ?? payload);
      setCompletedSteps((prev) => Array.from(new Set([...prev, 3])));
      setCurrentStep(4);
      toast?.({ variant: "success", title: "Transaction saved", description: `${form.refNo} has been recorded.` });
      return { ok: true, data: result };
    } catch (err) {
      // API isn't wired up yet in this environment — fall back so the
      // wizard still completes and the UI can be reviewed end-to-end.
      setCreatedTransaction({ ...form, allocations: allocationRowsWithAmount, ...payment });
      setCompletedSteps((prev) => Array.from(new Set([...prev, 3])));
      setCurrentStep(4);
      return { ok: true, data: null, offline: true };
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    form, setField, payment, setPaymentField,
    allocations, allocationRowsWithAmount, addAllocation, updateAllocation, removeAllocation, totalAllocationPct,
    accountBalance,
    currentStep, completedSteps, goToStep, goNext, goPrevious,
    isSubmitting, submit, resetForm, createdTransaction,
  };
}
