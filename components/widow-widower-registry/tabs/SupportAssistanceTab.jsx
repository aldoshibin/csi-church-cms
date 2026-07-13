"use client";

import { HandHeart, ShieldPlus, Users } from "lucide-react";
import { Button } from "@/components/ui/Button";

const ICONS = { heart: HandHeart, shieldPlus: ShieldPlus, users: Users };

export function SupportAssistanceTab({ items, onAction }) {
  return (
    <div className="p-5">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {items.map((item) => {
          const Icon = ICONS[item.icon] || HandHeart;
          return (
            <div key={item.id} className="rounded-lg border border-border p-5">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-interactive-50 text-interactive-500">
                <Icon className="h-5 w-5" />
              </div>
              <p className="font-semibold text-interactive-600">{item.title}</p>
              <p className="mt-1 text-sm text-ink-subtle">{item.description}</p>
              <Button type="button" variant="secondary" size="sm" className="mt-4" onClick={() => onAction(item)}>
                {item.actionLabel}
              </Button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
