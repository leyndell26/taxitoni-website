import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Taxi Toni | Premium Taxi Service Bad Windsheim",
  description:
    "Ihr zuverlassiger Taxi-Service in Bad Windsheim. 24/7 verfugbar, moderne Fahrzeugflotte, faire Preise. Jetzt anrufen: 09841 - 29 97",
  keywords: "Taxi, Bad Windsheim, Mittelfranken, Flughafentransfer, Fahrdienst, Rollstuhl",
  openGraph: {
    title: "Taxi Toni | Premium Taxi Service",
    description: "Ihr zuverlassiger Taxi-Service in Bad Windsheim - 24/7 verfugbar",
    type: "website",
    locale: "de_DE",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
      </body>
    </html>
  );
}
