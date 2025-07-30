import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="bg-ecoGreen text-white text-center py-20">
      <motion.h1
        className="text-4xl font-bold"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        EcoGreen – Blockchain for a Greener Future
      </motion.h1>
      <motion.p
        className="mt-3 text-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        Dukung aksi hijau global dengan teknologi blockchain.
      </motion.p>
      <div className="mt-6 space-x-4">
        <Link href="/whitelist" className="bg-white text-ecoGreen px-5 py-2 rounded-lg font-semibold">Join Whitelist</Link>
        <a href="#" className="border border-white px-5 py-2 rounded-lg">Buy Token</a>
      </div>
    </section>
  );
}