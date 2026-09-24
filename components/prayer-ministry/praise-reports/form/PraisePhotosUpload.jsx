"use client";

import { useRef } from "react";
import { UploadCloud, X, Image as ImageIcon } from "lucide-react";

export function PraisePhotosUpload({ photos, onAdd, onRemove }) {
  const inputRef = useRef(null);

  const handleFiles = (fileList) => {
    const files = Array.from(fileList).map((f) => ({ name: f.name, size: formatSize(f.size) }));
    if (files.length) onAdd(files);
  };

  return (
    <div>
      <label className="mb-1.5 block text-sm font-medium text-ink">Attach Photos (Optional)</label>
      <div
        onDragOver={(e) => e.preventDefault()}
        onDrop={(e) => { e.preventDefault(); handleFiles(e.dataTransfer.files); }}
        onClick={() => inputRef.current?.click()}
        className="flex cursor-pointer flex-col items-center justify-center gap-1.5 rounded-lg border-2 border-dashed border-border px-4 py-6 text-center hover:bg-surface-canvas"
      >
        <UploadCloud className="h-5 w-5 text-interactive-600" />
        <p className="text-sm text-ink-muted">
          <span className="font-medium text-interactive-600">Click to upload</span> or drag and drop
        </p>
        <input ref={inputRef} type="file" multiple accept=".jpg,.jpeg,.png" className="hidden" onChange={(e) => handleFiles(e.target.files)} />
        <p className="text-xs text-ink-subtle">JPG, PNG (Max. 5MB each)</p>
      </div>
      <p className="mt-1.5 text-xs text-ink-subtle">You can upload up to 3 images</p>
      {photos.length > 0 && (
        <div className="mt-3 flex flex-col gap-2">
          {photos.map((f) => (
            <div key={f.name} className="flex items-center gap-3 rounded-lg border border-border px-3 py-2">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-surface-muted text-ink-subtle">
                <ImageIcon className="h-4 w-4" />
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
