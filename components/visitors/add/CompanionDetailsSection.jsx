"use client";

import { Plus, Trash2, Users } from "lucide-react";
import { Button } from "@/components/ui/Button";

export default function CompanionDetailsSection({ companionFields, onAdd, onRemove }) {
  return (
    <section className="rounded-lg border border-border bg-white p-6 shadow-card">
      <div className="mb-4 flex items-start justify-between">
        <div>
          <h2 className="font-display text-base font-semibold text-interactive-500">Companion Details (Optional)</h2>
          <p className="text-sm text-ink-subtle">Add family members or friends who visited along (if any).</p>
        </div>
        <Button type="button" size="sm" leftIcon={<Plus className="h-4 w-4" />} onClick={onAdd}>Add Companion</Button>
      </div>

      <div className="overflow-x-auto rounded-md border border-border">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="border-b border-border bg-surface-muted text-left text-xs font-medium uppercase tracking-wide text-ink-subtle">
              <th className="px-4 py-2.5">Name</th>
              <th className="px-4 py-2.5">Relationship</th>
              <th className="px-4 py-2.5">Phone Number</th>
              <th className="px-4 py-2.5 text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {companionFields.length === 0 ? (
              <tr>
                <td colSpan={4} className="px-4 py-10 text-center">
                  <div className="flex flex-col items-center gap-2">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-surface-muted text-ink-subtle">
                      <Users className="h-5 w-5" />
                    </div>
                    <p className="text-sm text-danger-500">No companions added yet.</p>
                  </div>
                </td>
              </tr>
            ) : (
              companionFields.map((c, idx) => (
                <tr key={c.id} className="border-b border-border/60 last:border-0">
                  <td className="px-4 py-3 font-medium text-ink">{c.name}</td>
                  <td className="px-4 py-3 text-ink">{c.relationship || "—"}</td>
                  <td className="px-4 py-3 text-ink">{c.phone || "—"}</td>
                  <td className="px-4 py-3 text-right">
                    <button type="button" onClick={() => onRemove(idx)} className="flex h-8 w-8 items-center justify-center rounded-md text-danger-500 hover:bg-surface-muted">
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      <p className="mt-3 text-xs text-ink-subtle">Showing 1 to {Math.max(companionFields.length, 1)} of {Math.max(companionFields.length, 1)} records</p>
    </section>
  );
}
