"use client";

import * as React from "react";
import { messagesService } from "@/services/messagesService";
import { buildMessageDetailMock } from "@/lib/mock/vmMessagesMockData";

export function useMessageDetail(id) {
  const [message, setMessage] = React.useState(() => buildMessageDetailMock(id));
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    let cancelled = false;
    (async () => {
      setIsLoading(true);
      try {
        const result = await messagesService.getMessage(id);
        if (!cancelled) setMessage(result ?? buildMessageDetailMock(id));
      } catch {
        if (!cancelled) setMessage(buildMessageDetailMock(id));
      } finally {
        if (!cancelled) setIsLoading(false);
      }
    })();
    return () => { cancelled = true; };
  }, [id]);

  return { message, isLoading };
}
