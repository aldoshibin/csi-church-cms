import { Pencil } from "lucide-react";
import { CARD_CLS } from "./fields";

function ReviewCard({ title, children }) {
  return (
    <div className={CARD_CLS}>
      <div className="mb-3 flex items-center justify-between">
        <h3 className="text-base font-bold text-ink">{title}</h3>
        <button type="button" className="flex items-center gap-1.5 rounded-md border border-border px-3 py-1.5 text-xs font-semibold text-ink hover:bg-surface-muted">
          <Pencil className="h-3.5 w-3.5" /> Edit
        </button>
      </div>
      {children}
    </div>
  );
}
function KV({ k, v }) {
  return (
    <div className="py-1.5">
      <p className="text-xs text-ink-subtle">{k}</p>
      <p className="text-sm font-semibold text-ink">{v}</p>
    </div>
  );
}

export function StepReviewConfirm({ form, members }) {
  return (
    <div>
      <div className="mb-4">
        <h2 className="text-lg font-bold text-ink">Review & Confirm</h2>
        <p className="text-sm text-ink-subtle">Please review all the information below. You can go back and edit any section if needed.</p>
      </div>

      <div className="space-y-4">
        <ReviewCard title="Family Details">
          <div className="grid grid-cols-1 gap-x-8 sm:grid-cols-2">
            <div>
              <KV k="Family ID (Auto)" v={form.family_id} />
              <KV k="Family Name" v={form.family_name || "—"} />
              <KV k="Family Head (Full Name)" v={form.family_head || "—"} />
              <KV k="Date of Birth" v="15/04/1982" />
              <KV k="Gender" v="Male" />
            </div>
            <div>
              <KV k="Marital Status" v="Married" />
              <KV k="Wedding Anniversary" v="22/07/2010" />
              <KV k="Occupation" v="Business" />
              <KV k="Family Type" v="Nuclear Family" />
              <KV k="Family Notes" v="No additional notes" />
            </div>
          </div>
        </ReviewCard>

        <ReviewCard title="Address & Contact Information">
          <div className="grid grid-cols-1 gap-x-8 sm:grid-cols-2">
            <div>
              <KV k="Address" v="123 Church Road, Nagercoil" />
              <KV k="Landmark" v="Near St. John's School" />
              <KV k="City / Town" v="Nagercoil" />
              <KV k="District" v="Kanyakumari" />
              <KV k="State" v="Tamil Nadu" />
            </div>
            <div>
              <KV k="Pincode" v="629001" />
              <KV k="Country" v="India" />
              <KV k="Primary Phone" v="+91 98765 43210" />
              <KV k="Alternate Phone" v="+91 91234 56789" />
              <KV k="Email ID" v="thomasfamily@gmail.com" />
            </div>
          </div>
        </ReviewCard>

        <ReviewCard title={`Family Members (${members.length} Members)`}>
          <div className="overflow-x-auto rounded-md border border-border">
            <table className="w-full min-w-[640px] text-left text-sm">
              <thead>
                <tr className="border-b border-border bg-surface-muted text-xs font-semibold text-ink-subtle">
                  <th className="px-3 py-2">S.No</th>
                  <th className="px-2 py-2">Full Name</th>
                  <th className="px-2 py-2">Relationship with Head</th>
                  <th className="px-2 py-2">Date of Birth</th>
                  <th className="px-2 py-2">Gender</th>
                  <th className="px-2 py-2">Marital Status</th>
                </tr>
              </thead>
              <tbody>
                {members.map((m, idx) => (
                  <tr key={idx} className="border-b border-border last:border-0">
                    <td className="px-3 py-2 text-ink-subtle">{idx + 1}</td>
                    <td className="px-2 py-2 font-medium text-ink">
                      {m.name} {m.relationship === "Self (Head)" && <span className="text-ink-subtle">(Head)</span>}
                    </td>
                    <td className="px-2 py-2 text-ink">{m.relationship === "Self (Head)" ? "Self (Head)" : m.relationship}</td>
                    <td className="px-2 py-2 text-ink">{m.dob}</td>
                    <td className="px-2 py-2 text-ink">{m.gender}</td>
                    <td className="px-2 py-2 text-ink">{m.marital_status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </ReviewCard>

        <ReviewCard title="Baptism Information (Family Head)">
          <div className="grid grid-cols-1 gap-x-8 sm:grid-cols-3">
            <KV k="Baptism Date" v="20/05/1982" />
            <KV k="Baptism Place" v="CSI St. John's Church, Nagercoil" />
            <KV k="Baptism Church" v="CSI St. John's Church" />
          </div>
          <div className="mt-1 grid grid-cols-1 gap-x-8 sm:grid-cols-2">
            <KV k="Baptism Certificate No." v="BC-1982-4587" />
            <KV k="Baptism Register No." v="BR-1982-0458" />
          </div>
        </ReviewCard>
      </div>
    </div>
  );
}
