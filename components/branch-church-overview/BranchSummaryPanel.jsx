"use client";

import { Church, XCircle, User, Users, GraduationCap } from "lucide-react";
import { FaChurch } from "react-icons/fa";
import { FaUserTie } from "react-icons/fa";
import { FaPeopleGroup } from "react-icons/fa6";
import { FaSchool } from "react-icons/fa6";

const ICON_MAP = { church: FaChurch, "x-circle": XCircle, user: FaUserTie, users: FaPeopleGroup, "graduation-cap": FaSchool };


export function BranchSummaryPanel({ summary = [] }) {
  return (
    <div className="rounded-lg border border-border bg-white p-4 shadow-card">
      <h3 className="mb-3 text-sm font-semibold text-interactive-500">Branch Summary</h3>
      <ul className="space-y-3">
        {summary.map((item) => {
          const Icon = ICON_MAP[item.icon] ?? Church;
          return (
            <li key={item.label} className="flex items-center gap-2.5 text-sm">
              <Icon className="h-4 w-4 shrink-0 text-[#6158ff]" />
              <span className="flex-1 text-[#071052]">{item.label}</span>
              <span className="font-semibold text-[#071052]">{item.value}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
