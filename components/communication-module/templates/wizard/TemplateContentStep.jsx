"use client";

export function TemplateContentStep({ form, setField }) {
  return (
    <div className="rounded-lg border border-border bg-white p-6 shadow-card">
      <h3 className="text-base font-semibold text-ink">Template Content</h3>
      <p className="mt-0.5 text-xs text-ink-subtle">
        Write the {form.templateType === "sms" ? "SMS message" : "email"} content. Insert a variable token (e.g. {"{First Name}"}) anywhere it should be personalized.
      </p>

      {form.templateType !== "sms" && (
        <div className="mt-4">
          <label className="mb-1.5 block text-sm font-medium text-ink">Subject</label>
          <input
            value={form.subject} onChange={(e) => setField("subject", e.target.value)}
            placeholder="Enter email subject"
            className="h-10 w-full rounded-md border border-border bg-white px-3 text-sm text-ink placeholder:text-ink-subtle focus:outline-none focus:ring-2 focus:ring-interactive-500/20 focus:border-interactive-500"
          />
        </div>
      )}

      <div className="mt-4">
        <label className="mb-1.5 block text-sm font-medium text-ink">Content</label>
        <textarea
          value={form.content} onChange={(e) => setField("content", e.target.value)}
          rows={10}
          placeholder={form.templateType === "sms" ? "Type your SMS template here..." : "Type your email template here..."}
          className="w-full resize-none rounded-md border border-border px-3 py-3 text-sm text-ink placeholder:text-ink-subtle focus:outline-none focus:ring-2 focus:ring-interactive-500/20 focus:border-interactive-500"
        />
      </div>
    </div>
  );
}
