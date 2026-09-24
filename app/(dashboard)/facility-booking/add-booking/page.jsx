"use client";

import { useRouter } from "next/navigation";
import { Save } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { useNewBookingForm } from "@/hooks/useNewBookingForm";
import { BookingInformationSection } from "@/components/facility-booking/add-booking/BookingInformationSection";
import { FacilitySelectionSection } from "@/components/facility-booking/add-booking/FacilitySelectionSection";
import { BookerInformationSection } from "@/components/facility-booking/add-booking/BookerInformationSection";
import { PaymentInformationSection } from "@/components/facility-booking/add-booking/PaymentInformationSection";
import { BookingSummaryCard } from "@/components/facility-booking/add-booking/BookingSummaryCard";
import { AddBookingNoteCard } from "@/components/facility-booking/add-booking/AddBookingNoteCard";

export default function AddBookingPage() {
  const router = useRouter();
  const { form, setField, selectedFacility, isSubmitting, submit } = useNewBookingForm();

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-2xl font-semibold text-ink">Add Booking</h1>
        <p className="mt-1 text-sm text-ink-subtle">Create a new facility booking.</p>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_340px]">
        <div className="flex flex-col gap-5">
          <BookingInformationSection form={form} setField={setField} />
          <FacilitySelectionSection form={form} setField={setField} selectedFacility={selectedFacility} />
          <BookerInformationSection form={form} setField={setField} />
          <PaymentInformationSection form={form} setField={setField} />
        </div>

        <div className="flex flex-col gap-6">
          <BookingSummaryCard form={form} selectedFacility={selectedFacility} />
          <div className="flex items-center gap-3">
            <Button type="button" variant="secondary" className="flex-1" onClick={() => router.back()}>Cancel</Button>
            <Button type="button" variant="success" className="flex-1" onClick={submit} isLoading={isSubmitting} leftIcon={<Save className="h-4 w-4" />}>
              Save Booking
            </Button>
          </div>
          <AddBookingNoteCard />
        </div>
      </div>
    </div>
  );
}
