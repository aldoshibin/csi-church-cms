"use client";

import * as React from "react";
import { Bold, Italic, Underline, List, ListOrdered, Link2, Image as ImageIcon, UploadCloud, Image, Clock } from "lucide-react";
import { Modal } from "@/components/ui/Modal";
import { Button } from "@/components/ui/Button";

export function CreateAnnouncementModal({ open, onOpenChange, categories = [], audiences = [] }) {
  const [type, setType] = React.useState("Announcement");
  const [messageLength, setMessageLength] = React.useState(0);
  const [titleLength, setTitleLength] = React.useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    onOpenChange(false);
  };

  return (
    <Modal
      open={open}
      onOpenChange={onOpenChange}
      title="Create Announcement"
      size="lg"
      footer={
        <>
          <Button variant="secondary" onClick={() => onOpenChange(false)}>
            Cancel
          </Button>
          <Button onClick={handleSubmit}>Create Announcement</Button>
        </>
      }
    >
      <form onSubmit={handleSubmit} className="space-y-5">
        <p className="text-sm font-semibold text-interactive-500">Announcement Details</p>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <label className="mb-1.5 block text-sm font-medium text-ink">
              Title<span className="ml-0.5 text-danger-500">*</span>
            </label>
            <input
              type="text"
              maxLength={150}
              placeholder="Enter announcement title"
              onChange={(e) => setTitleLength(e.target.value.length)}
              className="h-10 w-full rounded-md border border-border px-3 text-sm text-ink placeholder:text-ink-subtle"
            />
            <p className="mt-1 text-right text-xs text-ink-subtle">{titleLength}/150</p>
          </div>

          <div>
            <label className="mb-1.5 block text-sm font-medium text-ink">
              Publish Date &amp; Time<span className="ml-0.5 text-danger-500">*</span>
            </label>
            <div className="flex gap-2">
              <input type="text" defaultValue="23-05-2025" className="h-10 flex-1 rounded-md border border-border px-3 text-sm text-ink" />
              <div className="relative w-24">
                <input type="text" defaultValue="10:00" className="h-10 w-full rounded-md border border-border px-3 pr-7 text-sm text-ink" />
                <Clock className="pointer-events-none absolute right-2 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-ink-subtle" />
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <label className="mb-1.5 block text-sm font-medium text-ink">
              Category<span className="ml-0.5 text-danger-500">*</span>
            </label>
            <select className="h-10 w-full rounded-md border border-border px-3 text-sm text-ink" defaultValue="">
              <option value="" disabled>Select category</option>
              {categories.map((category) => (
                <option key={category}>{category}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="mb-1.5 block text-sm font-medium text-ink">Expiry Date &amp; Time</label>
            <div className="flex gap-2">
              <input type="text" placeholder="dd-mm-yyyy" className="h-10 flex-1 rounded-md border border-border px-3 text-sm text-ink placeholder:text-ink-subtle" />
              <div className="relative w-24">
                <input type="text" placeholder="--:--" className="h-10 w-full rounded-md border border-border px-3 pr-7 text-sm text-ink placeholder:text-ink-subtle" />
                <Clock className="pointer-events-none absolute right-2 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-ink-subtle" />
              </div>
            </div>
          </div>
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-ink">
            Type<span className="ml-0.5 text-danger-500">*</span>
          </label>
          <div className="flex flex-wrap gap-5">
            {["Announcement", "Event", "Notice", "Ministry Update"].map((option) => (
              <label key={option} className="flex items-center gap-2 text-sm text-ink">
                <input
                  type="radio"
                  name="announcement-type"
                  checked={type === option}
                  onChange={() => setType(option)}
                  className="h-4 w-4 border-border text-interactive-500 focus-visible:ring-interactive-500"
                />
                {option}
              </label>
            ))}
          </div>
        </div>

        <div>
          <label className="mb-1.5 block text-sm font-medium text-ink">
            Audience<span className="ml-0.5 text-danger-500">*</span>
          </label>
          <select className="h-10 w-full rounded-md border border-border px-3 text-sm text-ink" defaultValue="">
            <option value="" disabled>Select audience</option>
            {audiences.map((audience) => (
              <option key={audience}>{audience}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="mb-1.5 block text-sm font-medium text-ink">
            Message<span className="ml-0.5 text-danger-500">*</span>
          </label>
          <div className="rounded-t-md border border-b-0 border-border bg-surface-canvas px-2 py-1.5">
            <div className="flex items-center gap-1">
              <select className="h-7 rounded border border-border bg-white px-1.5 text-xs text-ink-muted">
                <option>Paragraph</option>
                <option>Heading</option>
              </select>
              <span className="mx-1 h-4 w-px bg-border" />
              {[Bold, Italic, Underline, List, ListOrdered, Link2, ImageIcon].map((Icon, i) => (
                <button key={i} type="button" className="rounded p-1.5 text-ink-muted hover:bg-surface-muted">
                  <Icon className="h-3.5 w-3.5" />
                </button>
              ))}
            </div>
          </div>
          <textarea
            rows={4}
            maxLength={2000}
            placeholder="Write your announcement..."
            onChange={(e) => setMessageLength(e.target.value.length)}
            className="w-full resize-none rounded-b-md border border-border px-3 py-2 text-sm text-ink placeholder:text-ink-subtle"
          />
          <p className="mt-1 text-right text-xs text-ink-subtle">{messageLength}/2000</p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <UploadZone
            icon={UploadCloud}
            label="Attachments"
            optionalLabel="(Optional)"
            hint="Drag and drop files here or click to browse"
            sublabel="PDF, DOC, DOCX, JPG, PNG (Max 10MB each)"
          />
          <UploadZone
            icon={Image}
            label="Display Image"
            optionalLabel="(Optional)"
            hint="Drag and drop image here or click to browse"
            sublabel="JPG, PNG (Recommended size: 1200x630px)"
          />
        </div>

        <label className="flex items-center gap-2 text-sm text-ink">
          <input type="checkbox" className="h-4 w-4 rounded border-border text-interactive-500 focus-visible:ring-interactive-500" />
          Send email notification to selected audience
        </label>
      </form>
    </Modal>
  );
}

function UploadZone({ icon: Icon, label, optionalLabel, hint, sublabel }) {
  return (
    <div className="rounded-md border border-dashed border-border p-4 text-center">
      <p className="mb-2 text-left text-sm font-medium text-interactive-500">
        {label} <span className="text-ink-subtle">{optionalLabel}</span>
      </p>
      <Icon className="mx-auto h-6 w-6 text-interactive-400" />
      <p className="mt-2 text-xs text-ink-subtle">{hint}</p>
      <p className="mt-1 text-[10px] text-ink-subtle">{sublabel}</p>
    </div>
  );
}
