"use client";

import * as React from "react";
import { choirWorshipService } from "@/services/choirWorshipService";
import { buildSongDetailMock } from "@/lib/mock/songsMockData";

export function useSongDetail(id) {
  const [song, setSong] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(false);

  React.useEffect(() => {
    if (!id) {
      setSong(null);
      return;
    }
    let cancelled = false;
    (async () => {
      setIsLoading(true);
      try {
        const result = await choirWorshipService.getSong(id);
        if (!cancelled) setSong(result ?? buildSongDetailMock(id));
      } catch {
        if (!cancelled) setSong(buildSongDetailMock(id));
      } finally {
        if (!cancelled) setIsLoading(false);
      }
    })();
    return () => { cancelled = true; };
  }, [id]);

  return { song, isLoading };
}
