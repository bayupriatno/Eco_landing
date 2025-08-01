import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { NextIntlClientProvider } from "next-intl";

export const metadata = {
  title: "EcoGreen – Blockchain for a Greener Future",
  description: "EcoGreen Token Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen bg-white dark:bg-gray-900 dark:text-white transition-colors">
        <Navbar />
        <NextIntlClientProvider locale="en">
          <main className="flex-1">{children}</main>
        </NextIntlClientProvider>
        <Footer />
      </body>
    </html>
  );
}
