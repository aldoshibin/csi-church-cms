import { CircleCheck, Printer, ArrowRight } from "lucide-react";
import { Modal } from "@/components/ui/Modal";
import { Button } from "@/components/ui/Button";

/**
 * NOTE: assumes your Modal.jsx accepts `open` / `onOpenChange` (same
 * pattern used by SacramentRecordDetailsModal in this project). Adjust
 * the prop names below if your Modal's API differs.
 */
export function ConfirmationSavedModal({ open, onOpenChange, onGoToRegister }) {
  return (
    <Modal open={open} onOpenChange={onOpenChange} className="max-w-sm text-center">
      <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-interactive-50">
        <CircleCheck className="h-8 w-8 text-interactive-500" />
      </div>
      <h3 className="text-lg font-bold text-ink">Record Saved Successfully!</h3>
      <p className="mt-1 text-sm text-ink-subtle">
        The confirmation record has been saved successfully. You can now generate the confirmation certificate.
      </p>

      <div className="mt-4 space-y-2 rounded-lg border border-border p-3 text-left text-[13px]">
        <div className="flex justify-between">
          <span className="text-ink-subtle">Reference No.</span>
          <span className="font-semibold text-ink">CONF/2025/045</span>
        </div>
        <div className="flex justify-between">
          <span className="text-ink-subtle">Record Status</span>
          <span className="rounded-full bg-success-50 px-2 py-0.5 font-semibold text-success-600">Saved</span>
        </div>
        <div className="flex justify-between">
          <span className="text-ink-subtle">Date & Time</span>
          <span className="font-semibold text-ink">25 May 2025, 10:35 AM</span>
        </div>
      </div>

      <div className="mt-4 flex gap-2.5">
        <Button variant="secondary" className="flex-1" leftIcon={<Printer className="h-4 w-4" />}>
          Print Preview
        </Button>
        <Button variant="primary" className="flex-1" rightIcon={<ArrowRight className="h-4 w-4" />} onClick={onGoToRegister}>
          Go to Confirmation Register
        </Button>
      </div>
    </Modal>
  );
}
