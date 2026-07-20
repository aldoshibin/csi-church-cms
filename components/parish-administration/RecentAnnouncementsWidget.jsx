// "use client";


// export function RecentAnnouncementsWidget({ announcements = [] }) {
//   return (
//     <div className="rounded-lg ">
//       <ul className="space-y-3">
//         {announcements.map((item) => (
//           <li key={item.id} className={`border-l-[3px] ${item.color} rounded-sm bg-surface-canvas py-2 pl-3 pr-2`}>
//             <div className="flex items-start justify-between gap-2">
//               <p className="text-[16px] font-semibold text-[#00695c]">{item.title}</p>
//               <span className="shrink-0 text-xs text-ink-subtle">{item.date}</span>
//             </div>
//             <p className="mt-0.5 text-xs text-ink-muted">{item.description}</p>
//           </li>
//         ))}
//       </ul>

//       <a href="/communication" className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-interactive-500 hover:underline">
//         See all announcements →
//       </a>
//     </div>
//   );
// }
"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export function RecentAnnouncementsWidget({ announcements = [] }) {
  return (
    <div>
      <ul>
        {announcements.map((item) => (
          <li
            key={item.id}
            className={cn(
              "border-l-[3px] py-2 pl-4 pr-0",
              item.color
            )}
            style={{
              borderBottom: `1px solid ${item.borderColor}`,
            }}
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <h4 className="text-[14px] font-semibold text-[#1F2937]">
                  {item.title}
                </h4>

                <p className=" text-[12px] leading-7 text-[#6B7280]">
                  {item.description}
                </p>
              </div>

              <span className="shrink-0 text-[12px] text-[#334157]">
                {item.date}
              </span>
            </div>
          </li>
        ))}
      </ul>

      <Link
        href="/communication"
        className="mt-5 inline-flex items-center gap-1 text-[16px] font-semibold text-[#00695C] hover:underline"
      >
        See all announcements
        <ArrowRight className="h-4 w-4" />
      </Link>
    </div>
  );
}