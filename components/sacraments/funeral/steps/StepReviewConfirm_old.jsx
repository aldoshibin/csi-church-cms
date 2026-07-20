import { User, HeartPulse, Cross, Users, FileText } from "lucide-react";

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

export function StepReviewConfirm() {
  return (
    <div>
      <h2 className="text-lg font-bold text-ink">Review & Confirm</h2>
      <p className="mb-5 text-sm text-ink-subtle">Please review all details before saving the funeral record.</p>

      <div className="space-y-4">
        <ReviewCard icon={User} title="Deceased Details">
          <KV k="Full Name" v="Mr. Thomas Mathew" />
          <KV k="Gender" v="Male" />
          <KV k="Date of Birth" v="15 Apr 1953" />
          <KV k="Age" v="72 Years" />
          <KV k="Religion" v="Christian" />
          <KV k="Denomination" v="CSI" />
          <KV k="Marital Status" v="Married" />
          <KV k="Occupation" v="Retired Teacher" />
          <KV k="Address" v="1/23, St. Mary's Street, Nagercoil, Tamil Nadu - 629001" />
          <KV k="Phone / Mobile" v="+91 98765 43210" />
          <KV k="Email" v="thomas.mathew@email.com" />
          <KV k="Blood Group" v="O+" />
        </ReviewCard>

        <ReviewCard icon={HeartPulse} title="Death Details">
          <KV k="Date of Death" v="20 May 2025" />
          <KV k="Time of Death" v="08:45 AM" />
          <KV k="Place of Death" v="General Hospital, Nagercoil" />
          <KV k="Type of Death" v="Natural" />
          <KV k="Cause of Death" v="Cardiac Arrest" />
          <KV k="Death Certificate No." v="DC/2025/1523" />
          <KV k="Duration of Illness" v="2 Years" />
          <KV k="Attended By" v="Dr. James Wilson" />
          <KV k="Last Rites At" v="CSI St. John's Church, Nagercoil on 20 May 2025 at 06:30 PM" />
        </ReviewCard>

        <ReviewCard icon={Cross} title="Funeral Details">
          <KV k="Funeral Date" v="22 May 2025" />
          <KV k="Funeral Time" v="10:30 AM" />
          <KV k="Place of Funeral Service" v="CSI St. John's Church, Nagercoil" />
          <KV k="Conducted By" v="Church" />
          <KV k="Officiated By" v="Rev. Michael John" />
          <KV k="Assisted By" v="—" />
          <KV k="Language" v="English" />
          <KV k="Music / Hymns" v="Yes" />
          <KV k="Scripture Readings" v="Psalm 23; 1 Corinthians 15:51-57" />
          <KV k="Sermon / Message" v="Entered peacefully into God's eternal rest." />
        </ReviewCard>

        <ReviewCard icon={Users} title="Family Details">
          <KV k="Spouse" v="Mrs. Mary Mathew" />
          <KV k="Son / Daughter" v="John Mathew" />
          <KV k="Phone" v="+91 98765 67890" />
          <KV k="Address" v="1/23, St. Mary's Street, Nagercoil, Tamil Nadu - 629001" />
        </ReviewCard>

        <ReviewCard icon={FileText} title="Documents">
          <div className="col-span-2">
            <p className="text-ink-subtle">Uploaded Documents</p>
            <p className="text-ink">funeral_order_001.pdf</p>
            <p className="text-ink">death_certificate_001.jpg</p>
          </div>
          <KV k="Undertaker" v="Grace Funeral Services" />
          <KV k="Grave / Plot No." v="C-12-45" />
          <KV k="Burial Location" v="St. John's Cemetery, Nagercoil" />
        </ReviewCard>
      </div>
    </div>
  );
}
