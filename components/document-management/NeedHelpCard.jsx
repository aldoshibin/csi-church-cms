"use client";

import { HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function NeedHelpCard() {
  return (
    <div className="rounded-lg border border-border bg-white p-5 shadow-card">
      <div className="flex items-center gap-2">
        <HelpCircle className="h-4 w-4 text-interactive-600" />
        <h3 className="text-sm font-semibold text-ink">Need Help?</h3>
      </div>
      <p className="mt-2 text-sm text-ink-subtle">Learn more about managing document categories.</p>
      <Button type="button" variant="secondary" className="mt-3 w-full">View Help Center</Button>
    </div>
  );
}
