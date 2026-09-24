"use client";

import * as React from "react";
import { emailCampaignsService } from "@/services/emailCampaignsService";
import { buildCampaignDetailMock } from "@/lib/mock/vmEmailCampaignsMockData";

export function useCampaignDetail(id) {
  const [campaign, setCampaign] = React.useState(() => buildCampaignDetailMock(id));
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    let cancelled = false;
    (async () => {
      setIsLoading(true);
      try {
        const result = await emailCampaignsService.getCampaign(id);
        if (!cancelled) setCampaign(result ?? buildCampaignDetailMock(id));
      } catch {
        if (!cancelled) setCampaign(buildCampaignDetailMock(id));
      } finally {
        if (!cancelled) setIsLoading(false);
      }
    })();
    return () => { cancelled = true; };
  }, [id]);

  return { campaign, isLoading };
}
