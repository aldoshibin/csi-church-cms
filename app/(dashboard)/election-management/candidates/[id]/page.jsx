"use client";

import { useParams } from "next/navigation";
import { CandidateDetailView } from "@/components/election-management/CandidateDetailView";

export default function CandidateDetailPage() {
  const params = useParams();
  return <CandidateDetailView id={params.id} />;
}
