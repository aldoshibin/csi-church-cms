"use client";

import * as React from "react";
import { UploadCloud, CheckCircle2, Trash2, FileText } from "lucide-react";
import { Textarea } from "@/components/ui/Input";

// Hardcoded to match the screenshot exactly — the `requiredDocuments`
// prop coming from the parent hook doesn't reliably provide all 5 of
// these, so this component no longer depends on it being complete.
// If the parent hook DOES pass additional documents beyond these 5,
// they're appended after (deduped by key) rather than dropped.
const DEFAULT_REQUIRED_DOCS = [
  { key: "child_birth_certificate", label: "Child Birth Certificate", required: true },
  { key: "parents_marriage_certificate", label: "Parents' Marriage Certificate", required: true },
  { key: "godfather_baptism_certificate", label: "Godfather Baptism Certificate", required: true },
  { key: "godmother_baptism_certificate", label: "Godmother Baptism Certificate", required: true },
  { key: "parish_recommendation_letter", label: "Parish Recommendation Letter", required: true },
];
const DOC_COLORS = {
  birth_certificate: "text-violet-500",
  child_birth_certificate: "text-violet-500",
  marriage_certificate: "text-violet-500",
  parents_marriage_certificate: "text-violet-500",
  godfather_baptism: "text-blue-500",
  godfather_baptism_certificate: "text-blue-500",
  godmother_baptism: "text-amber-500",
  godmother_baptism_certificate: "text-amber-500",
  recommendation_letter: "text-danger-500",
  parish_recommendation_letter: "text-danger-500",
};

function DocumentUploadTile({ doc, file, onSelect, onRemove }) {
  const inputRef = React.useRef(null);
  const color = DOC_COLORS[doc.key] ?? "text-interactive-500";

  return (
    <div className="rounded-md border border-border p-3">
      <div className="mb-2 flex items-start gap-2">
        <FileText className={`mt-0.5 h-5 w-5 shrink-0 ${color}`} />
        <div className="min-w-0">
          <p className="truncate text-[13px] font-semibold leading-tight text-ink">{doc.label}</p>
          <p className="text-[11px] text-ink-subtle">{doc.required ? "PDF, JPG, PNG (Max 10 MB)" : "Optional"}</p>
        </div>
      </div>

      <input
        ref={inputRef}
        type="file"
        accept=".jpg,.jpeg,.png,.pdf"
        className="hidden"
        onChange={(e) => e.target.files?.[0] && onSelect(doc.key, e.target.files[0])}
      />

      <button
        type="button"
        onClick={() => inputRef.current?.click()}
        className="flex w-full flex-col items-center justify-center gap-1 rounded-md border-2 border-dashed border-border py-4"
      >
        <UploadCloud className="h-5 w-5 text-ink-subtle" />
        <span className="text-[11px] text-ink-subtle">Drag & Drop or Browse</span>
      </button>

      {file && (
        <div className="mt-2 flex items-center justify-between gap-2">
          <div className="flex min-w-0 items-center gap-1.5">
            <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-success-500" />
            <span className="truncate text-[12px] font-medium text-ink">{file.name}</span>
          </div>
          <button type="button" onClick={() => onRemove(doc.key)} aria-label="Remove file" className="shrink-0 text-danger-500">
            <Trash2 className="h-3.5 w-3.5" />
          </button>
        </div>
      )}
    </div>
  );
}

export default function Step5DocumentsNotes({ form, nav, documents = {}, setDocument, requiredDocuments }) {
  const { register } = form;

  const extraFromParent = (requiredDocuments ?? []).filter(
    (doc) => !DEFAULT_REQUIRED_DOCS.some((d) => d.key === doc.key)
  );
  const docsToRender = [...DEFAULT_REQUIRED_DOCS, ...extraFromParent];

  return (
    <div>
      <h2 className="font-display text-base font-semibold text-ink">Documents & Notes</h2>
      <p className="mb-5 text-sm text-ink-subtle">Upload relevant documents and enter any additional notes for this baptism record.</p>

      <h3 className="mb-1 text-sm font-semibold text-interactive-500">Required & Supporting Documents (Optional)</h3>
      <p className="mb-3 text-xs text-ink-subtle">Upload scanned copies of relevant documents. All files should be clear and valid.</p>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
        {docsToRender.map((doc) => (
          <DocumentUploadTile
            key={doc.key}
            doc={doc}
            file={documents[doc.key]}
            onSelect={setDocument}
            onRemove={(key) => setDocument(key, null)}
          />
        ))}
      </div>

      <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-2">
        <div>
          <h3 className="mb-1 text-sm font-semibold text-interactive-500">Additional Documents (Optional)</h3>
          <p className="mb-3 text-xs text-ink-subtle">Upload any other supporting documents if applicable.</p>
          <DocumentUploadTile
            doc={{ key: "other", label: "Other Documents", required: false }}
            file={documents.other}
            onSelect={setDocument}
            onRemove={(key) => setDocument(key, null)}
          />
        </div>

        <div>
          <h3 className="mb-1 text-sm font-semibold text-interactive-500">Document Notes</h3>
          <p className="mb-3 text-xs text-ink-subtle">Add any notes regarding the uploaded documents.</p>
          <Textarea rows={6} maxLength={500} placeholder="Enter document related notes..." {...register("document_notes")} />
        </div>
      </div>

      <div className="mt-6">
        <h3 className="mb-1 text-sm font-semibold text-interactive-500">General Notes</h3>
        <p className="mb-3 text-xs text-ink-subtle">Enter any additional notes or comments regarding this baptism record.</p>
        <Textarea rows={4} maxLength={1000} placeholder="Enter any additional notes..." {...register("additional_notes")} />
      </div>

      <div className="mt-5 rounded-md bg-interactive-50 p-3 text-xs text-interactive-700">
        Please ensure all documents are legible and valid. You can upload the documents later if not available now.
      </div>

      {nav}
    </div>
  );
}
