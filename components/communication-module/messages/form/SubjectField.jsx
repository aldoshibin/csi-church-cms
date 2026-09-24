"use client";

export function SubjectField({ form, setField }) {
  return (
    <div className="rounded-lg border border-border bg-white p-6 shadow-card">
      <div className="mb-1.5 flex items-center justify-between">
        <label className="text-sm font-medium text-ink">
          Subject <span className="text-danger-500">*</span>
        </label>
        <span className="text-xs text-ink-subtle">{form.subject.length}/150</span>
      </div>
      <input
        value={form.subject} maxLength={150}
        onChange={(e) => setField("subject", e.target.value)}
        placeholder="Enter message subject"
        className="h-10 w-full rounded-md border border-border bg-white px-3 text-sm text-ink placeholder:text-ink-subtle focus:outline-none focus:ring-2 focus:ring-interactive-500/20 focus:border-interactive-500"
      />
    </div>
  );
}
