"use client";

import { Target, Trash2, Plus } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function LearningObjectivesSection({ objectives = [], onChange, onAdd, onRemove }) {
  return (
    <div className="rounded-lg border border-border bg-white p-6 shadow-card">
      <h3 className="mb-1 flex items-center gap-2 text-base font-semibold text-ink">
        <Target className="h-4 w-4 text-interactive-600" /> Learning Objectives
      </h3>
      <p className="mb-4 text-xs text-ink-subtle">Add key learning objectives for this lesson</p>
      <div className="flex flex-col gap-3">
        {objectives.map((obj, i) => (
          <div key={i} className="flex items-center gap-3">
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-interactive-50 text-xs font-semibold text-interactive-600">{i + 1}</span>
            <input
              value={obj} onChange={(e) => onChange(i, e.target.value)}
              placeholder="Enter learning objective"
              className="h-10 flex-1 rounded-md border border-border bg-white px-3 text-sm text-ink placeholder:text-ink-subtle focus:outline-none focus:ring-2 focus:ring-interactive-500/20 focus:border-interactive-500"
            />
            <button type="button" onClick={() => onRemove(i)} className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-danger-200 text-danger-500 hover:bg-danger-50" aria-label="Remove objective">
              <Trash2 className="h-4 w-4" />
            </button>
          </div>
        ))}
      </div>
      <Button type="button" variant="secondary" size="sm" className="mt-4" leftIcon={<Plus className="h-3.5 w-3.5" />} onClick={onAdd}>
        Add Objective
      </Button>
    </div>
  );
}
