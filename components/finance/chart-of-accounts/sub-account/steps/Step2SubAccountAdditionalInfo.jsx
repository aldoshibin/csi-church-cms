"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import { Input, Textarea, Select } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { DEPARTMENT_MINISTRY_OPTIONS, DEFAULT_PAYMENT_METHOD_OPTIONS, REPORTING_GROUP_OPTIONS } from "@/lib/mock/chartOfAccountsMockData";

function YesNoField({ label, helperText, value, onChange, name }) {
  return (
    <div>
      <label className="mb-1.5 block text-sm font-medium text-ink">{label} <span className="text-danger-500">*</span></label>
      <div className="flex h-[42px] items-center gap-6">
        <label className="flex items-center gap-2 text-sm text-ink">
          <input type="radio" name={name} className="h-4 w-4 accent-interactive-500" checked={value === "Yes"} onChange={() => onChange("Yes")} />
          Yes
        </label>
        <label className="flex items-center gap-2 text-sm text-ink">
          <input type="radio" name={name} className="h-4 w-4 accent-interactive-500" checked={value === "No"} onChange={() => onChange("No")} />
          No
        </label>
      </div>
      {helperText && <p className="mt-1 text-xs text-ink-subtle">{helperText}</p>}
    </div>
  );
}

export default function Step2SubAccountAdditionalInfo({ form, setField, onNext, onPrevious }) {
  return (
    <div className="rounded-lg border border-border bg-white p-6 shadow-card">
      <h3 className="text-base font-semibold text-ink">Additional Information</h3>
      <p className="mb-5 text-sm text-ink-subtle">Provide more details to help classify and manage this sub account.</p>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <Input
          label="Description" maxLength={250} helperText={`${form.description.length}/250 · Detailed description of this sub account`}
          value={form.description} onChange={(e) => setField("description", e.target.value)}
        />

        <Select
          label="Department / Ministry" helperText="Select department or ministry"
          value={form.departmentMinistry} onChange={(e) => setField("departmentMinistry", e.target.value)}
        >
          <option value="">Select department or ministry</option>
          {DEPARTMENT_MINISTRY_OPTIONS.map((d) => <option key={d}>{d}</option>)}
        </Select>

        <YesNoField
          label="Allow Transactions" name="allow-tx" helperText="Do you want to allow transactions for this sub account?"
          value={form.allowTransactions} onChange={(v) => setField("allowTransactions", v)}
        />
        <YesNoField
          label="Tax Applicable" name="tax-applicable" helperText="Is tax tracking required for this sub account?"
          value={form.taxApplicable} onChange={(v) => setField("taxApplicable", v)}
        />

        <Select
          label="Default Payment Method" helperText="Default payment method for this sub account"
          value={form.defaultPaymentMethod} onChange={(e) => setField("defaultPaymentMethod", e.target.value)}
        >
          {DEFAULT_PAYMENT_METHOD_OPTIONS.map((p) => <option key={p}>{p}</option>)}
        </Select>

        <Select
          label="Reporting Group" helperText="Used for financial reporting and grouping"
          value={form.reportingGroup} onChange={(e) => setField("reportingGroup", e.target.value)}
        >
          <option value="">Select reporting group (optional)</option>
          {REPORTING_GROUP_OPTIONS.map((g) => <option key={g}>{g}</option>)}
        </Select>
      </div>

      <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2">
        <Input
          label="Tags / Keywords" maxLength={150} placeholder="Add relevant tags for quick search and filtering"
          helperText={`${form.tags.length}/150 · Add relevant tags for quick search and filtering`}
          value={form.tags} onChange={(e) => setField("tags", e.target.value)}
        />
        <Textarea
          label="Notes (Internal)" rows={1} maxLength={250} placeholder="Internal notes for reference (not visible in reports)"
          helperText={`${form.notesInternal.length}/250 · Internal notes for reference (not visible in reports)`}
          value={form.notesInternal} onChange={(e) => setField("notesInternal", e.target.value)}
        />
      </div>

      <div className="mt-5">
        <label className="mb-1.5 block text-sm font-medium text-ink">Active Status <span className="text-danger-500">*</span></label>
        <div className="flex h-[42px] items-center gap-6">
          <label className="flex items-center gap-2 text-sm text-ink">
            <input type="radio" name="active-status" className="h-4 w-4 accent-interactive-500" checked={form.activeStatus === "Active"} onChange={() => setField("activeStatus", "Active")} />
            Active
          </label>
          <label className="flex items-center gap-2 text-sm text-ink">
            <input type="radio" name="active-status" className="h-4 w-4 accent-interactive-500" checked={form.activeStatus === "Inactive"} onChange={() => setField("activeStatus", "Inactive")} />
            Inactive
          </label>
        </div>
        <p className="mt-1 text-xs text-ink-subtle">Set status for this sub account</p>
      </div>

      <div className="mt-6 flex items-center justify-between border-t border-border pt-4">
        <Button type="button" variant="secondary" leftIcon={<ArrowLeft className="h-4 w-4" />} onClick={onPrevious}>Previous</Button>
        <Button type="button" onClick={onNext} rightIcon={<ArrowRight className="h-4 w-4" />}>Next</Button>
      </div>
    </div>
  );
}
