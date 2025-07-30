"use client";
import Link from "next/link";
import WalletButton from "./WalletButton";
import DarkModeToggle from "./DarkModeToggle";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-4 bg-white dark:bg-gray-900 shadow-md">
      {/* Logo */}
      <Link href="/" className="text-2xl font-bold text-ecoGreen">
        EcoGreen
      </Link>

      {/* Navigation Links */}
      <div className="flex gap-6 items-center text-gray-800 dark:text-gray-200">
        <Link href="/about" className="hover:text-ecoGreen">About</Link>
        <Link href="/roadmap" className="hover:text-ecoGreen">Roadmap</Link>
        <Link href="/tokenomics" className="hover:text-ecoGreen">Tokenomics</Link>
        <Link href="/whitelist" className="hover:text-ecoGreen">Whitelist</Link>

        {/* Dark Mode Toggle */}
        <DarkModeToggle />

        {/* Wallet Connect Button */}
        <WalletButton />
      </div>
    </nav>
  );
}