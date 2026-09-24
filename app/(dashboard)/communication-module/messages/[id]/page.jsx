"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { ArrowLeft } from "lucide-react";

import { useMessageDetail } from "@/hooks/useMessageDetail";
import { Badge } from "@/components/ui/Badge";
import { MESSAGE_STATUS_VARIANT } from "@/lib/mock/vmMessagesMockData";
import { MessageIcon } from "@/components/communication-module/messages/MessageIcon";
import { MessageDetailActionsMenu } from "@/components/communication-module/messages/detail/MessageDetailActionsMenu";
import { MessageContentCard } from "@/components/communication-module/messages/detail/MessageContentCard";
import { DeliverySummaryCard } from "@/components/communication-module/messages/detail/DeliverySummaryCard";
import { MessageDetailsSidebarCard } from "@/components/communication-module/messages/detail/MessageDetailsSidebarCard";
import { AudienceDetailsCard } from "@/components/communication-module/messages/detail/AudienceDetailsCard";
import { RelatedActionsCard } from "@/components/communication-module/messages/detail/RelatedActionsCard";

export default function MessageDetailPage() {
  const { id } = useParams();
  const { message, isLoading } = useMessageDetail(id);

  if (isLoading || !message) {
    return <div className="py-16 text-center text-sm text-ink-subtle">Loading…</div>;
  }

  const iconName = message.type === "SMS" ? "MessageSquareText" : message.type === "In-App" ? "Bell" : "Mail";

  return (
    <div className="space-y-5 pb-10">
      <Link href="/communication-module/messages" className="flex items-center gap-1.5 text-xs font-medium text-interactive-500 hover:underline">
        <ArrowLeft className="h-3.5 w-3.5" /> Back to Messages
      </Link>

      <div className="flex flex-wrap items-start justify-between gap-3 rounded-lg border border-border bg-white p-5 shadow-card">
        <div className="flex items-start gap-4">
          <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-lg bg-[#F3E8FF] text-[#7C3AED]">
            <MessageIcon name={iconName} className="h-6 w-6" />
          </span>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="font-display text-xl font-bold text-ink">{message.title}</h1>
              <Badge variant={MESSAGE_STATUS_VARIANT[message.status] ?? "default"}>{message.status}</Badge>
            </div>
            <p className="mt-1 text-sm text-ink-muted">{message.preview}</p>
            <div className="mt-3 flex flex-wrap items-center gap-6 text-sm text-ink-muted">
              <span>Type: <span className="font-medium text-ink">{message.type}</span></span>
              <span>Audience: <span className="font-medium text-ink">{message.audience}</span></span>
              <span>Sender: <span className="font-medium text-ink">{message.sender}</span></span>
              <span>
                Sent On: <span className="font-medium text-ink">
                  {new Date(message.sentOn).toLocaleString("en-IN", { day: "numeric", month: "short", year: "numeric", hour: "numeric", minute: "2-digit" })}
                </span>
              </span>
            </div>
          </div>
        </div>
        <MessageDetailActionsMenu
          onResend={() => console.log("Resend", message.id)}
          onFollowUp={() => console.log("Follow-up", message.id)}
          onDuplicate={() => console.log("Duplicate", message.id)}
          onDelete={() => console.log("Delete", message.id)}
        />
      </div>

      <div className="grid grid-cols-1 gap-5 xl:grid-cols-3">
        <div className="flex flex-col gap-5 xl:col-span-2">
          <MessageContentCard message={message} />
          <DeliverySummaryCard message={message} />
        </div>

        <div className="flex flex-col gap-5">
          <MessageDetailsSidebarCard message={message} />
          <AudienceDetailsCard message={message} />
          <RelatedActionsCard
            onResend={() => console.log("Resend", message.id)}
            onFollowUp={() => console.log("Follow-up", message.id)}
            onDuplicate={() => console.log("Duplicate", message.id)}
            onDelete={() => console.log("Delete", message.id)}
          />
        </div>
      </div>
    </div>
  );
}
