"use client";

import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { MoreVertical, Eye, Pencil, Copy, Send, Archive, Trash2 } from "lucide-react";

const itemClass =
  "flex w-full items-center gap-2 rounded px-2.5 py-2 text-sm text-ink-muted outline-none transition-colors hover:bg-surface-canvas hover:text-ink focus:bg-surface-canvas cursor-pointer";

export function LessonRowActionsMenu({ lesson, onEdit, onDuplicate, onPublish, onArchive, onDelete }) {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button
          type="button"
          onClick={(e) => e.stopPropagation()}
          className="flex h-8 w-8 items-center justify-center rounded-md border border-border text-ink-subtle hover:bg-surface-canvas"
          aria-label={`More actions for ${lesson.title}`}
        >
          <MoreVertical className="h-4 w-4" />
        </button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content align="end" sideOffset={6} className="z-50 w-48 rounded-md border border-border bg-white p-1.5 shadow-elevated animate-fade-in">
          <DropdownMenu.Item className={itemClass} onSelect={() => onEdit?.(lesson)}>
            <Pencil className="h-4 w-4" /> Edit Lesson
          </DropdownMenu.Item>
          <DropdownMenu.Item className={itemClass} onSelect={() => onDuplicate?.(lesson)}>
            <Copy className="h-4 w-4" /> Duplicate Lesson
          </DropdownMenu.Item>
          <DropdownMenu.Item className={itemClass} onSelect={() => onPublish?.(lesson)}>
            <Send className="h-4 w-4" /> Publish Lesson
          </DropdownMenu.Item>
          <DropdownMenu.Item className={itemClass} onSelect={() => onArchive?.(lesson)}>
            <Archive className="h-4 w-4" /> Archive Lesson
          </DropdownMenu.Item>
          <DropdownMenu.Separator className="my-1 h-px bg-border" />
          <DropdownMenu.Item className={`${itemClass} text-danger-600 hover:text-danger-600`} onSelect={() => onDelete?.(lesson)}>
            <Trash2 className="h-4 w-4" /> Delete Lesson
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
}
