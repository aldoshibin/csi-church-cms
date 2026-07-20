// "use client";

// import Link from "next/link";
// import { MapPin } from "lucide-react";
// import { cn } from "@/lib/utils";
// import clsx from "clsx";


// export function UpcomingEventsListWidget({ events = [] }) {
//   return (
//     <div className="rounded-lg border border-border bg-white p-4 shadow-card">
//       <div className="mb-3 flex items-center justify-between">
//         <h3 className="text-sm font-semibold text-interactive-500">Upcoming Events</h3>
//         <Link href="/events" className="text-xs font-medium text-interactive-500 hover:underline">
//           View Calendar →
//         </Link>
//       </div>

//       <ul className="space-y-3">
//         {events.map((event) => (
//           <li key={event.id} className="flex items-start gap-3">
//             <div
//               className={cn(
//                 "flex w-12 shrink-0 flex-col items-center rounded-md border py-1 text-center",
//                 event.highlight ? "border-accent-300 bg-accent-50" : "border-border bg-[#EEF6FF]"
//               )}
//             >
//               <span className={cn("text-[10px] font-semibold uppercase", event.highlight ? "text-accent-600" : "text-[#3b48c4]")}>
//                 {event.month}
//               </span>
//               <span className={clsx("text-base font-bold leading-none ",event.highlight ? "text-accent-600" : "text-[#3b48c4]")}>{event.day}</span>
//             </div>
//             <div className="min-w-0 flex-1">
//               <p className="truncate text-sm font-medium text-ink">{event.title}</p>
//               <p className="text-xs text-ink-subtle">{event.when}</p>
//               <p className="mt-0.5 flex items-center gap-1 text-xs text-ink-subtle">
//                 <MapPin className="h-3 w-3" /> {event.location}
//               </p>
//             </div>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }
// "use client";

// import Link from "next/link";
// import { MapPin, User } from "lucide-react";
// import { cn } from "@/lib/utils";

// const DATE_COLORS = {
//   purple: { bg: "bg-violet-50", text: "text-violet-600" },
//   blue: { bg: "bg-blue-50", text: "text-blue-600" },
//   orange: { bg: "bg-[#fff2e0]", text: "text-[#f58220]" },
//   green: { bg: "bg-green-50", text: "text-green-600" },
//   indigo: { bg: "bg-indigo-50", text: "text-indigo-600" },
// };

// export function UpcomingEventsListWidget({ events = [] }) {
//   return (
//     <div className="rounded-lg border border-border bg-white p-4 shadow-card">
//       <div className="mb-3 flex items-center justify-between">
//         <h3 className="text-sm font-semibold text-interactive-500">Upcoming Events</h3>
//         <Link href="/events" className="text-xs font-medium text-interactive-500 hover:underline">
//           View Calendar →
//         </Link>
//       </div>

//       <ul>
//         {events.map((event, i) => {
//           const c = DATE_COLORS[event.color] ?? DATE_COLORS.blue;
//           const LocationIcon = event.locationIcon === "person" ? User : MapPin;
//           return (
//             <li
//               key={event.id}
//               className={cn("flex items-center gap-3 py-3", i !== events.length - 1 && "border-b border-border")}
//             >
//               <div className={cn("flex p-3 shrink-0 flex-col items-center text-center", c.bg)}>
//                 <span className={cn("text-[10px] font-semibold uppercase mb-3", c.text)}>{event.month}</span>
//                 <span className={cn("text-base font-bold leading-none", c.text)}>{event.day}</span>
//               </div>

//               <div className="min-w-0 flex-1">
//                 <p className="text-sm font-medium leading-snug text-ink">{event.title}</p>
//                 <p className="text-xs text-ink-subtle">{event.when}</p>
//               </div>

//               <div className="flex  gap-1 text-xs text-ink-subtle">
//                 <LocationIcon className="h-3 w-3" /> {event.location}
//               </div>
//             </li>
//           );
//         })}
//       </ul>
//     </div>
//   );
// }

"use client";

import Link from "next/link";
import { MapPin, User, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const DATE_COLORS = {
  purple: { bg: "bg-violet-50", text: "text-violet-600" },
  blue: { bg: "bg-blue-50", text: "text-blue-600" },
  orange: { bg: "bg-orange-50", text: "text-orange-500" },
  green: { bg: "bg-green-50", text: "text-green-600" },
  indigo: { bg: "bg-indigo-50", text: "text-indigo-600" },
};

export function UpcomingEventsListWidget({ events = [] }) {
  return (
    <div className=" border border-border bg-white p-6 shadow-card">
      {/* Header */}
      <div className="mb-5 flex items-center justify-between">
        <h3 className="text-[18px] font-semibold text-[#00695C]">
          Upcoming Events
        </h3>

        <Link
          href="/events"
          className="flex items-center gap-1 text-sm font-medium text-[#00695C] hover:underline"
        >
          View Calendar
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>

      {/* Event List */}
      <ul>
        {events.map((event, index) => {
          const color = DATE_COLORS[event.color] ?? DATE_COLORS.blue;
          const Icon = event.locationIcon === "person" ? User : MapPin;

          return (
            <li
              key={event.id}
              className={cn(
                "grid grid-cols-[1fr,3fr,2fr] gap-5 py-3",
                index !== events.length - 1 && "border-b border-gray-200"
              )}
            >
              {/* Date */}
              <div
                className={cn(
                  "flex h-14 w-10 shrink-0 flex-col items-center justify-center",
                  color.bg
                )}
              >
                <span
                  className={cn(
                    "text-[11px] font-semibold uppercase tracking-wide",
                    color.text
                  )}
                >
                  {event.month}
                </span>
                <span
                  className={cn(
                    "mt-1 text-[18px] font-bold leading-none",
                    color.text
                  )}
                >
                  {event.day}
                </span>
              </div>

              {/* Event Details */}
              <div className="flex-1 min-w-0">
                <h4 className="text-[12px] font-semibold  text-gray-900">
                  {event.title}
                </h4>
                <p className="mt-1 text-xs text-gray-600">
                  {event.when}
                </p>
              </div>
               <div className="mt-1 flex items-center gap-1 text-xs text-gray-500">
                  <Icon className="h-4 w-4" />
                  <span>{event.location}</span>
                </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}