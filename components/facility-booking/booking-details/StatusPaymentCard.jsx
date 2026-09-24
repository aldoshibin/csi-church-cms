"use client";

import { CircleCheck } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { formatDate, formatDateTime, formatCurrency } from "@/lib/utils";
import { BOOKING_STATUS_VARIANT, PAYMENT_STATUS_VARIANT } from "@/lib/mock/vmFacilityBookingMockData";

function Field({ label, value }) {
  return (
    <div>
      <p className="text-xs text-ink-subtle">{label}</p>
      <p className="mt-0.5 text-sm font-medium text-ink">{value || "–"}</p>
    </div>
  );
}

export function StatusPaymentCard({ booking }) {
  return (
    <div className="rounded-lg border border-border bg-white p-5 shadow-card">
      <div className="flex items-center gap-2">
        <CircleCheck className="h-4 w-4 text-interactive-600" />
        <h3 className="text-base font-semibold text-ink">Status &amp; Payment</h3>
      </div>

      <div className="mt-4">
        <p className="text-xs text-ink-subtle">Booking Status</p>
        <Badge variant={BOOKING_STATUS_VARIANT[booking.status] ?? "default"} className="mt-1">{booking.status}</Badge>
        <p className="mt-1.5 text-xs text-ink-subtle">{booking.statusNote}</p>
      </div>

      <div className="mt-4 grid grid-cols-2 gap-4 border-t border-border pt-4">
        <Field label="Booked On" value={formatDateTime(booking.bookedOn)} />
        <div>
          <p className="text-xs text-ink-subtle">Booked By</p>
          <p className="mt-0.5 text-sm font-medium text-ink">{booking.bookedBy.name}</p>
          <p className="text-xs text-ink-subtle">{booking.bookedBy.phone}</p>
        </div>
        <Field label="Expected Attendance" value={booking.expectedAttendance} />
      </div>

      <div className="mt-4 border-t border-border pt-4">
        <p className="text-xs text-ink-subtle">Payment Status</p>
        <Badge variant={PAYMENT_STATUS_VARIANT[booking.payment.status] ?? "default"} className="mt-1">{booking.payment.status}</Badge>
      </div>

      <div className="mt-4 grid grid-cols-2 gap-4 border-t border-border pt-4">
        <Field label="Total Amount" value={formatCurrency(booking.payment.totalAmount)} />
        <Field label="Paid Amount" value={formatCurrency(booking.payment.paidAmount)} />
        <Field label="Payment Date" value={formatDate(booking.payment.paymentDate)} />
        <Field label="Payment Method" value={booking.payment.paymentMethod} />
        <Field label="Transaction ID" value={booking.payment.transactionId} />
      </div>
    </div>
  );
}
