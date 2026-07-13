"use client";

import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { formatDate } from "@/lib/utils";


export function AttendanceChart({ data = [] }) {
  const chartData = data.map((d) => ({ ...d, label: formatDate(d.date, { day: "numeric", month: "short" }) }));

  return (
    <ResponsiveContainer width="100%" height={260}>
      <AreaChart data={chartData} margin={{ top: 8, right: 8, left: -16, bottom: 0 }}>
        <defs>
          <linearGradient id="attendanceFill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#3B5BDB" stopOpacity={0.25} />
            <stop offset="100%" stopColor="#3B5BDB" stopOpacity={0} />
          </linearGradient>
        </defs>
        <CartesianGrid vertical={false} stroke="#E4E7ED" />
        <XAxis dataKey="label" tick={{ fontSize: 12, fill: "#8B90A0" }} axisLine={false} tickLine={false} />
        <YAxis tick={{ fontSize: 12, fill: "#8B90A0" }} axisLine={false} tickLine={false} width={32} />
        <Tooltip
          contentStyle={{ borderRadius: 8, border: "1px solid #E4E7ED", fontSize: 13 }}
          labelStyle={{ color: "#1A1D29", fontWeight: 600 }}
        />
        <Area type="monotone" dataKey="present" name="Present" stroke="#3B5BDB" strokeWidth={2} fill="url(#attendanceFill)" />
      </AreaChart>
    </ResponsiveContainer>
  );
}
