import { Plus, Pencil, Trash2, User } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { CARD_CLS } from "./fields";

function initials(name) {
  return name.trim().split(/\s+/).slice(0, 2).map((w) => w[0]?.toUpperCase()).join("");
}

export function StepFamilyMembers({ members, onAdd, onEdit, onRemove }) {
  return (
    <div className={CARD_CLS}>
      <div className="mb-4 flex items-start justify-between gap-3">
        <div>
          <h2 className="text-base font-bold text-ink">Family Members</h2>
          <p className="text-sm text-ink-subtle">Add all family members. You can add more members after creating the family.</p>
        </div>
        <Button type="button" size="sm" leftIcon={<Plus className="h-4 w-4" />} onClick={onAdd}>
          Add Member
        </Button>
      </div>

      <div className="overflow-x-auto rounded-md border border-border">
        <table className="w-full min-w-[760px] border-collapse text-sm">
          <thead>
            <tr className="border-b border-border bg-surface-muted text-left text-xs font-semibold text-ink-subtle">
              <th className="px-4 py-2.5">S.No</th>
              <th className="px-2 py-2.5">Full Name</th>
              <th className="px-2 py-2.5">Relationship with Head</th>
              <th className="px-2 py-2.5">Date of Birth</th>
              <th className="px-2 py-2.5">Gender</th>
              <th className="px-2 py-2.5">Marital Status</th>
              <th className="px-2 py-2.5 text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {members.map((m, idx) => (
              <tr key={idx} className="border-b border-border/60 last:border-0">
                <td className="px-4 py-3 text-ink-subtle">{idx + 1}</td>
                <td className="px-2 py-3">
                  <div className="flex items-center gap-2.5">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-interactive-50 text-xs font-bold text-interactive-600">
                      {initials(m.name || "?")}
                    </div>
                    <div>
                      <span className="flex items-center gap-1.5 font-semibold text-ink">
                        {m.name}
                        {m.relationship === "Self (Head)" && (
                          <span className="rounded-full bg-success-50 px-2 py-0.5 text-[10px] font-bold text-success-600">Head</span>
                        )}
                      </span>
                      <p className="text-xs text-ink-subtle">
                        {m.relationship === "Self (Head)" ? "Family Head" : m.relationship}
                      </p>
                    </div>
                  </div>
                </td>
                <td className="px-2 py-3 text-ink">{m.relationship}</td>
                <td className="px-2 py-3 text-ink">{m.dob}</td>
                <td className="px-2 py-3">
                  <span className={`flex items-center gap-1.5 ${m.gender === "Male" ? "text-blue-500" : "text-rose-500"}`}>
                    <User className="h-3.5 w-3.5" /> {m.gender}
                  </span>
                </td>
                <td className="px-2 py-3 text-ink">{m.marital_status}</td>
                <td className="px-2 py-3">
                  <div className="flex items-center justify-end gap-1.5">
                    <button
                      type="button"
                      onClick={() => onEdit(idx)}
                      aria-label={`Edit ${m.name}`}
                      className="flex h-8 w-8 items-center justify-center rounded-md border border-border text-ink-muted hover:bg-surface-muted"
                    >
                      <Pencil className="h-3.5 w-3.5" />
                    </button>
                    <button
                      type="button"
                      onClick={() => onRemove(idx)}
                      aria-label={`Remove ${m.name}`}
                      className="flex h-8 w-8 items-center justify-center rounded-md border border-danger-200 text-danger-500 hover:bg-danger-50"
                    >
                      <Trash2 className="h-3.5 w-3.5" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-4 flex items-start gap-2.5 rounded-md border border-interactive-100 bg-interactive-50 px-4 py-2.5 text-sm text-interactive-700">
        You can add, edit or remove family members in this step. The primary contact should be the Family Head or Spouse.
      </div>
    </div>
  );
}
