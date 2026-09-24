"use client";

import { Info } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { formatDate } from "@/lib/utils";
import { AVATAR_COLORS } from "@/lib/mock/vmDocumentManagementMockData";

function initials(name) {
  return name.split(" ").filter((w) => /^[A-Z]/.test(w)).slice(0, 2).map((w) => w[0]).join("");
}

function avatarStyle(name) {
  const idx = name.charCodeAt(0) % AVATAR_COLORS.length;
  return AVATAR_COLORS[idx];
}

function Row({ label, value }) {
  return (
    <div className="flex items-center justify-between gap-4 py-2.5">
      <span className="text-sm text-ink-subtle">{label}</span>
      <span className="text-right text-sm font-medium text-ink">{value || "–"}</span>
    </div>
  );
}

export function CategoryInfoCard({ category }) {
  if (!category) return null;
  return (
    <div className="rounded-lg border border-border bg-white p-5 shadow-card">
      <div className="flex items-center gap-2">
        <Info className="h-4 w-4 text-interactive-600" />
        <h3 className="text-sm font-semibold text-ink">Category Information</h3>
      </div>
      <div className="mt-2 divide-y divide-border">
        <div className="flex items-center justify-between py-2.5">
          <span className="text-sm text-ink-subtle">Status</span>
          <Badge variant={category.status === "Active" ? "success" : "danger"}>{category.status}</Badge>
        </div>
        <Row label="Total Documents" value={category.documentsCount} />
        <Row label="Total Size" value={category.totalSizeLabel} />
        <Row label="Created On" value={formatDate(category.createdOn, { hour: "numeric", minute: "2-digit" })} />
        <div className="flex items-center justify-between gap-4 py-2.5">
          <span className="text-sm text-ink-subtle">Created By</span>
          <span className="flex items-center gap-2">
            <span
              className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-[10px] font-semibold"
              style={{ backgroundColor: avatarStyle(category.createdByName).bg, color: avatarStyle(category.createdByName).color }}
            >
              {initials(category.createdByName)}
            </span>
            <span className="text-sm font-medium text-ink">{category.createdByName}</span>
          </span>
        </div>
        <Row label="Last Updated" value={formatDate(category.lastUpdated, { hour: "numeric", minute: "2-digit" })} />
      </div>
    </div>
  );
}
