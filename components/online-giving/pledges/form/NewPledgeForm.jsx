"use client";

import Link from "next/link";
import { Search, Calendar as CalendarIcon, Info, X, ArrowRight } from "lucide-react";
import { Input, Textarea, Select } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import {
  PLEDGE_FUND_OPTIONS, PLEDGE_COMMITMENT_TYPE_OPTIONS, PLEDGE_PAYMENT_FREQUENCY_OPTIONS,
} from "@/lib/mock/pledgesMockData";

export function NewPledgeForm({ form, setField, isSubmitting, onSubmit }) {
  return (
    <div className="rounded-lg border border-border bg-white p-6 shadow-card">
      {/* Donor Information */}
      <h3 className="mb-4 text-base font-semibold text-ink">Donor Information</h3>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
        <Input
          label="Donor" required placeholder="Select donor" rightIcon={<Search className="h-4 w-4" />}
          value={form.donor} onChange={(e) => setField("donor", e.target.value)}
        />
        <Input
          label="Email" required type="email" placeholder="Enter email address"
          value={form.email} onChange={(e) => setField("email", e.target.value)}
        />
        <div>
          <label className="mb-1.5 block text-sm font-medium text-ink">Phone</label>
          <div className="flex">
            <select
              value={form.countryCode} onChange={(e) => setField("countryCode", e.target.value)}
              className="h-[42px] w-20 rounded-l-lg border border-r-0 border-border bg-white px-2 text-sm text-ink"
            >
              <option value="+91">🇮🇳 +91</option>
              <option value="+1">🇺🇸 +1</option>
              <option value="+44">🇬🇧 +44</option>
            </select>
            <input
              type="tel" placeholder="Enter phone number"
              value={form.phone} onChange={(e) => setField("phone", e.target.value)}
              className="h-[42px] flex-1 rounded-r-lg border border-border px-3 text-sm text-ink placeholder:text-ink-subtle focus:outline-none focus:ring-2 focus:ring-interactive-500/20 focus:border-interactive-500"
            />
          </div>
        </div>
      </div>

      {/* Fund / Purpose */}
      <h3 className="mb-4 mt-7 text-base font-semibold text-ink">Fund / Purpose</h3>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <Select
          label="Fund / Purpose" required
          value={form.fundPurpose} onChange={(e) => setField("fundPurpose", e.target.value)}
        >
          <option value="">Select fund / purpose</option>
          {PLEDGE_FUND_OPTIONS.map((f) => <option key={f}>{f}</option>)}
        </Select>
        <Input
          label="Purpose (Optional)" placeholder="Enter purpose"
          value={form.purpose} onChange={(e) => setField("purpose", e.target.value)}
        />
      </div>

      {/* Pledge Details */}
      <h3 className="mb-4 mt-7 text-base font-semibold text-ink">Pledge Details</h3>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-4">
        <Input
          label="Pledged Amount" required type="number" placeholder="Enter amount" leftIcon={<span className="text-sm">₹</span>}
          value={form.pledgedAmount} onChange={(e) => setField("pledgedAmount", e.target.value)}
        />
        <Select
          label="Commitment Type" required
          value={form.commitmentType} onChange={(e) => setField("commitmentType", e.target.value)}
        >
          <option value="">Select commitment type</option>
          {PLEDGE_COMMITMENT_TYPE_OPTIONS.map((c) => <option key={c}>{c}</option>)}
        </Select>
        <Input
          label="Start Date" required type="date" rightIcon={<CalendarIcon className="h-4 w-4" />}
          value={form.startDate} onChange={(e) => setField("startDate", e.target.value)}
        />
        <Input
          label="End Date" required type="date" rightIcon={<CalendarIcon className="h-4 w-4" />}
          value={form.endDate} onChange={(e) => setField("endDate", e.target.value)}
        />
      </div>

      <div className="mt-4 flex gap-2.5 rounded-lg bg-success-50 p-3.5 text-sm text-success-700">
        <Info className="h-4 w-4 shrink-0" />
        The pledge amount will be tracked against payments received during the selected period.
      </div>

      {/* Payment Schedule */}
      <h3 className="mb-4 mt-7 text-base font-semibold text-ink">Payment Schedule</h3>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
        <Select
          label="Payment Frequency" required
          value={form.paymentFrequency} onChange={(e) => setField("paymentFrequency", e.target.value)}
        >
          <option value="">Select frequency</option>
          {PLEDGE_PAYMENT_FREQUENCY_OPTIONS.map((f) => <option key={f}>{f}</option>)}
        </Select>
        <Input
          label="Number of Payments" required type="number" placeholder="Enter number of payments"
          value={form.numberOfPayments} onChange={(e) => setField("numberOfPayments", e.target.value)}
        />
        <Input
          label="First Payment Date" required type="date" rightIcon={<CalendarIcon className="h-4 w-4" />}
          value={form.firstPaymentDate} onChange={(e) => setField("firstPaymentDate", e.target.value)}
        />
      </div>

      <div className="mt-4 flex gap-2.5 rounded-lg bg-interactive-50 p-3.5 text-sm text-interactive-700">
        <Info className="h-4 w-4 shrink-0" />
        You can record payments manually or let the system track them as they are received.
      </div>

      {/* Additional Information */}
      <h3 className="mb-4 mt-7 text-base font-semibold text-ink">Additional Information <span className="font-normal text-ink-subtle">(Optional)</span></h3>
      <div className="flex flex-col gap-5">
        <Textarea
          label="Notes" rows={3} placeholder="Enter any notes about this pledge..."
          value={form.notes} onChange={(e) => setField("notes", e.target.value)}
        />
        <Textarea
          label="Internal Notes" rows={3} placeholder="Enter internal notes (not visible to donor)..."
          value={form.internalNotes} onChange={(e) => setField("internalNotes", e.target.value)}
        />
      </div>

      <div className="mt-7 flex items-center justify-end gap-3 border-t border-border pt-5">
        <Link href="/online-giving/pledges">
          <Button type="button" variant="secondary" leftIcon={<X className="h-4 w-4" />}>Cancel</Button>
        </Link>
        <Button type="button" isLoading={isSubmitting} rightIcon={<ArrowRight className="h-4 w-4" />} onClick={onSubmit}>
          Create Pledge
        </Button>
      </div>
    </div>
  );
}
