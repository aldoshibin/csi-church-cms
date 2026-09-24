"use client";

import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { Eye, MoreVertical, Download, Trash2, FileText, Image as ImageIcon, FileType2, Map, Mail, Receipt, File } from "lucide-react";
import { Table } from "@/components/ui/Table";
import { formatDate } from "@/lib/utils";
import { DOCUMENT_TYPE_STYLE } from "@/lib/mock/vmCemeteryDocumentsMockData";

const ICONS = { FileText, Image: ImageIcon, FileType2, Map, Mail, Receipt, File };

const menuItemClass =
  "flex w-full items-center gap-2 rounded px-2.5 py-2 text-sm text-ink-muted outline-none transition-colors hover:bg-surface-canvas hover:text-ink focus:bg-surface-canvas cursor-pointer";

export function DocumentsTable({ documents, isLoading, page, pageSize, totalCount, onPageChange, onView }) {
  const columns = [
    { key: "documentName", header: "Document Name", render: (d) => {
      const style = DOCUMENT_TYPE_STYLE[d.documentType] ?? DOCUMENT_TYPE_STYLE.Other;
      const Icon = ICONS[style.icon] ?? File;
      return (
        <button type="button" onClick={() => onView(d)} className="flex items-center gap-2.5 text-left">
          <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-md ${style.bg} ${style.color}`}>
            <Icon className="h-4 w-4" />
          </span>
          <span className="font-medium text-ink hover:text-interactive-600 hover:underline">{d.documentName}</span>
        </button>
      );
    } },
    { key: "documentType", header: "Type" },
    { key: "relatedTo", header: "Related To" },
    { key: "relatedId", header: "Related ID" },
    { key: "uploadedBy", header: "Uploaded By" },
    { key: "uploadDate", header: "Upload Date", render: (d) => formatDate(d.uploadDate, { hour: "numeric", minute: "2-digit" }) },
    { key: "size", header: "Size" },
    { key: "actions", header: "Actions", render: (d) => (
      <div className="flex items-center gap-1">
        <button type="button" onClick={() => onView(d)} className="flex h-8 w-8 items-center justify-center rounded-md text-ink-subtle hover:bg-surface-canvas" aria-label="View document">
          <Eye className="h-4 w-4" />
        </button>
        <DropdownMenu.Root>
          <DropdownMenu.Trigger asChild>
            <button type="button" className="flex h-8 w-8 items-center justify-center rounded-md text-ink-subtle hover:bg-surface-canvas" aria-label="More actions">
              <MoreVertical className="h-4 w-4" />
            </button>
          </DropdownMenu.Trigger>
          <DropdownMenu.Portal>
            <DropdownMenu.Content align="end" sideOffset={6} className="z-50 w-44 rounded-md border border-border bg-white p-1.5 shadow-elevated animate-fade-in">
              <DropdownMenu.Item className={menuItemClass}><Download className="h-4 w-4" /> Download</DropdownMenu.Item>
              <DropdownMenu.Item className={`${menuItemClass} text-danger-600 hover:text-danger-600`}>
                <Trash2 className="h-4 w-4" /> Delete
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
      emptyMessage="No documents found."
      pagination={{ page, pageSize, totalCount, onPageChange }}
    />
  );
}
