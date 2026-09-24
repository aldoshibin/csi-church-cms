"use client";

import { useRef } from "react";
import { ImagePlus } from "lucide-react";
import { Input, Textarea, Select } from "@/components/ui/Input";
import { MINISTRY_CATEGORY_OPTIONS } from "@/lib/mock/ministriesTeamsMockData";

export function MinistryInformationSection({ form, setField }) {
  const inputRef = useRef(null);
  const description = form.description ?? "";

  return (
    <div className="rounded-lg border border-border bg-white p-6 shadow-card">
      <h3 className="mb-4 text-base font-semibold text-ink">Ministry Information</h3>
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-[1fr_1fr_auto]">
        <Input label="Ministry Name" required placeholder="Enter ministry name" value={form.name} onChange={(e) => setField("name", e.target.value)} />
        <Select label="Category" required value={form.category} onChange={(e) => setField("category", e.target.value)}>
          <option value="">Select category</option>
          {MINISTRY_CATEGORY_OPTIONS.map((c) => <option key={c}>{c}</option>)}
        </Select>

        <div className="row-span-2 lg:row-start-1">
          <p className="mb-1.5 block text-sm font-medium text-ink opacity-0 select-none">Icon</p>
          <div
            onClick={() => inputRef.current?.click()}
            onDragOver={(e) => e.preventDefault()}
            onDrop={(e) => { e.preventDefault(); const f = e.dataTransfer.files?.[0]; if (f) setField("iconName", f.name); }}
            className="flex h-[104px] w-full cursor-pointer flex-col items-center justify-center gap-2 rounded-lg border-2 border-dashed border-border bg-surface-canvas px-4 text-center hover:bg-surface-muted lg:w-40"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#F3E8FF] text-[#7C3AED]">
              <ImagePlus className="h-5 w-5" />
            </span>
            <p className="text-xs font-semibold text-ink">Upload Ministry Icon</p>
            <input ref={inputRef} type="file" accept=".png,.jpg,.jpeg" className="hidden" onChange={(e) => setField("iconName", e.target.files?.[0]?.name ?? "")} />
          </div>
          <p className="mt-1 text-center text-[11px] text-ink-subtle">
            {form.iconName || "Click to upload or drag and drop"}<br />PNG, JPG up to 2MB
          </p>
        </div>

        <div className="lg:col-span-2">
          <Textarea
            label="Description" required rows={4} maxLength={500}
            placeholder="Enter ministry description, purpose and goals..."
            value={description} onChange={(e) => setField("description", e.target.value)}
          />
          <p className="mt-1 text-right text-xs text-ink-subtle">{description.length}/500</p>
        </div>
      </div>
    </div>
  );
}
