"use client";

import Link from "next/link";
import { Search, Calendar as CalendarIcon, Info, X, ArrowRight } from "lucide-react";
import { Input, Textarea, Select } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { REFUND_FOR_OPTIONS, REFUND_REASON_OPTIONS } from "@/lib/mock/refundsMockData";

export function NewRefundForm({ form, setField, isSubmitting, onSubmit }) {
  return (
    <div className="rounded-lg border border-border bg-white p-6 shadow-card">
      {/* Donor Information */}
      <h3 className="mb-4 text-base font-semibold text-ink">Donor Information</h3>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
        <Input
          label="Donor" required placeholder="Search donor by name, email or phone..." rightIcon={<Search className="h-4 w-4" />}
          value={form.donor} onChange={(e) => setField("donor", e.target.value)}
        />
        <Input
          label="Email" type="email" placeholder="Enter email address"
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

      {/* Refund For */}
      <h3 className="mb-4 mt-7 text-base font-semibold text-ink">Refund For</h3>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <Select
          label="Refund For" required
          value={form.refundFor} onChange={(e) => setField("refundFor", e.target.value)}
        >
          <option value="">Select refund for</option>
          {REFUND_FOR_OPTIONS.map((p) => <option key={p}>{p}</option>)}
        </Select>
        <Select
          label="Reason for Refund" required
          value={form.reason} onChange={(e) => setField("reason", e.target.value)}
        >
          <option value="">Select reason</option>
          {REFUND_REASON_OPTIONS.map((r) => <option key={r}>{r}</option>)}
        </Select>
      </div>

      {/* Refund Details */}
      <h3 className="mb-4 mt-7 text-base font-semibold text-ink">Refund Details</h3>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
        <Input
          label="Refund Amount" required type="number" placeholder="Enter amount" leftIcon={<span className="text-sm">₹</span>}
          value={form.refundAmount} onChange={(e) => setField("refundAmount", e.target.value)}
        />
        <Input
          label="Refund Date" required type="date" rightIcon={<CalendarIcon className="h-4 w-4" />}
          value={form.refundDate} onChange={(e) => setField("refundDate", e.target.value)}
        />
        <Textarea
          label="Notes (Visible to donor)" rows={1} placeholder="Enter notes for the donor..."
          helperText="These notes will be visible to the donor."
          value={form.notes} onChange={(e) => setField("notes", e.target.value)}
        />
      </div>

      <div className="mt-4 flex gap-2.5 rounded-lg bg-success-50 p-3.5 text-sm text-success-700">
        <Info className="h-4 w-4 shrink-0" />
        The refund amount will be credited using the original payment method.
      </div>

      {/* Original Payment Information */}
      <h3 className="mb-4 mt-7 text-base font-semibold text-ink">Original Payment Information</h3>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-4">
        <Input label="Payment ID" value={form.paymentId} disabled />
        <Input label="Payment Date" value={form.paymentDate} disabled />
        <Input label="Payment Method" value={form.paymentMethod} disabled />
        <Input label="Amount Paid" value={`₹${Number(form.amountPaid).toLocaleString("en-IN", { minimumFractionDigits: 2 })}`} disabled />
      </div>
      <div className="mt-5">
        <Input
          label="Transaction Reference / UTR" placeholder="Enter transaction reference or UTR (if any)"
          value={form.transactionReference} onChange={(e) => setField("transactionReference", e.target.value)}
        />
      </div>

      {/* Internal Information */}
      <h3 className="mb-4 mt-7 text-base font-semibold text-ink">Internal Information <span className="font-normal text-ink-subtle">(Optional)</span></h3>
      <Textarea
        label="Internal Notes (Not visible to donor)" rows={3} placeholder="Enter internal notes..."
        helperText="These notes are for internal use only."
        value={form.internalNotes} onChange={(e) => setField("internalNotes", e.target.value)}
      />

      <div className="mt-7 flex items-center justify-end gap-3 border-t border-border pt-5">
        <Link href="/online-giving/refunds">
          <Button type="button" variant="secondary" leftIcon={<X className="h-4 w-4" />}>Cancel</Button>
        </Link>
        <Button type="button" isLoading={isSubmitting} rightIcon={<ArrowRight className="h-4 w-4" />} onClick={onSubmit}>
          Create Refund
        </Button>
      </div>
    </div>
  );
}
