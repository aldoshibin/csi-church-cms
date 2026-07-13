"use client";

import { Plus, CalendarClock, Tag, Search } from "lucide-react";


export function AnnouncementsSidebar({ filters, onCreateClick }) {
  return (
    <div className="space-y-4">
      <div className="rounded-lg border border-border bg-white p-4 shadow-card">
        <h3 className="mb-3 text-sm font-semibold text-ink">Quick Actions</h3>
        <ul className="space-y-2.5 text-sm">
          <li>
            <button onClick={onCreateClick} className="flex items-center gap-2 text-interactive-500 hover:underline">
              <Plus className="h-4 w-4" /> Create Announcement
            </button>
          </li>
          <li>
            <button className="flex items-center gap-2 text-interactive-500 hover:underline">
              <CalendarClock className="h-4 w-4" /> Schedule Announcement
            </button>
          </li>
          <li>
            <button className="flex items-center gap-2 text-interactive-500 hover:underline">
              <Tag className="h-4 w-4" /> Manage Categories
            </button>
          </li>
        </ul>
      </div>

      <div className="rounded-lg border border-border bg-white p-4 shadow-card">
        <h3 className="mb-3 text-sm font-semibold text-ink">Filters</h3>

        <div className="space-y-3">
          <div>
            <label className="mb-1 block text-xs font-medium text-ink-subtle">Search</label>
            <div className="relative">
              <Search className="pointer-events-none absolute left-2.5 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-ink-subtle" />
              <input
                type="search"
                placeholder="Search announcements..."
                defaultValue={filters.search}
                className="h-9 w-full rounded-md border border-border pl-8 pr-2 text-sm text-ink"
              />
            </div>
          </div>

          <div>
            <label className="mb-1 block text-xs font-medium text-ink-subtle">Type</label>
            <select defaultValue={filters.type} className="h-9 w-full rounded-md border border-border px-2 text-sm text-ink">
              <option>All Types</option>
              <option>Announcement</option>
              <option>Event</option>
              <option>Notice</option>
              <option>Ministry Update</option>
            </select>
          </div>

          <div>
            <label className="mb-1 block text-xs font-medium text-ink-subtle">Audience</label>
            <select defaultValue={filters.audience} className="h-9 w-full rounded-md border border-border px-2 text-sm text-ink">
              <option>All Audiences</option>
              <option>All Members</option>
              <option>Youth Ministry</option>
              <option>Choir Members</option>
            </select>
          </div>

          <div>
            <label className="mb-1 block text-xs font-medium text-ink-subtle">Status</label>
            <select defaultValue={filters.status} className="h-9 w-full rounded-md border border-border px-2 text-sm text-ink">
              <option>Active</option>
              <option>Scheduled</option>
              <option>Archived</option>
            </select>
          </div>

          <div>
            <label className="mb-1 block text-xs font-medium text-ink-subtle">Date Range</label>
            <input
              type="text"
              defaultValue={filters.dateRange}
              className="h-9 w-full rounded-md border border-border px-2 text-sm text-ink"
            />
          </div>
        </div>

        <div className="mt-4 flex gap-2">
          <button className="flex-1 rounded-md border border-border py-2 text-sm font-medium text-ink hover:bg-surface-muted">
            Reset
          </button>
          <button className="flex-1 rounded-md bg-interactive-500 py-2 text-sm font-semibold text-white hover:bg-interactive-600">
            Apply Filters
          </button>
        </div>
      </div>
    </div>
  );
}
