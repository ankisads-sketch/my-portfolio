import type { Metadata } from "next";
import { Cairo, Amiri, Space_Grotesk } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const cairo = Cairo({
  variable: "--font-cairo",
  subsets: ["arabic", "latin"],
});

const amiri = Amiri({
  variable: "--font-amiri",
  weight: ["400", "700"],
  subsets: ["arabic", "latin"],
  style: ["normal", "italic"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tahseen Mahdi - Portfolio",
  description: "Data Scientist & Developer Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" className="dark scroll-smooth overflow-x-hidden">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
        <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22 fill=%22%23ffb700%22 font-family=%22serif%22 font-weight=%22bold%22>T</text></svg>" />
      </head>
      <body
        className={`${cairo.variable} ${amiri.variable} ${spaceGrotesk.variable} bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 font-display min-h-screen overflow-x-hidden selection:bg-primary selection:text-black antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
