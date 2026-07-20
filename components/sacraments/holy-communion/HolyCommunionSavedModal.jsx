import { CircleCheck, Eye, Plus, ArrowRight, User, Calendar, BookOpen, Hash } from "lucide-react";
import { Modal } from "@/components/ui/Modal";
import { Button } from "@/components/ui/Button";

export function HolyCommunionSavedModal({ open, onOpenChange, onGoToRegister, onAddAnother }) {
  return (
    <Modal open={open} onOpenChange={onOpenChange} className="max-w-md text-center">
      <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-interactive-50">
        <CircleCheck className="h-8 w-8 text-interactive-500" />
      </div>
      <h3 className="text-lg font-bold text-ink">Record Saved Successfully!</h3>
      <p className="mt-1 text-sm text-ink-subtle">The Holy Communion record has been saved successfully.</p>

      <div className="mt-4 space-y-2.5 rounded-lg border border-border p-3 text-left text-[13px]">
        <div className="flex items-center justify-between">
          <span className="flex items-center gap-1.5 text-ink-subtle"><User className="h-3.5 w-3.5" /> Communicant Name</span>
          <span className="font-semibold text-ink">Alex Thomas</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="flex items-center gap-1.5 text-ink-subtle"><Calendar className="h-3.5 w-3.5" /> Date of Holy Communion</span>
          <span className="font-semibold text-ink">25 May 2025</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="flex items-center gap-1.5 text-ink-subtle"><BookOpen className="h-3.5 w-3.5" /> Batch / Class</span>
          <span className="font-semibold text-ink">Batch 2025</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="flex items-center gap-1.5 text-ink-subtle"><Hash className="h-3.5 w-3.5" /> Register Folio No.</span>
          <span className="font-semibold text-ink">045</span>
        </div>
      </div>

      <p className="mt-3 text-sm font-semibold text-ink">Record ID: <span className="text-interactive-500">HC-2025-00045</span></p>

      <div className="mt-4 flex flex-wrap gap-2.5">
        <Button variant="secondary" className="flex-1" leftIcon={<Eye className="h-4 w-4" />}>View Record</Button>
        <Button variant="secondary" className="flex-1" leftIcon={<Plus className="h-4 w-4" />} onClick={onAddAnother}>Add Another Record</Button>
        <Button variant="primary" className="flex-1" rightIcon={<ArrowRight className="h-4 w-4" />} onClick={onGoToRegister}>Go to Register</Button>
      </div>
    </Modal>
  );
}
