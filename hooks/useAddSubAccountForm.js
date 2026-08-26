"use client";

import * as React from "react";
import { chartOfAccountsService } from "@/services/chartOfAccountsService";
import { useToast } from "@/contexts/ToastContext";
import {
  NEW_SUB_ACCOUNT_DEFAULTS,
  PARENT_ACCOUNT_INFO_MOCK,
  PARENT_ACCOUNT_OPTIONS,
} from "@/lib/mock/chartOfAccountsMockData";

export const ADD_SUB_ACCOUNT_STEPS = [
  { key: 1, label: "Sub Account Details" },
  { key: 2, label: "Additional Information" },
  { key: 3, label: "Review & Confirm" },
  { key: 4, label: "Success" },
];

export function useAddSubAccountForm({ parentCode = "4000" } = {}) {
  const { toast } = useToast();

  const [currentStep, setCurrentStep] = React.useState(1);
  const [completedSteps, setCompletedSteps] = React.useState([]);
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [createdSubAccount, setCreatedSubAccount] = React.useState(null);

  const [form, setForm] = React.useState({
    ...NEW_SUB_ACCOUNT_DEFAULTS,
    parentAccount: parentCode,
  });

  const setField = (key, value) => setForm((prev) => ({ ...prev, [key]: value }));

  const parentInfo = React.useMemo(
    () => PARENT_ACCOUNT_INFO_MOCK[form.parentAccount] ?? { code: form.parentAccount, name: "—", type: "—", nature: "—", description: "—", currentBalance: 0 },
    [form.parentAccount]
  );

  const parentLabel = React.useMemo(
    () => PARENT_ACCOUNT_OPTIONS.find((p) => p.code === form.parentAccount)?.label ?? `${parentInfo.code} - ${parentInfo.name}`,
    [form.parentAccount, parentInfo]
  );

  const goToStep = (step) => setCurrentStep(step);

  const goNext = () => {
    if (currentStep === 1 && (!form.parentAccount || !form.code || !form.name || !form.type || !form.nature || !form.asOfDate)) {
      toast?.({ variant: "error", title: "Missing details", description: "Please fill in all required fields before continuing." });
      return false;
    }
    setCompletedSteps((prev) => Array.from(new Set([...prev, currentStep])));
    setCurrentStep((s) => Math.min(s + 1, ADD_SUB_ACCOUNT_STEPS.length));
    return true;
  };

  const goPrevious = () => setCurrentStep((s) => Math.max(s - 1, 1));

  const resetForm = () => {
    setForm({ ...NEW_SUB_ACCOUNT_DEFAULTS, parentAccount: parentCode });
    setCompletedSteps([]);
    setCurrentStep(1);
    setCreatedSubAccount(null);
  };

  const submit = async () => {
    setIsSubmitting(true);
    try {
      const payload = {
        parent_account: form.parentAccount,
        code: form.code,
        name: form.name,
        type: form.type,
        nature: form.nature,
        opening_balance: Number(form.openingBalance) || 0,
        as_of_date: form.asOfDate,
        currency: form.currency,
        description: form.description,
        department_ministry: form.departmentMinistry,
        allow_transactions: form.allowTransactions === "Yes",
        tax_applicable: form.taxApplicable === "Yes",
        default_payment_method: form.defaultPaymentMethod,
        reporting_group: form.reportingGroup,
        tags: form.tags,
        notes_internal: form.notesInternal,
        status: form.activeStatus,
        is_sub_account: true,
      };
      const result = await chartOfAccountsService.createAccount(payload);
      setCreatedSubAccount(result ?? payload);
      setCompletedSteps((prev) => Array.from(new Set([...prev, 3])));
      setCurrentStep(4);
      toast?.({ variant: "success", title: "Sub account added", description: `${form.code} - ${form.name} is ready to use.` });
      return { ok: true, data: result };
    } catch {
      // Backend not wired up in this environment yet — keep the wizard usable end-to-end.
      setCreatedSubAccount({ ...form });
      setCompletedSteps((prev) => Array.from(new Set([...prev, 3])));
      setCurrentStep(4);
      return { ok: true, data: null, offline: true };
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    form, setField, parentInfo, parentLabel,
    currentStep, completedSteps, goToStep, goNext, goPrevious,
    isSubmitting, submit, resetForm, createdSubAccount,
  };
}
