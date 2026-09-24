"use client";

import Link from "next/link";

import { useNewRecurringDonationForm } from "@/hooks/useNewRecurringDonationForm";
import { NewRecurringDonationForm } from "@/components/online-giving/recurring-donations/form/NewRecurringDonationForm";
import { SubscriptionSummaryPanel } from "@/components/online-giving/recurring-donations/form/SubscriptionSummaryPanel";
import { ImportantNotesPanel } from "@/components/online-giving/recurring-donations/form/ImportantNotesPanel";

export default function NewRecurringDonationPage() {
  const { form, setField, isSubmitting, submit } = useNewRecurringDonationForm();

  return (
    <div className="space-y-5 pb-16">
      <div>
        <h1 className="font-display text-2xl font-bold text-ink">New Recurring Donation</h1>
        <nav className="mt-1 flex items-center gap-1.5 text-xs text-interactive-500">
          <Link href="/online-giving" className="hover:underline">Online Giving &amp; Payments</Link>
          <span className="text-ink-subtle">›</span>
          <Link href="/online-giving/recurring-donations" className="hover:underline">Recurring Donations</Link>
          <span className="text-ink-subtle">›</span>
          <span className="text-ink-subtle">New Recurring Donation</span>
        </nav>
        <p className="mt-1 text-sm text-ink-subtle">Create a new recurring donation subscription.</p>
      </div>

      <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <NewRecurringDonationForm form={form} setField={setField} isSubmitting={isSubmitting} onSubmit={submit} />
        </div>

        <div className="flex flex-col gap-5">
          <SubscriptionSummaryPanel form={form} />
          <ImportantNotesPanel />
        </div>
      </div>
    </div>
  );
}
