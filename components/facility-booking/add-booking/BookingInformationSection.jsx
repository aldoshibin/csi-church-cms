"use client";

import { Calendar } from "lucide-react";
import { Input, Select, Textarea } from "@/components/ui/Input";
import { BOOKING_TYPE_OPTIONS } from "@/lib/mock/vmFacilityBookingMockData";

export function BookingInformationSection({ form, setField }) {
  return (
    <div className="rounded-lg border border-border bg-white p-6 shadow-card">
      <div className="flex items-center gap-2">
        <Calendar className="h-4 w-4 text-interactive-600" />
        <h3 className="text-base font-semibold text-ink">Booking Information</h3>
      </div>
      <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
        <Select label="Booking Type" required value={form.bookingType} onChange={(e) => setField("bookingType", e.target.value)}>
          <option value="">Select booking type</option>
          {BOOKING_TYPE_OPTIONS.map((t) => <option key={t} value={t}>{t}</option>)}
        </Select>
        <Input label="Purpose / Event" required placeholder="Enter purpose or event" value={form.purpose} onChange={(e) => setField("purpose", e.target.value)} />
        <Input label="Booking Date" required type="date" value={form.date} onChange={(e) => setField("date", e.target.value)} />
        <Input label="Start Time" required type="time" value={form.startTime} onChange={(e) => setField("startTime", e.target.value)} />
        <Input label="End Time" required type="time" value={form.endTime} onChange={(e) => setField("endTime", e.target.value)} />
        <Input label="Setup Time (Optional)" type="time" value={form.setupTime} onChange={(e) => setField("setupTime", e.target.value)} />
        <Input
          label="Number of People" required type="number" placeholder="Enter number of people"
          value={form.numberOfPeople} onChange={(e) => setField("numberOfPeople", e.target.value)}
        />
        <Input
          label="Expected Attendance" type="number" placeholder="Enter expected attendance"
          value={form.expectedAttendance} onChange={(e) => setField("expectedAttendance", e.target.value)}
        />
        <Textarea
          label="Special Requests (Optional)" rows={1} placeholder="Enter any special requests"
          value={form.specialRequests} onChange={(e) => setField("specialRequests", e.target.value)}
        />
      </div>
    </div>
  );
}
