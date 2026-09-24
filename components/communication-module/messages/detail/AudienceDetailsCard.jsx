"use client";

function Row({ label, children }) {
  return (
    <div className="flex items-center justify-between gap-3 text-sm">
      <span className="text-ink-subtle">{label}</span>
      <span className="text-right font-medium text-ink">{children}</span>
    </div>
  );
}

export function AudienceDetailsCard({ message }) {
  return (
    <div className="rounded-lg border border-border bg-white p-4 shadow-card">
      <h3 className="mb-3 text-sm font-semibold text-ink">Audience Details</h3>
      <div className="flex flex-col gap-3">
        <Row label="Audience Type">{message.audienceType}</Row>
        <Row label="Total Recipients">{message.totalRecipients}</Row>
        <Row label="Delivered">{message.delivered} ({message.deliveredPct}%)</Row>
        <Row label="Opened">{message.opened} ({message.openedPct}%)</Row>
        <Row label="Clicked">{message.clicked} ({message.clickedPct}%)</Row>
        <Row label="Bounced">{message.bounced} ({message.bouncedPct}%)</Row>
      </div>
    </div>
  );
}
