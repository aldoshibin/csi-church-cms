"use client";

import { Info } from "lucide-react";

export function CwInformationPanel() {
  return (
    <div className="rounded-lg border border-success-200 bg-success-50 p-4">
      <h3 className="mb-1.5 flex items-center gap-2 text-sm font-semibold text-success-800">
        <Info className="h-4 w-4" /> Information
      </h3>
      <p className="text-sm leading-relaxed text-success-700">
        Fill in the details to add a new item. All fields marked with <span className="font-semibold">*</span> are required.
      </p>
    </div>
  );
}
