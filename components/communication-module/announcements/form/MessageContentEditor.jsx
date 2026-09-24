"use client";

import { useState } from "react";
import {
  Bold, Italic, Underline, Strikethrough, Quote, List, ListOrdered, ChevronDown, Link2, Image as ImageIcon, Table as TableIcon,
} from "lucide-react";

const TOOLS = [Bold, Italic, Underline, Strikethrough, Quote, List, ListOrdered];

export function MessageContentEditor({ value, onChange }) {
  const [activeTool, setActiveTool] = useState(null);

  return (
    <div className="rounded-lg border border-border bg-white p-6 shadow-card">
      <div className="mb-1.5 flex items-center justify-between">
        <label className="text-sm font-medium text-ink">
          Message Content <span className="text-danger-500">*</span>
        </label>
        <span className="text-xs text-ink-subtle">{value.length}/5000</span>
      </div>
      <p className="mb-3 text-xs text-ink-subtle">Write your announcement details.</p>

      <div className="overflow-hidden rounded-lg border border-border">
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
          <button type="button" className="flex h-8 items-center gap-1 rounded px-1 text-sm text-ink-muted hover:bg-white">
            <List className="h-4 w-4" /> <ChevronDown className="h-3.5 w-3.5 opacity-60" />
          </button>
          <span className="mx-1 h-5 w-px bg-border" />
          <button type="button" className="flex h-8 w-8 items-center justify-center rounded text-ink-muted hover:bg-white"><Link2 className="h-4 w-4" /></button>
          <button type="button" className="flex h-8 w-8 items-center justify-center rounded text-ink-muted hover:bg-white"><ImageIcon className="h-4 w-4" /></button>
          <button type="button" className="flex h-8 w-8 items-center justify-center rounded text-ink-muted hover:bg-white"><TableIcon className="h-4 w-4" /></button>
        </div>
        <textarea
          value={value} maxLength={5000}
          onChange={(e) => onChange(e.target.value)}
          rows={7}
          placeholder="Type your announcement here..."
          className="w-full resize-none px-3 py-3 text-sm text-ink placeholder:text-ink-subtle focus:outline-none"
        />
      </div>
    </div>
  );
}
