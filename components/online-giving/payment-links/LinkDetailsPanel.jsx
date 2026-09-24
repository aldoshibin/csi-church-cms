"use client";

import { X, Link2, MousePointerClick, IndianRupee, Users, TrendingUp, LayoutDashboard, Share2, Pencil, Copy, Ban, Trash2, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { PAYMENT_LINK_STATUS_VARIANT } from "@/lib/mock/paymentLinksMockData";
import { formatCurrency, formatDate } from "@/lib/utils";

function Row({ label, value }) {
  return (
    <div className="flex items-start justify-between gap-4 py-2 text-sm">
      <span className="shrink-0 text-ink-subtle">{label}</span>
      <span className="break-all text-right font-medium text-ink">{value}</span>
    </div>
  );
}

export function LinkDetailsPanel({ link, onClose, onViewDashboard, onShare, onEdit, onDuplicate, onDeactivate, onDelete }) {
  const perf = [
    { label: "Total Clicks", value: link.clicks, icon: MousePointerClick, iconBg: "bg-success-50", iconColor: "text-success-600" },
    { label: "Amount Raised", value: formatCurrency(link.amountRaised), icon: IndianRupee, iconBg: "bg-interactive-50", iconColor: "text-interactive-600" },
    { label: "Unique Donors", value: link.uniqueDonors, icon: Users, iconBg: "bg-[#F3E8FF]", iconColor: "text-[#7C3AED]" },
    { label: "Conversion Rate", value: `${link.conversionRate}%`, icon: TrendingUp, iconBg: "bg-warning-50", iconColor: "text-warning-600" },
  ];

  const actions = [
    { label: "View Dashboard", icon: LayoutDashboard, onClick: () => onViewDashboard?.(link) },
    { label: "Share Link", icon: Share2, onClick: () => onShare?.(link) },
    { label: "Edit Link", icon: Pencil, onClick: () => onEdit?.(link) },
    { label: "Duplicate Link", icon: Copy, onClick: () => onDuplicate?.(link) },
    { label: "Deactivate Link", icon: Ban, onClick: () => onDeactivate?.(link), danger: true },
    { label: "Delete Link", icon: Trash2, onClick: () => onDelete?.(link), danger: true },
  ];

  return (
    <div className="rounded-lg border border-border bg-white shadow-card">
      <div className="flex items-center justify-between border-b border-border px-4 py-3">
        <h3 className="text-base font-semibold text-ink">Link Details</h3>
        <button type="button" onClick={onClose} className="rounded-md p-1 text-ink-subtle hover:bg-surface-canvas hover:text-ink" aria-label="Close">
          <X className="h-4 w-4" />
        </button>
      </div>

      <div className="p-4">
        <div className="mb-4 flex items-center justify-between">
          <Badge variant={PAYMENT_LINK_STATUS_VARIANT[link.status] ?? "default"}>{link.status}</Badge>
          <span className="text-xs text-ink-subtle">Created on: {formatDate(link.createdOn)}, {link.createdTime}</span>
        </div>

        <section className="mb-5">
          <h4 className="mb-1 text-sm font-semibold text-accent-700">Basic Information</h4>
          <div className="flex flex-col divide-y divide-surface-muted">
            <Row label="Link Name" value={link.linkName} />
            <Row label="Purpose / Fund" value={link.fund} />
            <Row label="Link URL" value={link.linkUrl} />
            <Row label="Short Link" value={link.shortLink} />
            <Row label="Description" value={link.description} />
            <Row label="Status" value={<Badge variant={PAYMENT_LINK_STATUS_VARIANT[link.status] ?? "default"}>{link.status}</Badge>} />
            <Row label="Created By" value={link.createdBy} />
            <Row label="Created On" value={`${formatDate(link.createdOn)}, ${link.createdTime}`} />
            <Row label="Last Updated" value={link.lastUpdated} />
          </div>
        </section>

        <section className="mb-5">
          <h4 className="mb-2 text-sm font-semibold text-accent-700">Performance Overview</h4>
          <div className="grid grid-cols-2 gap-3">
            {perf.map((p) => (
              <div key={p.label} className="rounded-lg border border-border p-3 text-center">
                <span className={`mx-auto mb-2 flex h-9 w-9 items-center justify-center rounded-full ${p.iconBg}`}>
                  <p.icon className={`h-4 w-4 ${p.iconColor}`} />
                </span>
                <p className="text-base font-bold text-ink">{p.value}</p>
                <p className="text-xs text-ink-subtle">{p.label}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-5">
          <h4 className="mb-2 text-sm font-semibold text-accent-700">Quick Actions</h4>
          <div className="grid grid-cols-3 gap-2.5">
            {actions.map((action) => (
              <button
                key={action.label}
                type="button"
                onClick={action.onClick}
                className={`flex flex-col items-center gap-1.5 rounded-lg border px-2 py-3 text-center transition-colors ${
                  action.danger ? "border-danger-100 text-danger-600 hover:bg-danger-50" : "border-border text-ink-muted hover:bg-surface-canvas"
                }`}
              >
                <action.icon className="h-4 w-4" />
                <span className="text-[10.5px] font-medium leading-tight">{action.label}</span>
              </button>
            ))}
          </div>
        </section>

        <section>
          <h4 className="mb-2 text-sm font-semibold text-ink">Link Preview</h4>
          <div className="flex items-center gap-3 rounded-lg border border-border p-3">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-success-50 text-success-600">
              <Link2 className="h-4 w-4" />
            </span>
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-semibold text-ink">{link.linkName}</p>
              <p className="truncate text-xs text-ink-subtle">{link.fund}</p>
              <p className="truncate text-xs text-interactive-500">{link.linkUrl}</p>
            </div>
            <ExternalLink className="h-4 w-4 shrink-0 text-ink-subtle" />
          </div>
        </section>
      </div>
    </div>
  );
}
