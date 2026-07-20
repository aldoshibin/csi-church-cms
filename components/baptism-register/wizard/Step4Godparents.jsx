"use client";

import * as React from "react";
import { useFieldArray } from "react-hook-form";
import {
  Plus, Trash2, Info, UploadCloud, FileText, FileCheck2, MessageSquareText,
  ShieldCheck, CheckCircle2, User, Church,
} from "lucide-react";
import { Input, Select, Textarea } from "@/components/ui/Input";
import { RELIGION_OPTIONS, GODPARENT_RELATIONSHIP_OPTIONS } from "@/utils/constants";

const YES_NO_FIELDS = [
  { key: "baptized", label: "Baptized" },
  { key: "confirmed", label: "Confirmed" },
  { key: "active_member", label: "Active Church Member" },
];

function YesNoField({ label, name, register, watch }) {
  const val = watch(name);
  return (
    <div>
      <label className="mb-1.5 block text-sm font-medium text-ink">
        {label} <span className="text-danger-500">*</span>
      </label>
      <div className="flex items-center gap-6 pt-1">
        <label className="flex items-center gap-2 text-sm text-ink">
          <input
            type="radio"
            value="YES"
            checked={val === "YES"}
            className="h-4 w-4 border-border text-interactive-500 focus-visible:ring-interactive-500"
            {...register(name)}
          />
          Yes
        </label>
        <label className="flex items-center gap-2 text-sm text-ink">
          <input
            type="radio"
            value="NO"
            checked={val === "NO"}
            className="h-4 w-4 border-border text-interactive-500 focus-visible:ring-interactive-500"
            {...register(name)}
          />
          No
        </label>
      </div>
    </div>
  );
}

function GodparentColumn({ register, watch, errors, prefix, title }) {
  return (
    <div>
      <h3 className="mb-3 flex items-center gap-2 text-sm font-semibold text-interactive-500">
        <User className="h-4 w-4" /> {title}
      </h3>

      <p className="mb-2 flex items-center gap-1.5 text-xs font-semibold text-ink-subtle">
        <User className="h-3.5 w-3.5" /> Personal Information
      </p>
      <div className="grid grid-cols-1 gap-x-6 gap-y-5 md:grid-cols-3">
        <Input
          label="Full Name"
          required
          placeholder="Enter full name"
          error={errors[`${prefix}_name`]?.message}
          {...register(`${prefix}_name`)}
        />
        <Input label="Date of Birth" type="date" {...register(`${prefix}_dob`)} />
        <Input
          label="Mobile Number"
          required
          placeholder="Enter mobile number"
          error={errors[`${prefix}_phone`]?.message}
          {...register(`${prefix}_phone`)}
        />
      </div>
      <div className="mt-5 grid grid-cols-1 gap-x-6 gap-y-5 md:grid-cols-2">
        <Input label="Email Address" type="email" placeholder="Enter email address" {...register(`${prefix}_email`)} />
        <Input label="Occupation" placeholder="Enter occupation" {...register(`${prefix}_occupation`)} />
      </div>

      <p className="mb-2 mt-5 flex items-center gap-1.5 text-xs font-semibold text-ink-subtle">
        <Church className="h-3.5 w-3.5" /> Church Information
      </p>
      <div className="grid grid-cols-1 gap-x-6 gap-y-5 md:grid-cols-3">
        <Input
          label="Church / Parish"
          required
          placeholder="Search church / parish"
          error={errors[`${prefix}_church`]?.message}
          {...register(`${prefix}_church`)}
        />
        <Select label="Diocese" {...register(`${prefix}_diocese`)}>
          <option value="">Select diocese</option>
        </Select>
        <Select label="Denomination" required {...register(`${prefix}_denomination`)}>
          <option value="">Select denomination</option>
          {RELIGION_OPTIONS.map((opt) => (
            <option key={opt}>{opt}</option>
          ))}
        </Select>
      </div>

      <div className="mt-5 grid grid-cols-1 gap-x-6 gap-y-5 md:grid-cols-3">
        {YES_NO_FIELDS.map((f) => (
          <YesNoField key={f.key} label={f.label} name={`${prefix}_${f.key}`} register={register} watch={watch} />
        ))}
      </div>
    </div>
  );
}

