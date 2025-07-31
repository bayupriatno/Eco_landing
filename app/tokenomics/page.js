"use client";
import TokenomicsChart from "../../components/TokenomicsChart";

export default function tokenomics() {
  return (
    <section className="p-10 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-6">Tokenomics EcoGreen</h2>
      <TokenomicsChart />
    </section>
  );
}