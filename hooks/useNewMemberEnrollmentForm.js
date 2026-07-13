"use client";

import * as React from "react";
import { useForm, useFieldArray } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { memberService } from "@/services/memberService";
import { familyService } from "@/services/familyService";
import { useAuth } from "@/contexts/AuthContext";
import { useToast } from "@/contexts/ToastContext";
import { newMemberEnrollmentSchema } from "@/lib/validation";

export const STEPS = [
  { key: 1, label: "Enrollment Details", fields: ["enrollment_date", "referred_by", "source_of_information", "reason_for_joining", "membership_type", "preferred_language", "enrollment_notes"] },
  { key: 2, label: "Personal Information", fields: ["title", "first_name", "middle_name", "last_name", "gender", "date_of_birth", "blood_group", "marital_status", "spouse_name", "anniversary_date", "phone_number", "alternate_phone_number", "email", "aadhaar_number", "pan_number", "passport_number", "address_line1", "address_line2", "country", "state", "district", "city", "pincode"] },
  { key: 3, label: "Church Information", fields: ["church_id", "worship_service_preference", "membership_type", "joined_date", "baptized", "baptism_date", "baptism_place", "confirmation_status", "confirmation_date", "confirmation_place", "communion_status", "communion_date", "communion_place", "ministry_interests", "church_additional_info"] },
  { key: 4, label: "Family Information", fields: ["family_head", "relationship_to_family_head", "family_name", "family_email", "family_mobile_number", "family_marital_status", "date_of_marriage", "family_anniversary", "residential_status", "parish_house_locality", "family_occupation", "family_prayer_group", "family_notes"] },
  { key: 5, label: "Documents & Review" },
];

function calculateAge(dob) {
  if (!dob) return null;
  const birth = new Date(dob);
  if (Number.isNaN(birth.getTime())) return null;
  const age = Math.floor((Date.now() - birth.getTime()) / (365.25 * 24 * 60 * 60 * 1000));
  return age >= 0 ? age : null;
}

