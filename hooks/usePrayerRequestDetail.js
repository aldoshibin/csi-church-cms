"use client";

import * as React from "react";
import { prayerMinistryService } from "@/services/prayerMinistryService";
import { buildPrayerRequestDetailMock } from "@/lib/mock/prayerRequestsMockData";

export function usePrayerRequestDetail(id) {
  const [request, setRequest] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(false);

  const load = React.useCallback(async () => {
    if (!id) {
      setRequest(null);
      return;
    }
    setIsLoading(true);
    try {
      const result = await prayerMinistryService.getPrayerRequest(id);
      setRequest(result ?? buildPrayerRequestDetailMock(id));
    } catch {
      setRequest(buildPrayerRequestDetailMock(id));
    } finally {
      setIsLoading(false);
    }
  }, [id]);

  React.useEffect(() => {
    load();
  }, [load]);

  const addUpdate = (text) => {
    if (!text.trim()) return;
    setRequest((prev) => prev ? {
      ...prev,
      updates: [
        { date: new Date().toISOString().slice(0, 10), time: new Date().toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit" }), author: "You", authorType: "requester", text: text.trim() },
        ...prev.updates,
      ],
    } : prev);
  };

  const markAnswered = () => {
    setRequest((prev) => prev ? { ...prev, status: "Answered" } : prev);
  };

  return { request, isLoading, addUpdate, markAnswered };
}
