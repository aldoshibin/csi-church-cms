"use client";

import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import * as Icons from "lucide-react";
import { Eye, MoreVertical, Star, Share2, FolderInput, Trash2 } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Table } from "@/components/ui/Table";
import { formatDate } from "@/lib/utils";
import { DOCUMENT_TYPE_STYLE, AVATAR_COLORS } from "@/lib/mock/vmDocumentManagementMockData";

const menuItemClass =
  "flex w-full items-center gap-2 rounded px-2.5 py-2 text-sm text-ink-muted outline-none transition-colors hover:bg-surface-canvas hover:text-ink focus:bg-surface-canvas cursor-pointer";

function initials(name) {
  return name.split(" ").filter((w) => /^[A-Z]/.test(w)).slice(0, 2).map((w) => w[0]).join("");
}

function avatarStyle(name) {
  const idx = name.charCodeAt(0) % AVATAR_COLORS.length;
  return AVATAR_COLORS[idx];
}

export function DocumentActivityTable({ documents, isLoading, page, pageSize, totalCount, onPageChange, onView, onLabel = "Date", byLabel = "By" }) {
  const columns = [
    { key: "documentName", header: "Document Name", render: (doc) => {
      const style = DOCUMENT_TYPE_STYLE[doc.fileType] ?? DOCUMENT_TYPE_STYLE.PDF;
      const Icon = Icons[style.icon] ?? Icons.File;
      return (
        <div className="flex items-center gap-2.5">
          <Icon className={`h-4 w-4 shrink-0 ${style.iconColor}`} />
          <button type="button" onClick={() => onView(doc)} className="font-medium text-interactive-600 hover:underline">
            {doc.documentName}
          </button>
          {doc.starred && <Star className="h-3.5 w-3.5 shrink-0 fill-warning-500 text-warning-500" />}
        </div>
      );
    } },
    { key: "folder", header: "Folder", render: (doc) => doc.folder },
    { key: "type", header: "Type", render: (doc) => {
      const style = DOCUMENT_TYPE_STYLE[doc.fileType] ?? DOCUMENT_TYPE_STYLE.PDF;
      return <Badge variant={style.badgeVariant}>{doc.fileType}</Badge>;
    } },
    { key: "activityOn", header: onLabel, render: (doc) => formatDate(doc.activityOn, { hour: "numeric", minute: "2-digit" }) },
    { key: "activityBy", header: byLabel, render: (doc) => {
      const style = avatarStyle(doc.activityByName);
      return (
        <div className="flex items-center gap-2">
          <span
            className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-[11px] font-semibold"
            style={{ backgroundColor: style.bg, color: style.color }}
          >
            {initials(doc.activityByName)}
          </span>
          <div>
            <p className="text-ink">{doc.activityByName}</p>
            <p className="text-xs text-ink-subtle">{doc.activityByRole}</p>
          </div>
        </div>
      );
    } },
    { key: "actions", header: "Actions", render: (doc) => (
      <div className="flex items-center gap-1">
        <button type="button" onClick={() => onView(doc)} className="flex h-8 w-8 items-center justify-center rounded-md text-ink-subtle hover:bg-surface-canvas" aria-label="View document">
          <Eye className="h-4 w-4" />
        </button>
        <DropdownMenu.Root>
          <DropdownMenu.Trigger asChild>
            <button type="button" className="flex h-8 w-8 items-center justify-center rounded-md text-ink-subtle hover:bg-surface-canvas" aria-label="More actions">
              <MoreVertical className="h-4 w-4" />
            </button>
          </DropdownMenu.Trigger>
          <DropdownMenu.Portal>
            <DropdownMenu.Content align="end" sideOffset={6} className="z-50 w-48 rounded-md border border-border bg-white p-1.5 shadow-elevated animate-fade-in">
              <DropdownMenu.Item className={menuItemClass}><Star className="h-4 w-4" /> {doc.starred ? "Remove Star" : "Star Document"}</DropdownMenu.Item>
              <DropdownMenu.Item className={menuItemClass}><Share2 className="h-4 w-4" /> Share</DropdownMenu.Item>
              <DropdownMenu.Item className={menuItemClass}><FolderInput className="h-4 w-4" /> Move to Folder</DropdownMenu.Item>
              <DropdownMenu.Item className={`${menuItemClass} text-danger-600 hover:text-danger-600`}>
                <Trash2 className="h-4 w-4" /> Delete Document
              </DropdownMenu.Item>
            </DropdownMenu.Content>
          </DropdownMenu.Portal>
        </DropdownMenu.Root>
      </div>
    ) },
  ];

  return (
    <Table
      columns={columns} data={documents} isLoading={isLoading} selectable
      emptyMessage="No documents found."
      pagination={{ page, pageSize, totalCount, onPageChange }}
    />
  );
}