/** Read-only-styled summary card for an already-added sponsor — matches
 * the screenshot's plain label/value layout with a circular avatar icon,
 * rather than looking like an editable form. Fields stay wired to
 * react-hook-form underneath (via `register`) so data is still captured;
 * only the visual chrome is stripped down (no borders/backgrounds on the
 * inputs themselves) to read as static text. */
function SponsorCard({ index, register, onRemove }) {
  const fieldCls = "w-full border-0 bg-transparent p-0 text-[13px] font-semibold text-ink placeholder:font-normal placeholder:text-ink-subtle focus:outline-none focus:ring-0";
  return (
    <div className="relative rounded-md border border-border p-3">
      <button type="button" aria-label="Remove sponsor" onClick={onRemove} className="absolute right-2 top-2 text-danger-500">
        <Trash2 className="h-3.5 w-3.5" />
      </button>

      <div className="mb-2.5 flex items-center gap-2">
        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-interactive-50 text-interactive-600">
          <User className="h-4 w-4" />
        </div>
        <div className="min-w-0 flex-1">
          <p className="text-[11px] text-ink-subtle">Sponsor Name</p>
          <input className={fieldCls} placeholder="Enter name" {...register(`additional_sponsors.${index}.name`)} />
        </div>
      </div>

      <p className="text-[11px] text-ink-subtle">Relationship</p>
      <select className={fieldCls + " mb-2"} {...register(`additional_sponsors.${index}.relationship`)}>
        <option value="">Select relationship</option>
        {GODPARENT_RELATIONSHIP_OPTIONS.map((opt) => (
          <option key={opt}>{opt}</option>
        ))}
      </select>

      <p className="text-[11px] text-ink-subtle">Church</p>
      <input className={fieldCls + " mb-2"} placeholder="Enter church" {...register(`additional_sponsors.${index}.church`)} />

      <p className="text-[11px] text-ink-subtle">Mobile Number</p>
      <input className={fieldCls} placeholder="Enter mobile number" {...register(`additional_sponsors.${index}.phone`)} />
    </div>
  );
}

const SPONSOR_DOC_TYPES = [
  { key: "baptism_certificate", title: "Baptism Certificate", icon: FileText, color: "text-danger-500" },
  { key: "confirmation_certificate", title: "Confirmation Certificate", icon: FileCheck2, color: "text-blue-500" },
  { key: "recommendation_letter", title: "Recommendation Letter", icon: MessageSquareText, color: "text-success-500" },
  { key: "membership_letter", title: "Church Membership Letter", icon: ShieldCheck, color: "text-violet-500" },
];

/**
 * Local-only upload state — not yet wired to the parent form/hook, since
 * Step4's current prop contract (`{ form, nav }`) doesn't pass
 * `documents`/`setDocument` the way Step5 does. Swap the inner
 * useState for real props once the parent wizard hook exposes them.
 */
function GodparentDocumentsGrid() {
  const [files, setFiles] = React.useState({});
  const inputRefs = React.useRef({});

  return (
    <div className="grid grid-cols-2 gap-3">
      {SPONSOR_DOC_TYPES.map((doc) => {
        const file = files[doc.key];
        return (
          <div key={doc.key} className="rounded-md border border-border p-3">
            <div className="mb-2 flex items-start gap-2">
              <doc.icon className={`mt-0.5 h-4 w-4 shrink-0 ${doc.color}`} />
              <p className="text-xs font-semibold leading-tight text-ink">{doc.title}</p>
            </div>
            <input
              ref={(el) => (inputRefs.current[doc.key] = el)}
              type="file"
              accept=".jpg,.jpeg,.png,.pdf"
              className="hidden"
              onChange={(e) => e.target.files?.[0] && setFiles((prev) => ({ ...prev, [doc.key]: e.target.files[0] }))}
            />
            <button
              type="button"
              onClick={() => inputRefs.current[doc.key]?.click()}
              className="flex w-full flex-col items-center justify-center gap-1 rounded-md border-2 border-dashed border-border py-3"
            >
              <UploadCloud className="h-4 w-4 text-ink-subtle" />
              <span className="text-[11px] text-ink-subtle">Drag & Drop or Browse</span>
            </button>
            {file && (
              <p className="mt-1.5 flex items-center gap-1 text-[11px] font-medium text-success-600">
                <CheckCircle2 className="h-3 w-3" /> {file.name}
              </p>
            )}
          </div>
        );
      })}
    </div>
  );
}

