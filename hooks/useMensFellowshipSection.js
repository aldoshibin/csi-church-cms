"use client";

import * as React from "react";

/**
 * Generic list-page hook shared by the simpler Men's Fellowship sections
 * (Fellowship Groups, Meetings, Activities, Bible Studies, Meeting Attendance).
 * Takes a mock array + a search predicate and returns paginated, filtered results.
 */
export function useMensFellowshipSection(mockData, searchFields = [], pageSize = 8) {
  const [items] = React.useState(mockData);
  const [search, setSearch] = React.useState("");
  const [page, setPage] = React.useState(1);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    const t = setTimeout(() => setIsLoading(false), 150);
    return () => clearTimeout(t);
  }, []);

  React.useEffect(() => {
    setPage(1);
  }, [search]);

  const filtered = React.useMemo(() => {
    if (!search) return items;
    const q = search.toLowerCase();
    return items.filter((item) => searchFields.some((field) => String(item[field] ?? "").toLowerCase().includes(q)));
  }, [items, search, searchFields]);

  const paged = React.useMemo(() => {
    const start = (page - 1) * pageSize;
    return filtered.slice(start, start + pageSize);
  }, [filtered, page, pageSize]);

  return { items: paged, totalCount: filtered.length, isLoading, search, setSearch, page, setPage, pageSize };
}
