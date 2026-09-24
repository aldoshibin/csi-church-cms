"use client";

import { Info } from "lucide-react";

// Optional `variant="success"` renders the light-green tinted note style
// (used by the Add New Trip page's sidebar note); default is unchanged.
export function NoteCard({ children, variant = "default" }) {
  const isSuccess = variant === "success";
  return (
    <div className={`rounded-lg border p-5 shadow-card ${isSuccess ? "border-success-500/30 bg-success-50" : "border-border bg-white"}`}>
      <div className="flex items-center gap-2">
        <Info className={`h-4 w-4 ${isSuccess ? "text-success-600" : "text-interactive-600"}`} />
        <h3 className={`text-sm font-semibold ${isSuccess ? "text-success-700" : "text-ink"}`}>Note</h3>
      </div>
      <p className={`mt-3 text-sm ${isSuccess ? "text-success-700" : "text-ink-muted"}`}>{children}</p>
    </div>
  );
}
