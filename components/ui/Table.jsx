"use client";

import * as React from "react";
import { ChevronLeft, ChevronRight, ChevronsUpDown, ChevronUp, ChevronDown, Inbox } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "./Button";
import { Skeleton } from "./Skeleton";


export function Table({
  columns,
  data = [],
  isLoading = false,
  emptyMessage = "No records found.",
  emptyDescription = "Once records are added, they'll show up here.",
  sortKey,
  sortDirection,
  onSortChange,
  pagination,
  onRowClick,
  selectable = false,
  selectedRows = [],
  onSelectionChange,
  getRowId = (row) => row.id,
  className,
}) {
  const allSelected = data.length > 0 && selectedRows.length === data.length;
  const someSelected = selectedRows.length > 0 && !allSelected;

  const toggleAll = () => {
    if (!onSelectionChange) return;
    onSelectionChange(allSelected ? [] : data.map(getRowId));
  };

  const toggleRow = (id) => {
    if (!onSelectionChange) return;
    onSelectionChange(
      selectedRows.includes(id) ? selectedRows.filter((rowId) => rowId !== id) : [...selectedRows, id]
    );
  };

  const handleSort = (column) => {
    if (!column.sortable || !onSortChange) return;
    const isSameKey = sortKey === column.key;
    onSortChange(column.key, isSameKey && sortDirection === "asc" ? "desc" : "asc");
  };

  return (
    <div className={cn("w-full overflow-hidden rounded-lg border border-border bg-white shadow-card", className)}>
      <div className="scroll-thin min-w-0 overflow-x-auto">
        <table className="w-full min-w-full text-left text-sm">
          <thead className="bg-surface-canvas text-xs uppercase tracking-wide text-ink-muted">
            <tr>
              {selectable && (
                <th className="w-10 px-4 py-3">
                  <input
                    type="checkbox"
                    checked={allSelected}
                    ref={(el) => el && (el.indeterminate = someSelected)}
                    onChange={toggleAll}
                    aria-label="Select all rows"
                    className="h-4 w-4 rounded border-border text-interactive-500 focus-visible:ring-interactive-500"
                  />
                </th>
              )}
              {columns.map((column) => (
                <th
                  key={column.key}
                  scope="col"
                  className={cn(
                    "whitespace-nowrap px-4 py-3 font-medium",
                    column.sortable && "cursor-pointer select-none hover:text-ink",
                    column.className
                  )}
                  onClick={() => handleSort(column)}
                >
                  <span className="inline-flex items-center gap-1">
                    {column.header}
                    {column.sortable && (
                      <SortIcon active={sortKey === column.key} direction={sortDirection} />
                    )}
                  </span>
                </th>
              ))}
            </tr>
          </thead>

          <tbody className="divide-y divide-border">
            {isLoading ? (
              <SkeletonRows columns={columns} selectable={selectable} />
            ) : data.length === 0 ? (
              <tr>
                <td colSpan={columns.length + (selectable ? 1 : 0)} className="px-4 py-16">
                  <EmptyState title={emptyMessage} description={emptyDescription} />
                </td>
              </tr>
            ) : (
              data.map((row) => {
                const rowId = getRowId(row);
                return (
                  <tr
                    key={rowId}
                    onClick={() => onRowClick?.(row)}
                    className={cn(
                      "transition-colors",
                      onRowClick && "cursor-pointer hover:bg-surface-canvas",
                      selectedRows.includes(rowId) && "bg-interactive-50"
                    )}
                  >
                    {selectable && (
                      <td className="px-4 py-3" onClick={(e) => e.stopPropagation()}>
                        <input
                          type="checkbox"
                          checked={selectedRows.includes(rowId)}
                          onChange={() => toggleRow(rowId)}
                          aria-label={`Select row ${rowId}`}
                          className="h-4 w-4 rounded border-border text-interactive-500 focus-visible:ring-interactive-500"
                        />
                      </td>
                    )}
                    {columns.map((column) => (
                      <td key={column.key} className={cn("px-4 py-3 text-ink", column.cellClassName)}>
                        {column.render ? column.render(row) : (row[column.key] ?? "—")}
                      </td>
                    ))}
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>

      {pagination && data.length > 0 && <TablePagination {...pagination} />}
    </div>
  );
}

function SortIcon({ active, direction }) {
  if (!active) return <ChevronsUpDown className="h-3.5 w-3.5 text-ink-subtle" />;
  return direction === "asc" ? (
    <ChevronUp className="h-3.5 w-3.5 text-interactive-500" />
  ) : (
    <ChevronDown className="h-3.5 w-3.5 text-interactive-500" />
  );
}

function SkeletonRows({ columns, selectable }) {
  return Array.from({ length: 6 }).map((_, rowIndex) => (
    <tr key={rowIndex}>
      {selectable && (
        <td className="px-4 py-3">
          <Skeleton className="h-4 w-4 rounded" />
        </td>
      )}
      {columns.map((column) => (
        <td key={column.key} className="px-4 py-3">
          <Skeleton className="h-4 w-full max-w-[160px]" />
        </td>
      ))}
    </tr>
  ));
}

function EmptyState({ title, description }) {
  return (
    <div className="flex flex-col items-center justify-center text-center">
      <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-surface-muted text-ink-subtle">
        <Inbox className="h-6 w-6" />
      </div>
      <p className="text-sm font-medium text-ink">{title}</p>
      <p className="mt-1 text-sm text-ink-subtle">{description}</p>
    </div>
  );
}

export function TablePagination({ page, pageSize, totalCount, onPageChange }) {
  const totalPages = Math.max(1, Math.ceil(totalCount / pageSize));
  const startItem = (page - 1) * pageSize + 1;
  const endItem = Math.min(page * pageSize, totalCount);

  return (
    <div className="flex flex-col items-center justify-between gap-3 border-t border-border px-4 py-3 sm:flex-row">
      <p className="text-sm text-ink-subtle">
        Showing <span className="font-medium text-ink">{startItem}</span>–
        <span className="font-medium text-ink">{endItem}</span> of{" "}
        <span className="font-medium text-ink">{totalCount}</span>
      </p>
      <div className="flex items-center gap-2">
        <Button
          variant="secondary"
          size="sm"
          onClick={() => onPageChange(page - 1)}
          disabled={page <= 1}
          leftIcon={<ChevronLeft className="h-4 w-4" />}
        >
          Previous
        </Button>
        <span className="text-sm text-ink-muted">
          Page {page} of {totalPages}
        </span>
        <Button
          variant="secondary"
          size="sm"
          onClick={() => onPageChange(page + 1)}
          disabled={page >= totalPages}
          rightIcon={<ChevronRight className="h-4 w-4" />}
        >
          Next
        </Button>
      </div>
    </div>
  );
}
