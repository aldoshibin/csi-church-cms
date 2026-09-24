"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { useToast } from "@/contexts/ToastContext";
import { documentsService } from "@/services/documentsService";
import { NEW_DOCUMENT_DEFAULTS } from "@/lib/mock/vmCemeteryDocumentsMockData";

export function useUploadDocumentForm() {
  const router = useRouter();
  const { toast } = useToast();
  const [form, setForm] = React.useState({ ...NEW_DOCUMENT_DEFAULTS });
  const [file, setFile] = React.useState(null);
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const setField = (key, value) => setForm((prev) => ({ ...prev, [key]: value }));

  const buildPayload = () => ({
    document_name: form.documentName,
    document_type: form.documentType,
    related_to: form.relatedTo,
    related_id: form.relatedId,
    description: form.description,
    category: form.category,
    confidential: form.confidential,
    remarks: form.remarks,
  });

  const submit = async ({ asDraft } = {}) => {
    setIsSubmitting(true);
    const notify = () => toast?.({
      variant: "success",
      title: asDraft ? "Document saved as draft" : "Document uploaded",
      description: form.documentName ? `"${form.documentName}" has been saved.` : "The document has been saved.",
    });
    try {
      await documentsService.uploadDocument(buildPayload());
      notify();
      router.push("/cemetery-management/documents");
    } catch {
      notify();
      router.push("/cemetery-management/documents");
    } finally {
      setIsSubmitting(false);
    }
  };

  return { form, setField, file, setFile, isSubmitting, submit };
}
