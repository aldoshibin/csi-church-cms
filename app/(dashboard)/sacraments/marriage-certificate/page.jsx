"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { FileText, CalendarDays, CheckCircle2, Hourglass, Search, Plus, Download, HelpCircle, Filter, LayoutGrid, List as ListIcon, Eye, MoreVertical, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { FormSelect } from "@/components/sacraments/confirmation/formFields";

const STATS = [
  { label: "Total Certificates", sub: "All Time", value: "128", icon: FileText, cardTint: "bg-emerald-50", iconTint: "bg-emerald-500" },
  { label: "This Year", sub: "2025", value: "18", icon: CalendarDays, cardTint: "bg-emerald-50", iconTint: "bg-emerald-500" },
  { label: "This Month", sub: "May 2025", value: "5", icon: CheckCircle2, cardTint: "bg-emerald-50", iconTint: "bg-emerald-500" },
  { label: "Pending Certificates", sub: "Awaiting Approval", value: "2", icon: Hourglass, cardTint: "bg-amber-50", iconTint: "bg-amber-500" },
];

const ROWS = [
  { n: 1, cert: "MC-2025-128", groom: "John Mathew", bride: "Rose Mary", date: "12/05/2025", place: "CSI Holy Trinity Church, Nagercoil", issued: "12/05/2025", status: "Issued" },
  { n: 2, cert: "MC-2025-127", groom: "Alen Thomas", bride: "Jency Grace", date: "05/05/2025", place: "CSI St. John's Church, Nagercoil", issued: "06/05/2025", status: "Issued" },
  { n: 3, cert: "MC-2025-126", groom: "Daniel Joseph", bride: "Anita Williams", date: "28/04/2025", place: "CSI Holy Trinity Church, Nagercoil", issued: "29/04/2025", status: "Issued" },
  { n: 4, cert: "MC-2025-125", groom: "Biju Samuel", bride: "Linta Sara", date: "20/04/2025", place: "CSI St. Peter's Church, Parakkai", issued: "21/04/2025", status: "Pending" },
  { n: 5, cert: "MC-2025-124", groom: "Vijay Kumar", bride: "Sherin Anna", date: "15/04/2025", place: "CSI Holy Trinity Church, Nagercoil", issued: "16/04/2025", status: "Issued" },
  { n: 6, cert: "MC-2025-123", groom: "Mervin Geo", bride: "Steffi Rachel", date: "08/04/2025", place: "CSI St. John's Church, Nagercoil", issued: "09/04/2025", status: "Issued" },
  { n: 7, cert: "MC-2025-122", groom: "Stephen Raj", bride: "Jeeva Mary", date: "01/04/2025", place: "CSI St. Paul's Church, Nagercoil", issued: "02/04/2025", status: "Pending" },
  { n: 8, cert: "MC-2025-121", groom: "Arun Dev", bride: "Nisha Elizabeth", date: "25/03/2025", place: "CSI Holy Trinity Church, Nagercoil", issued: "26/03/2025", status: "Issued" },
];
const STATUS_STYLE = {
  Issued: "bg-success-50 text-success-600",
  Pending: "bg-warning-50 text-warning-600",
};

