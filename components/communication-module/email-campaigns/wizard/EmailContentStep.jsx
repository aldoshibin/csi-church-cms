"use client";

import { useState } from "react";
import {
  Bold, Italic, Underline, Strikethrough, Quote, List, ListOrdered, ChevronDown, Link2, Image as ImageIcon, Table as TableIcon,
} from "lucide-react";

const TOOLS = [Bold, Italic, Underline, Strikethrough, Quote, List, ListOrdered];

export function EmailContentStep({ form, setField }) {
  const [activeTool, setActiveTool] = useState(null);

  return (
    <div className="rounded-lg border border-border bg-white p-6 shadow-card">
      <h3 className="text-base font-semibold text-ink">Email Content</h3>
      <p className="mt-0.5 text-xs text-ink-subtle">Write the body of your email using the selected template as a starting point.</p>

      <div className="mt-4 rounded-lg border border-border bg-surface-canvas/40 px-4 py-3 text-sm text-ink-muted">
        <span className="font-medium text-ink">Subject:</span> {form.subjectLine || "(no subject set)"}
        {form.preheaderText && (
          <>
            <br /><span className="font-medium text-ink">Preheader:</span> {form.preheaderText}
          </>
        )}
      </div>

      <div className="mt-4 overflow-hidden rounded-lg border border-border">
        <div className="flex flex-wrap items-center gap-1 border-b border-border bg-surface-canvas px-2 py-1.5">
          <button type="button" className="flex h-8 items-center gap-1 rounded px-2 text-sm text-ink-muted hover:bg-white">
            Paragraph <ChevronDown className="h-3.5 w-3.5 opacity-60" />
          </button>
          <span className="mx-1 h-5 w-px bg-border" />
          {TOOLS.map((Icon, i) => (
            <button
              key={i} type="button" onClick={() => setActiveTool(i)}
              className={`flex h-8 w-8 items-center justify-center rounded text-ink-muted hover:bg-white ${activeTool === i ? "bg-white text-interactive-600" : ""}`}
            >
              <Icon className="h-4 w-4" />
            </button>
          ))}
          <span className="mx-1 h-5 w-px bg-border" />
          <button type="button" className="flex h-8 w-8 items-center justify-center rounded text-ink-muted hover:bg-white"><Link2 className="h-4 w-4" /></button>
          <button type="button" className="flex h-8 w-8 items-center justify-center rounded text-ink-muted hover:bg-white"><ImageIcon className="h-4 w-4" /></button>
          <button type="button" className="flex h-8 w-8 items-center justify-center rounded text-ink-muted hover:bg-white"><TableIcon className="h-4 w-4" /></button>
        </div>
        <textarea
          value={form.emailBody} maxLength={5000}
          onChange={(e) => setField("emailBody", e.target.value)}
          rows={12}
          placeholder="Write your email content here..."
          className="w-full resize-none px-3 py-3 text-sm text-ink placeholder:text-ink-subtle focus:outline-none"
        />
      </div>
    </div>
  );
}
