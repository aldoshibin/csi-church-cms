"use client";

import Link from "next/link";
import { ArrowLeft, Save, Send } from "lucide-react";

import { useNewMessageForm } from "@/hooks/useNewMessageForm";
import { Button } from "@/components/ui/Button";
import { MessageAudienceSelector } from "@/components/communication-module/messages/form/MessageAudienceSelector";
import { MessageChannelSelector } from "@/components/communication-module/messages/form/MessageChannelSelector";
import { SubjectField } from "@/components/communication-module/messages/form/SubjectField";
import { NewMessageContentEditor } from "@/components/communication-module/messages/form/NewMessageContentEditor";
import { MessageAttachmentsUpload } from "@/components/communication-module/messages/form/MessageAttachmentsUpload";
import { MessageSettingsCard } from "@/components/communication-module/messages/form/MessageSettingsCard";
import { MessagePreviewCard } from "@/components/communication-module/messages/form/MessagePreviewCard";
import { MessageFormTipsCard } from "@/components/communication-module/messages/form/MessageFormTipsCard";

export default function NewMessagePage() {
  const { form, setField, toggleChannel, addAttachments, removeAttachment, isSubmitting, submit } = useNewMessageForm();

  return (
    <div className="space-y-5 pb-10">
      <Link href="/communication-module/messages" className="flex items-center gap-1.5 text-xs font-medium text-interactive-500 hover:underline">
        <ArrowLeft className="h-3.5 w-3.5" /> Back to Messages
      </Link>

      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <h1 className="font-display text-2xl font-bold text-ink">New Message</h1>
          <p className="mt-1 text-sm text-ink-subtle">Send a message to individuals, groups or ministries.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 xl:grid-cols-3">
        <div className="flex flex-col gap-5 xl:col-span-2">
          <MessageAudienceSelector value={form.audienceType} onChange={(v) => setField("audienceType", v)} />
          <MessageChannelSelector channels={form.channels} onToggle={toggleChannel} />
          <SubjectField form={form} setField={setField} />
          <NewMessageContentEditor value={form.content} onChange={(v) => setField("content", v)} />
          <MessageAttachmentsUpload attachments={form.attachments} onAdd={addAttachments} onRemove={removeAttachment} />

          <div className="flex items-center justify-end gap-2">
            <Button type="button" variant="secondary" leftIcon={<Save className="h-4 w-4" />} isLoading={isSubmitting} onClick={() => submit("Draft")}>
              Save as Draft
            </Button>
            <Button type="button" leftIcon={<Send className="h-4 w-4" />} isLoading={isSubmitting} onClick={() => submit("Sent")}>
              Send Message
            </Button>
          </div>
        </div>

        <div className="flex flex-col gap-5">
          <MessageSettingsCard form={form} setField={setField} />
          <MessagePreviewCard form={form} />
          <MessageFormTipsCard />
        </div>
      </div>
    </div>
  );
}
