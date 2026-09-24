"use client";

import { Receipt } from "lucide-react";
import { Input, Select } from "@/components/ui/Input";
import { PAYMENT_METHOD_OPTIONS, PAYMENT_STATUS_OPTIONS } from "@/lib/mock/vmFacilityBookingMockData";

export function PaymentInformationSection({ form, setField }) {
  return (
    <div className="rounded-lg border border-border bg-white p-6 shadow-card">
      <div className="flex items-center gap-2">
        <Receipt className="h-4 w-4 text-interactive-600" />
        <h3 className="text-base font-semibold text-ink">Payment Information</h3>
      </div>
      <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
        <Select label="Payment Method" required value={form.paymentMethod} onChange={(e) => setField("paymentMethod", e.target.value)}>
          <option value="">Select payment method</option>
          {PAYMENT_METHOD_OPTIONS.map((m) => <option key={m} value={m}>{m}</option>)}
        </Select>
        <Select label="Payment Status" required value={form.paymentStatus} onChange={(e) => setField("paymentStatus", e.target.value)}>
          <option value="">Select payment status</option>
          {PAYMENT_STATUS_OPTIONS.map((s) => <option key={s} value={s}>{s}</option>)}
        </Select>
        <Input
          label="Total Amount (₹)" required type="number" placeholder="Enter total amount"
          value={form.totalAmount} onChange={(e) => setField("totalAmount", e.target.value)}
        />
        <Input
          label="Paid Amount (₹)" required type="number" placeholder="Enter paid amount"
          value={form.paidAmount} onChange={(e) => setField("paidAmount", e.target.value)}
        />
        <Input label="Payment Date" required type="date" value={form.paymentDate} onChange={(e) => setField("paymentDate", e.target.value)} />
        <Input
          label="Transaction / Reference ID" placeholder="Enter transaction / reference ID"
          value={form.transactionRefId} onChange={(e) => setField("transactionRefId", e.target.value)}
        />
      </div>
    </div>
  );
}
