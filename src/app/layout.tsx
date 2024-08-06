import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "../../components/theme-provider";
import { NavBar } from "../../components/navbar";
import Footer from "./Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Matana Febis Week",
  description: "Febis Week Matana 2024",
  icons: "/matana-icon.png",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar />
        <ThemeProvider>{children}</ThemeProvider>
        <Footer />
      </body>
    </html>
  );
}
