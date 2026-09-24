"use client";

export function CampaignEmailContentCard({ campaign }) {
  const p = campaign.emailPreview;
  return (
    <div className="rounded-lg border border-border bg-white p-6 shadow-card">
      <h3 className="mb-4 text-base font-semibold text-ink">Email Content</h3>

      <div>
        <p className="text-xs text-ink-subtle">Subject</p>
        <p className="mt-1 text-sm font-medium text-ink">{campaign.subject}</p>
      </div>

      <div className="mt-4">
        <p className="text-xs text-ink-subtle">Preview Text</p>
        <p className="mt-1 text-sm text-ink-muted">{campaign.previewText}</p>
      </div>

      {p && (
        <div className="mt-4">
          <p className="mb-2 text-xs text-ink-subtle">Email Preview</p>
          <div className="rounded-lg border border-border bg-[#FBF8F3] p-8 text-center">
            <div className="mx-auto mb-4 flex items-center justify-center gap-2 text-sm font-semibold text-success-700">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-success-600 text-white">
                <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4"><path d="M12 3l8 5v10a2 2 0 01-2 2H6a2 2 0 01-2-2V8l8-5z" stroke="white" strokeWidth="1.5" /></svg>
              </span>
              CSI St. John&apos;s Church
            </div>
            <p className="text-lg font-semibold text-ink">{p.heading}</p>
            <p className="mt-1 font-display text-2xl font-bold text-success-700">{p.subheading}</p>
            <p className="mx-auto mt-3 max-w-md whitespace-pre-line text-sm text-ink-muted">{p.body}</p>
            <div className="mx-auto mt-5 flex max-w-xs flex-col gap-2 border-t border-border pt-4 text-left text-sm text-ink-muted">
              <span>{p.date}</span>
              <span>{p.time}</span>
              <span>{p.location}</span>
            </div>
            <p className="mt-5 text-sm text-ink-muted">{p.closing}</p>
            <p className="mt-3 whitespace-pre-line text-sm font-medium text-ink">{p.signoff}</p>
            <button type="button" className="mt-5 rounded-md border border-border bg-white px-4 py-2 text-xs font-medium text-ink-muted hover:bg-surface-canvas">
              View in Browser
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
