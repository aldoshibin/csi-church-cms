"use client";

import { useParams } from "next/navigation";
import { VoterDetailView } from "@/components/election-management/VoterDetailView";

export default function VoterDetailPage() {
  const params = useParams();
  return <VoterDetailView id={params.id} />;
}
