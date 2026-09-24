"use client";

import { Heart, HandHeart, MessageCircle, Share2 } from "lucide-react";

export function ReactionsEngagementCard({ reactions }) {
  if (!reactions) return null;
  const cards = [
    { key: "thanked", label: "Thanked", icon: Heart, iconBg: "bg-[#FCE7F3]", iconColor: "text-[#DB2777]" },
    { key: "prayedFor", label: "Prayed For", icon: HandHeart, iconBg: "bg-success-50", iconColor: "text-success-600" },
    { key: "comments", label: "Comments", icon: MessageCircle, iconBg: "bg-interactive-50", iconColor: "text-interactive-600" },
    { key: "shared", label: "Shared", icon: Share2, iconBg: "bg-warning-50", iconColor: "text-warning-600" },
  ];
  return (
    <div>
      <h4 className="mb-3 text-sm font-semibold text-ink">Reactions &amp; Engagement</h4>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        {cards.map(({ key, label, icon: Icon, iconBg, iconColor }) => (
          <div key={key} className="rounded-lg border border-border p-3 text-center">
            <span className={`mx-auto flex h-8 w-8 items-center justify-center rounded-full ${iconBg}`}>
              <Icon className={`h-4 w-4 ${iconColor}`} />
            </span>
            <p className="mt-2 font-display text-lg font-bold text-ink">{reactions[key]}</p>
            <p className="text-xs text-ink-subtle">{label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
