"use client";

import { ClipboardList, User, Church, Home, Pencil } from "lucide-react";
import { GENDER_OPTIONS, MARITAL_STATUS_OPTIONS, BRANCH_CHURCH_OPTIONS } from "@/utils/constants";

const GENDER_LABEL = Object.fromEntries(GENDER_OPTIONS.map((g) => [g.value, g.label]));
const MARITAL_LABEL = Object.fromEntries(MARITAL_STATUS_OPTIONS.map((m) => [m.value, m.label]));

function ReviewCard({ icon: Icon, title, onEdit, children }) {
  return (
    <div className="rounded-lg border border-border bg-white p-5 shadow-card">
      <div className="mb-4 flex items-center justify-between">
        <h3 className="flex items-center gap-2 text-sm font-semibold text-interactive-500">
          <Icon className="h-4 w-4" /> {title}
        </h3>
        <button type="button" onClick={onEdit} className="flex items-center gap-1 text-xs font-medium text-interactive-500 hover:underline">
          <Pencil className="h-3 w-3" /> Edit
        </button>
      </div>
      <div className="grid grid-cols-1 gap-x-6 gap-y-3 sm:grid-cols-2 lg:grid-cols-4">{children}</div>
    </div>
  );
}

function Field({ label, value, full }) {
  return (
    <div className={full ? "lg:col-span-4" : undefined}>
      <p className="text-xs text-ink-subtle">{label}</p>
      <p className="text-sm font-medium text-ink">{value || "-"}</p>
    </div>
  );
}

export default function Step5DocumentsReview({ form, fullName, totalFamilyMembers, familySpouseName, familyChildrenCount, goToStep }) {
  const values = form.getValues();
  const ministryInterests = (values.ministry_interests || []).join(", ") || "-";
  const address = [values.address_line1, values.city, values.pincode].filter(Boolean).join(", ");
  const branchName = BRANCH_CHURCH_OPTIONS[Number(values.church_id) - 1] || "-";

  return (
    <div className="space-y-4">
      <section className="rounded-lg border border-border bg-white p-6 shadow-card">
        <h2 className="font-display text-base font-semibold text-ink">Review &amp; Confirm</h2>
        <p className="text-sm text-ink-subtle">Please review all the information below and upload the required documents. You can edit any section if needed.</p>
      </section>

      <ReviewCard icon={ClipboardList} title="Enrollment Summary" onEdit={() => goToStep(1)}>
        <Field label="Enrollment Date" value={values.enrollment_date} />
        <Field label="Referred By" value={values.referred_by} />
        <Field label="Source of Information" value={values.source_of_information} />
        <Field label="Reason for Joining" value={values.reason_for_joining} />
        <Field label="Membership Type" value={values.membership_type} />
        <Field label="Preferred Language" value={values.preferred_language} />
      </ReviewCard>

      <ReviewCard icon={User} title="Personal Information" onEdit={() => goToStep(2)}>
        <Field label="Name" value={fullName} />
        <Field label="Gender" value={GENDER_LABEL[values.gender]} />
        <Field label="Date of Birth" value={values.date_of_birth} />
        <Field label="Marital Status" value={MARITAL_LABEL[values.marital_status]} />
        <Field label="Mobile Number" value={values.phone_number} />
        <Field label="Email Address" value={values.email} />
        <Field label="Blood Group" value={values.blood_group} />
        <Field label="Nationality" value={values.nationality} />
        <Field label="Address" value={address} full />
      </ReviewCard>

      <ReviewCard icon={Church} title="Church Information" onEdit={() => goToStep(3)}>
        <Field label="Branch / Church" value={branchName} />
        <Field label="Membership Type" value={values.membership_type} />
        <Field label="Date of Joining" value={values.joined_date} />
        <Field label="Baptism Status" value={values.baptized === "YES" ? "Baptized" : values.baptized === "NO" ? "Not Baptized" : "-"} />
        <Field label="Ministry Interest" value={ministryInterests} full />
      </ReviewCard>

      <ReviewCard icon={Home} title="Family Information" onEdit={() => goToStep(4)}>
        <Field label="Family Head" value={values.family_head?.name} />
        <Field label="Family Name" value={values.family_name} />
        <Field label="Spouse" value={familySpouseName} />
        <Field label="Children" value={familyChildrenCount} />
        <Field label="Total Members" value={totalFamilyMembers} />
        <Field label="Residential Status" value={values.residential_status} />
        <Field label="Parish House / Locality" value={values.parish_house_locality} />
        <Field label="Family Occupation" value={values.family_occupation} />
      </ReviewCard>
    </div>
  );
}
