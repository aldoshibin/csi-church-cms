import { cn } from "@/lib/utils";

export function Skeleton({ className }) {
  return <div className={cn("skeleton-shimmer animate-shimmer rounded-md", className)} />;
}

export function CardSkeleton() {
  return (
    <div className="rounded-lg border border-border bg-white p-5 shadow-card">
      <Skeleton className="mb-3 h-4 w-24" />
      <Skeleton className="mb-2 h-8 w-32" />
      <Skeleton className="h-3 w-20" />
    </div>
  );
}
