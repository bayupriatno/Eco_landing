"use client";
import { useState } from "react";
import { ethers } from "ethers";

export default function WalletButton() {
  const [account, setAccount] = useState(null);

  async function connectWallet() {
    if (!window.ethereum) {
      alert("MetaMask tidak ditemukan!");
      return;
    }
    const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
    setAccount(accounts[0]);
  }

  return (
    <button
      onClick={connectWallet}
      className="bg-white text-ecoGreen px-3 py-1 rounded-lg"
    >
      {account ? account.slice(0, 6) + "..." + account.slice(-4) : "Connect Wallet"}
    </button>
  );
}