"use client";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

export default function TokenomicsChart() {
  const data = [
    { name: "Staking Rewards", value: 40 },
    { name: "Liquidity", value: 25 },
    { name: "Marketing", value: 15 },
    { name: "Team", value: 10 },
    { name: "Reserve", value: 10 },
  ];
  const COLORS = ["#28a745", "#6cc24a", "#3fa34d", "#a1d884", "#c1e8a3"];

  return (
    <PieChart width={400} height={400}>
      <Pie
        data={data}
        cx="50%"
        cy="50%"
        outerRadius={120}
        fill="#8884d8"
        dataKey="value"
        label
      >
        {data.map((_, i) => (
          <Cell key={i} fill={COLORS[i % COLORS.length]} />
        ))}
      </Pie>
      <Tooltip />
      <Legend />
    </PieChart>
  );
}