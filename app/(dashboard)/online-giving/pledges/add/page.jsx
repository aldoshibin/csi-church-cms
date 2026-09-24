"use client";

import Link from "next/link";

import { useNewPledgeForm } from "@/hooks/useNewPledgeForm";
import { NewPledgeForm } from "@/components/online-giving/pledges/form/NewPledgeForm";
import { NewPledgeSummaryPanel } from "@/components/online-giving/pledges/form/NewPledgeSummaryPanel";
import { PledgeImportantNotesPanel } from "@/components/online-giving/pledges/form/PledgeImportantNotesPanel";

export default function NewPledgePage() {
  const { form, setField, isSubmitting, submit } = useNewPledgeForm();

  return (
    <div className="space-y-5 pb-16">
      <div>
        <h1 className="font-display text-2xl font-bold text-ink">New Pledge</h1>
        <nav className="mt-1 flex items-center gap-1.5 text-xs text-interactive-500">
          <Link href="/online-giving" className="hover:underline">Online Giving &amp; Payments</Link>
          <span className="text-ink-subtle">›</span>
          <Link href="/online-giving/pledges" className="hover:underline">Pledges</Link>
          <span className="text-ink-subtle">›</span>
          <span className="text-ink-subtle">New Pledge</span>
        </nav>
        <p className="mt-1 text-sm text-ink-subtle">Create a new pledge to track a donor's commitment.</p>
      </div>

      <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <NewPledgeForm form={form} setField={setField} isSubmitting={isSubmitting} onSubmit={submit} />
        </div>

        <div className="flex flex-col gap-5">
          <NewPledgeSummaryPanel form={form} />
          <PledgeImportantNotesPanel />
        </div>
      </div>
    </div>
  );
}
