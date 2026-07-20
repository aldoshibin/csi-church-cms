"use client";

import { Droplets, Sparkle, Wheat, HeartHandshake, Cross } from "lucide-react";
import { FaDroplet } from "react-icons/fa6";
import { CiSquareCheck } from "react-icons/ci";
import { FaRegCheckSquare } from "react-icons/fa";
import { FaTrophy } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";
import { FaCross } from "react-icons/fa6";

const ICON_MAP = {
  baptism: FaDroplet,
  confirmation: FaRegCheckSquare,
  communion: FaTrophy,
  marriage: FaHeart,
  funeral: FaCross,
};

export function SacramentSummaryWidget({ items = [] }) {
  return (
    <div className="border border-border bg-white p-4 shadow-card">
      <h3 className="text-[16px] font-semibold text-[#00695C]">Sacrament Summary</h3>
      <p className="mb-3 text-xs text-ink-subtle">(This Year)</p>

      <ul className="space-y-3">
        {items.map((item) => {
          const Icon = ICON_MAP[item.icon] ?? Droplets;
          return (
            <li key={item.label} className="flex items-center gap-3">
              <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#009688] text-white">
                <Icon className="h-3.5 w-3.5" />
              </div>
              <span className="flex-1 text-sm text-ink">{item.label}</span>
              <span className="text-sm font-semibold text-ink">{item.count}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
