import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-xs font-medium whitespace-nowrap",
  {
    variants: {
      variant: {
        default: "bg-surface-muted text-ink-muted",
        success: "bg-success-50 text-success-600",
        warning: "bg-warning-50 text-warning-600",
        danger: "bg-danger-50 text-danger-600",
        info: "bg-interactive-50 text-interactive-600",
        accent: "bg-accent-50 text-accent-600",
      },
    },
    defaultVariants: { variant: "default" },
  }
);


export function Badge({ className, variant, children, ...props }) {
  return (
    <span className={cn(badgeVariants({ variant }), className)} {...props}>
      {children}
    </span>
  );
}


export const STATUS_VARIANT_MAP = {
  ACTIVE: "success",
  INACTIVE: "default",
  TRANSFERRED_OUT: "warning",
  DECEASED: "default",
  SUSPENDED: "danger",
  NEW: "info",
  CONTACTED: "warning",
  VISITED_AGAIN: "info",
  JOINED: "success",
  NOT_INTERESTED: "default",
  LOST_CONTACT: "default",
  PRESENT: "success",
  ABSENT: "danger",
  EXCUSED: "warning",
  SUBMITTED: "info",
  PRAYING: "warning",
  ANSWERED: "success",
  CLOSED: "default",
};
