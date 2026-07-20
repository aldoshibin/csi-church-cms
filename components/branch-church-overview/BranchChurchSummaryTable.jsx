// "use client";

// import * as React from "react";
// import Link from "next/link";
// import { ChevronLeft, ChevronRight, Eye, MoreVertical } from "lucide-react";
// import { Badge } from "@/components/ui/Badge";
// import { formatCurrency } from "@/lib/utils";


// export function BranchChurchSummaryTable({ branches = [] }) {
//   const [page, setPage] = React.useState(1);
//   const pageSize = 10;
//   const totalPages = Math.max(1, Math.ceil(branches.length / pageSize));
//   const visible = branches.slice((page - 1) * pageSize, page * pageSize);

//   return (
//     <div className="overflow-hidden rounded-lg border border-border bg-white shadow-card">
//       <div className="p-4">
//         <h3 className="text-sm font-semibold text-interactive-500">Branch Church Summary</h3>
//       </div>

//       <div className="overflow-x-auto">
//         <table className="w-full min-w-full text-left text-sm">
//           <thead className="bg-surface-canvas text-xs uppercase tracking-wide text-ink-muted">
//             <tr>
//               <th className="whitespace-nowrap px-4 py-3 font-medium">Branch Church</th>
//               <th className="whitespace-nowrap px-4 py-3 font-medium">Location</th>
//               <th className="whitespace-nowrap px-4 py-3 font-medium">Members</th>
//               <th className="whitespace-nowrap px-4 py-3 font-medium">
//                 Worship Services<br /><span className="normal-case text-[10px] text-ink-subtle">(This Week)</span>
//               </th>
//               <th className="whitespace-nowrap px-4 py-3 font-medium">Ministries</th>
//               <th className="whitespace-nowrap px-4 py-3 font-medium">Offerings (May)</th>
//               <th className="whitespace-nowrap px-4 py-3 font-medium">Status</th>
//               <th className="whitespace-nowrap px-4 py-3 font-medium">Actions</th>
//             </tr>
//           </thead>
//           <tbody className="divide-y divide-border">
//             {visible.map((branch) => (
//               <tr key={branch.id}>
//                 <td className="px-4 py-3">
//                   <Link href={`/parish-administration/branches/${branch.id}`} className="font-medium text-interactive-600 hover:underline">
//                     {branch.name}
//                   </Link>
//                 </td>
//                 <td className="px-4 py-3 text-ink">{branch.location}</td>
//                 <td className="px-4 py-3 font-medium text-interactive-600">{branch.members}</td>
//                 <td className="px-4 py-3 text-ink">{branch.worshipServices}</td>
//                 <td className="px-4 py-3 font-medium text-interactive-600">{branch.ministries}</td>
//                 <td className="px-4 py-3 text-ink">{formatCurrency(branch.offerings)}</td>
//                 <td className="px-4 py-3">
//                   <Badge variant="success">{branch.status}</Badge>
//                 </td>
//                 <td className="px-4 py-3">
//                   <div className="flex items-center gap-1.5">
//                     <button className="flex h-8 w-8 items-center justify-center rounded-md border border-border text-ink-muted hover:bg-surface-muted" aria-label={`View ${branch.name}`}>
//                       <Eye className="h-4 w-4" />
//                     </button>
//                     <button className="flex h-8 w-8 items-center justify-center rounded-md text-ink-subtle hover:bg-surface-muted" aria-label="Row actions">
//                       <MoreVertical className="h-4 w-4" />
//                     </button>
//                   </div>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       <div className="flex items-center justify-between border-t border-border px-4 py-3">
//         <p className="text-sm text-ink-subtle">
//           Showing {(page - 1) * pageSize + 1} to {Math.min(page * pageSize, branches.length)} of {branches.length} records
//         </p>
//         <div className="flex items-center gap-1.5">
//           <button
//             onClick={() => setPage((p) => Math.max(1, p - 1))}
//             disabled={page <= 1}
//             className="flex h-8 w-8 items-center justify-center rounded-md border border-border text-ink-muted hover:bg-surface-muted disabled:opacity-40"
//             aria-label="Previous page"
//           >
//             <ChevronLeft className="h-4 w-4" />
//           </button>
//           {Array.from({ length: totalPages }).map((_, i) => (
//             <button
//               key={i}
//               onClick={() => setPage(i + 1)}
//               className={`flex h-8 w-8 items-center justify-center rounded-md text-sm font-medium ${
//                 page === i + 1 ? "bg-interactive-500 text-white" : "text-ink-muted hover:bg-surface-muted"
//               }`}
//             >
//               {i + 1}
//             </button>
//           ))}
//           <button
//             onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
//             disabled={page >= totalPages}
//             className="flex h-8 w-8 items-center justify-center rounded-md border border-border text-ink-muted hover:bg-surface-muted disabled:opacity-40"
//             aria-label="Next page"
//           >
//             <ChevronRight className="h-4 w-4" />
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

"use client";

import * as React from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight, Eye, MoreVertical, Edit, Trash2, X } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { formatCurrency } from "@/lib/utils";

