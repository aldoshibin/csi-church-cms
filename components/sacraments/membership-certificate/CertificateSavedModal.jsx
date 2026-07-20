import { CircleCheck, Download, Eye, Copy } from "lucide-react";
import { Modal } from "@/components/ui/Modal";
import { Button } from "@/components/ui/Button";

export function CertificateSavedModal({ open, onOpenChange }) {
  return (
    <Modal open={open} onOpenChange={onOpenChange} className="max-w-md text-center">
      <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-interactive-50">
        <CircleCheck className="h-8 w-8 text-interactive-500" />
      </div>
      <h3 className="text-lg font-bold text-ink">Certificate Generated Successfully!</h3>
      <p className="mt-1 text-sm text-ink-subtle">The Membership Certificate has been generated and is ready for use.</p>

      <div className="mt-4 rounded-lg border border-border p-3">
        <p className="text-xs text-ink-subtle">Certificate Number</p>
        <p className="flex items-center justify-center gap-2 text-lg font-bold text-ink">
          MC-2025-00429 <Copy className="h-4 w-4 cursor-pointer text-ink-subtle" />
        </p>
      </div>

      <div className="mt-4 flex flex-wrap gap-2.5">
        <Button variant="secondary" className="flex-1" leftIcon={<Download className="h-4 w-4" />}>Download (PDF)</Button>
        <Button variant="secondary" className="flex-1" leftIcon={<Eye className="h-4 w-4" />}>View Certificate</Button>
        <Button variant="primary" className="flex-1" onClick={() => onOpenChange(false)}>Close</Button>
      </div>
    </Modal>
  );
}
