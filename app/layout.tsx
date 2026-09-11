import type { Metadata } from "next";
import { Rethink_Sans, WindSong } from "next/font/google";
import FallingDots from "@/components/FallingDots";
import CursorTrail from "@/components/CursorTrail";
import "./globals.css";

const rethinkSans = Rethink_Sans({
  variable: "--font-rethink-sans",
  subsets: ["latin"],
});

const heroScript = WindSong({
  variable: "--font-hero-script",
  weight: ["400", "500"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "StayCool",
  description:
    "StayCool: tu agenda de bienestar, imagen, higiene, actividades sociales y gastos, pensada para jóvenes.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      className={`${rethinkSans.variable} ${heroScript.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-brand-blue-deep">
        <FallingDots />
        <CursorTrail />
        {children}
      </body>
    </html>
  );
}
