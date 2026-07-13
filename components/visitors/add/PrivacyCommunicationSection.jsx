"use client";

export default function PrivacyCommunicationSection({ form }) {
  const { register } = form;

  return (
    <section className="rounded-lg border border-border bg-white p-6 shadow-card">
      <h2 className="mb-4 font-display text-base font-semibold text-interactive-500">Privacy &amp; Communication</h2>
      <label className="flex items-start gap-3">
        <input type="checkbox" defaultChecked className="mt-0.5 h-4 w-4 rounded border-border text-interactive-500 focus-visible:ring-interactive-500" {...register("receive_updates")} />
        <span>
          <span className="block text-sm text-ink">I would like to receive updates and information about church events and programs.</span>
          <span className="block text-xs text-ink-subtle">You can unsubscribe anytime.</span>
        </span>
      </label>
    </section>
  );
}
