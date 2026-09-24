"use client";

import Link from "next/link";

function Row({ label, value, color }) {
  return (
    <div className="flex items-center justify-between text-sm">
      <span className="text-ink-subtle">{label}</span>
      <span className={`font-semibold ${color ?? "text-ink"}`}>{value}</span>
    </div>
  );
}

export function AttendanceSummaryCard({ summary }) {
  if (!summary) return null;
  return (
    <div className="rounded-lg border border-border bg-white p-4 shadow-card">
      <div className="mb-3 flex items-center justify-between">
        <h3 className="text-sm font-semibold text-ink">Attendance Summary</h3>
        <Link href="/mens-fellowship/attendance" className="text-xs font-medium text-interactive-500 hover:underline">View Details</Link>
      </div>
      <div className="flex flex-col gap-2.5">
        <Row label="Total Invited" value={summary.totalInvited} />
        <Row label="Attended" value={summary.attended} color="text-success-600" />
        <Row label="Absent" value={summary.absent} color="text-danger-600" />
        <Row label="Attendance Rate" value={`${summary.attendanceRate}%`} />
      </div>
    </div>
  );
}
