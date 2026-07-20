import { CircleCheck, Eye, Download, Printer, Plus, ArrowLeft, Info } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function BaptismCertificateSavedScreen({ onCreateAnother, onBackToList }) {
  return (
    <div className="rounded-lg border border-border bg-white px-6 py-14 text-center shadow-card">
      <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-interactive-50">
        <CircleCheck className="h-8 w-8 text-interactive-500" />
      </div>
      <h2 className="text-xl font-bold text-interactive-600">Baptism Certificate Created Successfully!</h2>
      <p className="mt-1 text-sm text-ink-subtle">The baptism certificate has been created and saved successfully.</p>

      <div className="mx-auto mt-6 max-w-lg rounded-lg border border-border bg-surface-canvas p-5 text-left">
        <p className="mb-4 flex items-center gap-2 text-sm font-bold text-ink">Certificate Details</p>
        <div className="grid grid-cols-2 gap-y-3 text-sm">
          <div><p className="text-ink-subtle">Member Name</p></div>
          <div><p className="font-semibold text-ink">Emma Rose</p></div>
          <div><p className="text-ink-subtle">Baptism Date</p></div>
          <div><p className="font-semibold text-ink">12 May 2025</p></div>
          <div><p className="text-ink-subtle">Baptism Entry No.</p></div>
          <div><p className="font-semibold text-ink">128</p></div>
          <div><p className="text-ink-subtle">Baptism Register Book No.</p></div>
          <div><p className="font-semibold text-ink">05</p></div>
          <div><p className="text-ink-subtle">Baptism Register Sl. No.</p></div>
          <div><p className="font-semibold text-ink">128</p></div>
          <div><p className="text-ink-subtle">Baptism Entry Page No.</p></div>
          <div><p className="font-semibold text-ink">45</p></div>
          <div><p className="text-ink-subtle">Certificate ID</p></div>
          <div><p className="font-semibold text-ink">BC-2025-128</p></div>
          <div><p className="text-ink-subtle">Created By</p></div>
          <div><p className="font-semibold text-ink">Rev. Michael John</p></div>
          <div><p className="text-ink-subtle">Created On</p></div>
          <div><p className="font-semibold text-ink">12 May 2025 11:45 AM</p></div>
        </div>
      </div>

      <div className="mx-auto mt-5 flex max-w-lg items-start gap-2 rounded-md border border-interactive-100 bg-interactive-50 px-4 py-2.5 text-left text-[13px] text-interactive-700">
        <Info className="mt-0.5 h-4 w-4 shrink-0" /> You can view, print or download the certificate using the options below.
      </div>

      <div className="mt-6 flex flex-wrap justify-center gap-2.5">
        <Button variant="secondary" leftIcon={<Eye className="h-4 w-4" />}>View Certificate</Button>
        <Button variant="secondary" leftIcon={<Download className="h-4 w-4" />}>Download PDF</Button>
        <Button variant="secondary" leftIcon={<Printer className="h-4 w-4" />}>Print Certificate</Button>
        <Button variant="primary" leftIcon={<Plus className="h-4 w-4" />} onClick={onCreateAnother}>Create Another</Button>
      </div>
      <div className="mt-3">
        <Button variant="ghost" leftIcon={<ArrowLeft className="h-4 w-4" />} onClick={onBackToList}>
          Back to Baptism Certificate List
        </Button>
      </div>
    </div>
  );
}
