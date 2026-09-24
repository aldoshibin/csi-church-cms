"use client";

import * as React from "react";
import { documentCategoriesService } from "@/services/documentCategoriesService";
import { buildCategoryDetailMock } from "@/lib/mock/vmDocumentCategoriesMockData";

export function useCategoryDetail(id) {
  const [category, setCategory] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(false);

  React.useEffect(() => {
    if (!id) {
      setCategory(null);
      return;
    }
    let active = true;
    (async () => {
      setIsLoading(true);
      try {
        const result = await documentCategoriesService.getCategory(id);
        if (active) setCategory(result ?? buildCategoryDetailMock(id));
      } catch {
        if (active) setCategory(buildCategoryDetailMock(id));
      } finally {
        if (active) setIsLoading(false);
      }
    })();
    return () => {
      active = false;
    };
  }, [id]);

  return { category, isLoading };
}
