"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Church } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { useAuth } from "@/contexts/AuthContext";
import { getVisibleNavItems } from "@/lib/navigation";

const FLYOUT_WIDTH = 220;


export function Sidebar({ sidebarOpen, setSidebarOpen }) {
  const pathname = usePathname();
  const { user } = useAuth();
  const [flyoutLabel, setFlyoutLabel] = React.useState(null);

  const items = user ? getVisibleNavItems(user.role) : [];

  const isItemActive = (item) => {
    if (item.href) return pathname === item.href || pathname?.startsWith(`${item.href}/`);
    return item.children?.some((child) => pathname?.startsWith(child.href));
  };

  const activeParent = items.find((item) => item.children?.length && isItemActive(item));

  // Sidebar just opened (hamburger click) → default the flyout to
  // whichever section is currently active, if any.
  const prevOpen = React.useRef(sidebarOpen);
  React.useEffect(() => {
    if (sidebarOpen && !prevOpen.current) {
      setFlyoutLabel(activeParent ? activeParent.label : null);
    }
    if (!sidebarOpen) {
      setFlyoutLabel(null);
    }
    prevOpen.current = sidebarOpen;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sidebarOpen]);

  // Close the flyout whenever navigation happens by any means other than
  // clicking the rail icon itself (a link elsewhere on the page, browser
  // back/forward, a typed URL) — otherwise a stale section's flyout can
  // stay open after navigating somewhere unrelated.
  React.useEffect(() => {
    setFlyoutLabel((prev) => {
      if (!prev) return prev;
      const openItem = items.find((i) => i.label === prev);
      const stillRelevant = openItem?.children?.some(
        (child) => pathname === child.href || pathname?.startsWith(`${child.href}/`)
      );
      return stillRelevant ? prev : null;
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  const openFlyoutItem = sidebarOpen ? items.find((item) => item.label === flyoutLabel) : null;

  const handleIconClick = (item) => {
    const isOpen = openFlyoutItem?.label === item.label;
    if (!sidebarOpen) {
      setSidebarOpen(true);
      setFlyoutLabel(item.label);
      return;
    }
    setFlyoutLabel(isOpen ? null : item.label);
  };

  return (
    <aside className="relative z-30 flex h-full shrink-0 bg-brand-700 text-white">
      {/* Icon rail — always visible, always icon-only */}
      <div className="flex h-full w-[76px] flex-col">
        <div className="flex h-16 shrink-0 items-center justify-center border-b border-white/10">
          <Church className="h-7 w-7 shrink-0 text-white" />
        </div>

        <nav className="scroll-thin flex-1 overflow-y-auto px-2 py-3">
          <div className="space-y-0.5">
            {items.map((item) => {
              const Icon = item.icon;
              const active = isItemActive(item);
              const hasChildren = !!item.children?.length;

              if (!hasChildren) {
                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={() => setFlyoutLabel(null)}
                    title={item.label}
                    className={cn(
                      "flex items-center justify-center rounded-xl p-3 transition-colors",
                      active ? "bg-white text-brand-700 shadow-sm" : "text-white/80 hover:bg-white/10 hover:text-white"
                    )}
                  >
                    <Icon className="h-[18px] w-[18px] shrink-0" />
                  </Link>
                );
              }

              const isOpen = openFlyoutItem?.label === item.label;
              return (
                <button
                  key={item.label}
                  type="button"
                  title={item.label}
                  onClick={() => handleIconClick(item)}
                  className={cn(
                    "flex w-full items-center justify-center rounded-xl p-3 transition-colors",
                    active
                      ? "bg-white text-brand-700 shadow-sm"
                      : isOpen
                      ? "bg-white/15 text-white ring-1 ring-inset ring-white/40"
                      : "text-white/80 hover:bg-white/10 hover:text-white"
                  )}
                >
                  <Icon className="h-[18px] w-[18px] shrink-0" />
                </button>
              );
            })}
          </div>
        </nav>

        <div className="shrink-0 border-t border-white/10 p-2">
          <SidebarUserFooter />
        </div>
      </div>

      {/* Flyout submenu — only ever rendered while sidebarOpen is true */}
      <AnimatePresence initial={false}>
        {openFlyoutItem && (
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: FLYOUT_WIDTH }}
            exit={{ opacity: 0, width: 0 }}
            transition={{ duration: 0.15 }}
            className="h-full overflow-hidden border-l border-white/10"
          >
            <div className="flex h-full w-[220px] flex-col">
              <div className="flex h-16 shrink-0 items-center px-4">
                <p className="truncate text-sm font-semibold text-white">{openFlyoutItem.label}</p>
              </div>
              <div className="scroll-thin flex-1 overflow-y-auto px-2 pb-3">
                <SubmenuList item={openFlyoutItem} pathname={pathname} onNavigate={() => setFlyoutLabel(null)} />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </aside>
  );
}


function SubmenuList({ item, pathname, onNavigate }) {
  return (
    <div className="space-y-0.5">
      {item.children.map((child, childIndex) => {
        const childActive = pathname === child.href || (childIndex > 0 && pathname?.startsWith(`${child.href}/`));
        return (
          <Link
            key={child.href}
            href={child.href}
            onClick={onNavigate}
            className={cn(
              "flex items-center justify-between gap-2 rounded-full px-3.5 py-2 text-sm transition-colors",
              childActive ? "bg-white/15 font-semibold text-white shadow-sm" : "text-white/70 hover:bg-white/10 hover:text-white"
            )}
          >
            <span className="flex items-center gap-2 truncate">
              <span className="text-white/50">–</span> {child.label}
            </span>
            {childActive && <span className="h-2 w-2 shrink-0 rounded-full bg-white" />}
          </Link>
        );
      })}
    </div>
  );
}


function SidebarUserFooter() {
  const { user } = useAuth();
  if (!user) return null;

  const roleLabel = FRIENDLY_ROLE_LABELS[user.role] ?? user.role;

  return (
    <button
      className="flex w-full items-center justify-center rounded-md p-2 transition-colors hover:bg-white/10"
      title={`${user.full_name} — ${roleLabel}`}
    >
      {user.avatar ? (
        <img src={user.avatar} alt={user.full_name} className="h-9 w-9 shrink-0 rounded-full object-cover" />
      ) : (
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/15 text-sm font-semibold text-white">
          {user.full_name?.[0]?.toUpperCase() ?? "?"}
        </div>
      )}
    </button>
  );
}

const FRIENDLY_ROLE_LABELS = {
  PASTOR: "Parish Priest",
  SUPER_ADMIN: "Super Admin",
  BISHOP: "Bishop",
  DIOCESE_ADMIN: "Diocese Admin",
  CHURCH_SECRETARY: "Church Secretary",
  TREASURER: "Treasurer",
  MINISTRY_LEADER: "Ministry Leader",
  MEMBER: "Member",
  VISITOR: "Visitor",
};
