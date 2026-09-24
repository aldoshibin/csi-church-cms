"use client";

import { Info } from "lucide-react";

export function ChoirMemberInformationPanel() {
  return (
    <div className="rounded-lg border border-success-200 bg-success-50 p-4">
      <h3 className="mb-1.5 flex items-center gap-2 text-sm font-semibold text-success-800">
        <Info className="h-4 w-4" /> Information
      </h3>
      <p className="text-sm leading-relaxed text-success-700">
        Fill in the details to add a new choir member.<br />
        Fields marked with <span className="font-semibold">*</span> are required.
      </p>
      <p className="mt-3 text-xs font-semibold text-success-800">Note:</p>
      <ul className="mt-1.5 flex flex-col gap-1.5 text-xs text-success-700">
        <li>• Member ID will be generated automatically.</li>
        <li>• You can edit member details later.</li>
        <li>• Inactive members will not appear in active lists.</li>
      </ul>
    </div>
  );
}
