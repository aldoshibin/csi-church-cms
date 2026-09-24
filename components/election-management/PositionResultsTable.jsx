"use client";

import { Badge } from "@/components/ui/Badge";

export function PositionResultsTable({ results = [] }) {
  return (
    <div className="rounded-lg border border-border bg-white p-6 shadow-card">
      <h3 className="text-sm font-semibold text-ink">Position Results</h3>
      <div className="mt-4 overflow-x-auto">
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="border-b border-border text-xs font-medium uppercase tracking-wide text-ink-subtle">
              <th className="pb-2 pr-4">Position</th>
              <th className="pb-2 pr-4">Winning Candidate</th>
              <th className="pb-2 pr-4">Votes</th>
              <th className="pb-2 pr-4">Percentage</th>
              <th className="pb-2">Result</th>
            </tr>
          </thead>
          <tbody>
            {results.map((row) => (
              <tr key={row.id} className="border-b border-border last:border-0">
                <td className="py-3 pr-4">
                  <p className="font-medium text-ink">{row.position}</p>
                  <p className="text-xs text-ink-subtle">{row.positionCount}</p>
                </td>
                <td className="py-3 pr-4 text-ink">{row.candidateName}</td>
                <td className="py-3 pr-4 text-ink">{row.votes}</td>
                <td className="py-3 pr-4 text-ink">{row.percentage}%</td>
                <td className="py-3">
                  <Badge variant={row.result === "Elected" ? "success" : "default"}>{row.result}</Badge>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
