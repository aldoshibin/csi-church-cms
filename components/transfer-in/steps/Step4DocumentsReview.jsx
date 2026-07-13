"use client";

import * as React from "react";
import { Upload, Check } from "lucide-react";
import { TRANSFER_DOCUMENTS } from "@/components/transfer-in/DocumentsChecklistPanel";

function Dropzone({ doc, file, onSelect }) {
  const inputRef = React.useRef(null);
  return (
    <button
      type="button"
      onClick={() => inputRef.current?.click()}
      className="flex flex-col items-center justify-center gap-2 rounded-lg border-2 border-dashed border-border bg-surface-canvas px-4 py-8 text-center hover:border-interactive-400 hover:bg-interactive-50/40"
    >
      <input
        ref={inputRef}
        type="file"
        accept={doc.key === "photo" ? "image/*" : undefined}
        className="hidden"
        onChange={(e) => e.target.files?.[0] && onSelect(doc.key, e.target.files[0])}
      />
      {file ? <Check className="h-5 w-5 text-success-500" /> : <doc.icon className="h-5 w-5 text-interactive-500" />}
      <p className="text-sm font-medium text-ink">{doc.label.replace(" (Optional)", "").replace(" (if needed)", "")}</p>
      <p className="text-xs font-medium text-ink-subtle">{file ? file.name : doc.hint}</p>
    </button>
  );
}

export default function Step4DocumentsReview({ form, documents, setDocument, fullName }) {
  const values = form.getValues();
  const branchName = values.receiving_branch ? "St. John's Church (Main)" : "—"; // BEST-GUESS: same lookup limitation as other pages' church_id -> name

  return (
    <section className="rounded-lg border border-border bg-white p-6 shadow-card">
      <h2 className="font-display text-base font-semibold text-ink">Documents &amp; Review</h2>
      <p className="mb-5 text-sm text-ink-subtle">Upload required documents and review transfer details before submitting.</p>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {TRANSFER_DOCUMENTS.map((doc) => (
          <Dropzone key={doc.key} doc={doc} file={documents[doc.key]} onSelect={setDocument} />
        ))}
      </div>

      <div className="mt-5 rounded-lg border border-border bg-surface-canvas p-4">
        <h3 className="mb-2 text-sm font-semibold text-interactive-500">Review Summary</h3>
        <p className="text-sm text-ink">Member: {fullName || "—"}</p>
        <p className="text-sm text-ink">Transfer Date: {values.transfer_in_date || "—"} &nbsp; Request Type: {values.request_type || "—"}</p>
        <p className="text-sm text-ink">From: {values.from_parish_church || "—"} &nbsp; Receiving Branch: {branchName}</p>
        <p className="text-sm text-ink">Status: Ready for submission after document verification.</p>
      </div>
    </section>
  );
}
