"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="text-center py-20 bg-gradient-to-b from-green-50 to-white dark:from-gray-900 dark:to-gray-800">
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl font-extrabold text-ecoGreen mb-4"
      >
        🌱 Welcome to EcoGreen
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto"
      >
        A blockchain-powered token supporting global green initiatives for a
        sustainable future.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="mt-6 flex justify-center gap-4"
      >
        <a
          href="/whitelist"
          className="px-6 py-3 bg-ecoGreen text-white rounded-lg hover:bg-green-700 transition"
        >
          Join Whitelist
        </a>
        <a
          href="/roadmap"
          className="px-6 py-3 bg-white text-ecoGreen border border-ecoGreen rounded-lg hover:bg-green-50 transition"
        >
          View Roadmap
        </a>
      </motion.div>
    </section>
  );
}