export function BranchChurchSummaryTable({ branches = [] }) {
  const [page, setPage] = React.useState(1);
  const [openMenuId, setOpenMenuId] = React.useState(null);
  const [selectedBranch, setSelectedBranch] = React.useState(null);
  const pageSize = 10;
  const totalPages = Math.max(1, Math.ceil(branches.length / pageSize));
  const visible = branches.slice((page - 1) * pageSize, page * pageSize);
  const menuRef = React.useRef(null);

  React.useEffect(() => {
    function handleClickOutside(e) {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpenMenuId(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

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
                <td className="relative px-4 py-3">
                  <div className="flex items-center gap-1.5">
                    <button
                      onClick={() => setSelectedBranch(branch)}
                      className="flex h-8 w-8 items-center justify-center rounded-md border border-border text-ink-muted hover:bg-surface-muted"
                      aria-label={`View ${branch.name}`}
                    >
                      <Eye className="h-4 w-4" />
                    </button>
                    <button
                      onClick={() => setOpenMenuId(openMenuId === branch.id ? null : branch.id)}
                      className="flex h-8 w-8 items-center justify-center rounded-md text-ink-subtle hover:bg-surface-muted"
                      aria-label="Row actions"
                    >
                      <MoreVertical className="h-4 w-4" />
                    </button>
                  </div>

                  {openMenuId === branch.id && (
                    <div
                      ref={menuRef}
                      className="absolute right-4 top-12 z-20 w-40 rounded-lg border border-border bg-white py-1.5 shadow-lg"
                    >
                      <button
                        onClick={() => { setSelectedBranch(branch); setOpenMenuId(null); }}
                        className="flex w-full items-center gap-2.5 px-4 py-2 text-sm text-ink hover:bg-surface-muted"
                      >
                        <Eye className="h-4 w-4" /> View
                      </button>
                      <button
                        onClick={() => setOpenMenuId(null)}
                        className="flex w-full items-center gap-2.5 px-4 py-2 text-sm text-ink hover:bg-surface-muted"
                      >
                        <Edit className="h-4 w-4" /> Edit
                      </button>
                      <button
                        onClick={() => setOpenMenuId(null)}
                        className="flex w-full items-center gap-2.5 px-4 py-2 text-sm text-danger-600 hover:bg-surface-muted"
                      >
                        <Trash2 className="h-4 w-4" /> Delete
                      </button>
                    </div>
                  )}
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

      {selectedBranch && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
          <div className="w-full max-w-2xl rounded-lg bg-white shadow-xl">
            <div className="flex items-center justify-between border-b border-border px-6 py-4">
              <h3 className="text-lg font-bold text-ink">Branch Church Details</h3>
              <button
                onClick={() => setSelectedBranch(null)}
                className="text-ink-muted hover:text-ink"
                aria-label="Close"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="grid grid-cols-1 gap-4 px-6 py-6 sm:grid-cols-2">
              <div className="rounded-lg bg-surface-muted px-4 py-3">
                <p className="text-xs text-ink-subtle">Branch Church</p>
                <p className="mt-1 font-semibold text-ink">{selectedBranch.name}</p>
              </div>
              <div className="rounded-lg bg-surface-muted px-4 py-3">
                <p className="text-xs text-ink-subtle">Location</p>
                <p className="mt-1 font-semibold text-ink">{selectedBranch.location}</p>
              </div>
              <div className="rounded-lg bg-surface-muted px-4 py-3">
                <p className="text-xs text-ink-subtle">Members</p>
                <p className="mt-1 font-semibold text-ink">{selectedBranch.members}</p>
              </div>
              <div className="rounded-lg bg-surface-muted px-4 py-3">
                <p className="text-xs text-ink-subtle">Worship Services</p>
                <p className="mt-1 font-semibold text-ink">{selectedBranch.worshipServices}</p>
              </div>
              <div className="rounded-lg bg-surface-muted px-4 py-3">
                <p className="text-xs text-ink-subtle">Ministries</p>
                <p className="mt-1 font-semibold text-ink">{selectedBranch.ministries}</p>
              </div>
              <div className="rounded-lg bg-surface-muted px-4 py-3">
                <p className="text-xs text-ink-subtle">Offerings (May)</p>
                <p className="mt-1 font-semibold text-ink">{formatCurrency(selectedBranch.offerings)}</p>
              </div>
              <div className="rounded-lg bg-surface-muted px-4 py-3 sm:col-span-1">
                <p className="text-xs text-ink-subtle">Status</p>
                <p className="mt-1 font-semibold text-ink">{selectedBranch.status}</p>
              </div>
            </div>

            <div className="flex justify-end gap-3 border-t border-border px-6 py-4">
              <button
                onClick={() => setSelectedBranch(null)}
                className="rounded-md px-4 py-2 text-sm font-medium text-ink-muted hover:bg-surface-muted"
              >
                Close
              </button>
              <button
                onClick={() => setSelectedBranch(null)}
                className="rounded-md bg-interactive-500 px-4 py-2 text-sm font-medium text-white hover:bg-interactive-600"
              >
                Edit Branch
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}