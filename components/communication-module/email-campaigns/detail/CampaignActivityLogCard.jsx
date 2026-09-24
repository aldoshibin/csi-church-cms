"use client";

export function CampaignActivityLogCard({ activityLog = [] }) {
  return (
    <div className="rounded-lg border border-border bg-white shadow-card">
      <h3 className="px-5 pt-5 text-base font-semibold text-ink">Activity Log</h3>
      <div className="scroll-thin mt-3 overflow-x-auto">
        <table className="w-full min-w-full text-left text-sm">
          <thead className="bg-surface-canvas text-xs uppercase tracking-wide text-ink-muted">
            <tr>
              <th className="px-5 py-3 font-medium">Action</th>
              <th className="px-5 py-3 font-medium">By</th>
              <th className="px-5 py-3 font-medium">Date &amp; Time</th>
              <th className="px-5 py-3 font-medium">Details</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {activityLog.map((entry, i) => (
              <tr key={i}>
                <td className="px-5 py-3 font-medium text-ink">{entry.action}</td>
                <td className="px-5 py-3 text-ink-muted">{entry.by}</td>
                <td className="px-5 py-3 text-ink-muted">
                  {new Date(entry.dateTime).toLocaleString("en-IN", { day: "numeric", month: "short", year: "numeric", hour: "numeric", minute: "2-digit" })}
                </td>
                <td className="px-5 py-3 text-ink-muted">{entry.details}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="h-5" />
    </div>
  );
}
