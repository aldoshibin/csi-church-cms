"use client";

import { CheckCircle2, Clock, XCircle, HelpCircle } from "lucide-react";

const STATUS_STYLE = {
  Available: { icon: CheckCircle2, color: "text-success-600" },
  Limited: { icon: Clock, color: "text-warning-600" },
  Unavailable: { icon: XCircle, color: "text-danger-600" },
  "Not Set": { icon: HelpCircle, color: "text-ink-subtle" },
};

export function AvailabilityStatusTag({ status, label }) {
  const style = STATUS_STYLE[status] ?? STATUS_STYLE["Not Set"];
  const Icon = style.icon;
  return (
    <span className={`inline-flex items-center gap-1.5 text-sm font-medium ${style.color}`}>
      <Icon className="h-4 w-4 shrink-0" /> {label ?? status}
    </span>
  );
}
