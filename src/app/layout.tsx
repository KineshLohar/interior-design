import type { Metadata } from "next";
import "./globals.css";

import { Inter, Lato, Playfair_Display } from 'next/font/google'

export const metadata: Metadata = {
  title: "Interior Website",
  description: "Generated by create next app",
};

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
})

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const lato = Lato({
  weight: "400",
  subsets: ['latin'],
  variable: '--font-lato'
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased scroll-smooth ${playfair.variable} ${inter.variable} ${lato.variable} vsc-initialized`}
      >
        {children}
      </body>
    </html>
  );
}
