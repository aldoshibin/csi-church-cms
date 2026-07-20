// "use client";


// export function CommitteeWiseActivityTable({ rows = [] }) {
//   return (
//     <div className="rounded-lg border border-border bg-white shadow-card">
//       <div className="flex flex-wrap items-center justify-between gap-2 p-4">
//         <h3 className="text-sm font-semibold text-interactive-500">Committee-wise Activity Summary</h3>
//         <select className="h-8 rounded-md border border-border bg-white px-2 text-xs text-ink-muted">
//           <option>This Month</option>
//           <option>Last Month</option>
//           <option>This Year</option>
//         </select>
//       </div>

//       <div className="overflow-x-auto">
//         <table className="w-full min-w-full text-left text-sm">
//           <thead className="border-y border-border text-xs uppercase tracking-wide text-ink-subtle">
//             <tr>
//               {["Committee Name", "Total Activities", "Completed", "In Progress", "Pending", "Cancelled"].map((h) => (
//                 <th key={h} className="whitespace-nowrap px-4 py-3 font-medium">{h}</th>
//               ))}
//             </tr>
//           </thead>
//           <tbody className="divide-y divide-border">
//             {rows.map((row) => (
//               <tr key={row.id}>
//                 <td className="px-4 py-3 font-medium text-interactive-600">{row.name}</td>
//                 <td className="px-4 py-3 text-ink">{row.total}</td>
//                 <td className="px-4 py-3 text-ink">{row.completed}</td>
//                 <td className="px-4 py-3 text-ink">{row.inProgress}</td>
//                 <td className="px-4 py-3 text-ink">{row.pending}</td>
//                 <td className="px-4 py-3 text-ink">{row.cancelled}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       <div className="flex items-center justify-between border-t border-border px-4 py-3">
//         <p className="text-sm text-ink-subtle">Showing 1 to {rows.length} of {rows.length} records</p>
//         <div className="flex items-center gap-1.5">
//           <button className="flex h-8 w-8 items-center justify-center rounded-md border border-border text-ink-muted hover:bg-surface-muted" aria-label="Previous page">‹</button>
//           <span className="flex h-8 w-8 items-center justify-center rounded-md bg-interactive-500 text-sm font-medium text-white">1</span>
//           <button className="flex h-8 w-8 items-center justify-center rounded-md border border-border text-ink-muted hover:bg-surface-muted" aria-label="Next page">›</button>
//         </div>
//       </div>
//     </div>
//   );
// }
"use client";

import * as React from "react";
import { Eye, MoreVertical, X } from "lucide-react";

export function CommitteeWiseActivityTable({ rows = [] }) {
  const [selectedRow, setSelectedRow] = React.useState(null);

  const completionPct = (row) =>
    row.total > 0 ? ((row.completed / row.total) * 100).toFixed(1) : "0.0";

  return (
    <div className="rounded-lg border border-border bg-white shadow-card">
      <div className="flex flex-wrap items-center justify-between gap-2 p-4">
        <h3 className="text-sm font-semibold text-interactive-500">Committee-wise Activity Summary</h3>
        <select className="h-8 rounded-md border border-border bg-white px-2 text-xs text-ink-muted">
          <option>This Month</option>
          <option>Last Month</option>
          <option>This Year</option>
        </select>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-full text-left text-sm">
          <thead className="border-y border-border text-xs uppercase tracking-wide text-ink-subtle">
            <tr>
              {["Committee Name", "Total Activities", "Completed", "In Progress", "Pending", "Completion %", "Actions"].map((h) => (
                <th key={h} className="whitespace-nowrap px-4 py-3 font-medium">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {/* className={index === 0 ? "bg-[#e8f7f1]" : ""}  */}
            {rows.map((row, index) => (
              <tr key={row.id} className="hover:bg-[#e8f7f1]" >
                <td className="px-4 py-3 font-medium text-interactive-600">{row.name}</td>
                <td className="px-4 py-3 text-ink">{row.total}</td>
                <td className="px-4 py-3 text-ink">{row.completed}</td>
                <td className="px-4 py-3 text-ink">{row.inProgress}</td>
                <td className="px-4 py-3 text-ink">{row.pending}</td>
                <td className="px-4 py-3">
                  <div className="flex items-center gap-2">
                    <span className="font-medium text-ink">{completionPct(row)}%</span>
                    <div className="h-1.5 w-24 overflow-hidden rounded-full bg-surface-muted">
                      <div
                        className="h-full rounded-full bg-[#00846e]"
                        style={{ width: `${completionPct(row)}%` }}
                      />
                    </div>
                  </div>
                </td>
                <td className="px-4 py-3">
                  <div className="flex items-center gap-1.5">
                    <button
                      onClick={() => setSelectedRow(row)}
                      className="flex h-8 w-8 items-center justify-center rounded-md border border-border text-ink-muted hover:bg-surface-muted"
                      aria-label={`View ${row.name}`}
                    >
                      <Eye className="h-4 w-4" />
                    </button>
                    <button
                      className="flex h-8 w-8 items-center justify-center rounded-md text-ink-subtle hover:bg-surface-muted"
                      aria-label="Row actions"
                    >
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
        <p className="text-sm text-ink-subtle">Showing 1 to {rows.length} of {rows.length} records</p>
        <div className="flex items-center gap-1.5">
          <button className="flex h-8 w-8 items-center justify-center rounded-md border border-border text-ink-muted hover:bg-surface-muted" aria-label="Previous page">‹</button>
          <span className="flex h-8 w-8 items-center justify-center rounded-md bg-interactive-500 text-sm font-medium text-white">1</span>
          <button className="flex h-8 w-8 items-center justify-center rounded-md border border-border text-ink-muted hover:bg-surface-muted" aria-label="Next page">›</button>
        </div>
      </div>

      {selectedRow && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
          <div className="w-full max-w-lg rounded-lg bg-white shadow-xl">
            <div className="flex items-center justify-between border-b border-border px-5 py-4">
              <h3 className="text-base font-semibold text-interactive-500">View Details</h3>
              <button
                onClick={() => setSelectedRow(null)}
                className="text-ink-muted hover:text-ink"
                aria-label="Close"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="px-5 py-5">
              <p className="font-semibold text-ink">{selectedRow.name}</p>
              <p className="mt-1 text-sm text-ink-subtle">
                Status, activity count, member participation and schedule details are shown here.
              </p>
            </div>

            <div className="flex justify-end border-t border-border px-5 py-4">
              <button
                onClick={() => setSelectedRow(null)}
                className="rounded-md bg-interactive-500 px-4 py-2 text-sm font-medium text-white hover:bg-interactive-600"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}