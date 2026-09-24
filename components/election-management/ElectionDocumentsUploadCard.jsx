"use client";

import * as React from "react";
import { UploadCloud, FileText, X } from "lucide-react";

// A new component for the Edit Election form's sidebar: unlike the
// module's existing read-only ElectionDocumentsCard.jsx (download-only
// list), this mockup needs an upload dropzone plus a removable-file list,
// so it's built as its own sibling component. See README_CHANGES.txt.
export function ElectionDocumentsUploadCard({ documents = [], onDocumentsChange }) {
  const inputRef = React.useRef(null);
  const [isDragging, setIsDragging] = React.useState(false);

  const addFiles = (fileList) => {
    if (!fileList?.length) return;
    const newDocs = Array.from(fileList).map((file, i) => ({
      id: `NEW-${Date.now()}-${i}`, name: file.name, size: `${(file.size / 1024).toFixed(0)} KB`, uploadedOn: new Date().toISOString().slice(0, 10),
    }));
    onDocumentsChange([...documents, ...newDocs]);
  };

  const removeDocument = (id) => onDocumentsChange(documents.filter((d) => d.id !== id));

  return (
    <div className="rounded-lg border border-border bg-white p-5 shadow-card">
      <h3 className="text-sm font-semibold text-ink">Documents &amp; Attachments</h3>
      <div
        onClick={() => inputRef.current?.click()}
        onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
        onDragLeave={() => setIsDragging(false)}
        onDrop={(e) => { e.preventDefault(); setIsDragging(false); addFiles(e.dataTransfer.files); }}
        role="button" tabIndex={0}
        className={`mt-3 flex cursor-pointer flex-col items-center justify-center gap-2 rounded-lg border-2 border-dashed px-4 py-6 text-center transition-colors ${
          isDragging ? "border-interactive-500 bg-interactive-50" : "border-border bg-surface-canvas"
        }`}
      >
        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-interactive-50 text-interactive-600">
          <UploadCloud className="h-4 w-4" />
        </span>
        <p className="text-xs font-medium text-ink">Drag and drop or click to upload</p>
        <p className="text-xs text-ink-subtle">PDF, DOC, DOCX (Max 10MB)</p>
        <input ref={inputRef} type="file" multiple className="hidden" onChange={(e) => addFiles(e.target.files)} />
      </div>
      {documents.length > 0 && (
        <ul className="mt-3 flex flex-col gap-2">
          {documents.map((doc) => (
            <li key={doc.id} className="flex items-center justify-between gap-2 rounded-md border border-border px-3 py-2">
              <span className="flex items-center gap-2 text-sm text-ink">
                <FileText className="h-4 w-4 shrink-0 text-ink-subtle" />
                <span>
                  <span className="block font-medium">{doc.name}</span>
                  <span className="block text-xs text-ink-subtle">{doc.size}</span>
                </span>
              </span>
              <button type="button" onClick={() => removeDocument(doc.id)} className="text-ink-subtle hover:text-danger-600" aria-label="Remove document">
                <X className="h-4 w-4" />
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
