"use client";

import * as React from "react";
import { UploadCloud, FileText, X } from "lucide-react";

// Optional `formatsText` overrides the "Supported formats" line (used by
// the Add New Donation form, whose mockup lists PDF/JPG/PNG only, no
// DOC/DOCX); default text matches every prior usage of this dropzone.
export function ActivityAttachmentsDropzone({ files = [], onFilesChange, formatsText = "Supported formats: PDF, JPG, PNG, DOC, DOCX (Max 10MB)" }) {
  const inputRef = React.useRef(null);
  const [isDragging, setIsDragging] = React.useState(false);

  const addFiles = (fileList) => {
    if (!fileList?.length) return;
    onFilesChange([...files, ...Array.from(fileList)]);
  };

  const removeFile = (index) => {
    onFilesChange(files.filter((_, i) => i !== index));
  };

  return (
    <div>
      <div
        onClick={() => inputRef.current?.click()}
        onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
        onDragLeave={() => setIsDragging(false)}
        onDrop={(e) => { e.preventDefault(); setIsDragging(false); addFiles(e.dataTransfer.files); }}
        role="button" tabIndex={0}
        className={`flex cursor-pointer flex-col items-center justify-center gap-2 rounded-lg border-2 border-dashed px-6 py-10 text-center transition-colors ${
          isDragging ? "border-interactive-500 bg-interactive-50" : "border-border bg-surface-canvas"
        }`}
      >
        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-interactive-50 text-interactive-600">
          <UploadCloud className="h-5 w-5" />
        </span>
        <p className="text-sm font-medium text-ink">Drag and drop files here or click to upload</p>
        <p className="text-xs text-ink-subtle">{formatsText}</p>
        <input
          ref={inputRef} type="file" multiple className="hidden"
          onChange={(e) => addFiles(e.target.files)}
        />
      </div>
      {files.length > 0 && (
        <ul className="mt-3 flex flex-col gap-2">
          {files.map((file, index) => (
            <li key={`${file.name}-${index}`} className="flex items-center justify-between gap-2 rounded-md border border-border bg-white px-3 py-2 text-sm">
              <span className="flex items-center gap-2 text-ink">
                <FileText className="h-4 w-4 shrink-0 text-ink-subtle" />
                {file.name}
              </span>
              <button type="button" onClick={() => removeFile(index)} className="text-ink-subtle hover:text-danger-600" aria-label="Remove file">
                <X className="h-4 w-4" />
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
