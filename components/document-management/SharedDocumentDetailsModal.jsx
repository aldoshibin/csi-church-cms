"use client";

import * as React from "react";
import * as Icons from "lucide-react";
import { Download, Share2, Star } from "lucide-react";
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

export function SharedDocumentDetailsModal({ open, onOpenChange, document: doc, isLoading }) {
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
              <p className="text-xs text-ink-subtle">{doc.shortDescription}</p>
              <p className="mt-0.5 text-xs text-ink-subtle">{doc.detail?.fileSize}</p>
            </div>
            <button type="button" className="flex items-center justify-center gap-2 rounded-md bg-interactive-700 py-2 text-sm font-medium text-white hover:bg-interactive-800">
              <Download className="h-4 w-4" /> Download
            </button>
            <button type="button" className="flex items-center justify-center gap-2 rounded-md border border-border py-2 text-sm font-medium text-ink hover:bg-surface-canvas">
              <Share2 className="h-4 w-4" /> Share
            </button>
            <button type="button" className="flex items-center justify-center gap-2 rounded-md border border-border py-2 text-sm font-medium text-ink hover:bg-surface-canvas">
              <Star className="h-4 w-4" /> Star Document
            </button>
          </div>

          <div>
            <div className="flex items-center gap-5 border-b border-border">
              {TABS.map((t) => (
                <button
                  key={t} type="button" onClick={() => setTab(t)}
                  className={`border-b-2 pb-2.5 text-sm font-medium transition-colors ${
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
                <Row label="Folder" value={doc.folder} />
                <Row label="Type" value={`${doc.fileType} Document`} />
                <Row label="Category" value={doc.detail?.category} />
                <Row label="File Size" value={doc.detail?.fileSize} />
                <div className="flex items-center justify-between gap-4 py-2.5">
                  <span className="text-sm text-ink-subtle">Shared By</span>
                  <span className="flex items-center gap-2">
                    <span
                      className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-[10px] font-semibold"
                      style={{ backgroundColor: avatarStyle(doc.sharedByName).bg, color: avatarStyle(doc.sharedByName).color }}
                    >
                      {initials(doc.sharedByName)}
                    </span>
                    <span className="text-sm font-medium text-ink">{doc.sharedByName} ({doc.sharedByRole})</span>
                  </span>
                </div>
                <Row label="Shared On" value={formatDate(doc.sharedOn, { hour: "numeric", minute: "2-digit" })} />
                <Row label="Expires On" value={formatDate(doc.expiresOn, { hour: "numeric", minute: "2-digit" })} />
                <div className="py-2.5">
                  <p className="text-sm text-ink-subtle">Description</p>
                  <p className="mt-1 text-sm font-medium text-ink">{doc.detail?.description}</p>
                </div>
                <div className="flex items-center justify-between py-2.5">
                  <span className="text-sm text-ink-subtle">Tags</span>
                  <div className="flex flex-wrap justify-end gap-1.5">
                    {doc.detail?.tags?.map((tag) => (
                      <Badge key={tag} variant="info">{tag}</Badge>
                    ))}
                  </div>
                </div>
                <div className="flex items-center justify-between py-2.5">
                  <span className="text-sm text-ink-subtle">Status</span>
                  <Badge variant="success">{doc.detail?.status}</Badge>
                </div>
                <Row label="Access Level" value={doc.detail?.accessLevel} />
                <Row label="Allowed For" value={doc.detail?.allowedFor} />
                <Row label="Permissions" value={doc.detail?.permissions} />
                <Row label="Download" value={doc.detail?.downloadAllowed} />
              </div>
            )}

            {tab === "Activity" && (
              <div className="mt-4 flex flex-col gap-4">
                <div className="flex gap-3">
                  <span className="mt-1 flex h-2 w-2 shrink-0 rounded-full bg-interactive-500" />
                  <div>
                    <p className="text-sm text-ink">Document shared by {doc.sharedByName}.</p>
                    <p className="text-xs text-ink-subtle">{formatDate(doc.sharedOn, { hour: "numeric", minute: "2-digit" })}</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <span className="mt-1 flex h-2 w-2 shrink-0 rounded-full bg-interactive-500" />
                  <div>
                    <p className="text-sm text-ink">Share access expires.</p>
                    <p className="text-xs text-ink-subtle">{formatDate(doc.expiresOn, { hour: "numeric", minute: "2-digit" })}</p>
                  </div>
                </div>
              </div>
            )}

            {tab === "Access & Permissions" && (
              <div className="mt-3 divide-y divide-border">
                <Row label="Access Level" value={doc.detail?.accessLevel} />
                <Row label="Allowed For" value={doc.detail?.allowedFor} />
                <Row label="Permissions" value={doc.detail?.permissions} />
                <Row label="Download" value={doc.detail?.downloadAllowed} />
              </div>
            )}

            {tab === "Version History" && (
              <div className="mt-4 flex flex-col gap-3">
                <div className="flex items-center justify-between rounded-md border border-border p-3">
                  <div>
                    <p className="text-sm font-medium text-ink">Version 1.0 (Current)</p>
                    <p className="text-xs text-ink-subtle">
                      Shared by {doc.sharedByName} · {formatDate(doc.sharedOn, { hour: "numeric", minute: "2-digit" })} · {doc.detail?.fileSize}
                    </p>
                  </div>
                  <Badge variant="success">Current</Badge>
                </div>
                <p className="text-center text-xs text-ink-subtle">No earlier versions have been shared for this document.</p>
              </div>
            )}
          </div>
        </div>
      )}
    </Modal>
  );
}