export default function MarriageCertificatePage() {
  const router = useRouter();
  const [view, setView] = useState("list");

  return (
    <div>
      <div className="mb-1 flex flex-wrap items-start justify-between gap-3">
        <h1 className="text-xl font-bold text-ink">Marriage Certificate</h1>
        <div className="flex gap-2.5">
          <Button variant="primary" leftIcon={<Plus className="h-4 w-4" />} onClick={() => router.push("/sacraments/marriage-certificate/new")}>
            New Marriage Certificate
          </Button>
          <Button variant="secondary" leftIcon={<Download className="h-4 w-4" />}>Export Report</Button>
          <Button variant="secondary" leftIcon={<HelpCircle className="h-4 w-4" />}>Help</Button>
        </div>
      </div>
      <p className="mb-5 text-sm">
        <span className="text-interactive-500">Sacramental Records</span>
        <span className="mx-1.5 text-ink-subtle">&gt;</span>
        <span className="font-semibold text-ink">Marriage Certificate</span>
      </p>

      <div className="mb-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {STATS.map((s) => (
          <div key={s.label} className={`flex items-center gap-3 rounded-lg p-4 ${s.cardTint}`}>
            <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${s.iconTint}`}>
              <s.icon className="h-5 w-5 text-white" />
            </div>
            <div>
              <p className="text-2xl font-bold text-ink">{s.value}</p>
              <p className="text-xs text-ink-subtle">{s.label}</p>
              <p className="text-xs text-ink-subtle">{s.sub}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mb-4 rounded-lg border border-border bg-white p-4 shadow-card">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-1">
            <Input leftIcon={<Search className="h-4 w-4" />} placeholder="Search by Groom, Bride, Certificate No..." />
          </div>
          <Input placeholder="DD/MM/YYYY" />
          <Input placeholder="DD/MM/YYYY" />
          <FormSelect><option>All Status</option><option>Issued</option><option>Pending</option></FormSelect>
          <Button variant="primary" leftIcon={<Filter className="h-4 w-4" />}>Filter</Button>
        </div>
      </div>

      <div className="mb-3 flex justify-end">
        <div className="flex overflow-hidden rounded-md border border-border">
          <button
            onClick={() => setView("list")}
            className={`flex h-9 w-9 items-center justify-center ${view === "list" ? "bg-interactive-500 text-white" : "bg-white text-ink-subtle"}`}
            aria-label="List view"
          >
            <ListIcon className="h-4 w-4" />
          </button>
          <button
            onClick={() => setView("grid")}
            className={`flex h-9 w-9 items-center justify-center ${view === "grid" ? "bg-interactive-500 text-white" : "bg-white text-ink-subtle"}`}
            aria-label="Grid view"
          >
            <LayoutGrid className="h-4 w-4" />
          </button>
        </div>
      </div>

      <div className="overflow-hidden rounded-lg border border-border bg-white shadow-card">
        <div className="min-w-0 overflow-x-auto">
          <table className="w-full min-w-full text-left text-[13px]">
            <thead>
              <tr className="border-b border-border bg-surface-muted text-xs font-semibold text-ink-subtle">
                <th className="px-4 py-3">#</th>
                <th className="px-2 py-3">Certificate No.</th>
                <th className="px-2 py-3">Groom Name</th>
                <th className="px-2 py-3">Bride Name</th>
                <th className="px-2 py-3">Date of Marriage</th>
                <th className="px-2 py-3">Place of Marriage</th>
                <th className="px-2 py-3">Issued On</th>
                <th className="px-2 py-3">Status</th>
                <th className="px-2 py-3">Actions</th>
              </tr>
            </thead>
            <tbody>
              {ROWS.map((r) => (
                <tr key={r.cert} className="border-b border-border last:border-0 hover:bg-surface-muted/60">
                  <td className="px-4 py-3 text-ink-subtle">{r.n}</td>
                  <td className="px-2 py-3 font-medium text-interactive-600">{r.cert}</td>
                  <td className="px-2 py-3 font-semibold text-ink">{r.groom}</td>
                  <td className="px-2 py-3 font-semibold text-ink">{r.bride}</td>
                  <td className="px-2 py-3 text-ink">{r.date}</td>
                  <td className="px-2 py-3 text-ink">{r.place}</td>
                  <td className="px-2 py-3 text-ink">{r.issued}</td>
                  <td className="px-2 py-3">
                    <span className={`rounded-full px-2.5 py-0.5 text-xs font-semibold ${STATUS_STYLE[r.status]}`}>{r.status}</span>
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
          <p className="text-xs text-ink-subtle">Showing 1 to 8 of 128 entries</p>
          <div className="flex items-center gap-1.5">
            <Button variant="secondary" size="icon" aria-label="Previous page"><ChevronLeft className="h-4 w-4" /></Button>
            {[1, 2, 3].map((n) => (
              <Button key={n} variant={n === 1 ? "primary" : "ghost"} size="sm" className="h-8 w-8 p-0">{n}</Button>
            ))}
            <span className="px-1 text-ink-subtle">...</span>
            <Button variant="ghost" size="sm" className="h-8 w-8 p-0">16</Button>
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
    </div>
  );
}
