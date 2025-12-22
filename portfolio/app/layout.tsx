import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

import ResponsiveNav from "../components/Home/Navbar/ResponsiveNav";
import ScrollToTop from "../components/ScrollToTop"; // ✅ ADD THIS
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Pulmi Vihansa",
  description: "Portfolio Website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${outfit.className} antialiased`}>
        <ResponsiveNav />
        <ScrollToTop /> {/* ✅ WORKS NOW */}
        {children}
        <ToastContainer theme="dark" />
      </body>
    </html>
  );
}
