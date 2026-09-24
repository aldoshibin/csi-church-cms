"use client";

import { useParams } from "next/navigation";
import { DonationDetailView } from "@/components/mission-evangelism/DonationDetailView";

export default function DonationDetailPage() {
  const params = useParams();
  return <DonationDetailView id={params.id} />;
}
