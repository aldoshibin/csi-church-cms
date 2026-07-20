"use client";

import * as React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { useAuth } from "@/contexts/AuthContext";
import { useToast } from "@/contexts/ToastContext";
import { addBaptismSchema } from "@/lib/validation";

export const BAPTISM_STEPS = [
  { key: 1, title: "Child Information", subtitle: "Enter child details", fields: ["baptism_date", "baptism_time", "child_full_name", "gender", "date_of_birth", "place_of_birth", "child_nationality", "child_religion", "address", "city", "state", "pincode", "country"] },
  { key: 2, title: "Parents / Guardians", subtitle: "Enter parents details", fields: ["father_name", "father_occupation", "father_phone", "father_email", "father_nationality", "father_religion", "mother_name", "mother_occupation", "mother_phone", "mother_email", "mother_nationality", "mother_religion", "mother_is_guardian"] },
  { key: 3, title: "Baptism Details", subtitle: "Enter baptism information", fields: ["place_of_baptism", "church_id", "officiated_by", "denomination", "baptism_type", "baptism_certificate_no", "baptism_service_type", "bible_reading", "sermon_title", "remarks"] },
  { key: 4, title: "Godparents", subtitle: "Enter godparents details", fields: [] },
  { key: 5, title: "Documents & Notes", subtitle: "Upload documents (optional)", fields: ["additional_notes"] },
  { key: 6, title: "Review & Confirm", subtitle: "Review and save record", fields: [] },
];

const REQUIRED_DOCUMENTS = [
  { key: "child_birth_certificate", label: "Child Birth Certificate", required: true },
  { key: "parents_id_proof", label: "Parents' ID Proof", required: true },
  { key: "address_proof", label: "Address Proof", required: false },
  { key: "church_membership_proof", label: "Church Membership Proof", required: false },
];

export function useAddBaptismForm() {
  const { user } = useAuth();
  const { toast } = useToast();
  const [currentStep, setCurrentStep] = React.useState(1);
  const [completedSteps, setCompletedSteps] = React.useState([]);
  const [documents, setDocuments] = React.useState({});
  const [savedRecord, setSavedRecord] = React.useState(null);

  const form = useForm({
    resolver: zodResolver(addBaptismSchema),
    defaultValues: {
      baptism_date: "",
      baptism_time: "",
      gender: "",
      child_nationality: "Indian",
      child_religion: "Christian",
      country: "India",
      father_nationality: "Indian",
      father_religion: "Christian",
      mother_nationality: "Indian",
      mother_religion: "Christian",
      mother_is_guardian: "YES",
      church_id: user?.church?.id ?? "",
      baptism_type: "INFANT",
      godparent1_same_as_father: false,
      confirmed: false,
    },
  });

  const { trigger, watch, setValue, getValues, handleSubmit } = form;

  const goToStep = (step) => setCurrentStep(step);

  const goNext = async () => {
    const stepDef = BAPTISM_STEPS.find((s) => s.key === currentStep);
    const valid = stepDef.fields.length ? await trigger(stepDef.fields) : true;
    if (!valid) return false;
    setCompletedSteps((prev) => Array.from(new Set([...prev, currentStep])));
    setCurrentStep((s) => Math.min(s + 1, BAPTISM_STEPS.length));
    return true;
  };

  const goPrevious = () => setCurrentStep((s) => Math.max(s - 1, 1));

  const setDocument = (key, file) => setDocuments((prev) => ({ ...prev, [key]: file }));

  // Godparent 1 "Same as Father" — copy the father's fields across live.
  const applySameAsFather = (checked) => {
    setValue("godparent1_same_as_father", checked);
    if (checked) {
      const v = getValues();
      setValue("godparent1_name", v.father_name);
      setValue("godparent1_relationship", "Father");
      setValue("godparent1_occupation", v.father_occupation);
      setValue("godparent1_phone", v.father_phone);
      setValue("godparent1_email", v.father_email);
      setValue("godparent1_nationality", v.father_nationality);
      setValue("godparent1_religion", v.father_religion);
    }
  };

  const submit = handleSubmit(async (values) => {
    // No real backend to save to (see lib/validation.js's comment) — this
    // just builds the Record Summary shown on the success screen from
    // whatever was actually entered, rather than calling a fake API.
    const certificateNo = values.baptism_certificate_no?.trim() || `BC-${new Date().getFullYear()}-${String(Math.floor(Math.random() * 9000) + 1000)}`;
    const record = {
      certificateNo,
      childName: values.child_full_name,
      date: values.baptism_date,
      church: values.church_id ? "CSI St. John's Church, Kottayam" : "—",
      baptismType: values.baptism_type === "INFANT" ? "Infant Baptism" : values.baptism_type === "ADULT" ? "Adult Baptism" : "Re-Baptism",
      savedOn: new Date().toLocaleString("en-IN", { day: "2-digit", month: "short", year: "numeric", hour: "2-digit", minute: "2-digit" }),
      savedBy: user?.full_name || "—",
    };
    setSavedRecord(record);
    toast({ variant: "success", title: "Baptism record saved" });
    return { ok: true, data: record };
  });

  const resetWizard = () => {
    form.reset();
    setDocuments({});
    setSavedRecord(null);
    setCompletedSteps([]);
    setCurrentStep(1);
  };

  return {
    form,
    currentStep,
    completedSteps,
    goToStep,
    goNext,
    goPrevious,
    documents,
    setDocument,
    requiredDocuments: REQUIRED_DOCUMENTS,
    applySameAsFather,
    isSubmitting: form.formState.isSubmitting,
    submit,
    savedRecord,
    resetWizard,
  };
}
