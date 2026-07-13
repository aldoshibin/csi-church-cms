"use client";

import * as React from "react";
import Link from "next/link";
import { Eye, MoreVertical } from "lucide-react";
import { statusBadgeClass } from "@/lib/mock/committeesMockData";
import { CommitteeViewDetailsModal } from "./CommitteeViewDetailsModal";


export function CommitteesTable({ committees = [] }) {
  const [selectedCommittee, setSelectedCommittee] = React.useState(null);
  const [modalOpen, setModalOpen] = React.useState(false);

  return (
    <>
      <div className="rounded-lg border border-border bg-white shadow-card">
        <div className="p-4">
          <h3 className="text-sm font-semibold text-interactive-500">Committees</h3>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-full text-left text-sm">
            <thead className="border-y border-border bg-surface-canvas text-xs uppercase tracking-wide text-ink-subtle">
              <tr>
                {["Committee Name", "Chairperson", "Members", "Status", "Actions"].map((h) => (
                  <th key={h} className="whitespace-nowrap px-4 py-3 font-medium">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {committees.map((committee) => (
                <tr key={committee.id}>
                  <td className="px-4 py-3">
                    <Link href={`/parish-administration/committees/${committee.id}`} className="font-medium text-interactive-600 hover:underline">
                      {committee.name}
                    </Link>
                  </td>
                  <td className="px-4 py-3 text-ink">{committee.chairperson}</td>
                  <td className="px-4 py-3 text-ink">{committee.members}</td>
                  <td className="px-4 py-3">
                    <span className={`inline-flex rounded-md px-2 py-1 text-xs font-medium ${statusBadgeClass(committee.status)}`}>
                      {committee.status}
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-1.5">
                      <button
                        onClick={() => { setSelectedCommittee(committee); setModalOpen(true); }}
                        className="flex h-8 w-8 items-center justify-center rounded-md border border-border text-ink-muted hover:bg-surface-muted"
                        aria-label={`View ${committee.name}`}
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
      </div>

      <CommitteeViewDetailsModal committee={selectedCommittee} open={modalOpen} onOpenChange={setModalOpen} />
    </>
  );
}
