"use client";

import { useRef } from "react";
import { UploadCloud, X, FileText } from "lucide-react";

export function CwAttachmentsUpload({ attachments, onAdd, onRemove }) {
  const inputRef = useRef(null);

  const handleFiles = (fileList) => {
    const files = Array.from(fileList).map((f) => ({ name: f.name, size: formatSize(f.size) }));
    if (files.length) onAdd(files);
  };

  return (
    <div className="rounded-lg border border-border bg-white p-6 shadow-card">
      <h3 className="text-base font-semibold text-ink">Attachments</h3>
      <p className="mt-0.5 text-sm text-ink-subtle">Upload any relevant documents, files or media.</p>

      <div
        onDragOver={(e) => e.preventDefault()}
        onDrop={(e) => { e.preventDefault(); handleFiles(e.dataTransfer.files); }}
        onClick={() => inputRef.current?.click()}
        className="mt-4 flex cursor-pointer flex-col items-center justify-center gap-2 rounded-lg border-2 border-dashed border-border px-4 py-8 text-center hover:bg-surface-canvas"
      >
        <UploadCloud className="h-6 w-6 text-interactive-600" />
        <p className="text-sm text-ink-muted">
          Drag and drop files here or <span className="font-medium text-interactive-600">click to browse</span>
        </p>
        <input ref={inputRef} type="file" multiple className="hidden" accept=".jpg,.jpeg,.png,.pdf,.doc,.docx" onChange={(e) => handleFiles(e.target.files)} />
        <p className="text-xs text-ink-subtle">Supported formats: JPG, PNG, PDF, DOC, DOCX (Max. 10MB)</p>
      </div>

      {attachments.length > 0 && (
        <div className="mt-4 flex flex-col gap-2">
          {attachments.map((f) => (
            <div key={f.name} className="flex items-center gap-3 rounded-lg border border-border px-3 py-2.5">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-surface-muted text-ink-subtle">
                <FileText className="h-4 w-4" />
              </span>
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-medium text-ink">{f.name}</p>
                <p className="text-xs text-ink-subtle">{f.size}</p>
              </div>
              <button type="button" onClick={() => onRemove(f.name)} className="text-ink-subtle hover:text-danger-500" aria-label={`Remove ${f.name}`}>
                <X className="h-4 w-4" />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function formatSize(bytes) {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(0)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}
