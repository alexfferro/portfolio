import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";

const inter = Inter({
  weight: ["400", "600", "800"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Alex Ferro",
  description: "Welcome to my portfolio !",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased p-2 md:p-6 lg:p-12`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
