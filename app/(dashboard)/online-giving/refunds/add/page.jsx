"use client";

import Link from "next/link";

import { useNewRefundForm } from "@/hooks/useNewRefundForm";
import { NewRefundForm } from "@/components/online-giving/refunds/form/NewRefundForm";
import { NewRefundSummaryPanel } from "@/components/online-giving/refunds/form/NewRefundSummaryPanel";
import { RefundImportantNotesPanel } from "@/components/online-giving/refunds/form/RefundImportantNotesPanel";

export default function NewRefundPage() {
  const { form, setField, isSubmitting, submit } = useNewRefundForm();

  return (
    <div className="space-y-5 pb-16">
      <div>
        <h1 className="font-display text-2xl font-bold text-ink">New Refund</h1>
        <nav className="mt-1 flex items-center gap-1.5 text-xs text-interactive-500">
          <Link href="/online-giving" className="hover:underline">Online Giving &amp; Payments</Link>
          <span className="text-ink-subtle">›</span>
          <Link href="/online-giving/refunds" className="hover:underline">Refunds</Link>
          <span className="text-ink-subtle">›</span>
          <span className="text-ink-subtle">New Refund</span>
        </nav>
        <p className="mt-1 text-sm text-ink-subtle">Create a new refund for a donation or payment.</p>
      </div>

      <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <NewRefundForm form={form} setField={setField} isSubmitting={isSubmitting} onSubmit={submit} />
        </div>

        <div className="flex flex-col gap-5">
          <NewRefundSummaryPanel form={form} />
          <RefundImportantNotesPanel />
        </div>
      </div>
    </div>
  );
}
