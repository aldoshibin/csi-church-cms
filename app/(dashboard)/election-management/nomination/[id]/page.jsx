"use client";

import { useParams } from "next/navigation";
import { NominationDetailView } from "@/components/election-management/NominationDetailView";

export default function NominationDetailPage() {
  const params = useParams();
  return <NominationDetailView id={params.id} />;
}
