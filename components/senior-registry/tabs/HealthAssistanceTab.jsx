"use client";

import { UserPlus, Stethoscope, Home, Pill } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { SENIOR_HEALTH_ASSISTANCE_MOCK } from "@/lib/mock/seniorHealthAssistanceMock";

const ICONS = { stethoscope: Stethoscope, home: Home, pill: Pill };

export function HealthAssistanceTab({ onAddAssistance }) {
  return (
    <div className="p-5">
      <div className="mb-4 flex flex-wrap items-start justify-between gap-3">
        <div>
          <h3 className="text-lg font-bold text-ink">Health &amp; Assistance</h3>
          <p className="text-sm text-ink-subtle">Track pastoral care needs, health updates, and support requests.</p>
        </div>
        <Button type="button" size="sm" leftIcon={<UserPlus className="h-4 w-4" />} onClick={onAddAssistance}>
          Add Assistance
        </Button>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {SENIOR_HEALTH_ASSISTANCE_MOCK.map((item) => {
          const Icon = ICONS[item.icon];
          return (
            <div key={item.id} className="rounded-lg border border-border p-4">
              <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-full bg-interactive-50 text-interactive-500">
                <Icon className="h-4 w-4" />
              </div>
              <p className="font-semibold text-interactive-600">{item.title}</p>
              <p className="mt-1 text-sm text-ink-subtle">{item.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
