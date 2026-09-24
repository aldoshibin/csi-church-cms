"use client";

import { Upload, Cloud } from "lucide-react";

export function EventImagePanel({ imageName, onUpload }) {
  const handleChange = (e) => {
    const file = e.target.files?.[0];
    if (file) onUpload(file.name);
  };

  return (
    <div className="rounded-lg border border-border bg-white p-4 shadow-card">
      <h3 className="mb-3 text-sm font-semibold text-ink">Event Image <span className="font-normal text-ink-subtle">(Optional)</span></h3>
      <label className="flex h-[160px] cursor-pointer flex-col items-center justify-center gap-2 rounded-lg border-2 border-dashed border-border text-ink-subtle hover:border-interactive-300 hover:bg-interactive-50">
        <Cloud className="h-7 w-7" />
        <span className="flex items-center gap-1.5 text-sm font-medium text-ink"><Upload className="h-3.5 w-3.5" /> Upload Image</span>
        {imageName && <span className="px-3 text-center text-xs text-ink-muted">{imageName}</span>}
        <input type="file" className="hidden" accept=".jpg,.jpeg,.png" onChange={handleChange} />
      </label>
      <p className="mt-2 text-center text-xs text-ink-subtle">Recommended size: 1280 x 720px</p>
      <p className="text-center text-xs text-ink-subtle">Max file size: 2MB (JPG, PNG)</p>
    </div>
  );
}
