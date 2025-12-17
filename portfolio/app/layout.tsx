import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import StarsBackground from "../components/StarsBackground";
import ScrollArrow from "../components/ScrollArrow";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="relative overflow-x-hidden">
        <StarsBackground />
        <Navbar />
        {children}
        <Footer />
        <ScrollArrow />
      </body>
    </html>
  );
}
