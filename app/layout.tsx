import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin", "latin-ext"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "Masáže Eva Koldovská | Relaxace pro tělo i mysl",
  description:
    "Masáže Evy Koldovské v Poniklé. Individuální masáže, Dornova metoda, měkké techniky, baňkování a další péče pro tělo i mysl.",
  keywords: [
    "masáže eva koldovská",
    "eva koldovská",
    "klasická masáž",
    "dornova metoda",
    "breussova masáž",
    "baňkování",
  ],
  openGraph: {
    title: "Masáže Eva Koldovská",
    description: "Dopřejte si odpočinek ještě dnes.",
    type: "website",
    locale: "cs_CZ",
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="cs">
      <body className={`${inter.variable} ${playfair.variable} bg-stone-50 text-stone-800 antialiased`}>
        {children}
      </body>
    </html>
  );
}
