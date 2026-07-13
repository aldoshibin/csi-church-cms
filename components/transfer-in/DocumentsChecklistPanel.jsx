"use client";

import { FileText, Image as ImageIcon, IdCard } from "lucide-react";

export const TRANSFER_DOCUMENTS = [
  { key: "transfer_certificate", label: "Transfer Certificate", required: true, icon: FileText, hint: "PDF, JPG or PNG" },
  { key: "baptism_certificate", label: "Baptism Certificate (if needed)", required: true, icon: FileText, hint: "If needed" },
  { key: "photo", label: "Photo (Passport Size)", required: true, icon: ImageIcon, hint: "Passport size" },
  { key: "id_proof", label: "Identification Proof (Optional)", required: false, icon: IdCard, hint: "Optional" },
];

export function DocumentsChecklistPanel() {
  return (
    <section className="rounded-lg border border-border bg-white p-5 shadow-card">
      <h2 className="mb-1 text-sm font-semibold text-interactive-500">Documents Checklist</h2>
      <p className="mb-3 text-xs text-ink-subtle">Please collect the following documents.</p>
      <ul className="space-y-3">
        {TRANSFER_DOCUMENTS.map((doc) => (
          <li key={doc.key} className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <doc.icon className="h-4 w-4 shrink-0 text-ink-subtle" />
              <span className="text-sm font-medium text-ink">{doc.label}</span>
            </div>
            <span className={`shrink-0 rounded-full px-2 py-0.5 text-[10px] font-semibold ${doc.required ? "bg-interactive-50 text-interactive-600" : "bg-surface-muted text-ink-subtle"}`}>
              {doc.required ? "Required" : "Optional"}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}
