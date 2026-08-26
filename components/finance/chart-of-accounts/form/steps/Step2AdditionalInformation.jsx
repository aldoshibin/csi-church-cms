"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import { Input, Textarea, Select } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { ACCOUNT_NATURE_OPTIONS, ACCOUNT_CURRENCY_OPTIONS, REPORTING_GROUP_OPTIONS } from "@/lib/mock/chartOfAccountsMockData";

function YesNoField({ label, helperText, value, onChange }) {
  return (
    <div>
      <label className="mb-1.5 block text-sm font-medium text-ink">{label} <span className="text-danger-500">*</span></label>
      <div className="flex h-[42px] items-center gap-6">
        <label className="flex items-center gap-2 text-sm text-ink">
          <input type="radio" className="h-4 w-4 accent-interactive-500" checked={value === "Yes"} onChange={() => onChange("Yes")} />
          Yes
        </label>
        <label className="flex items-center gap-2 text-sm text-ink">
          <input type="radio" className="h-4 w-4 accent-interactive-500" checked={value === "No"} onChange={() => onChange("No")} />
          No
        </label>
      </div>
      {helperText && <p className="mt-1 text-xs text-ink-subtle">{helperText}</p>}
    </div>
  );
}

export default function Step2AdditionalInformation({ form, setField, isSubAccount, onNext, onPrevious }) {
  return (
    <div className="rounded-lg border border-border bg-white p-6 shadow-card">
      <h3 className="text-base font-semibold text-ink">Additional Information</h3>
      <p className="mb-5 text-sm text-ink-subtle">Provide more details to help classify and manage this {isSubAccount ? "sub account" : "account"}.</p>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <Select
          label="Account Level" required helperText="Level in the chart of accounts hierarchy"
          value={form.level} onChange={(e) => setField("level", e.target.value)}
        >
          <option>Header</option>
          <option>Detail</option>
          <option>Sub-Detail</option>
        </Select>

        <Select
          label="Account Normal Balance" required helperText="Normal balance expected for this account"
          value={form.normalBalance} onChange={(e) => setField("normalBalance", e.target.value)}
        >
          {ACCOUNT_NATURE_OPTIONS.map((n) => <option key={n}>{n}</option>)}
        </Select>

        <YesNoField
          label="Allow Transactions" helperText="Do you want to allow transactions for this account?"
          value={form.allowTransactions} onChange={(v) => setField("allowTransactions", v)}
        />
        <YesNoField
          label="Tax Applicable" helperText="Is tax tracking required for this account?"
          value={form.taxApplicable} onChange={(v) => setField("taxApplicable", v)}
        />

        <Select
          label="Account Currency" required helperText="Currency in which this account will be maintained"
          value={form.currency} onChange={(e) => setField("currency", e.target.value)}
        >
          {ACCOUNT_CURRENCY_OPTIONS.map((c) => <option key={c}>{c}</option>)}
        </Select>

        <Select
          label="Reporting Group" helperText="Used for financial reporting and grouping"
          value={form.reportingGroup} onChange={(e) => setField("reportingGroup", e.target.value)}
        >
          <option value="">Select reporting group (optional)</option>
          {REPORTING_GROUP_OPTIONS.map((g) => <option key={g}>{g}</option>)}
        </Select>
      </div>

      <div className="mt-5">
        <Input
          label="Tags / Keywords" maxLength={150} placeholder="Enter tags or keywords (optional)"
          helperText={`${form.tags.length}/150 · Example: donation, offering, asset, expense`}
          value={form.tags} onChange={(e) => setField("tags", e.target.value)}
        />
      </div>

      <div className="mt-5">
        <Textarea
          label="Notes" rows={3} maxLength={250} placeholder="Enter any additional notes (optional)"
          helperText={`${form.notes.length}/250 · Any extra information about this account`}
          value={form.notes} onChange={(e) => setField("notes", e.target.value)}
        />
      </div>

      <div className="mt-6 flex items-center justify-between border-t border-border pt-4">
        <Button type="button" variant="secondary" leftIcon={<ArrowLeft className="h-4 w-4" />} onClick={onPrevious}>Previous</Button>
        <Button type="button" onClick={onNext} rightIcon={<ArrowRight className="h-4 w-4" />}>Next</Button>
      </div>
    </div>
  );
}
