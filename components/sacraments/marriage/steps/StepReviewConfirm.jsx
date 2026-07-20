import { User, Heart, Users } from "lucide-react";
import { InfoBanner } from "@/components/sacraments/confirmation/InfoBanner";

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
      <p className="mb-5 text-sm text-ink-subtle">Please review all the details before saving the marriage record.</p>

      <div className="space-y-4">
        <ReviewCard icon={User} title="Groom Details">
          <div className="grid grid-cols-2 gap-x-6 gap-y-3 text-[13px] sm:grid-cols-4">
            <KV k="Full Name" v="Alex Thomas" />
            <KV k="Date of Birth" v="15 Mar 1990" />
            <KV k="Age" v="34" />
            <KV k="Marital Status" v="Bachelor" />
            <KV k="Phone / Mobile" v="+91 98765 43210" />
            <KV k="Email" v="alex.thomas@email.com" />
            <KV k="Religion" v="Christian" />
            <KV k="Denomination" v="CSI - Church of South India" />
            <KV k="Occupation" v="Software Engineer" />
            <KV k="Education" v="B.E. - Computer Science" />
            <KV k="Address" v="1/23, St. Mary's Street, Nagercoil, Tamil Nadu - 629001" />
          </div>
        </ReviewCard>

        <ReviewCard icon={User} title="Bride Details">
          <div className="grid grid-cols-2 gap-x-6 gap-y-3 text-[13px] sm:grid-cols-4">
            <KV k="Full Name" v="Maria Grace" />
            <KV k="Date of Birth" v="22 Jul 1993" />
            <KV k="Age" v="30" />
            <KV k="Marital Status" v="Spinster" />
            <KV k="Phone / Mobile" v="+91 91234 56789" />
            <KV k="Email" v="maria.grace@email.com" />
            <KV k="Religion" v="Christian" />
            <KV k="Denomination" v="CSI - Church of South India" />
            <KV k="Occupation" v="Teacher" />
            <KV k="Education" v="M.A. - English" />
            <KV k="Address" v="12/8, Peace Garden, Kanyakumari, Tamil Nadu - 629702" />
          </div>
        </ReviewCard>

        <ReviewCard icon={Heart} title="Marriage Details">
          <div className="grid grid-cols-2 gap-x-6 gap-y-3 text-[13px] sm:grid-cols-4">
            <KV k="Date of Marriage" v="25 May 2025" />
            <KV k="Time of Marriage" v="11:30 AM" />
            <KV k="Place / Church" v="St. John's Church, Nagercoil" />
            <KV k="Type of Ceremony" v="Church Wedding" />
            <KV k="Officiated By" v="Rev. Michael John" />
            <KV k="Designation" v="Parish Priest" />
            <KV k="License Number" v="TN-2025-001245" />
            <KV k="Scripture Readings" v="1 Corinthians 13:4-8" />
            <KV k="Remarks" v="Marriage conducted as per Church rites and customs." />
          </div>
        </ReviewCard>

        <ReviewCard icon={Users} title="Witness Details">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div>
              <p className="mb-1 text-xs font-semibold text-ink-subtle">Witness 1</p>
              <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-[13px]">
                <KV k="Name" v="John Daniel" />
                <KV k="Age" v="32" />
                <KV k="Relationship" v="Friend" />
                <KV k="Phone" v="+91 98765 11223" />
              </div>
            </div>
            <div>
              <p className="mb-1 text-xs font-semibold text-ink-subtle">Witness 2</p>
              <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-[13px]">
                <KV k="Name" v="Ancy Binu" />
                <KV k="Age" v="28" />
                <KV k="Relationship" v="Sister" />
                <KV k="Phone" v="+91 95678 22345" />
              </div>
            </div>
            <div>
              <p className="mb-1 text-xs font-semibold text-ink-subtle">Witness 3</p>
              <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-[13px]">
                <KV k="Name" v="Sanjay Kumar" />
                <KV k="Age" v="35" />
                <KV k="Relationship" v="Brother" />
                <KV k="Phone" v="+91 98989 33445" />
              </div>
            </div>
          </div>
        </ReviewCard>
      </div>

      <div className="mt-4">
        <InfoBanner>Please review all the details carefully. You can go back and edit if needed before saving.</InfoBanner>
      </div>
    </div>
  );
}
