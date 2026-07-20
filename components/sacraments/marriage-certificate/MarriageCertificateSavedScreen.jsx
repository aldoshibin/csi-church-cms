import { CircleCheck, Eye, Download, Printer, Plus, ArrowLeft, Info } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function MarriageCertificateSavedScreen({ onCreateAnother, onBackToList }) {
  return (
    <div className="rounded-lg border border-border bg-white px-6 py-14 text-center shadow-card">
      <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-interactive-50">
        <CircleCheck className="h-8 w-8 text-interactive-500" />
      </div>
      <h2 className="text-xl font-bold text-interactive-600">Marriage Certificate Created Successfully!</h2>
      <p className="mt-1 text-sm text-ink-subtle">The marriage certificate has been created and saved in the system.</p>
      <p className="text-sm text-ink-subtle">You can view, download or print the certificate.</p>

      <div className="mx-auto mt-6 max-w-lg rounded-lg border border-border bg-surface-canvas p-5 text-left">
        <p className="mb-4 text-sm font-bold text-ink">Certificate Summary</p>
        <div className="space-y-2.5 text-sm">
          <div className="flex"><span className="w-40 shrink-0 text-ink-subtle">Certificate Number</span><span className="text-ink">: MC-2025-000125</span></div>
          <div className="flex"><span className="w-40 shrink-0 text-ink-subtle">Date of Marriage</span><span className="text-ink">: 12/05/2025</span></div>
          <div className="flex"><span className="w-40 shrink-0 text-ink-subtle">Groom</span><span className="text-ink">: John Mathew</span></div>
          <div className="flex"><span className="w-40 shrink-0 text-ink-subtle">Bride</span><span className="text-ink">: Rose Mary</span></div>
          <div className="flex"><span className="w-40 shrink-0 text-ink-subtle">Church</span><span className="text-ink">: CSI Holy Trinity Church, Nagercoil</span></div>
          <div className="flex"><span className="w-40 shrink-0 text-ink-subtle">Conducted By</span><span className="text-ink">: Rev. David Samuel</span></div>
          <div className="flex"><span className="w-40 shrink-0 text-ink-subtle">Diocese</span><span className="text-ink">: Nagercoil Diocese</span></div>
          <div className="flex items-center">
            <span className="w-40 shrink-0 text-ink-subtle">Certificate Status</span>
            <span className="rounded-full bg-success-50 px-2 py-0.5 text-xs font-semibold text-success-600">Active</span>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-5 flex max-w-lg items-start gap-2 rounded-md border border-interactive-100 bg-interactive-50 px-4 py-2.5 text-left text-[13px] text-interactive-700">
        <Info className="mt-0.5 h-4 w-4 shrink-0" />
        <span>
          <span className="font-bold">What's Next</span><br />
          The certificate is now available in the Marriage Register. You can generate more certificates or return to the list.
        </span>
      </div>

      <div className="mt-6 flex flex-wrap justify-center gap-2.5">
        <Button variant="secondary" leftIcon={<Eye className="h-4 w-4" />}>View Certificate</Button>
        <Button variant="secondary" leftIcon={<Download className="h-4 w-4" />}>Download PDF</Button>
        <Button variant="secondary" leftIcon={<Printer className="h-4 w-4" />}>Print Certificate</Button>
        <Button variant="primary" leftIcon={<Plus className="h-4 w-4" />} onClick={onCreateAnother}>Create Another</Button>
      </div>
      <div className="mt-3">
        <Button variant="ghost" leftIcon={<ArrowLeft className="h-4 w-4" />} onClick={onBackToList}>
          Back to Marriage Certificate List
        </Button>
      </div>
    </div>
  );
}
