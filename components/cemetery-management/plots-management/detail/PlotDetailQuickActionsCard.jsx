"use client";

import { Pencil, ArrowLeftRight, ShieldAlert } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function PlotDetailQuickActionsCard() {
  return (
    <div className="rounded-lg border border-border bg-white p-5 shadow-card">
      <h3 className="mb-3 text-sm font-semibold text-ink">Quick Actions</h3>
      <div className="flex flex-col gap-2">
        <Button type="button" variant="secondary" className="justify-start" leftIcon={<Pencil className="h-4 w-4" />}>
          Edit Plot
        </Button>
        <Button type="button" variant="secondary" className="justify-start" leftIcon={<ArrowLeftRight className="h-4 w-4" />}>
          Move Plot
        </Button>
        <Button type="button" variant="secondary" className="justify-start text-danger-600 hover:bg-danger-50" leftIcon={<ShieldAlert className="h-4 w-4" />}>
          Mark as Maintenance
        </Button>
      </div>
    </div>
  );
}
