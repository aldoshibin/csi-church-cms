"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { FileText, CheckCircle2, Clock, Download, Search, Plus, LayoutGrid, List as ListIcon, MoreVertical, Eye, RotateCcw, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { FormSelect } from "@/components/sacraments/confirmation/formFields";

const STATS = [
  { label: "Total Certificates", sub: "All Time", value: "128", icon: FileText, cardTint: "bg-emerald-50", iconTint: "bg-emerald-500" },
  { label: "This Year", sub: "2025", value: "32", icon: CheckCircle2, cardTint: "bg-blue-50", iconTint: "bg-blue-500" },
  { label: "Pending Requests", sub: "Yet to Issue", value: "05", icon: Clock, cardTint: "bg-violet-50", iconTint: "bg-violet-500" },
  { label: "Issued This Month", sub: "May 2025", value: "08", icon: Download, cardTint: "bg-amber-50", iconTint: "bg-amber-500" },
];

const ROWS = [
  { cert: "BC-2025-00128", name: "Emma Rose", id: "MEM-000145", date: "12 May 2025", parish: "CSI Holy Trinity Church, Nagercoil", diocese: "Nagercoil Diocese", issued: "20 May 2025", status: "Issued" },
  { cert: "BC-2025-00127", name: "Daniel John", id: "MEM-000144", date: "05 May 2025", parish: "CSI St. Peter's Church, Chennai", diocese: "Chennai Diocese", issued: "18 May 2025", status: "Issued" },
  { cert: "BC-2025-00126", name: "Sophia Grace", id: "MEM-000143", date: "28 Apr 2025", parish: "CSI Emmanuel Church, Trichy", diocese: "Trichy Diocese", issued: "10 May 2025", status: "Issued" },
  { cert: "BC-2025-00125", name: "Joshua Mark", id: "MEM-000142", date: "20 Apr 2025", parish: "CSI Holy Cross Church, Madurai", diocese: "Madurai Diocese", issued: "02 May 2025", status: "Pending" },
  { cert: "BC-2025-00124", name: "Olivia Faith", id: "MEM-000141", date: "15 Apr 2025", parish: "CSI St. John's Church, Coimbatore", diocese: "Coimbatore Diocese", issued: "-", status: "Draft" },
];
const STATUS_STYLE = {
  Issued: "bg-success-50 text-success-600",
  Pending: "bg-warning-50 text-warning-600",
  Draft: "bg-danger-50 text-danger-600",
};

