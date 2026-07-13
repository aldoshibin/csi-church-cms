"use client";

import * as React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Upload } from "lucide-react";

import { Button } from "@/components/ui/Button";
import { useMemberPhotos } from "@/hooks/useMemberPhotos";
import { useToast } from "@/contexts/ToastContext";
import { cn } from "@/lib/utils";
import { PHOTO_MANAGEMENT_MOCK } from "@/lib/mock/photoManagementMockData";
import { PhotoFilterBar } from "@/components/photo-management/PhotoFilterBar";
import { PhotoStatCards } from "@/components/photo-management/PhotoStatCards";
import { PhotoSummaryPanel } from "@/components/photo-management/PhotoSummaryPanel";
import { PhotoSourcePanel } from "@/components/photo-management/PhotoSourcePanel";
import { PhotoQuickActionsPanel } from "@/components/photo-management/PhotoQuickActionsPanel";
import { PhotoNotePanel } from "@/components/photo-management/PhotoNotePanel";
import { PhotoTabBody } from "@/components/photo-management/PhotoTabBody";
import { ViewPhotoModal } from "@/components/photo-management/ViewPhotoModal";
import { UploadPhotoModal } from "@/components/photo-management/UploadPhotoModal";
import { RemovePhotoModal } from "@/components/photo-management/RemovePhotoModal";
import { BulkUploadModal } from "@/components/photo-management/BulkUploadModal";

const TABS = [
  { key: "photos", label: "Member Photos" },
  { key: "without_photo", label: "Without Photo (262)" },
  { key: "recently_added", label: "Recently Added" },
  { key: "photo_updates", label: "Photo Updates" },
];

const TAB_TITLE = {
  photos: (count) => `Members (${count.toLocaleString()})`,
  without_photo: (count) => `Members Without Photo (${count.toLocaleString()})`,
  recently_added: (count) => `Recently Added (${count.toLocaleString()})`,
  photo_updates: () => "Photo Updates",
};

export default function MemberPhotoManagementPage() {
  const router = useRouter();
  const { toast } = useToast();
  const {
    activeTab, changeTab, viewMode, setViewMode, sortOrder, setSortOrder,
    search, setSearch, page, setPage, pageSize, totalCount, members,
  } = useMemberPhotos();
  const mock = PHOTO_MANAGEMENT_MOCK;

  const [pendingFilters, setPendingFilters] = React.useState({});
  const [showWithoutPhotoOnly, setShowWithoutPhotoOnly] = React.useState(false);
  const [viewModal, setViewModal] = React.useState({ open: false, member: null });
  const [uploadModal, setUploadModal] = React.useState({ open: false, member: null });
  const [removeModal, setRemoveModal] = React.useState({ open: false, member: null });
  const [bulkUploadOpen, setBulkUploadOpen] = React.useState(false);

  const handleFieldChange = (key, value) => setPendingFilters((prev) => ({ ...prev, [key]: value }));
  const handleApply = () => toast({ variant: "info", title: "Filters applied to the visible sample data" });
  const handleClear = () => { setPendingFilters({}); setShowWithoutPhotoOnly(false); setSearch(""); };

  const handleEdit = (member) => router.push(`/members/${member.id}`);
  const handleExport = () => toast({ variant: "info", title: "No photo-report export endpoint exists yet" });

  return (
    <div className="space-y-5">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <h1 className="font-display text-2xl font-bold text-ink">Member Photo Management</h1>
          <nav className="mt-1 flex items-center gap-1.5 text-xs text-interactive-500">
            <Link href="/members" className="hover:underline">Member Management</Link>
            <span className="text-ink-subtle">›</span>
            <span className="text-ink-subtle">Member Photo Management</span>
          </nav>
        </div>
        <Button size="sm" leftIcon={<Upload className="h-4 w-4" />} onClick={() => setBulkUploadOpen(true)}>
          Bulk Upload Photos
        </Button>
      </div>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-[1fr_300px]">
        <div className="min-w-0 space-y-4">
          <PhotoFilterBar
            onSearchChange={setSearch}
            onFieldChange={handleFieldChange}
            onClear={handleClear}
            onApply={handleApply}
            showWithoutPhotoOnly={showWithoutPhotoOnly}
            onToggleWithoutPhotoOnly={(v) => { setShowWithoutPhotoOnly(v); if (v) changeTab("without_photo"); }}
          />

          <PhotoStatCards mock={mock} />

          <div className="min-w-0 rounded-lg border border-border bg-white shadow-card">
            <div className="flex gap-6 overflow-x-auto border-b border-border px-4">
              {TABS.map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => changeTab(tab.key)}
                  className={cn(
                    "relative whitespace-nowrap py-3 text-sm font-medium transition-colors",
                    activeTab === tab.key ? "text-interactive-500" : "text-ink-muted hover:text-ink"
                  )}
                >
                  {tab.label}
                  {activeTab === tab.key && <span className="absolute -bottom-[1px] left-0 h-[2px] w-full rounded-full bg-interactive-500" />}
                </button>
              ))}
            </div>

            <PhotoTabBody
              title={TAB_TITLE[activeTab](totalCount)}
              members={members}
              totalCount={totalCount}
              page={page}
              pageSize={pageSize}
              onPageChange={setPage}
              viewMode={viewMode}
              setViewMode={setViewMode}
              sortOrder={sortOrder}
              setSortOrder={setSortOrder}
              onView={(m) => setViewModal({ open: true, member: m })}
              onEdit={handleEdit}
              onUpload={(m) => setUploadModal({ open: true, member: m })}
              onRemove={(m) => setRemoveModal({ open: true, member: m })}
            />
          </div>
        </div>

        <div className="space-y-4">
          <PhotoSummaryPanel total={mock.cards.totalMembers} breakdown={mock.photoSummary} />
          <PhotoSourcePanel items={mock.photoSource} />
          <PhotoQuickActionsPanel
            onBulkUpload={() => setBulkUploadOpen(true)}
            onAddPhoto={() => setUploadModal({ open: true, member: null })}
            onUpdatePhoto={() => setUploadModal({ open: true, member: members[0] || null })}
            onRemovePhoto={() => setRemoveModal({ open: true, member: members[0] || null })}
            onExportReport={handleExport}
          />
          <PhotoNotePanel text={mock.note} />
        </div>
      </div>

      <ViewPhotoModal open={viewModal.open} onOpenChange={(v) => setViewModal((s) => ({ ...s, open: v }))} member={viewModal.member} />
      <UploadPhotoModal open={uploadModal.open} onOpenChange={(v) => setUploadModal((s) => ({ ...s, open: v }))} member={uploadModal.member} />
      <RemovePhotoModal open={removeModal.open} onOpenChange={(v) => setRemoveModal((s) => ({ ...s, open: v }))} member={removeModal.member} />
      <BulkUploadModal open={bulkUploadOpen} onOpenChange={setBulkUploadOpen} />
    </div>
  );
}
