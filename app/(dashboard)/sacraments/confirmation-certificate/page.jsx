"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { FileCheck2, CalendarDays, CalendarCheck, ShieldCheck, ShieldX, Search, Plus, Eye, Download, MoreVertical, LayoutGrid, List as ListIcon, Filter, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { FormSelect } from "@/components/sacraments/confirmation/formFields";

const STATS = [
  { label: "Total Certificates", sub: "All Time", value: "453", icon: FileCheck2 },
  { label: "This Year", sub: "2025", value: "87", icon: CalendarDays },
  { label: "This Month", sub: "May 2025", value: "12", icon: CalendarCheck },
  { label: "Active Certificates", sub: "Active", value: "451", icon: ShieldCheck },
  { label: "Inactive Certificates", sub: "Inactive", value: "2", icon: ShieldX },
];

const ROWS = [
  { cert: "CONF-2025-0012", name: "Anna Mary Thomas", date: "18/05/2025", parish: "CSI St. John's Church, Nagercoil", minister: "Rev. David Samuel", status: "Active" },
  { cert: "CONF-2025-0011", name: "Jacob Mathew", date: "18/05/2025", parish: "CSI St. John's Church, Nagercoil", minister: "Rev. David Samuel", status: "Active" },
  { cert: "CONF-2025-0010", name: "Sophy Grace", date: "11/05/2025", parish: "CSI St. John's Church, Nagercoil", minister: "Rev. David Samuel", status: "Active" },
  { cert: "CONF-2025-0009", name: "Paul George", date: "11/05/2025", parish: "CSI St. John's Church, Nagercoil", minister: "Rev. David Samuel", status: "Active" },
  { cert: "CONF-2025-0008", name: "Elsa Susan", date: "04/05/2025", parish: "CSI St. John's Church, Nagercoil", minister: "Rev. David Samuel", status: "Active" },
  { cert: "CONF-2025-0007", name: "Joel Thomas", date: "04/05/2025", parish: "CSI St. John's Church, Nagercoil", minister: "Rev. David Samuel", status: "Active" },
  { cert: "CONF-2025-0006", name: "Riya Rachel", date: "27/04/2025", parish: "CSI St. John's Church, Nagercoil", minister: "Rev. David Samuel", status: "Active" },
  { cert: "CONF-2025-0005", name: "Daniel Martin", date: "27/04/2025", parish: "CSI St. John's Church, Nagercoil", minister: "Rev. David Samuel", status: "Inactive" },
  { cert: "CONF-2025-0004", name: "Jerin Joseph", date: "20/04/2025", parish: "CSI St. John's Church, Nagercoil", minister: "Rev. David Samuel", status: "Active" },
  { cert: "CONF-2025-0003", name: "Linda Rose", date: "20/04/2025", parish: "CSI St. John's Church, Nagercoil", minister: "Rev. David Samuel", status: "Active" },
];
const STATUS_STYLE = {
  Active: "bg-success-50 text-success-600",
  Inactive: "bg-danger-50 text-danger-600",
};

