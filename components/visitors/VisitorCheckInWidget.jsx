"use client";

import * as React from "react";
import { forwardRef, useState } from "react";
import { UserPlus, ClipboardList } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { visitorService } from "@/services/visitorService";
import { useToast } from "@/contexts/ToastContext";


export const VisitorCheckInWidget = forwardRef(function VisitorCheckInWidget({ todayCount, weekCount }, ref) {
  const { toast } = useToast();
  const [query, setQuery] = useState("");
  const [isChecking, setIsChecking] = useState(false);

  const handleCheckIn = async () => {
    if (!query.trim()) return;
    setIsChecking(true);
    try {
      await visitorService.checkIn(query.trim());
      toast({ variant: "success", title: "Visitor checked in" });
      setQuery("");
    } catch (error) {
      toast({
        variant: "error",
        title: "Could not check in visitor",
        description: error?.response?.data?.detail || error?.message || "No matching visitor found.",
      });
    } finally {
      setIsChecking(false);
    }
  };

  return (
    <div ref={ref} className="rounded-lg border border-border bg-white p-5 shadow-card">
      <h2 className="font-display text-base font-semibold text-ink">Visitor Check-in</h2>
      <p className="mb-4 text-sm text-ink-subtle">Quickly check-in visitors when they arrive at the church.</p>

      <div className="flex flex-wrap items-center gap-3">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleCheckIn()}
          placeholder="Enter visitor name or phone number..."
          className="h-11 min-w-[280px] flex-1 rounded-md border border-border px-3 text-sm text-ink placeholder:text-ink-subtle"
        />
        <Button type="button" onClick={handleCheckIn} isLoading={isChecking}>Check-in</Button>

        <div className="ml-auto flex items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-interactive-50 text-interactive-500">
              <UserPlus className="h-4 w-4" />
            </div>
            <div>
              <p className="text-base font-bold text-ink font-display">{todayCount}</p>
              <p className="text-xs text-ink-subtle">Today&apos;s Check-ins</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-interactive-50 text-interactive-500">
              <ClipboardList className="h-4 w-4" />
            </div>
            <div>
              <p className="text-base font-bold text-ink font-display">{weekCount}</p>
              <p className="text-xs text-ink-subtle">This Week</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});
