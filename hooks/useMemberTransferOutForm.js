"use client";

import * as React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { memberService } from "@/services/memberService";
import { useAuth } from "@/contexts/AuthContext";
import { useToast } from "@/contexts/ToastContext";
import { memberTransferOutSchema } from "@/lib/validation";

export const TRANSFER_OUT_STEPS = [
  { key: 1, label: "Transfer Request", fields: ["transfer_out_date", "requested_by", "request_type", "reason_category", "requested_certificate_type", "priority", "reason_for_transfer", "additional_notes", "matched_member"] },
  { key: 2, label: "Member Information", fields: ["first_name", "middle_name", "last_name", "gender", "date_of_birth", "marital_status", "blood_group", "phone_number", "email", "membership_number", "family_id", "address_line1", "address_line2", "city", "state", "district", "pincode", "family_head_name", "relationship_with_head", "family_member_count", "transfer_scope"] },
  { key: 3, label: "Destination Church", fields: ["destination_church_name", "destination_diocese_parish", "destination_church_address", "destination_state", "destination_district", "destination_country", "destination_contact_person", "destination_designation", "destination_email", "destination_mobile", "destination_landline", "certificate_delivery", "current_branch_church", "date_of_membership", "transfer_certificate_no", "baptism_register_no", "confirmation_date", "communion_date"] },
  { key: 4, label: "Documents & Review" },
];

export function useMemberTransferOutForm() {
  const { user } = useAuth();
  const { toast } = useToast();
  const currentChurchName = user?.church?.name || "";

  const [currentStep, setCurrentStep] = React.useState(1);
  const [completedSteps, setCompletedSteps] = React.useState([]);
  const [documents, setDocuments] = React.useState({
    transfer_application: null, id_proof: null, passport_photo: null, no_dues_clearance: null,
  });

  const form = useForm({
    resolver: zodResolver(memberTransferOutSchema),
    defaultValues: {
      transfer_out_date: new Date().toISOString().slice(0, 10),
      priority: "Normal",
      matched_member: null,
      relationship_with_head: "Self",
      family_member_count: 0,
      transfer_scope: "Individual Only",
      destination_country: "India",
      certificate_delivery: "Email",
      current_branch_church: currentChurchName,
      confirmed: false,
    },
  });

  const { register, control, handleSubmit, watch, setValue, trigger, formState } = form;

  React.useEffect(() => {
    if (currentChurchName) setValue("current_branch_church", currentChurchName);
  }, [currentChurchName, setValue]);

  const goToStep = (step) => setCurrentStep(step);

  const goNext = async () => {
    const stepDef = TRANSFER_OUT_STEPS.find((s) => s.key === currentStep);
    const valid = stepDef.fields ? await trigger(stepDef.fields) : true;
    if (!valid) return false;
    setCompletedSteps((prev) => Array.from(new Set([...prev, currentStep])));
    setCurrentStep((s) => Math.min(s + 1, TRANSFER_OUT_STEPS.length));
    return true;
  };

  const goPrevious = () => setCurrentStep((s) => Math.max(s - 1, 1));

  const applyMatchedMember = (member) => {
    setValue("matched_member", { id: member.id, name: `${member.first_name} ${member.last_name}` });
    setValue("first_name", member.first_name || "");
    setValue("last_name", member.last_name || "");
    setValue("gender", member.gender || "");
    setValue("date_of_birth", member.date_of_birth || "");
    setValue("marital_status", member.marital_status || "");
    setValue("phone_number", member.phone_number || "");
    setValue("email", member.email || "");
    setValue("membership_number", member.membership_number || "");
    setValue("address_line1", member.address_line1 || "");
    setValue("city", member.city || "");
  };

  const setDocument = (key, file) => setDocuments((prev) => ({ ...prev, [key]: file }));
  const removeDocument = (key) => setDocuments((prev) => ({ ...prev, [key]: null }));

  const submit = handleSubmit(async (values) => {
    if (!values.matched_member?.id) {
      toast({ variant: "error", title: "Select a member first", description: "Search and select the member requesting transfer out in Step 1." });
      return { ok: false };
    }
    try {
      // memberService.transferOut() itself is REAL and pre-existing
      // (POST /members/{id}/transfer-out/) — payload shape is best-guess.
      const result = await memberService.transferOut(values.matched_member.id, {
        transfer_out_date: values.transfer_out_date,
        requested_by: values.requested_by,
        request_type: values.request_type,
        reason_category: values.reason_category,
        requested_certificate_type: values.requested_certificate_type,
        priority: values.priority,
        reason_for_transfer: values.reason_for_transfer,
        additional_notes: values.additional_notes || undefined,
        first_name: values.first_name,
        middle_name: values.middle_name || undefined,
        last_name: values.last_name,
        gender: values.gender,
        date_of_birth: values.date_of_birth,
        marital_status: values.marital_status,
        blood_group: values.blood_group || undefined,
        phone_number: values.phone_number,
        email: values.email || undefined,
        membership_number: values.membership_number,
        family_id: values.family_id || undefined,
        address_line1: values.address_line1,
        address_line2: values.address_line2 || undefined,
        city: values.city,
        state: values.state,
        district: values.district,
        pincode: values.pincode,
        family_head_name: values.family_head_name || undefined,
        relationship_with_head: values.relationship_with_head || undefined,
        family_member_count: values.family_member_count || undefined,
        transfer_scope: values.transfer_scope || undefined,
        destination_church_name: values.destination_church_name,
        destination_diocese_parish: values.destination_diocese_parish,
        destination_church_address: values.destination_church_address,
        destination_state: values.destination_state,
        destination_district: values.destination_district,
        destination_country: values.destination_country,
        destination_contact_person: values.destination_contact_person || undefined,
        destination_designation: values.destination_designation || undefined,
        destination_email: values.destination_email || undefined,
        destination_mobile: values.destination_mobile || undefined,
        destination_landline: values.destination_landline || undefined,
        certificate_delivery: values.certificate_delivery || undefined,
        date_of_membership: values.date_of_membership || undefined,
        transfer_certificate_no: values.transfer_certificate_no || undefined,
        baptism_register_no: values.baptism_register_no || undefined,
        confirmation_date: values.confirmation_date || undefined,
        communion_date: values.communion_date || undefined,
      });

      toast({ variant: "success", title: "Transfer request submitted", description: `${values.first_name} ${values.last_name}'s transfer-out request has been submitted.` });
      return { ok: true, data: result };
    } catch (error) {
      toast({
        variant: "error",
        title: "Could not submit transfer request",
        description: error?.response?.data?.detail || error?.message || "Please check the form and try again.",
      });
      return { ok: false, error };
    }
  });

  return {
    form,
    currentStep,
    completedSteps,
    goToStep,
    goNext,
    goPrevious,
    applyMatchedMember,
    documents,
    setDocument,
    removeDocument,
    isSubmitting: formState.isSubmitting,
    submit,
  };
}
