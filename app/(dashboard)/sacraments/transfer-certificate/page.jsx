"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { FileText, Clock, CheckCircle2, XCircle, Search, Plus, Download, LayoutGrid, List as ListIcon, Eye, MoreVertical, ChevronsLeft, ChevronLeft, ChevronRight, ChevronsRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { FormSelect } from "@/components/sacraments/confirmation/formFields";

function Sparkline({ color }) {
  return (
    <svg viewBox="0 0 80 24" className="h-6 w-20" fill="none">
      <polyline
        points="0,18 12,14 24,16 36,8 48,12 60,4 72,6 80,2"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const STATS = [
  { label: "Total Requests", sub: "All time requests", value: "48", icon: FileText, tint: "bg-success-50 text-success-600", spark: "#16a34a" },
  { label: "Pending Requests", sub: "Awaiting approval", value: "12", icon: Clock, tint: "bg-interactive-50 text-interactive-600", spark: "#0ea5e9" },
  { label: "Issued Certificates", sub: "Successfully issued", value: "32", icon: CheckCircle2, tint: "bg-warning-50 text-warning-600", spark: "#16a34a" },
  { label: "Rejected Requests", sub: "Requests rejected", value: "4", icon: XCircle, tint: "bg-violet-50 text-violet-600", spark: "#a855f7" },
];

const ROWS = [
  { id: "TRF-2025-0048", name: "Mr. Thomas Mathew", memId: "MEM-000125", from: "CSI St. John's Church", to: "CSI Holy Trinity Church", date: "22 May 2025", status: "Pending", cert: "Not Issued" },
  { id: "TRF-2025-0047", name: "Mrs. Mary Susan", memId: "MEM-000124", from: "CSI St. John's Church", to: "CSI Emmanuel Church", date: "20 May 2025", status: "Approved", cert: "Issued" },
  { id: "TRF-2025-0046", name: "Mr. John Joseph", memId: "MEM-000123", from: "CSI St. John's Church", to: "CSI Bethel Church", date: "18 May 2025", status: "Pending", cert: "Not Issued" },
  { id: "TRF-2025-0045", name: "Miss. Anna George", memId: "MEM-000122", from: "CSI St. John's Church", to: "CSI Zion Church", date: "15 May 2025", status: "Approved", cert: "Issued" },
  { id: "TRF-2025-0044", name: "Mr. Alex Mathew", memId: "MEM-000121", from: "CSI St. John's Church", to: "CSI Grace Church", date: "10 May 2025", status: "Rejected", cert: "Not Issued" },
  { id: "TRF-2025-0043", name: "Mrs. Lincy Varghese", memId: "MEM-000120", from: "CSI St. John's Church", to: "CSI Mount Zion Church", date: "08 May 2025", status: "Approved", cert: "Issued" },
  { id: "TRF-2025-0042", name: "Mr. Samuel Raj", memId: "MEM-000119", from: "CSI St. John's Church", to: "CSI Ebenezer Church", date: "05 May 2025", status: "Pending", cert: "Not Issued" },
  { id: "TRF-2025-0041", name: "Miss. Reena Thomas", memId: "MEM-000118", from: "CSI St. John's Church", to: "CSI Faith Church", date: "02 May 2025", status: "Approved", cert: "Issued" },
];
const STATUS_STYLE = {
  Approved: "bg-success-50 text-success-600",
  Pending: "bg-warning-50 text-warning-600",
  Rejected: "bg-danger-50 text-danger-600",
};
const CERT_STYLE = {
  Issued: "bg-success-50 text-success-600",
  "Not Issued": "bg-surface-muted text-ink-subtle",
};

export default function TransferCertificatePage() {
  const router = useRouter();
  const [view, setView] = useState("grid");

  return (
    <div>
      <div className="mb-1 flex flex-wrap items-start justify-between gap-3">
        <div>
          <h1 className="text-xl font-bold text-ink">Transfer Certificate</h1>
          <p className="text-sm text-ink-subtle">Manage transfer certificate requests and issues.</p>
        </div>
        <Button variant="primary" leftIcon={<Plus className="h-4 w-4" />} onClick={() => router.push("/sacraments/transfer-certificate/new")}>
          New Transfer Certificate
        </Button>
      </div>

      <div className="mb-4 mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {STATS.map((s) => (
          <div key={s.label} className="rounded-lg border border-border bg-white p-4 shadow-card">
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-3">
                <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full ${s.tint}`}>
                  <s.icon className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs text-ink-subtle">{s.label}</p>
                  <p className="text-xl font-bold text-ink">{s.value}</p>
                  <p className="text-xs text-ink-subtle">{s.sub}</p>
                </div>
              </div>
              <Sparkline color={s.spark} />
            </div>
          </div>
        ))}
      </div>

      <div className="mb-4 grid grid-cols-1 gap-4 rounded-lg border border-border bg-white p-4 shadow-card sm:grid-cols-2 lg:grid-cols-5">
        <Input label="Search" leftIcon={<Search className="h-4 w-4" />} placeholder="Search by member name, ID..." />
        <FormSelect label="Request Status"><option>All Status</option><option>Pending</option><option>Approved</option><option>Rejected</option></FormSelect>
        <FormSelect label="Certificate Status"><option>All Status</option><option>Issued</option><option>Not Issued</option></FormSelect>
        <Input label="Date Range" placeholder="Select date range" />
        <div className="flex items-end">
          <Button variant="secondary" className="w-full">Reset</Button>
        </div>
      </div>

      <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
        <h2 className="text-base font-bold text-ink">Transfer Certificate Requests</h2>
        <div className="flex items-center gap-2.5">
          <span className="text-xs text-ink-subtle">View</span>
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
          <Button variant="secondary" leftIcon={<Download className="h-4 w-4" />}>Export Report</Button>
        </div>
      </div>

      <div className="overflow-hidden rounded-lg border border-border bg-white shadow-card">
        <div className="min-w-0 overflow-x-auto">
          <table className="w-full min-w-full text-left text-[13px]">
            <thead>
              <tr className="border-b border-border bg-surface-muted text-xs font-semibold text-ink-subtle">
                <th className="px-4 py-3">Request ID</th>
                <th className="px-2 py-3">Member Name</th>
                <th className="px-2 py-3">Member ID</th>
                <th className="px-2 py-3">From Parish</th>
                <th className="px-2 py-3">To Parish</th>
                <th className="px-2 py-3">Request Date</th>
                <th className="px-2 py-3">Status</th>
                <th className="px-2 py-3">Certificate Status</th>
                <th className="px-2 py-3">Actions</th>
              </tr>
            </thead>
            <tbody>
              {ROWS.map((r) => (
                <tr key={r.id} className="border-b border-border last:border-0 hover:bg-surface-muted/60">
                  <td className="px-4 py-3 font-medium text-ink">{r.id}</td>
                  <td className="px-2 py-3 font-semibold text-ink">{r.name}</td>
                  <td className="px-2 py-3 text-ink-subtle">{r.memId}</td>
                  <td className="px-2 py-3 text-ink">{r.from}</td>
                  <td className="px-2 py-3 text-ink">{r.to}</td>
                  <td className="px-2 py-3 text-ink">{r.date}</td>
                  <td className="px-2 py-3">
                    <span className={`rounded-full px-2.5 py-0.5 text-xs font-semibold ${STATUS_STYLE[r.status]}`}>{r.status}</span>
                  </td>
                  <td className="px-2 py-3">
                    <span className={`rounded-full px-2.5 py-0.5 text-xs font-semibold ${CERT_STYLE[r.cert]}`}>{r.cert}</span>
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
          <p className="text-xs text-ink-subtle">Showing 1 to 8 of 48 entries</p>
          <div className="flex items-center gap-1.5">
            <Button variant="secondary" size="icon" aria-label="First page"><ChevronsLeft className="h-4 w-4" /></Button>
            <Button variant="secondary" size="icon" aria-label="Previous page"><ChevronLeft className="h-4 w-4" /></Button>
            {[1, 2, 3].map((n) => (
              <Button key={n} variant={n === 1 ? "primary" : "ghost"} size="sm" className="h-8 w-8 p-0">{n}</Button>
            ))}
            <span className="px-1 text-ink-subtle">...</span>
            <Button variant="ghost" size="sm" className="h-8 w-8 p-0">6</Button>
            <Button variant="secondary" size="icon" aria-label="Next page"><ChevronRight className="h-4 w-4" /></Button>
            <Button variant="secondary" size="icon" aria-label="Last page"><ChevronsRight className="h-4 w-4" /></Button>
          </div>
        </div>
      </div>
    </div>
  );
}
