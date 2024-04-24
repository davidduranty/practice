import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { GeistSans } from "geist/font/sans";
import { Anek_Telugu } from "next/font/google";
import { cn } from "@/lib/utils";

const AnekTelugu = Anek_Telugu({subsets: ["latin"], variable: "--font-caption",})

export const metadata: Metadata = {
  title: "Portfolio-M",
  description: "Online creator and edicator about React, Tailwind, Next.js and Typescript.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className={cn(GeistSans.variable, AnekTelugu, "font-sans h-full bg-background text-foreground")}>{children}</body>
    </html>
  );
}
