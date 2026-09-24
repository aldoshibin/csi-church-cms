"use client";

function smsPartsLabel(len) {
  if (len === 0) return "0 SMS";
  const parts = Math.ceil(len / 160);
  return `${parts} SMS`;
}

export function MessageContentStep({ form, setField }) {
  return (
    <div className="rounded-lg border border-border bg-white p-6 shadow-card">
      <h3 className="text-base font-semibold text-ink">Message Content</h3>
      <p className="mt-0.5 text-xs text-ink-subtle">Write the SMS message that will be sent to your selected audience.</p>

      <div className="mt-4">
        <div className="mb-1.5 flex items-center justify-between">
          <label className="text-sm font-medium text-ink">
            Message <span className="text-danger-500">*</span>
          </label>
          <span className="text-xs text-ink-subtle">{form.message.length}/160 ({smsPartsLabel(form.message.length)})</span>
        </div>
        <textarea
          value={form.message} onChange={(e) => setField("message", e.target.value)}
          rows={6}
          placeholder="Type your SMS message here..."
          className="w-full resize-none rounded-md border border-border px-3 py-3 text-sm text-ink placeholder:text-ink-subtle focus:outline-none focus:ring-2 focus:ring-interactive-500/20 focus:border-interactive-500"
        />
        <p className="mt-1.5 text-xs text-ink-subtle">
          Messages over 160 characters will be sent as multiple SMS parts, which may increase cost.
        </p>
      </div>
    </div>
  );
}
