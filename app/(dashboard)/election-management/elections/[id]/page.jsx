"use client";

import { useParams } from "next/navigation";
import { ElectionDetailView } from "@/components/election-management/ElectionDetailView";

export default function ElectionDetailPage() {
  const params = useParams();
  return <ElectionDetailView id={params.id} />;
}
