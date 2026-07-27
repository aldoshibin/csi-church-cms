"use client";

import { Plus, Trash2, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { FaPeopleGroup } from "react-icons/fa6";

const inputCls =
  "w-full rounded-md border border-border bg-white px-3 py-2 text-sm text-ink placeholder:text-ink-subtle focus:border-interactive-500 focus:outline-none focus:ring-2 focus:ring-interactive-500/10";

export default function CompanionDetailsSection({ form, companionFields, onAdd, onRemove }) {
  const { register } = form;

  return (
    <section className="rounded-lg border border-border bg-white p-6 shadow-card">
      <div className="mb-4 flex items-start justify-between">
        <div>
          <h2 className="font-display text-base font-semibold text-interactive-500">Companion Details (Optional)</h2>
          <p className="text-sm text-ink-subtle">Add family members or friends who visited along (if any).</p>
        </div>
        <Button type="button" size="sm" leftIcon={<Plus className="h-4 w-4" />} onClick={onAdd}>
          Add Companion
        </Button>
      </div>
    
      {/* {companionFields.length > 0 && ( */}
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
              {
               companionFields.length == 0 ? (
              <tr>
                <td colSpan={4} className="px-4 py-10 text-center">
                  <div className="flex flex-col items-center gap-2">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-surface-muted text-ink-subtle">
                      <FaPeopleGroup className="h-5 w-5" />
                    </div>
                    <p className="text-sm text-[#071351]">No companions added yet.</p>
                  </div>
                </td>
              </tr>
            ) : (
              companionFields.map((c, idx) => (
                <tr key={c.id} className="border-b border-border/60 last:border-0">
                  <td className="px-4 py-3">
                    <input
                      className={inputCls}
                      placeholder="Companion name"
                      {...register(`companions.${idx}.name`)}
                    />
                  </td>
                  <td className="px-4 py-3">
                    <input
                      className={inputCls}
                      placeholder="Relationship"
                      {...register(`companions.${idx}.relationship`)}
                    />
                  </td>
                  <td className="px-4 py-3">
                    <input
                      className={inputCls}
                      placeholder="Phone number"
                      {...register(`companions.${idx}.phone`)}
                    />
                  </td>
                  <td className="px-4 py-3 text-right">
                    <button
                      type="button"
                      onClick={() => onRemove(idx)}
                      aria-label="Remove companion"
                      className="flex h-9 w-9 items-center justify-center rounded-md bg-danger-50 text-danger-500 hover:bg-danger-100"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </td>
                </tr>
              )))}
            </tbody>
          </table>
        </div>
      

      <div className="mt-3 flex flex-wrap items-center justify-between gap-2">
        <p className="text-sm text-ink-subtle">
          Showing 1 to {Math.max(companionFields.length, 1)} of {Math.max(companionFields.length, 1)} records
        </p>
        {companionFields.length > 0 && (
          <div className="flex items-center gap-1.5">
            <button type="button" disabled className="flex h-7 w-7 items-center justify-center rounded-md border border-border text-ink-subtle disabled:opacity-40">
              <ChevronLeft className="h-4 w-4" />
            </button>
            <span className="flex h-7 w-7 items-center justify-center rounded-md bg-interactive-500 text-xs font-semibold text-white">1</span>
            <button type="button" disabled className="flex h-7 w-7 items-center justify-center rounded-md border border-border text-ink-subtle disabled:opacity-40">
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
