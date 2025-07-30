"use client";
import { useState } from "react";

export default function LanguageSwitcher() {
  const [lang, setLang] = useState("EN");

  return (
    <select
      value={lang}
      onChange={(e) => setLang(e.target.value)}
      className="bg-white text-green-600 px-2 py-1 rounded"
    >
      <option>EN</option>
      <option>ID</option>
    </select>
  );
}