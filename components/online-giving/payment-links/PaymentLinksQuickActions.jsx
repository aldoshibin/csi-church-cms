"use client";

import Link from "next/link";
import { Plus, ReceiptText, Share2, BarChart3 } from "lucide-react";

const ACTIONS = [
  { label: "New Payment Link", icon: Plus, href: "/online-giving/payment-links", accent: true },
  { label: "View Donations", icon: ReceiptText, href: "/online-giving/donations" },
  { label: "Share Link", icon: Share2, href: "/online-giving/payment-links" },
  { label: "Reports", icon: BarChart3, href: "/reports" },
];

export function PaymentLinksQuickActions() {
  return (
    <div className="rounded-lg border border-border bg-white p-4 shadow-card">
      <h3 className="mb-3 text-sm font-semibold text-ink">Quick Actions</h3>
      <div className="grid grid-cols-2 gap-3">
        {ACTIONS.map((action) => (
          <Link
            key={action.label}
            href={action.href}
            className={`flex flex-col items-center gap-1.5 rounded-lg border px-3 py-4 text-center transition-colors ${
              action.accent
                ? "border-success-200 bg-success-50 text-success-700 hover:bg-success-100"
                : "border-border text-ink-muted hover:bg-surface-canvas"
            }`}
          >
            <action.icon className="h-4 w-4" />
            <span className="text-xs font-medium leading-tight">{action.label}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
