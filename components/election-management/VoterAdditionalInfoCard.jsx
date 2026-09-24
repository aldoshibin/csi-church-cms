"use client";

import { Plus } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function VoterAdditionalInfoCard({
  notes, remarks, showAddRemark = true, emptyNotesText = "No additional notes available.",
}) {
  return (
    <div className="rounded-lg border border-border bg-white p-6 shadow-card">
      <h3 className="text-sm font-semibold text-ink">Additional Information</h3>
      <div className="mt-4 grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div>
          <p className="text-xs font-medium text-ink-subtle">Notes</p>
          <p className="mt-1 text-sm text-ink-muted">{notes?.trim() ? notes : emptyNotesText}</p>
        </div>
        <div>
          <p className="text-xs font-medium text-ink-subtle">Remarks (Admin)</p>
          <p className="mt-1 text-sm text-ink-muted">{remarks?.trim() ? remarks : "No remarks added."}</p>
          {showAddRemark && (
            <Button type="button" variant="secondary" size="sm" leftIcon={<Plus className="h-3.5 w-3.5" />} className="mt-3">
              Add Remark
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
