"use client";

import { Search, RotateCcw, Filter } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { PHOTO_STATUS_OPTIONS, IMAGE_SOURCE_OPTIONS, SENIOR_MINISTRY_OPTIONS, MEMBER_CATEGORY_OPTIONS } from "@/utils/constants";

export function PhotoFilterBar({ onSearchChange, onFieldChange, onClear, onApply, showWithoutPhotoOnly, onToggleWithoutPhotoOnly }) {
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
          <label className="mb-1.5 block text-sm font-medium text-ink">Photo Status</label>
          <select onChange={(e) => onFieldChange("photo_status", e.target.value || undefined)} defaultValue="" className="h-10 w-full rounded-md border border-border px-3 text-sm text-ink">
            <option value="">All</option>
            {PHOTO_STATUS_OPTIONS.map((opt) => (
              <option key={opt.value} value={opt.value}>{opt.label}</option>
            ))}
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
          <label className="mb-1.5 block text-sm font-medium text-ink">Member Type</label>
          <select onChange={(e) => onFieldChange("member_category", e.target.value || undefined)} defaultValue="" className="h-10 w-full rounded-md border border-border px-3 text-sm text-ink">
            <option value="">All</option>
            {MEMBER_CATEGORY_OPTIONS.map((opt) => (
              <option key={opt.value} value={opt.value}>{opt.label}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-medium text-ink">Image Source</label>
          <select onChange={(e) => onFieldChange("image_source", e.target.value || undefined)} defaultValue="" className="h-10 w-full rounded-md border border-border px-3 text-sm text-ink">
            <option value="">All</option>
            {IMAGE_SOURCE_OPTIONS.map((opt) => (
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
          <label className="mb-1.5 block text-sm font-medium text-ink">Age Group</label>
          <select onChange={(e) => onFieldChange("age_group", e.target.value || undefined)} defaultValue="" className="h-10 w-full rounded-md border border-border px-3 text-sm text-ink">
            <option value="">All</option>
            <option value="child">Children (0-12)</option>
            <option value="youth">Youth (13-17)</option>
            <option value="adult">Adults (18+)</option>
            <option value="senior">Senior (60+)</option>
          </select>
        </div>
        <div className="flex items-end">
          <label className="flex items-center gap-2 pb-2 text-sm text-ink">
            <button
              type="button"
              role="switch"
              aria-checked={showWithoutPhotoOnly}
              onClick={() => onToggleWithoutPhotoOnly(!showWithoutPhotoOnly)}
              className={`relative h-5 w-9 rounded-full transition-colors ${showWithoutPhotoOnly ? "bg-interactive-500" : "bg-surface-muted"}`}
            >
              <span className={`absolute top-0.5 h-4 w-4 rounded-full bg-white shadow transition-transform ${showWithoutPhotoOnly ? "translate-x-4" : "translate-x-0.5"}`} />
            </button>
            Show members without photo only
          </label>
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
