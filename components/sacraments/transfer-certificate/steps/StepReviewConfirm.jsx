import { User, Building2, FileText } from "lucide-react";

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
      <div className="grid grid-cols-2 gap-x-6 gap-y-3 text-[13px] sm:grid-cols-3">{children}</div>
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
        <p className="mb-5 text-sm text-ink-subtle">Please review all details before confirming and generating the certificate.</p>

        <div className="space-y-4">
          <ReviewCard icon={User} title="Member Information">
            <KV k="Member Name" v="Mr. Thomas Mathew" />
            <KV k="Member ID" v="MEM-000125" />
            <KV k="Date of Birth" v="15 April 1985" />
            <KV k="Gender" v="Male" />
            <KV k="Phone Number" v="+91 98765 67891" />
            <KV k="Email" v="thomas.mathew@email.com" />
            <div className="col-span-2 sm:col-span-3"><KV k="Address" v="1/23, St. Mary's Street, Nagercoil, Tamil Nadu - 629001" /></div>
          </ReviewCard>

          <ReviewCard icon={Building2} title="From Parish (Current Parish)">
            <KV k="Diocese" v="Nagercoil Diocese" />
            <KV k="Parish / Church" v="CSI Holy Trinity Church, Nagercoil" />
            <KV k="Parish Priest / In-Charge" v="Rev. David Samuel" />
          </ReviewCard>

          <ReviewCard icon={Building2} title="To Parish (Transferring Parish)">
            <KV k="Diocese" v="Nagercoil Diocese" />
            <KV k="Parish / Church" v="CSI St. Peter's Church, Chennai" />
            <KV k="Parish Priest / In-Charge" v="Rev. John Ebenezer" />
          </ReviewCard>

          <ReviewCard icon={FileText} title="Additional Information">
            <KV k="Reason for Transfer" v="Transfer to another Parish" />
            <KV k="Transfer Date" v="25 May 2025" />
            <KV k="Supporting Document" v="transfer_request.pdf" />
            <div className="col-span-2 sm:col-span-3"><KV k="Detailed Reason" v="Member is relocating to another city and requests transfer to the parish near the new residence." /></div>
            <div className="col-span-2 sm:col-span-3"><KV k="Special Instructions" v="Kindly receive the member and update your records." /></div>
          </ReviewCard>
        </div>

        <label className="mt-5 flex items-start gap-2.5 rounded-md border border-border bg-surface-canvas px-4 py-3 text-sm text-ink">
          <input type="checkbox" defaultChecked className="mt-0.5" />
          I have reviewed the above details and confirm that the information is correct.
        </label>
    </div>
  );
}
