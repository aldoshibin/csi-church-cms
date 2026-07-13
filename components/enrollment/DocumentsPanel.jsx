"use client";

import * as React from "react";
import { FileText, Image as ImageIcon, Upload, Info } from "lucide-react";

const REQUIRED_DOCUMENTS = [
  { key: "id_proof", label: "ID Proof", hint: "Aadhaar Card", required: true, icon: FileText },
  { key: "address_proof", label: "Address Proof", hint: "Recent Utility Bill", required: true, icon: FileText },
  { key: "baptism_certificate", label: "Baptism Certificate", hint: "Certificate", required: false, icon: FileText },
  { key: "passport_photo", label: "Passport Size Photo", hint: "Photo.jpg", required: true, icon: ImageIcon },
];


export function DocumentsPanel({ mode = "preview", onPhotoSelect, photoSelected }) {
  const inputRef = React.useRef(null);

  if (mode === "preview") {
    return (
      <section className="rounded-lg border border-border bg-white p-5 shadow-card">
        <h2 className="mb-3 text-sm font-semibold text-interactive-500">Documents to Prepare</h2>
        <ul className="space-y-3">
          {REQUIRED_DOCUMENTS.map((doc) => (
            <li key={doc.key} className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <doc.icon className="h-4 w-4 text-ink-subtle" />
                <span className="text-sm font-medium text-ink">{doc.label}</span>
              </div>
              <span className={`rounded-full px-2 py-0.5 text-[10px] font-semibold ${doc.required ? "bg-interactive-50 text-interactive-600" : "bg-surface-muted text-ink-subtle"}`}>
                {doc.required ? "Required" : "If applicable"}
              </span>
            </li>
          ))}
        </ul>
        <p className="mt-4 rounded-md bg-surface-muted p-3 text-xs text-ink-subtle">
          You can upload documents in the final step.
        </p>
      </section>
    );
  }

  return (
    <section className="rounded-lg border border-border bg-white p-5 shadow-card">
      <h2 className="mb-1 text-sm font-semibold text-interactive-500">Documents Checklist</h2>
      <p className="mb-3 text-xs text-ink-subtle">Please upload the required documents.</p>
      <ul className="space-y-3">
        {REQUIRED_DOCUMENTS.map((doc) => (
          <li key={doc.key} className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <doc.icon className="h-4 w-4 text-ink-subtle" />
              <div>
                <p className="text-sm font-medium text-ink">{doc.label}</p>
                <p className="text-xs text-ink-subtle">{doc.hint}</p>
              </div>
            </div>
            {doc.key === "passport_photo" ? (
              <>
                <input ref={inputRef} type="file" accept="image/*" className="hidden" onChange={(e) => e.target.files?.[0] && onPhotoSelect(e.target.files[0])} />
                <button
                  type="button"
                  onClick={() => inputRef.current?.click()}
                  className="flex items-center gap-1 rounded-full bg-success-50 px-2.5 py-1 text-[11px] font-semibold text-success-600"
                >
                  <Upload className="h-3 w-3" /> {photoSelected ? "Selected" : "Upload"}
                </button>
              </>
            ) : (
              <button
                type="button"
                disabled
                title="No upload endpoint yet for this document type"
                className="flex cursor-not-allowed items-center gap-1 rounded-full bg-surface-muted px-2.5 py-1 text-[11px] font-semibold text-ink-subtle"
              >
                <Upload className="h-3 w-3" /> Upload
              </button>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}

export function EnrollmentNotePanel() {
  return (
    <section className="rounded-lg border border-interactive-100 bg-interactive-50 p-5">
      <div className="flex gap-2.5">
        <Info className="mt-0.5 h-4 w-4 shrink-0 text-interactive-500" />
        <div>
          <p className="mb-1 text-sm font-semibold text-ink">Note</p>
          <p className="text-xs leading-relaxed text-ink-muted">
            Fields marked with * are mandatory. You can save and continue later.
          </p>
        </div>
      </div>
    </section>
  );
}
