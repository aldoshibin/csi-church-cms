"use client";

import { ThumbsUp } from "lucide-react";
import { SlideOverDrawer } from "@/components/ui/SlideOverDrawer";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { PRAISE_STATUS_VARIANT } from "@/lib/mock/praiseReportsMockData";
import { PraiseReportInfoGrid } from "./PraiseReportInfoGrid";
import { ScriptureReferenceBlock } from "./ScriptureReferenceBlock";
import { ReactionsEngagementCard } from "./ReactionsEngagementCard";
import { PeopleWhoThankedCard } from "./PeopleWhoThankedCard";
import { PraiseCommentsCard } from "./PraiseCommentsCard";

export function PraiseReportDetailsDrawer({ open, onOpenChange, report, isLoading, onEdit, onUnpublish }) {
  return (
    <SlideOverDrawer open={open} onOpenChange={onOpenChange} title="Praise Report Details" width="620px">
      {isLoading || !report ? (
        <div className="py-16 text-center text-sm text-ink-subtle">Loading…</div>
      ) : (
        <div className="flex flex-col gap-6">
          <div className="flex items-start gap-3">
            <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-lg bg-[#F3E8FF] text-[#7C3AED]">
              <ThumbsUp className="h-6 w-6" />
            </span>
            <div>
              <h3 className="text-lg font-bold text-ink">{report.title}</h3>
              <div className="mt-1"><Badge variant={PRAISE_STATUS_VARIANT[report.status] ?? "default"}>{report.status}</Badge></div>
              <p className="mt-1 text-xs text-ink-subtle">Report ID: {report.id}</p>
            </div>
          </div>

          <div className="border-t border-border pt-5">
            <PraiseReportInfoGrid report={report} />
          </div>

          <div className="border-t border-border pt-5">
            <h4 className="mb-2 text-sm font-semibold text-ink">Praise Report</h4>
            <p className="text-sm leading-relaxed text-ink-muted">{report.description}</p>
          </div>

          {report.scriptureReference && (
            <ScriptureReferenceBlock text={report.scriptureReference} citation={report.scriptureCitation} />
          )}

          <div className="border-t border-border pt-5">
            <ReactionsEngagementCard reactions={report.reactions} />
          </div>

          <div className="border-t border-border pt-5">
            <PeopleWhoThankedCard count={report.peopleWhoThankedCount} extra={report.peopleWhoThankedExtra} />
          </div>

          <div className="border-t border-border pt-5">
            <PraiseCommentsCard comments={report.comments} />
          </div>

          <div className="flex flex-wrap justify-end gap-2 border-t border-border pt-4">
            <Button type="button" variant="secondary" onClick={() => onEdit?.(report)}>Edit Report</Button>
            <Button
              type="button" variant="secondary"
              className="border-warning-200 text-warning-700 hover:bg-warning-50"
              disabled={report.status === "Unpublished"}
              onClick={onUnpublish}
            >
              Unpublish
            </Button>
            <Button type="button" variant="secondary" onClick={() => onOpenChange(false)}>Close</Button>
          </div>
        </div>
      )}
    </SlideOverDrawer>
  );
}
