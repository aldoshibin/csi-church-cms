"use client";

import { Upload, ImageIcon } from "lucide-react";

export function LessonThumbnailPanel({ thumbnailName, onUpload }) {
  const handleChange = (e) => {
    const file = e.target.files?.[0];
    if (file) onUpload(file.name);
  };

  return (
    <div className="rounded-lg border border-border bg-white p-4 shadow-card">
      <h3 className="mb-3 text-sm font-semibold text-ink">Lesson Thumbnail</h3>
      <div className="flex h-[160px] flex-col items-center justify-center gap-2 rounded-lg border-2 border-dashed border-border bg-surface-canvas text-ink-subtle">
        <ImageIcon className="h-8 w-8" />
        {thumbnailName && <p className="px-3 text-center text-xs text-ink-muted">{thumbnailName}</p>}
      </div>
      <label className="mt-3 flex w-full cursor-pointer items-center justify-center gap-2 rounded-md border border-border py-2 text-sm font-medium text-ink-muted hover:bg-surface-canvas">
        <Upload className="h-4 w-4" /> Upload Image
        <input type="file" className="hidden" accept=".jpg,.jpeg,.png" onChange={handleChange} />
      </label>
      <p className="mt-2 text-center text-xs text-ink-subtle">Recommended size: 1280 x 720px</p>
      <p className="text-center text-xs text-ink-subtle">Max file size: 2MB (JPG, PNG)</p>
    </div>
  );
}
