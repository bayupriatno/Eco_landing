"use client";
import Hero from "../components/Hero";
import TokenStats from "../components/TokenStats";

export const metadata = {
  title: "EcoGreen – Blockchain for a Greener Future",
  description: "EcoGreen token untuk mendukung aksi hijau global berbasis blockchain.",
  openGraph: {
    title: "EcoGreen – Blockchain for a Greener Future",
    description: "Dukung aksi hijau global dengan blockchain.",
    url: "https://ecogreen.com",
    siteName: "EcoGreen",
    images: [
      {
        url: "https://ecogreen.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "EcoGreen Token",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function Home() {
  return (
    <>
      <Hero />
      <TokenStats />
    </>
  );
}