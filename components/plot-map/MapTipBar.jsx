"use client";

import { Info } from "lucide-react";

export function MapTipBar() {
  return (
    <div className="flex items-center gap-2 rounded-lg border border-interactive-100 bg-interactive-50/40 px-4 py-3 text-sm text-interactive-700">
      <Info className="h-4 w-4 shrink-0" />
      Tip: Click on any plot to view details or take action.
    </div>
  );
}
