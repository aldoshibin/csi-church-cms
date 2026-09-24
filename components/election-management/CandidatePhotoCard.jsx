"use client";

import { Download } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function CandidatePhotoCard({ photo, name, title = "Candidate Photo" }) {
  return (
    <div className="rounded-lg border border-border bg-white p-6 shadow-card">
      <h3 className="text-sm font-semibold text-ink">{title}</h3>
      <div className="mt-4 overflow-hidden rounded-lg border border-border">
        {photo ? (
          <img src={photo} alt={name} className="h-48 w-full object-cover" />
        ) : (
          <div className="flex h-48 w-full items-center justify-center bg-surface-canvas text-sm text-ink-subtle">No photo uploaded</div>
        )}
      </div>
      <Button type="button" variant="secondary" leftIcon={<Download className="h-4 w-4" />} className="mt-4 w-full">
        Download Photo
      </Button>
    </div>
  );
}
