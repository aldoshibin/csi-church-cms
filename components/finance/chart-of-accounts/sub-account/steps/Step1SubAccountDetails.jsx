"use client";

import { ArrowRight, X } from "lucide-react";
import Link from "next/link";
import { Input, Textarea, Select } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { ACCOUNT_TYPE_OPTIONS, ACCOUNT_CURRENCY_OPTIONS, PARENT_ACCOUNT_OPTIONS } from "@/lib/mock/chartOfAccountsMockData";

export default function Step1SubAccountDetails({ form, setField, onNext }) {
  return (
    <div className="rounded-lg border border-border bg-white p-6 shadow-card">
      <h3 className="text-base font-semibold text-ink">Sub Account Details</h3>
      <p className="mb-5 text-sm text-ink-subtle">Enter the basic information for the new sub account.</p>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <Select
          label="Parent Account" required helperText="Select the parent account under which this sub account will be created."
          value={form.parentAccount} onChange={(e) => setField("parentAccount", e.target.value)}
        >
          {PARENT_ACCOUNT_OPTIONS.map((p) => <option key={p.code} value={p.code}>{p.label}</option>)}
        </Select>

        <Input
          label="Sub Account Code" required placeholder="Enter sub account code" helperText="Unique code for this sub account"
          value={form.code} onChange={(e) => setField("code", e.target.value)}
        />

        <Input
          label="Sub Account Name" required placeholder="Enter sub account name" helperText="Name of the sub account"
          value={form.name} onChange={(e) => setField("name", e.target.value)}
        />

        <Select
          label="Sub Account Type" required helperText="Choose the type of this sub account"
          value={form.type} onChange={(e) => setField("type", e.target.value)}
        >
          {ACCOUNT_TYPE_OPTIONS.map((t) => <option key={t}>{t}</option>)}
        </Select>

        <div>
          <label className="mb-1.5 block text-sm font-medium text-ink">Account Nature <span className="text-danger-500">*</span></label>
          <div className="flex h-[42px] items-center gap-6">
            <label className="flex items-center gap-2 text-sm text-ink">
              <input type="radio" name="sub-nature" className="h-4 w-4 accent-interactive-500" checked={form.nature === "Debit"} onChange={() => setField("nature", "Debit")} />
              Debit
            </label>
            <label className="flex items-center gap-2 text-sm text-ink">
              <input type="radio" name="sub-nature" className="h-4 w-4 accent-interactive-500" checked={form.nature === "Credit"} onChange={() => setField("nature", "Credit")} />
              Credit
            </label>
          </div>
          <p className="mt-1 text-xs text-ink-subtle">Select the nature of this account</p>
        </div>

        <Input
          label="Opening Balance (₹)" type="number" placeholder="0.00" helperText="Enter opening balance for this sub account"
          value={form.openingBalance} onChange={(e) => setField("openingBalance", e.target.value)}
        />

        <Input
          label="As of Date" required type="date" helperText="Date of opening balance"
          value={form.asOfDate} onChange={(e) => setField("asOfDate", e.target.value)}
        />

        <Select
          label="Account Currency" required helperText="Currency in which this account will be maintained"
          value={form.currency} onChange={(e) => setField("currency", e.target.value)}
        >
          {ACCOUNT_CURRENCY_OPTIONS.map((c) => <option key={c}>{c}</option>)}
        </Select>
      </div>

      <div className="mt-5">
        <Textarea
          label="Sub Account Description" rows={3} maxLength={250}
          placeholder="Enter sub account description (optional)"
          helperText={`${form.description.length}/250 · Brief description of this sub account (optional)`}
          value={form.description} onChange={(e) => setField("description", e.target.value)}
        />
      </div>

      <div className="mt-6 flex items-center justify-between border-t border-border pt-4">
        <Link href="/finance/chart-of-accounts">
          <Button type="button" variant="secondary" leftIcon={<X className="h-4 w-4" />}>Cancel</Button>
        </Link>
        <Button type="button" onClick={onNext} rightIcon={<ArrowRight className="h-4 w-4" />}>Next</Button>
      </div>
    </div>
  );
}
