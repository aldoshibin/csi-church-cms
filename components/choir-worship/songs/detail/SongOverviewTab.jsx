"use client";

import { Globe, Music2, Clock, Hash, Timer, Folder, User, CalendarPlus, RefreshCw } from "lucide-react";
import { ServiceInfoCard } from "@/components/choir-worship/services/detail/ServiceInfoCard";
import { SongTagsCard, SongAttachmentsCard } from "./SongTagsAttachmentsCards";
import { SongUsageSummaryCard, RelatedSetlistsCard } from "./SongUsageRelatedCards";
import { formatDate } from "@/lib/utils";

export function SongOverviewTab({ song }) {
  return (
    <div className="flex flex-col gap-5">
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
        <ServiceInfoCard label="Language"><span className="flex items-center gap-1.5"><Globe className="h-4 w-4 text-interactive-600" /> {song.language}</span></ServiceInfoCard>
        <ServiceInfoCard label="Key"><span className="flex items-center gap-1.5"><Music2 className="h-4 w-4 text-interactive-600" /> {song.key}</span></ServiceInfoCard>
        <ServiceInfoCard label="Tempo"><span className="flex items-center gap-1.5"><Clock className="h-4 w-4 text-interactive-600" /> {song.tempo} BPM</span></ServiceInfoCard>

        <ServiceInfoCard label="Time Signature"><span className="flex items-center gap-1.5"><Hash className="h-4 w-4 text-interactive-600" /> {song.timeSignature}</span></ServiceInfoCard>
        <ServiceInfoCard label="Duration (Approx.)"><span className="flex items-center gap-1.5"><Timer className="h-4 w-4 text-interactive-600" /> {song.duration}</span></ServiceInfoCard>
        <ServiceInfoCard label="Category"><span className="flex items-center gap-1.5"><Folder className="h-4 w-4 text-interactive-600" /> {song.category}</span></ServiceInfoCard>

        <ServiceInfoCard label="Added By">
          <span className="flex items-center gap-1.5"><User className="h-4 w-4 text-interactive-600" /> {song.addedBy}</span>
          <p className="mt-0.5 text-xs font-normal text-ink-subtle">{song.addedByRole}</p>
        </ServiceInfoCard>
        <ServiceInfoCard label="Added On"><span className="flex items-center gap-1.5"><CalendarPlus className="h-4 w-4 text-interactive-600" /> {formatDate(song.addedOn)}</span></ServiceInfoCard>
        <ServiceInfoCard label="Last Updated">
          <span className="flex items-center gap-1.5"><RefreshCw className="h-4 w-4 text-interactive-600" /> {formatDate(song.lastUpdatedOn)}</span>
          <p className="mt-0.5 text-xs font-normal text-ink-subtle">by {song.lastUpdatedBy}</p>
        </ServiceInfoCard>
      </div>

      <div>
        <h4 className="mb-2 text-sm font-semibold text-ink">Description</h4>
        <p className="text-sm leading-relaxed text-ink-muted">{song.description}</p>
      </div>

      <SongTagsCard tags={song.tags} />

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <SongUsageSummaryCard usage={song.usage} />
        <RelatedSetlistsCard setlists={song.relatedSetlists} />
      </div>

      <SongAttachmentsCard attachments={song.attachments} />
    </div>
  );
}
