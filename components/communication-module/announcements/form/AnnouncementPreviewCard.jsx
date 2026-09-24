"use client";

import { Megaphone } from "lucide-react";
import { Badge } from "@/components/ui/Badge";

export function AnnouncementPreviewCard({ form }) {
  return (
    <div className="rounded-lg border border-border bg-white p-5 shadow-card">
      <h3 className="mb-4 text-base font-semibold text-ink">Announcement Preview</h3>
      <div className="flex items-start gap-3">
        <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-[#F3E8FF] text-[#7C3AED]">
          <Megaphone className="h-5 w-5" />
        </span>
        <div className="min-w-0 flex-1">
          <div className="flex items-center justify-between gap-2">
            <p className="truncate text-sm font-semibold text-ink">{form.title || "Announcement Title"}</p>
            <Badge variant="success">{form.status === "Published" ? "Published" : "○ Scheduled"}</Badge>
          </div>
          <p className="mt-0.5 text-xs text-ink-subtle">
            {form.category || "Category"} &bull; {form.publishDate} {form.publishTime}
          </p>
        </div>
      </div>
      <p className="mt-3 text-sm text-ink-muted">This is how your announcement will appear to members.</p>
    </div>
  );
}
