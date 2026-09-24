"use client";

import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { Plus, ChevronDown, Link2, FileUp } from "lucide-react";

const itemClass =
  "flex w-full items-center gap-2 rounded px-2.5 py-2 text-sm text-ink-muted outline-none transition-colors hover:bg-surface-canvas hover:text-ink focus:bg-surface-canvas cursor-pointer";

export function LessonResourcesPanel() {
  return (
    <div className="rounded-lg border border-border bg-white p-4 shadow-card">
      <h3 className="mb-1 text-sm font-semibold text-ink">Resources</h3>
      <p className="mb-3 text-xs text-ink-subtle">You can add files or links related to this lesson.</p>
      <DropdownMenu.Root>
        <DropdownMenu.Trigger asChild>
          <button type="button" className="flex w-full items-center justify-center gap-2 rounded-md border border-border py-2 text-sm font-medium text-ink-muted hover:bg-surface-canvas">
            <Plus className="h-4 w-4" /> Add Resource <ChevronDown className="h-3.5 w-3.5 opacity-60" />
          </button>
        </DropdownMenu.Trigger>
        <DropdownMenu.Portal>
          <DropdownMenu.Content align="start" sideOffset={6} className="z-50 w-48 rounded-md border border-border bg-white p-1.5 shadow-elevated animate-fade-in">
            <DropdownMenu.Item className={itemClass}>
              <FileUp className="h-4 w-4" /> Upload File
            </DropdownMenu.Item>
            <DropdownMenu.Item className={itemClass}>
              <Link2 className="h-4 w-4" /> Add Link
            </DropdownMenu.Item>
          </DropdownMenu.Content>
        </DropdownMenu.Portal>
      </DropdownMenu.Root>
    </div>
  );
}
