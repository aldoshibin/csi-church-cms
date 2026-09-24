"use client";

import { UserRound, Upload } from "lucide-react";

export function MemberPhotoPanel({ photoName, onPhotoChange }) {
  const handlePhoto = (e) => {
    const file = e.target.files?.[0];
    if (file) onPhotoChange(file.name);
  };

  return (
    <div className="rounded-lg border border-border bg-white p-4 shadow-card">
      <h3 className="mb-1 text-sm font-semibold text-ink">Profile Photo</h3>
      <p className="mb-4 text-xs text-ink-subtle">Upload a profile photo or avatar.</p>
      <div className="flex flex-col items-center gap-3 rounded-lg border-2 border-dashed border-border px-4 py-6 text-center">
        <span className="flex h-16 w-16 items-center justify-center rounded-full bg-success-50">
          <UserRound className="h-8 w-8 text-success-500" />
        </span>
        <label className="flex cursor-pointer items-center gap-2 rounded-md border border-border bg-white px-3 py-2 text-sm font-medium text-ink hover:bg-surface-canvas">
          <Upload className="h-4 w-4" /> Upload Photo
          <input type="file" className="hidden" accept=".jpg,.jpeg,.png,.gif" onChange={handlePhoto} />
        </label>
        <p className="text-xs text-ink-subtle">{photoName || "or drag and drop"}</p>
        <p className="text-xs text-ink-subtle">JPG, PNG or GIF (Max. 2MB)</p>
      </div>
    </div>
  );
}
