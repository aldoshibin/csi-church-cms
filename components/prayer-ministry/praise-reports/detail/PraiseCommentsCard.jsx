"use client";

import { Heart } from "lucide-react";
import { formatDate } from "@/lib/utils";

export function PraiseCommentsCard({ comments = [] }) {
  return (
    <div>
      <div className="mb-2 flex items-center justify-between">
        <h4 className="text-sm font-semibold text-ink">Comments</h4>
        <button type="button" className="text-xs font-medium text-interactive-500 hover:underline">View All</button>
      </div>
      <div className="flex flex-col gap-3">
        {comments.map((c, i) => (
          <div key={i} className="flex gap-2.5">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-interactive-50 text-xs font-semibold text-interactive-600">
              {c.author.split(" ").map((n) => n[0]).slice(0, 2).join("")}
            </span>
            <div className="min-w-0 flex-1">
              <p className="text-sm font-medium text-ink">{c.author}</p>
              <p className="text-sm text-ink-muted">{c.text}</p>
              <div className="mt-1 flex items-center gap-3 text-xs text-ink-subtle">
                <span>{formatDate(c.date)} - {c.time}</span>
                <span className="flex items-center gap-1"><Heart className="h-3 w-3 text-danger-500" /> {c.likes}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
