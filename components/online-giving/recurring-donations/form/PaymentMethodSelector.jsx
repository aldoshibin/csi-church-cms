"use client";

import { CreditCard, Smartphone, Landmark } from "lucide-react";
import { cn } from "@/lib/utils";

const METHODS = [
  { value: "Card", label: "Card", icon: CreditCard },
  { value: "UPI", label: "UPI", icon: Smartphone },
  { value: "Net Banking", label: "Net Banking", icon: Landmark },
];

export function PaymentMethodSelector({ value, onChange }) {
  return (
    <div className="grid grid-cols-3 gap-3">
      {METHODS.map((method) => {
        const active = value === method.value;
        return (
          <button
            key={method.value}
            type="button"
            onClick={() => onChange(method.value)}
            className={cn(
              "flex items-center justify-center gap-2 rounded-lg border px-4 py-2.5 text-sm font-medium transition-colors",
              active ? "border-interactive-500 bg-interactive-50 text-interactive-600" : "border-border text-ink-muted hover:bg-surface-canvas"
            )}
          >
            <method.icon className="h-4 w-4" /> {method.label}
          </button>
        );
      })}
    </div>
  );
}
