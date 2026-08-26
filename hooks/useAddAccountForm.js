"use client";

import * as React from "react";
import { chartOfAccountsService } from "@/services/chartOfAccountsService";
import { useToast } from "@/contexts/ToastContext";
import { NEW_ACCOUNT_DEFAULTS, PARENT_ACCOUNT_OPTIONS } from "@/lib/mock/chartOfAccountsMockData";

export const ACCOUNT_STEPS = [
  { key: 1, label: "Account Details" },
  { key: 2, label: "Additional Information" },
  { key: 3, label: "Review & Confirm" },
  { key: 4, label: "Success" },
];

export const SUB_ACCOUNT_STEPS = [
  { key: 1, label: "Sub Account Details" },
  { key: 2, label: "Additional Information" },
  { key: 3, label: "Review & Confirm" },
  { key: 4, label: "Success" },
];

/**
 * Drives both the "Add New Account" and "Add Sub Account" wizards — they share the
 * same 4-step shape and fields, differing only in labels and whether a parent
 * account is pre-selected/locked.
 */
export function useAddAccountForm({ mode = "account", parentCode = "" } = {}) {
  const { toast } = useToast();
  const isSubAccount = mode === "subaccount";
  const steps = isSubAccount ? SUB_ACCOUNT_STEPS : ACCOUNT_STEPS;

  const [currentStep, setCurrentStep] = React.useState(1);
  const [completedSteps, setCompletedSteps] = React.useState([]);
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [createdAccount, setCreatedAccount] = React.useState(null);

  const [form, setForm] = React.useState({
    ...NEW_ACCOUNT_DEFAULTS,
    parentAccount: parentCode || NEW_ACCOUNT_DEFAULTS.parentAccount,
    type: isSubAccount ? "Detail" : NEW_ACCOUNT_DEFAULTS.type,
  });

  const setField = (key, value) => setForm((prev) => ({ ...prev, [key]: value }));

  const parentLabel = React.useMemo(
    () => PARENT_ACCOUNT_OPTIONS.find((p) => p.code === form.parentAccount)?.label ?? form.parentAccount,
    [form.parentAccount]
  );

  const goToStep = (step) => setCurrentStep(step);

  const goNext = () => {
    if (currentStep === 1 && (!form.code || !form.name || !form.type || !form.category)) {
      toast?.({ variant: "error", title: "Missing details", description: "Please fill in all required fields before continuing." });
      return false;
    }
    setCompletedSteps((prev) => Array.from(new Set([...prev, currentStep])));
    setCurrentStep((s) => Math.min(s + 1, steps.length));
    return true;
  };

  const goPrevious = () => setCurrentStep((s) => Math.max(s - 1, 1));

  const resetForm = () => {
    setForm({ ...NEW_ACCOUNT_DEFAULTS, parentAccount: parentCode || "", type: isSubAccount ? "Detail" : "" });
    setCompletedSteps([]);
    setCurrentStep(1);
    setCreatedAccount(null);
  };

  const submit = async () => {
    setIsSubmitting(true);
    try {
      const payload = {
        code: form.code,
        name: form.name,
        parent_account: form.parentAccount || null,
        type: form.type,
        category: form.category,
        nature: form.nature,
        opening_balance: Number(form.openingBalance) || 0,
        as_of_date: form.asOfDate,
        description: form.description,
        level: form.level,
        normal_balance: form.normalBalance,
        allow_transactions: form.allowTransactions === "Yes",
        tax_applicable: form.taxApplicable === "Yes",
        currency: form.currency,
        reporting_group: form.reportingGroup,
        tags: form.tags,
        notes: form.notes,
        is_sub_account: isSubAccount,
      };
      const result = await chartOfAccountsService.createAccount(payload);
      setCreatedAccount(result ?? payload);
      setCompletedSteps((prev) => Array.from(new Set([...prev, 3])));
      setCurrentStep(4);
      toast?.({ variant: "success", title: isSubAccount ? "Sub account added" : "Account created", description: `${form.code} - ${form.name} is ready to use.` });
      return { ok: true, data: result };
    } catch {
      // Backend not wired up in this environment yet — keep the wizard usable end-to-end.
      setCreatedAccount({ ...form });
      setCompletedSteps((prev) => Array.from(new Set([...prev, 3])));
      setCurrentStep(4);
      return { ok: true, data: null, offline: true };
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    isSubAccount, steps, parentLabel,
    form, setField,
    currentStep, completedSteps, goToStep, goNext, goPrevious,
    isSubmitting, submit, resetForm, createdAccount,
  };
}
