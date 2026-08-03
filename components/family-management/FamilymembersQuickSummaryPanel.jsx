import Link from "next/link";
import { Users, ShieldCheck, ShieldOff, User, UserPlus, Info } from "lucide-react";

const STATS = [
  { key: "total", label: "Total Members", sub: "All Time", value: "124", icon: Users, tint: "bg-interactive-50 text-interactive-600" ,colSpan: "col-span-2", },
  { key: "active", label: "Active Members", value: "112", icon: ShieldCheck, tint: "bg-success-50 text-success-600" , colSpan: "col-span-1",},
  { key: "inactive", label: "Inactive Members", value: "12", icon: ShieldOff, tint: "bg-danger-50 text-danger-500", colSpan: "col-span-1", },
  { key: "members", label: "Male Members", value: "487", icon: User, tint: "bg-blue-50 text-blue-600", colSpan: "col-span-1", },
  { key: "new", label: "Female Members", value: "7", icon: UserPlus, tint: "bg-violet-50 text-violet-600", colSpan: "col-span-1", },
];

const RECENT_FAMILIES = [
  { name: "Peter Family", date: "5" },
  { name: "Andrew Family", date: "2" },
  { name: "Stephen Family", date: "4" },
  { name: "David Family", date: "11" },
  { name: "Wilson Family", date: "09" },
];

function initials(name) {
  return name.trim().split(/\s+/).slice(0, 2).map((w) => w[0]?.toUpperCase()).join("");
}

export function FamilyQuickSummaryPanel() {
  return (
    <div className="space-y-4 border rounded-md shadow-card bg-white">
      <div className="p-2">
        <h3 className="mb-3 text-base font-bold text-ink">Quick Summary</h3>
        <div className="grid grid-cols-2 gap-3">
          {STATS.map((s) => (
            <div key={s.key} 
            className={`${s.colSpan} rounded-lg border border-border bg-white p-3.5 shadow-card flex justify-center items-center gap-2`}>
              <div className={`mb-2 flex h-9 w-9 items-center justify-center rounded-full ${s.tint}`}>
                <s.icon className="h-4.5 w-4.5" />
              </div>
              <div>
              <p className="text-xs text-ink-subtle">{s.label}</p>
              <p className="text-xl font-bold text-ink">{s.value}</p>
              {s.sub && <p className="text-xs text-ink-subtle">{s.sub}</p>}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className=" bg-white p-4">
        <div className="mb-3 flex items-center justify-between">
          <h3 className="text-sm font-bold text-ink">Top Families by Members</h3>
          <Link href="/families/directory?sort=recent" className="text-xs font-semibold text-interactive-500 hover:underline">
            View All
          </Link>
        </div>
        <ul className="divide-y divide-border">
          {RECENT_FAMILIES.map((f) => (
            <li key={f.name} className="flex justify-between items-center gap-2.5 py-2.5">
              <div className="flex items-center gap-3">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-interactive-50 text-xs font-bold text-interactive-600">
                {initials(f.name)}
              </div>
              <div>
                <p className="text-sm font-semibold text-ink">{f.name}</p>
                {/* <p className="text-xs text-ink-subtle">Added on {f.date}</p> */}
              </div>
              </div>
              <div>
                <p className="text-xs text-ink-subtle border bg-slate-300 rounded-sm p-1">{f.date} Members</p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="m-4 flex items-start gap-2.5 rounded-lg border border-interactive-100 bg-interactive-50 p-4 text-sm text-interactive-700">
        <Info className="mt-0.5 h-4 w-4 shrink-0" />
        <p>Click on any family to view details and manage members.</p>
      </div>
    </div>
  );
}
