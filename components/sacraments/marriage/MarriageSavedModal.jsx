import { CircleCheck, Eye, Printer, ArrowRight, Printer as PrinterIcon } from "lucide-react";
import { Modal } from "@/components/ui/Modal";
import { Button } from "@/components/ui/Button";

export function MarriageSavedModal({ open, onOpenChange, onGoToRegister }) {
  return (
    <Modal open={open} onOpenChange={onOpenChange} className="max-w-md text-center">
      <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-interactive-50">
        <CircleCheck className="h-8 w-8 text-interactive-500" />
      </div>
      <h3 className="text-lg font-bold text-ink">Marriage Record Saved Successfully!</h3>
      <p className="mt-1 text-sm text-ink-subtle">The marriage record has been saved and registered successfully.</p>

      <div className="mt-4 space-y-2.5 rounded-lg border border-border p-3 text-left text-[13px]">
        <div className="flex justify-between"><span className="text-ink-subtle">Register Folio No.</span><span className="font-semibold text-ink">MR-2025-000123</span></div>
        <div className="flex justify-between"><span className="text-ink-subtle">Date of Marriage</span><span className="font-semibold text-ink">25 May 2025</span></div>
        <div className="flex justify-between"><span className="text-ink-subtle">Groom</span><span className="font-semibold text-ink">Alex Thomas</span></div>
        <div className="flex justify-between"><span className="text-ink-subtle">Bride</span><span className="font-semibold text-ink">Maria Grace</span></div>
      </div>

      <p className="mt-3 flex items-center justify-center gap-1.5 text-xs text-ink-subtle">
        <PrinterIcon className="h-3.5 w-3.5" /> You can view, print or download the record.
      </p>

      <div className="mt-4 flex flex-wrap gap-2.5">
        <Button variant="secondary" className="flex-1" leftIcon={<Eye className="h-4 w-4" />}>View Record</Button>
        <Button variant="secondary" className="flex-1" leftIcon={<Printer className="h-4 w-4" />}>Print Record</Button>
        <Button variant="primary" className="flex-1" rightIcon={<ArrowRight className="h-4 w-4" />} onClick={onGoToRegister}>
          Go to Marriage Register
        </Button>
      </div>
    </Modal>
  );
}
