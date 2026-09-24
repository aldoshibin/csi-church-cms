"use client";

import * as React from "react";
import { announcementsService } from "@/services/announcementsService";
import { buildAnnouncementDetailMock } from "@/lib/mock/vmAnnouncementsMockData";

export function useAnnouncementDetail(id) {
  const [announcement, setAnnouncement] = React.useState(() => buildAnnouncementDetailMock(id));
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    let cancelled = false;
    (async () => {
      setIsLoading(true);
      try {
        const result = await announcementsService.getAnnouncement(id);
        if (!cancelled) setAnnouncement(result ?? buildAnnouncementDetailMock(id));
      } catch {
        if (!cancelled) setAnnouncement(buildAnnouncementDetailMock(id));
      } finally {
        if (!cancelled) setIsLoading(false);
      }
    })();
    return () => { cancelled = true; };
  }, [id]);

  return { announcement, isLoading };
}
