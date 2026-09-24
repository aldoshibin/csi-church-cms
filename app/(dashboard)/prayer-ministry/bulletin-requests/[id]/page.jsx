"use client";

import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { ArrowLeft, Pencil, Download, MoreHorizontal } from "lucide-react";

import { useBulletinRequestDetail } from "@/hooks/useBulletinRequestDetail";
import { Button } from "@/components/ui/Button";
import { BULLETIN_TYPE_BADGE } from "@/lib/mock/bulletinRequestsMockData";
import { BulletinRequestInfoCard } from "@/components/prayer-ministry/bulletin/detail/BulletinRequestInfoCard";
import { BulletinEventDetailsCard } from "@/components/prayer-ministry/bulletin/detail/BulletinEventDetailsCard";
import { ApprovalHistoryCard } from "@/components/prayer-ministry/bulletin/detail/ApprovalHistoryCard";
import { RequestStatusCard } from "@/components/prayer-ministry/bulletin/detail/RequestStatusCard";
import { RequestSummaryCard, RequestVisibilityCard } from "@/components/prayer-ministry/bulletin/detail/RequestSummaryVisibilityCards";
import { BulletinActionsCard } from "@/components/prayer-ministry/bulletin/detail/BulletinActionsCard";

export default function BulletinRequestDetailPage() {
  const { id } = useParams();
  const router = useRouter();
  const { request, isLoading } = useBulletinRequestDetail(id);

  if (isLoading || !request) {
    return <div className="py-16 text-center text-sm text-ink-subtle">Loading…</div>;
  }

  const typeStyle = BULLETIN_TYPE_BADGE[request.requestType] ?? { bg: "bg-surface-muted", color: "text-ink-subtle" };

  return (
    <div className="space-y-5 pb-10">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <Link href="/prayer-ministry/bulletin-requests" className="mb-1 flex items-center gap-1.5 text-xs font-medium text-interactive-500 hover:underline">
            <ArrowLeft className="h-3.5 w-3.5" /> Back to Bulletin Requests
          </Link>
          <h1 className="font-display text-2xl font-bold text-ink">Bulletin Request Details</h1>
          <span className={`mt-1 inline-flex rounded-sm px-2.5 py-1 text-xs font-medium ${typeStyle.bg} ${typeStyle.color}`}>{request.requestType}</span>
        </div>
        <div className="flex items-center gap-2">
          <Button type="button" variant="secondary" leftIcon={<Pencil className="h-4 w-4" />}>Edit Request</Button>
          <Button type="button" variant="secondary" leftIcon={<Download className="h-4 w-4" />}>Download</Button>
          <Button type="button" variant="secondary" rightIcon={<MoreHorizontal className="h-4 w-4" />}>More</Button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 xl:grid-cols-3">
        <div className="flex flex-col gap-5 xl:col-span-2">
          <BulletinRequestInfoCard request={request} />
          <BulletinEventDetailsCard request={request} />
          <ApprovalHistoryCard history={request.approvalHistory} />
        </div>

        <div className="flex flex-col gap-5">
          <RequestStatusCard request={request} />
          <RequestSummaryCard request={request} />
          <RequestVisibilityCard request={request} />
          <BulletinActionsCard
            onEdit={() => console.log("Edit", request.id)}
            onDuplicate={() => console.log("Duplicate", request.id)}
            onDelete={() => router.push("/prayer-ministry/bulletin-requests")}
          />
        </div>
      </div>
    </div>
  );
}
