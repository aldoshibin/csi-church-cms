"use client";

import { Users2, XCircle, ClipboardCheck, Users, UserCheck } from "lucide-react";
import { FaPeopleGroup } from "react-icons/fa6";
import { FaUsers } from "react-icons/fa";
import { FaRegCalendarCheck } from "react-icons/fa";

const ICON_MAP = {
  "Active Committees": FaPeopleGroup,
  "Inactive Committees": XCircle,
  "Total Activities (This Month)": ClipboardCheck,
  "Total Members": FaUsers,
  "Avg. Member Participation": FaRegCalendarCheck,
};


export function CommitteeSummaryPanel({ summary = [] }) {
  return (
    <div className="rounded-lg border border-border bg-white p-4 shadow-card">
      <h3 className="mb-3 text-sm font-semibold text-interactive-500">Committee Summary</h3>
      <ul className="space-y-3">
        {summary.map((item) => {
          const Icon = ICON_MAP[item.label] ?? Users2;
          return (
            <li key={item.label} className="flex items-center gap-2.5 text-sm">
              <Icon className="h-4 w-4 shrink-0 text-[#3048d7]" />
              <span className="flex-1 text-[#031253]">{item.label}</span>
              <span className="font-semibold text-[#031253]">{item.value}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
