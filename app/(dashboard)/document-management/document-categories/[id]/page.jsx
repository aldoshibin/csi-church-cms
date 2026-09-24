"use client";

import { useParams } from "next/navigation";
import { CategoryDetailView } from "@/components/document-management/CategoryDetailView";

export default function CategoryDetailPage() {
  const params = useParams();
  return <CategoryDetailView id={params.id} />;
}
