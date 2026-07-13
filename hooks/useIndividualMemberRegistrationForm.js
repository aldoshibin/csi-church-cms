"use client";

import * as React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { memberService } from "@/services/memberService";
import { useAuth } from "@/contexts/AuthContext";
import { useToast } from "@/contexts/ToastContext";
import { individualMemberSchema } from "@/lib/validation";

function calculateAge(dob) {
  if (!dob) return null;
  const birth = new Date(dob);
  if (Number.isNaN(birth.getTime())) return null;
  const age = Math.floor((Date.now() - birth.getTime()) / (365.25 * 24 * 60 * 60 * 1000));
  return age >= 0 ? age : null;
}

export function useIndividualMemberRegistrationForm() {
  const { user } = useAuth();
  const { toast } = useToast();
  const churchId = user?.church?.id ?? user?.church_id ?? "";

  const [photo, setPhoto] = React.useState(null); // File, uploaded only after the member is created
  const [photoPreviewUrl, setPhotoPreviewUrl] = React.useState(null);

  const form = useForm({
    resolver: zodResolver(individualMemberSchema),
    defaultValues: {
      gender: "",
      marital_status: "",
      nationality: "Indian",
      country: "India",
      joined_date: new Date().toISOString().slice(0, 10),
      church_id: churchId,
    },
  });

  const { register, control, handleSubmit, watch, setValue, reset, formState } = form;

  React.useEffect(() => {
    if (churchId) setValue("church_id", churchId);
  }, [churchId, setValue]);

  const dateOfBirth = watch("date_of_birth");
  const age = React.useMemo(() => calculateAge(dateOfBirth), [dateOfBirth]);

  const setPhotoFile = (file) => {
    setPhoto(file);
    setPhotoPreviewUrl(file ? URL.createObjectURL(file) : null);
  };

  const clearPhoto = () => {
    setPhoto(null);
    setPhotoPreviewUrl(null);
  };

  const summary = {
    fullName: [watch("first_name"), watch("middle_name"), watch("last_name")].filter(Boolean).join(" ") || "-",
    gender: watch("gender") || "-",
    dateOfBirth: watch("date_of_birth") || "-",
    branchChurch: watch("church_id") ? "Selected" : "-",
    dateOfJoining: watch("joined_date") || "-",
    memberCategory: watch("member_category") || "-",
  };

  const submit = handleSubmit(async (values) => {
    try {
      const created = await memberService.create({
        first_name: values.first_name,
        last_name: values.last_name,
        gender: values.gender,
        date_of_birth: values.date_of_birth,
        email: values.email || undefined,
        phone_number: values.phone_number,
        marital_status: values.marital_status,
        church_id: values.church_id,
        joined_date: values.joined_date,
        middle_name: values.middle_name || undefined,
        blood_group: values.blood_group || undefined,
        alternate_phone_number: values.alternate_phone_number || undefined,
        nationality: values.nationality || undefined,
        baptized: values.baptized || undefined,
        baptism_date: values.baptism_date || undefined,
        member_category: values.member_category || undefined,
        occupation: values.occupation || undefined,
        address_line1: values.address_line1,
        address_line2: values.address_line2 || undefined,
        country: values.country || undefined,
        state: values.state,
        district: values.district,
        city: values.city,
        pincode: values.pincode,
        education: values.education || undefined,
        workplace_or_school: values.workplace_or_school || undefined,
        skills_talents: values.skills_talents || undefined,
        notes: values.notes || undefined,
      });

      // CONFIRMED — memberService.uploadPhoto exists and is used elsewhere.
      if (photo) {
        try {
          await memberService.uploadPhoto(created.id, photo);
        } catch {
          toast({
            variant: "warning",
            title: "Member saved, photo upload failed",
            description: "You can upload the photo again from the member's profile.",
          });
        }
      }

      toast({
        variant: "success",
        title: "Member registered",
        description: `${values.first_name} ${values.last_name} has been added.`,
      });
      return { ok: true, data: created };
    } catch (error) {
      toast({
        variant: "error",
        title: "Could not save member",
        description: error?.response?.data?.detail || error?.message || "Please check the form and try again.",
      });
      return { ok: false, error };
    }
  });

  return {
    form,
    age,
    summary,
    photo,
    photoPreviewUrl,
    setPhotoFile,
    clearPhoto,
    isSubmitting: formState.isSubmitting,
    resetForm: () => {
      reset();
      clearPhoto();
    },
    submit,
  };
}
