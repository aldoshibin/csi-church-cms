"use client";

import * as React from "react";
import * as Icons from "lucide-react";
import { Download, Share2, Star, FolderInput, Trash2, Folder } from "lucide-react";
import { Modal } from "@/components/ui/Modal";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { formatDate } from "@/lib/utils";
import { DOCUMENT_TYPE_STYLE, AVATAR_COLORS } from "@/lib/mock/vmDocumentManagementMockData";

const TABS = ["Overview", "Activity", "Access & Permissions", "Version History"];

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

function PersonRow({ label, name, role }) {
  return (
    <div className="flex items-center justify-between gap-4 py-2.5">
      <span className="text-sm text-ink-subtle">{label}</span>
      <span className="flex items-center gap-2">
        <span
          className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-[10px] font-semibold"
          style={{ backgroundColor: avatarStyle(name).bg, color: avatarStyle(name).color }}
        >
          {initials(name)}
        </span>
        <span className="text-sm font-medium text-ink">{name} ({role})</span>
      </span>
    </div>
  );
}

export function DocumentActivityDetailsModal({ open, onOpenChange, document: doc, isLoading }) {
  const [tab, setTab] = React.useState("Overview");
  React.useEffect(() => {
    if (open) setTab("Overview");
  }, [open]);

  const style = doc ? (DOCUMENT_TYPE_STYLE[doc.fileType] ?? DOCUMENT_TYPE_STYLE.PDF) : null;
  const Icon = style ? (Icons[style.icon] ?? Icons.File) : Icons.File;

  return (
    <Modal
      open={open} onOpenChange={onOpenChange} title="Document Details" size="xl"
      footer={doc ? <Button type="button" variant="secondary" onClick={() => onOpenChange?.(false)}>Close</Button> : null}
    >
      {isLoading || !doc ? (
        <div className="h-64 animate-pulse rounded-lg bg-surface-muted" />
      ) : (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-[220px_1fr]">
          <div className="flex flex-col gap-3">
            <div className="flex h-40 flex-col items-center justify-center gap-2 rounded-lg border border-border bg-surface-canvas">
              <Icon className={`h-10 w-10 ${style.iconColor}`} />
            </div>
            <div className="text-center sm:text-left">
              <p className="break-words text-sm font-semibold text-ink">{doc.documentName}</p>
              <p className="text-xs text-ink-subtle">{doc.detail?.fileSize}</p>
            </div>
            <button type="button" className="flex items-center justify-center gap-2 rounded-md bg-interactive-700 py-2 text-sm font-medium text-white hover:bg-interactive-800">
              <Download className="h-4 w-4" /> Download
            </button>
            <button type="button" className="flex items-center justify-center gap-2 rounded-md border border-border py-2 text-sm font-medium text-ink hover:bg-surface-canvas">
              <Share2 className="h-4 w-4" /> Share
            </button>
            <button type="button" className="flex items-center justify-center gap-2 rounded-md border border-border py-2 text-sm font-medium text-ink hover:bg-surface-canvas">
              <Star className="h-4 w-4" /> {doc.starred ? "Remove Star" : "Star Document"}
            </button>
            <button type="button" className="flex items-center justify-center gap-2 rounded-md border border-border py-2 text-sm font-medium text-ink hover:bg-surface-canvas">
              <FolderInput className="h-4 w-4" /> Move to Folder
            </button>
            <button type="button" className="flex items-center justify-center gap-2 rounded-md border border-danger-200 py-2 text-sm font-medium text-danger-600 hover:bg-danger-50">
              <Trash2 className="h-4 w-4" /> Delete Document
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
                  {t}
                </button>
              ))}
            </div>

            {tab === "Overview" && (
              <div className="mt-3 divide-y divide-border">
                <Row label="Document Name" value={doc.documentName} />
                <div className="flex items-center justify-between gap-4 py-2.5">
                  <span className="text-sm text-ink-subtle">Folder</span>
                  <span className="flex items-center gap-1.5 text-sm font-medium text-ink">
                    <Folder className="h-3.5 w-3.5 text-ink-subtle" /> {doc.folder}
                  </span>
                </div>
                <div className="flex items-center justify-between gap-4 py-2.5">
                  <span className="text-sm text-ink-subtle">Type</span>
                  <span className="flex items-center gap-2">
                    <Badge variant={style.badgeVariant}>{doc.fileType}</Badge>
                    <span className="text-sm font-medium text-ink">{doc.fileType} Document</span>
                  </span>
                </div>
                <Row label="Category" value={doc.detail?.category} />
                <Row label="File Size" value={doc.detail?.fileSize} />
                <Row label="Pages" value={doc.detail?.pages} />
                <Row label={doc.activityOnLabel} value={formatDate(doc.activityOn, { hour: "numeric", minute: "2-digit" })} />
                <PersonRow label={doc.activityByLabel} name={doc.activityByName} role={doc.activityByRole} />
                <Row label="Created On" value={formatDate(doc.detail?.createdOn, { hour: "numeric", minute: "2-digit" })} />
                <PersonRow label="Created By" name={doc.detail?.createdByName} role={doc.detail?.createdByRole} />
                <Row label="Last Modified On" value={formatDate(doc.detail?.lastModifiedOn, { hour: "numeric", minute: "2-digit" })} />
                <PersonRow label="Last Modified By" name={doc.detail?.lastModifiedByName} role={doc.detail?.lastModifiedByRole} />
                <div className="py-2.5">
                  <p className="text-sm text-ink-subtle">Description</p>
                  <p className="mt-1 text-sm font-medium text-ink">{doc.detail?.description}</p>
                </div>
                <div className="flex items-center justify-between py-2.5">
                  <span className="text-sm text-ink-subtle">Tags</span>
                  <div className="flex flex-wrap items-center justify-end gap-1.5">
                    {doc.detail?.tags?.map((tag) => (
                      <Badge key={tag} variant="info">{tag}</Badge>
                    ))}
                    <button type="button" className="flex h-5 w-5 items-center justify-center rounded-full border border-border text-ink-subtle hover:bg-surface-canvas">
                      <Icons.Plus className="h-3 w-3" />
                    </button>
                  </div>
                </div>
                <div className="flex items-center justify-between py-2.5">
                  <span className="text-sm text-ink-subtle">Status</span>
                  <Badge variant="success">{doc.detail?.status}</Badge>
                </div>
                <Row label="Access Level" value={doc.detail?.accessLevel} />
                <Row label="Allowed For" value={doc.detail?.allowedFor} />
                <Row label="Permissions" value={doc.detail?.permissions} />
                <Row
                  label="Expires On"
                  value={doc.detail?.expiresOn ? `${formatDate(doc.detail.expiresOn, { hour: "numeric", minute: "2-digit" })}` : "Not set (Optional)"}
                />
              </div>
            )}

            {tab === "Activity" && (
              <div className="mt-4 flex flex-col gap-4">
                <div className="flex gap-3">
                  <span className="mt-1 flex h-2 w-2 shrink-0 rounded-full bg-interactive-500" />
                  <div>
                    <p className="text-sm text-ink">Document created by {doc.detail?.createdByName}.</p>
                    <p className="text-xs text-ink-subtle">{formatDate(doc.detail?.createdOn, { hour: "numeric", minute: "2-digit" })}</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <span className="mt-1 flex h-2 w-2 shrink-0 rounded-full bg-interactive-500" />
                  <div>
                    <p className="text-sm text-ink">{doc.activityByName} {doc.activityOnLabel === "Starred On" ? "starred" : "viewed"} this document.</p>
                    <p className="text-xs text-ink-subtle">{formatDate(doc.activityOn, { hour: "numeric", minute: "2-digit" })}</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <span className="mt-1 flex h-2 w-2 shrink-0 rounded-full bg-interactive-500" />
                  <div>
                    <p className="text-sm text-ink">Document last modified by {doc.detail?.lastModifiedByName}.</p>
                    <p className="text-xs text-ink-subtle">{formatDate(doc.detail?.lastModifiedOn, { hour: "numeric", minute: "2-digit" })}</p>
                  </div>
                </div>
              </div>
            )}

            {tab === "Access & Permissions" && (
              <div className="mt-3 divide-y divide-border">
                <Row label="Access Level" value={doc.detail?.accessLevel} />
                <Row label="Allowed For" value={doc.detail?.allowedFor} />
                <Row label="Permissions" value={doc.detail?.permissions} />
              </div>
            )}

            {tab === "Version History" && (
              <div className="mt-4 flex flex-col gap-3">
                <div className="flex items-center justify-between rounded-md border border-border p-3">
                  <div>
                    <p className="text-sm font-medium text-ink">Version 1.0 (Current)</p>
                    <p className="text-xs text-ink-subtle">
                      Created by {doc.detail?.createdByName} · {formatDate(doc.detail?.createdOn, { hour: "numeric", minute: "2-digit" })} · {doc.detail?.fileSize}
                    </p>
                  </div>
                  <Badge variant="success">Current</Badge>
                </div>
                <p className="text-center text-xs text-ink-subtle">No earlier versions have been uploaded for this document.</p>
              </div>
            )}
          </div>
        </div>
      )}
    </Modal>
  );
}
