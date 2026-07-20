"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { Search, Calendar, Filter, ChevronDown, Download, Plus, Eye, Pencil, MoreVertical, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { FormSelect } from "@/components/sacraments/confirmation/formFields";

const ROWS = [
  { cert: "CNF-2025-0012", name: "Ava Grace Thomas", rel: "D/o Thomas Mathew", init: "AJ", color: "bg-interactive-50 text-interactive-600", date: "25 May 2025", day: "Sunday", by: "Rev. Michael John", status: "Confirmed" },
  { cert: "CNF-2025-0011", name: "Ryan Jacob", rel: "S/o Jacob Philip", init: "RJ", color: "bg-blue-50 text-blue-600", date: "18 May 2025", day: "Sunday", by: "Rev. Michael John", status: "Confirmed" },
  { cert: "CNF-2025-0010", name: "Sophia Maria", rel: "D/o Maria Joseph", init: "SM", color: "bg-warning-50 text-warning-600", date: "11 May 2025", day: "Sunday", by: "Rev. Michael John", status: "Confirmed" },
  { cert: "CNF-2025-0009", name: "Noah Biju", rel: "S/o Biju Thomas", init: "NB", color: "bg-violet-50 text-violet-600", date: "04 May 2025", day: "Sunday", by: "Rev. George Mathew", status: "Confirmed" },
  { cert: "CNF-2025-0008", name: "Emma Mathew", rel: "D/o Mathew Varghese", init: "EM", color: "bg-rose-50 text-rose-600", date: "27 Apr 2025", day: "Sunday", by: "Rev. Michael John", status: "Pending" },
  { cert: "CNF-2025-0007", name: "Aiden Koshy", rel: "S/o Koshy Abraham", init: "AK", color: "bg-interactive-50 text-interactive-600", date: "20 Apr 2025", day: "Sunday", by: "Rev. George Mathew", status: "Pending" },
  { cert: "CNF-2025-0006", name: "Liya Davis", rel: "D/o Davis P. Mathew", init: "LD", color: "bg-sky-50 text-sky-600", date: "13 Apr 2025", day: "Sunday", by: "Rev. Michael John", status: "Draft" },
  { cert: "CNF-2025-0005", name: "John Paul", rel: "S/o Paulose Joseph", init: "JP", color: "bg-orange-50 text-orange-600", date: "06 Apr 2025", day: "Sunday", by: "Rev. George Mathew", status: "Draft" },
];
const STATUS_STYLE = {
  Confirmed: "bg-success-50 text-success-600 border-success-500/20",
  Pending: "bg-warning-50 text-warning-600 border-warning-500/20",
  Draft: "bg-surface-muted text-ink-subtle border-border",
};

