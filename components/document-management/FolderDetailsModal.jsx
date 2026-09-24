"use client";

import * as React from "react";
import { Folder, Pencil, Download, Share2, UserCog, Trash2 } from "lucide-react";
import { Modal } from "@/components/ui/Modal";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { formatDate } from "@/lib/utils";
import { AVATAR_COLORS } from "@/lib/mock/vmDocumentManagementMockData";

const TABS = ["Overview", "Documents", "Activity", "Access & Permissions"];

function initials(name) {
  return name.split(" ").filter((w) => /^[A-Z]/.test(w)).slice(0, 2).map((w) => w[0]).join("");
}

function avatarStyle(name) {
  const idx = name.charCodeAt(0) % AVATAR_COLORS.length;
  return AVATAR_COLORS[idx];
}

function Row({ label, value }) {
  return (
    <div className="flex items-center justify-between gap-4 py-2.5">
      <span className="text-sm text-ink-subtle">{label}</span>
      <span className="text-right text-sm font-medium text-ink">{value || "–"}</span>
    </div>
  );
}

export function FolderDetailsModal({ open, onOpenChange, folder, isLoading }) {
  const [tab, setTab] = React.useState("Overview");
  React.useEffect(() => {
    if (open) setTab("Overview");
  }, [open]);

  return (
    <Modal
      open={open} onOpenChange={onOpenChange} title="Folder Details" size="xl"
      footer={folder ? <Button type="button" variant="secondary" onClick={() => onOpenChange?.(false)}>Close</Button> : null}
    >
      {isLoading || !folder ? (
        <div className="h-64 animate-pulse rounded-lg bg-surface-muted" />
      ) : (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-[220px_1fr]">
          <div className="flex flex-col gap-3">
            <div className="flex h-40 flex-col items-center justify-center gap-2 rounded-lg border border-border bg-surface-canvas">
              <Folder className="h-12 w-12 text-[#F59E0B]" />
            </div>
            <div className="text-center sm:text-left">
              <p className="flex items-center justify-center gap-1.5 break-words text-sm font-semibold text-ink sm:justify-start">
                {folder.folderName} <Pencil className="h-3.5 w-3.5 shrink-0 text-ink-subtle" />
              </p>
              <p className="text-xs text-ink-subtle">{folder.description}</p>
            </div>
            <button type="button" className="flex items-center justify-center gap-2 rounded-md bg-interactive-700 py-2 text-sm font-medium text-white hover:bg-interactive-800">
              <Download className="h-4 w-4" /> Download All
            </button>
            <button type="button" className="flex items-center justify-center gap-2 rounded-md border border-border py-2 text-sm font-medium text-ink hover:bg-surface-canvas">
              <Share2 className="h-4 w-4" /> Share Folder
            </button>
            <button type="button" className="flex items-center justify-center gap-2 rounded-md border border-border py-2 text-sm font-medium text-ink hover:bg-surface-canvas">
              <UserCog className="h-4 w-4" /> Manage Access
            </button>
            <button type="button" className="flex items-center justify-center gap-2 rounded-md border border-danger-200 py-2 text-sm font-medium text-danger-600 hover:bg-danger-50">
              <Trash2 className="h-4 w-4" /> Delete Folder
            </button>
          </div>

          <div>
            <div className="flex items-center gap-5 border-b border-border">
              {TABS.map((t) => (
                <button
                  key={t} type="button" onClick={() => setTab(t)}
                  className={`whitespace-nowrap border-b-2 pb-2.5 text-sm font-medium transition-colors ${
                    tab === t ? "border-interactive-600 text-interactive-600" : "border-transparent text-ink-subtle hover:text-ink"
                  }`}
                >
                  {t === "Documents" ? `Documents (${folder.documentsCount})` : t}
                </button>
              ))}
            </div>

            {tab === "Overview" && (
              <div className="mt-3 divide-y divide-border">
                <Row label="Folder Name" value={folder.folderName} />
                <Row label="Description" value={folder.description} />
                <div className="flex items-center justify-between py-2.5">
                  <span className="text-sm text-ink-subtle">Folder Type</span>
                  <Badge variant="accent">{folder.detail?.folderType}</Badge>
                </div>
                <Row label="Documents" value={folder.documentsCount} />
                <Row label="Size" value={folder.sizeLabel} />
                <div className="flex items-center justify-between gap-4 py-2.5">
                  <span className="text-sm text-ink-subtle">Created By</span>
                  <span className="flex items-center gap-2">
                    <span
                      className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-[10px] font-semibold"
                      style={{ backgroundColor: avatarStyle(folder.createdByName).bg, color: avatarStyle(folder.createdByName).color }}
                    >
                      {initials(folder.createdByName)}
                    </span>
                    <span className="text-sm font-medium text-ink">{folder.createdByName} ({folder.createdByRole})</span>
                  </span>
                </div>
                <Row label="Created On" value={formatDate(folder.createdOn, { hour: "numeric", minute: "2-digit" })} />
                <Row label="Last Modified" value={formatDate(folder.detail?.lastModified, { hour: "numeric", minute: "2-digit" })} />
                <Row label="Contains" value={`${folder.documentsCount} documents, ${folder.detail?.subFolders ?? 0} sub-folders`} />
                <Row label="Access Level" value={folder.detail?.accessLevel} />
                <Row label="Allowed For" value={folder.detail?.allowedFor} />
                <Row label="Permissions" value={folder.detail?.permissions} />
                <div className="flex items-center justify-between py-2.5">
                  <span className="text-sm text-ink-subtle">Status</span>
                  <Badge variant="success">{folder.detail?.status}</Badge>
                </div>
              </div>
            )}

            {tab === "Documents" && (
              <div className="mt-4">
                <p className="text-sm text-ink-subtle">
                  {folder.documentsCount} documents are stored in this folder. Open the folder from the list to browse them.
                </p>
              </div>
            )}

            {tab === "Activity" && (
              <div className="mt-4 flex flex-col gap-4">
                <div className="flex gap-3">
                  <span className="mt-1 flex h-2 w-2 shrink-0 rounded-full bg-interactive-500" />
                  <div>
                    <p className="text-sm text-ink">Folder created by {folder.createdByName}.</p>
                    <p className="text-xs text-ink-subtle">{formatDate(folder.createdOn, { hour: "numeric", minute: "2-digit" })}</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <span className="mt-1 flex h-2 w-2 shrink-0 rounded-full bg-interactive-500" />
                  <div>
                    <p className="text-sm text-ink">Folder last modified.</p>
                    <p className="text-xs text-ink-subtle">{formatDate(folder.detail?.lastModified, { hour: "numeric", minute: "2-digit" })}</p>
                  </div>
                </div>
              </div>
            )}

            {tab === "Access & Permissions" && (
              <div className="mt-3 divide-y divide-border">
                <Row label="Access Level" value={folder.detail?.accessLevel} />
                <Row label="Allowed For" value={folder.detail?.allowedFor} />
                <Row label="Permissions" value={folder.detail?.permissions} />
              </div>
            )}
          </div>
        </div>
      )}
    </Modal>
  );
}
