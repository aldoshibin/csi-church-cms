"use client";

import { useState } from "react";
import { Search, Users2, X, ListChecks } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { VOLUNTEERS_LIST_MOCK } from "@/lib/mock/volunteersMockData";

const ASSIGN_TO_OPTIONS = [
  { key: "manual", label: "Select Volunteers Manually", helper: "Choose volunteers individually" },
  { key: "role", label: "Assign by Role", helper: "Assign volunteers based on role" },
  { key: "open", label: "Open to All Available", helper: "Allow any available volunteers to sign up" },
];

export function AssignVolunteersSection({ form, setField, addVolunteer, removeVolunteer }) {
  const [query, setQuery] = useState("");

  const matches = query.trim()
    ? VOLUNTEERS_LIST_MOCK.filter((v) => v.name.toLowerCase().includes(query.toLowerCase())).slice(0, 5)
    : [];

  return (
    <div className="rounded-lg border border-border bg-white p-6 shadow-card">
      <h3 className="mb-4 text-base font-semibold text-ink">Assign Volunteers</h3>

      <p className="mb-2 text-sm font-medium text-ink">Assign To <span className="text-danger-500">*</span></p>
      <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:gap-6">
        {ASSIGN_TO_OPTIONS.map((opt) => (
          <label key={opt.key} className="flex flex-1 cursor-pointer items-start gap-2.5">
            <input
              type="radio" name="assignTo" checked={form.assignTo === opt.key}
              onChange={() => setField("assignTo", opt.key)}
              className="mt-0.5 h-4 w-4 shrink-0 border-border text-success-600 focus:ring-success-500"
            />
            <span>
              <span className="block text-sm font-medium text-ink">{opt.label}</span>
              <span className="mt-0.5 block text-xs text-ink-subtle">{opt.helper}</span>
            </span>
          </label>
        ))}
      </div>

      {form.assignTo === "manual" && (
        <>
          <p className="mb-1.5 text-sm font-medium text-ink">Select Volunteers <span className="text-danger-500">*</span></p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <div className="relative flex-1">
              <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-subtle" />
              <input
                value={query} onChange={(e) => setQuery(e.target.value)}
                placeholder="Search volunteers by name, mobile or email..."
                className="h-10 w-full rounded-md border border-border bg-white pl-9 pr-3 text-sm text-ink placeholder:text-ink-subtle focus:outline-none focus:ring-2 focus:ring-interactive-500/20 focus:border-interactive-500"
              />
              {matches.length > 0 && (
                <div className="absolute z-10 mt-1 w-full rounded-md border border-border bg-white p-1.5 shadow-elevated">
                  {matches.map((v) => (
                    <button
                      key={v.id} type="button"
                      onClick={() => { addVolunteer({ id: v.id, name: v.name }); setQuery(""); }}
                      className="flex w-full items-center gap-2 rounded px-2.5 py-2 text-left text-sm text-ink-muted hover:bg-surface-canvas hover:text-ink"
                    >
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-interactive-50 text-[10px] font-semibold text-interactive-600">
                        {v.name.split(" ").map((n) => n[0]).slice(0, 2).join("")}
                      </span>
                      {v.name} <span className="text-xs text-ink-subtle">({v.id})</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
            <Button type="button" variant="secondary" leftIcon={<ListChecks className="h-4 w-4" />}>Choose from List</Button>
          </div>

          <div className="mt-4 rounded-lg border border-dashed border-border p-4">
            {form.selectedVolunteers.length === 0 ? (
              <div className="flex flex-col items-center justify-center gap-2 py-4 text-center">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-interactive-50 text-interactive-600">
                  <Users2 className="h-5 w-5" />
                </span>
                <p className="text-sm font-medium text-ink">No volunteers selected yet.</p>
                <p className="text-xs text-ink-subtle">Search and add volunteers to this assignment.</p>
              </div>
            ) : (
              <div className="flex flex-wrap gap-2">
                {form.selectedVolunteers.map((v) => (
                  <span key={v.id} className="flex items-center gap-1.5 rounded-full bg-interactive-50 px-3 py-1.5 text-sm font-medium text-interactive-600">
                    {v.name}
                    <button type="button" onClick={() => removeVolunteer(v.id)} aria-label={`Remove ${v.name}`}>
                      <X className="h-3.5 w-3.5" />
                    </button>
                  </span>
                ))}
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
}