export default function ConfirmationRegisterPage() {
  const router = useRouter();

  return (
    <div>
      <div className="mb-1 flex flex-wrap items-start justify-between gap-3">
        <h1 className="text-xl font-bold text-ink">Confirmation Register</h1>
        <div className="flex gap-2.5">
          <Button variant="secondary" leftIcon={<Download className="h-4 w-4" />}>Export Report</Button>
          <Button variant="primary" leftIcon={<Plus className="h-4 w-4" />} onClick={() => router.push("/sacraments/confirmation/new")}>
            Add New Record
          </Button>
        </div>
      </div>
      <p className="mb-1 text-sm">
        <span className="text-interactive-500">Sacramental Records</span>
        <span className="mx-1.5 text-ink-subtle">&gt;</span>
        <span className="font-semibold text-ink">Confirmation Register</span>
      </p>
      <p className="mb-5 text-sm text-ink-subtle">View and manage all confirmation records of church members.</p>

      <div className="mb-4 grid grid-cols-1 gap-4 rounded-lg border border-border bg-white p-4 shadow-card sm:grid-cols-2 lg:grid-cols-5">
        <Input label="Search" leftIcon={<Search className="h-4 w-4" />} placeholder="Name, certificate no., or parents..." />
        <Input label="Date of Confirmation" leftIcon={<Calendar className="h-4 w-4" />} placeholder="Select date range" />
        <FormSelect label="Church"><option value="">All Churches</option></FormSelect>
        <FormSelect label="Confirmed By"><option value="">All Priests</option></FormSelect>
        <FormSelect label="Status"><option value="">All Status</option><option>Confirmed</option><option>Pending</option><option>Draft</option></FormSelect>
      </div>
      <Button variant="ghost" size="sm" className="mb-4" leftIcon={<Filter className="h-3.5 w-3.5" />} rightIcon={<ChevronDown className="h-3.5 w-3.5" />}>
        More Filters
      </Button>

      <div className="overflow-hidden rounded-lg border border-border bg-white shadow-card">
        <div className="min-w-0 overflow-x-auto">
          <table className="w-full min-w-full text-left text-[13px]">
            <thead>
              <tr className="border-b border-border bg-surface-muted text-xs font-semibold text-ink-subtle">
                <th className="w-10 px-4 py-3"><input type="checkbox" /></th>
                <th className="px-2 py-3">Certificate No.</th>
                <th className="px-2 py-3">Confirmand Name</th>
                <th className="px-2 py-3">Date of Confirmation</th>
                <th className="px-2 py-3">Church</th>
                <th className="px-2 py-3">Confirmed By</th>
                <th className="px-2 py-3">Status</th>
                <th className="px-2 py-3">Actions</th>
              </tr>
            </thead>
            <tbody>
              {ROWS.map((r) => (
                <tr key={r.cert} className="border-b border-border last:border-0 hover:bg-surface-muted/60">
                  <td className="px-4 py-3"><input type="checkbox" /></td>
                  <td className="px-2 py-3 font-medium text-ink">{r.cert}</td>
                  <td className="px-2 py-3">
                    <div className="flex items-center gap-2.5">
                      <div className={`flex h-8 w-8 items-center justify-center rounded-full text-[11px] font-bold ${r.color}`}>{r.init}</div>
                      <div>
                        <p className="font-semibold text-ink">{r.name}</p>
                        <p className="text-xs text-ink-subtle">{r.rel}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-2 py-3">
                    <p className="text-ink">{r.date}</p>
                    <p className="text-xs text-ink-subtle">{r.day}</p>
                  </td>
                  <td className="px-2 py-3 text-ink-subtle">CSI St. John's Church, Kottayam</td>
                  <td className="px-2 py-3 text-ink-subtle">{r.by}</td>
                  <td className="px-2 py-3">
                    <span className={`rounded-full border px-2.5 py-0.5 text-xs font-semibold ${STATUS_STYLE[r.status]}`}>{r.status}</span>
                  </td>
                  <td className="px-2 py-3">
                    <div className="flex items-center gap-1 text-ink-subtle">
                      <Link href={`/sacraments/confirmation/${r.cert}`} aria-label="View"><Eye className="h-4 w-4 cursor-pointer hover:text-ink" /></Link>
                      <Link href={`/sacraments/confirmation/${r.cert}/edit`} aria-label="Edit"><Pencil className="h-4 w-4 cursor-pointer hover:text-ink" /></Link>
                      <MoreVertical className="h-4 w-4 cursor-pointer hover:text-ink" />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="flex flex-wrap items-center justify-between gap-2 px-4 py-3">
          <p className="text-xs text-ink-subtle">Showing 1 to 8 of 32 records</p>
          <div className="flex items-center gap-1.5">
            <Button variant="secondary" size="icon" aria-label="Previous page"><ChevronLeft className="h-4 w-4" /></Button>
            {[1, 2, 3, 4].map((n) => (
              <Button key={n} variant={n === 1 ? "primary" : "ghost"} size="sm" className="h-8 w-8 p-0">{n}</Button>
            ))}
            <Button variant="secondary" size="icon" aria-label="Next page"><ChevronRight className="h-4 w-4" /></Button>
          </div>
        </div>
      </div>
    </div>
  );
}
