"use client";

import { UploadCloud, FileCheck2 } from "lucide-react";

export function UploadFileSection({ file, setFile }) {
  const onFileChange = (e) => {
    const selected = e.target.files?.[0];
    if (selected) setFile(selected);
  };

  return (
    <div className="rounded-lg border border-border bg-white p-6 shadow-card">
      <div className="flex items-center gap-2">
        <UploadCloud className="h-4 w-4 text-interactive-600" />
        <h3 className="text-base font-semibold text-ink">Upload File</h3>
      </div>
      <label className="mt-4 flex h-44 w-full cursor-pointer flex-col items-center justify-center gap-2 rounded-md border-2 border-dashed border-border text-center hover:bg-surface-canvas">
        <input type="file" className="hidden" onChange={onFileChange} accept=".pdf,.jpg,.jpeg,.png,.doc,.docx" />
        {file ? (
          <>
            <FileCheck2 className="h-8 w-8 text-success-600" />
            <span className="text-sm font-medium text-ink">{file.name}</span>
            <span className="text-xs text-ink-subtle">Click to replace file</span>
          </>
        ) : (
          <>
            <UploadCloud className="h-8 w-8 text-ink-subtle" />
            <span className="text-sm font-medium text-ink">Drag and drop your file here</span>
            <span className="text-xs text-ink-subtle">or</span>
            <span className="rounded-md border border-border bg-white px-4 py-1.5 text-sm font-medium text-ink shadow-sm">Browse Files</span>
            <span className="mt-1 text-xs text-ink-subtle">Supports: PDF, JPG, PNG, DOC, DOCX (Max. 10 MB)</span>
          </>
        )}
      </label>
    </div>
  );
}
