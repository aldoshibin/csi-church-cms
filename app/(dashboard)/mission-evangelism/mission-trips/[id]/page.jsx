"use client";

import { useParams } from "next/navigation";
import { TripDetailView } from "@/components/mission-evangelism/TripDetailView";

export default function TripDetailPage() {
  const params = useParams();
  return <TripDetailView id={params.id} />;
}
