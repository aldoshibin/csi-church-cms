"use client";

import Link from "next/link";
import { FaCopy } from "react-icons/fa6";
import { FaHandsPraying } from "react-icons/fa6";
import { FaCheck } from "react-icons/fa6";
import { FaFileLines } from "react-icons/fa6";

export function PrayerRequestsWidget({ newRequests, inPrayer, answered, total }) {
  const rows = [
    { label: "New Requests", value: newRequests, icon: FaCopy, color: "text-white bg-[#009688]" },
    { label: "In Prayer", value: inPrayer, icon: FaHandsPraying, color: "text-white bg-[#009688]" },
    { label: "Answered", value: answered, icon: FaCheck, color: "text-white bg-[#009688]" },
    { label: "Total Requests", value: total, icon: FaFileLines, color: "text-white bg-[#009688]" },
  ];

  return (
    <div className="border border-border bg-white p-4 shadow-card">
      <div className="mb-3 flex items-center justify-between">
        <h3 className="text-[16px] font-semibold text-[#00695C]">Prayer Requests</h3>
        <Link href="/prayers" className="text-xs font-medium text-interactive-500 hover:underline">
          View All →
        </Link>
      </div>

      <ul className="space-y-3">
        {rows.map((row) => (
          <li key={row.label} className="flex items-center gap-3  border-b border-border pb-3 ">
            <div className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full ${row.color}`}>
              <row.icon className="h-3.5 w-3.5" />
            </div>
            <span className="flex-1 text-sm text-ink">{row.label}</span>
            <span className="text-sm font-semibold text-ink ">{row.value}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
