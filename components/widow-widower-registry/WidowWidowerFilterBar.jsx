"use client";

import * as React from "react";
import { Search, RotateCcw, Filter } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { WIDOW_WIDOWER_GENDER_OPTIONS, SENIOR_MINISTRY_OPTIONS } from "@/utils/constants";

export function WidowWidowerFilterBar({ onSearchChange, onFieldChange, onClear, onApply }) {
  const [registeredFrom, setRegisteredFrom] = React.useState("");
  const [registeredTo, setRegisteredTo] = React.useState("");

  return (
    <section className="rounded-lg border border-border bg-white p-5 shadow-card">
      <h2 className="mb-4 font-display text-base font-semibold text-ink">Search &amp; Filter</h2>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
        <div>
          <label className="mb-1.5 block text-sm font-medium text-ink">Search Member</label>
          <div className="relative">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-subtle" />
            <input
              type="search"
              placeholder="Search by name, membership no., phone..."
              onChange={(e) => onSearchChange(e.target.value)}
              className="h-10 w-full rounded-md border border-border pl-9 pr-3 text-sm text-ink placeholder:text-ink-subtle"
            />
          </div>
        </div>

        <div>
          <label className="mb-1.5 block text-sm font-medium text-ink">Gender</label>
          <select onChange={(e) => onFieldChange("gender", e.target.value || undefined)} defaultValue="" className="h-10 w-full rounded-md border border-border px-3 text-sm text-ink">
            <option value="">All</option>
            {WIDOW_WIDOWER_GENDER_OPTIONS.map((opt) => (
              <option key={opt.value} value={opt.value}>{opt.label}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-medium text-ink">Age Group</label>
          <select onChange={(e) => onFieldChange("age_group", e.target.value || undefined)} defaultValue="" className="h-10 w-full rounded-md border border-border px-3 text-sm text-ink">
            <option value="">All</option>
            <option value="60-69">60 - 69 Years</option>
            <option value="70-79">70 - 79 Years</option>
            <option value="80+">80+ Years</option>
          </select>
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-medium text-ink">Ministry / Group</label>
          <select onChange={(e) => onFieldChange("ministry_group", e.target.value || undefined)} defaultValue="" className="h-10 w-full rounded-md border border-border px-3 text-sm text-ink">
            <option value="">All</option>
            {SENIOR_MINISTRY_OPTIONS.map((opt) => (
              <option key={opt}>{opt}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="mb-1.5 block text-sm font-medium text-ink">Current Church</label>
          <select onChange={(e) => onFieldChange("church_id", e.target.value || undefined)} defaultValue="" className="h-10 w-full rounded-md border border-border px-3 text-sm text-ink">
            <option value="">All</option>
            <option value="1">St. John's Church (Main)</option>
            <option value="2">St. Mark's Church</option>
            <option value="3">Emmanuel Church</option>
          </select>
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-medium text-ink">Membership Status</label>
          <select onChange={(e) => onFieldChange("membership_status", e.target.value || undefined)} defaultValue="" className="h-10 w-full rounded-md border border-border px-3 text-sm text-ink">
            <option value="">All</option>
            <option value="ACTIVE">Active</option>
            <option value="INACTIVE">Inactive</option>
          </select>
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-medium text-ink">Registered On</label>
          <div className="flex items-center gap-1.5">
            <input
              type="date"
              value={registeredFrom}
              onChange={(e) => { setRegisteredFrom(e.target.value); onFieldChange("registered_after", e.target.value || undefined); }}
              className="h-10 w-full rounded-md border border-border px-2 text-sm text-ink"
            />
            <span className="text-ink-subtle">to</span>
            <input
              type="date"
              value={registeredTo}
              onChange={(e) => { setRegisteredTo(e.target.value); onFieldChange("registered_before", e.target.value || undefined); }}
              className="h-10 w-full rounded-md border border-border px-2 text-sm text-ink"
            />
          </div>
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-medium text-ink">Status</label>
          <select onChange={(e) => onFieldChange("status", e.target.value || undefined)} defaultValue="" className="h-10 w-full rounded-md border border-border px-3 text-sm text-ink">
            <option value="">All</option>
            <option value="ACTIVE">Active</option>
            <option value="INACTIVE">Inactive</option>
          </select>
        </div>
      </div>

      <div className="mt-4 flex items-center justify-between">
        <Button type="button" variant="secondary" size="sm" leftIcon={<RotateCcw className="h-3.5 w-3.5" />} onClick={onClear}>
          Clear Filters
        </Button>
        <Button type="button" size="sm" leftIcon={<Filter className="h-3.5 w-3.5" />} onClick={onApply}>
          Apply Filters
        </Button>
      </div>
    </section>
  );
}
