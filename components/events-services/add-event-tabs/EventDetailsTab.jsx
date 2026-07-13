"use client";

import * as React from "react";
import { Bold, Italic, Underline, List, ListOrdered, Link2, Image, Calendar as CalendarIcon, Clock } from "lucide-react";


export function EventDetailsTab() {
  const [descLength, setDescLength] = React.useState(0);
  const [registrationRequired, setRegistrationRequired] = React.useState(true);

  return (
    <div className="space-y-5">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label className="mb-1.5 block text-sm font-medium text-ink">
            Event / Service Title<span className="ml-0.5 text-danger-500">*</span>
          </label>
          <input
            type="text"
            placeholder="Enter event or service title"
            className="h-10 w-full rounded-md border border-border px-3 text-sm text-ink placeholder:text-ink-subtle"
          />
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-medium text-ink">
            Date<span className="ml-0.5 text-danger-500">*</span>
          </label>
          <div className="relative">
            <input
              type="text"
              placeholder="dd-mm-yyyy"
              className="h-10 w-full rounded-md border border-border px-3 pr-9 text-sm text-ink placeholder:text-ink-subtle"
            />
            <CalendarIcon className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-subtle" />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label className="mb-1.5 block text-sm font-medium text-ink">
            Category<span className="ml-0.5 text-danger-500">*</span>
          </label>
          <select className="h-10 w-full rounded-md border border-border px-3 text-sm text-ink" defaultValue="">
            <option value="" disabled>Select category</option>
            <option>Event</option>
            <option>Service</option>
            <option>Special Service</option>
            <option>Program</option>
            <option>Retreat</option>
            <option>Meeting</option>
          </select>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="mb-1.5 block text-sm font-medium text-ink">
              Start Time<span className="ml-0.5 text-danger-500">*</span>
            </label>
            <div className="relative">
              <input type="text" defaultValue="06:00 PM" className="h-10 w-full rounded-md border border-border px-3 pr-8 text-sm text-ink" />
              <Clock className="pointer-events-none absolute right-2.5 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-ink-subtle" />
            </div>
          </div>
          <div>
            <label className="mb-1.5 block text-sm font-medium text-ink">End Time</label>
            <div className="relative">
              <input type="text" defaultValue="07:30 PM" className="h-10 w-full rounded-md border border-border px-3 pr-8 text-sm text-ink" />
              <Clock className="pointer-events-none absolute right-2.5 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-ink-subtle" />
            </div>
          </div>
        </div>
      </div>

      <div>
        <label className="mb-1.5 block text-sm font-medium text-ink">
          Description<span className="ml-0.5 text-danger-500">*</span>
        </label>
        <div className="rounded-t-md border border-b-0 border-border bg-surface-canvas px-2 py-1.5">
          <div className="flex items-center gap-1">
            <select className="h-7 rounded border border-border bg-white px-1.5 text-xs text-ink-muted">
              <option>Normal</option>
              <option>Heading</option>
            </select>
            <span className="mx-1 h-4 w-px bg-border" />
            {[Bold, Italic, Underline, List, ListOrdered, Link2].map((Icon, i) => (
              <button key={i} type="button" className="rounded p-1.5 text-ink-muted hover:bg-surface-muted">
                <Icon className="h-3.5 w-3.5" />
              </button>
            ))}
          </div>
        </div>
        <textarea
          rows={3}
          maxLength={1000}
          placeholder="Enter event description..."
          onChange={(e) => setDescLength(e.target.value.length)}
          className="w-full resize-none rounded-b-md border border-border px-3 py-2 text-sm text-ink placeholder:text-ink-subtle"
        />
        <p className="mt-1 text-right text-xs text-ink-subtle">{descLength}/1000</p>
      </div>

      <label className="flex items-center gap-2 text-sm text-ink">
        <input type="checkbox" className="h-4 w-4 rounded border-border text-interactive-500 focus-visible:ring-interactive-500" />
        All Day Event
      </label>

      <div>
        <label className="mb-1.5 block text-sm font-medium text-ink">Repeat</label>
        <select className="h-10 w-full max-w-xs rounded-md border border-border px-3 text-sm text-ink" defaultValue="Does not repeat">
          <option>Does not repeat</option>
          <option>Daily</option>
          <option>Weekly</option>
          <option>Monthly</option>
          <option>Yearly</option>
        </select>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label className="mb-1.5 block text-sm font-medium text-ink">
            Organized By<span className="ml-0.5 text-danger-500">*</span>
          </label>
          <select className="h-10 w-full rounded-md border border-border px-3 text-sm text-ink" defaultValue="">
            <option value="" disabled>Select ministry / department</option>
            <option>Youth Ministry</option>
            <option>Women's Fellowship</option>
            <option>Men's Fellowship</option>
            <option>Choir & Worship Team</option>
            <option>Prayer Ministry</option>
            <option>Sunday School</option>
            <option>Parish Office</option>
          </select>
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-medium text-ink">In Collaboration With</label>
          <select className="h-10 w-full rounded-md border border-border px-3 text-sm text-ink" defaultValue="">
            <option value="">Select (optional)</option>
            <option>Youth Ministry</option>
            <option>Women's Fellowship</option>
            <option>Men's Fellowship</option>
            <option>Choir & Worship Team</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label className="mb-2 block text-sm font-medium text-ink">Registration Required</label>
          <div className="flex gap-5">
            <label className="flex items-center gap-2 text-sm text-ink">
              <input
                type="radio"
                name="registration-required"
                checked={registrationRequired}
                onChange={() => setRegistrationRequired(true)}
                className="h-4 w-4 border-border text-interactive-500 focus-visible:ring-interactive-500"
              />
              Yes
            </label>
            <label className="flex items-center gap-2 text-sm text-ink">
              <input
                type="radio"
                name="registration-required"
                checked={!registrationRequired}
                onChange={() => setRegistrationRequired(false)}
                className="h-4 w-4 border-border text-interactive-500 focus-visible:ring-interactive-500"
              />
              No
            </label>
          </div>

          {registrationRequired && (
            <div className="mt-4">
              <label className="mb-1.5 block text-sm font-medium text-ink">Registration Limit</label>
              <input
                type="text"
                placeholder="Enter limit (e.g., 100)"
                className="h-10 w-full rounded-md border border-border px-3 text-sm text-ink placeholder:text-ink-subtle"
              />
            </div>
          )}
        </div>

        <div>
          <label className="mb-1.5 block text-sm font-medium text-ink">Visibility</label>
          <select className="h-10 w-full rounded-md border border-border px-3 text-sm text-ink" defaultValue="Public (Visible to all)">
            <option>Public (Visible to all)</option>
            <option>Members Only</option>
            <option>Private (Invite Only)</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <div>
          <p className="mb-2 text-sm font-semibold text-ink">Target Audience</p>
          <div className="grid grid-cols-3 gap-x-4 gap-y-2.5">
            {["All Members", "Families", "Youth", "Children", "Women", "Men", "Seniors", "Others"].map((option) => (
              <label key={option} className="flex items-center gap-2 text-sm text-ink">
                <input
                  type="checkbox"
                  defaultChecked={option === "All Members"}
                  className="h-4 w-4 rounded border-border text-interactive-500 focus-visible:ring-interactive-500"
                />
                {option}
              </label>
            ))}
          </div>
        </div>

        <div>
          <p className="mb-2 text-sm font-semibold text-ink">Cover Image <span className="font-normal text-ink-subtle">(Optional)</span></p>
          <div className="rounded-md border border-dashed border-border p-6 text-center">
            <Image className="mx-auto h-7 w-7 text-interactive-400" />
            <p className="mt-2 text-sm font-medium text-ink">Click to upload</p>
            <p className="text-sm text-ink-subtle">or drag and drop</p>
            <p className="mt-1 text-xs text-ink-subtle">JPG, PNG or WEBP (Max. 2MB)</p>
          </div>
        </div>
      </div>
    </div>
  );
}
