import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Chu Hua Chang",
  description: "Created by Chu Hua Chang",
  icons: {
    icon: '/favicon.ico', // or your custom icon path
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <Navbar/>
        <main className="p-6 max-w-5xl mx-auto">
          {children}
        </main>

        <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center p-4 text-sm text-gray-500">
          This page was originally created by Chang Chu Hua using Next.js.
        </footer>

      </body>
    </html>
  );
}
