"use client";

export function PeopleWhoThankedCard({ count, extra = 0 }) {
  const shown = Math.max(count - extra, 0);
  return (
    <div>
      <div className="mb-2 flex items-center justify-between">
        <h4 className="text-sm font-semibold text-ink">People who Thanked</h4>
        <button type="button" className="text-xs font-medium text-interactive-500 hover:underline">View All</button>
      </div>
      <div className="flex items-center -space-x-2">
        {Array.from({ length: Math.min(shown, 5) }).map((_, i) => (
          <span key={i} className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-white bg-interactive-50 text-xs font-semibold text-interactive-600">
            {String.fromCharCode(65 + i)}
          </span>
        ))}
        {extra > 0 && (
          <span className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-white bg-surface-muted text-xs font-semibold text-ink-subtle">
            +{extra}
          </span>
        )}
      </div>
    </div>
  );
}
