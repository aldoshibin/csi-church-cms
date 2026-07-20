"use client";

import { Baby, Users, Church, HeartHandshake, FileText, StickyNote, Pencil } from "lucide-react";
import { BAPTISM_TYPE_OPTIONS, GENDER_OPTIONS } from "@/utils/constants";

const GENDER_LABEL = Object.fromEntries(GENDER_OPTIONS.map((g) => [g.value, g.label]));
const TYPE_LABEL = Object.fromEntries(BAPTISM_TYPE_OPTIONS.map((t) => [t.value, t.label]));

function ReviewCard({ icon: Icon, title, onEdit, children, className = "" }) {
  return (
    <div className={`rounded-lg border border-border bg-white p-4 shadow-card ${className}`}>
      <div className="mb-3 flex items-center justify-between">
        <h3 className="flex items-center gap-2 text-sm font-semibold text-interactive-500">
          <Icon className="h-4 w-4" /> {title}
        </h3>
      </div>
      {children}
    </div>
  );
}

function Field({ label, value }) {
  return (
    <div>
      <p className="text-xs text-ink-subtle">{label}</p>
      <p className="text-sm font-medium text-ink">{value || "—"}</p>
    </div>
  );
}

export default function Step6ReviewConfirm({ form, nav, documents, requiredDocuments, onEditAll }) {
  const { register, getValues } = form;
  const v = getValues();
  const address = [v.address, v.city, v.pincode].filter(Boolean).join(", ");

  return (
    <div>
      <div className="mb-4 flex items-center justify-between">
        <div>
          <h2 className="font-display text-base font-semibold text-ink">Review &amp; Confirm</h2>
          <p className="text-sm text-ink-subtle">Please review all details before saving the baptism record.</p>
        </div>
        <button type="button" onClick={onEditAll} className="flex items-center gap-1.5 rounded-md border border-border px-3 py-1.5 text-xs font-medium text-interactive-500 hover:bg-surface-muted">
          <Pencil className="h-3.5 w-3.5" /> Edit Details
        </button>
      </div>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
        <ReviewCard icon={Baby} title="Child Information">
          <div className="space-y-2.5">
            <Field label="Child Baptism No." value="Auto-generated" />
            <Field label="Child Full Name" value={v.child_full_name} />
            <Field label="Gender" value={GENDER_LABEL[v.gender]} />
            <Field label="Date of Birth" value={v.date_of_birth} />
            <Field label="Place of Birth" value={v.place_of_birth} />
            <Field label="Nationality" value={v.child_nationality} />
            <Field label="Religion" value={v.child_religion} />
            <Field label="Address" value={address} />
          </div>
        </ReviewCard>

        <ReviewCard icon={Users} title="Parents / Guardians">
          <p className="mb-2 text-xs font-semibold text-ink">Father / Guardian</p>
          <div className="mb-4 space-y-2">
            <Field label="Full Name" value={v.father_name} />
            <Field label="Occupation" value={v.father_occupation} />
            <Field label="Phone" value={v.father_phone} />
            <Field label="Email" value={v.father_email} />
          </div>
          <p className="mb-2 text-xs font-semibold text-ink">Mother / Guardian</p>
          <div className="space-y-2">
            <Field label="Full Name" value={v.mother_name} />
            <Field label="Occupation" value={v.mother_occupation} />
            <Field label="Phone" value={v.mother_phone} />
            <Field label="Email" value={v.mother_email} />
          </div>
        </ReviewCard>

        <ReviewCard icon={Church} title="Baptism Details">
          <div className="space-y-2.5">
            <Field label="Date of Baptism" value={v.baptism_date} />
            <Field label="Time of Baptism" value={v.baptism_time} />
            <Field label="Place of Baptism" value={v.place_of_baptism} />
            <Field label="Officiated By" value={v.officiated_by} />
            <Field label="Denomination" value={v.denomination} />
            <Field label="Type of Baptism" value={TYPE_LABEL[v.baptism_type]} />
            <Field label="Baptism Certificate No." value={v.baptism_certificate_no} />
          </div>
        </ReviewCard>

        <ReviewCard icon={HeartHandshake} title="Godparents">
          <p className="mb-2 text-xs font-semibold text-ink">Godparent 1 {v.godparent1_same_as_father && "(Same as Father)"}</p>
          <div className="mb-4 space-y-2">
            <Field label="Name" value={v.godparent1_name} />
            <Field label="Relationship" value={v.godparent1_relationship} />
            <Field label="Phone" value={v.godparent1_phone} />
          </div>
          <p className="mb-2 text-xs font-semibold text-ink">Godparent 2</p>
          <div className="space-y-2">
            <Field label="Name" value={v.godparent2_name} />
            <Field label="Relationship" value={v.godparent2_relationship} />
            <Field label="Phone" value={v.godparent2_phone} />
          </div>
        </ReviewCard>

        <ReviewCard icon={FileText} title="Documents">
          <ul className="space-y-2">
            {requiredDocuments.map((doc) => (
              <li key={doc.key} className="flex items-center justify-between text-sm">
                <span className="text-ink">{doc.label}</span>
                <span className={documents[doc.key] ? "text-xs font-semibold text-success-600" : "text-xs text-ink-subtle"}>
                  {documents[doc.key] ? "Uploaded" : "Not uploaded"}
                </span>
              </li>
            ))}
          </ul>
        </ReviewCard>

        <ReviewCard icon={StickyNote} title="Additional Notes">
          <p className="text-sm text-ink">{v.additional_notes || "—"}</p>
        </ReviewCard>
      </div>

      <label className="mt-5 flex items-start gap-3 rounded-md bg-interactive-50 p-3">
        <input type="checkbox" className="mt-0.5 h-4 w-4 rounded border-border text-interactive-500 focus-visible:ring-interactive-500" {...register("confirmed")} />
        <span className="text-xs text-interactive-700">
          Please confirm that all the above information is correct. Once saved, the baptism record will be added to the register.
        </span>
      </label>

      {nav}
    </div>
  );
}
