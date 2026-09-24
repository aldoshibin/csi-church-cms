"use client";

import { FileCheck, Image as ImageIcon, FileType2, Map, Mail, Receipt, MoreHorizontal } from "lucide-react";
import { DOCUMENT_TYPES_GUIDE } from "@/lib/mock/vmCemeteryDocumentsMockData";

const ICONS = { FileCheck, Image: ImageIcon, FileType2, Map, Mail, Receipt, MoreHorizontal };

export function DocumentTypesCard() {
  return (
    <div className="rounded-lg border border-border bg-white p-5 shadow-card">
      <h3 className="text-sm font-semibold text-ink">Document Types</h3>
      <div className="mt-3 flex flex-col gap-3">
        {DOCUMENT_TYPES_GUIDE.map((item) => {
          const Icon = ICONS[item.icon] ?? MoreHorizontal;
          return (
            <div key={item.label} className="flex items-start gap-3">
              <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-md ${item.bg} ${item.color}`}>
                <Icon className="h-4 w-4" />
              </span>
              <div>
                <p className="text-sm font-semibold text-ink">{item.label}</p>
                <p className="text-xs text-ink-subtle">{item.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
