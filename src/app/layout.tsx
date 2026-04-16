import type { Metadata } from "next";

import { gymData } from "@/data/gym";

import "./globals.css";

export const metadata: Metadata = {
  title: gymData.metadataTitle,
  description: gymData.metadataDescription,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
