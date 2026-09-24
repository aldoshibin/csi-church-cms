"use client";

import { Phone } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function BookingHelpCard() {
  return (
    <div className="rounded-lg border border-border bg-white p-5 shadow-card">
      <h3 className="text-base font-semibold text-ink">Need Help?</h3>
      <p className="mt-1.5 text-sm text-ink-subtle">For any queries related to this booking, please contact the parish office.</p>
      <Button type="button" variant="secondary" className="mt-3 w-full" leftIcon={<Phone className="h-4 w-4" />}>
        Contact Parish Office
      </Button>
    </div>
  );
}
