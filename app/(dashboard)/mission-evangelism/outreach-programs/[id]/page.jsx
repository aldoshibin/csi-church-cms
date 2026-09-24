"use client";

import { useParams } from "next/navigation";
import { ProgramDetailView } from "@/components/mission-evangelism/ProgramDetailView";

export default function ProgramDetailPage() {
  const params = useParams();
  return <ProgramDetailView id={params.id} />;
}
