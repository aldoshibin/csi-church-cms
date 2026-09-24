"use client";

import * as React from "react";
import { bookingRequestsService } from "@/services/bookingRequestsService";
import { buildRequestDetailMock } from "@/lib/mock/vmBookingRequestsMockData";

export function useBookingRequestDetail(id) {
  const [request, setRequest] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(false);

  React.useEffect(() => {
    if (!id) {
      setRequest(null);
      return;
    }
    let active = true;
    (async () => {
      setIsLoading(true);
      try {
        const result = await bookingRequestsService.getRequest(id);
        if (active) setRequest(result ?? buildRequestDetailMock(id));
      } catch {
        if (active) setRequest(buildRequestDetailMock(id));
      } finally {
        if (active) setIsLoading(false);
      }
    })();
    return () => {
      active = false;
    };
  }, [id]);

  return { request, isLoading };
}
