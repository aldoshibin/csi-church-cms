"use client";

import Link from "next/link";
import { Plus, Search, Users } from "lucide-react";

import { Table } from "@/components/ui/Table";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { useFamilies } from "@/hooks/useFamilies";


export default function FamilyRegistrationPage() {
  const { families, totalCount, isLoading, page, pageSize, setPage, setSearch } = useFamilies();

  const columns = [
    { key: "family_code", header: "Code" },
    { key: "family_name", header: "Family Name" },
    { key: "head_of_family_name", header: "Head of Family", render: (row) => row.head_of_family_name || "—" },
    {
      key: "member_count",
      header: "Members",
      render: (row) => (
        <Badge variant="info">
          <Users className="h-3 w-3" /> {row.member_count}
        </Badge>
      ),
    },
    { key: "city", header: "City", render: (row) => row.city || "—" },
  ];

  return (
    <div className="space-y-5">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h1 className="font-display text-2xl font-bold text-ink">Family Registration</h1>
          <p className="mt-1 text-sm text-ink-subtle">{totalCount} registered families</p>
        </div>
        <Link href="/members/family-registration/add">
          <Button size="sm" leftIcon={<Plus className="h-4 w-4" />}>
            Add New Family
          </Button>
        </Link>
      </div>

      <div className="flex items-center gap-3 rounded-lg border border-border bg-white p-3 shadow-card">
        <div className="relative max-w-xs flex-1">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-subtle" />
          <input
            type="search"
            placeholder="Search families..."
            onChange={(e) => setSearch(e.target.value)}
            className="h-9 w-full rounded-md border border-border bg-surface-canvas pl-9 pr-3 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-interactive-500"
          />
        </div>
      </div>

      <Table
        columns={columns}
        data={families}
        isLoading={isLoading}
        emptyMessage="No families registered yet"
        emptyDescription="Click Add New Family to register the first household."
        pagination={{ page, pageSize, totalCount, onPageChange: setPage }}
      />
    </div>
  );
}
