"use client";

import { useState } from "react";
import { GripVertical, Pencil, Trash2, Plus } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function ContentOutlineSection({ outline = [], onAdd, onRemove }) {
  const [value, setValue] = useState("");

  const handleAdd = () => {
    if (!value.trim()) return;
    onAdd(value);
    setValue("");
  };

  return (
    <div>
      <div className="mb-3 flex items-center justify-between">
        <div>
          <h3 className="text-base font-semibold text-ink">3. Content Outline</h3>
          <p className="text-xs text-ink-subtle">Add the main points or outline of the lesson.</p>
        </div>
        <Button type="button" variant="secondary" size="sm" leftIcon={<Plus className="h-3.5 w-3.5" />} onClick={() => setValue(" ")}>
          Add Outline Point
        </Button>
      </div>

      {value !== "" && (
        <div className="mb-3 flex gap-2">
          <input
            autoFocus
            value={value.trim() === "" ? "" : value}
            onChange={(e) => setValue(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleAdd()}
            placeholder="Enter outline point"
            className="h-10 flex-1 rounded-md border border-border bg-white px-3 text-sm text-ink placeholder:text-ink-subtle focus:outline-none focus:ring-2 focus:ring-interactive-500/20 focus:border-interactive-500"
          />
          <Button type="button" size="sm" onClick={handleAdd}>Save</Button>
        </div>
      )}

      <div className="flex flex-col gap-2">
        {outline.map((point, i) => (
          <div key={point.id} className="flex items-center gap-3 rounded-md border border-border bg-surface-canvas px-3 py-2.5">
            <GripVertical className="h-4 w-4 shrink-0 cursor-grab text-ink-subtle" />
            <span className="flex-1 text-sm text-ink">{i + 1}. {point.label}</span>
            <button type="button" className="text-ink-subtle hover:text-ink" aria-label="Edit outline point">
              <Pencil className="h-3.5 w-3.5" />
            </button>
            <button type="button" onClick={() => onRemove(point.id)} className="text-ink-subtle hover:text-danger-600" aria-label="Remove outline point">
              <Trash2 className="h-3.5 w-3.5" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
