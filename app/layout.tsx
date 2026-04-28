import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin", "latin-ext"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "Masáže Poniklá | Relaxace pro tělo i mysl",
  description:
    "Profesionální masáže v Poniklé. Individuální přístup, klidné prostředí a kvalitní techniky pro zdravé tělo i mysl.",
  keywords: [
    "masáže poniklá",
    "klasická masáž",
    "sportovní masáž",
    "relaxační masáž",
    "regenerační masáž",
  ],
  openGraph: {
    title: "Masáže Poniklá",
    description: "Dopřejte si odpočinek ještě dnes.",
    type: "website",
    locale: "cs_CZ",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="cs" suppressHydrationWarning>
      <body className={`${inter.variable} ${playfair.variable} bg-stone-50 text-stone-800 antialiased`}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
