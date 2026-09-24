"use client";

import { Megaphone, HandHeart, BookOpen, Users2, CalendarDays, Info, Gift, MoreHorizontal } from "lucide-react";

const ICONS = { Megaphone, HandHeart, BookOpen, Users2, CalendarDays, Info, Gift, MoreHorizontal };

export function AnnouncementIcon({ name = "Megaphone", className = "h-5 w-5" }) {
  const Icon = ICONS[name] ?? Megaphone;
  return <Icon className={className} />;
}
