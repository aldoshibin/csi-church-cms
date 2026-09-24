"use client";

import { FileText, CheckCircle2 } from "lucide-react";
import { formatCurrency } from "@/lib/utils";

function Row({ label, value }) {
  if (!value) return null;
  return (
    <div className="flex items-start justify-between gap-3 text-sm">
      <span className="text-ink-subtle">{label}</span>
      <span className="text-right font-medium text-ink">{value}</span>
    </div>
  );
}

export function BookingSummaryCard({ form, selectedFacility }) {
  const total = Number(form.totalAmount) || 0;
  const paid = Number(form.paidAmount) || 0;
  const balance = Math.max(total - paid, 0);
  const dateTime = form.date && form.startTime && form.endTime
    ? `${new Date(form.date).toLocaleDateString("en-IN", { day: "2-digit", month: "short", year: "numeric" })} (${new Date(form.date).toLocaleDateString("en-IN", { weekday: "short" })})\n${form.startTime} - ${form.endTime}`
    : "";

  return (
    <div className="rounded-lg border border-border bg-white p-5 shadow-card">
      <div className="flex items-center gap-2">
        <FileText className="h-4 w-4 text-interactive-600" />
        <h3 className="text-sm font-semibold text-ink">Booking Summary</h3>
      </div>
      <div className="mt-4 flex flex-col gap-3">
        <Row label="Facility" value={form.facility} />
        <Row label="Location" value={selectedFacility?.location} />
        <Row label="Date & Time" value={dateTime ? <span className="whitespace-pre-line">{dateTime}</span> : ""} />
        <Row label="Purpose / Event" value={form.purpose} />
        <Row label="Number of People" value={form.numberOfPeople} />
        <Row label="Expected Attendance" value={form.expectedAttendance} />
        <Row label="Setup Time" value={form.setupTime} />
        <Row label="Total Amount" value={total ? formatCurrency(total) : ""} />
        <Row label="Paid Amount" value={paid ? formatCurrency(paid) : ""} />
        <Row label="Balance Amount" value={total || paid ? formatCurrency(balance) : ""} />
      </div>

      {form.paymentStatus && (
        <div className="mt-4 rounded-md border border-success-100 bg-success-50 p-3">
          <p className="flex items-center gap-1.5 text-sm font-semibold text-success-700">
            <CheckCircle2 className="h-4 w-4" /> Payment Status
          </p>
          <p className="mt-1 text-sm font-medium text-success-700">{form.paymentStatus}</p>
          <p className="mt-0.5 text-xs text-success-600">
            {form.paymentStatus === "Paid" ? "Booking is fully paid." : "Booking payment is pending."}
          </p>
        </div>
      )}
    </div>
  );
}
