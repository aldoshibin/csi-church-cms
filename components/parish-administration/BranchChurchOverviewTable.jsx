"use client";

import * as React from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Badge } from "@/components/ui/Badge";


export function BranchChurchOverviewTable({ branches = [] }) {
  const [page, setPage] = React.useState(1);
  const pageSize = 10;
  const totalPages = Math.max(1, Math.ceil(branches.length / pageSize));
  const visible = branches.slice((page - 1) * pageSize, page * pageSize);

  return (
    <div className="overflow-hidden rounded-lg border border-border bg-white shadow-card">
      <div className="overflow-x-auto">
        <table className="w-full min-w-full text-left text-sm">
          <thead className="bg-surface-canvas text-xs uppercase tracking-wide text-ink-muted">
            <tr>
              {["Branch Church", "Location", "Families", "Members", "Last Service", "Activities", "Status"].map((header) => (
                <th key={header} className="whitespace-nowrap px-4 py-3 font-medium">{header}</th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {visible.map((branch) => (
              <tr key={branch.id}>
                <td className="px-4 py-3">
                  <Link href={`/parish-administration/branches/${branch.id}`} className="font-medium text-interactive-500 hover:underline">
                    {branch.name}
                  </Link>
                </td>
                <td className="px-4 py-3 text-ink">{branch.location}</td>
                <td className="px-4 py-3 text-ink">{branch.families}</td>
                <td className="px-4 py-3 font-medium text-interactive-500">{branch.members}</td>
                <td className="px-4 py-3 text-ink-subtle">{branch.lastService}</td>
                <td className="px-4 py-3 text-[#17844d] rounded-none">{branch.activities}</td>
                <td className="px-4 py-3">
                  <Badge variant="success">{branch.status}</Badge>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex items-center justify-between border-t border-border px-4 py-3">
        <p className="text-sm text-ink-subtle">
          Showing {(page - 1) * pageSize + 1} to {Math.min(page * pageSize, branches.length)} of {branches.length} records
        </p>
        <div className="flex items-center gap-1.5">
          <button
            onClick={() => setPage((p) => Math.max(1, p - 1))}
            disabled={page <= 1}
            className="flex h-8 w-8 items-center justify-center rounded-md border border-border text-ink-muted hover:bg-surface-muted disabled:opacity-40"
            aria-label="Previous page"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              onClick={() => setPage(i + 1)}
              className={`flex h-8 w-8 items-center justify-center rounded-md text-sm font-medium ${
                page === i + 1 ? "bg-interactive-500 text-white" : "text-ink-muted hover:bg-surface-muted"
              }`}
            >
              {i + 1}
            </button>
          ))}
          <button
            onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
            disabled={page >= totalPages}
            className="flex h-8 w-8 items-center justify-center rounded-md border border-border text-ink-muted hover:bg-surface-muted disabled:opacity-40"
            aria-label="Next page"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
