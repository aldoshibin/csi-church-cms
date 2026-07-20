import { User, Users, BookHeart } from "lucide-react";

function ReviewCard({ icon: Icon, title, left, right }) {
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
      <div className="grid grid-cols-1 gap-x-8 gap-y-2 sm:grid-cols-2">
        <div className="space-y-2">{left}</div>
        <div className="space-y-2">{right}</div>
      </div>
    </div>
  );
}

function KVRow({ k, v }) {
  return (
    <div className="flex text-[13px]">
      <span className="w-44 shrink-0 text-ink-subtle">{k}</span>
      <span className="text-ink">: {v}</span>
    </div>
  );
}

export function StepReviewConfirm() {
  return (
    <div>
      <h2 className="text-lg font-bold text-ink">Review & Confirm</h2>
      <p className="mb-5 text-sm text-ink-subtle">Please review all the details below before confirming.</p>

      <div className="space-y-4">
        <ReviewCard
          icon={User}
          title="Confirmand Details"
          left={
            <>
              <KVRow k="Full Name" v="Anna Mary Thomas" />
              <KVRow k="Date of Birth" v="18/05/2008" />
              <KVRow k="Gender" v="Female" />
              <KVRow k="Baptism Date" v="12/05/2013" />
            </>
          }
          right={
            <>
              <KVRow k="Baptism Church / Parish" v="CSI St. John's Church, Nagercoil" />
              <KVRow k="Baptism Certificate No." v="BC-2013-0456" />
              <KVRow k="Address" v="12, Beach Road, Nagercoil, Tamil Nadu - 629001" />
              <KVRow k="Phone / Email" v="+91 98765 43210 / annamary@gmail.com" />
            </>
          }
        />

        <ReviewCard
          icon={Users}
          title="Sponsor Details"
          left={
            <>
              <KVRow k="Sponsor Name" v="John Mathew" />
              <KVRow k="Relationship" v="Uncle" />
              <KVRow k="Date of Birth" v="15/03/1980" />
              <KVRow k="Gender" v="Male" />
              <KVRow k="Marital Status" v="Married" />
            </>
          }
          right={
            <>
              <KVRow k="Occupation" v="Teacher" />
              <KVRow k="Address" v="45, Anna Street, Nagercoil, Tamil Nadu - 629001" />
              <KVRow k="Phone / Email" v="+91 96587 41236 / johnmathew@gmail.com" />
              <KVRow k="Parish / Church" v="CSI Christ Church, Nagercoil" />
            </>
          }
        />

        <ReviewCard
          icon={BookHeart}
          title="Confirmation Details"
          left={
            <>
              <KVRow k="Date of Confirmation" v="25/05/2025" />
              <KVRow k="Place of Confirmation" v="CSI St. John's Church, Nagercoil" />
              <KVRow k="Bishop / Presiding Minister" v="Rt. Rev. Dr. Sam P. Chelladurai" />
              <KVRow k="Conducted By" v="Rev. David Samuel" />
            </>
          }
          right={
            <>
              <KVRow k="Denomination" v="Church of South India (CSI)" />
              <KVRow k="Diocese" v="Nagercoil Diocese" />
              <KVRow k="Bible Verse" v="2 Timothy 1:7 – For God has not given us a spirit of fear, but of power and of love and of a sound mind." />
              <KVRow k="Remarks" v="-" />
            </>
          }
        />
      </div>
    </div>
  );
}
