"use client";

import { useState } from "react";
import { Plus, X } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { formatDate } from "@/lib/utils";

export function PrayerUpdatesTimeline({ updates = [], onAddUpdate }) {
  const [showForm, setShowForm] = useState(false);
  const [text, setText] = useState("");

  const handleAdd = () => {
    if (!text.trim()) return;
    onAddUpdate(text);
    setText("");
    setShowForm(false);
  };

  return (
    <div>
      <h4 className="mb-3 text-sm font-semibold text-ink">Prayer Updates</h4>
      <div className="flex flex-col gap-4">
        {updates.map((u, i) => (
          <div key={i} className="flex gap-3">
            <div className="flex flex-col items-center">
              <span className={`h-2.5 w-2.5 shrink-0 rounded-full border-2 ${i === 0 ? "border-success-500 bg-success-500" : "border-interactive-500 bg-white"}`} />
              {i < updates.length - 1 && <span className="mt-1 w-px flex-1 bg-border" />}
            </div>
            <div className="min-w-0 flex-1 pb-1">
              <p className="text-xs text-ink-subtle">{formatDate(u.date)} - {u.time}</p>
              <p className="text-sm font-medium text-ink">
                Update by {u.authorType === "intercessor" ? "Intercessor - " : ""}{u.author}
              </p>
              <p className="mt-0.5 text-sm leading-relaxed text-ink-muted">{u.text}</p>
            </div>
          </div>
        ))}
      </div>

      {showForm ? (
        <div className="mt-3 rounded-lg border border-border bg-surface-canvas p-3">
          <textarea
            value={text} onChange={(e) => setText(e.target.value)} rows={3}
            placeholder="Share a prayer update..."
            className="w-full rounded-md border border-border bg-white p-2 text-sm text-ink placeholder:text-ink-subtle focus:outline-none focus:ring-2 focus:ring-interactive-500/20"
          />
          <div className="mt-2 flex justify-end gap-2">
            <Button type="button" variant="secondary" size="sm" leftIcon={<X className="h-3.5 w-3.5" />} onClick={() => setShowForm(false)}>Cancel</Button>
            <Button type="button" size="sm" onClick={handleAdd}>Post Update</Button>
          </div>
        </div>
      ) : (
        <button
          type="button"
          onClick={() => setShowForm(true)}
          className="mt-3 flex items-center gap-2 rounded-md border border-border px-3 py-2 text-sm font-medium text-ink-muted hover:bg-surface-canvas"
        >
          <Plus className="h-4 w-4" /> Add Update
        </button>
      )}
    </div>
  );
}
