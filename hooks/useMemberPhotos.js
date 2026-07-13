"use client";

import * as React from "react";
import { MEMBER_PHOTOS_MOCK, WITHOUT_PHOTO_MOCK } from "@/lib/mock/memberPhotosMock";

export function useMemberPhotos() {
  const [activeTab, setActiveTab] = React.useState("photos");
  const [viewMode, setViewMode] = React.useState("grid");
  const [sortOrder, setSortOrder] = React.useState("name_asc");
  const [search, setSearch] = React.useState("");
  const [page, setPage] = React.useState(1);

  const sourceList = activeTab === "without_photo" ? WITHOUT_PHOTO_MOCK : MEMBER_PHOTOS_MOCK;
  const pageSize = activeTab === "recently_added" ? 5 : 15; // matches "Showing 1 to 5 of 24" vs "1 to 15 of 986" 

  const totalCountByTab = {
    photos: 986,
    without_photo: 262,
    recently_added: 24,
    photo_updates: 986,
  };

  const filtered = React.useMemo(() => {
    let rows = sourceList;
    if (search.trim()) {
      const q = search.trim().toLowerCase();
      rows = rows.filter(
        (m) => m.full_name.toLowerCase().includes(q) || m.membership_number.toLowerCase().includes(q)
      );
    }
    return [...rows].sort((a, b) =>
      sortOrder === "name_desc" ? b.full_name.localeCompare(a.full_name) : a.full_name.localeCompare(b.full_name)
    );
  }, [sourceList, search, sortOrder]);

  const pageStart = (page - 1) * pageSize;
  const members = filtered.slice(pageStart, pageStart + pageSize);
  const totalCount = totalCountByTab[activeTab];

  const changeTab = (tab) => {
    setActiveTab(tab);
    setPage(1);
  };

  return {
    activeTab, changeTab, viewMode, setViewMode, sortOrder, setSortOrder,
    search, setSearch: (v) => { setPage(1); setSearch(v); },
    page, setPage, pageSize, totalCount, members,
  };
}
