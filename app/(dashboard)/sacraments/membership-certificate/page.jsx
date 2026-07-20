"use client";

import { useRouter } from "next/navigation";
import { User, CalendarDays, Coins, FileText, Search, Plus, Eye, Download, Pencil, MoreVertical, ChevronsLeft, ChevronsRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { FormSelect } from "@/components/sacraments/confirmation/formFields";

const STATS = [
  { label: "Total Certificates", value: "428", icon: User, tint: "bg-violet-50 text-violet-600" },
  { label: "This Month", value: "26", icon: CalendarDays, tint: "bg-interactive-50 text-interactive-600" },
  { label: "Pending Requests", value: "8", icon: Coins, tint: "bg-warning-50 text-warning-600" },
  { label: "Issued This Month", value: "18", icon: FileText, tint: "bg-success-50 text-success-600" },
];

const ROWS = [
  { cert: "MC-2025-0428", name: "Thomas Mathew", id: "MEM-000125", type: "Membership Certificate", date: "20 May 2025", by: "Rev. Michael John", status: "Issued" },
  { cert: "MC-2025-0427", name: "Mary Joseph", id: "MEM-000126", type: "Membership Certificate", date: "19 May 2025", by: "Rev. Michael John", status: "Issued" },
  { cert: "MC-2025-0426", name: "John Varghese", id: "MEM-000127", type: "Letter for Bank Purpose", date: "19 May 2025", by: "Parish Office", status: "Issued" },
  { cert: "MC-2025-0425", name: "Annie Thomas", id: "MEM-000128", type: "Membership Certificate", date: "18 May 2025", by: "Parish Office", status: "Pending" },
  { cert: "MC-2025-0424", name: "George Mathew", id: "MEM-000129", type: "Letter for Overseas", date: "18 May 2025", by: "Rev. Michael John", status: "Pending" },
  { cert: "MC-2025-0423", name: "Sophy Abraham", id: "MEM-000130", type: "Membership Certificate", date: "17 May 2025", by: "Parish Office", status: "Issued" },
  { cert: "MC-2025-0422", name: "Daniel Samuel", id: "MEM-000131", type: "Letter for Educational Purpose", date: "17 May 2025", by: "Parish Office", status: "Issued" },
  { cert: "MC-2025-0421", name: "Biju Philip", id: "MEM-000132", type: "Membership Certificate", date: "16 May 2025", by: "Rev. Michael John", status: "Rejected" },
  { cert: "MC-2025-0420", name: "Lissy Mathew", id: "MEM-000133", type: "Membership Certificate", date: "16 May 2025", by: "Parish Office", status: "Issued" },
  { cert: "MC-2025-0419", name: "Shaji Thomas", id: "MEM-000134", type: "Letter for Bank Purpose", date: "15 May 2025", by: "Rev. Michael John", status: "Issued" },
];
const STATUS_STYLE = {
  Issued: "bg-success-50 text-success-600",
  Pending: "bg-warning-50 text-warning-600",
  Rejected: "bg-danger-50 text-danger-600",
};

export default function MembershipCertificatePage() {
  const router = useRouter();

  return (
    <div>
      <div className="mb-1 flex flex-wrap items-start justify-between gap-3">
        <h1 className="text-xl font-bold text-ink">Membership Certificate</h1>
        <Button variant="primary" leftIcon={<Plus className="h-4 w-4" />} onClick={() => router.push("/sacraments/membership-certificate/new")}>
          New Certificate
        </Button>
      </div>
      <p className="mb-5 text-sm">
        <span className="text-interactive-500">Sacramental Records</span>
        <span className="mx-1.5 text-ink-subtle">&gt;</span>
        <span className="font-semibold text-ink">Membership Certificate</span>
      </p>

      <div className="mb-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {STATS.map((s) => (
          <div key={s.label} className="flex items-center gap-3 rounded-lg border border-border bg-white p-4 shadow-card">
            <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full ${s.tint}`}>
              <s.icon className="h-5 w-5" />
            </div>
            <div>
              <p className="text-xs text-ink-subtle">{s.label}</p>
              <p className="text-xl font-bold text-ink">{s.value}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mb-4 grid grid-cols-1 gap-4 rounded-lg border border-border bg-white p-4 shadow-card sm:grid-cols-2 lg:grid-cols-5">
        <Input label="Search Member" leftIcon={<Search className="h-4 w-4" />} placeholder="Search by name or member ID..." />
        <Input label="Certificate No." placeholder="Enter certificate no." />
        <FormSelect label="Certificate Type"><option>All Types</option><option>Membership Certificate</option><option>Letter for Bank Purpose</option><option>Letter for Overseas</option><option>Letter for Educational Purpose</option></FormSelect>
        <FormSelect label="Status"><option>All Status</option><option>Issued</option><option>Pending</option><option>Rejected</option></FormSelect>
        <Input label="Date Range" placeholder="Select date range" />
      </div>
      <div className="mb-4 flex justify-end gap-2.5">
        <Button variant="secondary">Reset</Button>
        <Button variant="primary">Apply Filter</Button>
      </div>

      <div className="overflow-hidden rounded-lg border border-border bg-white shadow-card">
        <div className="min-w-0 overflow-x-auto">
          <table className="w-full min-w-full text-left text-[13px]">
            <thead>
              <tr className="border-b border-border bg-surface-muted text-xs font-semibold text-ink-subtle">
                <th className="px-4 py-3">Certificate No.</th>
                <th className="px-2 py-3">Member Name</th>
                <th className="px-2 py-3">Member ID</th>
                <th className="px-2 py-3">Certificate Type</th>
                <th className="px-2 py-3">Issued Date</th>
                <th className="px-2 py-3">Requested By</th>
                <th className="px-2 py-3">Status</th>
                <th className="px-2 py-3">Actions</th>
              </tr>
            </thead>
            <tbody>
              {ROWS.map((r) => (
                <tr key={r.cert} className="border-b border-border last:border-0 hover:bg-surface-muted/60">
                  <td className="px-4 py-3 font-medium text-interactive-600">{r.cert}</td>
                  <td className="px-2 py-3 font-semibold text-ink">{r.name}</td>
                  <td className="px-2 py-3 text-ink-subtle">{r.id}</td>
                  <td className="px-2 py-3 text-ink">{r.type}</td>
                  <td className="px-2 py-3 text-ink">{r.date}</td>
                  <td className="px-2 py-3 text-ink-subtle">{r.by}</td>
                  <td className="px-2 py-3">
                    <span className={`rounded-full px-2.5 py-0.5 text-xs font-semibold ${STATUS_STYLE[r.status]}`}>{r.status}</span>
                  </td>
                  <td className="px-2 py-3">
                    <div className="flex items-center gap-1.5">
                      <Button variant="outline" size="icon" aria-label="View"><Eye className="h-3.5 w-3.5" /></Button>
                      {r.status === "Issued" && <Button variant="outline" size="icon" aria-label="Download"><Download className="h-3.5 w-3.5" /></Button>}
                      {r.status === "Pending" && <Button variant="outline" size="icon" aria-label="Edit"><Pencil className="h-3.5 w-3.5" /></Button>}
                      <Button variant="secondary" size="icon" aria-label="More options"><MoreVertical className="h-3.5 w-3.5" /></Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="flex flex-wrap items-center justify-between gap-2 px-4 py-3">
          <p className="text-xs text-ink-subtle">Showing 1 to 10 of 428 entries</p>
          <div className="flex items-center gap-1.5">
            <select
              aria-label="Rows per page"
              className="h-8 rounded-md border border-border px-2 text-xs text-ink focus:border-interactive-500 focus:outline-none"
              defaultValue="10"
            >
              <option value="10">10 per page</option>
              <option value="25">25 per page</option>
              <option value="50">50 per page</option>
            </select>
            <Button variant="secondary" size="icon" aria-label="First page"><ChevronsLeft className="h-4 w-4" /></Button>
            {[1, 2, 3, 4, 5].map((n) => (
              <Button key={n} variant={n === 1 ? "primary" : "ghost"} size="sm" className="h-8 w-8 p-0">{n}</Button>
            ))}
            <Button variant="secondary" size="icon" aria-label="Last page"><ChevronsRight className="h-4 w-4" /></Button>
          </div>
        </div>
      </div>
    </div>
  );
}
