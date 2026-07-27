"use client";

import { ChevronDown } from "lucide-react";

export function Field({ label, required, className = "", children }) {
  return (
    <div className={className}>
      <label className="mb-1.5 block text-sm font-medium text-ink">
        {label} {required && <span className="text-danger-500">*</span>}
      </label>
      {children}
    </div>
  );
}

export const inputCls =
  "w-full rounded-md border border-border bg-white px-3 py-2 text-sm text-ink placeholder:text-ink-subtle focus:border-interactive-500 focus:outline-none focus:ring-2 focus:ring-interactive-500/10 disabled:bg-surface-muted disabled:text-ink-subtle";

export function TextInput(props) {
  return <input {...props} className={inputCls} />;
}

export function SelectInput({ children, ...props }) {
  return (
    <div className="relative">
      <select {...props} className={inputCls + " appearance-none pr-8"}>
        {children}
      </select>
      <ChevronDown className="pointer-events-none absolute right-2.5 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-subtle" />
    </div>
  );
}

export function PhoneInput({ ...props }) {
  return (
    <div className="flex">
      <span className="flex items-center gap-1.5 rounded-l-md border border-r-0 border-border bg-surface-muted px-2.5 text-sm text-ink">
        🇮🇳 +91
      </span>
      <input {...props} className={inputCls + " rounded-l-none"} />
    </div>
  );
}

export const CARD_CLS = "rounded-lg border border-border bg-white p-5 shadow-card";
