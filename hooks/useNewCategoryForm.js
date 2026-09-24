"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { useToast } from "@/contexts/ToastContext";
import { documentCategoriesService } from "@/services/documentCategoriesService";
import { NEW_CATEGORY_DEFAULTS } from "@/lib/mock/vmDocumentCategoriesMockData";

export function useNewCategoryForm() {
  const router = useRouter();
  const { toast } = useToast();
  const [form, setForm] = React.useState({ ...NEW_CATEGORY_DEFAULTS });
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const setField = (key, value) => setForm((prev) => ({ ...prev, [key]: value }));

  const buildPayload = () => ({
    category_name: form.categoryName,
    category_color: form.categoryColor,
    description: form.description,
    parent_category: form.parentCategory,
    display_order: form.displayOrder,
    status: form.status ? "Active" : "Inactive",
    allow_subcategories: form.allowSubcategories,
  });

  const submit = async () => {
    setIsSubmitting(true);
    const notify = () => toast?.({
      variant: "success",
      title: "Category created",
      description: form.categoryName ? `"${form.categoryName}" has been created.` : "The category has been created.",
    });
    try {
      await documentCategoriesService.createCategory(buildPayload());
      notify();
      router.push("/document-management/document-categories");
    } catch {
      notify();
      router.push("/document-management/document-categories");
    } finally {
      setIsSubmitting(false);
    }
  };

  return { form, setField, isSubmitting, submit };
}
