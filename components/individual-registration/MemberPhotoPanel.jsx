"use client";

import * as React from "react";
import { User, Upload, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/Button";


export default function MemberPhotoPanel({ photoPreviewUrl, setPhotoFile, clearPhoto }) {
  const inputRef = React.useRef(null);

  return (
    <section className="rounded-lg border border-border bg-white p-6 shadow-card">
      <h2 className="mb-4 font-display text-base font-semibold text-ink">Member Photo</h2>

      <div className="mb-4 flex items-center gap-3">
        <div className="flex h-14 w-14 items-center justify-center overflow-hidden rounded-full bg-surface-muted text-ink-subtle">
          {photoPreviewUrl ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={photoPreviewUrl} alt="Member preview" className="h-full w-full object-cover" />
          ) : (
            <User className="h-7 w-7" />
          )}
        </div>
        <div>
          <p className="text-sm font-semibold text-ink">{photoPreviewUrl ? "Photo selected" : "No photo added"}</p>
          <p className="text-xs text-ink-subtle">Upload a clear photo of the member</p>
        </div>
      </div>

      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={(e) => {
          const file = e.target.files?.[0];
          if (file) setPhotoFile(file);
        }}
      />

      <div className="flex gap-2">
        <Button type="button" variant="secondary" size="sm" leftIcon={<Upload className="h-4 w-4" />} onClick={() => inputRef.current?.click()}>
          Upload Photo
        </Button>
        <Button type="button" variant="ghost" size="sm" leftIcon={<Trash2 className="h-4 w-4" />} onClick={clearPhoto} disabled={!photoPreviewUrl}>
          Remove
        </Button>
      </div>
    </section>
  );
}
