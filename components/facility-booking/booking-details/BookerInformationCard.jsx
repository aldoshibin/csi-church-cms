"use client";

import { User, Phone, Mail } from "lucide-react";

function Field({ label, value, icon: Icon }) {
  return (
    <div>
      <p className="text-xs text-ink-subtle">{label}</p>
      <p className="mt-0.5 flex items-center gap-1.5 text-sm font-medium text-ink">
        {Icon && <Icon className="h-3.5 w-3.5 shrink-0 text-ink-subtle" />}
        {value || "–"}
      </p>
    </div>
  );
}

export function BookerInformationCard({ booking }) {
  const booker = booking.booker;
  return (
    <div className="rounded-lg border border-border bg-white p-5 shadow-card">
      <div className="flex items-center gap-2">
        <User className="h-4 w-4 text-interactive-600" />
        <h3 className="text-base font-semibold text-ink">Booker Information</h3>
      </div>
      <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
        <Field label="Booked By Name" value={booker.name} />
        <Field label="Phone Number" value={booker.phone} icon={Phone} />
        <Field label="Email Address" value={booker.email} icon={Mail} />
      </div>
      <div className="mt-4 border-t border-border pt-4">
        <p className="text-xs text-ink-subtle">Address</p>
        <p className="mt-0.5 text-sm font-medium text-ink">{booker.address}</p>
      </div>
    </div>
  );
}
