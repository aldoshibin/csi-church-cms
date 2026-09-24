"use client";

import { FileText } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { formatDate } from "@/lib/utils";

function Row({ label, value }) {
  return (
    <p className="flex items-center justify-between py-2 text-sm">
      <span className="text-ink-subtle">{label}</span>
      <span className="font-medium text-ink">{value}</span>
    </p>
  );
}

export function CandidateNominationSummaryCard({ summary }) {
  if (!summary) return null;
  return (
    <div className="rounded-lg border border-border bg-white p-6 shadow-card">
      <h3 className="text-sm font-semibold text-ink">Nomination Summary</h3>
      <div className="mt-2 divide-y divide-border">
        <Row label="Total Nominations" value={summary.totalNominations} />
        <Row label="Valid Nominations" value={summary.validNominations} />
        <Row label="Withdrawn" value={summary.withdrawn} />
        <Row label="Latest Nomination" value={formatDate(summary.latestNomination, { hour: "numeric", minute: "2-digit" })} />
      </div>
      <Button type="button" variant="secondary" leftIcon={<FileText className="h-4 w-4" />} className="mt-3 w-full">
        View Nominations
      </Button>
    </div>
  );
}
