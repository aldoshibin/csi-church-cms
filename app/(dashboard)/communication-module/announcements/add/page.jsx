"use client";

import Link from "next/link";
import { ArrowLeft, Save, Send } from "lucide-react";

import { useNewAnnouncementForm } from "@/hooks/useNewAnnouncementForm";
import { Button } from "@/components/ui/Button";
import { AnnouncementDetailsSection } from "@/components/communication-module/announcements/form/AnnouncementDetailsSection";
import { AudienceSelector } from "@/components/communication-module/announcements/form/AudienceSelector";
import { MessageContentEditor } from "@/components/communication-module/announcements/form/MessageContentEditor";
import { AnnouncementAttachmentsUpload } from "@/components/communication-module/announcements/form/AnnouncementAttachmentsUpload";
import { CommunicationChannelsSection } from "@/components/communication-module/announcements/form/CommunicationChannelsSection";
import { PublishSettingsCard } from "@/components/communication-module/announcements/form/PublishSettingsCard";
import { AnnouncementPreviewCard } from "@/components/communication-module/announcements/form/AnnouncementPreviewCard";
import { AnnouncementFormTipsCard } from "@/components/communication-module/announcements/form/AnnouncementFormTipsCard";

export default function CreateAnnouncementPage() {
  const { form, setField, toggleChannel, addAttachments, removeAttachment, isSubmitting, submit } = useNewAnnouncementForm();

  return (
    <div className="space-y-5 pb-10">
      <Link href="/communication-module/announcements" className="flex items-center gap-1.5 text-xs font-medium text-interactive-500 hover:underline">
        <ArrowLeft className="h-3.5 w-3.5" /> Back to Announcements
      </Link>

      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <h1 className="font-display text-2xl font-bold text-ink">Create Announcement</h1>
          <p className="mt-1 text-sm text-ink-subtle">Share important updates and information with your church community.</p>
        </div>
        <div className="flex items-center gap-2">
          <Button type="button" variant="secondary" leftIcon={<Save className="h-4 w-4" />} isLoading={isSubmitting} onClick={() => submit("Draft")}>
            Save as Draft
          </Button>
          <Button type="button" leftIcon={<Send className="h-4 w-4" />} isLoading={isSubmitting} onClick={() => submit("Published")}>
            Publish Announcement
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 xl:grid-cols-3">
        <div className="flex flex-col gap-5 xl:col-span-2">
          <AnnouncementDetailsSection form={form} setField={setField} />
          <AudienceSelector value={form.audienceType} onChange={(v) => setField("audienceType", v)} />
          <MessageContentEditor value={form.content} onChange={(v) => setField("content", v)} />
          <AnnouncementAttachmentsUpload attachments={form.attachments} onAdd={addAttachments} onRemove={removeAttachment} />
          <CommunicationChannelsSection channels={form.channels} onToggle={toggleChannel} />
        </div>

        <div className="flex flex-col gap-5">
          <PublishSettingsCard form={form} setField={setField} />
          <AnnouncementPreviewCard form={form} />
          <AnnouncementFormTipsCard />
        </div>
      </div>
    </div>
  );
}
