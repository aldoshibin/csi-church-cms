"use client";

import { Church, Users, Music, BookOpen, Heart, HeartHandshake, Volume2, Sparkles } from "lucide-react";

const ICONS = { Church, Users, Music, BookOpen, Heart, HeartHandshake, Volume2, Sparkles };

export function AssignmentIcon({ name = "Church", className = "h-5 w-5" }) {
  const Icon = ICONS[name] ?? Church;
  return <Icon className={className} />;
}
