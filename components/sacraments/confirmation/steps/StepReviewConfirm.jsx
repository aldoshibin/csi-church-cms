import { Users, BookHeart, FileText, Info, Pencil } from "lucide-react";
import { InfoBanner } from "../InfoBanner";
import { MOCK_DOCS } from "./StepDocumentsNotes";

function ReviewCard({ icon: Icon, title, children }) {
  return (
    <div className="rounded-lg border border-border bg-white p-4 shadow-card">
      <div className="mb-3 flex items-center justify-between">
        <h3 className="flex items-center gap-2 text-sm font-bold text-ink">
          <Icon className="h-4 w-4 text-interactive-500" /> {title}
        </h3>
        <button type="button" className="flex items-center gap-1 text-xs font-medium text-interactive-500 hover:underline">
          <Pencil className="h-3 w-3" /> Edit
        </button>
      </div>
      <div className="space-y-2.5 text-[13px]">{children}</div>
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
      <p className="mb-5 text-sm text-ink-subtle">Please review all the information carefully before saving the confirmation record.</p>

      <div className="mb-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <ReviewCard icon={Users} title="Child Information">
          <KV k="Full Name" v="John Mathew" />
          <KV k="Date of Birth" v="12 March 2012" />
          <KV k="Gender" v="Male" />
          <KV k="Address" v="Kollamthope, Nagercoil, Kanyakumari - 629001" />
        </ReviewCard>
        <ReviewCard icon={Users} title="Parents / Guardians">
          <KV k="Father's Name" v="Mathew John" />
          <KV k="Mother's Name" v="Rose Mary John" />
          <KV k="Mobile Number" v="+91 98765 43210" />
          <KV k="Email Address" v="mathew.john@email.com" />
        </ReviewCard>
        <ReviewCard icon={BookHeart} title="Confirmation Details">
          <KV k="Date of Confirmation" v="25 May 2025" />
          <KV k="Time of Confirmation" v="10:00 AM" />
          <KV k="Place / Venue" v="St. John's Church, Nagercoil" />
          <KV k="Celebrant" v="Rt. Rev. James Samuel" />
          <KV k="Reference No." v="CONF/2025/045" />
        </ReviewCard>
        <ReviewCard icon={Users} title="Sponsors">
          <div className="grid grid-cols-2 gap-2">
            <KV k="Sponsor 1" v="Annie Grace" />
            <KV k="Relationship" v="Aunt · +91 91234 56789" />
          </div>
          <div className="grid grid-cols-2 gap-2 pt-1">
            <KV k="Sponsor 2" v="Peter Samuel" />
            <KV k="Relationship" v="Uncle · +91 99876 54321" />
          </div>
        </ReviewCard>
        <ReviewCard icon={FileText} title="Documents & Notes">
          <p className="text-ink-subtle">Uploaded Documents ({MOCK_DOCS.length})</p>
          {MOCK_DOCS.map((d) => (
            <div key={d.name} className="flex items-center gap-1.5">
              <d.icon className={`h-3.5 w-3.5 ${d.color}`} /> <span className="text-ink">{d.name}</span> <span className="text-ink-subtle">{d.size}</span>
            </div>
          ))}
          <p className="pt-1 text-ink-subtle">Additional Notes</p>
          <p className="text-ink">Active participant in Sunday School and Youth Ministry.</p>
        </ReviewCard>
        <ReviewCard icon={Info} title="Record Information">
          <KV k="Record Entered By" v="Rev. Michael John" />
          <KV k="Date Recorded" v="20 May 2025" />
          <KV k="Record Status" v="Draft" />
          <KV k="Notes for Church Use" v="Will be finalized after parish council approval." />
        </ReviewCard>
      </div>

      <InfoBanner>Please confirm that all information provided is correct. After saving, you can generate the confirmation certificate.</InfoBanner>
    </div>
  );
}
