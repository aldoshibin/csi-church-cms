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

const CHILDREN = [
  { name: "John Wilson", dob: "15 Jun 1985", gender: "Male", occupation: "Engineer", phone: "98765 43210" },
  { name: "Sarah Wilson", dob: "22 Aug 1988", gender: "Female", occupation: "Nurse", phone: "91234 56789" },
  { name: "David Wilson", dob: "10 Jan 1992", gender: "Male", occupation: "Businessman", phone: "99887 76655" },
  { name: "Rachel Wilson", dob: "05 May 1995", gender: "Female", occupation: "Teacher", phone: "88776 65544" },
];

export function StepReviewConfirm() {
  return (
    <div>
      <h2 className="text-lg font-bold text-ink">Review & Confirm</h2>
      <p className="mb-5 text-sm text-ink-subtle">Please review all details before saving the funeral record.</p>

      <div className="space-y-4">
        <ReviewCard icon={User} title="Deceased Details">
          <div className="grid grid-cols-2 gap-x-6 gap-y-3 text-[13px] sm:grid-cols-4">
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
          </div>
        </ReviewCard>

        <ReviewCard icon={HeartPulse} title="Death Details">
          <div className="grid grid-cols-2 gap-x-6 gap-y-3 text-[13px] sm:grid-cols-4">
            <KV k="Date of Death" v="20 May 2025" />
            <KV k="Time of Death" v="08:45 AM" />
            <KV k="Place of Death" v="General Hospital, Nagercoil" />
            <KV k="Type of Death" v="Natural" />
            <KV k="Cause of Death" v="Cardiac Arrest" />
            <KV k="Death Certificate No." v="DC/2025/1523" />
            <KV k="Duration of Illness" v="2 Years" />
            <KV k="Attended By" v="Dr. James Wilson" />
            <KV k="Last Rites At" v="CSI St. John's Church, Nagercoil on 20 May 2025 at 06:30 PM" />
          </div>
        </ReviewCard>

        <ReviewCard icon={Cross} title="Funeral Details">
          <div className="grid grid-cols-2 gap-x-6 gap-y-3 text-[13px] sm:grid-cols-4">
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
          </div>
        </ReviewCard>

        <ReviewCard icon={Users} title="Family Details">
          <div className="mb-4">
            <p className="mb-2 text-xs font-semibold text-ink-subtle">Spouse & Parent Information</p>
            <div className="grid grid-cols-2 gap-x-6 gap-y-3 text-[13px] sm:grid-cols-4">
              <KV k="Spouse Name" v="Mary Wilson" />
              <KV k="Spouse Date of Birth" v="12 Mar 1962" />
              <KV k="Spouse Religion" v="Christian" />
              <KV k="Spouse Occupation" v="Retired Teacher" />
              <KV k="Father's Name" v="Late. Joseph Wilson" />
              <KV k="Mother's Name" v="Late. Anna Wilson" />
            </div>
          </div>

          <p className="mb-2 text-xs font-semibold text-ink-subtle">Children ({CHILDREN.length})</p>
          <div className="overflow-hidden rounded-md border border-border">
            <table className="w-full text-left text-[12.5px]">
              <thead>
                <tr className="border-b border-border bg-surface-muted text-xs font-semibold text-ink-subtle">
                  <th className="px-3 py-2">Full Name</th>
                  <th className="px-2 py-2">Date of Birth</th>
                  <th className="px-2 py-2">Gender</th>
                  <th className="px-2 py-2">Occupation</th>
                  <th className="px-2 py-2">Contact Number</th>
                </tr>
              </thead>
              <tbody>
                {CHILDREN.map((c) => (
                  <tr key={c.name} className="border-b border-border last:border-0">
                    <td className="px-3 py-2 font-semibold text-ink">{c.name}</td>
                    <td className="px-2 py-2 text-ink">{c.dob}</td>
                    <td className="px-2 py-2 text-ink">{c.gender}</td>
                    <td className="px-2 py-2 text-ink">{c.occupation}</td>
                    <td className="px-2 py-2 text-ink">{c.phone}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </ReviewCard>

        <ReviewCard icon={FileText} title="Documents">
          <div className="grid grid-cols-2 gap-x-6 gap-y-3 text-[13px] sm:grid-cols-4">
            <div className="col-span-2">
              <p className="text-ink-subtle">Uploaded Documents</p>
              <p className="text-ink">funeral_order_001.pdf</p>
              <p className="text-ink">death_certificate_001.jpg</p>
            </div>
            <KV k="Undertaker" v="Grace Funeral Services" />
            <KV k="Grave / Plot No." v="C-12-45" />
            <KV k="Burial Location" v="St. John's Cemetery, Nagercoil" />
          </div>
        </ReviewCard>
      </div>
    </div>
  );
}
