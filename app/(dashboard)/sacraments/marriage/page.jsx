"use client";

import { useRouter } from "next/navigation";
import { Users, CalendarDays, Church, UsersRound, Search, Calendar, Plus, Filter, RotateCcw, Download, ChevronDown, Eye, MoreVertical, ChevronLeft, ChevronRight, Lightbulb } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { FormSelect } from "@/components/sacraments/confirmation/formFields";

const STATS = [
  { label: "Total Marriages", sub: "All Time", value: "128", icon: Users, tint: "bg-success-50 text-success-600" },
  { label: "This Year", sub: "Year 2025", value: "12", icon: CalendarDays, tint: "bg-success-50 text-success-600" },
  { label: "This Month", sub: "May 2025", value: "2", icon: Church, tint: "bg-success-50 text-success-600" },
  { label: "Upcoming (Next 30 Days)", sub: "Next 30 Days", value: "3", icon: UsersRound, tint: "bg-success-50 text-success-600" },
];

const ROWS = [
  { reg: "MR-2025-001", date: "24 May 2025", time: "10:30 AM", groom: "Alex Thomas", groomChurch: "St. John's Church, Nagercoil", bride: "Mariya Grace", brideChurch: "CSI Christ Church, Kanyakumari", place: "St. John's Church, Nagercoil", by: "Rev. Michael John", status: "Completed" },
  { reg: "MR-2025-002", date: "18 May 2025", time: "02:00 PM", groom: "John Daniel", groomChurch: "St. Peter's Church, Marthandam", bride: "Ancy Binu", brideChurch: "St. John's Church, Nagercoil", place: "St. John's Church, Nagercoil", by: "Rev. Sam George", status: "Completed" },
  { reg: "MR-2025-003", date: "10 May 2025", time: "11:00 AM", groom: "Sanjay Kumar", groomChurch: "CSI Immanuel Church, Trivandrum", bride: "Delina Rose", brideChurch: "St. Paul's Church, Trivandrum", place: "CSI Immanuel Church, Trivandrum", by: "Rev. Joseph Martin", status: "Completed" },
  { reg: "MR-2025-004", date: "02 Jun 2025", time: "10:30 AM", groom: "Vijay Nathan", groomChurch: "St. John's Church, Nagercoil", bride: "Stephy Anna", brideChurch: "CSI Christ Church, Kanyakumari", place: "St. John's Church, Nagercoil", by: "Rev. Michael John", status: "Scheduled" },
  { reg: "MR-2025-005", date: "08 Jun 2025", time: "03:00 PM", groom: "Paul Varghese", groomChurch: "St. George's Church, Chunkankadai", bride: "Linda Mary", brideChurch: "St. John's Church, Nagercoil", place: "St. George's Church, Chunkankadai", by: "Rev. Sam George", status: "Scheduled" },
  { reg: "MR-2025-005", date: "15 Jun 2025", time: "11:00 AM", groom: "Tobin Mathew", groomChurch: "CSI Christ Church, Kanyakumari", bride: "Riya Susan", brideChurch: "St. Paul's Church, Trivandrum", place: "CSI Christ Church, Kanyakumari", by: "Rev. Joseph Martin", status: "Pending" },
];
const STATUS_STYLE = {
  Completed: "bg-success-50 text-success-600 border-success-500/20",
  Scheduled: "bg-interactive-50 text-interactive-600 border-interactive-500/20",
  Pending: "bg-warning-50 text-warning-600 border-warning-500/20",
};

