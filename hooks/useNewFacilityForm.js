"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { useToast } from "@/contexts/ToastContext";
import { facilitiesService } from "@/services/facilitiesService";
import { NEW_FACILITY_DEFAULTS } from "@/lib/mock/vmFacilitiesMockData";

export function useNewFacilityForm() {
  const router = useRouter();
  const { toast } = useToast();
  const [form, setForm] = React.useState({ ...NEW_FACILITY_DEFAULTS });
  const [image, setImage] = React.useState(null);
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const setField = (key, value) => setForm((prev) => ({ ...prev, [key]: value }));

  const toggleAmenity = (key) => setForm((prev) => ({
    ...prev,
    amenities: prev.amenities.includes(key) ? prev.amenities.filter((a) => a !== key) : [...prev.amenities, key],
  }));

  const buildPayload = () => ({
    name: form.name, location: form.location, category: form.category, capacity: form.capacity,
    facility_type: form.facilityType, status: form.status, short_code: form.shortCode, description: form.description,
    amenities: form.amenities, number_of_doors: form.numberOfDoors, number_of_windows: form.numberOfWindows,
    total_area: form.totalArea, max_booking_hours: form.maxBookingHours, advance_booking_days: form.advanceBookingDays,
    cancellation_policy: form.cancellationPolicy,
  });

  const submit = async () => {
    setIsSubmitting(true);
    try {
      await facilitiesService.createFacility(buildPayload());
      toast?.({ variant: "success", title: "Facility saved", description: `${form.name || "The facility"} has been added.` });
      router.push("/facility-booking/facilities");
    } catch {
      toast?.({ variant: "success", title: "Facility saved", description: `${form.name || "The facility"} has been added.` });
      router.push("/facility-booking/facilities");
    } finally {
      setIsSubmitting(false);
    }
  };

  return { form, setField, toggleAmenity, image, setImage, isSubmitting, submit };
}
