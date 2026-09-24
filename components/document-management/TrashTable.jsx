"use client";

import * as Icons from "lucide-react";
import { RotateCcw, Trash2 } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Table } from "@/components/ui/Table";
import { formatDate } from "@/lib/utils";
import { DOCUMENT_TYPE_STYLE, AVATAR_COLORS } from "@/lib/mock/vmDocumentManagementMockData";

function initials(name) {
  return name.split(" ").filter((w) => /^[A-Z]/.test(w)).slice(0, 2).map((w) => w[0]).join("");
}

function avatarStyle(name) {
  const idx = name.charCodeAt(0) % AVATAR_COLORS.length;
  return AVATAR_COLORS[idx];
}

export function TrashTable({ items, isLoading, page, pageSize, totalCount, onPageChange }) {
  const columns = [
    { key: "documentName", header: "Document Name", render: (item) => {
      const style = DOCUMENT_TYPE_STYLE[item.fileType] ?? DOCUMENT_TYPE_STYLE.PDF;
      const Icon = Icons[style.icon] ?? Icons.File;
      return (
        <div className="flex items-center gap-2.5">
          <Icon className={`h-4 w-4 shrink-0 ${style.iconColor}`} />
          <span className="font-medium text-ink">{item.documentName}</span>
        </div>
      );
    } },
    { key: "originalFolder", header: "Original Folder", render: (item) => item.originalFolder },
    { key: "type", header: "Type", render: (item) => {
      const style = DOCUMENT_TYPE_STYLE[item.fileType] ?? DOCUMENT_TYPE_STYLE.PDF;
      return <Badge variant={style.badgeVariant}>{item.fileType}</Badge>;
    } },
    { key: "deletedOn", header: "Deleted On", sortable: true, render: (item) => formatDate(item.deletedOn, { hour: "numeric", minute: "2-digit" }) },
    { key: "deletedBy", header: "Deleted By", render: (item) => {
      const style = avatarStyle(item.deletedByName);
      return (
        <div className="flex items-center gap-2">
          <span
            className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-[11px] font-semibold"
            style={{ backgroundColor: style.bg, color: style.color }}
          >
            {initials(item.deletedByName)}
          </span>
          <div>
            <p className="text-ink">{item.deletedByName}</p>
            <p className="text-xs text-ink-subtle">{item.deletedByRole}</p>
          </div>
        </div>
      );
    } },
    { key: "size", header: "Size", render: (item) => item.size },
    { key: "actions", header: "Actions", render: () => (
      <div className="flex items-center gap-1">
        <button type="button" className="flex h-8 w-8 items-center justify-center rounded-md border border-border text-interactive-600 hover:bg-interactive-50" aria-label="Restore document">
          <RotateCcw className="h-4 w-4" />
        </button>
        <button type="button" className="flex h-8 w-8 items-center justify-center rounded-md border border-danger-200 text-danger-600 hover:bg-danger-50" aria-label="Delete permanently">
          <Trash2 className="h-4 w-4" />
        </button>
      </div>
    ) },
  ];

  return (
    <Table
      columns={columns} data={items} isLoading={isLoading} selectable
      emptyMessage="Trash is empty."
      pagination={{ page, pageSize, totalCount, onPageChange }}
    />
  );
}
