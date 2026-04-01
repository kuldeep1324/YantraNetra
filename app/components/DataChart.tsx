"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

type Props = {
  data: any[];
  dataKey: string;
  title: string;
};

export default function DataChart({ data, dataKey, title }: Props) {
  return (
    <div className="bg-gray-900 p-4 rounded-2xl shadow mt-6">
      <h2 className="text-lg mb-4">{title}</h2>

      <ResponsiveContainer width="100%" height={200}>
        <LineChart data={data}>
          <XAxis dataKey="time" hide />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey={dataKey} stroke="#22c55e" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}