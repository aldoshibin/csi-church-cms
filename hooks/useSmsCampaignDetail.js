"use client";

import * as React from "react";
import { smsCampaignsService } from "@/services/smsCampaignsService";
import { buildSmsCampaignDetailMock } from "@/lib/mock/vmSmsCampaignsMockData";

export function useSmsCampaignDetail(id) {
  const [campaign, setCampaign] = React.useState(() => buildSmsCampaignDetailMock(id));
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    let cancelled = false;
    (async () => {
      setIsLoading(true);
      try {
        const result = await smsCampaignsService.getCampaign(id);
        if (!cancelled) setCampaign(result ?? buildSmsCampaignDetailMock(id));
      } catch {
        if (!cancelled) setCampaign(buildSmsCampaignDetailMock(id));
      } finally {
        if (!cancelled) setIsLoading(false);
      }
    })();
    return () => { cancelled = true; };
  }, [id]);

  return { campaign, isLoading };
}
