"use client";

import Link from "next/link";

/** Small "View All →" link with an arrow that nudges right on hover.
 * Used across Parish Administration's card headers (Prayer Request
 * Summary, Birthdays, Anniversaries, Committee Activity, Branch Church
 * Overview) — pulled into one component since the same markup was
 * getting repeated 6 times with tiny inconsistencies (some had
 * hover:underline, some didn't; some had the hover animation, some
 * used a plain arrow). */
export function ViewAllLink({ href = "/#", label = "View All", className = "" }) {
  return (
    <Link
      href={href}
      className={`group inline-flex items-center gap-1 text-xs font-medium text-interactive-500 ${className}`}
    >
      <span>{label}</span>
      <span className="inline-block transform transition-transform duration-300 ease-in-out group-hover:translate-x-2">
        →
      </span>
    </Link>
  );
}
