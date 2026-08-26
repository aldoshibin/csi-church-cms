"use client";

import { Check } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { formatCurrency } from "@/lib/utils";

export default function Step4Success({ form, onAddAnother, onBackToDashboard }) {
  return (
    <div className="flex flex-col items-center rounded-lg border border-border bg-white p-10 text-center shadow-card">
      <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-success-50">
        <Check className="h-7 w-7 text-success-600" />
      </div>
      <h3 className="text-lg font-semibold text-ink">Transaction Added Successfully</h3>
      <p className="mx-auto mt-1 max-w-sm text-sm text-ink-subtle">
        {form.refNo} for {formatCurrency(form.amount || 0)} has been recorded under {form.account}.
      </p>
      <div className="mt-6 flex gap-3">
        <Button type="button" variant="secondary" onClick={onAddAnother}>
          Add Another Transaction
        </Button>
        <Button type="button" onClick={onBackToDashboard}>
          Back to Dashboard
        </Button>
      </div>
    </div>
  );
}
