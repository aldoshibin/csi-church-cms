"use client";

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";


export function MemberStatisticsChart({ data = [] }) {
  return (
    <ResponsiveContainer width="100%" height={280}>
      <LineChart data={data} margin={{ top: 8, right: 8, left: -16, bottom: 0 }}>
        <CartesianGrid vertical={false} stroke="#E4E7ED" />
        <XAxis dataKey="month" tick={{ fontSize: 12, fill: "#8B90A0" }} axisLine={false} tickLine={false} />
        <YAxis
          tick={{ fontSize: 12, fill: "#8B90A0" }}
          axisLine={false}
          tickLine={false}
          width={36}
          tickFormatter={(v) => (v >= 1000 ? `${v / 1000}K` : v)}
        />
        <Tooltip contentStyle={{ borderRadius: 8, border: "1px solid #E4E7ED", fontSize: 13 }} labelStyle={{ color: "#1A1D29", fontWeight: 600 }} />
        <Legend
          iconType="circle"
          formatter={(value) => <span className="text-xs text-ink-muted">{value}</span>}
          wrapperStyle={{ paddingBottom: 8 }}
        />
        <Line type="monotone" dataKey="totalMembers" name="Total Members" stroke="#008a7a" strokeWidth={2.5} dot={{ r: 4 }} />
        <Line type="monotone" dataKey="activeMembers" name="Active Members" stroke="#1E9E5A" strokeWidth={2.5} dot={{ r: 4 }} />
        <Line type="monotone" dataKey="newMembers" name="New Members" stroke="#E8983A" strokeWidth={2.5} dot={{ r: 4 }} />
      </LineChart>
    </ResponsiveContainer>
  );
}
