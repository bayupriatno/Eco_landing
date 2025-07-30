"use client";
import { getRequestConfig } from "next-intl/server";

export default getRequestConfig(() => ({
  locales: ["en", "id"],
  defaultLocale: "en",
  messages: {
    en: require("./locales/en.json"),
    id: require("./locales/id.json"),
  },
}));