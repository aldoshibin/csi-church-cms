"use client";

import { useRouter } from "next/navigation";
import { Trophy, Users, CalendarDays, Cross, Calendar, Search, Plus, Download, RotateCcw, Filter, Eye, Pencil, Trash2, ChevronLeft, ChevronRight, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { FormSelect } from "@/components/sacraments/confirmation/formFields";

const STATS = [
  { label: "Total Communicants", sub: "All Time", value: "256", icon: Trophy, tint: "bg-success-50 text-success-600" },
  { label: "This Year", sub: "Year 2025", value: "28", icon: Users, tint: "bg-interactive-50 text-interactive-600" },
  { label: "This Month", sub: "May 2025", value: "5", icon: CalendarDays, tint: "bg-violet-50 text-violet-600" },
  { label: "Upcoming Celebration", sub: "Next Holy Communion", value: "01 Jun 2025", icon: Cross, tint: "bg-warning-50 text-warning-600" },
];

const ROWS = [
  { name: "Alex Thomas", age: 14 }, { name: "Anna Maria Joseph", age: 13 }, { name: "Ben Mathew", age: 14 },
  { name: "Catherine Rose", age: 13 }, { name: "Daniel Paul", age: 14 }, { name: "Eliza James", age: 13 },
  { name: "George Varghese", age: 14 }, { name: "Hannah Grace", age: 13 }, { name: "Johan Mathew", age: 14 },
  { name: "Maria Teresa", age: 13 },
].map((r, i) => ({
  ...r, idx: i + 1, date: "15 May 2025", batch: "Batch 2025", type: "First Holy Communion",
  place: "St. John's Church", by: "Rev. Michael John",
}));

export default function HolyCommunionRegisterPage() {
  const router = useRouter();

  return (
    <div>
      <div className="mb-1 flex flex-wrap items-start justify-between gap-3">
        <h1 className="text-xl font-bold text-ink">Holy Communion Register</h1>
        <div className="flex gap-2.5">
          <Button variant="primary" leftIcon={<Plus className="h-4 w-4" />} onClick={() => router.push("/sacraments/holy-communion/new")}>
            Add New Record
          </Button>
          <Button variant="secondary" leftIcon={<Download className="h-4 w-4" />}>Export</Button>
        </div>
      </div>
      <p className="mb-5 text-sm">
        <span className="text-interactive-500">Sacramental Records</span>
        <span className="mx-1.5 text-ink-subtle">&gt;</span>
        <span className="font-semibold text-ink">Holy Communion Register</span>
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
              <p className="text-xs text-ink-subtle">{s.sub}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mb-4 grid grid-cols-1 gap-4 rounded-lg border border-border bg-white p-4 shadow-card sm:grid-cols-2 lg:grid-cols-5">
        <Input label="Select Date" leftIcon={<Calendar className="h-4 w-4" />} defaultValue="01 Jan 2025 - 31 Dec 2025" />
        <FormSelect label="Celebration Type"><option>All</option><option>First Holy Communion</option><option>Renewal</option></FormSelect>
        <FormSelect label="Class / Batch"><option>All</option><option>Batch 2025</option></FormSelect>
        <FormSelect label="Age Group"><option>All</option></FormSelect>
        <Input label="Search" leftIcon={<Search className="h-4 w-4" />} placeholder="Search by name, batch, date..." />
      </div>
      <div className="mb-4 flex justify-end gap-2.5">
        <Button variant="secondary" leftIcon={<RotateCcw className="h-3.5 w-3.5" />}>Reset</Button>
        <Button variant="primary" leftIcon={<Filter className="h-3.5 w-3.5" />}>Filter</Button>
      </div>

      <div className="overflow-hidden rounded-lg border border-border bg-white shadow-card">
        <div className="min-w-0 overflow-x-auto">
          <table className="w-full min-w-full text-left text-[13px]">
            <thead>
              <tr className="border-b border-border bg-surface-muted text-xs font-semibold text-ink-subtle">
                <th className="px-4 py-3">#</th>
                <th className="px-2 py-3">Communicant Name</th>
                <th className="px-2 py-3">Date of Communion</th>
                <th className="px-2 py-3">Age</th>
                <th className="px-2 py-3">Class / Batch</th>
                <th className="px-2 py-3">Celebration Type</th>
                <th className="px-2 py-3">Place / Venue</th>
                <th className="px-2 py-3">Recorded By</th>
                <th className="px-2 py-3">Action</th>
              </tr>
            </thead>
            <tbody>
              {ROWS.map((r) => (
                <tr key={r.idx} className="border-b border-border last:border-0 hover:bg-surface-muted/60">
                  <td className="px-4 py-3 text-ink-subtle">{r.idx}</td>
                  <td className="px-2 py-3 font-semibold text-ink">{r.name}</td>
                  <td className="px-2 py-3 text-ink">{r.date}</td>
                  <td className="px-2 py-3 text-ink">{r.age}</td>
                  <td className="px-2 py-3">
                    <span className="rounded-md bg-success-50 px-2 py-0.5 text-xs font-semibold text-success-600">{r.batch}</span>
                  </td>
                  <td className="px-2 py-3">
                    <span className="rounded-md bg-interactive-50 px-2 py-0.5 text-xs font-semibold text-interactive-600">{r.type}</span>
                  </td>
                  <td className="px-2 py-3 text-ink-subtle">{r.place}</td>
                  <td className="px-2 py-3 text-ink-subtle">{r.by}</td>
                  <td className="px-2 py-3">
                    <div className="flex items-center gap-1.5">
                      <Button variant="outline" size="icon" aria-label="View"><Eye className="h-3.5 w-3.5" /></Button>
                      <Button variant="outline" size="icon" aria-label="Edit"><Pencil className="h-3.5 w-3.5" /></Button>
                      <Button variant="danger" size="icon" aria-label="Delete"><Trash2 className="h-3.5 w-3.5" /></Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="flex flex-wrap items-center justify-between gap-2 px-4 py-3">
          <p className="text-xs text-ink-subtle">Showing 1 to 10 of 28 records</p>
          <div className="flex items-center gap-1.5">
            <Button variant="secondary" size="icon" aria-label="Previous page"><ChevronLeft className="h-4 w-4" /></Button>
            {[1, 2, 3].map((n) => (
              <Button key={n} variant={n === 1 ? "primary" : "ghost"} size="sm" className="h-8 w-8 p-0">{n}</Button>
            ))}
            <Button variant="secondary" size="icon" aria-label="Next page"><ChevronRight className="h-4 w-4" /></Button>
            <span className="ml-2 text-xs text-ink-subtle">Rows per page</span>
            <select
              aria-label="Rows per page"
              className="h-8 rounded-md border border-border px-2 text-xs text-ink focus:border-interactive-500 focus:outline-none"
              defaultValue="10"
            >
              <option value="10">10</option>
              <option value="25">25</option>
              <option value="50">50</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}
