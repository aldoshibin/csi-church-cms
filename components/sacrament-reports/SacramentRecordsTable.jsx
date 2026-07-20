"use client";

import * as React from "react";
import { List, Grid3x3, Download, ChevronLeft, ChevronRight } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { sacramentBadgeClass, genderBadgeClass } from "@/lib/mock/sacramentReportsMockData";
import { SacramentRecordsGrid } from "./SacramentRecordsGrid";


export function SacramentRecordsTable({ recordLabel, records = [] }) {
  const [viewMode, setViewMode] = React.useState("list"); // "list" | "grid"
  const [page, setPage] = React.useState(1);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const totalPages = Math.max(1, Math.ceil(records.length / rowsPerPage));
  const visible = records.slice((page - 1) * rowsPerPage, page * rowsPerPage);

  return (
    <div className="border-t border-border">
      <div className="flex items-center justify-between p-4">
        <h3 className="text-base font-bold text-interactive-500">
          {recordLabel} Records <span className="text-ink-subtle">({records.length})</span>
        </h3>
        <div className="flex items-center gap-1.5">
          <span className="mr-1 text-xs text-ink-subtle">View:</span>
          <button
            onClick={() => setViewMode("list")}
            className={`flex h-8 w-8 items-center justify-center rounded-md ${
              viewMode === "list" ? "bg-interactive-500 text-white" : "border border-border text-ink-muted hover:bg-surface-muted"
            }`}
            aria-label="List view"
          >
            <List className="h-4 w-4" />
          </button>
          <button
            onClick={() => setViewMode("grid")}
            className={`flex h-8 w-8 items-center justify-center rounded-md ${
              viewMode === "grid" ? "bg-interactive-500 text-white" : "border border-border text-ink-muted hover:bg-surface-muted"
            }`}
            aria-label="Grid view"
          >
            <Grid3x3 className="h-4 w-4" />
          </button>
          <button className="flex h-8 w-8 items-center justify-center rounded-md border border-border text-ink-muted hover:bg-surface-muted" aria-label="Download">
            <Download className="h-4 w-4" />
          </button>
        </div>
      </div>

      {viewMode === "list" ? (
        <>
          <div className="overflow-x-auto">
            <table className="w-full min-w-full text-left text-sm">
              <thead className="border-y border-border text-xs uppercase tracking-wide text-ink-subtle">
                <tr>
                  {["Date", "Sacrament Type", "Name", "Gender", "Age Group", "Parents / Spouse", "Location", "Officiated By"].map((h) => (
                    <th key={h} className="whitespace-nowrap px-4 py-3 font-medium text-[#06164a] bg-[#F8FAFC]">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {visible.map((record) => (
                  <tr key={record.id}>
                    <td className="px-4 py-3">
                      <span className="text-[10px] font-semibold uppercase text-interactive-500">{record.month}</span>{" "}
                      <span className="text-base font-bold text-ink">{record.date}</span>
                      <p className="text-xs text-ink-subtle">{record.year}</p>
                    </td>
                    <td className="px-4 py-3">
                      <span className={`inline-flex rounded-sm px-2 py-1.5 text-xs font-medium ${sacramentBadgeClass(record.sacramentType)}`}>
                        {record.sacramentType}
                      </span>
                    </td>
                    <td className="px-4 py-3">
                      <p className="font-semibold text-ink">{record.name}</p>
                      <p className="text-xs text-ink-subtle">{record.relation}</p>
                    </td>
                    <td className="px-4 py-3">
                      {record.gender !== "—" ? (
                        <span className={`inline-flex rounded-sm px-2 py-1.5 text-xs font-medium ${genderBadgeClass(record.gender)}`}>
                          {record.gender}
                        </span>
                      ) : (
                        <span className="text-ink-subtle">—</span>
                      )}
                    </td>
                    <td className="px-4 py-3">
                      <Badge variant="success">{record.ageGroup}</Badge>
                    </td>
                    <td className="whitespace-pre-line px-4 py-3 text-ink">{record.parentsOrSpouse}</td>
                    <td className="px-4 py-3 text-ink">{record.location}</td>
                    <td className="px-4 py-3 text-ink">{record.officiatedBy}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-3 border-t border-border px-4 py-3">
            <p className="text-sm text-ink-subtle">
              Showing {records.length === 0 ? 0 : (page - 1) * rowsPerPage + 1} to{" "}
              {Math.min(page * rowsPerPage, records.length)} of {records.length} records
            </p>
            <div className="flex items-center gap-3">
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
              <div className="flex items-center gap-2 text-sm text-ink-subtle">
                Rows per page:
                <select
                  value={rowsPerPage}
                  onChange={(e) => { setRowsPerPage(Number(e.target.value)); setPage(1); }}
                  className="h-8 rounded-md border border-border px-2 text-sm text-ink"
                >
                  <option value={10}>10</option>
                  <option value={25}>25</option>
                  <option value={50}>50</option>
                </select>
              </div>
            </div>
          </div>
        </>
      ) : (
        <SacramentRecordsGrid records={records} />
      )}
    </div>
  );
}