export function useNewMemberEnrollmentForm() {
  const { user } = useAuth();
  const { toast } = useToast();
  const churchId = user?.church?.id ?? user?.church_id ?? "";

  const [currentStep, setCurrentStep] = React.useState(1);
  const [completedSteps, setCompletedSteps] = React.useState([]);
  const [photo, setPhoto] = React.useState(null);
  const [photoPreviewUrl, setPhotoPreviewUrl] = React.useState(null);
  const [familyMemberModal, setFamilyMemberModal] = React.useState({ open: false, editIndex: null });

  const form = useForm({
    resolver: zodResolver(newMemberEnrollmentSchema),
    mode: "onSubmit",
    defaultValues: {
      enrollment_date: new Date().toISOString().slice(0, 10),
      preferred_language: "English",
      membership_type: "Regular Member",
      country: "India",
      joined_date: new Date().toISOString().slice(0, 10),
      baptized: "",
      confirmation_status: "",
      communion_status: "",
      ministry_interests: [],
      relationship_to_family_head: "Self",
      family_head: null,
      nationality: "Indian", 
      family_marital_status: "",
      residential_status: "",
      church_id: churchId,
      family_members: [],
    },
  });

  const { control, register, handleSubmit, watch, setValue, trigger, formState } = form;

  React.useEffect(() => {
    if (churchId) setValue("church_id", churchId);
  }, [churchId, setValue]);

  const { fields: familyMemberFields, append, update, remove } = useFieldArray({ control, name: "family_members" });

  const dateOfBirth = watch("date_of_birth");
  const age = React.useMemo(() => calculateAge(dateOfBirth), [dateOfBirth]);

  const fullName = [watch("first_name"), watch("middle_name"), watch("last_name")].filter(Boolean).join(" ");


  const familyHeadOptions = React.useMemo(() => {
    const opts = [];
    if (fullName.trim()) opts.push({ id: "self", name: fullName });
    return opts;
  }, [fullName]);

  React.useEffect(() => {
    // Default Family Head to "Self" once we have a name and nothing chosen yet.
    if (fullName.trim() && !watch("family_head")) {
      setValue("family_head", { id: "self", name: fullName });
    }
  }, [fullName]); // eslint-disable-line react-hooks/exhaustive-deps

  const setPhotoFile = (file) => {
    setPhoto(file);
    setPhotoPreviewUrl(file ? URL.createObjectURL(file) : null);
  };
  const clearPhoto = () => {
    setPhoto(null);
    setPhotoPreviewUrl(null);
  };

  const goToStep = (step) => setCurrentStep(step);

  const goNext = async () => {
    const stepDef = STEPS.find((s) => s.key === currentStep);
    const valid = stepDef.fields ? await trigger(stepDef.fields) : true;
    if (!valid) return false;
    setCompletedSteps((prev) => Array.from(new Set([...prev, currentStep])));
    setCurrentStep((s) => Math.min(s + 1, STEPS.length));
    return true;
  };

  const goPrevious = () => setCurrentStep((s) => Math.max(s - 1, 1));

  // Family Members table modal (add/edit).
  const openAddFamilyMember = () => setFamilyMemberModal({ open: true, editIndex: null });
  const openEditFamilyMember = (index) => setFamilyMemberModal({ open: true, editIndex: index });
  const closeFamilyMemberModal = () => setFamilyMemberModal({ open: false, editIndex: null });

  const saveFamilyMember = (entry) => {
    const { editIndex } = familyMemberModal;
    if (editIndex === null) {
      append({ id: crypto.randomUUID(), ...entry });
    } else {
      update(editIndex, { ...familyMemberFields[editIndex], ...entry });
    }
    closeFamilyMemberModal();
  };

  const removeFamilyMember = (index) => remove(index);

  const familyMembers = watch("family_members") || [];
  const totalFamilyMembers = 1 + familyMembers.length; // 1 = the enrollee themself
  const familySpouseName = familyMembers.find((m) => m.relationship === "Spouse")?.name || "";
  const familyChildrenCount = familyMembers.filter((m) => m.relationship === "Son" || m.relationship === "Daughter").length;

  const submit = handleSubmit(async (values) => {
    try {
      // 1. Create the primary member.
      const primaryMember = await memberService.create({
        first_name: values.first_name,
        last_name: values.last_name,
        gender: values.gender,
        date_of_birth: values.date_of_birth,
        email: values.email || undefined,
        phone_number: values.phone_number,
        marital_status: values.marital_status,
        church_id: values.church_id,
        joined_date: values.joined_date,
        // BEST-GUESS fields from here down
        title: values.title || undefined,
        middle_name: values.middle_name || undefined,
        nationality: values.nationality || undefined,
        blood_group: values.blood_group || undefined,
        spouse_name: values.spouse_name || undefined,
        anniversary_date: values.anniversary_date || undefined,
        alternate_phone_number: values.alternate_phone_number || undefined,
        aadhaar_number: values.aadhaar_number || undefined,
        pan_number: values.pan_number || undefined,
        passport_number: values.passport_number || undefined,
        address_line1: values.address_line1,
        address_line2: values.address_line2 || undefined,
        country: values.country,
        state: values.state,
        district: values.district,
        city: values.city,
        pincode: values.pincode,
        membership_type: values.membership_type,
        worship_service_preference: values.worship_service_preference || undefined,
        baptized: values.baptized,
        baptism_date: values.baptism_date || undefined,
        baptism_place: values.baptism_place || undefined,
        confirmation_status: values.confirmation_status || undefined,
        confirmation_date: values.confirmation_date || undefined,
        confirmation_place: values.confirmation_place || undefined,
        communion_status: values.communion_status || undefined,
        communion_date: values.communion_date || undefined,
        communion_place: values.communion_place || undefined,
        ministry_interests: [
          ...(values.ministry_interests || []).filter((m) => m !== "Other"),
          ...(values.ministry_interests?.includes("Other") && values.ministry_interest_other ? [values.ministry_interest_other] : []),
        ],
        enrollment_date: values.enrollment_date,
        referred_by: values.referred_by || undefined,
        source_of_information: values.source_of_information,
        reason_for_joining: values.reason_for_joining,
        preferred_language: values.preferred_language || undefined,
        notes: values.enrollment_notes || undefined,
      });

      // 2. Create the family (always, so the household is captured even
      // with zero additional members) and attach the primary member.
      const family = await familyService.create({
        family_type: "NUCLEAR",
        address_line1: values.address_line1,
        city: values.city,
        church_id: values.church_id,
        family_name: values.family_name || undefined,
        email: values.family_email || undefined,
        phone_number: values.family_mobile_number,
        marital_status: values.family_marital_status,
        date_of_marriage: values.date_of_marriage || undefined,
        family_anniversary: values.family_anniversary || undefined,
        residential_status: values.residential_status,
        parish_house_locality: values.parish_house_locality || undefined,
        family_occupation: values.family_occupation || undefined,
        family_prayer_group: values.family_prayer_group || undefined,
        notes: values.family_notes || undefined,
      });

      await memberService.update(primaryMember.id, {
        family_id: family.id,
        relationship_to_head: values.relationship_to_family_head,
      });

      // 3. Attach an existing member as Head of Family if one other than
      // "Self" was chosen.
      if (values.family_head?.id && values.family_head.id !== "self") {
        await memberService.update(values.family_head.id, { family_id: family.id });
      }

      // 4. Register each additional family member row.
      const results = await Promise.allSettled(
        familyMembers.map((m) => {
          const [first_name, ...rest] = m.name.trim().split(" ");
          return memberService.create({
            first_name,
            last_name: rest.join(" ") || "",
            gender: m.gender,
            date_of_birth: m.date_of_birth,
            marital_status: m.marital_status,
            church_id: values.church_id,
            family_id: family.id,
            joined_date: values.joined_date,
            relationship_to_head: m.relationship,
          });
        })
      );
      const failedCount = results.filter((r) => r.status === "rejected").length;

      // 5. Photo — the only document type with a real upload endpoint.
      if (photo) {
        try {
          await memberService.uploadPhoto(primaryMember.id, photo);
        } catch {
          toast({ variant: "warning", title: "Enrolled, but photo upload failed", description: "You can upload it again from the member's profile." });
        }
      }

      if (failedCount > 0) {
        toast({
          variant: "warning",
          title: "Enrollment saved with some member errors",
          description: `${failedCount} of ${familyMembers.length} family members could not be saved.`,
        });
      } else {
        toast({ variant: "success", title: "Enrollment submitted", description: `${values.first_name} ${values.last_name} has been enrolled.` });
      }

      return { ok: true, data: primaryMember };
    } catch (error) {
      toast({
        variant: "error",
        title: "Could not submit enrollment",
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
    age,
    fullName,
    photo,
    photoPreviewUrl,
    setPhotoFile,
    clearPhoto,
    familyHeadOptions,
    familyMemberFields,
    familyMemberModal,
    openAddFamilyMember,
    openEditFamilyMember,
    closeFamilyMemberModal,
    saveFamilyMember,
    removeFamilyMember,
    totalFamilyMembers,
    familySpouseName,
    familyChildrenCount,
    isSubmitting: formState.isSubmitting,
    submit,
  };
}
