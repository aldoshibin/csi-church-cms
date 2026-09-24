"use client";

import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { ChevronDown, Check } from "lucide-react";
import { TEACHER_CLASS_OPTIONS } from "@/lib/mock/teachersMockData";

export function ClassesToTeachSelect({ value = [], onToggle }) {
  const label = value.length === 0 ? "Select classes" : value.length === 1 ? value[0] : `${value.length} classes selected`;

  return (
    <div>
      <label className="mb-1.5 block text-sm font-medium text-ink">Classes to Teach <span className="text-danger-500">*</span></label>
      <DropdownMenu.Root>
        <DropdownMenu.Trigger asChild>
          <button
            type="button"
            className="flex h-[42px] w-full items-center justify-between rounded-lg border border-border bg-white px-3.5 text-sm text-ink hover:bg-surface-canvas"
          >
            <span className={value.length === 0 ? "text-ink-subtle" : "text-ink"}>{label}</span>
            <ChevronDown className="h-4 w-4 text-ink-subtle" />
          </button>
        </DropdownMenu.Trigger>
        <DropdownMenu.Portal>
          <DropdownMenu.Content align="start" sideOffset={6} className="z-50 w-[280px] rounded-md border border-border bg-white p-1.5 shadow-elevated animate-fade-in">
            {TEACHER_CLASS_OPTIONS.map((className) => {
              const checked = value.includes(className);
              return (
                <DropdownMenu.CheckboxItem
                  key={className}
                  checked={checked}
                  onSelect={(e) => e.preventDefault()}
                  onCheckedChange={() => onToggle(className)}
                  className="flex items-center gap-2 rounded px-2.5 py-2 text-sm text-ink-muted outline-none transition-colors hover:bg-surface-canvas hover:text-ink cursor-pointer"
                >
                  <span className={`flex h-4 w-4 shrink-0 items-center justify-center rounded border ${checked ? "border-interactive-500 bg-interactive-500" : "border-border"}`}>
                    {checked && <Check className="h-3 w-3 text-white" />}
                  </span>
                  {className}
                </DropdownMenu.CheckboxItem>
              );
            })}
          </DropdownMenu.Content>
        </DropdownMenu.Portal>
      </DropdownMenu.Root>
    </div>
  );
}
