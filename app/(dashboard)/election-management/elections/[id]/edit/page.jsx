"use client";

import { EditElectionView } from "@/components/election-management/EditElectionView";

export default function EditElectionPage({ params }) {
  return <EditElectionView id={params.id} />;
}
