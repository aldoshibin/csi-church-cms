"use client";

import * as React from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * FormSelect / FormTextarea
 * --------------------------------------------------------------
 * NOTE: These mirror the visual language and prop shape of your real
 * `components/ui/Input.jsx` (label / required / error / helperText /
 * leftIcon) so the Confirmation Register wizard is visually consistent
 * with the rest of the app.
 *
 * If you already have `components/ui/Select.jsx` and
 * `components/ui/Textarea.jsx` in the repo, delete this file and import
 * those instead — just send me their source and I'll wire the steps to
 * use them directly instead of these local equivalents.
 */

export const FormSelect = React.forwardRef(
  ({ className, label, error, required, leftIcon, children, id, ...props }, ref) => {
    const generatedId = React.useId();
    const selectId = id || generatedId;
    return (
      <div className="w-full">
        {label && (
          <label htmlFor={selectId} className="mb-1.5 block text-sm font-medium text-ink">
            {label}
            {required && <span className="ml-0.5 text-danger-500">*</span>}
          </label>
        )}
        <div className="relative">
          {leftIcon && (
            <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-ink-subtle">
              {leftIcon}
            </span>
          )}
          <select
            id={selectId}
            ref={ref}
            aria-invalid={!!error}
            className={cn(
              "h-10 w-full appearance-none rounded-md border border-border bg-white px-3 text-sm text-ink",
              "focus:border-interactive-500 focus:outline-none focus:ring-2 focus:ring-interactive-500/10",
              leftIcon && "pl-9",
              "pr-9",
              error && "border-danger-500 focus:border-danger-500 focus:ring-danger-500/10",
              className
            )}
            {...props}
          >
            {children}
          </select>
          <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-subtle" />
        </div>
        {error && <p className="mt-1 text-xs text-danger-500">{error}</p>}
      </div>
    );
  }
);
FormSelect.displayName = "FormSelect";

export const FormTextarea = React.forwardRef(
  ({ className, label, error, required, maxLength = 500, id, ...props }, ref) => {
    const generatedId = React.useId();
    const textareaId = id || generatedId;
    const [len, setLen] = React.useState((props.defaultValue || props.value || "").length);
    return (
      <div className="w-full">
        {label && (
          <label htmlFor={textareaId} className="mb-1.5 block text-sm font-medium text-ink">
            {label}
            {required && <span className="ml-0.5 text-danger-500">*</span>}
          </label>
        )}
        <div className="relative">
          <textarea
            id={textareaId}
            ref={ref}
            maxLength={maxLength}
            onChange={(e) => {
              setLen(e.target.value.length);
              props.onChange?.(e);
            }}
            rows={props.rows || 3}
            aria-invalid={!!error}
            className={cn(
              "w-full resize-y rounded-md border border-border bg-white px-3 py-2.5 text-sm text-ink",
              "focus:border-interactive-500 focus:outline-none focus:ring-2 focus:ring-interactive-500/10",
              error && "border-danger-500 focus:border-danger-500 focus:ring-danger-500/10",
              className
            )}
            {...props}
          />
          <span className="pointer-events-none absolute bottom-2 right-3 text-[11px] text-ink-subtle">
            {len}/{maxLength}
          </span>
        </div>
        {error && <p className="mt-1 text-xs text-danger-500">{error}</p>}
      </div>
    );
  }
);
FormTextarea.displayName = "FormTextarea";
