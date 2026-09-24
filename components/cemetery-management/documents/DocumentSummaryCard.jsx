"use client";

const ROWS = [
  { key: "totalDocuments", label: "Total Documents" },
  { key: "certificates", label: "Certificates" },
  { key: "images", label: "Images" },
  { key: "documents", label: "Documents" },
  { key: "maps", label: "Maps" },
  { key: "receipts", label: "Receipts" },
];

export function DocumentSummaryCard({ data }) {
  if (!data) return null;
  return (
    <div className="rounded-lg border border-border bg-white p-5 shadow-card">
      <h3 className="text-sm font-semibold text-ink">Document Summary</h3>
      <div className="mt-3 flex flex-col gap-2.5">
        {ROWS.map((row) => (
          <div key={row.key} className="flex items-center justify-between text-sm">
            <span className="text-ink-muted">{row.label}</span>
            <span className="font-semibold text-ink">{data[row.key]}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
