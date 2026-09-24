"use client";

import { useParams } from "next/navigation";
import { PositionDetailView } from "@/components/election-management/PositionDetailView";

export default function PositionDetailPage() {
  const params = useParams();
  return <PositionDetailView id={params.id} />;
}
