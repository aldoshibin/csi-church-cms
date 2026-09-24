"use client";

import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { Folder, MoreVertical, Eye, Download, Share2, Trash2, Pencil } from "lucide-react";
import { Table } from "@/components/ui/Table";
import { formatDate } from "@/lib/utils";

const menuItemClass =
  "flex w-full items-center gap-2 rounded px-2.5 py-2 text-sm text-ink-muted outline-none transition-colors hover:bg-surface-canvas hover:text-ink focus:bg-surface-canvas cursor-pointer";

export function FoldersTable({ folders, isLoading, page, pageSize, totalCount, onPageChange, onView }) {
  const columns = [
    { key: "folderName", header: "Folder Name", render: (folder) => (
      <div className="flex items-center gap-2.5">
        <Folder className="h-4 w-4 shrink-0 text-[#F59E0B]" />
        <button type="button" onClick={() => onView(folder)} className="font-medium text-interactive-600 hover:underline">
          {folder.folderName}
        </button>
      </div>
    ) },
    { key: "description", header: "Description", render: (folder) => <span className="text-ink-muted">{folder.description}</span> },
    { key: "documents", header: "Documents", render: (folder) => folder.documentsCount },
    { key: "size", header: "Size", render: (folder) => folder.sizeLabel },
    { key: "createdOn", header: "Created On", render: (folder) => formatDate(folder.createdOn, { hour: "numeric", minute: "2-digit" }) },
    { key: "createdBy", header: "Created By", render: (folder) => (
      <div>
        <p className="text-ink">{folder.createdByName}</p>
        <p className="text-xs text-ink-subtle">{folder.createdByRole}</p>
      </div>
    ) },
    { key: "actions", header: "Actions", render: (folder) => (
      <DropdownMenu.Root>
        <DropdownMenu.Trigger asChild>
          <button type="button" className="flex h-8 w-8 items-center justify-center rounded-md text-ink-subtle hover:bg-surface-canvas" aria-label="More actions">
            <MoreVertical className="h-4 w-4" />
          </button>
        </DropdownMenu.Trigger>
        <DropdownMenu.Portal>
          <DropdownMenu.Content align="end" sideOffset={6} className="z-50 w-48 rounded-md border border-border bg-white p-1.5 shadow-elevated animate-fade-in">
            <DropdownMenu.Item className={menuItemClass} onSelect={() => onView(folder)}><Eye className="h-4 w-4" /> View Details</DropdownMenu.Item>
            <DropdownMenu.Item className={menuItemClass}><Download className="h-4 w-4" /> Download All</DropdownMenu.Item>
            <DropdownMenu.Item className={menuItemClass}><Share2 className="h-4 w-4" /> Share Folder</DropdownMenu.Item>
            <DropdownMenu.Item className={menuItemClass}><Pencil className="h-4 w-4" /> Rename</DropdownMenu.Item>
            <DropdownMenu.Item className={`${menuItemClass} text-danger-600 hover:text-danger-600`}>
              <Trash2 className="h-4 w-4" /> Delete Folder
            </DropdownMenu.Item>
          </DropdownMenu.Content>
        </DropdownMenu.Portal>
      </DropdownMenu.Root>
    ) },
  ];

  return (
    <Table
      columns={columns} data={folders} isLoading={isLoading} selectable
      emptyMessage="No folders found."
      pagination={{ page, pageSize, totalCount, onPageChange }}
    />
  );
}
