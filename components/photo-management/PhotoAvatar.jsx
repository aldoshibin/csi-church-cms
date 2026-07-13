"use client";

import { User } from "lucide-react";

export function PhotoAvatar({ member, size = "md" }) {
  const dims = size === "lg" ? "h-24 w-24" : "h-14 w-14";
  if (!member.has_photo) {
    return (
      <div className={`flex ${dims} shrink-0 items-center justify-center rounded-full bg-surface-muted text-ink-subtle`}>
        <User className={size === "lg" ? "h-12 w-12" : "h-7 w-7"} />
      </div>
    );
  }
  return (
    <div className={`flex ${dims} shrink-0 items-center justify-center rounded-full`} style={{ backgroundColor: member.avatarColor }}>
      <User className={size === "lg" ? "h-12 w-12 text-ink/40" : "h-7 w-7 text-ink/40"} />
    </div>
  );
}
