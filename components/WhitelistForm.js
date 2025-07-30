"use client";
import { useState } from "react";
import { supabase } from "../lib/SupabaseClient";

export default function WhitelistForm() {
  const [form, setForm] = useState({ name: "", email: "", wallet: "" });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const { error } = await supabase.from("whitelist").insert([form]);

    setLoading(false);
    if (error) {
      alert("Gagal mendaftar: " + error.message);
    } else {
      alert(`Terima kasih, ${form.name}! Anda telah mendaftar whitelist.`);
      setForm({ name: "", email: "", wallet: "" });
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-lg mx-auto bg-gray-100 dark:bg-gray-800 p-6 rounded-xl space-y-4"
    >
      <input
        className="w-full p-2 border rounded text-black"
        placeholder="Nama Lengkap"
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
      />
      <input
        className="w-full p-2 border rounded text-black"
        placeholder="Email"
        type="email"
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
      />
      <input
        className="w-full p-2 border rounded text-black"
        placeholder="Wallet Address"
        value={form.wallet}
        onChange={(e) => setForm({ ...form, wallet: e.target.value })}
      />
      <button
        disabled={loading}
        className="bg-ecoGreen text-white px-4 py-2 rounded w-full"
      >
        {loading ? "Loading..." : "Join Whitelist"}
      </button>
    </form>
  );
}