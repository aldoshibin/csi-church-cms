// "use client";

// import * as React from "react";
// import { Megaphone, Calendar, Info, Heart, FileText, Eye, MoreVertical, ChevronLeft, ChevronRight } from "lucide-react";
// import { typeBadgeClass, iconBgClass } from "@/lib/mock/announcementsMockData";

// const ICON_MAP = { megaphone: Megaphone, calendar: Calendar, info: Info, heart: Heart, notice: FileText };


// export function AnnouncementsList({ activeTab, announcements = [], totalPages, sortOptions = [] }) {
//   const [page, setPage] = React.useState(1);

//   return (
//     <div className="rounded-lg border border-border bg-white shadow-card">
//       <div className="flex flex-wrap items-center justify-between gap-3 p-4">
//         <h3 className="text-base font-bold text-interactive-500">
//           {activeTab} Announcements <span className="text-ink-subtle">({announcements.length})</span>
//         </h3>
//         <div className="flex items-center gap-2">
//           <span className="text-xs text-ink-subtle">Sort by:</span>
//           <select className="h-9 rounded-md border border-border px-2 text-sm text-ink">
//             {sortOptions.map((option) => (
//               <option key={option}>{option}</option>
//             ))}
//           </select>
//         </div>
//       </div>

//       <ul className="divide-y divide-border">
//         {announcements.map((item) => {
//           const Icon = ICON_MAP[item.icon] ?? Info;
//           return (
//             <li key={item.id} className="flex flex-wrap items-start gap-4 px-4 py-3">
//               <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${iconBgClass(item.icon)}`}>
//                 <Icon className="h-[18px] w-[18px]" />
//               </div>

//               <div className="min-w-[220px] flex-1">
//                 <p className="font-semibold text-interactive-600">{item.title}</p>
//                 <p className="mt-0.5 text-sm text-ink-subtle">{item.description}</p>
//               </div>

//               <span className={`mt-1 inline-flex shrink-0 rounded-md px-2 py-1 text-xs font-medium ${typeBadgeClass(item.type)}`}>
//                 {item.type}
//               </span>

//               <p className="mt-1 w-32 shrink-0 text-sm text-interactive-600">{item.audience}</p>

//               <div className="mt-1 w-24 shrink-0 text-sm">
//                 <p className="text-ink">{item.date}</p>
//                 <p className="text-xs text-ink-subtle">{item.time}</p>
//               </div>

//               <div className="mt-1 w-32 shrink-0 text-sm">
//                 <p className="font-medium text-interactive-600">{item.author}</p>
//                 <p className="text-xs text-ink-subtle">{item.authorRole}</p>
//               </div>

//               <div className="mt-1 flex shrink-0 items-center gap-1.5">
//                 <button className="flex h-8 w-8 items-center justify-center rounded-md border border-border text-ink-muted hover:bg-surface-muted" aria-label={`View ${item.title}`}>
//                   <Eye className="h-4 w-4" />
//                 </button>
//                 <button className="flex h-8 w-8 items-center justify-center rounded-md text-ink-subtle hover:bg-surface-muted" aria-label="Row actions">
//                   <MoreVertical className="h-4 w-4" />
//                 </button>
//               </div>
//             </li>
//           );
//         })}
//       </ul>

//       <div className="flex flex-wrap items-center justify-between gap-3 border-t border-border px-4 py-3">
//         <p className="text-sm text-ink-subtle">
//           Showing 1 to {announcements.length} of {announcements.length} announcements
//         </p>
//         <div className="flex items-center gap-3">
//           <div className="flex items-center gap-1.5">
//             <button
//               onClick={() => setPage((p) => Math.max(1, p - 1))}
//               disabled={page <= 1}
//               className="flex h-8 w-8 items-center justify-center rounded-md border border-border text-ink-muted hover:bg-surface-muted disabled:opacity-40"
//               aria-label="Previous page"
//             >
//               <ChevronLeft className="h-4 w-4" />
//             </button>
//             {Array.from({ length: Math.min(4, totalPages) }).map((_, i) => (
//               <button
//                 key={i}
//                 onClick={() => setPage(i + 1)}
//                 className={`flex h-8 w-8 items-center justify-center rounded-md text-sm font-medium ${
//                   page === i + 1 ? "bg-interactive-500 text-white" : "text-ink-muted hover:bg-surface-muted"
//                 }`}
//               >
//                 {i + 1}
//               </button>
//             ))}
//             {totalPages > 4 && <span className="px-1 text-ink-subtle">...</span>}
//             <button
//               onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
//               disabled={page >= totalPages}
//               className="flex h-8 w-8 items-center justify-center rounded-md border border-border text-ink-muted hover:bg-surface-muted disabled:opacity-40"
//               aria-label="Next page"
//             >
//               <ChevronRight className="h-4 w-4" />
//             </button>
//           </div>
//           <div className="flex items-center gap-2 text-sm text-ink-subtle">
//             Rows per page:
//             <select className="h-8 rounded-md border border-border px-2 text-sm text-ink" defaultValue={10}>
//               <option value={10}>10</option>
//               <option value={25}>25</option>
//               <option value={50}>50</option>
//             </select>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
"use client";

