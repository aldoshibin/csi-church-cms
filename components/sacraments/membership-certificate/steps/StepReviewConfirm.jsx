import { User, FileText, MapPin, Phone, Info } from "lucide-react";
import { CertificatePreview } from "../CertificatePreview";

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
    <div className="flex flex-col gap-5 lg:flex-row">
      <div className="flex-1">
        <h2 className="text-lg font-bold text-ink">Review & Confirm</h2>
        <p className="mb-5 text-sm text-ink-subtle">Please review all the details below before confirming.</p>

        <div className="space-y-4">
          <ReviewCard icon={User} title="Member Information">
            <div className="grid grid-cols-2 gap-x-6 gap-y-3 text-[13px] sm:grid-cols-4">
              <KV k="Member Name" v="Mr. Thomas Mathew" />
              <KV k="Member ID" v="MEM-000125" />
              <KV k="Date of Birth" v="15 April 1985" />
              <KV k="Gender" v="Male" />
            </div>
          </ReviewCard>

          <ReviewCard icon={FileText} title="Certificate Information">
            <div className="grid grid-cols-2 gap-x-6 gap-y-3 text-[13px] sm:grid-cols-4">
              <KV k="Certificate Type" v="Membership Certificate" />
              <KV k="Certificate No." v="MC-2025-00429" />
              <KV k="Issue Date" v="22 May 2025" />
              <KV k="Valid For" v="6 Months" />
            </div>
          </ReviewCard>

          <ReviewCard icon={MapPin} title="Purpose & Delivery">
            <div className="space-y-3 text-[13px]">
              <div>
                <p className="text-ink-subtle">Purpose</p>
                <p className="text-ink">This certificate is issued for the purpose of applying for a bank loan.</p>
              </div>
              <div>
                <p className="text-ink-subtle">Delivery Address</p>
                <p className="text-ink">1/23, St. Mary's Street,</p>
                <p className="text-ink">Nagercoil, Tamil Nadu - 629001, India</p>
              </div>
              <KV k="Delivery Method" v="Download (PDF)" />
            </div>
          </ReviewCard>

          <ReviewCard icon={Phone} title="Contact Person (For Delivery)">
            <div className="grid grid-cols-2 gap-x-6 gap-y-3 text-[13px] sm:grid-cols-3">
              <KV k="Contact Person" v="Mr. John Mathew" />
              <KV k="Contact Number" v="+91 98765 67890" />
              <KV k="Email" v="john.mathew@email.com" />
            </div>
          </ReviewCard>
        </div>

        <div className="mt-5 flex items-start gap-2 rounded-md border border-interactive-100 bg-interactive-50 px-4 py-2.5 text-[13px] text-interactive-700">
          <Info className="mt-0.5 h-4 w-4 shrink-0" /> Please confirm the details to generate and issue the certificate.
        </div>
      </div>

      <div className="shrink-0 space-y-3">
        <CertificatePreview title="This is how the certificate will appear." />
        <div className="w-[340px] rounded-md border border-interactive-100 bg-interactive-50 px-4 py-2.5 text-[12px] text-interactive-700">
          After confirmation, the certificate will be generated with a unique certificate number.
        </div>
      </div>
    </div>
  );
}
