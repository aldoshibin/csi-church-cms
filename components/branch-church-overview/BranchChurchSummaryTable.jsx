"use client";

import * as React from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight, Eye, MoreVertical } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { formatCurrency } from "@/lib/utils";


export function BranchChurchSummaryTable({ branches = [] }) {
  const [page, setPage] = React.useState(1);
  const pageSize = 10;
  const totalPages = Math.max(1, Math.ceil(branches.length / pageSize));
  const visible = branches.slice((page - 1) * pageSize, page * pageSize);

  return (
    <div className="overflow-hidden rounded-lg border border-border bg-white shadow-card">
      <div className="p-4">
        <h3 className="text-sm font-semibold text-interactive-500">Branch Church Summary</h3>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-full text-left text-sm">
          <thead className="bg-surface-canvas text-xs uppercase tracking-wide text-ink-muted">
            <tr>
              <th className="whitespace-nowrap px-4 py-3 font-medium">Branch Church</th>
              <th className="whitespace-nowrap px-4 py-3 font-medium">Location</th>
              <th className="whitespace-nowrap px-4 py-3 font-medium">Members</th>
              <th className="whitespace-nowrap px-4 py-3 font-medium">
                Worship Services<br /><span className="normal-case text-[10px] text-ink-subtle">(This Week)</span>
              </th>
              <th className="whitespace-nowrap px-4 py-3 font-medium">Ministries</th>
              <th className="whitespace-nowrap px-4 py-3 font-medium">Offerings (May)</th>
              <th className="whitespace-nowrap px-4 py-3 font-medium">Status</th>
              <th className="whitespace-nowrap px-4 py-3 font-medium">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {visible.map((branch) => (
              <tr key={branch.id}>
                <td className="px-4 py-3">
                  <Link href={`/parish-administration/branches/${branch.id}`} className="font-medium text-interactive-600 hover:underline">
                    {branch.name}
                  </Link>
                </td>
                <td className="px-4 py-3 text-ink">{branch.location}</td>
                <td className="px-4 py-3 font-medium text-interactive-600">{branch.members}</td>
                <td className="px-4 py-3 text-ink">{branch.worshipServices}</td>
                <td className="px-4 py-3 font-medium text-interactive-600">{branch.ministries}</td>
                <td className="px-4 py-3 text-ink">{formatCurrency(branch.offerings)}</td>
                <td className="px-4 py-3">
                  <Badge variant="success">{branch.status}</Badge>
                </td>
                <td className="px-4 py-3">
                  <div className="flex items-center gap-1.5">
                    <button className="flex h-8 w-8 items-center justify-center rounded-md border border-border text-ink-muted hover:bg-surface-muted" aria-label={`View ${branch.name}`}>
                      <Eye className="h-4 w-4" />
                    </button>
                    <button className="flex h-8 w-8 items-center justify-center rounded-md text-ink-subtle hover:bg-surface-muted" aria-label="Row actions">
                      <MoreVertical className="h-4 w-4" />
                    </button>
                  </div>
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
