"use client";
import Link from "next/link";
import WalletButton from "./WalletButton";
import DarkModeToggle from "./DarkModeToggle";

export default function Navbar() {
  return (
    <nav className="bg-ecoGreen dark:bg-green-700 text-white p-4 flex justify-between items-center">
      <Link href="/" className="text-2xl font-bold">EcoGreen</Link>
      <div className="flex items-center space-x-4">
        <Link href="/about">Profil</Link>
        <Link href="/roadmap">Roadmap</Link>
        <Link href="/tokenomics">Tokenomics</Link>
        <Link href="/blog">Blog</Link>
        <Link href="/whitelist" className="bg-white text-ecoGreen px-3 py-1 rounded-lg">Whitelist</Link>
        <WalletButton />
        <DarkModeToggle />
      </div>
    </nav>
  );
}