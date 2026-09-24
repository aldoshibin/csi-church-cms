"use client";

import Link from "next/link";
import { Badge } from "@/components/ui/Badge";
import { Table } from "@/components/ui/Table";
import { formatDate } from "@/lib/utils";
import { BURIAL_STATUS_VARIANT } from "@/lib/mock/vmCemeteryMockData";

export function RecentBurialsTable({ records, isLoading }) {
  const columns = [
    { key: "recordNumber", header: "Record #", render: (r) => (
      <Link href={`/cemetery-management/burial-records/${r.id}`} className="font-medium text-interactive-600 hover:underline">
        {r.recordNumber}
      </Link>
    ) },
    { key: "deceasedName", header: "Deceased Name" },
    { key: "dateOfBurial", header: "Date of Burial", render: (r) => formatDate(r.dateOfBurial) },
    { key: "plotNumber", header: "Plot #" },
    { key: "status", header: "Status", render: (r) => <Badge variant={BURIAL_STATUS_VARIANT[r.status] ?? "default"}>{r.status}</Badge> },
  ];

  return (
    <div>
      <div className="mb-3 flex items-center justify-between">
        <h3 className="text-sm font-semibold text-ink">Recent Burials</h3>
        <Link href="/cemetery-management/burial-records" className="text-xs font-medium text-interactive-600 hover:underline">
          View all &rarr;
        </Link>
      </div>
      <Table columns={columns} data={records} isLoading={isLoading} emptyMessage="No burial records found." />
    </div>
  );
}
