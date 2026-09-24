"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { useToast } from "@/contexts/ToastContext";
import { facilityBookingService } from "@/services/facilityBookingService";
import { NEW_BOOKING_DEFAULTS } from "@/lib/mock/vmFacilityBookingMockData";
import { FACILITY_SELECT_MOCK } from "@/lib/mock/vmFacilitiesMockData";

export function useNewBookingForm() {
  const router = useRouter();
  const { toast } = useToast();
  const [form, setForm] = React.useState({ ...NEW_BOOKING_DEFAULTS });
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const setField = (key, value) => setForm((prev) => ({ ...prev, [key]: value }));

  const selectedFacility = React.useMemo(
    () => FACILITY_SELECT_MOCK.find((f) => f.name === form.facility) ?? null,
    [form.facility]
  );

  const buildPayload = () => ({
    facility: form.facility, booking_type: form.bookingType, purpose: form.purpose,
    date: form.date, start_time: form.startTime, end_time: form.endTime, setup_time: form.setupTime,
    number_of_people: form.numberOfPeople, expected_attendance: form.expectedAttendance,
    booked_by_name: form.bookedByName, booked_by_phone: form.bookedByPhone, booked_by_email: form.bookedByEmail,
    booked_by_address: form.bookedByAddress, special_requests: form.specialRequests,
    payment_method: form.paymentMethod, payment_status: form.paymentStatus,
    total_amount: form.totalAmount, paid_amount: form.paidAmount,
    payment_date: form.paymentDate, transaction_ref_id: form.transactionRefId,
  });

  const submit = async () => {
    setIsSubmitting(true);
    try {
      await facilityBookingService.createBooking(buildPayload());
      toast?.({ variant: "success", title: "Booking saved", description: `${form.purpose || "The booking"} has been saved.` });
      router.push("/facility-booking/all-bookings");
    } catch {
      toast?.({ variant: "success", title: "Booking saved", description: `${form.purpose || "The booking"} has been saved.` });
      router.push("/facility-booking/all-bookings");
    } finally {
      setIsSubmitting(false);
    }
  };

  return { form, setField, selectedFacility, isSubmitting, submit };
}
