"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

const AVATAR_COLORS = [
  "bg-[#F3E8FF] text-[#7C3AED]",
  "bg-[#DCFCE7] text-[#16A34A]",
  "bg-[#DBEAFE] text-[#2563EB]",
  "bg-[#FFEDD5] text-[#EA580C]",
];

function initials(name = "") {
  return name.split(" ").filter((w) => /^[A-Za-z]/.test(w)).slice(0, 2).map((w) => w[0]).join("").toUpperCase();
}

export function TripTeamCard({ team = [], viewAllLabel = "View All Team Members", viewAllHref = "#" }) {
  return (
    <div className="rounded-lg border border-border bg-white p-5 shadow-card">
      <h3 className="text-sm font-semibold text-ink">Team &amp; Volunteers</h3>
      <div className="mt-3 flex flex-col gap-3">
        {team.map((member, index) => (
          <div key={member.name} className="flex items-center gap-3">
            <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-xs font-semibold ${AVATAR_COLORS[index % AVATAR_COLORS.length]}`}>
              {initials(member.name)}
            </span>
            <div>
              <p className="text-sm font-medium text-ink">{member.name}</p>
              <p className="text-xs text-ink-subtle">{member.role}</p>
            </div>
          </div>
        ))}
      </div>
      <Link href={viewAllHref} className="mt-4 flex items-center gap-1 text-sm font-medium text-interactive-600 hover:underline">
        {viewAllLabel} <ArrowRight className="h-3.5 w-3.5" />
      </Link>
    </div>
  );
}
