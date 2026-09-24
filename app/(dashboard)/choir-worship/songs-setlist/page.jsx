"use client";

import { useState } from "react";
import Link from "next/link";
import { Plus, Download, ChevronDown } from "lucide-react";

import { useSongsList } from "@/hooks/useSongsList";
import { useSongDetail } from "@/hooks/useSongDetail";
import { Button } from "@/components/ui/Button";
import { SongsTable } from "@/components/choir-worship/songs/SongsTable";
import { SongsQuickActions } from "@/components/choir-worship/songs/SongsQuickActions";
import { SongDetailsDrawer } from "@/components/choir-worship/songs/detail/SongDetailsDrawer";

export default function SongsSetlistPage() {
  const {
    songs, totalCount, isLoading, activeTab, setActiveTab,
    search, setSearch, categoryFilter, setCategoryFilter, languageFilter, setLanguageFilter, statusFilter, setStatusFilter,
    page, setPage, pageSize, refetch,
  } = useSongsList();

  const [activeSongId, setActiveSongId] = useState(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const { song, isLoading: isSongLoading } = useSongDetail(drawerOpen ? activeSongId : null);

  const openDetails = (row) => {
    setActiveSongId(row.id);
    setDrawerOpen(true);
  };

  return (
    <div className="space-y-5 pb-10">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <h1 className="font-display text-2xl font-bold text-ink">Songs &amp; Setlist</h1>
          <p className="mt-1 text-sm text-ink-subtle">Manage church songs, song categories and worship setlists.</p>
        </div>
        <div className="flex items-center gap-2">
          <Button type="button" variant="secondary" leftIcon={<Download className="h-4 w-4" />} rightIcon={<ChevronDown className="h-4 w-4 opacity-70" />}>
            Export
          </Button>
          <Link href="/choir-worship/songs-setlist/add">
            <Button type="button" leftIcon={<Plus className="h-4 w-4" />} rightIcon={<ChevronDown className="h-4 w-4 opacity-70" />}>
              Add Song
            </Button>
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 xl:grid-cols-4">
        <div className="xl:col-span-3">
          <SongsTable
            songs={songs}
            isLoading={isLoading}
            pagination={{ page, pageSize, totalCount, onPageChange: setPage }}
            activeTab={activeTab} onTabChange={setActiveTab}
            search={search} onSearchChange={setSearch}
            categoryFilter={categoryFilter} onCategoryFilterChange={setCategoryFilter}
            languageFilter={languageFilter} onLanguageFilterChange={setLanguageFilter}
            statusFilter={statusFilter} onStatusFilterChange={setStatusFilter}
            onRefresh={refetch}
            onViewDetails={openDetails}
            onEdit={(row) => console.log("Edit", row.id)}
            onDeactivate={(row) => console.log("Deactivate", row.id)}
            onDelete={(row) => console.log("Delete", row.id)}
          />
        </div>

        <div className="flex flex-col gap-5">
          <SongsQuickActions />
        </div>
      </div>

      <SongDetailsDrawer
        open={drawerOpen}
        onOpenChange={setDrawerOpen}
        song={song}
        isLoading={isSongLoading}
        onEdit={() => console.log("Edit", activeSongId)}
        onDeactivate={() => console.log("Deactivate", activeSongId)}
      />
    </div>
  );
}
