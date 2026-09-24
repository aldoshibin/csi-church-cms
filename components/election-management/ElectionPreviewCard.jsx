"use client";

import { Eye } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { formatDate } from "@/lib/utils";
import { ELECTION_TYPE_BADGE_MAP } from "@/lib/mock/vmElectionManagementMockData";

// Create New Election form's sidebar card — a live preview of how the
// election will appear once saved.
export function ElectionPreviewCard({ form }) {
  return (
    <div className="rounded-lg border border-border bg-white p-5 shadow-card">
      <div className="flex items-center gap-2">
        <Eye className="h-4 w-4 text-interactive-600" />
        <h3 className="text-sm font-semibold text-ink">Preview</h3>
      </div>
      <div className="mt-3 rounded-lg border border-border bg-surface-canvas p-4">
        <p className="text-sm font-semibold text-ink">{form.electionName || "Untitled Election"}</p>
        {form.electionType && (
          <div className="mt-2">
            <Badge variant={ELECTION_TYPE_BADGE_MAP[form.electionType] ?? "info"}>{form.electionType}</Badge>
          </div>
        )}
        <p className="mt-3 text-xs text-ink-subtle">
          {form.electionDate ? formatDate(form.electionDate) : "Election date not set"}
          {form.startTime ? ` · ${form.startTime}${form.endTime ? ` - ${form.endTime}` : ""}` : ""}
        </p>
        {form.description && <p className="mt-2 text-xs text-ink-muted">{form.description}</p>}
      </div>
    </div>
  );
}
