import { User, Users, FileText, Pencil } from "lucide-react";
import { InfoBanner } from "@/components/sacraments/confirmation/InfoBanner";

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
      <div className="grid grid-cols-2 gap-x-6 gap-y-3 text-[13px] sm:grid-cols-4">{children}</div>
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

export function StepConfirmationReview() {
  return (
    <div>
      <h2 className="text-lg font-bold text-ink">Confirmation</h2>
      <p className="mb-5 text-sm text-ink-subtle">Please review all information carefully before saving the record.</p>

      <div className="mb-4 space-y-4">
        <ReviewCard icon={User} title="Communicant Information">
          <KV k="Full Name" v="Alex Thomas" />
          <KV k="Date of Birth" v="12 March 2012" />
          <KV k="Age" v="13" />
          <KV k="Gender" v="Male" />
          <KV k="Address" v="Kollamthope, Nagercoil, Kanyakumari - 629001" />
          <KV k="Phone / Mobile" v="+91 91234 56789" />
          <KV k="Email" v="alex.thomas@email.com" />
          <KV k="Parish" v="St. John's Church, Nagercoil" />
        </ReviewCard>

        <ReviewCard icon={Users} title="Parent / Guardian Details">
          <KV k="Father Name" v="John Thomas" />
          <KV k="Father Religion" v="Christian" />
          <KV k="Father Phone" v="+91 93456 78901" />
          <KV k="Father Occupation" v="Teacher" />
          <KV k="Mother Name" v="Mary Thomas" />
          <KV k="Mother Religion" v="Christian" />
          <KV k="Mother Phone" v="+91 93456 78902" />
          <KV k="Mother Occupation" v="Homemaker" />
        </ReviewCard>

        <ReviewCard icon={FileText} title="Record Details">
          <KV k="Date of Holy Communion" v="25 May 2025" />
          <KV k="Time" v="10:00 AM" />
          <KV k="Place / Venue" v="St. John's Church, Nagercoil" />
          <KV k="Celebration Type" v="First Holy Communion" />
          <KV k="Class / Batch" v="Batch 2025" />
          <KV k="Catechism Class Attended" v="Yes" />
          <KV k="Officiated By" v="Rev. Michael John" />
          <KV k="Class Teacher / Instructor" v="Mrs. Ancy Grace" />
          <KV k="Date of Completion" v="10 May 2025" />
          <KV k="Certificate No." v="HC/2025/045" />
          <KV k="Register Folio No." v="045" />
          <KV k="Remarks" v="—" />
        </ReviewCard>
      </div>

      <InfoBanner>Please confirm that the above information is correct and complete.</InfoBanner>
    </div>
  );
}
