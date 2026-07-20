"use client";

import Link from "next/link";
import { CheckCircle2, Eye, Printer, Plus, ArrowRight, FileText } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function BaptismSuccessScreen({ record, onAddAnother }) {
  return (
    <div className="rounded-lg border border-border bg-white p-10 text-center shadow-card">
      <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-success-50">
        <CheckCircle2 className="h-10 w-10 text-success-500" />
      </div>
      <h2 className="mt-5 font-display text-2xl font-bold text-success-600">Baptism Record Saved Successfully!</h2>
      <p className="mx-auto mt-2 max-w-md text-sm text-ink-subtle">
        The baptism record has been added to the register. You can view the record details or add another record.
      </p>

      <div className="mx-auto mt-6 max-w-md rounded-lg border border-border bg-surface-canvas p-5 text-left">
        <h3 className="mb-3 flex items-center gap-2 text-sm font-semibold text-ink">
          <FileText className="h-4 w-4 text-interactive-500" /> Record Summary
        </h3>
        <dl className="space-y-2 text-sm">
          {[
            ["Baptism Certificate No.", record.certificateNo],
            ["Child Name", record.childName],
            ["Date of Baptism", record.date],
            ["Church", record.church],
            ["Baptism Type", record.baptismType],
            ["Saved On", record.savedOn],
            ["Saved By", record.savedBy],
          ].map(([label, value]) => (
            <div key={label} className="flex justify-between gap-3">
              <dt className="text-ink-subtle">{label}</dt>
              <dd className="text-right font-medium text-ink">{value || "—"}</dd>
            </div>
          ))}
        </dl>
      </div>

      <div className="mx-auto mt-4 max-w-md rounded-md bg-interactive-50 p-3 text-left text-xs text-interactive-700">
        <span className="font-semibold">What&apos;s Next?</span> You can view the record, print the certificate, or add another baptism record.
      </div>

      <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
        <Link href="/sacraments/baptism">
          <Button type="button" variant="secondary" leftIcon={<Eye className="h-4 w-4" />}>View Record</Button>
        </Link>
        <Button type="button" variant="secondary" leftIcon={<Printer className="h-4 w-4" />} disabled title="No certificate-generation endpoint yet">
          Print Certificate
        </Button>
        <Button type="button" variant="secondary" leftIcon={<Plus className="h-4 w-4" />} onClick={onAddAnother}>
          Add Another Record
        </Button>
        <Link href="/sacraments/baptism">
          <Button type="button" rightIcon={<ArrowRight className="h-4 w-4" />}>Go to Baptism Register</Button>
        </Link>
      </div>
    </div>
  );
}
