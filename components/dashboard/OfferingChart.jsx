"use client";

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { formatCurrency } from "@/lib/utils";

/** "Offering Collection" trend chart — last 6 months of income. */
export function OfferingChart({ data = [] }) {
  const chartData = data.map((d) => ({
    ...d,
    label: new Date(`${d.month}-01`).toLocaleDateString("en-IN", { month: "short", year: "2-digit" }),
  }));

  return (
    <ResponsiveContainer width="100%" height={260}>
      <BarChart data={chartData} margin={{ top: 8, right: 8, left: -16, bottom: 0 }}>
        <CartesianGrid vertical={false} stroke="#E4E7ED" />
        <XAxis dataKey="label" tick={{ fontSize: 12, fill: "#8B90A0" }} axisLine={false} tickLine={false} />
        <YAxis tick={{ fontSize: 12, fill: "#8B90A0" }} axisLine={false} tickLine={false} width={48} tickFormatter={(v) => `₹${v / 1000}k`} />
        <Tooltip
          formatter={(value) => formatCurrency(value)}
          contentStyle={{ borderRadius: 8, border: "1px solid #E4E7ED", fontSize: 13 }}
          labelStyle={{ color: "#1A1D29", fontWeight: 600 }}
        />
        <Bar dataKey="total" name="Offerings" fill="#D4A24C" radius={[6, 6, 0, 0]} maxBarSize={36} />
      </BarChart>
    </ResponsiveContainer>
  );
}
