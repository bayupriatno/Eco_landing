"use client";
import { useState } from "react";

export default function Staking() {
  const [amount, setAmount] = useState("");

  const stake = () => alert(`Stake ${amount} ECO (dummy)`);
  const unstake = () => alert(`Unstake ${amount} ECO (dummy)`);

  return (
    <section className="p-10 max-w-md mx-auto">
      <h2 className="text-3xl font-bold mb-6">Staking EcoGreen</h2>
      <input
        type="number"
        placeholder="Jumlah Token"
        className="border p-2 w-full mb-4 text-black"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <div className="space-x-4">
        <button
          className="bg-ecoGreen text-white px-4 py-2 rounded"
          onClick={stake}
        >
          Stake
        </button>
        <button
          className="bg-red-500 text-white px-4 py-2 rounded"
          onClick={unstake}
        >
          Unstake
        </button>
      </div>
    </section>
  );
}