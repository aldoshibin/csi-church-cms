"use client";

import { useState } from "react";
import { Plus, Trash2, ClipboardList } from "lucide-react";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";

export function AgendaBuilder({ agenda, onAdd, onRemove }) {
  const [showForm, setShowForm] = useState(false);
  const [item, setItem] = useState("");
  const [startTime, setStartTime] = useState("");
  const [duration, setDuration] = useState("");

  const handleAdd = () => {
    if (!item || !startTime) return;
    onAdd({ item, startTime, duration: duration || "—" });
    setItem(""); setStartTime(""); setDuration("");
    setShowForm(false);
  };

  return (
    <div className="rounded-lg border border-border bg-white p-6 shadow-card">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <h3 className="text-base font-semibold text-ink">Agenda</h3>
          <p className="mt-0.5 text-sm text-ink-subtle">Add agenda items for the meeting.</p>
        </div>
        <Button type="button" variant="secondary" size="sm" leftIcon={<Plus className="h-4 w-4" />} onClick={() => setShowForm((s) => !s)}>
          Add Agenda Item
        </Button>
      </div>

      {showForm && (
        <div className="mt-4 grid grid-cols-1 gap-3 rounded-lg border border-border bg-surface-canvas p-4 sm:grid-cols-4">
          <div className="sm:col-span-2">
            <Input label="Agenda Item" placeholder="E.g., Opening Prayer" value={item} onChange={(e) => setItem(e.target.value)} />
          </div>
          <Input label="Start Time" type="time" value={startTime} onChange={(e) => setStartTime(e.target.value)} />
          <Input label="Duration" placeholder="E.g., 10 min" value={duration} onChange={(e) => setDuration(e.target.value)} />
          <div className="sm:col-span-4 flex justify-end gap-2">
            <Button type="button" variant="secondary" size="sm" onClick={() => setShowForm(false)}>Cancel</Button>
            <Button type="button" size="sm" onClick={handleAdd}>Add</Button>
          </div>
        </div>
      )}

      <div className="mt-4">
        {agenda.length === 0 ? (
          <div className="flex flex-col items-center justify-center gap-2 py-12 text-center">
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-surface-muted text-ink-subtle">
              <ClipboardList className="h-6 w-6" />
            </span>
            <p className="text-sm font-medium text-ink">No agenda items added yet.</p>
            <p className="text-sm text-ink-subtle">Click &quot;Add Agenda Item&quot; to include topics.</p>
          </div>
        ) : (
          <table className="w-full text-left text-sm">
            <thead className="text-xs uppercase tracking-wide text-ink-muted">
              <tr>
                <th className="w-10 py-2">#</th>
                <th className="py-2 font-medium">Agenda Item</th>
                <th className="py-2 font-medium">Start Time</th>
                <th className="py-2 font-medium">Duration</th>
                <th className="py-2 text-right font-medium">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {agenda.map((a, i) => (
                <tr key={a.id}>
                  <td className="py-2.5 text-ink-muted">{i + 1}</td>
                  <td className="py-2.5 text-ink">{a.item}</td>
                  <td className="py-2.5 text-ink-muted">{a.startTime}</td>
                  <td className="py-2.5 text-ink-muted">{a.duration}</td>
                  <td className="py-2.5 text-right">
                    <button type="button" onClick={() => onRemove(a.id)} className="text-danger-500 hover:text-danger-600" aria-label="Remove agenda item">
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
