"use client";

import { UploadCloud, CheckCircle2 } from "lucide-react";

export function FacilityImageCard({ image, setImage }) {
  const onFileChange = (e) => {
    const selected = e.target.files?.[0];
    if (selected) setImage(selected);
  };

  return (
    <div className="rounded-lg border border-border bg-white p-5 shadow-card">
      <h3 className="text-sm font-semibold text-ink">Facility Image</h3>
      <p className="mt-1 text-xs text-ink-subtle">Upload a clear image of the facility.</p>
      <label className="mt-3 flex h-48 w-full cursor-pointer flex-col items-center justify-center gap-2 rounded-md border-2 border-dashed border-border text-center hover:bg-surface-canvas">
        <input type="file" className="hidden" onChange={onFileChange} accept=".jpg,.jpeg,.png,.webp" />
        {image ? (
          <>
            <CheckCircle2 className="h-7 w-7 text-success-600" />
            <span className="px-4 text-xs font-medium text-ink">{image.name}</span>
            <span className="text-[11px] text-ink-subtle">Click to replace image</span>
          </>
        ) : (
          <>
            <UploadCloud className="h-7 w-7 text-ink-subtle" />
            <span className="text-xs font-medium text-ink">Drag and drop an image here</span>
            <span className="text-[11px] text-ink-subtle">or</span>
            <span className="rounded-md border border-border bg-white px-4 py-1.5 text-xs font-medium text-ink shadow-sm">Choose File</span>
            <span className="mt-1 text-[11px] text-ink-subtle">JPG, PNG or WEBP (Max. 2MB)</span>
          </>
        )}
      </label>
    </div>
  );
}
