"use client";

import { UserCircle2, Plus, Trash2, ChevronLeft, ChevronRight } from "lucide-react";

const inputCls =
  "w-full rounded-md border border-border bg-white px-2.5 py-1.5 text-sm text-ink placeholder:text-ink-subtle focus:border-interactive-500 focus:outline-none focus:ring-2 focus:ring-interactive-500/10";

function RelationSelect(props) {
  return (
    <select {...props} className={inputCls}>
      <option value="">Select</option>
      <option>Head</option>
      <option>Spouse</option>
      <option>Son</option>
      <option>Daughter</option>
      <option>Parent</option>
      <option>Other</option>
    </select>
  );
}
function GenderSelect(props) {
  return (
    <select {...props} className={inputCls}>
      <option value="">Select</option>
      <option>Male</option>
      <option>Female</option>
    </select>
  );
}

export function FamilyMembersTable({ members, onUpdate, onAdd, onRemove }) {
  return (
    <div>
      <div className="mb-3 flex items-center gap-2.5">
        <h3 className="text-base font-bold text-ink">Add Family Members</h3>
        <span className="rounded-full bg-success-50 px-2.5 py-0.5 text-xs font-semibold text-success-600">
          Add at least one member
        </span>
      </div>

      <div className="overflow-x-auto rounded-lg border border-border">
        <table className="w-full min-w-[920px] text-left text-sm">
          <thead>
            <tr className="border-b border-border bg-surface-muted text-xs font-semibold text-ink-subtle">
              <th className="px-3 py-2.5 w-10">#</th>
              <th className="px-2 py-2.5 w-16">Photo</th>
              <th className="px-2 py-2.5">Name *</th>
              <th className="px-2 py-2.5">Relationship *</th>
              <th className="px-2 py-2.5">Gender *</th>
              <th className="px-2 py-2.5">Date of Birth *</th>
              <th className="px-2 py-2.5">Occupation</th>
              <th className="px-2 py-2.5 w-24">Action</th>
            </tr>
          </thead>
          <tbody>
            {members.map((m, i) => (
              <tr key={i} className="border-b border-border last:border-0">
                <td className="px-3 py-2 text-ink-subtle">{i + 1}</td>
                <td className="px-2 py-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-interactive-50 text-interactive-500">
                    <UserCircle2 className="h-5 w-5" />
                  </div>
                </td>
                <td className="px-2 py-2">
                  <div className="flex gap-2">
                    <input
                      className={inputCls}
                      placeholder="First Name"
                      value={m.first_name}
                      onChange={(e) => onUpdate(i, "first_name", e.target.value)}
                    />
                    <input
                      className={inputCls}
                      placeholder="Last Name"
                      value={m.last_name}
                      onChange={(e) => onUpdate(i, "last_name", e.target.value)}
                    />
                  </div>
                </td>
                <td className="px-2 py-2">
                  <RelationSelect value={m.relationship} onChange={(e) => onUpdate(i, "relationship", e.target.value)} />
                </td>
                <td className="px-2 py-2">
                  <GenderSelect value={m.gender} onChange={(e) => onUpdate(i, "gender", e.target.value)} />
                </td>
                <td className="px-2 py-2">
                  <input
                    type="date"
                    className={inputCls}
                    value={m.dob}
                    onChange={(e) => onUpdate(i, "dob", e.target.value)}
                  />
                </td>
                <td className="px-2 py-2">
                  <input
                    className={inputCls}
                    placeholder="Occupation"
                    value={m.occupation}
                    onChange={(e) => onUpdate(i, "occupation", e.target.value)}
                  />
                </td>
                <td className="px-2 py-2">
                  <div className="flex items-center gap-1.5">
                    <button
                      type="button"
                      onClick={onAdd}
                      aria-label="Add member row"
                      className="flex h-8 w-8 items-center justify-center rounded-md bg-success-50 text-success-600 hover:bg-success-100"
                    >
                      <Plus className="h-4 w-4" />
                    </button>
                    <button
                      type="button"
                      onClick={() => onRemove(i)}
                      aria-label="Remove member row"
                      disabled={members.length <= 1}
                      className="flex h-8 w-8 items-center justify-center rounded-md bg-danger-50 text-danger-500 hover:bg-danger-100 disabled:cursor-not-allowed disabled:opacity-40"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-3 flex flex-wrap items-center justify-between gap-2">
        <p className="text-xs text-ink-subtle">Showing 1 to {members.length} of {members.length} records</p>
        <div className="flex items-center gap-1.5">
          <button className="flex h-7 w-7 items-center justify-center rounded-md border border-border text-ink-subtle disabled:opacity-40" disabled>
            <ChevronLeft className="h-4 w-4" />
          </button>
          <span className="flex h-7 w-7 items-center justify-center rounded-md bg-interactive-500 text-xs font-semibold text-white">1</span>
          <button className="flex h-7 w-7 items-center justify-center rounded-md border border-border text-ink-subtle disabled:opacity-40" disabled>
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>

      <button
        type="button"
        onClick={onAdd}
        className="mt-3 flex items-center gap-1.5 rounded-md border border-border bg-white px-4 py-2 text-sm font-semibold text-ink hover:bg-surface-muted"
      >
        <Plus className="h-4 w-4" /> Add Another Member
      </button>
    </div>
  );
}
