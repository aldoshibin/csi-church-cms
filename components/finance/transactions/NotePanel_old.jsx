"use client";

import { Info } from "lucide-react";

export function NotePanel({ children }) {
  return (
    <div className="flex gap-2.5 rounded-lg border border-success-500/20 bg-success-50 p-4">
      <Info className="h-4 w-4 shrink-0 text-success-600" />
      <div>
        <p className="mb-0.5 text-sm font-semibold text-success-600">Note</p>
        <p className="text-xs leading-relaxed text-success-600/90">{children}</p>
      </div>
    </div>
  );
}
