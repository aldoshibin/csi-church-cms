"use client";

import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { MoreVertical, Pencil, Copy, Eye, Trash2 } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { formatDate } from "@/lib/utils";
import { TemplateIcon } from "./TemplateIcon";
import { TEMPLATE_CATEGORY_VARIANT } from "@/lib/mock/vmTemplatesMockData";

const menuItemClass =
  "flex w-full items-center gap-2 rounded px-2.5 py-2 text-sm text-ink-muted outline-none transition-colors hover:bg-surface-canvas hover:text-ink focus:bg-surface-canvas cursor-pointer";

const ICON_STYLE = {
  Email: { bg: "bg-success-50", color: "text-success-600" },
  SMS: { bg: "bg-interactive-50", color: "text-interactive-600" },
};

export function TemplateCard({ template, onEdit, onDuplicate, onPreview, onDelete }) {
  const style = ICON_STYLE[template.type] ?? ICON_STYLE.Email;

  return (
    <div className="flex flex-col rounded-lg border border-border bg-white p-4 shadow-card">
      <div className="flex items-start justify-between gap-2">
        <div className="flex items-center gap-3">
          <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${style.bg} ${style.color}`}>
            <TemplateIcon type={template.type} className="h-5 w-5" />
          </span>
          <div>
            <p className="text-sm font-semibold text-ink">{template.title}</p>
            <p className="text-xs text-ink-subtle">{template.type}</p>
          </div>
        </div>
        <DropdownMenu.Root>
          <DropdownMenu.Trigger asChild>
            <button type="button" className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md text-ink-subtle hover:bg-surface-canvas" aria-label="More actions">
              <MoreVertical className="h-4 w-4" />
            </button>
          </DropdownMenu.Trigger>
          <DropdownMenu.Portal>
            <DropdownMenu.Content align="end" sideOffset={6} className="z-50 w-48 rounded-md border border-border bg-white p-1.5 shadow-elevated animate-fade-in">
              <DropdownMenu.Item className={menuItemClass} onSelect={() => onEdit?.(template)}><Pencil className="h-4 w-4" /> Edit Template</DropdownMenu.Item>
              <DropdownMenu.Item className={menuItemClass} onSelect={() => onDuplicate?.(template)}><Copy className="h-4 w-4" /> Duplicate</DropdownMenu.Item>
              <DropdownMenu.Item className={menuItemClass} onSelect={() => onPreview?.(template)}><Eye className="h-4 w-4" /> Preview</DropdownMenu.Item>
              <DropdownMenu.Separator className="my-1 h-px bg-border" />
              <DropdownMenu.Item className={`${menuItemClass} text-danger-600 hover:text-danger-600`} onSelect={() => onDelete?.(template)}><Trash2 className="h-4 w-4" /> Delete</DropdownMenu.Item>
            </DropdownMenu.Content>
          </DropdownMenu.Portal>
        </DropdownMenu.Root>
      </div>

      <div className="mt-3">
        <Badge variant={TEMPLATE_CATEGORY_VARIANT[template.category] ?? "default"}>{template.category}</Badge>
      </div>

      <p className="mt-3 line-clamp-3 flex-1 text-sm text-ink-muted">{template.content}</p>

      <div className="mt-4 flex items-center justify-between border-t border-border pt-3 text-xs text-ink-subtle">
        <span className="flex items-center gap-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-success-500" /> {template.status}
        </span>
        <span>Updated {formatDate(template.updatedOn)}</span>
      </div>
    </div>
  );
}
