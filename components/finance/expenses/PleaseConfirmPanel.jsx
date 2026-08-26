"use client";

import { AlertTriangle } from "lucide-react";

export function PleaseConfirmPanel({ children }) {
  return (
    <div className="flex gap-2.5 rounded-lg border border-warning-500/30 bg-warning-50 p-4">
      <AlertTriangle className="h-4 w-4 shrink-0 text-warning-600" />
      <div>
        <p className="mb-0.5 text-sm font-semibold text-warning-700">Please Confirm</p>
        <p className="text-xs leading-relaxed text-warning-700/90">{children}</p>
      </div>
    </div>
  );
}
