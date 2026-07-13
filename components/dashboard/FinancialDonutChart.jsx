"use client";

import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";
import { formatCurrency } from "@/lib/utils";


export function FinancialDonutChart({ totalIncome, breakdown = [] }) {
  return (
    <div className="relative h-[140px] w-[140px] shrink-0">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={breakdown}
            dataKey="amount"
            nameKey="label"
            innerRadius={42}
            outerRadius={66}
            paddingAngle={2}
            strokeWidth={0}
          >
            {breakdown.map((entry) => (
              <Cell key={entry.label} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip formatter={(value) => formatCurrency(value)} contentStyle={{ borderRadius: 8, fontSize: 12 }} />
        </PieChart>
      </ResponsiveContainer>
      <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center">
        <p className="text-[10px] text-ink-subtle">Total Income</p>
        <p className="text-sm font-bold text-ink">{formatCurrency(totalIncome)}</p>
      </div>
    </div>
  );
}
