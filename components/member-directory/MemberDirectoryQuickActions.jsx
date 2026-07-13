"use client";

import Link from "next/link";
import { UserPlus, Upload, Pencil, Printer, Search } from "lucide-react";

export function MemberDirectoryQuickActions({ onPrint, isPrinting }) {
  return (
    <div className="rounded-lg border border-border bg-white p-4 shadow-card">
      <h3 className="mb-3 text-sm font-semibold text-interactive-500">Quick Actions</h3>
      <ul className="space-y-2.5">
        <li>
          <Link href="/members/individual-registration" className="flex items-center gap-2 text-sm font-medium text-interactive-500 hover:underline">
            <UserPlus className="h-4 w-4" /> Add New Member
          </Link>
        </li>
        <li>
          <button disabled className="flex cursor-not-allowed items-center gap-2 text-sm font-medium text-ink-subtle" title="No import endpoint yet">
            <Upload className="h-4 w-4" /> Import Members
          </button>
        </li>
        <li>
          <button disabled className="flex cursor-not-allowed items-center gap-2 text-sm font-medium text-ink-subtle" title="No bulk-update endpoint yet">
            <Pencil className="h-4 w-4" /> Bulk Update Members
          </button>
        </li>
        <li>
          <button onClick={onPrint} disabled={isPrinting} className="flex items-center gap-2 text-sm font-medium text-interactive-500 hover:underline disabled:opacity-60">
            <Printer className="h-4 w-4" /> {isPrinting ? "Preparing..." : "Print Member List"}
          </button>
        </li>
        <li>
          <button disabled className="flex cursor-not-allowed items-center gap-2 text-sm font-medium text-ink-subtle" title="Use the filter bar above for now">
            <Search className="h-4 w-4" /> Advanced Search
          </button>
        </li>
      </ul>
    </div>
  );
}
