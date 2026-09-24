"use client";

import Link from "next/link";
import { Home, ChevronRight, Settings as SettingsIcon } from "lucide-react";
import { SettingsCategoryCard } from "@/components/settings/SettingsCategoryCard";
import { SETTINGS_CATEGORIES_MOCK } from "@/lib/mock/settingsMockData";

export function SettingsOverviewView() {
  return (
    <div className="flex flex-col gap-6">
      <nav className="flex items-center gap-1.5 text-sm text-ink-subtle">
        <Home className="h-3.5 w-3.5" />
        <Link href="/" className="hover:text-interactive-600">Home</Link>
        <ChevronRight className="h-3.5 w-3.5" />
        <span className="font-medium text-ink">Settings</span>
      </nav>

      <div className="flex items-start gap-4">
        <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-lg bg-[#DCFCE7] text-[#16A34A]">
          <SettingsIcon className="h-6 w-6" />
        </span>
        <div>
          <h1 className="text-2xl font-semibold text-ink">Settings</h1>
          <p className="mt-1 text-sm text-ink-subtle">Manage system configuration and preferences.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {SETTINGS_CATEGORIES_MOCK.map((category) => (
          <SettingsCategoryCard key={category.key} category={category} />
        ))}
      </div>
    </div>
  );
}
