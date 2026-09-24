"use client";

import { BookOpen } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function BurialFormHelpCard() {
  return (
    <div className="rounded-lg border border-border bg-white p-5 shadow-card">
      <h3 className="text-base font-semibold text-ink">Need Help?</h3>
      <p className="mt-1.5 text-sm text-ink-subtle">Fill in the burial details carefully.</p>
      <p className="mt-1 text-sm text-ink-subtle">All fields marked with * are required.</p>
      <Button type="button" variant="secondary" className="mt-3 w-full" leftIcon={<BookOpen className="h-4 w-4" />}>
        View Help Guide
      </Button>
    </div>
  );
}
