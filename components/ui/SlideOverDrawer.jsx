"use client";

import * as React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

/**
 * A right-anchored slide-over panel, full viewport height.
 * Used for "quick view" detail screens (e.g. Service Details) that are
 * richer than a modal but don't warrant leaving the list page.
 */
export function SlideOverDrawer({ open, onOpenChange, title, width = "640px", children }) {
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
                className={cn("fixed right-0 top-0 z-50 flex h-full flex-col bg-white shadow-elevated", "w-[94vw]")}
                style={{ maxWidth: width }}
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ duration: 0.22, ease: "easeOut" }}
              >
                <div className="flex items-center justify-between border-b border-border px-6 py-4">
                  <Dialog.Title className="text-lg font-bold text-ink">{title}</Dialog.Title>
                  <Dialog.Close className="rounded-md p-1 text-ink-subtle transition-colors hover:bg-surface-muted hover:text-ink">
                    <X className="h-5 w-5" />
                    <span className="sr-only">Close</span>
                  </Dialog.Close>
                </div>
                <div className="flex-1 overflow-y-auto px-6 py-5">{children}</div>
              </motion.div>
            </Dialog.Content>
          </Dialog.Portal>
        )}
      </AnimatePresence>
    </Dialog.Root>
  );
}
