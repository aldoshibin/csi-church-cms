"use client";

import * as React from "react";
import { lessonsService } from "@/services/lessonsService";
import { LESSON_DETAIL_MOCK } from "@/lib/mock/lessonsMockData";

export function useLessonDetail(id) {
  const [lesson, setLesson] = React.useState({ ...LESSON_DETAIL_MOCK, id: id ?? LESSON_DETAIL_MOCK.id });
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    let cancelled = false;
    (async () => {
      setIsLoading(true);
      try {
        const result = await lessonsService.getLesson(id);
        if (!cancelled) setLesson(result ?? { ...LESSON_DETAIL_MOCK, id });
      } catch {
        if (!cancelled) setLesson({ ...LESSON_DETAIL_MOCK, id });
      } finally {
        if (!cancelled) setIsLoading(false);
      }
    })();
    return () => { cancelled = true; };
  }, [id]);

  return { lesson, isLoading };
}
