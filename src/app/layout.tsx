import "./globals.css";
import React from "react";
import { Inter } from "next/font/google";
import { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'TWRPG Guidebook',
  description: 'The World RPG Guidebook clone',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
