"use client";

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";


export function RequestsOverTimeChart({ data = [] }) {
  const chartData = data.map((value, index) => ({ index, value }));

  return (
    <div className="rounded-lg border border-border bg-white p-4 shadow-card">
      <h3 className="mb-4 text-sm font-semibold text-ink">Requests Over Time (This Year)</h3>
      <ResponsiveContainer width="100%" height={200}>
        <LineChart data={chartData} margin={{ top: 8, right: 8, left: -16, bottom: 0 }}>
          <CartesianGrid vertical={false} stroke="#E4E7ED" />
          <XAxis dataKey="index" hide />
          <YAxis tick={{ fontSize: 12, fill: "#8B90A0" }} axisLine={false} tickLine={false} width={28} />
          <Tooltip contentStyle={{ borderRadius: 8, border: "1px solid #E4E7ED", fontSize: 13 }} />
          <Line type="monotone" dataKey="value" stroke="#0E5C4E" strokeWidth={2.5} dot={{ r: 4, fill: "#0E5C4E" }} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
