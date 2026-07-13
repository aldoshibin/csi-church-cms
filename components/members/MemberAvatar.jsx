"use client";

import Image from "next/image";
import { getInitials } from "@/lib/utils";

export function MemberAvatar({ photo, fullName, size = 36 }) {
  if (photo) {
    return (
      <Image
        src={photo}
        alt={fullName}
        width={size}
        height={size}
        className="shrink-0 rounded-full object-cover"
        style={{ width: size, height: size }}
      />
    );
  }
  return (
    <div
      className="flex shrink-0 items-center justify-center rounded-full bg-interactive-50 text-xs font-semibold text-interactive-600"
      style={{ width: size, height: size }}
    >
      {getInitials(fullName)}
    </div>
  );
}
