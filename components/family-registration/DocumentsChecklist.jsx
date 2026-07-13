"use client";

import { FileText, Download, Info } from "lucide-react";

const REQUIRED_DOCUMENTS = [
  { key: "declaration_form", label: "Family Declaration Form", fileType: "PDF" },
  { key: "family_photo", label: "Family Photo", fileType: "JPG" },
  { key: "marriage_certificate", label: "Marriage Certificate", fileType: "PDF" },
];

export function DocumentsChecklist() {
  return (
    <section className="rounded-lg border border-border bg-white p-6 shadow-card">
      <h2 className="mb-4 font-display text-base font-semibold text-ink">Documents to Upload</h2>
      <ul className="space-y-3">
        {REQUIRED_DOCUMENTS.map((doc) => (
          <li key={doc.key} className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <FileText className="h-4 w-4 text-ink-subtle" />
              <span className="text-sm font-medium text-ink-muted">{doc.label}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="rounded bg-surface-muted px-1.5 py-0.5 text-[10px] font-semibold text-ink-subtle">{doc.fileType}</span>
              <Download className="h-4 w-4 text-ink-subtle" />
            </div>
          </li>
        ))}
      </ul>
      <p className="mt-4 text-xs text-ink-subtle">
        You can upload documents after saving the family. Upload wiring is not yet built —
        familyService has no document endpoint; add one following memberService.uploadPhoto's pattern.
      </p>
    </section>
  );
}

export function NotePanel() {
  return (
    <section className="rounded-lg border border-interactive-100 bg-interactive-50 p-5">
      <div className="flex gap-2.5">
        <Info className="mt-0.5 h-4 w-4 shrink-0 text-interactive-500" />
        <div>
          <p className="mb-1 text-sm font-semibold text-ink">Note</p>
          <p className="text-xs leading-relaxed text-ink-muted">
            Fields marked with * are mandatory. You can edit family details anytime after creation.
          </p>
        </div>
      </div>
    </section>
  );
}
