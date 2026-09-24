"use client";

import { Music, Users, UsersRound, HeartHandshake, Heart, PlayCircle, Sparkles, Monitor, Church } from "lucide-react";

const ICONS = { Music, Users, UsersRound, HeartHandshake, Heart, PlayCircle, Sparkles, Monitor, Church };

export function MinistryIcon({ name = "Church", className = "h-5 w-5" }) {
  const Icon = ICONS[name] ?? Church;
  return <Icon className={className} />;
}
