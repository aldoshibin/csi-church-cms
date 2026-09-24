"use client";

import { useState } from "react";
import { ImageIcon } from "lucide-react";
import { cn } from "@/lib/utils";

const TABS = ["Email", "SMS"];

export function TemplatePreviewCard({ form }) {
  const [tab, setTab] = useState(form.templateType === "sms" ? "SMS" : "Email");

  return (
    <div className="rounded-lg border border-border bg-white p-5 shadow-card">
      <h3 className="mb-3 text-base font-semibold text-ink">Template Preview</h3>

      <div className="flex gap-5 border-b border-border">
        {TABS.map((t) => (
          <button
            key={t} type="button" onClick={() => setTab(t)}
            className={cn(
              "border-b-2 pb-2 text-sm font-medium transition-colors",
              tab === t ? "border-interactive-500 text-interactive-600" : "border-transparent text-ink-subtle hover:text-ink"
            )}
          >
            {t}
          </button>
        ))}
      </div>

      {tab === "Email" ? (
        <div className="mt-4 rounded-lg border border-border p-4">
          <p className="text-xs text-ink-subtle">To: <span className="text-ink-muted">{"{{Recipient Email}}"}</span></p>
          <p className="mt-1 text-xs text-ink-subtle">Subject: <span className="font-medium text-ink">{form.subject || "{{Subject}}"}</span></p>
          <div className="mt-3 flex items-start gap-3 rounded-lg bg-surface-canvas/50 p-3">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-surface-muted text-ink-subtle">
              <ImageIcon className="h-5 w-5" />
            </span>
            <div className="flex-1 space-y-1.5">
              <span className="block h-2 w-3/4 rounded bg-surface-muted" />
              <span className="block h-2 w-1/2 rounded bg-surface-muted" />
            </div>
          </div>
          <p className="mt-4 text-sm text-ink-muted">Hi {"{{First Name}}"},</p>
          <p className="mt-3 text-sm text-ink-muted">This is a preview of your email template.</p>
          <p className="mt-1 text-sm text-ink-muted">The content will appear here.</p>
          <p className="mt-4 text-sm text-ink-muted">Blessings,<br />{"{{Church Name}}"}</p>
        </div>
      ) : (
        <div className="mt-4 flex flex-col items-center rounded-lg border border-border p-6">
          <div className="max-w-[220px] rounded-xl rounded-tl-sm bg-surface-muted px-3 py-2.5 text-sm text-ink">
            {form.content || "Your SMS template will appear here."}
          </div>
        </div>
      )}
    </div>
  );
}
