"use client";
import { useEffect, useState } from "react";

export default function DarkModeToggle() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (localStorage.theme === "dark") {
      document.documentElement.classList.add("dark");
      setDarkMode(true);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = darkMode ? "light" : "dark";
    document.documentElement.classList.toggle("dark", !darkMode);
    localStorage.theme = newTheme;
    setDarkMode(!darkMode);
  };

  return (
    <button
      onClick={toggleTheme}
      className="px-3 py-2 rounded bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
    >
      {darkMode ? "🌙 Dark" : "☀️ Light"}
    </button>
  );
}