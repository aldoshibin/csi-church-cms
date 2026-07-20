import { CircleCheck, Eye, Download, ArrowRight } from "lucide-react";
import { Modal } from "@/components/ui/Modal";
import { Button } from "@/components/ui/Button";


export function ConfirmationCertificateSavedModal({ open, onOpenChange, onGoToList }) {
  return (
    <Modal open={open} onOpenChange={onOpenChange} className="max-w-sm text-center">
      <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-interactive-50">
        <CircleCheck className="h-8 w-8 text-interactive-500" />
      </div>
      <h3 className="text-lg font-bold text-ink">Certificate Generated Successfully!</h3>
      <p className="mt-1 text-sm text-ink-subtle">The confirmation certificate has been created and saved.</p>

      <div className="mt-4 rounded-lg border border-border p-3">
        <p className="text-xs text-ink-subtle">Certificate Number</p>
        <p className="text-lg font-bold text-ink">CONF-2025-0013</p>
      </div>

      <div className="mt-4 flex flex-wrap gap-2.5">
        <Button variant="secondary" className="flex-1" leftIcon={<Eye className="h-4 w-4" />}>View</Button>
        <Button variant="secondary" className="flex-1" leftIcon={<Download className="h-4 w-4" />}>Download</Button>
        <Button variant="primary" className="flex-1" rightIcon={<ArrowRight className="h-4 w-4" />} onClick={onGoToList}>
          Go to List
        </Button>
      </div>
    </Modal>
  );
}
