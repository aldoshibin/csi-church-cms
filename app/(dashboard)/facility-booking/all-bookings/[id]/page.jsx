"use client";

import { useParams, useRouter } from "next/navigation";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { Printer, ChevronDown, ChevronLeft, ChevronRight, Pencil, Copy, XCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { useBookingDetail } from "@/hooks/useBookingDetail";
import { BookingInformationCard } from "@/components/facility-booking/booking-details/BookingInformationCard";
import { StatusPaymentCard } from "@/components/facility-booking/booking-details/StatusPaymentCard";
import { BookerInformationCard } from "@/components/facility-booking/booking-details/BookerInformationCard";
import { TimelineActivityLogCard } from "@/components/facility-booking/booking-details/TimelineActivityLogCard";
import { AdditionalInformationCard } from "@/components/facility-booking/booking-details/AdditionalInformationCard";
import { FacilityDetailsCard } from "@/components/facility-booking/booking-details/FacilityDetailsCard";
import { BookingQuickActionsCard } from "@/components/facility-booking/booking-details/BookingQuickActionsCard";
import { BookingHelpCard } from "@/components/facility-booking/booking-details/BookingHelpCard";
import { BOOKING_STATUS_VARIANT } from "@/lib/mock/vmFacilityBookingMockData";

const menuItemClass =
  "flex w-full items-center gap-2 rounded px-2.5 py-2 text-sm text-ink-muted outline-none transition-colors hover:bg-surface-canvas hover:text-ink focus:bg-surface-canvas cursor-pointer";

export default function BookingDetailPage() {
  const { id } = useParams();
  const router = useRouter();
  const { booking, isLoading } = useBookingDetail(id);

  if (isLoading || !booking) {
    return <div className="h-64 animate-pulse rounded-lg border border-border bg-surface-muted" />;
  }

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <div className="flex items-center gap-3">
            <h1 className="text-2xl font-semibold text-ink">Booking Details</h1>
            <Badge variant={BOOKING_STATUS_VARIANT[booking.status] ?? "default"}>{booking.status}</Badge>
          </div>
          <p className="mt-1 text-sm text-ink-subtle">Booking ID: {booking.id}</p>
        </div>
        <div className="flex items-center gap-2">
          <Button type="button" variant="secondary" leftIcon={<Printer className="h-4 w-4" />}>Print</Button>
          <DropdownMenu.Root>
            <DropdownMenu.Trigger asChild>
              <Button type="button" variant="secondary" rightIcon={<ChevronDown className="h-3.5 w-3.5" />}>
                More Actions
              </Button>
            </DropdownMenu.Trigger>
            <DropdownMenu.Portal>
              <DropdownMenu.Content align="end" sideOffset={6} className="z-50 w-48 rounded-md border border-border bg-white p-1.5 shadow-elevated animate-fade-in">
                <DropdownMenu.Item className={menuItemClass}><Pencil className="h-4 w-4" /> Edit Booking</DropdownMenu.Item>
                <DropdownMenu.Item className={menuItemClass}><Copy className="h-4 w-4" /> Duplicate Booking</DropdownMenu.Item>
                <DropdownMenu.Item className={`${menuItemClass} text-danger-600 hover:text-danger-600`}>
                  <XCircle className="h-4 w-4" /> Cancel Booking
                </DropdownMenu.Item>
              </DropdownMenu.Content>
            </DropdownMenu.Portal>
          </DropdownMenu.Root>
          <Button type="button" variant="secondary" size="icon" onClick={() => router.back()} aria-label="Previous booking">
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button type="button" variant="secondary" size="icon" aria-label="Next booking">
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_1fr_300px]">
        <div className="flex flex-col gap-6">
          <BookingInformationCard booking={booking} />
          <BookerInformationCard booking={booking} />
          <TimelineActivityLogCard timeline={booking.timeline} />
        </div>

        <div className="flex flex-col gap-6">
          <StatusPaymentCard booking={booking} />
          <AdditionalInformationCard additional={booking.additional} />
        </div>

        <div className="flex flex-col gap-6">
          <FacilityDetailsCard facility={booking.facility} />
          <BookingQuickActionsCard />
          <BookingHelpCard />
        </div>
      </div>

      <p className="text-xs text-ink-subtle">Note: All times are in Asia/Kolkata (IST) timezone.</p>
    </div>
  );
}
