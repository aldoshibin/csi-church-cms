"use client";

import { Megaphone, MessageSquareText, Mail, Phone, FileText, Users2, CalendarDays } from "lucide-react";

const ICONS = { Megaphone, MessageSquareText, Mail, Phone, FileText, Users2, CalendarDays };

export function CommunicationIcon({ name = "Megaphone", className = "h-5 w-5" }) {
  const Icon = ICONS[name] ?? Megaphone;
  return <Icon className={className} />;
}
