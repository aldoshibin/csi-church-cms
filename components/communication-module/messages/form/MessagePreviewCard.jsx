"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

const TABS = ["In-App Preview", "Email Preview", "SMS Preview"];

export function MessagePreviewCard({ form }) {
  const [tab, setTab] = useState(TABS[0]);

  return (
    <div className="rounded-lg border border-border bg-white p-5 shadow-card">
      <h3 className="mb-4 text-base font-semibold text-ink">Preview</h3>

      <div className="flex flex-wrap gap-4 border-b border-border">
        {TABS.map((t) => (
          <button
            key={t} type="button" onClick={() => setTab(t)}
            className={cn(
              "border-b-2 pb-2 text-xs font-medium transition-colors",
              tab === t ? "border-interactive-500 text-interactive-600" : "border-transparent text-ink-subtle hover:text-ink"
            )}
          >
            {t}
          </button>
        ))}
      </div>

      <div className="mt-4 rounded-lg border border-border bg-surface-canvas/40 p-4">
        <div className="flex items-start gap-3">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#F3E8FF] text-xs font-semibold text-[#7C3AED]">CI</span>
          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-2">
              <p className="text-sm font-semibold text-ink">CSI St. John's Church</p>
              <span className="text-xs text-ink-subtle">Just now</span>
            </div>
            <p className="mt-2 text-sm font-semibold text-ink">{form.subject || "Subject will appear here"}</p>
            <p className="mt-1 text-xs text-ink-subtle">
              {tab === "Email Preview"
                ? "This is how your message will appear in the inbox."
                : tab === "SMS Preview"
                ? "This is how your message will appear as a text."
                : "This is how your message will appear in the app."}
            </p>
            <p className="mt-1 text-xs text-ink-subtle">Message content will be displayed to the selected audience.</p>
          </div>
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md bg-surface-muted text-ink-subtle">
            <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5"><rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="1.5" /><circle cx="8.5" cy="8.5" r="1.5" fill="currentColor" /><path d="M21 15l-5-5-11 11" stroke="currentColor" strokeWidth="1.5" /></svg>
          </div>
        </div>
      </div>
    </div>
  );
}
