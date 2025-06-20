// src/app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "./components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Planner de Boda",
  description: "Organizador de boda personalizado",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <div className="flex">
          <Navbar />
          <main className="flex-1 bg-neutral-50 min-h-screen p-4">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