const SPONSOR_SEED = [
  { name: "Michael Thomas", relationship: "Uncle", church: "St. John's Church", phone: "9876543210" },
  { name: "Linda Mary", relationship: "Aunt", church: "Holy Family Church", phone: "9123456780" },
  { name: "Joseph Mathew", relationship: "Family Friend", church: "St. Mary's Church", phone: "9988776655" },
];

export default function Step4Godparents({ form, nav }) {
  const { register, watch, control, formState: { errors } } = form;
  const { fields, append, remove } = useFieldArray({ control, name: "additional_sponsors" });

  // Seed the 3 demo sponsors once on mount if the array starts empty —
  // without this, useFieldArray renders zero cards until the user
  // manually clicks "Add Another Sponsor" three times.
  const didSeed = React.useRef(false);
  React.useEffect(() => {
    if (!didSeed.current && fields.length === 0) {
      didSeed.current = true;
      SPONSOR_SEED.forEach((s) => append(s));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <h2 className="font-display text-base font-semibold text-ink">Godparents</h2>
      <p className="mb-5 text-sm text-ink-subtle">Enter the details of the child's godparents.</p>

      <div className="grid grid-cols-1 gap-x-8 gap-y-8 lg:grid-cols-2">
        <GodparentColumn register={register} watch={watch} errors={errors} prefix="godfather" title="Primary Godfather" />
        <GodparentColumn register={register} watch={watch} errors={errors} prefix="godmother" title="Primary Godmother" />
      </div>

      <div className="mt-6">
        <h3 className="mb-1 text-sm font-semibold text-interactive-500">Additional Sponsors (Optional)</h3>
        <p className="mb-3 text-xs text-ink-subtle">Add other sponsors if applicable.</p>

        {fields.length > 0 && (
          <div className="mb-3 grid grid-cols-1 gap-3 sm:grid-cols-3">
            {fields.map((field, index) => (
              <SponsorCard key={field.id} index={index} register={register} onRemove={() => remove(index)} />
            ))}
          </div>
        )}

        <button
          type="button"
          onClick={() => append({ name: "", relationship: "", church: "", phone: "" })}
          className="flex w-full items-center justify-center gap-1.5 rounded-md border-2 border-dashed border-border py-2.5 text-sm font-semibold text-interactive-500 hover:bg-interactive-50"
        >
          <Plus className="h-4 w-4" /> Add Another Sponsor
        </button>
        <p className="mt-2 flex items-center gap-1.5 text-xs text-ink-subtle">
          <Info className="h-3.5 w-3.5" /> Maximum number of additional sponsors is configurable from System Settings.
        </p>
      </div>

      {/* Declaration + Supporting Documents sit side by side, not stacked */}
      <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-2">
        <div>
          <h3 className="mb-2 text-sm font-semibold text-interactive-500">Declaration</h3>
          <label className="flex items-start gap-2.5 text-sm text-ink">
            <input
              type="checkbox"
              defaultChecked
              className="mt-0.5 h-4 w-4 rounded border-border text-interactive-500 focus-visible:ring-interactive-500"
              {...register("godparents_declaration")}
            />
            I confirm that the above godparents satisfy the church requirements for baptism sponsorship.
          </label>
        </div>

        <div>
          <h3 className="mb-1 text-sm font-semibold text-interactive-500">Supporting Documents (Optional)</h3>
          <p className="mb-3 text-xs text-ink-subtle">Upload supporting documents related to godparents.</p>
          <GodparentDocumentsGrid />
          <p className="mt-2 flex items-center gap-1.5 text-xs text-ink-subtle">
            <Info className="h-3.5 w-3.5" /> Supports: PDF, JPG, PNG (Max size 10 MB each).
          </p>
        </div>
      </div>

      <div className="mt-6">
        <Textarea label="Remarks" rows={3} placeholder="Enter any notes regarding godparents..." {...register("godparents_remarks")} />
      </div>

      <div className="mt-5 rounded-md bg-interactive-50 p-3 text-xs text-interactive-700">
        Godparents should normally be baptized and confirmed members who actively participate in church life according to parish guidelines.
      </div>

      {nav}
    </div>
  );
}
