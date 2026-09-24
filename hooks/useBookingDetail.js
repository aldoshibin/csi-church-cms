"use client";

import * as React from "react";
import { facilityBookingService } from "@/services/facilityBookingService";
import { buildBookingDetailMock } from "@/lib/mock/vmFacilityBookingMockData";

export function useBookingDetail(id) {
  const [booking, setBooking] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    if (!id) {
      setBooking(null);
      return;
    }
    let active = true;
    (async () => {
      setIsLoading(true);
      try {
        const result = await facilityBookingService.getBooking(id);
        if (active) setBooking(result ?? buildBookingDetailMock(id));
      } catch {
        if (active) setBooking(buildBookingDetailMock(id));
      } finally {
        if (active) setIsLoading(false);
      }
    })();
    return () => {
      active = false;
    };
  }, [id]);

  return { booking, isLoading };
}
