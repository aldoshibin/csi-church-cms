"use client";

import * as React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";


const SIZE_CLASSES = {
  sm: "max-w-sm",
  md: "max-w-md",
  lg: "max-w-2xl",
  xl: "max-w-4xl",
};

export function Modal({ open, onOpenChange, title, description, size = "md", children, footer }) {
  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <AnimatePresence>
        {open && (
          <Dialog.Portal forceMount>
            <Dialog.Overlay asChild>
              <motion.div
                className="fixed inset-0 z-50 bg-ink/40 backdrop-blur-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.15 }}
              />
            </Dialog.Overlay>

            <Dialog.Content asChild forceMount>
              <motion.div
                className={cn(
                  "fixed left-1/2 top-1/2 z-50 w-[92vw] -translate-x-1/2 -translate-y-1/2",
                  "max-h-[88vh] overflow-y-auto rounded-lg bg-white shadow-elevated",
                  SIZE_CLASSES[size]
                )}
                initial={{ opacity: 0, scale: 0.96, y: 8 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96, y: 8 }}
                transition={{ duration: 0.18, ease: "easeOut" }}
              >
                {(title || description) && (
                  <div className="flex items-start justify-between border-b border-border px-6 py-4">
                    <div>
                      {title && (
                        <Dialog.Title className="text-base font-semibold text-ink">{title}</Dialog.Title>
                      )}
                      {description && (
                        <Dialog.Description className="mt-1 text-sm text-ink-subtle">
                          {description}
                        </Dialog.Description>
                      )}
                    </div>
                    <Dialog.Close className="rounded-md p-1 text-ink-subtle transition-colors hover:bg-surface-muted hover:text-ink">
                      <X className="h-4 w-4" />
                      <span className="sr-only">Close</span>
                    </Dialog.Close>
                  </div>
                )}

                <div className="px-6 py-5">{children}</div>

                {footer && <div className="flex justify-end gap-2 border-t border-border px-6 py-4">{footer}</div>}
              </motion.div>
            </Dialog.Content>
          </Dialog.Portal>
        )}
      </AnimatePresence>
    </Dialog.Root>
  );
}
