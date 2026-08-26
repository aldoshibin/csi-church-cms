"use client";

import { ArrowLeft, ArrowRight, Upload } from "lucide-react";
import { Input, Textarea, Select } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { INCOME_PAYMENT_METHOD_OPTIONS } from "@/lib/mock/incomeMockData";

export default function Step2PaymentInformation({ form, setField, onNext, onPrevious }) {
  const handleFile = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setField("paymentAttachmentName", file.name);
    setField("paymentAttachmentSize", `${(file.size / 1024).toFixed(0)} KB`);
  };

  return (
    <div className="rounded-lg border border-border bg-white p-6 shadow-card">
      <h3 className="text-base font-semibold text-ink">Payment Information</h3>
      <p className="mb-5 text-sm text-ink-subtle">Provide payment related details for this income.</p>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <Select
          label="Payment Method" required helperText="Select the method used to receive payment"
          value={form.paymentMethod} onChange={(e) => setField("paymentMethod", e.target.value)}
        >
          <option value="">Select Payment Method</option>
          {INCOME_PAYMENT_METHOD_OPTIONS.map((p) => <option key={p}>{p}</option>)}
        </Select>

        <Input
          label="Transaction / Receipt No." placeholder="Enter receipt or transaction number" helperText="Enter receipt or transaction number"
          value={form.transactionReceiptNo} onChange={(e) => setField("transactionReceiptNo", e.target.value)}
        />

        <Input
          label="Paid By" required placeholder="Enter name of person / group" helperText="Name of the person / group who made the payment"
          value={form.paidBy} onChange={(e) => setField("paidBy", e.target.value)}
        />

        <Input
          label="Payment Mode Details" placeholder="Provide additional payment details (if any)" helperText="Provide additional payment details (if any)"
          value={form.paymentModeDetails} onChange={(e) => setField("paymentModeDetails", e.target.value)}
        />

        <Input
          label="Payment Received By" required placeholder="Enter name of person who received the payment" helperText="Person who received the payment"
          value={form.receivedBy} onChange={(e) => setField("receivedBy", e.target.value)}
        />

        <div>
          <label className="mb-1.5 block text-sm font-medium text-ink">Reference Document (Optional)</label>
          <label className="flex h-[104px] cursor-pointer flex-col items-center justify-center gap-1.5 rounded-lg border-2 border-dashed border-border text-ink-subtle hover:border-interactive-300 hover:bg-interactive-50">
            <Upload className="h-5 w-5" />
            <span className="text-sm">{form.paymentAttachmentName || "Click to upload or drag and drop"}</span>
            <span className="text-xs">PNG, JPG, PDF up to 5MB</span>
            <input type="file" className="hidden" accept=".png,.jpg,.jpeg,.pdf" onChange={handleFile} />
          </label>
        </div>
      </div>

      <div className="mt-5">
        <Textarea
          label="Notes (Optional)" rows={3} maxLength={250} placeholder="Any additional notes about the payment"
          helperText={`${form.notes.length}/250 · Any additional notes about the payment`}
          value={form.notes} onChange={(e) => setField("notes", e.target.value)}
        />
      </div>

      <div className="mt-6 flex items-center justify-between border-t border-border pt-4">
        <Button type="button" variant="secondary" leftIcon={<ArrowLeft className="h-4 w-4" />} onClick={onPrevious}>Previous</Button>
        <Button type="button" onClick={onNext} rightIcon={<ArrowRight className="h-4 w-4" />}>Next</Button>
      </div>
    </div>
  );
}