export default function BaptismCertificatePage() {
  const router = useRouter();
  const [view, setView] = useState("grid");

  return (
    <div>
      <div className="mb-1 flex flex-wrap items-start justify-between gap-3">
        <h1 className="text-xl font-bold text-ink">Baptism Certificate</h1>
        <Button variant="primary" leftIcon={<Plus className="h-4 w-4" />} onClick={() => router.push("/sacraments/baptism-certificate/new")}>
          New Baptism Certificate
        </Button>
      </div>
      <p className="mb-5 text-sm">
        <span className="text-interactive-500">Sacramental Records</span>
        <span className="mx-1.5 text-ink-subtle">&gt;</span>
        <span className="font-semibold text-ink">Baptism Certificate</span>
      </p>

      <div className="mb-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {STATS.map((s) => (
          <div key={s.label} className={`flex items-center gap-3 rounded-lg p-4 ${s.cardTint}`}>
            <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${s.iconTint}`}>
              <s.icon className="h-5 w-5 text-white" />
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
        <Input label="Search Member" leftIcon={<Search className="h-4 w-4" />} placeholder="Search by name / Member ID..." />
        <Input label="From Date" placeholder="dd/mm/yyyy" />
        <Input label="To Date" placeholder="dd/mm/yyyy" />
        <FormSelect label="Diocese"><option>All Dioceses</option></FormSelect>
        <FormSelect label="Parish / Church"><option>All Parishes</option></FormSelect>
      </div>
      <div className="mb-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <FormSelect label="Baptism Date"><option>All Dates</option></FormSelect>
        <FormSelect label="Certificate Status"><option>All Status</option><option>Issued</option><option>Pending</option><option>Draft</option></FormSelect>
        <div className="flex items-end justify-end gap-2.5 lg:col-span-2">
          <Button variant="secondary" leftIcon={<RotateCcw className="h-4 w-4" />}>Reset</Button>
          <Button variant="primary" leftIcon={<Search className="h-4 w-4" />}>Search</Button>
        </div>
      </div>

      <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
        <h2 className="text-base font-bold text-ink">Baptism Certificate List</h2>
        <div className="flex items-center gap-2.5">
          <div className="flex overflow-hidden rounded-md border border-border">
            <button
              onClick={() => setView("grid")}
              className={`flex h-8 w-8 items-center justify-center ${view === "grid" ? "bg-interactive-500 text-white" : "bg-white text-ink-subtle"}`}
              aria-label="Grid view"
            >
              <LayoutGrid className="h-4 w-4" />
            </button>
            <button
              onClick={() => setView("list")}
              className={`flex h-8 w-8 items-center justify-center ${view === "list" ? "bg-interactive-500 text-white" : "bg-white text-ink-subtle"}`}
              aria-label="List view"
            >
              <ListIcon className="h-4 w-4" />
            </button>
          </div>
          <Button variant="secondary" leftIcon={<Download className="h-4 w-4" />}>Export List</Button>
          <Button variant="secondary" size="icon" aria-label="More options"><MoreVertical className="h-4 w-4" /></Button>
        </div>
      </div>

      <div className="overflow-hidden rounded-lg border border-border bg-white shadow-card">
        <div className="min-w-0 overflow-x-auto">
          <table className="w-full min-w-full text-left text-[13px]">
            <thead>
              <tr className="border-b border-border bg-surface-muted text-xs font-semibold text-ink-subtle">
                <th className="w-10 px-4 py-3"><input type="checkbox" /></th>
                <th className="px-2 py-3">Certificate No.</th>
                <th className="px-2 py-3">Member Name</th>
                <th className="px-2 py-3">Baptism Date</th>
                <th className="px-2 py-3">Parish / Church</th>
                <th className="px-2 py-3">Diocese</th>
                <th className="px-2 py-3">Issued Date</th>
                <th className="px-2 py-3">Status</th>
                <th className="px-2 py-3">Actions</th>
              </tr>
            </thead>
            <tbody>
              {ROWS.map((r) => (
                <tr key={r.cert} className="border-b border-border last:border-0 hover:bg-surface-muted/60">
                  <td className="px-4 py-3"><input type="checkbox" /></td>
                  <td className="px-2 py-3 font-medium text-interactive-600">{r.cert}</td>
                  <td className="px-2 py-3">
                    <p className="font-semibold text-ink">{r.name}</p>
                    <p className="text-xs text-ink-subtle">{r.id}</p>
                  </td>
                  <td className="px-2 py-3 text-ink">{r.date}</td>
                  <td className="px-2 py-3 text-ink">{r.parish}</td>
                  <td className="px-2 py-3 text-ink-subtle">{r.diocese}</td>
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
          <p className="text-xs text-ink-subtle">Showing 1 to 5 of 128 entries</p>
          <div className="flex items-center gap-1.5">
            <Button variant="secondary" size="icon" aria-label="Previous page"><ChevronLeft className="h-4 w-4" /></Button>
            {[1, 2, 3].map((n) => (
              <Button key={n} variant={n === 1 ? "primary" : "ghost"} size="sm" className="h-8 w-8 p-0">{n}</Button>
            ))}
            <span className="px-1 text-ink-subtle">...</span>
            <Button variant="ghost" size="sm" className="h-8 w-8 p-0">26</Button>
            <Button variant="secondary" size="icon" aria-label="Next page"><ChevronRight className="h-4 w-4" /></Button>
            <select
              aria-label="Rows per page"
              className="ml-2 h-8 rounded-md border border-border px-2 text-xs text-ink focus:border-interactive-500 focus:outline-none"
              defaultValue="5"
            >
              <option value="5">5 / page</option>
              <option value="10">10 / page</option>
              <option value="25">25 / page</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}
