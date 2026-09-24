"use client";

import { Download, ReceiptText } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { formatDateTime } from "@/lib/utils";

function Row({ label, value }) {
  return (
    <div className="flex items-center justify-between gap-3 text-sm">
      <span className="text-ink-subtle">{label}</span>
      <span className="font-medium text-ink">{value || "–"}</span>
    </div>
  );
}

export function VotingReceiptCard({ receipt }) {
  if (!receipt) return null;
  return (
    <div className="rounded-lg border border-border bg-white p-6 shadow-card">
      <div className="flex items-center gap-2">
        <ReceiptText className="h-4 w-4 text-interactive-600" />
        <h3 className="text-sm font-semibold text-ink">Voting Receipt</h3>
      </div>
      <div className="mt-4 flex flex-col gap-3 rounded-md border border-dashed border-border p-4">
        <Row label="Church" value={receipt.churchName} />
        <Row label="Election" value={receipt.electionName} />
        <Row label="Voter Name" value={receipt.voterName} />
        <Row label="Member No." value={receipt.membershipNumber} />
        <Row label="Voted On" value={formatDateTime(receipt.votedOn)} />
        <Row label="Transaction ID" value={receipt.transactionId} />
      </div>
      <Button type="button" variant="secondary" leftIcon={<Download className="h-4 w-4" />} className="mt-4 w-full">
        Download Receipt
      </Button>
    </div>
  );
}
