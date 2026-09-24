"use client";

import * as React from "react";
import { Search, Inbox, Clock, CheckCircle2, XCircle } from "lucide-react";
import { useBookingRequests } from "@/hooks/useBookingRequests";
import { useBookingRequestDetail } from "@/hooks/useBookingRequestDetail";
import { AllBookingsStatCard } from "@/components/facility-booking/all-bookings/AllBookingsStatCard";
import { BookingRequestsTable } from "@/components/facility-booking/booking-requests/BookingRequestsTable";
import { BookingRequestDetailsDrawer } from "@/components/facility-booking/booking-requests/BookingRequestDetailsDrawer";
import { RequestStatusOverviewCard } from "@/components/facility-booking/booking-requests/RequestStatusOverviewCard";
import { PopularFacilitiesCard } from "@/components/facility-booking/booking-requests/PopularFacilitiesCard";
import { BookingRequestsQuickActionsCard } from "@/components/facility-booking/booking-requests/BookingRequestsQuickActionsCard";
import { BookingRequestsHelpCard } from "@/components/facility-booking/booking-requests/BookingRequestsHelpCard";
import { useToast } from "@/contexts/ToastContext";

export default function BookingRequestsPage() {
  const {
    requests, totalCount, isLoading, stats, donut, popularFacilities,
    search, setSearch, statusFilter, setStatusFilter,
    page, setPage, pageSize,
  } = useBookingRequests();

  const { toast } = useToast();
  const [selectedId, setSelectedId] = React.useState(null);
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const { request, isLoading: isDetailLoading } = useBookingRequestDetail(selectedId);

  const handleView = (row) => {
    setSelectedId(row.id);
    setDrawerOpen(true);
  };

  const handleApprove = (row) => {
    toast?.({ variant: "success", title: "Request approved", description: `${row?.id ?? "Request"} has been approved.` });
    setDrawerOpen(false);
  };

  const handleReject = (row) => {
    toast?.({ variant: "danger", title: "Request rejected", description: `${row?.id ?? "Request"} has been rejected.` });
    setDrawerOpen(false);
  };

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-2xl font-semibold text-ink">Booking Requests</h1>
        <p className="mt-1 text-sm text-ink-subtle">Review and respond to facility booking requests.</p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <AllBookingsStatCard icon={Inbox} iconBg="bg-[#DBEAFE]" iconColor="text-[#2563EB]" label="Total Requests" value={stats.total.value} sub={stats.total.sub} />
        <AllBookingsStatCard icon={Clock} iconBg="bg-[#FFEDD5]" iconColor="text-[#EA580C]" label="Pending" labelColor="text-warning-600" value={stats.pending.value} sub={stats.pending.sub} />
        <AllBookingsStatCard icon={CheckCircle2} iconBg="bg-[#DCFCE7]" iconColor="text-[#16A34A]" label="Approved" labelColor="text-success-600" value={stats.approved.value} sub={stats.approved.sub} />
        <AllBookingsStatCard icon={XCircle} iconBg="bg-[#FEE2E2]" iconColor="text-[#DC2626]" label="Rejected" labelColor="text-danger-600" value={stats.rejected.value} sub={stats.rejected.sub} />
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_300px]">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <div className="relative flex-1">
              <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-subtle" />
              <input
                value={search} onChange={(e) => setSearch(e.target.value)}
                placeholder="Search by requester name, email, phone, event..."
                className="h-10 w-full rounded-md border border-border bg-white pl-9 pr-3 text-sm text-ink placeholder:text-ink-subtle focus:outline-none focus:ring-2 focus:ring-interactive-500/20 focus:border-interactive-500"
              />
            </div>
            <select
              value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)}
              className="h-10 rounded-md border border-border bg-white px-3 text-sm text-ink focus:outline-none focus:ring-2 focus:ring-interactive-500/20 focus:border-interactive-500"
            >
              {["All Status", "Pending", "Approved", "Rejected"].map((s) => <option key={s} value={s}>{s}</option>)}
            </select>
          </div>

          <BookingRequestsTable
            requests={requests} isLoading={isLoading}
            page={page} pageSize={pageSize} totalCount={totalCount} onPageChange={setPage}
            onView={handleView}
          />
        </div>

        <div className="flex flex-col gap-6">
          <RequestStatusOverviewCard data={donut} />
          <PopularFacilitiesCard facilities={popularFacilities} />
          <BookingRequestsQuickActionsCard />
          <BookingRequestsHelpCard />
        </div>
      </div>

      <BookingRequestDetailsDrawer
        open={drawerOpen} onOpenChange={setDrawerOpen}
        request={request} isLoading={isDetailLoading}
        onApprove={handleApprove} onReject={handleReject}
      />
    </div>
  );
}
