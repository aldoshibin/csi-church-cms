"use client";

import { Users, User } from "lucide-react";
import { FaUserClock } from "react-icons/fa6";
import { FaUsers } from "react-icons/fa";
import { FaUserFriends } from "react-icons/fa";
import { FaPeopleGroup } from "react-icons/fa6";

export function SeniorStatCards({ mock }) {
  const cards = [
    { label: "Total Senior Members", value: mock.cards.totalSenior, sublabel: "Total senior members", icon: FaUserClock },
    { label: "60 - 69 Years", value: mock.cards.age60to69.value, sublabel: `${mock.cards.age60to69.percent}% of total`, icon: FaUsers },
    { label: "70 - 79 Years", value: mock.cards.age70to79.value, sublabel: `${mock.cards.age70to79.percent}% of total`, icon: FaUserFriends },
    { label: "80+ Years", value: mock.cards.age80plus.value, sublabel: `${mock.cards.age80plus.percent}% of total`, icon: FaPeopleGroup },
  ];

  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-4">
      {cards.map((card) => (
        <div key={card.label} className="rounded-lg border border-border bg-white p-4 shadow-card">
          <div className="flex justify-center items-center gap-3">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand-700 text-white">
              <card.icon className="h-5 w-5" />
            </div>
            <div>
              <p className="text-xs text-ink-subtle">{card.label}</p>
              <p className="mt-0.5 text-xl font-bold text-ink font-display">{card.value}</p>
              <p className="text-xs text-ink-subtle">{card.sublabel}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
