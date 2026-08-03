import type { Metadata } from "next";
import { Instrument_Serif, Inter } from "next/font/google";
import "./globals.css";

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-instrument-serif",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Aphotex Design — Estúdio Editorial de Design Digital",
  description:
    "Estúdio editorial de design premium. Criamos sites exclusivos para psicólogos, advogados, coaches, nutricionistas e consultores. Preços de lançamento — Edição 01.",
  openGraph: {
    title: "Aphotex Design — Estúdio Editorial de Design Digital",
    description:
      "Sites e design visual para profissionais que vivem da própria expertise. Presença digital à altura da autoridade que você já tem.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="pt-BR"
      className={`${instrumentSerif.variable} ${inter.variable}`}
      suppressHydrationWarning
    >
      <body>{children}</body>
    </html>
  );
}
