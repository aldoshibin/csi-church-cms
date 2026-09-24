"use client";

import { useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { ArrowLeft, Pencil, MessageSquare } from "lucide-react";

import { useYmVolunteerDetail } from "@/hooks/useYmVolunteerDetail";
import { Button } from "@/components/ui/Button";
import { VolunteerHeaderCard } from "@/components/youth-ministry/volunteers/detail/VolunteerHeaderCard";
import { VolunteerDetailsTabs } from "@/components/youth-ministry/volunteers/detail/VolunteerDetailsTabs";
import { VolunteerOverviewTab } from "@/components/youth-ministry/volunteers/detail/VolunteerOverviewTab";
import { VolunteerTabPlaceholder } from "@/components/youth-ministry/volunteers/detail/VolunteerTabPlaceholder";
import { ServiceSummaryCard, RecentAssignmentsCard, VolunteerNotesCard } from "@/components/youth-ministry/volunteers/detail/VolunteerDetailBottomCards";

export default function VolunteerDetailsPage() {
  const { id } = useParams();
  const { volunteer } = useYmVolunteerDetail(id);
  const [activeTab, setActiveTab] = useState("Overview");

  return (
    <div className="space-y-5 pb-10">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <nav className="flex items-center gap-1.5 text-xs text-interactive-500">
            <Link href="/youth-ministry/volunteers" className="hover:underline">Volunteers</Link>
            <span className="text-ink-subtle">›</span>
            <span className="font-medium text-ink">Volunteer Details</span>
          </nav>
          <h1 className="mt-1 font-display text-2xl font-bold text-ink">Volunteer Details</h1>
        </div>
        <Link href="/youth-ministry/volunteers">
          <Button type="button" variant="secondary" leftIcon={<ArrowLeft className="h-4 w-4" />}>Back to Volunteers</Button>
        </Link>
      </div>

      <VolunteerHeaderCard volunteer={volunteer} />

      <div className="rounded-lg border border-border bg-white p-6 shadow-card">
        <VolunteerDetailsTabs active={activeTab} onChange={setActiveTab} />
        <div className="mt-5">
          {activeTab === "Overview" ? <VolunteerOverviewTab volunteer={volunteer} /> : <VolunteerTabPlaceholder label={activeTab} />}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
        <ServiceSummaryCard summary={volunteer.serviceSummary} />
        <RecentAssignmentsCard assignments={volunteer.recentAssignments} />
        <VolunteerNotesCard notes={volunteer.notes} />
      </div>

      <div className="flex items-center justify-center gap-3">
        <Button type="button" variant="secondary" leftIcon={<Pencil className="h-4 w-4" />}>Edit Volunteer</Button>
        <Button type="button" leftIcon={<MessageSquare className="h-4 w-4" />}>Send Message</Button>
      </div>
    </div>
  );
}
