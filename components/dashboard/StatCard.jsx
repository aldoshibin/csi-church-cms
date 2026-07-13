"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { CardSkeleton } from "@/components/ui/Skeleton";


export function StatCard({ label, value, icon: Icon, accent = false, trend, isLoading }) {
  if (isLoading) return <CardSkeleton />;

  return (
    <motion.div
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25 }}
      className={cn(
        "relative overflow-hidden rounded-lg border border-border bg-white p-5 shadow-card",
        accent && "border-accent-200"
      )}
    >
      {accent && (
        <span className="absolute right-0 top-0 h-full w-1.5 bg-gradient-to-b from-accent-400 to-accent-500" />
      )}
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm font-medium text-ink-subtle">{label}</p>
          <p className="mt-1.5 text-2xl font-semibold text-ink font-display">{value}</p>
          {trend && (
            <p className={cn("mt-1 text-xs font-medium", trend.positive ? "text-success-600" : "text-danger-600")}>
              {trend.label}
            </p>
          )}
        </div>
        {Icon && (
          <div
            className={cn(
              "flex h-10 w-10 shrink-0 items-center justify-center rounded-md",
              accent ? "bg-accent-50 text-accent-500" : "bg-interactive-50 text-interactive-500"
            )}
          >
            <Icon className="h-5 w-5" />
          </div>
        )}
      </div>
    </motion.div>
  );
}
