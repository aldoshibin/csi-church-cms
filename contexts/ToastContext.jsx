"use client";

import * as React from "react";
import * as ToastPrimitive from "@radix-ui/react-toast";
import { CheckCircle2, AlertTriangle, XCircle, Info, X } from "lucide-react";
import { cn } from "@/lib/utils";


const ToastContext = React.createContext(null);

const VARIANT_CONFIG = {
  success: { icon: CheckCircle2, className: "border-success-500/30 bg-success-50 text-success-600" },
  error: { icon: XCircle, className: "border-danger-500/30 bg-danger-50 text-danger-600" },
  warning: { icon: AlertTriangle, className: "border-warning-500/30 bg-warning-50 text-warning-600" },
  info: { icon: Info, className: "border-interactive-500/30 bg-interactive-50 text-interactive-600" },
};

export function ToastProvider({ children }) {
  const [toasts, setToasts] = React.useState([]);

  const toast = React.useCallback(({ title, description, variant = "info", duration = 4000 }) => {
    const id = crypto.randomUUID();
    setToasts((current) => [...current, { id, title, description, variant, duration }]);
  }, []);

  const dismiss = React.useCallback((id) => {
    setToasts((current) => current.filter((t) => t.id !== id));
  }, []);

  return (
    <ToastContext.Provider value={{ toast }}>
      <ToastPrimitive.Provider swipeDirection="right">
        {children}

        {toasts.map(({ id, title, description, variant, duration }) => {
          const { icon: Icon, className } = VARIANT_CONFIG[variant] ?? VARIANT_CONFIG.info;
          return (
            <ToastPrimitive.Root
              key={id}
              duration={duration}
              onOpenChange={(isOpen) => !isOpen && dismiss(id)}
              className={cn(
                "data-[state=open]:animate-slide-up data-[state=closed]:animate-fade-in",
                "flex w-full items-start gap-3 rounded-lg border bg-white p-4 shadow-elevated",
                className
              )}
            >
              <Icon className="h-5 w-5 shrink-0" />
              <div className="flex-1">
                {title && <ToastPrimitive.Title className="text-sm font-semibold text-ink">{title}</ToastPrimitive.Title>}
                {description && (
                  <ToastPrimitive.Description className="mt-0.5 text-sm text-ink-muted">
                    {description}
                  </ToastPrimitive.Description>
                )}
              </div>
              <ToastPrimitive.Close className="text-ink-subtle hover:text-ink">
                <X className="h-4 w-4" />
              </ToastPrimitive.Close>
            </ToastPrimitive.Root>
          );
        })}

        <ToastPrimitive.Viewport className="fixed bottom-4 right-4 z-[100] flex w-full max-w-sm flex-col gap-2 outline-none" />
      </ToastPrimitive.Provider>
    </ToastContext.Provider>
  );
}

export function useToast() {
  const context = React.useContext(ToastContext);
  if (!context) throw new Error("useToast must be used within a ToastProvider");
  return context;
}
