"use client";

import { Cake, HeartHandshake } from "lucide-react";
import { getInitials, formatDate } from "@/lib/utils";


export function PeopleListWidget({ title, people = [], variant = "birthday" }) {
  const Icon = variant === "birthday" ? Cake : HeartHandshake;

  return (
    <div className="rounded-lg border border-border bg-white p-5 shadow-card">
      <div className="mb-4 flex items-center gap-2">
        <Icon className="h-4 w-4 text-accent-500" />
        <h3 className="text-sm font-semibold text-ink">{title}</h3>
      </div>

      {people.length === 0 ? (
        <p className="py-6 text-center text-sm text-ink-subtle">No {variant === "birthday" ? "birthdays" : "anniversaries"} this month.</p>
      ) : (
        <ul className="scroll-thin max-h-72 space-y-3 overflow-y-auto">
          {people.map((person) => (
            <li key={person.id} className="flex items-center gap-3">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-interactive-50 text-xs font-semibold text-interactive-600">
                {getInitials(`${person.first_name} ${person.last_name}`)}
              </div>
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-medium text-ink">
                  {person.first_name} {person.last_name}
                  {person.spouse_name && <span className="text-ink-subtle"> &amp; {person.spouse_name}</span>}
                </p>
                <p className="text-xs text-ink-subtle">
                  {formatDate(person.date_of_birth || person.marriage_date, { day: "numeric", month: "short" })}
                </p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
