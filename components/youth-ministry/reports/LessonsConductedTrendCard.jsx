"use client";

import Link from "next/link";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { BookOpen } from "lucide-react";

export function LessonsConductedTrendCard({ trend = [], summary }) {
  return (
    <div className="rounded-lg border border-border bg-white p-4 shadow-card">
      <div className="mb-3 flex items-center justify-between">
        <h3 className="flex items-center gap-2 text-sm font-semibold text-ink">
          <BookOpen className="h-4 w-4 text-interactive-600" /> Lessons Conducted Trend
        </h3>
        <Link href="/youth-ministry/lessons" className="text-xs font-medium text-interactive-500 hover:underline">View Report</Link>
      </div>
      <div className="h-[150px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={trend} margin={{ left: -20, right: 10 }}>
            <CartesianGrid vertical={false} stroke="#F1F5F9" />
            <XAxis dataKey="label" tick={{ fontSize: 10, fill: "#8B90A0" }} axisLine={false} tickLine={false} />
            <YAxis tick={{ fontSize: 10, fill: "#8B90A0" }} axisLine={false} tickLine={false} />
            <Tooltip contentStyle={{ borderRadius: 8, fontSize: 12 }} />
            <Bar dataKey="value" name="Lessons Conducted" fill="#7C3AED" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className="mt-3 grid grid-cols-4 gap-2 border-t border-surface-muted pt-3 text-center">
        <div>
          <p className="font-display text-lg font-bold text-ink">{summary.totalLessons}</p>
          <p className="text-xs text-ink-subtle">Total Lessons</p>
        </div>
        <div>
          <p className="font-display text-lg font-bold text-ink">{summary.published}</p>
          <p className="text-xs text-ink-subtle">Published</p>
        </div>
        <div>
          <p className="font-display text-lg font-bold text-ink">{summary.draft}</p>
          <p className="text-xs text-ink-subtle">Draft</p>
        </div>
        <div>
          <p className="font-display text-lg font-bold text-ink">{summary.scheduled}</p>
          <p className="text-xs text-ink-subtle">Scheduled</p>
        </div>
      </div>
    </div>
  );
}
