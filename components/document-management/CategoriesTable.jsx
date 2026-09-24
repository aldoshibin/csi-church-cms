"use client";

import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import * as Icons from "lucide-react";
import { Pencil, MoreVertical, Eye, Trash2 } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Table } from "@/components/ui/Table";
import { formatDate } from "@/lib/utils";
import { AVATAR_COLORS } from "@/lib/mock/vmDocumentManagementMockData";

const menuItemClass =
  "flex w-full items-center gap-2 rounded px-2.5 py-2 text-sm text-ink-muted outline-none transition-colors hover:bg-surface-canvas hover:text-ink focus:bg-surface-canvas cursor-pointer";

function initials(name) {
  return name.split(" ").filter((w) => /^[A-Z]/.test(w)).slice(0, 2).map((w) => w[0]).join("");
}

function avatarStyle(name) {
  const idx = name.charCodeAt(0) % AVATAR_COLORS.length;
  return AVATAR_COLORS[idx];
}

export function CategoriesTable({ categories, isLoading, page, pageSize, totalCount, onPageChange, onView }) {
  const columns = [
    { key: "name", header: "Category Name", render: (cat) => {
      const Icon = Icons[cat.icon] ?? Icons.Folder;
      return (
        <div className="flex items-center gap-2.5">
          <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-md ${cat.iconBg} ${cat.iconColor}`}>
            <Icon className="h-4 w-4" />
          </span>
          <button type="button" onClick={() => onView(cat)} className="font-medium text-interactive-600 hover:underline">
            {cat.name}
          </button>
        </div>
      );
    } },
    { key: "description", header: "Description", render: (cat) => <span className="text-ink-muted">{cat.description}</span> },
    { key: "documents", header: "Documents", render: (cat) => cat.documentsCount },
    { key: "createdOn", header: "Created On", render: (cat) => formatDate(cat.createdOn) },
    { key: "createdBy", header: "Created By", render: (cat) => {
      const style = avatarStyle(cat.createdByName);
      return (
        <div className="flex items-center gap-2">
          <span
            className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-[11px] font-semibold"
            style={{ backgroundColor: style.bg, color: style.color }}
          >
            {initials(cat.createdByName)}
          </span>
          <span className="text-ink">{cat.createdByName}</span>
        </div>
      );
    } },
    { key: "status", header: "Status", render: (cat) => <Badge variant={cat.status === "Active" ? "success" : "danger"}>{cat.status}</Badge> },
    { key: "actions", header: "Actions", render: (cat) => (
      <div className="flex items-center gap-1">
        <button type="button" onClick={() => onView(cat)} className="flex h-8 w-8 items-center justify-center rounded-md text-ink-subtle hover:bg-surface-canvas" aria-label="Edit category">
          <Pencil className="h-4 w-4" />
        </button>
        <DropdownMenu.Root>
          <DropdownMenu.Trigger asChild>
            <button type="button" className="flex h-8 w-8 items-center justify-center rounded-md text-ink-subtle hover:bg-surface-canvas" aria-label="More actions">
              <MoreVertical className="h-4 w-4" />
            </button>
          </DropdownMenu.Trigger>
          <DropdownMenu.Portal>
            <DropdownMenu.Content align="end" sideOffset={6} className="z-50 w-48 rounded-md border border-border bg-white p-1.5 shadow-elevated animate-fade-in">
              <DropdownMenu.Item className={menuItemClass} onSelect={() => onView(cat)}><Eye className="h-4 w-4" /> View Category</DropdownMenu.Item>
              <DropdownMenu.Item className={menuItemClass}><Pencil className="h-4 w-4" /> Edit Category</DropdownMenu.Item>
              <DropdownMenu.Item className={`${menuItemClass} text-danger-600 hover:text-danger-600`}>
                <Trash2 className="h-4 w-4" /> Delete Category
              </DropdownMenu.Item>
            </DropdownMenu.Content>
          </DropdownMenu.Portal>
        </DropdownMenu.Root>
      </div>
    ) },
  ];

  return (
    <Table
      columns={columns} data={categories} isLoading={isLoading} selectable
      emptyMessage="No categories found."
      pagination={{ page, pageSize, totalCount, onPageChange }}
    />
  );
}
