"use client";

import * as React from "react";
import { AlertCircle } from "lucide-react";
import { cn } from "@/lib/utils";


const Input = React.forwardRef(
  (
    { className, type = "text", label, error, helperText, leftIcon, rightIcon, required, id, ...props },
    ref
  ) => {
    const generatedId = React.useId();
    const inputId = id || generatedId;

    return (
      <div className="w-full">
        {label && (
          <label
            htmlFor={inputId}
            className="mb-1.5 block text-sm font-medium text-ink"
          >
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

          <input
            id={inputId}
            type={type}
            ref={ref}
            aria-invalid={!!error}
            aria-describedby={error ? `${inputId}-error` : helperText ? `${inputId}-helper` : undefined}
            className={cn(
              "flex h-10 w-full rounded-md border border-border bg-white px-3 py-2 text-sm text-ink",
              "placeholder:text-ink-subtle transition-colors",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-interactive-500 focus-visible:border-interactive-500",
              "disabled:cursor-not-allowed disabled:opacity-50 disabled:bg-surface-muted",
              leftIcon && "pl-10",
              rightIcon && "pr-10",
              error && "border-danger-500 focus-visible:ring-danger-500",
              className
            )}
            {...props}
          />

          {rightIcon && (
            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-ink-subtle">
              {rightIcon}
            </span>
          )}
        </div>

        {error && (
          <p id={`${inputId}-error`} className="mt-1.5 flex items-center gap-1 text-xs text-danger-600">
            <AlertCircle className="h-3.5 w-3.5 shrink-0" />
            {error}
          </p>
        )}
        {!error && helperText && (
          <p id={`${inputId}-helper`} className="mt-1.5 text-xs text-ink-subtle">
            {helperText}
          </p>
        )}
      </div>
    );
  }
);
Input.displayName = "Input";

const Textarea = React.forwardRef(
  ({ className, label, error, helperText, required, id, rows = 4, ...props }, ref) => {
    const generatedId = React.useId();
    const inputId = id || generatedId;

    return (
      <div className="w-full">
        {label && (
          <label htmlFor={inputId} className="mb-1.5 block text-sm font-medium text-ink">
            {label}
            {required && <span className="ml-0.5 text-danger-500">*</span>}
          </label>
        )}
        <textarea
          id={inputId}
          ref={ref}
          rows={rows}
          aria-invalid={!!error}
          className={cn(
            "flex w-full rounded-md border border-border bg-white px-3 py-2 text-sm text-ink",
            "placeholder:text-ink-subtle transition-colors resize-none",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-interactive-500 focus-visible:border-interactive-500",
            "disabled:cursor-not-allowed disabled:opacity-50 disabled:bg-surface-muted",
            error && "border-danger-500 focus-visible:ring-danger-500",
            className
          )}
          {...props}
        />
        {error && (
          <p className="mt-1.5 flex items-center gap-1 text-xs text-danger-600">
            <AlertCircle className="h-3.5 w-3.5 shrink-0" />
            {error}
          </p>
        )}
        {!error && helperText && <p className="mt-1.5 text-xs text-ink-subtle">{helperText}</p>}
      </div>
    );
  }
);
Textarea.displayName = "Textarea";

const Select = React.forwardRef(
  ({ className, label, error, helperText, required, id, children, ...props }, ref) => {
    const generatedId = React.useId();
    const inputId = id || generatedId;

    return (
      <div className="w-full">
        {label && (
          <label htmlFor={inputId} className="mb-1.5 block text-sm font-medium text-ink">
            {label}
            {required && <span className="ml-0.5 text-danger-500">*</span>}
          </label>
        )}
        <select
          id={inputId}
          ref={ref}
          aria-invalid={!!error}
          className={cn(
            "flex h-10 w-full rounded-md border border-border bg-white px-3 py-2 text-sm text-ink",
            "transition-colors appearance-none",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-interactive-500 focus-visible:border-interactive-500",
            "disabled:cursor-not-allowed disabled:opacity-50 disabled:bg-surface-muted",
            error && "border-danger-500 focus-visible:ring-danger-500",
            className
          )}
          {...props}
        >
          {children}
        </select>
        {error && (
          <p className="mt-1.5 flex items-center gap-1 text-xs text-danger-600">
            <AlertCircle className="h-3.5 w-3.5 shrink-0" />
            {error}
          </p>
        )}
        {!error && helperText && <p className="mt-1.5 text-xs text-ink-subtle">{helperText}</p>}
      </div>
    );
  }
);
Select.displayName = "Select";

export { Input, Textarea, Select };
