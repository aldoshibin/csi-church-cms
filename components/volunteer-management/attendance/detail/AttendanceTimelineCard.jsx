"use client";

export function AttendanceTimelineCard({ record }) {
  if (!record.checkInTime || !record.checkOutTime) return null;
  return (
    <div className="rounded-lg border border-border bg-surface-canvas p-5">
      <h4 className="mb-4 text-sm font-semibold text-ink">Attendance Timeline</h4>
      <div className="flex items-center justify-between text-sm">
        <div>
          <p className="font-medium text-ink">{record.checkInTime}</p>
          <p className="text-xs text-ink-subtle">Checked In</p>
        </div>
        <div className="text-right">
          <p className="font-medium text-ink">{record.checkOutTime}</p>
          <p className="text-xs text-ink-subtle">Checked Out</p>
        </div>
      </div>
      <div className="relative mt-3 flex items-center">
        <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-success-500" />
        <div className="mx-1 h-1 flex-1 rounded-full bg-success-500" />
        <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-success-500" />
      </div>
      <div className="mt-4 flex justify-center">
        <span className="rounded-md bg-success-50 px-3 py-1.5 text-xs font-semibold text-success-700">
          Total Duration: {record.totalDuration}
        </span>
      </div>
    </div>
  );
}
