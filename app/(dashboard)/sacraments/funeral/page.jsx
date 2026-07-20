"use client";

import { useRouter } from "next/navigation";
import { FileText, CalendarDays, Cross, Users, Building2, Search, Calendar, Plus, Download, ChevronDown, Filter, RotateCcw, Eye, MoreVertical, ChevronsLeft, ChevronLeft, ChevronRight, ChevronsRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { FormSelect } from "@/components/sacraments/confirmation/formFields";

const STATS = [
  { label: "Total Records", sub: "All Time", value: "128", icon: FileText, tint: "bg-success-50 text-success-600" },
  { label: "This Year", sub: "2025", value: "24", icon: CalendarDays, tint: "bg-interactive-50 text-interactive-600" },
  { label: "This Month", sub: "May 2025", value: "4", icon: Cross, tint: "bg-violet-50 text-violet-600" },
  { label: "Burial in Cemetery", sub: "All Time", value: "78", icon: Users, tint: "bg-orange-50 text-orange-600" },
  { label: "Cremation", sub: "All Time", value: "50", icon: Building2, tint: "bg-teal-50 text-teal-600" },
];

const ROWS = [
  { reg: "FR-2025-001", name: "Mr. Thomas Mathew", date: "20 May 2025", age: 72, place: "St. John's Church", sub: "Nagercoil", type: "Burial", burialDate: "22 May 2025", by: "Rev. Michael John" },
  { reg: "FR-2025-002", name: "Mrs. Mary Grace", date: "15 May 2025", age: 68, place: "St. John's Church", sub: "Nagercoil", type: "Burial", burialDate: "17 May 2025", by: "Rev. Michael John" },
  { reg: "FR-2025-003", name: "Mr. Joseph Daniel", date: "10 May 2025", age: 81, place: "St. Peter's Church", sub: "Colachel", type: "Cremation", burialDate: "11 May 2025", by: "Rev. John Samuel" },
  { reg: "FR-2025-004", name: "Mrs. Leelaamma Abraham", date: "05 May 2025", age: 75, place: "CSI Church", sub: "Parvathipuram", type: "Burial", burialDate: "07 May 2025", by: "Rev. Michael John" },
  { reg: "FR-2025-005", name: "Mr. Samuel Raj", date: "28 Apr 2025", age: 65, place: "St. John's Church", sub: "Nagercoil", type: "Burial", burialDate: "30 Apr 2025", by: "Rev. John Samuel" },
  { reg: "FR-2025-006", name: "Mrs. Anna Kutty", date: "20 Apr 2025", age: 70, place: "CSI Church", sub: "Thovalai", type: "Cremation", burialDate: "21 Apr 2025", by: "Rev. Michael John" },
  { reg: "FR-2025-007", name: "Mr. George Varghese", date: "12 Apr 2025", age: 63, place: "St. John's Church", sub: "Nagercoil", type: "Burial", burialDate: "14 Apr 2025", by: "Rev. John Samuel" },
  { reg: "FR-2025-008", name: "Mrs. Daisy Paul", date: "02 Apr 2025", age: 66, place: "St. Mary's Church", sub: "Chunkankadai", type: "Burial", burialDate: "04 Apr 2025", by: "Rev. Michael John" },
];
const TYPE_STYLE = {
  Burial: "bg-interactive-50 text-interactive-600",
  Cremation: "bg-warning-50 text-warning-600",
};

export default function FuneralRegisterPage() {
  const router = useRouter();

  return (
    <div>
      <div className="mb-1 flex flex-wrap items-start justify-between gap-3">
        <h1 className="text-xl font-bold text-ink">Funeral Register</h1>
        <div className="flex gap-2.5">
          <Button variant="primary" leftIcon={<Plus className="h-4 w-4" />} onClick={() => router.push("/sacraments/funeral/new")}>
            Add New Record
          </Button>
          <Button variant="secondary" leftIcon={<Download className="h-4 w-4" />} rightIcon={<ChevronDown className="h-3.5 w-3.5" />}>Export</Button>
        </div>
      </div>
      <p className="mb-5 text-sm">
        <span className="text-interactive-500">Sacramental Records</span>
        <span className="mx-1.5 text-ink-subtle">&gt;</span>
        <span className="font-semibold text-ink">Funeral Register</span>
      </p>

      <div className="mb-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {STATS.map((s) => (
          <div key={s.label} className="flex items-center gap-3 rounded-lg border border-border bg-white p-4 shadow-card">
            <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full ${s.tint}`}>
              <s.icon className="h-5 w-5" />
            </div>
            <div>
              <p className="text-xs text-ink-subtle">{s.label}</p>
              <p className="text-xl font-bold text-ink">{s.value}</p>
              <p className="text-xs text-ink-subtle">{s.sub}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mb-4 grid grid-cols-1 gap-4 rounded-lg border border-border bg-white p-4 shadow-card sm:grid-cols-2 lg:grid-cols-5">
        <Input label="Search" leftIcon={<Search className="h-4 w-4" />} placeholder="Search by name, register no., or place..." />
        <Input label="Date of Death" leftIcon={<Calendar className="h-4 w-4" />} placeholder="Select date range" />
        <FormSelect label="Place / Church"><option>All</option></FormSelect>
        <FormSelect label="Burial Type"><option>All</option><option>Burial</option><option>Cremation</option></FormSelect>
        <FormSelect label="Status"><option>All</option></FormSelect>
      </div>
      <div className="mb-4 flex justify-end gap-2.5">
        <Button variant="primary" leftIcon={<Filter className="h-3.5 w-3.5" />}>Filter</Button>
        <Button variant="secondary" leftIcon={<RotateCcw className="h-3.5 w-3.5" />}>Reset</Button>
      </div>

      <div className="overflow-hidden rounded-lg border border-border bg-white shadow-card">
        <div className="min-w-0 overflow-x-auto">
          <table className="w-full min-w-full text-left text-[13px]">
            <thead>
              <tr className="border-b border-border bg-surface-muted text-xs font-semibold text-ink-subtle">
                <th className="px-4 py-3">Register No.</th>
                <th className="px-2 py-3">Name of Deceased</th>
                <th className="px-2 py-3">Date of Death</th>
                <th className="px-2 py-3">Age</th>
                <th className="px-2 py-3">Place / Church</th>
                <th className="px-2 py-3">Burial Type</th>
                <th className="px-2 py-3">Burial Date</th>
                <th className="px-2 py-3">Officiated By</th>
                <th className="px-2 py-3">Actions</th>
              </tr>
            </thead>
            <tbody>
              {ROWS.map((r) => (
                <tr key={r.reg} className="border-b border-border last:border-0 hover:bg-surface-muted/60">
                  <td className="px-4 py-3 font-medium text-ink">{r.reg}</td>
                  <td className="px-2 py-3 font-semibold text-ink">{r.name}</td>
                  <td className="px-2 py-3 text-ink">{r.date}</td>
                  <td className="px-2 py-3 text-ink">{r.age}</td>
                  <td className="px-2 py-3">
                    <p className="text-ink">{r.place}</p>
                    <p className="text-xs text-ink-subtle">{r.sub}</p>
                  </td>
                  <td className="px-2 py-3">
                    <span className={`rounded-full px-2.5 py-0.5 text-xs font-semibold ${TYPE_STYLE[r.type]}`}>{r.type}</span>
                  </td>
                  <td className="px-2 py-3 text-ink">{r.burialDate}</td>
                  <td className="px-2 py-3 text-ink-subtle">{r.by}</td>
                  <td className="px-2 py-3">
                    <div className="flex items-center gap-1.5">
                      <Button variant="outline" size="icon" aria-label="View"><Eye className="h-3.5 w-3.5" /></Button>
                      <Button variant="secondary" size="icon" aria-label="More options"><MoreVertical className="h-3.5 w-3.5" /></Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="flex flex-wrap items-center justify-between gap-2 px-4 py-3">
          <div className="flex items-center gap-2">
            <p className="text-xs text-ink-subtle">Showing 1 to 8 of 128 entries</p>
          </div>
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
            <Button variant="secondary" size="icon" aria-label="Previous page"><ChevronLeft className="h-4 w-4" /></Button>
            {[1, 2, 3].map((n) => (
              <Button key={n} variant={n === 1 ? "primary" : "ghost"} size="sm" className="h-8 w-8 p-0">{n}</Button>
            ))}
            <span className="px-1 text-ink-subtle">...</span>
            <Button variant="ghost" size="sm" className="h-8 w-8 p-0">13</Button>
            <Button variant="secondary" size="icon" aria-label="Next page"><ChevronRight className="h-4 w-4" /></Button>
            <Button variant="secondary" size="icon" aria-label="Last page"><ChevronsRight className="h-4 w-4" /></Button>
          </div>
        </div>
      </div>
    </div>
  );
}
