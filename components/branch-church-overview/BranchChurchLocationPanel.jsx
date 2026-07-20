"use client";

import { Church } from "lucide-react";
import { FaChurch } from "react-icons/fa";

const REGION_DOT_COLOR = { "North Region": "bg-brand-700", "South Region": "bg-interactive-500", "East Region": "bg-brand-900", "West Region": "bg-accent-500" };


export function BranchChurchLocationPanel({ pins = [], regions = [], total }) {
  return (
    <div className="rounded-lg border border-border bg-white p-4 shadow-card">
      <h3 className="mb-3 text-sm font-semibold text-interactive-500">Branch Church Location</h3>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-[1.6fr_1fr]">
        <div className="relative h-64 overflow-hidden rounded-md bg-success-50">
          {/* Decorative road-like lines, purely illustrative */}
          <div className="absolute inset-0 opacity-40">
            <div className="absolute left-[10%] top-0 h-full w-[3px] -rotate-12 bg-white" />
            <div className="absolute left-[55%] top-0 h-full w-[5px] rotate-6 bg-white" />
            <div className="absolute left-0 top-[60%] h-[3px] w-full -rotate-3 bg-white" />
          </div>

          {pins.map((pin) => (
            <div
              key={pin.id}
              className="absolute flex h-7 w-7 -translate-x-1/2 -translate-y-full items-center justify-center rounded-full bg-brand-700 text-white shadow-card"
              style={{ top: pin.top, left: pin.left }}
            >
              <FaChurch className="h-3.5 w-3.5" />
            </div>
          ))}
        </div>

        <div>
          <p className="mb-2 text-sm font-semibold text-ink">Branches by Region</p>
          <ul className="space-y-2.5">
            {regions.map((region) => (
              <li key={region.label} className="flex items-center gap-2 text-sm">
                <span className={`h-2.5 w-2.5 shrink-0 rounded-full ${REGION_DOT_COLOR[region.label] ?? "bg-ink-subtle"}`} />
                <span className="flex-1 text-ink">{region.label}</span>
                <span className="font-semibold text-ink">{region.count}</span>
              </li>
            ))}
          </ul>
          <div className="mt-3 flex items-center justify-between border-t border-border pt-3 text-sm font-semibold">
            <span className="text-ink">Total</span>
            <span className="text-ink">{total}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
