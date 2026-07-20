"use client";

import Link from "next/link";
import { FaUserPlus } from "react-icons/fa";
import { FaDroplet } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";
import { FaIndianRupeeSign } from "react-icons/fa6";
import { IoCalendarClearOutline } from "react-icons/io5";
import { FaBullhorn } from "react-icons/fa6";
import { FaChartLine } from "react-icons/fa6";

const ACTIONS = [
  { label: "Add Family", href: "/families?new=1", icon: FaUserPlus },
  { label: "Add Member", href: "/members?new=1", icon: FaUserPlus },
  { label: "Record Baptism", href: "/sacraments/baptism?new=1", icon: FaDroplet },
  { label: "Record Marriage", href: "/sacraments/marriage?new=1", icon: FaHeart },
  { label: "Add Donation", href: "/finance/income?new=1", icon: FaIndianRupeeSign },
  { label: "Create Event", href: "/events?new=1", icon: IoCalendarClearOutline },
  { label: "Send Announcement", href: "/communication/bulk?new=1", icon: FaBullhorn },
  { label: "View Reports", href: "/reports", icon: FaChartLine },
];

export function QuickActionsWidget() {
  return (
    <div className=" border border-border bg-white p-4 shadow-card">
      <h3 className="mb-3 text-[16px] font-semibold text-[#00695C]">Quick Actions</h3>
      <div className="grid grid-cols-2 gap-2">
        {ACTIONS.map((action) => (
          <Link
            key={action.label}
            href={action.href}
            className="flex items-center gap-2 rounded-md border border-border px-3 py-2 text-sm text-ink transition-colors hover:border-interactive-300 hover:bg-interactive-50"
          >
            
            <action.icon className="h-5 w-5 shrink-0 text-white border bg-[#00796b] p-1 " />
            <span className="truncate">{action.label}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
