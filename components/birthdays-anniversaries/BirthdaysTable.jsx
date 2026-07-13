"use client";

import * as React from "react";
import { Phone, Eye, MoreVertical, ChevronLeft, ChevronRight, ChevronRight as ChevronRightSmall } from "lucide-react";
import { genderBadgeClass } from "@/lib/mock/birthdaysAnniversariesMockData";
import { getInitials } from "@/lib/utils";
import { BirthdayDetailsModal } from "./BirthdayDetailsModal";

const AVATAR_COLORS = ["bg-amber-100 text-amber-700", "bg-rose-100 text-rose-700", "bg-purple-100 text-purple-700", "bg-blue-100 text-blue-700"];


export function BirthdaysTable({ title, todaysDate, records = [], viewAllHref, viewAllLabel }) {
  const [page, setPage] = React.useState(1);
  const pageSize = 8;
  const [selectedRecord, setSelectedRecord] = React.useState(null);
  const [modalOpen, setModalOpen] = React.useState(false);
  const totalPages = Math.max(1, Math.ceil(records.length / pageSize));
  const visible = records.slice((page - 1) * pageSize, page * pageSize);

  return (
    <>
    <div className="rounded-lg border border-border bg-white shadow-card">
      <div className="flex items-center justify-between p-4">
        <h3 className="text-base font-bold text-interactive-500">{title}</h3>
        <p className="text-sm text-ink-subtle">
          Today's Date: <span className="font-medium text-ink">{todaysDate}</span>
        </p>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-full text-left text-sm">
          <thead className="border-y border-border bg-surface-canvas text-xs uppercase tracking-wide text-ink-subtle">
            <tr>
              {["Date", "Name", "Age", "Gender", "Location / Branch", "Contact", "Remarks", "Actions"].map((h) => (
                <th key={h} className="whitespace-nowrap px-4 py-3 font-medium">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {visible.map((record, index) => (
              <tr key={record.id}>
                <td className="px-4 py-3">
                  <span className="text-[10px] font-semibold uppercase text-interactive-500">{record.month}</span>{" "}
                  <span className="text-base font-bold text-ink">{record.day}</span>
                  <p className="text-xs text-ink-subtle">{record.weekday}</p>
                </td>
                <td className="px-4 py-3">
                  <div className="flex items-center gap-3">
                    <div className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-xs font-semibold ${AVATAR_COLORS[index % AVATAR_COLORS.length]}`}>
                      {getInitials(record.name)}
                    </div>
                    <div>
                      <p className="font-semibold text-ink">{record.name}</p>
                      <p className="text-xs text-ink-subtle">{record.relation}</p>
                    </div>
                  </div>
                </td>
                <td className="px-4 py-3 text-ink">{record.age}</td>
                <td className="px-4 py-3">
                  <span className={`inline-flex rounded-md px-2 py-1 text-xs font-medium ${genderBadgeClass(record.gender)}`}>
                    {record.gender}
                  </span>
                </td>
                <td className="px-4 py-3 text-ink">{record.location}</td>
                <td className="px-4 py-3">
                  <span className="flex items-center gap-1.5 text-ink">
                    <Phone className="h-3.5 w-3.5 text-ink-subtle" />
                    {record.contact}
                  </span>
                </td>
                <td className="px-4 py-3 text-ink-subtle">{record.remarks}</td>
                <td className="px-4 py-3">
                  <div className="flex items-center gap-1.5">
                    <button
                      onClick={() => { setSelectedRecord(record); setModalOpen(true); }}
                      className="flex h-8 w-8 items-center justify-center rounded-md border border-border text-ink-muted hover:bg-surface-muted"
                      aria-label={`View ${record.name}`}
                    >
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

      <div className="flex flex-wrap items-center justify-between gap-3 border-t border-border px-4 py-3">
        <p className="text-sm text-ink-subtle">
          Showing {records.length === 0 ? 0 : (page - 1) * pageSize + 1} to{" "}
          {Math.min(page * pageSize, records.length)} of {records.length} records
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

      {viewAllHref && (
        <div className="border-t border-border py-3 text-center">
          <a href={viewAllHref} className="inline-flex items-center gap-1 text-sm font-medium text-interactive-500 hover:underline">
            {viewAllLabel}
            <ChevronRightSmall className="h-3.5 w-3.5" />
          </a>
        </div>
      )}
    </div>

    <BirthdayDetailsModal record={selectedRecord} open={modalOpen} onOpenChange={setModalOpen} />
    </>
  );
}