import * as React from "react";
import { Megaphone, Calendar, Info, Heart, FileText, Eye, MoreVertical, ChevronLeft, ChevronRight } from "lucide-react";
import { typeBadgeClass, iconBgClass } from "@/lib/mock/announcementsMockData";

const ICON_MAP = { megaphone: Megaphone, calendar: Calendar, info: Info, heart: Heart, notice: FileText };

export function AnnouncementsList({ activeTab, announcements = [], sortOptions = [] }) {
  const [page, setPage] = React.useState(1);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const totalPages = Math.max(1, Math.ceil(announcements.length / rowsPerPage));
  const visible = announcements.slice((page - 1) * rowsPerPage, page * rowsPerPage);

  return (
    <div className="rounded-lg border border-border bg-white shadow-card">
      <div className="flex flex-wrap items-center justify-between gap-3 p-4">
        <h3 className="text-base font-bold text-interactive-500">
          {activeTab} Announcements <span className="text-ink-subtle">({announcements.length})</span>
        </h3>
        <div className="flex items-center gap-2">
          <span className="text-xs text-ink-subtle">Sort by:</span>
          <select className="h-9 rounded-md border border-border px-2 text-sm text-ink">
            {sortOptions.map((option) => (
              <option key={option}>{option}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-full text-left text-sm">
          <thead className="border-y border-border text-xs uppercase tracking-wide text-ink-subtle">
            <tr>
              {["", "Title", "Type", "Audience", "Date", "Author", "Actions"].map((h) => (
                <th key={h} className="whitespace-nowrap px-4 py-3 font-medium text-[#06164a] bg-[#F8FAFC]">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {visible.map((item) => {
              const Icon = ICON_MAP[item.icon] ?? Info;
              return (
                <tr key={item.id}>
                  <td className="px-4 py-3">
                    <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${iconBgClass(item.icon)}`}>
                      <Icon className="h-[18px] w-[18px]" />
                    </div>
                  </td>

                  <td className="px-4 py-3">
                    <p className="font-semibold text-interactive-600">{item.title}</p>
                    <p className="mt-0.5 text-xs text-ink-subtle">{item.description}</p>
                  </td>

                  <td className="px-4 py-3">
                    <span className={`inline-flex rounded-md px-2 py-1 text-xs font-medium ${typeBadgeClass(item.type)}`}>
                      {item.type}
                    </span>
                  </td>

                  <td className="px-4 py-3 text-interactive-600">{item.audience}</td>

                  <td className="px-4 py-3">
                    <p className="text-ink">{item.date}</p>
                    <p className="text-xs text-ink-subtle">{item.time}</p>
                  </td>

                  <td className="px-4 py-3">
                    <p className="font-medium text-interactive-600">{item.author}</p>
                    <p className="text-xs text-ink-subtle">{item.authorRole}</p>
                  </td>

                  <td className="px-4 py-3">
                    <div className="flex items-center gap-1.5">
                      <button
                        className="flex h-8 w-8 items-center justify-center rounded-md border border-border text-ink-muted hover:bg-surface-muted"
                        aria-label={`View ${item.title}`}
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
              );
            })}
          </tbody>
        </table>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-3 border-t border-border px-4 py-3">
        <p className="text-sm text-ink-subtle">
          Showing {announcements.length === 0 ? 0 : (page - 1) * rowsPerPage + 1} to{" "}
          {Math.min(page * rowsPerPage, announcements.length)} of {announcements.length} announcements
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
    </div>
  );
}