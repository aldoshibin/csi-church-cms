import { CircleCheck, Eye, Plus, FileBarChart } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function FuneralSavedScreen({ onAddAnother, onGoToRegister }) {
  return (
    <div className="rounded-lg border border-border bg-white px-6 py-16 text-center shadow-card">
      <div className="mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-interactive-50">
        <CircleCheck className="h-10 w-10 text-interactive-500" />
      </div>
      <h2 className="text-2xl font-bold text-interactive-600">Record Saved Successfully!</h2>
      <p className="mt-1 text-sm text-ink-subtle">The funeral record has been added to the system.</p>

      <div className="mx-auto mt-6 max-w-lg rounded-lg border border-border bg-surface-canvas p-5 text-left">
        <p className="mb-4 flex items-center gap-2 text-sm font-bold text-ink">
          <FileBarChart className="h-4 w-4 text-interactive-500" /> Record Details
        </p>
        <div className="grid grid-cols-2 gap-y-4 text-sm">
          <div>
            <p className="text-ink-subtle">Register No.</p>
            <p className="font-semibold text-ink">FR-2025-129</p>
          </div>
          <div>
            <p className="text-ink-subtle">Type of Burial</p>
            <p className="font-semibold text-ink">Burial</p>
          </div>
          <div>
            <p className="text-ink-subtle">Name of Deceased</p>
            <p className="font-semibold text-ink">Mr. Thomas Mathew</p>
          </div>
          <div>
            <p className="text-ink-subtle">Burial Date</p>
            <p className="font-semibold text-ink">22 May 2025</p>
          </div>
          <div>
            <p className="text-ink-subtle">Date of Death</p>
            <p className="font-semibold text-ink">20 May 2025</p>
          </div>
          <div>
            <p className="text-ink-subtle">Recorded By</p>
            <p className="font-semibold text-ink">Rev. Michael John</p>
          </div>
          <div>
            <p className="text-ink-subtle">Place of Funeral</p>
            <p className="font-semibold text-ink">CSI St. John's Church, Nagercoil</p>
          </div>
          <div>
            <p className="text-ink-subtle">Recorded On</p>
            <p className="font-semibold text-ink">20 May 2025 at 11:45 AM</p>
          </div>
        </div>
      </div>

      <p className="mt-6 text-sm text-ink-subtle">You can view the record details, add another record, or go back to the register list.</p>

      <div className="mt-5 flex flex-wrap justify-center gap-2.5">
        <Button variant="secondary" leftIcon={<Eye className="h-4 w-4" />}>View Record</Button>
        <Button variant="secondary" leftIcon={<Plus className="h-4 w-4" />} onClick={onAddAnother}>Add Another Record</Button>
        <Button variant="primary" leftIcon={<FileBarChart className="h-4 w-4" />} onClick={onGoToRegister}>Go to Funeral Register</Button>
      </div>
    </div>
  );
}
