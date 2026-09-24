"use client";

import { Search, Check, X } from "lucide-react";
import { ATTENDANCE_STATUS_OPTIONS } from "@/lib/mock/vmAttendanceMockData";

const STATUS_STYLE = {
  Present: { dot: "text-success-600", ring: "focus:ring-success-500" },
  Absent: { dot: "text-danger-600", ring: "focus:ring-danger-500" },
  Late: { dot: "text-warning-600", ring: "focus:ring-warning-500" },
  "Not Marked": { dot: "text-ink-subtle", ring: "focus:ring-interactive-500" },
};

const ROLE_OPTIONS = ["All Roles", "Worship Leader", "Vocalist", "Choir Member", "Sound Team", "Prayer Team", "Media Team", "Hospitality Team", "Usher"];

export function MarkAttendanceVolunteerTable({
  roster, search, onSearchChange, statusFilter, onStatusFilterChange, roleFilter, onRoleFilterChange,
  onSelectAll, onClearAll, onToggleSelected, onStatusChange, onRemarksChange, onCheckInTimeChange,
}) {
  return (
    <div className="rounded-lg border border-border bg-white shadow-card">
      <div className="flex flex-wrap items-center gap-3 border-b border-border p-4">
        <div className="relative flex-1 min-w-[200px]">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-subtle" />
          <input
            value={search} onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Search volunteers..."
            className="h-9 w-full rounded-md border border-border bg-white pl-9 pr-3 text-sm text-ink placeholder:text-ink-subtle focus:outline-none focus:ring-2 focus:ring-interactive-500/20 focus:border-interactive-500"
          />
        </div>
        <select value={statusFilter} onChange={(e) => onStatusFilterChange(e.target.value)} className="h-9 rounded-md border border-border bg-white px-3 text-sm text-ink-muted">
          <option>All Status</option>
          {ATTENDANCE_STATUS_OPTIONS.map((s) => <option key={s}>{s}</option>)}
        </select>
        <select value={roleFilter} onChange={(e) => onRoleFilterChange(e.target.value)} className="h-9 rounded-md border border-border bg-white px-3 text-sm text-ink-muted">
          {ROLE_OPTIONS.map((r) => <option key={r}>{r}</option>)}
        </select>
        <div className="ml-auto flex items-center gap-2">
          <button type="button" onClick={onSelectAll} className="flex h-9 items-center gap-1.5 rounded-md border border-border px-3 text-sm text-ink-muted hover:bg-surface-canvas">
            <Check className="h-4 w-4" /> Select All
          </button>
          <button type="button" onClick={onClearAll} className="flex h-9 items-center gap-1.5 rounded-md border border-border px-3 text-sm text-ink-muted hover:bg-surface-canvas">
            <X className="h-4 w-4" /> Clear All
          </button>
        </div>
      </div>

      <div className="scroll-thin overflow-x-auto">
        <table className="w-full min-w-[820px] text-left text-sm">
          <thead className="bg-surface-canvas text-xs uppercase tracking-wide text-ink-muted">
            <tr>
              <th className="w-10 px-4 py-3" />
              <th className="px-4 py-3 font-medium">Volunteer</th>
              <th className="px-4 py-3 font-medium">Role / Position</th>
              <th className="px-4 py-3 font-medium">Check-in Time</th>
              <th className="px-4 py-3 font-medium">Status</th>
              <th className="px-4 py-3 font-medium">Remarks</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {roster.map((v) => (
              <tr key={v.volunteerId}>
                <td className="px-4 py-3">
                  <input
                    type="checkbox" checked={v.selected} onChange={() => onToggleSelected(v.volunteerId)}
                    className="h-4 w-4 rounded border-border text-interactive-500 focus-visible:ring-interactive-500"
                  />
                </td>
                <td className="px-4 py-3">
                  <div className="flex items-center gap-3">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-interactive-50 text-xs font-semibold text-interactive-600">
                      {v.name.split(" ").map((n) => n[0]).slice(0, 2).join("")}
                    </span>
                    <div className="min-w-0">
                      <p className="truncate font-medium text-ink">{v.name}</p>
                      <p className="truncate text-xs text-ink-subtle">{v.volunteerId}</p>
                    </div>
                  </div>
                </td>
                <td className="px-4 py-3 text-ink-muted">{v.role}</td>
                <td className="px-4 py-3">
                  <input
                    type="time"
                    value={v.checkInTime ?? ""}
                    onChange={(e) => onCheckInTimeChange(v.volunteerId, e.target.value)}
                    disabled={v.status === "Absent" || v.status === "Not Marked"}
                    className="h-9 w-32 rounded-md border border-border bg-white px-2 text-sm text-ink disabled:cursor-not-allowed disabled:bg-surface-muted disabled:text-ink-subtle"
                  />
                </td>
                <td className="px-4 py-3">
                  <div className="flex items-center gap-3">
                    {ATTENDANCE_STATUS_OPTIONS.map((status) => (
                      <label key={status} className="flex items-center gap-1.5 text-xs text-ink-muted">
                        <input
                          type="radio"
                          name={`status-${v.volunteerId}`}
                          checked={v.status === status}
                          onChange={() => onStatusChange(v.volunteerId, status)}
                          className={`h-3.5 w-3.5 border-border ${STATUS_STYLE[status].dot} ${STATUS_STYLE[status].ring}`}
                        />
                        {status}
                      </label>
                    ))}
                  </div>
                </td>
                <td className="px-4 py-3">
                  <input
                    type="text" value={v.remarks ?? ""} placeholder="Optional"
                    onChange={(e) => onRemarksChange(v.volunteerId, e.target.value)}
                    className="h-9 w-36 rounded-md border border-border bg-white px-2 text-sm text-ink placeholder:text-ink-subtle focus:outline-none focus:ring-2 focus:ring-interactive-500/20 focus:border-interactive-500"
                  />
                </td>
              </tr>
            ))}
            {roster.length === 0 && (
              <tr>
                <td colSpan={6} className="px-4 py-12 text-center text-sm text-ink-subtle">No volunteers match your filters.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
