"use client";

function smsPartsLabel(len) {
  const parts = Math.max(1, Math.ceil((len || 1) / 160));
  return `${parts} SMS`;
}

export function MessagePreviewCard({ form }) {
  return (
    <div className="rounded-lg border border-border bg-white p-5 shadow-card">
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-base font-semibold text-ink">Message Preview</h3>
        <span className="text-xs text-ink-subtle">{form.message.length} characters | {smsPartsLabel(form.message.length)}</span>
      </div>

      <div className="relative mx-auto flex h-56 w-40 flex-col items-center rounded-[1.5rem] border-4 border-surface-muted bg-surface-canvas/40 px-3 pt-5">
        <span className="mb-3 h-1 w-8 rounded-full bg-surface-muted" />
        <div className="w-full rounded-xl rounded-tl-sm bg-surface-muted px-3 py-2 text-[11px] leading-snug text-ink">
          {form.message || "Your message will appear here. It will be delivered to recipients as shown."}
        </div>
      </div>
      <p className="mt-4 text-center text-xs text-ink-subtle">This is a preview of how your SMS will appear to the recipients.</p>
    </div>
  );
}
