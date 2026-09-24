"use client";

import Link from "next/link";
import { Search, Calendar as CalendarIcon, CreditCard, Info, X, ArrowRight } from "lucide-react";
import { Input, Textarea, Select } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { PaymentMethodSelector } from "./PaymentMethodSelector";
import { RD_FUND_OPTIONS, RD_FREQUENCY_OPTIONS } from "@/lib/mock/recurringDonationsMockData";

export function NewRecurringDonationForm({ form, setField, isSubmitting, onSubmit }) {
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

      {/* Purpose / Fund */}
      <h3 className="mb-4 mt-7 text-base font-semibold text-ink">Purpose / Fund</h3>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <Select
          label="Fund / Account" required
          value={form.fundAccount} onChange={(e) => setField("fundAccount", e.target.value)}
        >
          <option value="">Select fund / account</option>
          {RD_FUND_OPTIONS.map((f) => <option key={f}>{f}</option>)}
        </Select>
        <Input
          label="Purpose (Optional)" placeholder="Enter purpose"
          value={form.purpose} onChange={(e) => setField("purpose", e.target.value)}
        />
      </div>

      {/* Donation Details */}
      <h3 className="mb-4 mt-7 text-base font-semibold text-ink">Donation Details</h3>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
        <Input
          label="Amount" required type="number" placeholder="Enter amount" leftIcon={<span className="text-sm">₹</span>}
          value={form.amount} onChange={(e) => setField("amount", e.target.value)}
        />
        <Select
          label="Frequency" required
          value={form.frequency} onChange={(e) => setField("frequency", e.target.value)}
        >
          <option value="">Select frequency</option>
          {RD_FREQUENCY_OPTIONS.map((f) => <option key={f}>{f}</option>)}
        </Select>
        <Input
          label="Starting From" required type="date" rightIcon={<CalendarIcon className="h-4 w-4" />}
          value={form.startingFrom} onChange={(e) => setField("startingFrom", e.target.value)}
        />
      </div>

      <div className="mt-4 flex gap-2.5 rounded-lg bg-success-50 p-3.5 text-sm text-success-700">
        <Info className="h-4 w-4 shrink-0" />
        The donation will be processed automatically based on the selected frequency.
      </div>

      {/* Payment Information */}
      <h3 className="mb-4 mt-7 text-base font-semibold text-ink">Payment Information</h3>
      <label className="mb-1.5 block text-sm font-medium text-ink">Payment Method <span className="text-danger-500">*</span></label>
      <PaymentMethodSelector value={form.paymentMethod} onChange={(v) => setField("paymentMethod", v)} />

      {form.paymentMethod === "Card" && (
        <div className="mt-5 rounded-lg border border-border p-5">
          <h4 className="mb-4 text-sm font-semibold text-ink">Card Details</h4>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <Input
              label="Card Number" required placeholder="1234 5678 9012 3456" rightIcon={<CreditCard className="h-4 w-4" />}
              value={form.cardNumber} onChange={(e) => setField("cardNumber", e.target.value)}
            />
            <div />
            <Input
              label="Expiry Date" required placeholder="MM / YY"
              value={form.expiryDate} onChange={(e) => setField("expiryDate", e.target.value)}
            />
            <Input
              label="CVV" required placeholder="123" maxLength={4}
              value={form.cvv} onChange={(e) => setField("cvv", e.target.value)}
            />
          </div>
          <div className="mt-5">
            <Input
              label="Name on Card" required placeholder="Enter name on card"
              value={form.nameOnCard} onChange={(e) => setField("nameOnCard", e.target.value)}
            />
          </div>
          <label className="mt-4 flex items-center gap-2 text-sm text-ink-muted">
            <input type="checkbox" className="h-4 w-4 accent-interactive-500" checked={form.saveCard} onChange={(e) => setField("saveCard", e.target.checked)} />
            Securely save this card for future payments
          </label>
        </div>
      )}

      {/* Additional Information */}
      <h3 className="mb-4 mt-7 text-base font-semibold text-ink">Additional Information <span className="font-normal text-ink-subtle">(Optional)</span></h3>
      <Textarea
        label="Notes" rows={3} placeholder="Enter any notes here..."
        value={form.notes} onChange={(e) => setField("notes", e.target.value)}
      />

      <div className="mt-7 flex items-center justify-end gap-3 border-t border-border pt-5">
        <Link href="/online-giving/recurring-donations">
          <Button type="button" variant="secondary" leftIcon={<X className="h-4 w-4" />}>Cancel</Button>
        </Link>
        <Button type="button" isLoading={isSubmitting} rightIcon={<ArrowRight className="h-4 w-4" />} onClick={onSubmit}>
          Create Recurring Donation
        </Button>
      </div>
    </div>
  );
}
