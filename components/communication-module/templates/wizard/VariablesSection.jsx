"use client";

import { Plus } from "lucide-react";
import { TEMPLATE_VARIABLE_TOKENS } from "@/lib/mock/vmTemplatesMockData";

export function VariablesSection() {
  return (
    <div className="rounded-lg border border-border bg-white p-6 shadow-card">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <h3 className="text-base font-semibold text-ink">2. Variables</h3>
          <p className="mt-0.5 text-xs text-ink-subtle">Add variables to personalize your message. These will be replaced with actual data when sending.</p>
        </div>
        <button type="button" className="flex h-9 shrink-0 items-center gap-2 rounded-md border border-border px-3 text-sm font-medium text-ink-muted hover:bg-surface-canvas">
          <Plus className="h-4 w-4" /> Add Variable
        </button>
      </div>

      <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-7">
        {TEMPLATE_VARIABLE_TOKENS.map((v) => (
          <div key={v.token} className="rounded-lg border border-border bg-surface-canvas/40 px-3 py-2.5 text-center">
            <p className="text-xs font-semibold text-interactive-600">{v.token}</p>
            <p className="mt-0.5 text-[11px] text-ink-subtle">{v.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
