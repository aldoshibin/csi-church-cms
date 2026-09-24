"use client";

import Link from "next/link";
import { ArrowRight, Heart, Waves, Sparkles, BookOpen } from "lucide-react";

const ICON_MAP = { heart: Heart, wave: Waves, sparkle: Sparkles };

export function RelatedLessonsPanel({ lessons = [] }) {
  return (
    <div className="rounded-lg border border-border bg-white p-4 shadow-card">
      <h3 className="mb-3 text-sm font-semibold text-ink">Related Lessons</h3>
      <div className="flex flex-col gap-3.5">
        {lessons.map((l) => {
          const Icon = ICON_MAP[l.icon] ?? BookOpen;
          return (
            <Link key={l.title} href="/sunday-school/lessons" className="flex items-center gap-3 hover:opacity-80">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full" style={{ backgroundColor: `${l.color}1A` }}>
                <Icon className="h-4 w-4" style={{ color: l.color }} />
              </span>
              <div className="min-w-0">
                <p className="truncate text-sm font-medium text-ink">{l.title}</p>
                <p className="truncate text-xs text-ink-subtle">{l.className}</p>
              </div>
            </Link>
          );
        })}
      </div>
      <Link href="/sunday-school/lessons" className="mt-3 flex items-center gap-1.5 text-sm font-medium text-interactive-500 hover:underline">
        View All Lessons <ArrowRight className="h-3.5 w-3.5" />
      </Link>
    </div>
  );
}
