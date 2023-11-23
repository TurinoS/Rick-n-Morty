import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import ContextApiProvider from "./context/ContextAPI";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rick n Morty",
  description: "Developed by TurinoS",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <ContextApiProvider>
        <body className={inter.className}>{children}</body>
      </ContextApiProvider>
    </html>
  );
}
