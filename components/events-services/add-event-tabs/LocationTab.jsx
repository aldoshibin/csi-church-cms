"use client";

import { MapPin } from "lucide-react";


export function LocationTab() {
  return (
    <div className="space-y-5">
      <div>
        <label className="mb-1.5 block text-sm font-medium text-ink">
          Venue<span className="ml-0.5 text-danger-500">*</span>
        </label>
        <select className="h-10 w-full rounded-md border border-border px-3 text-sm text-ink" defaultValue="">
          <option value="" disabled>Select venue</option>
          <option>Main Church</option>
          <option>St. Peter's Chapel</option>
          <option>St. Mary's Mission</option>
          <option>Hill View Branch</option>
          <option>Youth Hall</option>
          <option>Fellowship Hall</option>
          <option>Conference Room</option>
          <option>Other (specify below)</option>
        </select>
      </div>

      <div>
        <label className="mb-1.5 block text-sm font-medium text-ink">Address / Additional Directions</label>
        <div className="relative">
          <MapPin className="pointer-events-none absolute left-3 top-3 h-4 w-4 text-ink-subtle" />
          <textarea
            rows={2}
            placeholder="Enter full address or directions (if not a regular venue)"
            className="w-full resize-none rounded-md border border-border py-2 pl-9 pr-3 text-sm text-ink placeholder:text-ink-subtle"
          />
        </div>
      </div>

      <label className="flex items-center gap-2 text-sm text-ink">
        <input type="checkbox" className="h-4 w-4 rounded border-border text-interactive-500 focus-visible:ring-interactive-500" />
        This is a hybrid / online event
      </label>

      <div>
        <label className="mb-1.5 block text-sm font-medium text-ink">Online Meeting Link</label>
        <input
          type="text"
          placeholder="https://..."
          className="h-10 w-full rounded-md border border-border px-3 text-sm text-ink placeholder:text-ink-subtle"
        />
      </div>
    </div>
  );
}