export default function MarriageRegisterPage() {
  const router = useRouter();

  return (
    <div>
      <div className="mb-1 flex flex-wrap items-start justify-between gap-3">
        <div>
          <h1 className="text-xl font-bold text-ink">Marriage Register</h1>
          <p className="text-sm text-ink-subtle">Manage and maintain all marriage records of the parish.</p>
        </div>
        <Button variant="primary" leftIcon={<Plus className="h-4 w-4" />} onClick={() => router.push("/sacraments/marriage/new")}>
          Add New Record
        </Button>
      </div>

      <div className="mb-4 mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
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
        <Input label="Search" leftIcon={<Search className="h-4 w-4" />} placeholder="Search by names, register no., place..." />
        <Input label="From Date" leftIcon={<Calendar className="h-4 w-4" />} placeholder="DD MMM YYYY" />
        <Input label="To Date" leftIcon={<Calendar className="h-4 w-4" />} placeholder="DD MMM YYYY" />
        <FormSelect label="Place / Church"><option value="">Select place / church</option></FormSelect>
        <FormSelect label="Status"><option value="">Select status</option><option>Completed</option><option>Scheduled</option><option>Pending</option></FormSelect>
      </div>
      <div className="mb-4 flex justify-end gap-2.5">
        <Button variant="primary" leftIcon={<Filter className="h-3.5 w-3.5" />}>Filter</Button>
        <Button variant="secondary" leftIcon={<RotateCcw className="h-3.5 w-3.5" />}>Reset</Button>
      </div>
      <div className="mb-4 flex justify-end">
        <Button variant="secondary" leftIcon={<Download className="h-4 w-4" />} rightIcon={<ChevronDown className="h-3.5 w-3.5" />}>Export</Button>
      </div>

      <div className="overflow-hidden rounded-lg border border-border bg-white shadow-card">
        <div className="min-w-0 overflow-x-auto">
          <table className="w-full min-w-full text-left text-[13px]">
            <thead>
              <tr className="border-b border-border bg-surface-muted text-xs font-semibold text-ink-subtle">
                <th className="px-4 py-3">Register No.</th>
                <th className="px-2 py-3">Date of Marriage</th>
                <th className="px-2 py-3">Groom</th>
                <th className="px-2 py-3">Bride</th>
                <th className="px-2 py-3">Place / Church</th>
                <th className="px-2 py-3">Officiated By</th>
                <th className="px-2 py-3">Status</th>
                <th className="px-2 py-3">Actions</th>
              </tr>
            </thead>
            <tbody>
              {ROWS.map((r, i) => (
                <tr key={i} className="border-b border-border last:border-0 hover:bg-surface-muted/60">
                  <td className="px-4 py-3 font-medium text-ink">{r.reg}</td>
                  <td className="px-2 py-3">
                    <p className="text-ink">{r.date}</p>
                    <p className="text-xs text-ink-subtle">{r.time}</p>
                  </td>
                  <td className="px-2 py-3">
                    <p className="font-semibold text-ink">{r.groom}</p>
                    <p className="text-xs text-ink-subtle">{r.groomChurch}</p>
                  </td>
                  <td className="px-2 py-3">
                    <p className="font-semibold text-ink">{r.bride}</p>
                    <p className="text-xs text-ink-subtle">{r.brideChurch}</p>
                  </td>
                  <td className="px-2 py-3 text-ink-subtle">{r.place}</td>
                  <td className="px-2 py-3 text-ink-subtle">{r.by}</td>
                  <td className="px-2 py-3">
                    <span className={`rounded-full border px-2.5 py-0.5 text-xs font-semibold ${STATUS_STYLE[r.status]}`}>{r.status}</span>
                  </td>
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
          <p className="text-xs text-ink-subtle">Showing 1 to 6 of 128 entries</p>
          <div className="flex items-center gap-1.5">
            <Button variant="secondary" size="icon" aria-label="Previous page"><ChevronLeft className="h-4 w-4" /></Button>
            {[1, 2, 3].map((n) => (
              <Button key={n} variant={n === 1 ? "primary" : "ghost"} size="sm" className="h-8 w-8 p-0">{n}</Button>
            ))}
            <span className="px-1 text-ink-subtle">...</span>
            <Button variant="ghost" size="sm" className="h-8 w-8 p-0">22</Button>
            <Button variant="secondary" size="icon" aria-label="Next page"><ChevronRight className="h-4 w-4" /></Button>
            <select
              aria-label="Rows per page"
              className="ml-2 h-8 rounded-md border border-border px-2 text-xs text-ink focus:border-interactive-500 focus:outline-none"
              defaultValue="10"
            >
              <option value="10">10 / page</option>
              <option value="25">25 / page</option>
              <option value="50">50 / page</option>
            </select>
          </div>
        </div>
      </div>

      <div className="mt-4 flex items-start gap-2 rounded-lg border border-interactive-100 bg-interactive-50 px-4 py-3 text-[13px] text-interactive-700">
        <Lightbulb className="mt-0.5 h-4 w-4 shrink-0" />
        <span>
          <span className="font-bold">Quick Tips</span> — Click on the eye icon to view full details of the marriage
          record. Use the three dots to edit, print certificate, or download record.
        </span>
      </div>
    </div>
  );
}
