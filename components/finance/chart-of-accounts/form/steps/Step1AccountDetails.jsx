"use client";

import { ArrowRight, X } from "lucide-react";
import Link from "next/link";
import { Input, Textarea, Select } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { ACCOUNT_TYPE_OPTIONS, ACCOUNT_CATEGORY_OPTIONS, PARENT_ACCOUNT_OPTIONS } from "@/lib/mock/chartOfAccountsMockData";

export default function Step1AccountDetails({ form, setField, isSubAccount, parentLocked, onNext }) {
  return (
    <div className="rounded-lg border border-border bg-white p-6 shadow-card">
      <h3 className="text-base font-semibold text-ink">{isSubAccount ? "Sub Account Details" : "Account Details"}</h3>
      <p className="mb-5 text-sm text-ink-subtle">
        {isSubAccount ? "Enter the basic information for the new sub account." : "Enter the basic information for the new account."}
      </p>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <Input
          label={isSubAccount ? "Sub Account Code" : "Account Code"} required
          placeholder="Enter account code" helperText="Unique code for this account"
          value={form.code} onChange={(e) => setField("code", e.target.value)}
        />
        <Input
          label={isSubAccount ? "Sub Account Name" : "Account Name"} required
          placeholder="Enter account name" helperText="Name of the account"
          value={form.name} onChange={(e) => setField("name", e.target.value)}
        />

        <Select
          label="Parent Account" disabled={parentLocked}
          helperText="Select parent to create a sub account"
          value={form.parentAccount} onChange={(e) => setField("parentAccount", e.target.value)}
        >
          <option value="">Select parent account (if any)</option>
          {PARENT_ACCOUNT_OPTIONS.map((p) => <option key={p.code} value={p.code}>{p.label}</option>)}
        </Select>

        <Select
          label={isSubAccount ? "Sub Account Type" : "Account Type"} required
          value={form.type} onChange={(e) => setField("type", e.target.value)}
        >
          <option value="">Select account type</option>
          {ACCOUNT_TYPE_OPTIONS.map((t) => <option key={t}>{t}</option>)}
        </Select>

        <Select
          label="Account Category" required
          value={form.category} onChange={(e) => setField("category", e.target.value)}
        >
          <option value="">Select account category</option>
          {ACCOUNT_CATEGORY_OPTIONS.map((c) => <option key={c}>{c}</option>)}
        </Select>

        <div>
          <label className="mb-1.5 block text-sm font-medium text-ink">Account Nature <span className="text-danger-500">*</span></label>
          <div className="flex h-[42px] items-center gap-6">
            <label className="flex items-center gap-2 text-sm text-ink">
              <input type="radio" name="nature" className="h-4 w-4 accent-interactive-500" checked={form.nature === "Debit"} onChange={() => setField("nature", "Debit")} />
              Debit
            </label>
            <label className="flex items-center gap-2 text-sm text-ink">
              <input type="radio" name="nature" className="h-4 w-4 accent-interactive-500" checked={form.nature === "Credit"} onChange={() => setField("nature", "Credit")} />
              Credit
            </label>
          </div>
        </div>

        <Input
          label="Opening Balance (₹)" type="number" placeholder="0.00" helperText="Enter opening balance for this account"
          value={form.openingBalance} onChange={(e) => setField("openingBalance", e.target.value)}
        />
        <Input
          label="As of Date" type="date" helperText="Date of opening balance"
          value={form.asOfDate} onChange={(e) => setField("asOfDate", e.target.value)}
        />
      </div>

      <div className="mt-5">
        <Textarea
          label="Account Description" rows={3} maxLength={250}
          placeholder="Enter account description (optional)"
          helperText={`${form.description.length}/250 · Brief description of this account`}
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
