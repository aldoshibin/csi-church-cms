"use client";

import * as React from "react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { Menu, Search, Bell, CalendarDays, LogOut, User, Settings as SettingsIcon } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import Link from "next/link";

/**
 * Top header bar — pixel-matched to the admin dashboard screenshot:
 * hamburger toggle, a single global search input, a calendar icon, a
 * notification bell with a red count badge, and a church/role text block
 * (not a personal avatar menu) on the far right.
 */
export function Topbar({ onToggleSidebar, notificationCount = 3 }) {
  const { user, logout } = useAuth();

  return (
    <header className="sticky top-0 z-30 flex h-16 items-center gap-4 border-b border-border bg-white px-4 sm:px-6">
      <button
        onClick={onToggleSidebar}
        className="rounded-md p-2 text-ink-muted hover:bg-surface-muted"
        aria-label="Toggle menu"
      >
        <Menu className="h-5 w-5" />
      </button>

      <div className="relative max-w-md flex-1">
        <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-subtle" />
        <input
          type="search"
          placeholder="Search families, members, records..."
          className="h-9 w-full rounded-md border border-border bg-surface-canvas pl-9 pr-3 text-sm text-ink placeholder:text-ink-subtle focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-interactive-500"
        />
      </div>

      <div className="ml-auto flex items-center gap-1.5">
        <button className="rounded-md p-2 text-ink-muted hover:bg-surface-muted" aria-label="Calendar">
          <CalendarDays className="h-5 w-5" />
        </button>

        <button className="relative rounded-md p-2 text-ink-muted hover:bg-surface-muted" aria-label="Notifications">
          <Bell className="h-5 w-5" />
          {notificationCount > 0 && (
            <span className="absolute right-1 top-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-danger-500 px-1 text-[10px] font-semibold text-white">
              {notificationCount}
            </span>
          )}
        </button>

        <DropdownMenu.Root>
          <DropdownMenu.Trigger asChild>
            <button className="ml-1 flex items-center gap-2 rounded-md px-2 py-1.5 hover:bg-surface-muted">
              <div className="hidden text-right sm:block">
                <p className="text-sm font-medium leading-tight text-ink">{user?.role === "PASTOR" ? "Parish Office" : user?.full_name}</p>
                <p className="text-xs leading-tight text-ink-subtle">St. John's Church</p>
              </div>
            </button>
          </DropdownMenu.Trigger>

          <DropdownMenu.Portal>
            <DropdownMenu.Content
              align="end"
              sideOffset={8}
              className="z-50 w-56 rounded-md border border-border bg-white p-1.5 shadow-elevated animate-fade-in"
            >
              <DropdownMenu.Item asChild>
                <Link href="/profile" className={menuItemClass}>
                  <User className="h-4 w-4" /> My Profile
                </Link>
              </DropdownMenu.Item>
              <DropdownMenu.Item asChild>
                <Link href="/settings" className={menuItemClass}>
                  <SettingsIcon className="h-4 w-4" /> Settings
                </Link>
              </DropdownMenu.Item>
              <DropdownMenu.Separator className="my-1 h-px bg-border" />
              <DropdownMenu.Item onSelect={logout} className={`${menuItemClass} text-danger-600`}>
                <LogOut className="h-4 w-4" /> Log out
              </DropdownMenu.Item>
            </DropdownMenu.Content>
          </DropdownMenu.Portal>
        </DropdownMenu.Root>
      </div>
    </header>
  );
}

const menuItemClass =
  "flex cursor-pointer items-center gap-2 rounded-sm px-2.5 py-2 text-sm text-ink outline-none hover:bg-surface-muted";
