// "use client";

// import Link from "next/link";


// export function MiniTableWidget({ title, viewAllHref, columns, rows, getRowId = (row) => row.id }) {
//   return (
//     <div className="rounded-lg border border-border bg-white p-4 shadow-card">
//       <div className="mb-3 flex items-center justify-between">
//         <h3 className="text-sm font-semibold text-[#00695c]">{title}</h3>
//         {viewAllHref && (
//           <Link href={viewAllHref} className="text-xs font-medium text-interactive-500 hover:underline">
//             View All →
//           </Link>
//         )}
//       </div>

//       <div className="overflow-x-auto">
//         <table className="w-full text-left text-sm rounded-full border-4">
//           <thead>
//             <tr className="border-b border-border text-xs text-[#071351] rounded-full border-4">
//               {columns.map((col) => (
//                 <th key={col.key} className="pb-2 pr-3 font-medium rounded-md border-4">{col.header}</th>
//               ))}
//             </tr>
//           </thead>
//           <tbody className="divide-y divide-border">
//             {rows.map((row) => (
//               <tr key={getRowId(row)}>
//                 {columns.map((col) => (
//                   <td key={col.key} className="py-2 pr-3 text-[#071351] text-[12px]">
//                     {col.render ? col.render(row) : row[col.key]}
//                   </td>
//                 ))}
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }
"use client";

import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

export function MiniTableWidget({
  title,
  viewAllHref,
  columns,
  rows,
  getRowId = (row) => row.id,
  page = 1,
  pageSize = rows.length,
  totalRecords = rows.length,
  onPageChange,
}) {
  const totalPages = Math.max(1, Math.ceil(totalRecords / pageSize));
  const rangeStart = totalRecords === 0 ? 0 : (page - 1) * pageSize + 1;
  const rangeEnd = Math.min(page * pageSize, totalRecords);

  return (
    <div className=" border border-border bg-white p-4 shadow-card">
      <div className="mb-3 flex items-center justify-between">
        <h3 className="text-sm font-semibold text-[#00695c]">{title}</h3>
        {viewAllHref && (
          <Link href={viewAllHref} className="text-xs font-medium text-interactive-500 hover:underline">
            View All →
          </Link>
        )}
      </div>
<div className="overflow-hidden rounded-sm border border-border ">
      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm ">
          <thead>
            <tr className="border-b border-border text-xs text-[#071351] bg-[#f7f9fc] ">
              {columns.map((col) => (
                <th key={col.key} className="pb-2 pr-3 font-medium pt-2 pl-1">{col.header}</th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {rows.map((row) => (
              <tr key={getRowId(row)}>
                {columns.map((col) => (
                  <td key={col.key} className="py-2 pr-3 text-sm text-[#071351] pl-1">
                    {col.render ? col.render(row) : row[col.key]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      </div>

      <div className="mt-3 flex items-center justify-between border-t border-border pt-3">
        <p className="text-xs text-ink-subtle">
          Showing {rangeStart} to {rangeEnd} of {totalRecords} records
        </p>
        <div className="flex items-center gap-1.5">
          <button
            type="button"
            disabled={page <= 1}
            onClick={() => onPageChange?.(page - 1)}
            aria-label="Previous page"
            className="flex h-7 w-7 items-center justify-center rounded-md border border-border text-ink-subtle disabled:opacity-40"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
            <button
              key={n}
              type="button"
              onClick={() => onPageChange?.(n)}
              className={
                n === page
                  ? "flex h-7 w-7 items-center justify-center rounded-md bg-interactive-500 text-xs font-semibold text-white"
                  : "flex h-7 w-7 items-center justify-center rounded-md border border-border text-xs font-medium text-ink-subtle"
              }
            >
              {n}
            </button>
          ))}
          <button
            type="button"
            disabled={page >= totalPages}
            onClick={() => onPageChange?.(page + 1)}
            aria-label="Next page"
            className="flex h-7 w-7 items-center justify-center rounded-md border border-border text-ink-subtle disabled:opacity-40"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}