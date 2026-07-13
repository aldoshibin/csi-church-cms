"use client";

import { Wine, Church, HandHeart, Cross, Heart, Flower2 } from "lucide-react";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";

const CARD_ICONS = {
  totalSacraments: Wine,
  baptisms: Church,
  holyCommunions: HandHeart,
  confirmations: Cross,
  marriages: Heart,
  funerals: Flower2,
};


export function SacramentOverviewPanel({ overview, byLocation }) {
  const cards = [
    { key: "totalSacraments", label: "Total\nSacraments", ...overview.totalSacraments, isTotal: true },
    { key: "baptisms", label: "Baptisms", ...overview.baptisms },
    { key: "holyCommunions", label: "Holy\nCommunions", ...overview.holyCommunions },
    { key: "confirmations", label: "Confirmations", ...overview.confirmations },
    { key: "marriages", label: "Marriages", ...overview.marriages },
    { key: "funerals", label: "Funerals", ...overview.funerals },
  ];

  return (
    <div className="grid grid-cols-1 rounded-lg border border-border bg-white shadow-card lg:grid-cols-[1fr_auto_360px]">
      <div className="p-4">
        <h3 className="mb-4 text-sm font-semibold text-ink">
          Overview <span className="text-ink-subtle">(This Year)</span>
        </h3>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {cards.map((card) => {
            const Icon = CARD_ICONS[card.key];
            return (
              <div key={card.key} className="flex flex-col items-start gap-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-700 text-white">
                  <Icon className="h-[18px] w-[18px]" />
                </div>
                <div>
                  <p className="whitespace-pre-line text-xs font-medium text-ink">{card.label}</p>
                  <p className="text-xl font-bold text-ink font-display">{card.value}</p>
                  <p className="text-xs text-ink-subtle">{card.sublabel}</p>
                  {card.isTotal ? (
                    <p className="text-xs font-medium text-success-600">{card.trend}</p>
                  ) : (
                    <p className="text-xs text-ink-subtle">({card.percent})</p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="hidden border-l border-border lg:block" />

      <div className="border-t border-border p-4 lg:border-t-0">
        <h3 className="mb-4 text-sm font-semibold text-ink">
          By Location <span className="text-ink-subtle">(This Year)</span>
        </h3>
        <div className="flex items-center gap-4">
          <div className="relative h-[120px] w-[120px] shrink-0">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={byLocation} dataKey="count" nameKey="label" innerRadius={38} outerRadius={58} paddingAngle={2} strokeWidth={0}>
                  {byLocation.map((entry) => (
                    <Cell key={entry.label} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip contentStyle={{ borderRadius: 8, fontSize: 12 }} />
              </PieChart>
            </ResponsiveContainer>
            <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center">
              <p className="text-xl font-bold text-ink">{overview.totalSacraments.value}</p>
              <p className="text-[10px] text-ink-subtle">Total</p>
            </div>
          </div>
          <ul className="flex-1 space-y-2">
            {byLocation.map((item) => (
              <li key={item.label} className="flex items-center gap-2 text-sm">
                <span className="h-2.5 w-2.5 shrink-0 rounded-sm" style={{ backgroundColor: item.color }} />
                <span className="flex-1 text-ink">{item.label}</span>
                <span className="font-medium text-ink-subtle">{item.count} ({item.percent}%)</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
