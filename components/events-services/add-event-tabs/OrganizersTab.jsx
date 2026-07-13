"use client";

import { Plus, X, User } from "lucide-react";

export function OrganizersTab() {
  return (
    <div className="space-y-5">
      <div>
        <p className="mb-3 text-sm font-semibold text-ink">Primary Contact</p>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <label className="mb-1.5 block text-sm font-medium text-ink">
              Name<span className="ml-0.5 text-danger-500">*</span>
            </label>
            <input type="text" placeholder="Enter contact name" className="h-10 w-full rounded-md border border-border px-3 text-sm text-ink placeholder:text-ink-subtle" />
          </div>
          <div>
            <label className="mb-1.5 block text-sm font-medium text-ink">Phone Number</label>
            <input type="text" placeholder="Enter phone number" className="h-10 w-full rounded-md border border-border px-3 text-sm text-ink placeholder:text-ink-subtle" />
          </div>
        </div>
        <div className="mt-4">
          <label className="mb-1.5 block text-sm font-medium text-ink">Email</label>
          <input type="email" placeholder="Enter email address" className="h-10 w-full max-w-sm rounded-md border border-border px-3 text-sm text-ink placeholder:text-ink-subtle" />
        </div>
      </div>

      <div>
        <div className="mb-2 flex items-center justify-between">
          <p className="text-sm font-semibold text-ink">Additional Organizers</p>
          <button type="button" className="flex items-center gap-1 text-sm font-medium text-interactive-500 hover:underline">
            <Plus className="h-3.5 w-3.5" /> Add Organizer
          </button>
        </div>

        <div className="space-y-2">
          {["John Thomas — Youth Pastor"].map((organizer) => (
            <div key={organizer} className="flex items-center gap-3 rounded-md border border-border p-3">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-interactive-50 text-interactive-600">
                <User className="h-4 w-4" />
              </div>
              <span className="flex-1 text-sm text-ink">{organizer}</span>
              <button type="button" className="text-ink-subtle hover:text-danger-500" aria-label="Remove organizer">
                <X className="h-4 w-4" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
