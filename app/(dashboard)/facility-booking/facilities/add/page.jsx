"use client";

import { useRouter } from "next/navigation";
import { Save } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { useNewFacilityForm } from "@/hooks/useNewFacilityForm";
import { FacilityInformationSection } from "@/components/facility-booking/facilities/form/FacilityInformationSection";
import { AmenitiesSection } from "@/components/facility-booking/facilities/form/AmenitiesSection";
import { UsageInformationSection } from "@/components/facility-booking/facilities/form/UsageInformationSection";
import { FacilityImageCard } from "@/components/facility-booking/facilities/form/FacilityImageCard";
import { FacilityQuickTipsCard } from "@/components/facility-booking/facilities/form/FacilityQuickTipsCard";
import { FacilityNoteCard } from "@/components/facility-booking/facilities/form/FacilityNoteCard";

export default function AddFacilityPage() {
  const router = useRouter();
  const { form, setField, toggleAmenity, image, setImage, isSubmitting, submit } = useNewFacilityForm();

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-ink">Add Facility</h1>
          <p className="mt-1 text-sm text-ink-subtle">Add a new facility to manage bookings and availability.</p>
        </div>
        <div className="flex items-center gap-3">
          <Button type="button" variant="secondary" onClick={() => router.back()}>Cancel</Button>
          <Button type="button" variant="success" onClick={submit} isLoading={isSubmitting} leftIcon={<Save className="h-4 w-4" />}>
            Save Facility
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_320px]">
        <div className="flex flex-col gap-5">
          <FacilityInformationSection form={form} setField={setField} />
          <AmenitiesSection selected={form.amenities} onToggle={toggleAmenity} />
          <UsageInformationSection form={form} setField={setField} />
        </div>

        <div className="flex flex-col gap-6">
          <FacilityImageCard image={image} setImage={setImage} />
          <FacilityQuickTipsCard />
          <FacilityNoteCard />
        </div>
      </div>
    </div>
  );
}
