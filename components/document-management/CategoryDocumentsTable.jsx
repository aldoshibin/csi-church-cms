"use client";

import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import * as Icons from "lucide-react";
import { Eye, Download, MoreVertical, Share2, Trash2 } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Table } from "@/components/ui/Table";
import { formatDate } from "@/lib/utils";
import { DOCUMENT_TYPE_STYLE } from "@/lib/mock/vmDocumentManagementMockData";

const menuItemClass =
  "flex w-full items-center gap-2 rounded px-2.5 py-2 text-sm text-ink-muted outline-none transition-colors hover:bg-surface-canvas hover:text-ink focus:bg-surface-canvas cursor-pointer";

export function CategoryDocumentsTable({ documents, isLoading, page, pageSize, totalCount, onPageChange }) {
  const columns = [
    { key: "documentName", header: "Document Name", render: (doc) => {
      const style = DOCUMENT_TYPE_STYLE[doc.fileType] ?? DOCUMENT_TYPE_STYLE.PDF;
      const Icon = Icons[style.icon] ?? Icons.File;
      return (
        <div className="flex items-center gap-2.5">
          <Icon className={`h-4 w-4 shrink-0 ${style.iconColor}`} />
          <span className="font-medium text-ink">{doc.documentName}</span>
        </div>
      );
    } },
    { key: "type", header: "Type", render: (doc) => {
      const style = DOCUMENT_TYPE_STYLE[doc.fileType] ?? DOCUMENT_TYPE_STYLE.PDF;
      return <Badge variant={style.badgeVariant}>{doc.fileType}</Badge>;
    } },
    { key: "size", header: "Size", render: (doc) => doc.size },
    { key: "uploadedBy", header: "Uploaded By", render: (doc) => (
      <div>
        <p className="text-ink">{doc.uploadedByName}</p>
        <p className="text-xs text-ink-subtle">{doc.uploadedByRole}</p>
      </div>
    ) },
    { key: "uploadedOn", header: "Uploaded On", render: (doc) => formatDate(doc.uploadedOn, { hour: "numeric", minute: "2-digit" }) },
    { key: "actions", header: "Actions", render: () => (
      <div className="flex items-center gap-1">
        <button type="button" className="flex h-8 w-8 items-center justify-center rounded-md text-ink-subtle hover:bg-surface-canvas" aria-label="View document">
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
              <DropdownMenu.Item className={menuItemClass}><Share2 className="h-4 w-4" /> Share</DropdownMenu.Item>
              <DropdownMenu.Item className={`${menuItemClass} text-danger-600 hover:text-danger-600`}>
                <Trash2 className="h-4 w-4" /> Move to Trash
              </DropdownMenu.Item>
            </DropdownMenu.Content>
          </DropdownMenu.Portal>
        </DropdownMenu.Root>
      </div>
    ) },
  ];

  return (
    <Table
      columns={columns} data={documents} isLoading={isLoading}
      emptyMessage="No documents in this category."
      pagination={{ page, pageSize, totalCount, onPageChange }}
    />
  );
}
