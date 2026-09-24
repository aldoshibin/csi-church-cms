"use client";

import Link from "next/link";
import { FileText, FileSpreadsheet, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/Badge";

const FORMAT_ICON_MAP = {
  PDF: { icon: FileText, bg: "bg-[#FFE5E5]", color: "text-[#DC2626]" },
  Excel: { icon: FileSpreadsheet, bg: "bg-[#DCFCE7]", color: "text-[#16A34A]" },
};

export function RecentlyGeneratedReportsCard({ reports = [] }) {
  return (
    <div className="rounded-lg border border-border bg-white p-5 shadow-card">
      <h3 className="text-sm font-semibold text-ink">Recently Generated Reports</h3>
      <div className="mt-3 flex flex-col gap-3">
        {reports.map((r) => {
          const meta = FORMAT_ICON_MAP[r.format] ?? FORMAT_ICON_MAP.PDF;
          const Icon = meta.icon;
          return (
            <div key={r.key} className="flex items-center gap-3">
              <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-md ${meta.bg} ${meta.color}`}>
                <Icon className="h-4 w-4" />
              </span>
              <div className="flex-1">
                <p className="text-sm font-medium text-ink">{r.name}</p>
                <p className="text-xs text-ink-subtle">{r.dateTimeText}</p>
              </div>
              <Badge variant={r.format === "PDF" ? "danger" : "success"}>{r.format}</Badge>
            </div>
          );
        })}
      </div>
      <Link href="#" className="mt-4 flex items-center justify-center gap-1 text-sm font-medium text-interactive-600 hover:underline">
        View All Reports <ArrowRight className="h-3.5 w-3.5" />
      </Link>
    </div>
  );
}
