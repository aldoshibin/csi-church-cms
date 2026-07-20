// "use client";

// import Link from "next/link";
// import { cn } from "@/lib/utils";


// export function AnnouncementsWidget({ announcements = [] }) {
//   return (
//     <div className="rounded-lg border border-border bg-white p-4 shadow-card">
//       <div className="mb-3 flex items-center justify-between">
//         <h3 className="text-sm font-semibold text-interactive-500">Announcements</h3>
//         <Link href="/communication" className="text-xs font-medium text-interactive-500 hover:underline">
//           View All →
//         </Link>
//       </div>

//       <ul className="space-y-3">
//         {announcements.map((item) => (
//           <li
//             key={item.id}
//             className={cn(
//               "rounded-md border-l-2 py-1 pl-3",
//               item.highlight ? "border-accent-400" : "border-border"
//             )}
//           >
//             <div className="flex items-start justify-between gap-2">
//               <p className="text-sm font-medium text-ink">{item.title}</p>
//               <span className="shrink-0 text-xs text-ink-subtle">{item.date}</span>
//             </div>
//             <p className="mt-0.5 text-xs text-ink-subtle">{item.description}</p>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }
"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export function AnnouncementsWidget({ announcements = [] }) {
  return (
    <div className=" border border-border bg-white p-6 shadow-card">
      {/* Header */}
      <div className="mb-6 flex items-center justify-between">
        <h3 className="text-[16px] font-semibold text-[#00695C]">
          Announcements
        </h3>

        <Link
          href="/communication"
          className="flex items-center gap-1 text-sm font-medium text-[#00695C] hover:underline"
        >
          View All
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>

      {/* Announcement List */}
      <ul>
        {announcements.map((item, index) => (
          <li
            key={item.id}
            className={cn(
              "border-l-2 pl-5 py-2 ",
              item.color === "orange"
                ? "border-l-orange-500 border-b-2 border-[#FF8800]"
                : "border-l-[#009688] border-b-2 border-[#009688]",
              index === announcements.length - 1 && "border-b-2 border-teal-600"
            )}
          >
            <div className="flex items-start justify-between gap-2 ">
              <h4 className="text-[14px] font-semibold text-[#1f2937]">
                {item.title}
              </h4>

              <span className=" text-[12px] text-[#6b7280]">
                {item.date}
              </span>
            </div>

            <p className=" max-w-[85%] text-[10px] leading-7 text-[#33415f] m-0">
              {item.description}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}