export default function ConfirmationCertificatePage() {
  const router = useRouter();
  const [view, setView] = useState("list");

  return (
    <div>
      <h1 className="mb-1 text-xl font-bold text-ink">Confirmation Certificate</h1>
      <p className="mb-5 text-sm">
        <span className="text-interactive-500">Sacramental Records</span>
        <span className="mx-1.5 text-ink-subtle">&gt;</span>
        <span className="font-semibold text-ink">Confirmation Certificate</span>
      </p>

      <div className="mb-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {STATS.map((s) => (
          <div key={s.label} className="flex items-center gap-3 rounded-lg border border-border bg-white p-4 shadow-card">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-interactive-500">
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

      <div className="mb-4 flex flex-wrap items-end gap-3 rounded-lg border border-border bg-white p-4 shadow-card">
        <Button variant="primary" leftIcon={<Plus className="h-4 w-4" />} onClick={() => router.push("/sacraments/confirmation-certificate/new")}>
          New Confirmation Certificate
        </Button>
        <div className="min-w-[220px] flex-1">
          <Input leftIcon={<Search className="h-4 w-4" />} placeholder="Search by name, certificate no..." />
        </div>
        <div className="w-36">
          <FormSelect><option>All Years</option><option>2025</option><option>2024</option></FormSelect>
        </div>
        <div className="w-32">
          <FormSelect><option>All</option><option>Active</option><option>Inactive</option></FormSelect>
        </div>
        <Button variant="secondary" leftIcon={<Filter className="h-4 w-4" />}>More Filters</Button>
        <div className="ml-auto flex overflow-hidden rounded-md border border-border">
          <button
            onClick={() => setView("grid")}
            className={`flex h-9 w-9 items-center justify-center ${view === "grid" ? "bg-interactive-500 text-white" : "bg-white text-ink-subtle"}`}
            aria-label="Grid view"
          >
            <LayoutGrid className="h-4 w-4" />
          </button>
          <button
            onClick={() => setView("list")}
            className={`flex h-9 w-9 items-center justify-center ${view === "list" ? "bg-interactive-500 text-white" : "bg-white text-ink-subtle"}`}
            aria-label="List view"
          >
            <ListIcon className="h-4 w-4" />
          </button>
        </div>
      </div>

      <div className="overflow-hidden rounded-lg border border-border bg-white shadow-card">
        <div className="min-w-0 overflow-x-auto">
          <table className="w-full min-w-full text-left text-[13px]">
            <thead>
              <tr className="border-b border-border bg-surface-muted text-xs font-semibold text-ink-subtle">
                <th className="w-10 px-4 py-3"><input type="checkbox" /></th>
                <th className="px-2 py-3">Certificate No.</th>
                <th className="px-2 py-3">Confirmand Name</th>
                <th className="px-2 py-3">Date of Confirmation</th>
                <th className="px-2 py-3">Church / Parish</th>
                <th className="px-2 py-3">Minister</th>
                <th className="px-2 py-3">Status</th>
                <th className="px-2 py-3">Actions</th>
              </tr>
            </thead>
            <tbody>
              {ROWS.map((r) => (
                <tr key={r.cert} className="border-b border-border last:border-0 hover:bg-surface-muted/60">
                  <td className="px-4 py-3"><input type="checkbox" /></td>
                  <td className="px-2 py-3 font-medium text-interactive-600">{r.cert}</td>
                  <td className="px-2 py-3 font-semibold text-ink">{r.name}</td>
                  <td className="px-2 py-3 text-ink">{r.date}</td>
                  <td className="px-2 py-3 text-ink">{r.parish}</td>
                  <td className="px-2 py-3 text-ink-subtle">{r.minister}</td>
                  <td className="px-2 py-3">
                    <span className={`rounded-full px-2.5 py-0.5 text-xs font-semibold ${STATUS_STYLE[r.status]}`}>{r.status}</span>
                  </td>
                  <td className="px-2 py-3">
                    <div className="flex items-center gap-1.5">
                      <Button variant="outline" size="icon" aria-label="View"><Eye className="h-3.5 w-3.5" /></Button>
                      <Button variant="outline" size="icon" aria-label="Download"><Download className="h-3.5 w-3.5" /></Button>
                      <Button variant="secondary" size="icon" aria-label="More options"><MoreVertical className="h-3.5 w-3.5" /></Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="flex flex-wrap items-center justify-between gap-2 px-4 py-3">
          <p className="text-xs text-ink-subtle">Showing 1 to 10 of 453 entries</p>
          <div className="flex items-center gap-1.5">
            <Button variant="secondary" size="icon" aria-label="Previous page"><ChevronLeft className="h-4 w-4" /></Button>
            {[1, 2, 3, 4, 5].map((n) => (
              <Button key={n} variant={n === 1 ? "primary" : "ghost"} size="sm" className="h-8 w-8 p-0">{n}</Button>
            ))}
            <span className="px-1 text-ink-subtle">...</span>
            <Button variant="ghost" size="sm" className="h-8 w-8 p-0">46</Button>
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
