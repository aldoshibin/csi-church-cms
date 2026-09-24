"use client";

import { Users2, CalendarCheck, HeartHandshake, Church, CircleDollarSign, ClipboardList, CalendarDays, Download } from "lucide-react";

const ICONS = { Users2, CalendarCheck, HeartHandshake, Church, CircleDollarSign, ClipboardList, CalendarDays, Download };

export function ReportIcon({ name = "ClipboardList", className = "h-5 w-5" }) {
  const Icon = ICONS[name] ?? ClipboardList;
  return <Icon className={className} />;
}
