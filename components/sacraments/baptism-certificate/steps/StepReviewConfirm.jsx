import { User, Cross, Users, Church } from "lucide-react";

function ReviewCard({ icon: Icon, title, children }) {
  return (
    <div className="rounded-lg border border-border bg-white p-4 shadow-card">
      <div className="mb-3 flex items-center justify-between">
        <h3 className="flex items-center gap-2 text-sm font-bold text-ink">
          <Icon className="h-4 w-4 text-interactive-500" /> {title}
        </h3>
        <button type="button" className="flex items-center gap-1 text-xs font-medium text-interactive-500 hover:underline">
          Edit
        </button>
      </div>
      {children}
    </div>
  );
}
function KV({ k, v }) {
  return (
    <div>
      <p className="text-ink-subtle">{k}</p>
      <p className="font-semibold text-ink">{v}</p>
    </div>
  );
}

export function StepReviewConfirm() {
  return (
    <div>
      <h2 className="text-lg font-bold text-ink">Review & Confirm</h2>
      <p className="mb-5 text-sm text-ink-subtle">Please review all the details before confirming.</p>

      <div className="space-y-4">
        {/* 3 columns x 2 rows */}
        <ReviewCard icon={User} title="Member Details">
          <div className="grid grid-cols-2 gap-x-6 gap-y-3 text-[13px] sm:grid-cols-3">
            <KV k="Member Name" v="Emma Rose" />
            <KV k="Member ID" v="MEM-000145" />
            <KV k="Gender" v="Female" />
            <KV k="Date of Birth" v="12 May 2025" />
            <KV k="Place of Birth" v="Nagercoil" />
            <KV k="Phone Number" v="+91 98765 43210" />
          </div>
        </ReviewCard>

        {/* 3 columns x 2 rows */}
        <ReviewCard icon={Cross} title="Baptism Details">
          <div className="grid grid-cols-2 gap-x-6 gap-y-3 text-[13px] sm:grid-cols-3">
            <KV k="Baptism Date" v="12 May 2025" />
            <KV k="Place of Baptism" v="CSI Holy Trinity Church, Nagercoil" />
            <KV k="Time of Baptism" v="10:30 AM" />
            <KV k="Officiated By" v="Rev. David Samuel" />
            <KV k="Baptism Book No." v="05" />
            <KV k="Baptism Entry No." v="128" />
          </div>
        </ReviewCard>

        {/* 2 columns x 1 row — NOT 3 columns */}
        <ReviewCard icon={Users} title="Sponsors Details">
          <div className="grid grid-cols-2 gap-x-6 gap-y-3 text-[13px]">
            <KV k="Sponsor 1" v="Mr. John Mathew (Uncle)" />
            <KV k="Sponsor 2" v="Mrs. Rose Mary (Aunt)" />
          </div>
        </ReviewCard>

        {/* 2 columns x 3 rows, asymmetric — identity fields left, contact fields right */}
        <ReviewCard icon={Church} title="Parish Details">
          <div className="grid grid-cols-1 gap-x-8 gap-y-3 text-[13px] sm:grid-cols-2">
            <div className="space-y-3">
              <KV k="Diocese" v="Nagercoil Diocese" />
              <KV k="Parish / Church" v="CSI Holy Trinity Church, Nagercoil" />
              <KV k="Parish Priest" v="Rev. David Samuel" />
            </div>
            <div className="space-y-3">
              <KV k="Address" v="12, Church Street, Nagercoil - 629001, Tamil Nadu, India" />
              <KV k="Phone" v="+91 98765 67891" />
              <KV k="Email" v="holytrinitychurch@gmail.com" />
            </div>
          </div>
        </ReviewCard>
      </div>
    </div>
  );
}
