"use client";

function Row({ label, children }) {
  return (
    <div className="flex items-start justify-between gap-3 border-b border-border py-3 text-sm last:border-0">
      <span className="text-ink-subtle">{label}</span>
      <span className="text-right font-medium text-ink">{children ?? "–"}</span>
    </div>
  );
}

export function ReviewSaveStep({ form }) {
  return (
    <div className="rounded-lg border border-border bg-white p-6 shadow-card">
      <h3 className="text-base font-semibold text-ink">Review &amp; Save</h3>
      <p className="mt-0.5 text-xs text-ink-subtle">Please review your template before saving.</p>

      <div className="mt-4">
        <Row label="Template Name">{form.templateName || undefined}</Row>
        <Row label="Template Type">{form.templateType === "sms" ? "SMS Template" : "Email Template"}</Row>
        <Row label="Category">{form.category || undefined}</Row>
        <Row label="Purpose">{form.purpose || undefined}</Row>
        {form.templateType !== "sms" && <Row label="Subject">{form.subject || undefined}</Row>}
        <Row label="Status">{form.status === "active" ? "Active" : "Inactive"}</Row>
        <Row label="Share With">{form.shareWith === "allUsers" ? "All Users" : "Only Me"}</Row>
      </div>

      <div className="mt-4 rounded-lg border border-border bg-surface-canvas/40 p-4">
        <p className="text-xs text-ink-subtle">Content Preview</p>
        <p className="mt-2 whitespace-pre-line text-sm text-ink-muted">{form.content || "No content written yet."}</p>
      </div>
    </div>
  );
}
