import { CircleCheck, List, Plus, Download, Printer, Lightbulb } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { TransferCertificatePreview } from "./TransferCertificatePreview";

export function TransferCertificateSavedScreen({ onCreateAnother, onViewAllRequests }) {
  return (
    <div className="flex flex-col gap-5 lg:flex-row">
      <div className="flex-1 rounded-lg border border-border bg-white px-6 py-14 text-center shadow-card">
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-interactive-50">
          <CircleCheck className="h-8 w-8 text-interactive-500" />
        </div>
        <h2 className="text-xl font-bold text-interactive-600">Transfer Certificate Created Successfully!</h2>
        <p className="mt-1 text-sm text-ink-subtle">The transfer certificate has been generated and is ready.</p>
        <p className="text-sm text-ink-subtle">You can download, print or share the certificate.</p>

        <div className="mx-auto mt-5 max-w-xs rounded-lg border border-border bg-surface-canvas p-3">
          <p className="text-xs text-ink-subtle">Certificate Number</p>
          <p className="text-lg font-bold text-ink">TC-2025-00048</p>
        </div>

        <div className="mx-auto mt-6 max-w-xl rounded-lg border border-border p-5 text-left">
          <p className="mb-4 text-sm font-bold text-ink">Certificate Details</p>
          <div className="grid grid-cols-2 gap-y-4 text-sm">
            <div><p className="text-ink-subtle">Member Name</p><p className="font-semibold text-ink">Mr. Thomas Mathew</p></div>
            <div><p className="text-ink-subtle">Request Number</p><p className="font-semibold text-ink">TRF-2025-0048</p></div>
            <div><p className="text-ink-subtle">From Parish</p><p className="font-semibold text-ink">CSI Holy Trinity Church, Nagercoil</p></div>
            <div><p className="text-ink-subtle">Requested By</p><p className="font-semibold text-ink">Rev. Michael John</p></div>
            <div><p className="text-ink-subtle">To Parish</p><p className="font-semibold text-ink">CSI St. Peter's Church, Chennai</p></div>
            <div><p className="text-ink-subtle">Supporting Document</p><p className="font-semibold text-ink">transfer_request.pdf</p></div>
            <div><p className="text-ink-subtle">Transfer Date</p><p className="font-semibold text-ink">25 May 2025</p></div>
            <div><p className="text-ink-subtle">Date & Time</p><p className="font-semibold text-ink">25 May 2025, 04:35 PM</p></div>
          </div>
        </div>

        <div className="mx-auto mt-5 flex max-w-xl items-start gap-2 rounded-md border border-interactive-100 bg-interactive-50 px-4 py-2.5 text-left text-[13px] text-interactive-700">
          The member will be notified via email about this transfer. You can view all transfer certificate requests in the list.
        </div>

        <div className="mt-6 flex flex-wrap justify-center gap-2.5">
          <Button variant="secondary" leftIcon={<List className="h-4 w-4" />} onClick={onViewAllRequests}>View All Requests</Button>
          <Button variant="secondary" leftIcon={<Plus className="h-4 w-4" />} onClick={onCreateAnother}>Create Another</Button>
          <Button variant="primary" leftIcon={<Download className="h-4 w-4" />}>Download Certificate</Button>
          <Button variant="secondary" leftIcon={<Printer className="h-4 w-4" />}>Print Certificate</Button>
        </div>
      </div>

      <div className="shrink-0 space-y-3">
        <TransferCertificatePreview />
        <div className="w-[340px] rounded-md border border-interactive-100 bg-interactive-50 p-4 text-[12px] text-interactive-700">
          <p className="mb-1 flex items-center gap-1.5 font-bold"><Lightbulb className="h-4 w-4" /> What's next?</p>
          The member and the receiving parish will be notified about this transfer.
        </div>
      </div>
    </div>
  );
}
