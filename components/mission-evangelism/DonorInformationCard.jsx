"use client";

import Link from "next/link";
import { Phone, Mail, MapPin, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { getInitials } from "@/lib/utils";

export function DonorInformationCard({ donor }) {
  if (!donor) return null;
  return (
    <div className="rounded-lg border border-border bg-white p-5 shadow-card">
      <h3 className="text-sm font-semibold text-ink">Donor Information</h3>
      <div className="mt-3 flex items-center gap-3">
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#F3E8FF] text-sm font-semibold text-[#7C3AED]">
          {getInitials(donor.name)}
        </span>
        <div>
          <p className="text-sm font-semibold text-ink">{donor.name}</p>
          <Badge variant="success">{donor.type}</Badge>
        </div>
      </div>
      <div className="mt-4 flex flex-col gap-2.5 text-sm text-ink-muted">
        <span className="flex items-center gap-2"><Phone className="h-3.5 w-3.5 shrink-0" /> {donor.phone}</span>
        <span className="flex items-center gap-2"><Mail className="h-3.5 w-3.5 shrink-0" /> {donor.email}</span>
        <span className="flex items-start gap-2"><MapPin className="mt-0.5 h-3.5 w-3.5 shrink-0" /> {donor.address}</span>
      </div>
      <Link href="#" className="mt-4 flex items-center gap-1 text-sm font-medium text-interactive-600 hover:underline">
        View Donor Profile <ArrowRight className="h-3.5 w-3.5" />
      </Link>
    </div>
  );
}
