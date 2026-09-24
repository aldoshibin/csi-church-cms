"use client";

import Link from "next/link";
import { FolderCheck, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { formatDate } from "@/lib/utils";
import { ELECTION_TYPE_BADGE_MAP } from "@/lib/mock/vmElectionManagementMockData";

const STATUS_VARIANT = { Upcoming: "info", Ongoing: "warning", Completed: "success" };

export function PositionUsageCard({ elections }) {
  const count = elections?.length ?? 0;
  return (
    <div className="rounded-lg border border-border bg-white p-6 shadow-card">
      <h3 className="text-sm font-semibold text-ink">Position Usage</h3>

      {count === 0 ? (
        <p className="mt-4 text-sm text-ink-subtle">This position is not currently used in any election.</p>
      ) : (
        <>
          <div className="mt-4 flex items-start gap-3 rounded-md bg-success-50 px-4 py-3">
            <FolderCheck className="mt-0.5 h-4 w-4 shrink-0 text-success-600" />
            <div>
              <p className="text-sm font-medium text-success-700">Used in {count} Election{count > 1 ? "s" : ""}</p>
              <p className="text-xs text-success-600">This position is currently used in the following election{count > 1 ? "s" : ""}.</p>
            </div>
          </div>

          <div className="mt-4 overflow-hidden rounded-md border border-border">
            <table className="w-full text-left text-sm">
              <thead className="bg-surface-canvas text-xs uppercase tracking-wide text-ink-muted">
                <tr>
                  <th className="px-3 py-2 font-medium">Election Name</th>
                  <th className="px-3 py-2 font-medium">Election Type</th>
                  <th className="px-3 py-2 font-medium">Status</th>
                  <th className="px-3 py-2 font-medium">Election Date</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {elections.map((e) => (
                  <tr key={e.id}>
                    <td className="px-3 py-2.5">
                      <Link href={`/election-management/elections/${e.id}`} className="font-medium text-interactive-600 hover:underline">
                        {e.name}
                      </Link>
                    </td>
                    <td className="px-3 py-2.5"><Badge variant={ELECTION_TYPE_BADGE_MAP[e.type] ?? "info"}>{e.type}</Badge></td>
                    <td className="px-3 py-2.5"><Badge variant={STATUS_VARIANT[e.status] ?? "info"}>{e.status}</Badge></td>
                    <td className="px-3 py-2.5 text-ink">{formatDate(e.electionDate)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <Link href={`/election-management/elections/${elections[0].id}`} className="mt-3 flex items-center gap-1 text-sm font-medium text-interactive-600 hover:underline">
            View Election Details <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </>
      )}
    </div>
  );
}
