"use client";

import * as React from "react";
import { Sidebar } from "./Sidebar";
import { Topbar } from "./Topbar";

export function DashboardLayout({ children }) {
  const [flyoutSignal, setFlyoutSignal] = React.useState(0);

  return (
    <div className="flex h-screen overflow-hidden bg-surface-canvas">
      <Sidebar flyoutSignal={flyoutSignal} />
      <div className="flex flex-1 flex-col overflow-hidden">
        <Topbar onToggleSidebar={() => setFlyoutSignal((s) => s + 1)} />
        <main className="scroll-thin min-w-0 flex-1 overflow-x-hidden overflow-y-auto p-4 sm:p-6">{children}</main>
      </div>
    </div>
  );
}
