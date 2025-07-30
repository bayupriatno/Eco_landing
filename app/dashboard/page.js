"use client";
import { useState } from "react";
import { getProvider, CONTRACT_ADDRESS, ABI } from "../../lib/Web3";
import { ethers } from "ethers";

export default function Dashboard() {
  const [balance, setBalance] = useState(null);
  const [address, setAddress] = useState("");

  async function checkBalance() {
    const provider = getProvider();
    if (!provider) return alert("MetaMask belum terpasang!");
    try {
      const contract = new ethers.Contract(CONTRACT_ADDRESS, ABI, provider);
      const bal = await contract.balanceOf(address);
      const decimals = await contract.decimals();
      setBalance(Number(bal) / 10 ** decimals);
    } catch (err) {
      alert("Gagal mengambil balance");
    }
  }

  return (
    <section className="p-10 max-w-xl mx-auto">
      <h2 className="text-3xl font-bold mb-4">Dashboard Holder</h2>
      <input
        className="border p-2 mr-2 text-black w-80"
        placeholder="Masukkan Wallet Address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
      />
      <button
        className="bg-ecoGreen text-white px-4 py-2 rounded"
        onClick={checkBalance}
      >
        Cek Balance
      </button>
      {balance !== null && (
        <p className="mt-4 text-lg font-bold">Balance: {balance} ECO</p>
      )}
    </section>
  );
}