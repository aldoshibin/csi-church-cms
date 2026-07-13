"use client";

import * as React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { memberService } from "@/services/memberService";
import { useToast } from "@/contexts/ToastContext";
import { memberTransferInSchema } from "@/lib/validation";

export const TRANSFER_STEPS = [
  { key: 1, label: "Transfer Information", fields: ["transfer_in_date", "requested_by", "request_type", "transfer_reason", "additional_notes"] },
  { key: 2, label: "Member Information", fields: ["first_name", "middle_name", "last_name", "gender", "date_of_birth", "phone_number", "email", "membership_number", "current_church", "address"] },
  { key: 3, label: "Church Information", fields: ["from_parish_church", "from_diocese", "receiving_branch", "pastor_vicar_name", "transfer_certificate_no", "certificate_date", "baptism_status", "confirmation_status", "membership_category"] },
  { key: 4, label: "Documents & Review" },
];

export function useMemberTransferInForm() {
  const { toast } = useToast();
  const [currentStep, setCurrentStep] = React.useState(1);
  const [completedSteps, setCompletedSteps] = React.useState([]);
  const [documents, setDocuments] = React.useState({ transfer_certificate: null, baptism_certificate: null, photo: null, id_proof: null });

  const form = useForm({
    resolver: zodResolver(memberTransferInSchema),
    defaultValues: {
      transfer_in_date: new Date().toISOString().slice(0, 10),
      requested_by: "",
      request_type: "",
      transfer_reason: "",
      search_mode: "EXISTING",
      matched_member: null,
      baptism_status: "Unknown",
      confirmation_status: "Unknown",
      membership_category: "Regular Member",
    },
  });

  const { register, control, handleSubmit, watch, setValue, trigger, formState } = form;

  const goToStep = (step) => setCurrentStep(step);

  const goNext = async () => {
    const stepDef = TRANSFER_STEPS.find((s) => s.key === currentStep);
    const valid = stepDef.fields ? await trigger(stepDef.fields) : true;
    if (!valid) return false;
    setCompletedSteps((prev) => Array.from(new Set([...prev, currentStep])));
    setCurrentStep((s) => Math.min(s + 1, TRANSFER_STEPS.length));
    return true;
  };

  const goPrevious = () => setCurrentStep((s) => Math.max(s - 1, 1));

  const applyMatchedMember = (member) => {
    setValue("matched_member", { id: member.id, name: `${member.first_name} ${member.last_name}` });
    setValue("first_name", member.first_name || "");
    setValue("last_name", member.last_name || "");
    setValue("gender", member.gender || "");
    setValue("date_of_birth", member.date_of_birth || "");
    setValue("phone_number", member.phone_number || "");
    setValue("email", member.email || "");
    setValue("membership_number", member.membership_number || "");
  };

  const setDocument = (key, file) => setDocuments((prev) => ({ ...prev, [key]: file }));

  const submit = handleSubmit(async (values) => {
    try {
      // memberService.transferIn() itself is a REAL, pre-existing
      // endpoint (POST /members/transfer-in/) — only the shape of this
      // payload is a best guess, see lib/validation.js's comment.
      const result = await memberService.transferIn({
        transfer_in_date: values.transfer_in_date,
        requested_by: values.requested_by,
        request_type: values.request_type,
        transfer_reason: values.transfer_reason,
        additional_notes: values.additional_notes || undefined,
        member_id: values.search_mode === "EXISTING" ? values.matched_member?.id : undefined,
        first_name: values.first_name,
        middle_name: values.middle_name || undefined,
        last_name: values.last_name,
        gender: values.gender,
        date_of_birth: values.date_of_birth,
        phone_number: values.phone_number,
        email: values.email || undefined,
        membership_number: values.membership_number || undefined,
        current_church: values.current_church,
        address: values.address || undefined,
        from_parish_church: values.from_parish_church,
        from_diocese: values.from_diocese || undefined,
        receiving_branch: values.receiving_branch,
        pastor_vicar_name: values.pastor_vicar_name || undefined,
        transfer_certificate_no: values.transfer_certificate_no || undefined,
        certificate_date: values.certificate_date || undefined,
        baptism_status: values.baptism_status || undefined,
        confirmation_status: values.confirmation_status || undefined,
        membership_category: values.membership_category || undefined,
      });

      // Photo is the only document with a real, confirmed upload path.
      if (documents.photo) {
        const memberId = result?.member?.id ?? result?.id ?? values.matched_member?.id;
        if (memberId) {
          try {
            await memberService.uploadPhoto(memberId, documents.photo);
          } catch {
            toast({ variant: "warning", title: "Transfer submitted, photo upload failed", description: "You can upload it again from the member's profile." });
          }
        }
      }

      toast({ variant: "success", title: "Transfer submitted", description: `${values.first_name} ${values.last_name}'s transfer-in request has been submitted.` });
      return { ok: true, data: result };
    } catch (error) {
      toast({
        variant: "error",
        title: "Could not submit transfer",
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
    isSubmitting: formState.isSubmitting,
    submit,
  };
}
