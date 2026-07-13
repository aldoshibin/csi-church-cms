"use client";


export function StatusDot({ color, label }) {
  return (
    <span className="inline-flex items-center gap-1.5 text-sm">
      <span className="h-1.5 w-1.5 shrink-0 rounded-full" style={{ backgroundColor: color }} />
      <span className="text-ink">{label}</span>
    </span>
  );
}

export const VISITOR_STATUS_COLOR = { NEW_VISITOR: "#0E5C4E", RETURNING_VISITOR: "#8B5CF6" };
export const FOLLOW_UP_COLOR = { PENDING: "#E8983A", CONTACTED: "#16A34A", INVITED: "#3B82F6", MEMBER: "#16A34A" };
