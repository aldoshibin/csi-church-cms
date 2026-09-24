"use client";

import { useParams } from "next/navigation";
import { VoterVotingDetailView } from "@/components/election-management/VoterVotingDetailView";

export default function VoterVotingDetailPage() {
  const params = useParams();
  return <VoterVotingDetailView id={params.id} />;
}
