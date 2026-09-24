"use client";

import {
  Hash, User, Folder, CreditCard, Coins, CheckCircle2, FileText as FileTextIcon,
  Users2 as DonorIdIcon, Calendar, Megaphone, FileText, EyeOff,
} from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { formatDate, formatCurrency } from "@/lib/utils";
import { DONATION_PAYMENT_STATUS_BADGE_MAP } from "@/lib/mock/vmMissionEvangelismMockData";

function Row({ icon: Icon, label, value }) {
  return (
    <div className="flex items-start gap-3">
      <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-surface-canvas text-ink-subtle">
        <Icon className="h-4 w-4" />
      </span>
      <div>
        <p className="text-xs text-ink-subtle">{label}</p>
        <p className="text-sm font-medium text-ink">{value ?? "–"}</p>
      </div>
    </div>
  );
}

export function DonationInformationCard({ donation }) {
  if (!donation) return null;
  return (
    <div className="rounded-lg border border-border bg-white p-6 shadow-card">
      <h3 className="text-sm font-semibold text-ink">Donation Information</h3>
      <div className="mt-4 grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-4">
          <Row icon={Hash} label="Donation ID" value={donation.id} />
          <Row icon={Calendar} label="Donation Date & Time" value={new Date(donation.createdAt).toLocaleString("en-IN", { day: "numeric", month: "short", year: "numeric", hour: "numeric", minute: "2-digit" })} />
          <Row icon={Folder} label="Fund / Purpose" value={donation.fundPurpose} />
          <Row icon={Coins} label="Amount" value={formatCurrency(donation.amount)} />
          <Row icon={FileTextIcon} label="Receipt No." value={donation.receiptNo} />
          <Row icon={Calendar} label="Receipt Date" value={formatDate(donation.receiptDate)} />
          <Row icon={FileText} label="Note" value={donation.note} />
        </div>
        <div className="flex flex-col gap-4">
          <Row icon={User} label="Donor Name" value={donation.donorName} />
          <Row icon={DonorIdIcon} label="Donor ID" value={donation.donorId} />
          <Row icon={CreditCard} label="Payment Method" value={donation.paymentMethod} />
          <div className="flex items-start gap-3">
            <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-surface-canvas text-ink-subtle">
              <CheckCircle2 className="h-4 w-4" />
            </span>
            <div>
              <p className="text-xs text-ink-subtle">Payment Status</p>
              <div className="mt-1">
                <Badge variant={DONATION_PAYMENT_STATUS_BADGE_MAP[donation.paymentStatus] ?? "success"}>{donation.paymentStatus}</Badge>
              </div>
            </div>
          </div>
          <Row icon={Hash} label="Transaction ID" value={donation.transactionId} />
          <Row icon={Megaphone} label="Appeal / Campaign" value={donation.appealCampaign ?? "–"} />
          <Row icon={EyeOff} label="Anonymous" value={donation.anonymous} />
        </div>
      </div>
    </div>
  );
}
