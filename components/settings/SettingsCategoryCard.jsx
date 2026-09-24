"use client";

import Link from "next/link";
import * as Icons from "lucide-react";
import { ArrowRight } from "lucide-react";

export function SettingsCategoryCard({ category }) {
  const Icon = Icons[category.icon] ?? Icons.Settings;
  return (
    <Link
      href={category.href}
      className="group flex flex-col justify-between gap-6 rounded-lg border border-border bg-white p-5 shadow-card transition-colors hover:border-interactive-500"
    >
      <div className="flex flex-col gap-3">
        <span className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-md ${category.iconBg} ${category.iconColor}`}>
          <Icon className="h-5 w-5" />
        </span>
        <div>
          <p className="text-sm font-semibold text-ink">{category.title}</p>
          <p className="mt-1.5 text-sm text-ink-subtle">{category.description}</p>
        </div>
      </div>
      <ArrowRight className="h-4 w-4 self-end text-ink-subtle transition-colors group-hover:text-interactive-600" />
    </Link>
  );
}
