"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Church, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { useAuth } from "@/contexts/AuthContext";
import { getVisibleNavItems } from "@/lib/navigation";

const RAIL_WIDTH = 76;
const FLYOUT_WIDTH = 220;
const FULL_WIDTH = 272;

export function Sidebar({ collapsed, mobileOpen, onCloseMobile }) {
  const pathname = usePathname();
  const { user } = useAuth();
  const [expandedLabel, setExpandedLabel] = React.useState(null);
  // Which parent's flyout is showing while the sidebar is collapsed to
  // an icon rail — defaults to whichever section is currently active,
  // but clicking a different icon-with-children previews that section
  // instead without navigating anywhere.
  const [flyoutLabel, setFlyoutLabel] = React.useState(null);

  const items = user ? getVisibleNavItems(user.role) : [];

  const isItemActive = (item) => {
    if (item.href) return pathname === item.href || pathname?.startsWith(`${item.href}/`);
    return item.children?.some((child) => pathname?.startsWith(child.href));
  };

  const activeParent = items.find((item) => item.children?.length && isItemActive(item));
  const openFlyoutItem = items.find((item) => item.label === (flyoutLabel ?? activeParent?.label));
  const showFlyout = collapsed && !!openFlyoutItem;

  return (
    <>
      {mobileOpen && (
        <div className="fixed inset-0 z-40 bg-ink/50 lg:hidden" onClick={onCloseMobile} aria-hidden="true" />
      )}

      <motion.aside
        initial={false}
        animate={{ width: collapsed ? RAIL_WIDTH + (showFlyout ? FLYOUT_WIDTH : 0) : FULL_WIDTH }}
        transition={{ duration: 0.2, ease: "easeOut" }}
        className={cn(
          "fixed inset-y-0 left-0 z-50 overflow-hidden bg-brand-700 text-white",
          "lg:relative lg:translate-x-0",
          mobileOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0",
          "transition-transform duration-200"
        )}
      >
        <div className="flex h-full">
          {/* Icon rail (collapsed) / full nav (expanded) */}
          <div className={cn("flex h-full flex-col", collapsed ? "w-[76px]" : "w-[272px]")}>
            <div className={cn("flex h-16 shrink-0 items-center gap-3 border-b border-white/10", collapsed ? "justify-center px-2" : "px-4")}>
              <Church className="h-7 w-7 shrink-0 text-white" />
              {!collapsed && (
                <div className="overflow-hidden">
                  <p className="truncate text-sm font-semibold leading-tight">CSI St. John's Church</p>
                  <p className="truncate text-xs text-white/60">Church Management System</p>
                </div>
              )}
            </div>

            <nav className={cn("scroll-thin flex-1 overflow-y-auto py-3", collapsed ? "px-2" : "px-2.5")}>
              <div className="space-y-0.5">
                {items.map((item) => {
                  const Icon = item.icon;
                  const active = isItemActive(item);
                  const hasChildren = !!item.children?.length;

                  if (collapsed) {
                    if (!hasChildren) {
                      return (
                        <Link
                          key={item.label}
                          href={item.href}
                          onClick={() => setFlyoutLabel(null)}
                          title={item.label}
                          className={cn(
                            "flex items-center justify-center rounded-md p-2.5 transition-colors",
                            active ? "bg-white text-brand-700" : "text-white/80 hover:bg-white/10 hover:text-white"
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
                        onClick={() => setFlyoutLabel(isOpen ? null : item.label)}
                        className={cn(
                          "flex w-full items-center justify-center rounded-md p-2.5 transition-colors",
                          active || isOpen ? "bg-white text-brand-700" : "text-white/80 hover:bg-white/10 hover:text-white"
                        )}
                      >
                        <Icon className="h-[18px] w-[18px] shrink-0" />
                      </button>
                    );
                  }

                  const isExpanded = expandedLabel === item.label;

                  if (!hasChildren) {
                    return (
                      <Link
                        key={item.label}
                        href={item.href}
                        onClick={onCloseMobile}
                        className={cn(
                          "flex items-center gap-3 rounded-md px-3 py-2.5 text-sm font-medium transition-colors",
                          active ? "bg-white text-brand-700" : "text-white/80 hover:bg-white/10 hover:text-white"
                        )}
                      >
                        <Icon className="h-[18px] w-[18px] shrink-0" />
                        <span className="truncate">{item.label}</span>
                      </Link>
                    );
                  }

                  return (
                    <div key={item.label}>
                      <button
                        type="button"
                        onClick={() => setExpandedLabel(isExpanded ? null : item.label)}
                        className={cn(
                          "flex w-full items-center gap-3 rounded-md px-3 py-2.5 text-left text-sm font-medium transition-colors",
                          active ? "bg-white text-brand-700" : "text-white/80 hover:bg-white/10 hover:text-white"
                        )}
                      >
                        <Icon className="h-[18px] w-[18px] shrink-0" />
                        <span className="flex-1 truncate">{item.label}</span>
                        <ChevronDown className={cn("h-3.5 w-3.5 shrink-0 transition-transform", isExpanded && "rotate-180")} />
                      </button>

                      <AnimatePresence initial={false}>
                        {isExpanded && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.18 }}
                            className="overflow-hidden"
                          >
                            <SubmenuList item={item} pathname={pathname} onNavigate={onCloseMobile} />
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </nav>

            {!collapsed && (
              <div className="shrink-0 border-t border-white/10 p-3">
                <SidebarUserFooter />
              </div>
            )}
          </div>

          {/* Flyout submenu — shown next to the icon rail while collapsed,
             matching the reference's dash-list + active-dot styling. */}
          {collapsed && (
            <AnimatePresence initial={false}>
              {showFlyout && (
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
                      <SubmenuList item={openFlyoutItem} pathname={pathname} onNavigate={onCloseMobile} dashStyle />
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          )}
        </div>
      </motion.aside>
    </>
  );
}


function SubmenuList({ item, pathname, onNavigate, dashStyle = false }) {
  return (
    <div className={dashStyle ? "space-y-0.5" : "ml-[27px] space-y-0.5 border-l border-white/10 py-1 pl-3"}>
      {item.children.map((child, childIndex) => {
        const childActive = pathname === child.href || (childIndex > 0 && pathname?.startsWith(`${child.href}/`));
        if (dashStyle) {
          return (
            <Link
              key={child.href}
              href={child.href}
              onClick={onNavigate}
              className={cn(
                "flex items-center justify-between gap-2 rounded-md px-3 py-2 text-sm transition-colors",
                childActive ? "bg-white/15 font-semibold text-white" : "text-white/70 hover:bg-white/10 hover:text-white"
              )}
            >
              <span className="flex items-center gap-2 truncate">
                <span className="text-white/50">–</span> {child.label}
              </span>
              {childActive && <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-white" />}
            </Link>
          );
        }
        return (
          <Link
            key={child.href}
            href={child.href}
            onClick={onNavigate}
            className={cn(
              "block rounded-md px-3 py-1.5 text-sm transition-colors",
              childActive ? "text-white font-semibold" : "text-white/60 hover:text-white"
            )}
          >
            {child.label}
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
    <button className="flex w-full items-center gap-3 rounded-md px-2 py-2 text-left transition-colors hover:bg-white/10">
      {user.avatar ? (
        <img src={user.avatar} alt={user.full_name} className="h-9 w-9 shrink-0 rounded-full object-cover" />
      ) : (
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/15 text-sm font-semibold text-white">
          {user.full_name?.[0]?.toUpperCase() ?? "?"}
        </div>
      )}
      <div className="min-w-0 flex-1">
        <p className="truncate text-sm font-semibold text-white">{user.full_name}</p>
        <p className="truncate text-xs text-white/60">{roleLabel}</p>
      </div>
      <ChevronDown className="h-4 w-4 shrink-0 text-white/50" />
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
