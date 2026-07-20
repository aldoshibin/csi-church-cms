"use client";

import { Search, Filter, RotateCcw, Calendar } from "lucide-react";
import { Button } from "@/components/ui/Button";

const SACRAMENT_OPTIONS = ["Baptism", "Holy Communion", "Confirmation", "Marriage", "Holy Orders", "Anointing"];
const STATUS_OPTIONS = ["Completed", "Scheduled", "Cancelled"];

export function SacramentFilterBar({ onSearchChange, onFieldChange, onApply, onReset }) {
  return (
    <div className="flex flex-wrap items-center gap-3 rounded-lg border border-border bg-white p-4 shadow-card">
      <div className="relative min-w-[220px] flex-1">
        <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-subtle" />
        <input
          type="search"
          placeholder="Search records..."
          onChange={(e) => onSearchChange(e.target.value)}
          className="h-10 w-full rounded-md border border-border pl-9 pr-3 text-sm text-ink placeholder:text-ink-subtle"
        />
      </div>

      <select onChange={(e) => onFieldChange("sacrament", e.target.value || undefined)} defaultValue="" className="h-10 w-40 rounded-md border border-border px-3 text-sm text-ink">
        <option value="">All Sacraments</option>
        {SACRAMENT_OPTIONS.map((opt) => (
          <option key={opt}>{opt}</option>
        ))}
      </select>

      <select onChange={(e) => onFieldChange("status", e.target.value || undefined)} defaultValue="" className="h-10 w-36 rounded-md border border-border px-3 text-sm text-ink">
        <option value="">All Status</option>
        {STATUS_OPTIONS.map((opt) => (
          <option key={opt}>{opt}</option>
        ))}
      </select>

      <div className="flex h-10 items-center gap-1.5 rounded-md border border-border px-3 text-sm text-ink-subtle">
        <Calendar className="h-3.5 w-3.5" /> 01 May 2025 - 18 May 2025
      </div>

      <Button type="button" size="sm" leftIcon={<Filter className="h-3.5 w-3.5" />} onClick={onApply}>
        Filter
      </Button>
      <Button type="button" variant="secondary" size="sm" leftIcon={<RotateCcw className="h-3.5 w-3.5" />} onClick={onReset}>
        Reset
      </Button>
    </div>
  );
}
