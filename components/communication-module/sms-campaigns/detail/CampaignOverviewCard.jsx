"use client";

function Row({ label, children }) {
  return (
    <div className="grid grid-cols-[120px_1fr] gap-3 py-2.5 text-sm">
      <span className="text-ink-subtle">{label}</span>
      <span className="font-medium text-ink">{children}</span>
    </div>
  );
}

export function CampaignOverviewCard({ campaign }) {
  return (
    <div className="rounded-lg border border-border bg-white p-6 shadow-card">
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_260px]">
        <div>
          <Row label="Subject">{campaign.subject}</Row>
          <Row label="Message">
            <span className="mt-1 block rounded-lg bg-surface-canvas/60 px-3 py-2.5 font-normal text-ink-muted">{campaign.message}</span>
          </Row>
          <Row label="Character Count">{campaign.characterCount} / 160 ({campaign.smsPartsLabel})</Row>
          <Row label="Channel">{campaign.channel}</Row>
          <Row label="Template Used">{campaign.templateUsed}</Row>
          <Row label="Created By">{campaign.createdBy}</Row>
          <Row label="Created On">
            {new Date(campaign.createdOn).toLocaleString("en-IN", { day: "numeric", month: "short", year: "numeric", hour: "numeric", minute: "2-digit" })}
          </Row>
          <Row label="Last Updated">
            {new Date(campaign.lastUpdated).toLocaleString("en-IN", { day: "numeric", month: "short", year: "numeric", hour: "numeric", minute: "2-digit" })}
          </Row>
        </div>

        <div className="flex flex-col items-center justify-center gap-4 rounded-lg bg-surface-canvas/40 p-6">
          <div className="relative flex h-64 w-40 flex-col items-center rounded-[1.5rem] border-4 border-white bg-white px-3 pt-6 shadow-card">
            <span className="mb-4 h-1 w-8 rounded-full bg-surface-muted" />
            <div className="w-full rounded-xl rounded-tl-sm bg-success-50 px-3 py-2.5 text-[11px] leading-snug text-success-800">
              {campaign.message}
            </div>
          </div>
          <p className="text-center text-xs text-ink-subtle">This is how your message appeared to recipients.</p>
        </div>
      </div>
    </div>
  );
}
