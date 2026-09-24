"use client";

import { Mail, MessageSquare } from "lucide-react";
import { cn } from "@/lib/utils";
import { Select, Textarea } from "@/components/ui/Input";
import { TEMPLATE_CATEGORY_OPTIONS } from "@/lib/mock/vmTemplatesMockData";

export function TemplateInformationSection({ form, setField }) {
  return (
    <div className="rounded-lg border border-border bg-white p-6 shadow-card">
      <h3 className="mb-4 text-base font-semibold text-ink">1. Template Information</h3>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <div className="mb-1.5 flex items-center justify-between">
            <label className="text-sm font-medium text-ink">
              Template Name <span className="text-danger-500">*</span>
            </label>
            <span className="text-xs text-ink-subtle">{form.templateName.length}/100</span>
          </div>
          <input
            value={form.templateName} maxLength={100} onChange={(e) => setField("templateName", e.target.value)}
            placeholder="Enter template name"
            className="h-10 w-full rounded-md border border-border bg-white px-3 text-sm text-ink placeholder:text-ink-subtle focus:outline-none focus:ring-2 focus:ring-interactive-500/20 focus:border-interactive-500"
          />
        </div>

        <div>
          <label className="mb-1.5 block text-sm font-medium text-ink">
            Template Type <span className="text-danger-500">*</span>
          </label>
          <div className="flex gap-2">
            <button
              type="button" onClick={() => setField("templateType", "email")}
              className={cn(
                "flex flex-1 items-center justify-center gap-2 rounded-md border px-3 py-2.5 text-sm font-medium transition-colors",
                form.templateType === "email" ? "border-success-500 bg-success-50/60 text-success-700" : "border-border text-ink-muted hover:bg-surface-canvas"
              )}
            >
              <Mail className="h-4 w-4" /> Email Template
            </button>
            <button
              type="button" onClick={() => setField("templateType", "sms")}
              className={cn(
                "flex flex-1 items-center justify-center gap-2 rounded-md border px-3 py-2.5 text-sm font-medium transition-colors",
                form.templateType === "sms" ? "border-success-500 bg-success-50/60 text-success-700" : "border-border text-ink-muted hover:bg-surface-canvas"
              )}
            >
              <MessageSquare className="h-4 w-4" /> SMS Template
            </button>
          </div>
        </div>
      </div>

      <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2">
        <Select label="Category" required value={form.category} onChange={(e) => setField("category", e.target.value)}>
          <option value="">Select category</option>
          {TEMPLATE_CATEGORY_OPTIONS.map((c) => <option key={c}>{c}</option>)}
        </Select>

        <div>
          <div className="mb-1.5 flex items-center justify-between">
            <label className="text-sm font-medium text-ink">Purpose (Optional)</label>
            <span className="text-xs text-ink-subtle">{form.purpose.length}/100</span>
          </div>
          <input
            value={form.purpose} maxLength={100} onChange={(e) => setField("purpose", e.target.value)}
            placeholder="E.g., Invitation, Reminder, Welcome"
            className="h-10 w-full rounded-md border border-border bg-white px-3 text-sm text-ink placeholder:text-ink-subtle focus:outline-none focus:ring-2 focus:ring-interactive-500/20 focus:border-interactive-500"
          />
        </div>
      </div>

      <div className="mt-5">
        <div className="mb-1.5 flex items-center justify-between">
          <label className="text-sm font-medium text-ink">Description (Optional)</label>
          <span className="text-xs text-ink-subtle">{form.description.length}/255</span>
        </div>
        <Textarea
          value={form.description} maxLength={255} onChange={(e) => setField("description", e.target.value)}
          placeholder="Enter a brief description about this template" rows={3}
        />
      </div>
    </div>
  );
}
