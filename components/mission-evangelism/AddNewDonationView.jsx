"use client";

import Link from "next/link";
import { Home, ChevronRight, ArrowLeft, HandCoins, Calendar, Clock, Plus } from "lucide-react";
import { Input, Textarea, Select } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { useNewMissionDonationForm } from "@/hooks/useNewMissionDonationForm";
import { ToggleSwitch } from "@/components/mission-evangelism/ToggleSwitch";
import { DonationGuidelinesCard } from "@/components/mission-evangelism/DonationGuidelinesCard";
import { ActivityAttachmentsDropzone } from "@/components/mission-evangelism/ActivityAttachmentsDropzone";
import {
  DONATION_TYPE_OPTIONS, DONATION_FUND_OPTIONS, DONATION_PAYMENT_METHOD_OPTIONS, RECENT_DONATIONS_MOCK,
} from "@/lib/mock/vmMissionEvangelismMockData";

export function AddNewDonationView() {
  const { form, setField, attachments, setAttachments, isSubmitting, submit } = useNewMissionDonationForm();

  return (
    <div className="flex flex-col gap-4">
      <nav className="flex items-center gap-1.5 text-sm text-ink-subtle">
        <Home className="h-3.5 w-3.5" />
        <Link href="/mission-evangelism/overview" className="hover:text-interactive-600">Mission &amp; Evangelism</Link>
        <ChevronRight className="h-3.5 w-3.5" />
        <Link href="/mission-evangelism/donations" className="hover:text-interactive-600">Donations</Link>
        <ChevronRight className="h-3.5 w-3.5" />
        <span className="font-medium text-ink">Add New Donation</span>
      </nav>

      <div>
        <Link href="/mission-evangelism/donations" className="inline-flex items-center gap-1.5 text-sm font-medium text-interactive-600 hover:underline">
          <ArrowLeft className="h-4 w-4" /> Back to Donations
        </Link>
      </div>

      <div className="flex items-start gap-4">
        <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-lg bg-[#DCFCE7] text-[#16A34A]">
          <HandCoins className="h-6 w-6" />
        </span>
        <div>
          <h1 className="text-2xl font-semibold text-ink">Add New Donation</h1>
          <p className="mt-1 text-sm text-ink-subtle">Record a new donation or contribution to the church.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_320px]">
        <form
          onSubmit={(e) => { e.preventDefault(); submit(); }}
          className="flex flex-col gap-6 rounded-lg border border-border bg-white p-6 shadow-card"
        >
          <div>
            <h3 className="mb-4 text-sm font-semibold text-interactive-700">1. Donor Information</h3>
            <div>
              <p className="mb-2 text-sm font-medium text-ink">Donor Type <span className="text-danger-500">*</span></p>
              <div className="flex flex-wrap gap-6">
                {DONATION_TYPE_OPTIONS.map((opt) => (
                  <label key={opt} className="flex items-center gap-2 text-sm text-ink">
                    <input
                      type="radio" name="donorType" checked={form.donorType === opt}
                      onChange={() => setField("donorType", opt)}
                      className="h-4 w-4 border-border text-success-600 focus:ring-success-500"
                    />
                    {opt}
                  </label>
                ))}
              </div>
            </div>

            <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <p className="mb-1.5 text-sm font-medium text-ink">Select Member / Donor <span className="text-danger-500">*</span></p>
                <div className="flex items-center gap-2">
                  <select
                    value={form.selectedDonor} onChange={(e) => setField("selectedDonor", e.target.value)}
                    className="h-10 w-full rounded-md border border-border bg-white px-3 text-sm text-ink focus:outline-none focus:ring-2 focus:ring-interactive-500/20 focus:border-interactive-500"
                  >
                    <option value="">Search and select member...</option>
                    {RECENT_DONATIONS_MOCK.map((d) => <option key={d.donorId} value={d.donorId}>{d.donorName}</option>)}
                  </select>
                  <Button type="button" variant="secondary" leftIcon={<Plus className="h-4 w-4" />} className="shrink-0">Add New Donor</Button>
                </div>
              </div>
              <Input
                label="Donor Name" required placeholder="Enter donor name"
                value={form.donorName} onChange={(e) => setField("donorName", e.target.value)}
              />
            </div>
            <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <Input
                label="Contact Number" placeholder="Enter contact number"
                value={form.contactNumber} onChange={(e) => setField("contactNumber", e.target.value)}
              />
              <Input
                label="Email Address" type="email" placeholder="Enter email address"
                value={form.email} onChange={(e) => setField("email", e.target.value)}
              />
            </div>
          </div>

          <div className="border-t border-border pt-5">
            <h3 className="mb-4 text-sm font-semibold text-interactive-700">2. Donation Details</h3>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <Select
                label="Fund / Purpose" required
                value={form.fundPurpose} onChange={(e) => setField("fundPurpose", e.target.value)}
              >
                <option value="">Select fund / purpose</option>
                {DONATION_FUND_OPTIONS.map((opt) => <option key={opt} value={opt}>{opt}</option>)}
              </Select>
              <Input
                label="Amount (₹)" required type="number" min={0} placeholder="Enter donation amount"
                value={form.amount} onChange={(e) => setField("amount", e.target.value)}
              />
            </div>

            <div className="mt-4">
              <p className="mb-2 text-sm font-medium text-ink">Payment Method <span className="text-danger-500">*</span></p>
              <div className="flex flex-wrap gap-6">
                {DONATION_PAYMENT_METHOD_OPTIONS.map((opt) => (
                  <label key={opt} className="flex items-center gap-2 text-sm text-ink">
                    <input
                      type="radio" name="paymentMethod" checked={form.paymentMethod === opt}
                      onChange={() => setField("paymentMethod", opt)}
                      className="h-4 w-4 border-border text-success-600 focus:ring-success-500"
                    />
                    {opt}
                  </label>
                ))}
              </div>
            </div>

            <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="grid grid-cols-2 gap-3">
                <Input
                  label="Payment Date & Time" required type="date" rightIcon={<Calendar className="h-4 w-4" />}
                  value={form.paymentDate} onChange={(e) => setField("paymentDate", e.target.value)}
                />
                <Input
                  label="&nbsp;" type="time" rightIcon={<Clock className="h-4 w-4" />}
                  value={form.paymentTime} onChange={(e) => setField("paymentTime", e.target.value)}
                />
              </div>
              <Input
                label="Transaction ID / Reference No." required placeholder="Enter transaction ID / reference number (if any)"
                value={form.transactionId} onChange={(e) => setField("transactionId", e.target.value)}
              />
            </div>
          </div>

          <div className="border-t border-border pt-5">
            <h3 className="mb-4 text-sm font-semibold text-interactive-700">3. Additional Information</h3>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <ToggleSwitch
                label="Receipt Required" description="Generate official receipt for this donation"
                checked={form.receiptRequired} onChange={(v) => setField("receiptRequired", v)}
              />
              <ToggleSwitch
                label="Send Thank You Message" description="Send automated thank you message to donor"
                checked={form.sendThankYouMessage} onChange={(v) => setField("sendThankYouMessage", v)}
              />
            </div>
            <div className="mt-4">
              <Textarea
                label="Notes" rows={3} maxLength={500} placeholder="Enter any additional notes..."
                value={form.notes} onChange={(e) => setField("notes", e.target.value)}
                helperText={`${form.notes.length}/500`}
              />
            </div>
          </div>

          <div className="border-t border-border pt-5">
            <h3 className="mb-4 text-sm font-semibold text-interactive-700">4. Attachments (Optional)</h3>
            <ActivityAttachmentsDropzone files={attachments} onFilesChange={setAttachments} formatsText="Supported formats: PDF, JPG, PNG (Max 10MB)" />
          </div>

          <div className="flex items-center justify-end gap-3 border-t border-border pt-5">
            <Link href="/mission-evangelism/donations">
              <Button type="button" variant="secondary">Cancel</Button>
            </Link>
            <Button type="submit" variant="primary" isLoading={isSubmitting}>Save Donation</Button>
          </div>
        </form>

        <div className="flex flex-col gap-6">
          <DonationGuidelinesCard />
        </div>
      </div>
    </div>
  );
}
