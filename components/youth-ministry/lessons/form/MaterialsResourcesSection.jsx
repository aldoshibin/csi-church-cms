"use client";

import { Paperclip, Upload } from "lucide-react";

export function MaterialsResourcesSection({ fileNames = [], onAddFile }) {
  const handleChange = (e) => {
    const file = e.target.files?.[0];
    if (file) onAddFile(file.name);
  };

  return (
    <div className="rounded-lg border border-border bg-white p-4 shadow-card">
      <h3 className="mb-1 flex items-center gap-2 text-sm font-semibold text-ink">
        <Paperclip className="h-4 w-4 text-interactive-600" /> Materials &amp; Resources
      </h3>
      <p className="mb-3 text-xs text-ink-subtle">Upload materials and resources for this lesson</p>
      <label className="flex h-[110px] w-full cursor-pointer flex-col items-center justify-center gap-1.5 rounded-lg border-2 border-dashed border-border text-ink-subtle hover:border-interactive-300 hover:bg-interactive-50">
        <Upload className="h-5 w-5" />
        <span className="text-xs">
          <span className="font-medium text-interactive-600">Click to upload</span> or drag and drop
        </span>
        <span className="text-[11px] text-ink-subtle">PDF, DOC, DOCX, PPT, JPG, PNG up to 10MB</span>
        <input type="file" className="hidden" onChange={handleChange} />
      </label>
      {fileNames.length > 0 && (
        <ul className="mt-3 flex flex-col gap-1.5">
          {fileNames.map((name) => (
            <li key={name} className="truncate text-xs text-ink-muted">{name}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
