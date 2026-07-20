"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Church, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { useAuth } from "@/contexts/AuthContext";
import { getVisibleNavItems } from "@/lib/navigation";
import { FaChurch } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";


const RAIL_WIDTH = 76;
const FULL_WIDTH = 280;


export function Sidebar({ sidebarOpen }) {
  const pathname = usePathname();
  const { user } = useAuth();
  const [expandedLabel, setExpandedLabel] = React.useState(null);

  const items = user ? getVisibleNavItems(user.role) : [];

  const isItemActive = (item) => {
    if (item.href) return pathname === item.href || pathname?.startsWith(`${item.href}/`);
    return item.children?.some((child) => pathname?.startsWith(child.href));
  };

  const activeParent = items.find((item) => item.children?.length && isItemActive(item));

  // Auto-expand whichever section you're currently browsing, once, the
  // first time the sidebar opens (or on initial load if already open).
  const didAutoExpand = React.useRef(false);
  React.useEffect(() => {
    if (sidebarOpen && !didAutoExpand.current) {
      didAutoExpand.current = true;
      setExpandedLabel(activeParent?.label ?? null);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sidebarOpen]);

  return (
    <motion.aside
      initial={false}
      animate={{ width: sidebarOpen ? FULL_WIDTH : RAIL_WIDTH }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className="relative z-30 flex h-full shrink-0 overflow-hidden bg-brand-700 text-white"
    >
      <div className="flex h-full flex-col" style={{ width: FULL_WIDTH }}>
        <div className={cn("flex h-16 shrink-0 items-center gap-3 border-b border-white/10", sidebarOpen ? "px-4" : "w-[76px] justify-center")}>
          <FaChurch className="h-10 w-10 shrink-0 text-white" />
          {sidebarOpen && (
            <div className="min-w-0 overflow-hidden">
              <p className="truncate text-[16px] font-semibold leading-tight">CSI St. John's Church</p>
              <p className="truncate text-xs text-white">Church Management System</p>
            </div>
          )}
        </div>

        <nav className={cn("scroll-thin flex-1 overflow-y-auto py-3", sidebarOpen ? "px-2.5" : "w-[76px] px-2")}>
          <div className="space-y-0.5">
            {items.map((item) => {
              const Icon = item.icon;
              const active = isItemActive(item);
              const hasChildren = !!item.children?.length;

              if (!sidebarOpen) {
                if (!hasChildren) {
                  return (
                    <Link
                      key={item.label}
                      href={item.href}
                      title={item.label}
                      className={cn(
                        "flex items-center justify-center rounded-sm p-3 transition-colors",
                        active ? "bg-[#009688]/50 text-white shadow-[inset_3px_0_0_#26A69A]" : "text-white/80 hover:bg-white/10 hover:text-white"
                      )}
                    >
                      <Icon className="h-[18px] w-[18px] shrink-0" />
                    </Link>
                  );
                }
                return (
                  <Link
                    key={item.label}
                    href={item.children[0].href}
                    title={item.label}
                    className={cn(
                      "flex items-center justify-center rounded-sm p-3 transition-colors",
                      active ? "bg-[#009688]/50 text-white shadow-[inset_3px_0_0_#26A69A]" : "text-white/80 hover:bg-white/10 hover:text-white"
                    )}
                  >
                    <Icon className="h-[18px] w-[18px] shrink-0" />
                  </Link>
                );
              }

              // sidebarOpen — full row with icon + label
              if (!hasChildren) {
                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    className={cn(
                      "flex items-center gap-3 rounded-sm px-2.5 py-2 text-sm font-medium transition-colors",
                      active ? "bg-[#009688]/50 text-white shadow-[inset_3px_0_0_#26A69A]" : "text-white/80 hover:bg-white/10 hover:text-white"
                    )}
                  >
                    <Icon className="h-[18px] w-[18px] shrink-0" />
                    <span className="truncate">{item.label}</span>
                  </Link>
                );
              }

              const isExpanded = expandedLabel === item.label;
              return (
                <div key={item.label}>
                  <button
                    type="button"
                    onClick={() => setExpandedLabel(isExpanded ? null : item.label)}
                    className={cn(
                      "flex w-full items-center gap-3 rounded-md px-3 py-2.5 text-left text-sm font-medium transition-colors",
                      active ? "bg-[#009688]/50 text-white shadow-[inset_3px_0_0_#26A69A]" : "text-white/80 hover:bg-white/10 hover:text-white"
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
                        <SubmenuList item={item} pathname={pathname} />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </nav>

        <div className="shrink-0 border-t border-white/10 p-2">
          <SidebarUserFooter sidebarOpen={sidebarOpen} />
        </div>
      </div>
    </motion.aside>
  );
}


// function SubmenuList({ item, pathname }) {
//   return (
//     <div className="space-y-0.5 py-1">
//       {item.children.map((child, childIndex) => {
//         const childActive = pathname === child.href || (childIndex > 0 && pathname?.startsWith(`${child.href}/`));
//         return (
//           <Link
//             key={child.href}
//             href={child.href}
//             className={cn(
//               "flex items-center justify-between gap-2 rounded-sm px-3.5 py-1 transition-colors text-xs",
//               childActive ? "bg-[#009688]/50 text-white shadow-[inset_3px_0_0_#26A69A]" : "text-white/70 hover:bg-white/10 hover:text-white"
//             )}
//           >
//             <span className="flex items-center gap-2 truncate">
//               <span className="text-white/50">–</span> {child.label}
//             </span>
//             {childActive && <span className="h-2 w-2 shrink-0 rounded-full bg-white" />}
//           </Link>
//         );
//       })}
//     </div>
//   );
// }
function SubmenuList({ item, pathname }) {
  return (
    <div className="relative space-y-1.5 py-2 pl-4">
      <div className="absolute bottom-2 left-[7px] top-2 w-px bg-white/20" />
      {item.children.map((child, childIndex) => {
        const childActive = pathname === child.href || (childIndex > 0 && pathname?.startsWith(`${child.href}/`));
        return (
          <Link
            key={child.href}
            href={child.href}
            className={cn(
              "relative flex items-center justify-between gap-2 rounded-sm px-3.5 py-1.5 text-xs transition-colors",
              childActive ? "bg-[#009688]/50 text-white shadow-[inset_3px_0_0_#26A69A]" : "text-white/70 hover:bg-white/10 hover:text-white"
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
/** Full name + role label + chevron when open; just the avatar circle
 * when closed to the icon rail. */
function SidebarUserFooter({ sidebarOpen }) {
  const { user } = useAuth();
  if (!user) return null;

  const roleLabel = FRIENDLY_ROLE_LABELS[user.role] ?? user.role;

  const avatar = user.avatar ? (
    <img src={user.avatar} alt={user.full_name} className="h-9 w-9 shrink-0 rounded-full object-cover" />
  ) : (
    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/15 text-sm font-semibold text-white">
      {user.full_name?.[0]?.toUpperCase() ?? "?"}
    </div>
  );

  if (!sidebarOpen) {
    return (
      <button className="flex w-full items-center justify-center rounded-md p-2 transition-colors hover:bg-white/10" title={`${user.full_name} — ${roleLabel}`}>
        {avatar}
      </button>
    );
  }

  return (
    <button className="flex w-full items-center gap-3 rounded-md px-2 py-2 text-left transition-colors hover:bg-white/10">
      {avatar}
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
