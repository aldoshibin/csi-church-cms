"use client";

import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { Eye, Download, MoreVertical, Star, Share2, FolderInput } from "lucide-react";
import * as Icons from "lucide-react";
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

export function SharedDocumentsTable({ documents, isLoading, page, pageSize, totalCount, onPageChange, onView }) {
  const columns = [
    { key: "documentName", header: "Document Name", render: (doc) => {
      const style = DOCUMENT_TYPE_STYLE[doc.fileType] ?? DOCUMENT_TYPE_STYLE.PDF;
      const Icon = Icons[style.icon] ?? Icons.File;
      return (
        <div className="flex items-center gap-2.5">
          <Icon className={`h-4 w-4 shrink-0 ${style.iconColor}`} />
          <div>
            <button type="button" onClick={() => onView(doc)} className="font-medium text-interactive-600 hover:underline">
              {doc.documentName}
            </button>
            <p className="flex items-center gap-1 text-xs text-ink-subtle">
              {doc.shortDescription}
              {doc.starred && <Star className="h-3 w-3 shrink-0 fill-warning-500 text-warning-500" />}
            </p>
          </div>
        </div>
      );
    } },
    { key: "sharedBy", header: "Shared By", render: (doc) => {
      const style = avatarStyle(doc.sharedByName);
      return (
        <div className="flex items-center gap-2">
          <span
            className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-[11px] font-semibold"
            style={{ backgroundColor: style.bg, color: style.color }}
          >
            {initials(doc.sharedByName)}
          </span>
          <div>
            <p className="text-ink">{doc.sharedByName}</p>
            <p className="text-xs text-ink-subtle">{doc.sharedByRole}</p>
          </div>
        </div>
      );
    } },
    { key: "folder", header: "Folder", render: (doc) => doc.folder },
    { key: "type", header: "Type", render: (doc) => {
      const style = DOCUMENT_TYPE_STYLE[doc.fileType] ?? DOCUMENT_TYPE_STYLE.PDF;
      return <Badge variant={style.badgeVariant}>{doc.fileType}</Badge>;
    } },
    { key: "sharedOn", header: "Shared On", render: (doc) => formatDate(doc.sharedOn, { hour: "numeric", minute: "2-digit" }) },
    { key: "expiresOn", header: "Expires On", render: (doc) => formatDate(doc.expiresOn) },
    { key: "actions", header: "Actions", render: (doc) => (
      <div className="flex items-center gap-1">
        <button type="button" onClick={() => onView(doc)} className="flex h-8 w-8 items-center justify-center rounded-md text-ink-subtle hover:bg-surface-canvas" aria-label="View document">
          <Eye className="h-4 w-4" />
        </button>
        <button type="button" className="flex h-8 w-8 items-center justify-center rounded-md text-ink-subtle hover:bg-surface-canvas" aria-label="Download document">
          <Download className="h-4 w-4" />
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
              <DropdownMenu.Item className={menuItemClass}><Share2 className="h-4 w-4" /> Share Again</DropdownMenu.Item>
              <DropdownMenu.Item className={menuItemClass}><FolderInput className="h-4 w-4" /> Move to Folder</DropdownMenu.Item>
            </DropdownMenu.Content>
          </DropdownMenu.Portal>
        </DropdownMenu.Root>
      </div>
    ) },
  ];

  return (
    <Table
      columns={columns} data={documents} isLoading={isLoading} selectable
      emptyMessage="No shared documents found."
      pagination={{ page, pageSize, totalCount, onPageChange }}
    />
  );
}
