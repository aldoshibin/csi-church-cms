"use client";

import { useState } from "react";
import { Music } from "lucide-react";
import { SlideOverDrawer } from "@/components/ui/SlideOverDrawer";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { SONG_STATUS_VARIANT, SONG_CATEGORY_BADGE } from "@/lib/mock/songsMockData";
import { SongDetailTabs } from "./SongDetailTabs";
import { SongOverviewTab } from "./SongOverviewTab";
import { SongTabPlaceholder } from "./SongTabPlaceholder";

export function SongDetailsDrawer({ open, onOpenChange, song, isLoading, onEdit, onDeactivate }) {
  const [activeTab, setActiveTab] = useState("Overview");
  const categoryStyle = song ? (SONG_CATEGORY_BADGE[song.category] ?? { bg: "bg-surface-muted", color: "text-ink-subtle" }) : null;

  return (
    <SlideOverDrawer open={open} onOpenChange={onOpenChange} title="Song Details" width="640px">
      {isLoading || !song ? (
        <div className="py-16 text-center text-sm text-ink-subtle">Loading…</div>
      ) : (
        <div className="flex flex-col gap-5">
          <div className="flex items-start justify-between gap-3">
            <div className="flex items-start gap-3">
              <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-lg bg-[#F3E8FF] text-[#7C3AED]">
                <Music className="h-6 w-6" />
              </span>
              <div>
                <h3 className="text-lg font-bold text-ink">{song.title}</h3>
                <span className={`mt-1 inline-flex rounded-sm px-2.5 py-1 text-xs font-medium ${categoryStyle.bg} ${categoryStyle.color}`}>{song.category}</span>
                <p className="mt-1 text-xs text-ink-subtle">ID: {song.id}</p>
              </div>
            </div>
            <Badge variant={SONG_STATUS_VARIANT[song.status] ?? "default"}>{song.status}</Badge>
          </div>

          <SongDetailTabs active={activeTab} onChange={setActiveTab} />

          <div>
            {activeTab === "Overview" && <SongOverviewTab song={song} />}
            {activeTab !== "Overview" && <SongTabPlaceholder label={activeTab} />}
          </div>

          <div className="flex justify-end gap-2 border-t border-border pt-4">
            <Button type="button" variant="secondary" onClick={() => onEdit?.(song)}>Edit Song</Button>
            <Button type="button" variant="secondary" className="border-danger-200 text-danger-600 hover:bg-danger-50" onClick={() => onDeactivate?.(song)}>Deactivate Song</Button>
          </div>
        </div>
      )}
    </SlideOverDrawer>
  );
}
