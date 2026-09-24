"use client";

import { useState } from "react";
import { Plus, Trash2, CircleCheck } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function DynamicListField({ label, required, helperText, placeholder, items = [], onAdd, onRemove, bulletIcon = "check" }) {
  const [value, setValue] = useState("");

  const handleAdd = () => {
    if (!value.trim()) return;
    onAdd(value);
    setValue("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleAdd();
    }
  };

  return (
    <div>
      <label className="mb-1 block text-sm font-medium text-ink">{label} {required && <span className="text-danger-500">*</span>}</label>
      {helperText && <p className="mb-2 text-xs text-ink-subtle">{helperText}</p>}
      <div className="flex gap-2">
        <input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          className="h-10 flex-1 rounded-md border border-border bg-white px-3 text-sm text-ink placeholder:text-ink-subtle focus:outline-none focus:ring-2 focus:ring-interactive-500/20 focus:border-interactive-500"
        />
        <Button type="button" variant="secondary" size="sm" leftIcon={<Plus className="h-3.5 w-3.5" />} onClick={handleAdd}>
          Add
        </Button>
      </div>
      {items.length > 0 && (
        <ul className="mt-3 flex flex-col gap-2">
          {items.map((item, i) => (
            <li key={i} className="flex items-center justify-between gap-2 text-sm">
              <span className="flex items-center gap-2 text-ink-muted">
                {bulletIcon === "check" ? <CircleCheck className="h-4 w-4 shrink-0 text-success-500" /> : <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-ink-subtle" />}
                {item}
              </span>
              <button type="button" onClick={() => onRemove(i)} className="shrink-0 text-ink-subtle hover:text-danger-600" aria-label={`Remove ${item}`}>
                <Trash2 className="h-3.5 w-3.5" />
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
